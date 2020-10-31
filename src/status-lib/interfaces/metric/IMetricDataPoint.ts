export default interface IMetricDataPoint {
  /**
   * Unix Timestamp of the data point
   */
  timestamp: number

  /**
   * Value of the datapoint
   */
  value: number
}
