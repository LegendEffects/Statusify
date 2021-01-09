import Component from "./Component/Component"
import ComponentGroup from "./component/ComponentGroup"
import IProvidesComponents from "./Component/IProvidesComponents"
import IProvidesSeverities from "./Severity/IProvidesSeverities"
import Severity from "./Severity/Severity"
import Statusify from "./Statusify"

/**
 * Builder
 */
export class Builder implements IProvidesComponents, IProvidesSeverities {
  protected _groups: ComponentGroupBuilder[] = []
  protected _severities: SeverityBuilder[] = []
  
  groups(builders: ComponentGroupBuilder[]) {
    this._groups = builders
    return this
  }

  severities(builders: SeverityBuilder[]) {
    this._severities = builders
    return this
  }
  
  async getComponents(statusify: Statusify): Promise<ComponentGroup[]> {
    return this._groups.map(g => g.build())
  }
  
  async getSeverities(statusify: Statusify): Promise<Severity[]> {
    return this._severities.map(s => s.build())
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

/**
 * Severity Builder (ABSTRACT)
 */
export abstract class SeverityBuilder {
  protected _name: string
  protected _id: string

  constructor(id: string) {
    this._id = id
  }

  public name(name: string) {
    this._name = name
    return this
  }

  /**
   * @ignore
   */
  public abstract build(): Severity
}

//
// Utility Functions
//
export function group() {
  return new ComponentGroupBuilder();
}

export function component(id: string) {
  return new ComponentBuilder(id);
}

export function builder() {
  return new Builder();
}