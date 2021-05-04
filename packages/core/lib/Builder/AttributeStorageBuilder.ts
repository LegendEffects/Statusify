import { AttributeStorageType } from "../Util/AttributeStorage";

export default class AttributeStorageBuilder {
  protected _attributes: AttributeStorageType = {};

  public attribute(key: string, value: any) {
    this._attributes[key] = value;
    return this;
  }
}