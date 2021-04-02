import { MetricType } from "@statusify/core/dist/Metric/Metric";
import IDowntimeMetricRecord from "@statusify/core/dist/Metric/IDowntimeMetricRecord"
import IMetricRange from "@statusify/core/dist/Metric/IMetricRange";
import UptimeRobotCore from "..";
import { GenericUptimeRobotMetric, UptimeRobotGenericMetricCParams } from "./GenericUptimeRobotMetric";
import * as moment from 'moment'
import UseCache from "../Util/UseCache";
import { CACHE_LIFETIME, MILLISECONDS_IN_DAY } from "../constants";

export default class UptimeRobotDowntime extends GenericUptimeRobotMetric<IDowntimeMetricRecord> {
  private readonly getDowntimes: (key: IMetricRange, ignoreCache?: boolean) => Promise<IDowntimeMetricRecord[]>;

  //
  // Constructor
  //
  constructor(urc: UptimeRobotCore, params: UptimeRobotGenericMetricCParams) {
    super(MetricType.DOWNTIME, urc, params);

    this.getDowntimes = UseCache<IMetricRange, IDowntimeMetricRecord[]>(
      CACHE_LIFETIME * 1000,
      this.pullNewData.bind(this)
    )[0]
  }

  /**
   * @inheritdoc
   */
  getPeriod(range: IMetricRange): Promise<IDowntimeMetricRecord[]> {
    return this.getDowntimes(this.changeHashCode(range));
  }

  /**
   * @inheritdoc
   */
  async getAverage(range: IMetricRange): Promise<IDowntimeMetricRecord> {
    const downtimes = await this.getDowntimes(this.changeHashCode(range));

    return {
      time: range.start,
      value: downtimes.map(v => v.value).reduce((a, b) => a + b) / downtimes.length
    }
  }


  //
  // Private
  //
  private async pullNewData(range: IMetricRange): Promise<IDowntimeMetricRecord[]> {
    // Get the days
    const days = Math.round(moment.duration(moment(range.end).diff(moment(range.start))).asDays())

    const ranges = [...Array(days)].map((_, i) => {      
      const m = moment().subtract(i, 'days')
      return `${m.startOf('day').unix()}_${m.endOf('day').unix()}`
    }).join('-')

    const { data } = await this.urc.axios.post('getMonitors', {
      monitors: String(this.monitorID),
      custom_uptime_ranges: ranges,
      custom_down_durations: 1
    })

    return data.monitors[0].custom_uptime_ranges
      .split('-')
      .map((pr: string, i: number): IDowntimeMetricRecord => {
        return {
          time: moment(range.end).subtract(i, 'days').toDate(),
          value: MILLISECONDS_IN_DAY - (MILLISECONDS_IN_DAY * (parseFloat(pr) / 100))
        }
      })
      .filter(r => r.value > 0)
  }

  private changeHashCode(range: IMetricRange): IMetricRange {
    range.start.toString = () => String(range.start.getTime());
    range.end.toString = () => String(range.end.getTime());

    return range;
  }
}