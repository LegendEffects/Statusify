import { AxiosInstance } from "axios";
import { MetricType } from "@statusify/core/dist/Metric/Metric";
import IMetricRange from "@statusify/core/dist/Metric/IMetricRange";
import IUptimeRobotMonitorResponse from "./Types/IUptimeRobotMonitorResponse";
export default class UptimeRobotCore {
    private static readonly API_URL;
    readonly axios: AxiosInstance;
    readonly getDowntimeRes: (key: IMetricRange, ignoreCache?: boolean) => Promise<IUptimeRobotMonitorResponse>;
    readonly getLatencyRes: (key: IMetricRange, ignoreCache?: boolean) => Promise<IUptimeRobotMonitorResponse>;
    private monitorIds;
    constructor(apiKey: string, cacheLifetime?: number);
    useMonitor(id: number, type: MetricType): void;
    getMonitor(key: IMetricRange, id: number, type: MetricType, ignoreCache?: boolean): Promise<import("./Types/IUptimeRobotMonitor").default>;
    private getDowntimes;
    private getLatencies;
}
