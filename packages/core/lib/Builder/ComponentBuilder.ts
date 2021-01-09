import Component from "../component/Component"
import ComponentGroup from "../Component/ComponentGroup"
import IProvidesComponents from "../Component/IProvidesComponents"
import Statusify from "../Statusify"

export class ComponentBuilderMixin extends Base implements IProvidesComponents {
  _groups: ComponentGroupBuilder[] = []

  groups(builders: ComponentGroupBuilder[]) {
    this._groups = builders
    return this
  }

  async getComponents(statusify: Statusify): Promise<ComponentGroup[]> {
    return this._groups.map(g => g.build())
  }
}

/**
 * Group Builder
 */
export class ComponentGroupBuilder {
  protected _name?: string
  protected _description?: string
  protected _components: ComponentBuilder[] = []

  public name(name: string) {
    this._name = name
    return this
  }

  public description(description: string) {
    this._description = description
    return this
  }

  public components(builders: ComponentBuilder[]) {
    this._components = builders
    return this
  }

  /**
   * @ignore
   */
  public build() {
    const group = new ComponentGroup({
      name: this._name,
      description: this._description
    })

    group.addComponents(this._components.map(c => c.build()))
    return group
  }
}

export function group() {
  return new ComponentGroupBuilder()
}

/**
 * Component Builder
 */
export class ComponentBuilder {
  protected _id: string
  protected _name: string
  protected _description?: string

  constructor(id: string) {
    this._id = id
  }

  public name(name: string) {
    this._name = name
    return this
  }

  public description(description: string) {
    this._description = description
    return this
  }

  /**
   * @ignore
   */
  public build() {
    return new Component({
      id: this._id,
      name: this._name,
      description: this._description
    });
  }
}

export function component(id: string) {
  return new ComponentBuilder(id)
}