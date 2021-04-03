import ILatencyMetricRecord from '@statusify/core/dist/Metric/ILatencyMetricRecord';
import IMetricRange from '@statusify/core/dist/Metric/IMetricRange';
import UptimeRobotCore from '..';
import dayjs from 'dayjs';
import { MetricType } from '@statusify/core/dist/Metric/Metric'
import { GenericUptimeRobotMetric, UptimeRobotGenericMetricCParams } from './GenericUptimeRobotMetric';

interface UptimeRobotResponseTime {
  datetime: number,
  value: number
}

export default class UptimeRobotLatency extends GenericUptimeRobotMetric<ILatencyMetricRecord> {
  constructor(urc: UptimeRobotCore, params: UptimeRobotGenericMetricCParams) {
    super(MetricType.LATENCY, urc, params)
    this.urc.useMonitor(this.monitorID, MetricType.LATENCY);
  }

  /**
   * @inheritdoc
   */
  async getPeriod(range: IMetricRange): Promise<ILatencyMetricRecord[]> {
    const data = await this.fetchData(range);

    return data.response_times.map((t: UptimeRobotResponseTime) => ({
      time: new Date(t.datetime * 1000),
      value: t.value
    }));
  }

  /**
   * @inheritdoc
   * This simply uses the get period and then averages the values
   */
  async getAverage(range: IMetricRange): Promise<ILatencyMetricRecord> {
    const data = await this.urc.getMonitor(range, this.monitorID, MetricType.LATENCY);

    return {
      time: new Date(),
      value: parseFloat(data.average_response_time)
    };
  }

  //
  // Private
  //
  private async fetchData(range: IMetricRange) {
    let computedRange = range;
    
    if(dayjs(range.end).diff(range.start, 'days') > 7) {
      console.warn("Range cannot go past 7 days.")
      computedRange.start = dayjs(range.end).startOf('day').subtract(7, 'days').toDate();
    }

    return await this.urc.getMonitor(computedRange, this.monitorID, MetricType.LATENCY);
  }
}