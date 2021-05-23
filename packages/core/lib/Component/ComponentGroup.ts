import AttributeStorage, { AttributeStorageType } from "../Util/AttributeStorage";

import Component from "./Component"

export interface ComponentGroupCParams {
  name?: string;
  description?: string;
  attributes?: AttributeStorageType;
}

export default class ComponentGroup extends AttributeStorage {
  /**
   * Name of the group
   */
  public readonly name?: string

  /**
   * Optional description of the group
   */
  public readonly description?: string

  /**
   * Components in the group
   */
  public readonly components: Component[] = []

  //
  // Constructor
  //
  constructor({ name, description, attributes }: ComponentGroupCParams) {
    super(attributes);

    this.name = name;
    this.description = description;
  }

  //
  // Component Registration
  //
  async addComponent(component: Component) {
    this.components.push(component);
  }

  async addComponents(components: Component[]) {
    for(const component of components) {
      this.addComponent(component);
    }
  }

  //
  // Getters
  //
  async getName() {
    return this.name;
  }

  async getDescription() {
    return this.description;
  }

  async getComponents() {
    return this.components;
  }
}