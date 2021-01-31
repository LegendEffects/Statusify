import Metric, { MetricCParams, MetricType } from "@statusify/core/lib/Metric/Metric";
import MetricRecord from "@statusify/core/lib/Metric/MetricRecord";
import UptimeRobotCore from "..";

export interface UptimeRobotGenericMetricCParams extends Omit<MetricCParams, 'type'> {
  monitorID: number
}

export abstract class GenericUptimeRobotMetric<T extends MetricRecord> extends Metric<T> {
  protected readonly urc: UptimeRobotCore;
  protected readonly monitorID: number;

  constructor(type: MetricType, urc: UptimeRobotCore, { monitorID, ...inherited }: UptimeRobotGenericMetricCParams) {
    super({type, ...inherited});

    this.urc = urc;
    this.monitorID = monitorID;
  }
}