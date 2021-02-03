import Metric from "../Metric/Metric";
import MetricRecord from "../Metric/MetricRecord";
export interface ComponentCParams {
    id: string;
    name: string;
    description?: string;
    metrics?: Metric<MetricRecord>[];
}
export default class Component {
    readonly id: string;
    readonly name: string;
    readonly description?: string;
    readonly metrics?: Metric<MetricRecord>[];
    constructor({ id, name, description, metrics }: ComponentCParams);
}
