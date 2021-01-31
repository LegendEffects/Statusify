import Metric from "../Metric/Metric";
import MetricRecord from "../Metric/MetricRecord";

export interface ComponentCParams {
  id: string
  name: string
  description?: string
  metrics?: Metric<MetricRecord>[];
}

export default class Component {
  /**
   * ID of the component
   */
  public readonly id: string;
  
  /**
   * Name of the component
   */
  public readonly name: string;

  /**
   * Description of the component
   */
  public readonly description?: string;

  /**
   * Metrics of the component
   */
  public readonly metrics?: Metric<MetricRecord>[];

  
  //
  // Constructor
  //
  constructor({ id, name, description, metrics }: ComponentCParams) {
    this.id = id
    this.name = name
    this.description = description
    this.metrics = metrics;
  }
}