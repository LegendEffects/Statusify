import AttributeStorage, { AttributeStorageType } from "../Util/AttributeStorage";

import IMetricRange from "./IMetricRange";
import MetricRecord from "./MetricRecord";

export enum MetricType {
  DOWNTIME = 'downtime',
  LATENCY = 'latency',
  CUSTOM = 'custom'
}

export interface MetricCParams {
  type: MetricType
  id: string
  name: string
  description?: string
  attributes?: AttributeStorageType
}

export abstract class Metric<T extends MetricRecord> extends AttributeStorage {
  /**
   * Type of Metric
   */
  public readonly type: MetricType;

  /**
   * ID of the Metric
   */
  public readonly id: string;
  
  /**
   * Name of the Metric
   */
  public readonly name: string;

  /**
   * Description of the Metric
   */
  public readonly description?: string;

  //
  // Constructor
  //
  constructor({ type, id, name, description, attributes }: MetricCParams) {
    super(attributes);

    this.type = type;
    this.id = id;
    this.name = name;
    this.description = description;
  }

  abstract getPeriod(range: IMetricRange): Promise<T[]>;

  abstract getAverage(range: IMetricRange): Promise<T>
}

export default Metric;