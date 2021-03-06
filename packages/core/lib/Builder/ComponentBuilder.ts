import AttributeStorageBuilder from "./AttributeStorageBuilder"
import Component from "../Component/Component"
import ComponentGroup from "../Component/ComponentGroup"
import IProvidesComponents from "../Component/IProvidesComponents"
import Metric from "../Metric/Metric"
import MetricRecord from "../Metric/MetricRecord"
import Statusify from ".."

export class ComponentBuilderMixin implements IProvidesComponents {
  _groups: ComponentGroupBuilder[] = [];
  
  groups(builders: ComponentGroupBuilder[]) {
    this._groups = builders;
    return this;
  }

  /**
   * Gets the component groups for the service
   * @param statusify Statusify core
   */
  async getComponentGroups(_statusify: Statusify): Promise<ComponentGroup[]> {
    return this._groups.map(g => g.build());
  }

  /**
   * Gets the components for the service
   * @param statusify Statusify core
   */
  async getComponents(statusify: Statusify): Promise<Component[]> {
    const components: Component[] = [];

    (await this.getComponentGroups(statusify)).forEach(async (group) => {
      components.push(...(await group.getComponents()));
    })

    return components;
  }

  /**
   * Gets a component by its ID
   * @param statusify Statusify core
   * @param id Component ID
   */
  async getComponent(statusify: Statusify, id: string): Promise<Component | null> {
    const found = (await this.getComponents(statusify)).find(c => c.id === id);
    return (found === undefined) ? null : found;
  }
}

/**
 * Group Builder
 */
export class ComponentGroupBuilder extends AttributeStorageBuilder {
  protected _name?: string
  protected _description?: string
  protected _components: ComponentBuilder[] = []

  public name(name: string) {
    this._name = name;
    return this;
  }

  public description(description: string) {
    this._description = description;
    return this;
  }

  public components(builders: ComponentBuilder[]) {
    this._components = builders;
    return this;
  }

  /**
   * @ignore
   */
  public build() {
    const group = new ComponentGroup({
      name: this._name,
      description: this._description,
      attributes: this._attributes,
    })

    group.addComponents(this._components.map(c => c.build()));
    return group;
  }
}

export function group() {
  return new ComponentGroupBuilder();
}

/**
 * Component Builder
 */
export class ComponentBuilder extends AttributeStorageBuilder {
  protected _id: string
  protected _name?: string
  protected _description?: string
  protected _metrics?: Metric<MetricRecord>[] 

  constructor(id: string) {
    super();
    this._id = id;
  }

  public name(name: string) {
    this._name = name;
    return this;
  }

  public description(description: string) {
    this._description = description;
    return this;
  }

  public metric(metric: Metric<MetricRecord>) {
    if(this._metrics === undefined) this._metrics = [];
    this._metrics.push(metric);
    return this;
  }

  /**
   * @ignore
   */
  public build() {
    return new Component({
      id: this._id,
      name: this._name,
      description: this._description,
      metrics: this._metrics,
      attributes: this._attributes,
    });
  }
}

export function component(id: string) {
  return new ComponentBuilder(id)
}