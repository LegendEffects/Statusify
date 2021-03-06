import Component from "../Component/Component";
import IIncident from "./IIncident";
import Statusify from "..";

export type DateQuery = null | {
  after?: Date
  before?: Date
}

export type IncidentsQuery = {
  createdAt?: DateQuery,
  updatedAt?: DateQuery,
  resolvedAt?: DateQuery | null,

  limit?: number,
  offset?: number,
  component?: string,

  id?: string
}

export default interface IProvidesIncidents {
  /**
   * Gets all incidents matching the query
   * @param statusify Statusify Core
   * @param query Query
   */
  getIncidents(statusify: Statusify, query?: IncidentsQuery): Promise<IIncident[]>

  /**
   * Get all incidents for a component matching the query
   * @param statusify Statusify Core
   * @param component Component instance
   * @param query Query to match
   */
  getIncidentsFor(statusify: Statusify, component: Component, query?: IncidentsQuery): Promise<IIncident[]>
  
  /**
   * Gets a specific incident matching an ID
   * @param statusify Statusify Core
   * @param id Incident ID to get
   */
  getIncident(statusify: Statusify, id: string): Promise<IIncident | null>
}