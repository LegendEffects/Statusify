import AttributeStorage, { AttributeStorageType } from "../Util/AttributeStorage";
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
    attributes?: AttributeStorageType;
}
export declare abstract class Metric<T extends MetricRecord> extends AttributeStorage {
    readonly type: MetricType;
    readonly id: string;
    readonly name: string;
    readonly description: string;
    constructor({ type, id, name, description, attributes }: MetricCParams);
    abstract getPeriod(range: IMetricRange): Promise<T[]>;
    abstract getAverage(range: IMetricRange): Promise<T>;
}
export default Metric;
