import MetricRecord from "./MetricRecord";

export default interface ILatencyMetricRecord extends MetricRecord { 
  /**
   * When the reading was taken
   */
  time: Date

  /**
   * Latency (MS)
   */
  value: number
}