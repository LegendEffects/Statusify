import AttributeStorage, { AttributeStorageType } from "../Util/AttributeStorage";

import Component from "../Component/Component"

export interface SeverityCParams {
  id: string;
  name: string;
  attributes?: AttributeStorageType;
}

export default abstract class Severity extends AttributeStorage {
  /**
   * ID of the severity (For Lookups and Reference)
   */
  public readonly id: string

  /**
   * Friendly Name
   */
  public readonly name: string

  //
  // Constructor
  //
  constructor({ id, name, attributes }: SeverityCParams) {
    super(attributes);
    this.id = id;
    this.name = name;
  }

  /**
   * Checks if the severity has been achieved
   */
  abstract achieved(component: Component): Promise<Boolean>
}