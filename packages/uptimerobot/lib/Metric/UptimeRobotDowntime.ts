import { MetricType } from "@statusify/core/dist/Metric/Metric";
import IDowntimeMetricRecord from "@statusify/core/dist/Metric/IDowntimeMetricRecord"
import IMetricRange from "@statusify/core/dist/Metric/IMetricRange";
import UptimeRobotCore from "..";
import { GenericUptimeRobotMetric, UptimeRobotGenericMetricCParams } from "./GenericUptimeRobotMetric";
import * as moment from 'moment'
import ILatencyMetricRecord from "@statusify/core/dist/Metric/ILatencyMetricRecord";
import UseCache from "../Util/UseCache";
import { CACHE_LIFETIME, MILLISECONDS_IN_DAY } from "../constants";

export default class UptimeRobotDowntime extends GenericUptimeRobotMetric<IDowntimeMetricRecord> {
  private readonly getDowntimes: (key: IMetricRange, ignoreCache?: boolean) => Promise<ILatencyMetricRecord[]>;

  //
  // Constructor
  //
  constructor(urc: UptimeRobotCore, params: UptimeRobotGenericMetricCParams) {
    super(MetricType.DOWNTIME, urc, params);

    this.getDowntimes = UseCache<IMetricRange, IDowntimeMetricRecord[]>(CACHE_LIFETIME * 1000, this.pullNewData.bind(this))[0]
  }

  /**
   * @inheritdoc
   */
  getPeriod(range: IMetricRange): Promise<IDowntimeMetricRecord[]> {
    return this.getDowntimes(range);
  }

  /**
   * @inheritdoc
   */
  getAverage(range: IMetricRange): Promise<IDowntimeMetricRecord> {
    throw new Error("Method not implemented.");
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
      .map( (pr: string) => MILLISECONDS_IN_DAY - (MILLISECONDS_IN_DAY * (parseFloat(pr) / 100)) )
  }
}