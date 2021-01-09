import Component from "../component/Component";
import Statusify from "../Statusify";
import IIncident from "./IIncident";

export type IncidentsQuery = {
  after?: Date
  before?: Date
  id?: string
}

export default interface IProvidesIncidents {
  getIncidents(query?: IncidentsQuery): Promise<IIncident[]>

  getIncidentsFor(component: Component, query: IncidentsQuery): Promise<IIncident[]>
  
  getIncident(query: IncidentsQuery): Promise<IIncident>
}