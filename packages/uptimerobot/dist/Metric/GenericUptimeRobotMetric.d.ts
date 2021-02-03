import Metric, { MetricCParams, MetricType } from "@statusify/core/dist/Metric/Metric";
import MetricRecord from "@statusify/core/dist/Metric/MetricRecord";
import UptimeRobotCore from "..";
export interface UptimeRobotGenericMetricCParams extends Omit<MetricCParams, 'type'> {
    monitorID: number;
}
export declare abstract class GenericUptimeRobotMetric<T extends MetricRecord> extends Metric<T> {
    protected readonly urc: UptimeRobotCore;
    protected readonly monitorID: number;
    constructor(type: MetricType, urc: UptimeRobotCore, { monitorID, ...inherited }: UptimeRobotGenericMetricCParams);
}
