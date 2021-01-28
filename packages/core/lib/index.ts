import IProvidesComponents from "./Component/IProvidesComponents"
import IProvidesSeverities from "./Severity/IProvidesSeverities"
import IProvidesIncidents, { IncidentsQuery } from './Incident/IProvidesIncidents'
import { EventEmitter } from 'events'
import Component from "./component/Component"
import ICalculatesSeverities from "./Severity/ICalculatesSeverities"
import ComponentGroup from "./Component/ComponentGroup"

export interface StatusifyOptions {
  componentProvider: IProvidesComponents
  incidentProvider: IProvidesIncidents
  severityProvider: IProvidesSeverities
  severityCalculator: ICalculatesSeverities
}

export default class Statusify extends EventEmitter {
  private componentProvider: IProvidesComponents
  private incidentProvider: IProvidesIncidents
  private severityProvider: IProvidesSeverities
  private severityCalculator: ICalculatesSeverities

  constructor(options: StatusifyOptions) {
    super()
    
    this.componentProvider = options.componentProvider
    this.severityProvider = options.severityProvider
    this.incidentProvider = options.incidentProvider
    this.severityCalculator = options.severityCalculator
  }

  //
  // Components
  //
  /**
   * Get all of the component groups
   */
  async getComponentGroups() {
    return this.componentProvider.getComponentGroups(this)
  }

  /**
   * Get all of the components from the component groups
   */
  async getComponents(): Promise<Component[]> {
    return this.componentProvider.getComponents(this)
  }

  /**
   * Gets a specific component
   * @param id ID of the component
   * @return Component if found, otherwise null
   */
  async getComponent(id: string) {
    return this.componentProvider.getComponent(this, id)
  }

  //
  // Incidents
  //
  async getIncident(id: string) {
    return this.incidentProvider.getIncident(this, id)
  }

  async getIncidents(query?: IncidentsQuery) {
    return this.incidentProvider.getIncidents(this, query)
  }

  async getIncidentsFor(component: Component, query: IncidentsQuery) {
    return this.incidentProvider.getIncidentsFor(this, component, query)
  }

  //
  // Severities
  //
  async getSeverities() {
    return this.severityProvider.getSeverities(this)
  }
  
  async getSeverityForComponent(component: Component) {
    return this.severityCalculator.getSeverityForComponent(component, this)
  }
  
  async getSeverityForGroup(group: ComponentGroup) {
    return this.severityCalculator.getSeverityForGroup(group, this)
  }

  async getSeverity(id: string) {
    return (await this.getSeverities()).find(s => s.id === id)
  }
}