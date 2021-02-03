import MetricRecord from "./MetricRecord";
export default interface ILatencyMetricRecord extends MetricRecord {
    time: Date;
    value: number;
}
