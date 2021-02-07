import lib from "..";
import Component from "../Component/Component";
import IIncident from "./IIncident";
import IProvidesIncidents, { IncidentsQuery } from "./IProvidesIncidents";
export default class ArrayIncidentProviders implements IProvidesIncidents {
    incidents: IIncident[];
    getIncidents(_statusify: lib, query?: IncidentsQuery): Promise<IIncident[]>;
    getIncidentsFor(_statusify: lib, component: Component, query?: IncidentsQuery): Promise<IIncident[]>;
    getIncident(_statusify: lib, id: string): Promise<IIncident>;
    private filterThroughQuery;
}
