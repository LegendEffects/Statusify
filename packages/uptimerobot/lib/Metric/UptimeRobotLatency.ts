import IMetricRange from '@statusify/core/dist/Metric/IMetricRange';
import { MetricType } from '@statusify/core/dist/Metric/Metric'
import ILatencyMetricRecord from '@statusify/core/dist/Metric/ILatencyMetricRecord'
import UptimeRobotCore from '..';
import * as moment from 'moment';
import { CACHE_LIFETIME } from '../constants';
import UseCache from '../Util/UseCache';
import { GenericUptimeRobotMetric, UptimeRobotGenericMetricCParams } from './GenericUptimeRobotMetric';

interface UptimeRobotResponseTime {
  datetime: number,
  value: number
}

export default class UptimeRobotLatency extends GenericUptimeRobotMetric<ILatencyMetricRecord> {
  private readonly getLatency: (key: IMetricRange, ignoreCache?: boolean) => Promise<ILatencyMetricRecord[]>;

  constructor(urc: UptimeRobotCore, params: UptimeRobotGenericMetricCParams) {
    super(MetricType.LATENCY, urc, params)
    //
    // Use Cache
    this.getLatency = UseCache<IMetricRange, ILatencyMetricRecord[]>(CACHE_LIFETIME * 1000, this.pullNewData.bind(this))[0]
  }

  /**
   * @inheritdoc
   */
  async getPeriod(range: IMetricRange): Promise<ILatencyMetricRecord[]> {
    // Enforce range limit
    if(moment.duration(moment(range.end).diff(moment(range.start))).asDays() > 7) {
      throw new Error("Range cannot go past 7 days.")
    }

    return this.getLatency(range)
  }

  /**
   * @inheritdoc
   * This simply uses the get period and then averages the values
   */
  async getAverage(range: IMetricRange): Promise<ILatencyMetricRecord> {
    const dataPoints = await this.getPeriod(range)

    const sum = dataPoints.reduce((r, i) => ({
      time: r.time,
      value: r.value + i.value
    }))

    return {
      time: new Date(),
      value: sum.value / dataPoints.length
    };
  }

  //
  // Private
  //
  private async pullNewData(range: IMetricRange): Promise<ILatencyMetricRecord[]> {
    const { data } = await this.urc.axios.post('getMonitors', {
      monitors: String(this.monitorID),
      response_times: 1,
      response_times_start_date: (range.start.getTime() / 1000),
      response_times_end_date: (range.end.getTime() / 1000)
    })

    return data.monitors[0].response_times.map((t: UptimeRobotResponseTime) => ({
      time: new Date(t.datetime * 1000),
      value: t.value
    }))
  }
}