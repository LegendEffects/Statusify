import IDowntimeMetricRecord from "@statusify/core/dist/Metric/IDowntimeMetricRecord";
import IMetricRange from "@statusify/core/dist/Metric/IMetricRange";
import UptimeRobotCore from "..";
import { GenericUptimeRobotMetric, UptimeRobotGenericMetricCParams } from "./GenericUptimeRobotMetric";
export default class UptimeRobotDowntime extends GenericUptimeRobotMetric<IDowntimeMetricRecord> {
    private readonly getDowntimes;
    constructor(urc: UptimeRobotCore, params: UptimeRobotGenericMetricCParams);
    getPeriod(range: IMetricRange): Promise<IDowntimeMetricRecord[]>;
    getAverage(range: IMetricRange): Promise<IDowntimeMetricRecord>;
    private pullNewData;
}
