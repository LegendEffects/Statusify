import ISeverity from '../../interfaces/severity/ISeverity'
import ISeverityConfig from '../../interfaces/severity/ISeverityConfig'
import ISeverityRegistry from '../../interfaces/severity/ISeverityRegistry'

export default class Severity implements ISeverity {
  private registry: ISeverityRegistry

  id: string
  displayName: string
  percentage?: number

  constructor({
    id,
    displayName,
    percentage,
    registry,
  }: ISeverityConfig & { registry: ISeverityRegistry }) {
    this.id = id
    this.displayName = displayName
    this.percentage = percentage
    this.registry = registry
  }

  worseThan(_severity: ISeverity): ISeverity {
    throw new Error('Method not implemented.')
  }
}
