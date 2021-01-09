import IProvidesComponents from "./Component/IProvidesComponents"
import IProvidesSeverities from "./Severity/IProvidesSeverities"
import IProvidesIncidents from './Incident/IProvidesIncidents'
import { EventEmitter } from 'events'

export interface StatusifyOptions {
  componentProvider: IProvidesComponents
  severityProvider: IProvidesSeverities
  incidentProvider: IProvidesIncidents
}

export default class Statusify extends EventEmitter {
  private componentProvider: IProvidesComponents
  private severityProvider: IProvidesSeverities
  private incidentProvider: IProvidesIncidents

  constructor(options: StatusifyOptions) {
    super()
    
    this.componentProvider = options.componentProvider
    this.severityProvider = options.severityProvider
    this.incidentProvider = options.incidentProvider
  }

  //
  // Components
  //
  /**
   * Get all of the component groups
   */
  async getComponentGroups() {
    return this.componentProvider.getComponents(this);
  }

  /**
   * Get all of the components from the component groups
   */
  async getComponents() {
    const components = [];

    (await this.getComponentGroups()).forEach(async (group) => {
      components.push(...(await group.getComponents())) 
    })

    return components
  }

  //
  // Incidents
  //
  async getIncidents() {
    return this.incidentProvider.getIncidents()
  }

  //
  // Severities
  //
  async getSeverities() {
    return this.severityProvider.getSeverities(this)
  }
}