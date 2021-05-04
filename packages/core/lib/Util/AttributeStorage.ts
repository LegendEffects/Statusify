export type AttributeStorageType = {[key: string]: any};

export default class AttributeStorage {
  /**
   * Custom attributes, useful for integration settings
   */
  public readonly attributes: AttributeStorageType

  constructor(attributes?: AttributeStorageType) {
    this.attributes = attributes ?? {};
  }

  //
  // Attribute modification
  //
  async setAttribute(key: string, value: any) {
    this.attributes[key] = value;
  }

  async getAttribute(key: string) {
    return this.attributes[key];
  }

  async removeAttribute(key: string) {
    delete this.attributes[key];
  }

  async getAttributes() {
    return this.attributes;
  }
}