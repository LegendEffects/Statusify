import { GenericUptimeRobotMetric, UptimeRobotGenericMetricCParams } from "./GenericUptimeRobotMetric";

import IDowntimeMetricRecord from "@statusify/core/dist/Metric/IDowntimeMetricRecord"
import IMetricRange from "@statusify/core/dist/Metric/IMetricRange";
import { MILLISECONDS_IN_DAY } from "../constants";
import { MetricType } from "@statusify/core/dist/Metric/Metric";
import UptimeRobotCore from "..";
import dayjs from "dayjs";

export default class UptimeRobotDowntime extends GenericUptimeRobotMetric<IDowntimeMetricRecord> {

  //
  // Constructor
  //
  constructor(urc: UptimeRobotCore, params: UptimeRobotGenericMetricCParams) {
    super(MetricType.DOWNTIME, urc, params);
    this.urc.useMonitor(this.monitorID, MetricType.DOWNTIME);
  }

  /**
   * @inheritdoc
   */
  getPeriod(range: IMetricRange): Promise<IDowntimeMetricRecord[]> {
    return this.fetchData(range);
  }

  /**
   * @inheritdoc
   */
  async getAverage(range: IMetricRange): Promise<IDowntimeMetricRecord> {
    const downtimes = await this.getPeriod(range);

    return {
      time: range.start,
      value: downtimes.map(v => v.value).reduce((a, b) => a + b) / downtimes.length
    }
  }

  //
  // Private
  //
  private async fetchData(range: IMetricRange) {
    const data = await this.urc.getMonitor(range, this.monitorID, MetricType.DOWNTIME);

    if(!data) {
      return [];
    }

    return (data.custom_uptime_ranges as string).split('-')
      .map((pr: string, i: number): IDowntimeMetricRecord => {
        return {
          time: dayjs(range.end).subtract(i, 'days').toDate(),
          value: MILLISECONDS_IN_DAY - (MILLISECONDS_IN_DAY * (parseFloat(pr) / 100))
        }
      })
      .filter(r => r.value > 0)
  }
}