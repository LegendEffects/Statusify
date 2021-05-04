import AttributeStorage, { AttributeStorageType } from "../Util/AttributeStorage";
import Metric from "../Metric/Metric";
import MetricRecord from "../Metric/MetricRecord";
export interface ComponentCParams {
    id: string;
    name: string;
    description?: string;
    metrics?: Metric<MetricRecord>[];
    attributes?: AttributeStorageType;
}
export default class Component extends AttributeStorage {
    readonly id: string;
    readonly name: string;
    readonly description?: string;
    readonly metrics?: Metric<MetricRecord>[];
    constructor({ id, name, description, metrics, attributes }: ComponentCParams);
}
