import IMetricDataPoint from './IMetricDataPoint'
import IMetricSummary from './IMetricSummary'

export default interface IMetric {
  /**
   * Name of the Metric
   */
  name: string

  /**
   * Summary of details for the metric
   */
  summary: IMetricSummary

  /**
   * DataPoints of the Metric
   */
  data: IMetricDataPoint[]
}
