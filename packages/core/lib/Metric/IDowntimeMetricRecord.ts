import MetricRecord from "./MetricRecord";

export default interface IDowntimeMetricRecord extends MetricRecord {
  /**
   * When the downtime started
   */
  time: Date

  /**
   * Time in MS of how long it was down
   */
  value: number
}