import Component from "../Component/Component"

export interface SeverityCParams {
  id: string;
  name: string;
}

export default abstract class Severity {
  /**
   * ID of the severity (For Lookups and Reference)
   */
  private id: string

  /**
   * Friendly Name
   */
  private name: string

  //
  // Constructor
  //
  constructor({ id, name }: SeverityCParams) {
    this.id = id;
    this.name = name;
  }

  /**
   * Checks if the severity has been achieved
   */
  abstract achieved(component: Component): Promise<Boolean>
}