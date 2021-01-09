import Component from "../component/Component"
import ComponentGroup from "../Component/ComponentGroup"
import IProvidesSeverities from "../Severity/IProvidesSeverities"
import Severity from "../Severity/Severity"
import Statusify from "../Statusify"

export class SeverityBuilderMixin implements IProvidesSeverities {
  _severities: SeverityBuilder[] = []

  severities(builders: SeverityBuilder[]) {
    this._severities = builders
    return this
  }
  
  async getSeverities(statusify: Statusify): Promise<Severity[]> {
    return this._severities.map(s => s.build())
  }

  async getSeverityForGroup(group: ComponentGroup, statusify: Statusify): Promise<Severity> {
    throw new Error("Method not implemented.")
  }

  async getSeverityForComponent(component: Component, statusify: Statusify): Promise<Severity> {
    throw new Error("Method not implemented.")
  }
}

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