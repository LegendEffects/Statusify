import IMetricRange from "./IMetricRange";
import MetricRecord from "./MetricRecord";
export declare enum MetricType {
    DOWNTIME = "downtime",
    LATENCY = "latency",
    CUSTOM = "custom"
}
export interface MetricCParams {
    type: MetricType;
    id: string;
    name: string;
    description?: string;
}
export declare abstract class Metric<T extends MetricRecord> {
    readonly type: MetricType;
    readonly id: string;
    readonly name: string;
    readonly description: string;
    constructor({ type, id, name, description }: MetricCParams);
    abstract getPeriod(range: IMetricRange): Promise<T[]>;
    abstract getAverage(range: IMetricRange): Promise<T>;
}
export default Metric;
