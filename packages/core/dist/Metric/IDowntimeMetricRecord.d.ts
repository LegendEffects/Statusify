import MetricRecord from "./MetricRecord";
export default interface IDowntimeMetricRecord extends MetricRecord {
    time: Date;
    value: number;
}
