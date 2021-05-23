import IProvidesIncidents, { IncidentsQuery } from './Incident/IProvidesIncidents'

import Component from "./Component/Component";
import ComponentGroup from "./Component/ComponentGroup";
import ICalculatesSeverities from "./Severity/ICalculatesSeverities";
import IProvidesComponents from "./Component/IProvidesComponents";
import IProvidesSeverities from "./Severity/IProvidesSeverities";
import IInjectStatusify from "./Util/IInjectStatusify";
import StatusifyEvents from "./Util/StatusifyEvents";
import { TypedEmitter } from "tiny-typed-emitter";

export interface StatusifyOptions {
  componentProvider: IProvidesComponents;
  incidentProvider: IProvidesIncidents;
  severityProvider: IProvidesSeverities;
  severityCalculator: ICalculatesSeverities;
}

export default class Statusify extends TypedEmitter<StatusifyEvents> {
  private componentProvider: IProvidesComponents;
  private incidentProvider: IProvidesIncidents;
  private severityProvider: IProvidesSeverities;
  private severityCalculator: ICalculatesSeverities;

  constructor(options: StatusifyOptions) {
    super();
    
    this.componentProvider  = this.inject(options.componentProvider);
    this.severityProvider   = this.inject(options.severityProvider);
    this.incidentProvider   = this.inject(options.incidentProvider);
    this.severityCalculator = this.inject(options.severityCalculator);
  }

  //
  // Components
  //
  /**
   * Gets all component groups
   */
  async getComponentGroups() {
    return this.componentProvider.getComponentGroups(this);
  }

  /**
   * Gets all components from component groups
   */
  async getComponents(): Promise<Component[]> {
    return this.componentProvider.getComponents(this);
  }

  /**
   * Gets a specific component
   * @param id ID of the component
   * @return Component if found, otherwise null
   */
  async getComponent(id: string) {
    return this.componentProvider.getComponent(this, id);
  }

  //
  // Incidents
  //
  /**
   * Gets a specific incident
   * @param id  ID of the incident
   * @returns Incident if found, otherwise null
   */
  async getIncident(id: string) {
    return this.incidentProvider.getIncident(this, id);
  }

  /**
   * Gets all incidents or incidents matching the query
   * @param query Optional query to match incidents to
   * @returns Array of incidents
   */
  async getIncidents(query?: IncidentsQuery) {
    return this.incidentProvider.getIncidents(this, query);
  }

  /**
   * Gets all incidents for a specific component
   * @param component Component to get incidents for
   * @param query Optional query to match incidents to
   * @returns Array of incidents
   */
  async getIncidentsFor(component: Component, query?: IncidentsQuery) {
    return this.incidentProvider.getIncidentsFor(this, component, query);
  }

  //
  // Severities
  //
  /**
   * Gets all severities
   * @returns Array of severities
   */
  async getSeverities() {
    return this.severityProvider.getSeverities(this);
  }

  /**
   * Gets a specific severity
   * @param id ID of the severity
   * @returns Severity if found, otherwise null
   */
  async getSeverity(id: string) {
    return this.severityProvider.getSeverity(this, id);
  }
  
  /**
   * Gets the current severity for a component
   * @param component Component to get the severity for
   * @returns Severity of the component
   */
  async getSeverityForComponent(component: Component) {
    return this.severityCalculator.getSeverityForComponent(component, this);
  }
  
  /**
   * Gets the current severity for a group
   * @param group Component group to get the severity for
   * @returns Severity of the component group
   */
  async getSeverityForGroup(group: ComponentGroup) {
    return this.severityCalculator.getSeverityForGroup(group, this);
  }

  /**
   * Gets the global severity
   * @returns Global severity
   */
  async getGlobalSeverity() {
    return this.severityCalculator.getGlobalSeverity(this);
  }

  //
  // Private
  //
  private isInjectable(object: any): object is IInjectStatusify {
    return 'inject' in object;
  }

  private inject(instance: any) {
    if(this.isInjectable(instance)) {
      instance.inject(this);
    }

    return instance;
  }
}