import AttributeStorageBuilder from "./AttributeStorageBuilder"
import IProvidesSeverities from "../Severity/IProvidesSeverities"
import Severity from "../Severity/Severity"
import Statusify from ".."

export class SeverityBuilderMixin implements IProvidesSeverities {
  _severities: SeverityBuilder[] = []

  severities(builders: SeverityBuilder[]) {
    this._severities = builders
    return this
  }
  
  async getSeverities(statusify: Statusify): Promise<Severity[]> {
    return this._severities.map(s => s.build())
  }

  async getSeverity(statusify: Statusify, id: string): Promise<Severity> {
    const found = (await this.getSeverities(statusify)).find(s => s.id === id)
    return (found === undefined) ? null : found
  }
}

export abstract class SeverityBuilder extends AttributeStorageBuilder {
  protected _name: string
  protected _id: string

  constructor(id: string) {
    super();
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