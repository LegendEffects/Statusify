/// <reference types="lokijs" />
import Component from "@statusify/core/dist/Component/Component";
import IIncident from "@statusify/core/dist/Incident/IIncident";
import IProvidesIncidents, { IncidentsQuery } from "@statusify/core/dist/Incident/IProvidesIncidents";
import Statusify from "@statusify/core/dist";
export interface LokiIncidentProviderOptions {
    autoLoadPath?: string;
}
export default class LokiIncidentProvider implements IProvidesIncidents {
    protected options: LokiIncidentProviderOptions;
    db: any;
    incidents: Collection<any>;
    constructor(options?: LokiIncidentProviderOptions);
    load(): void;
    getIncidents(statusify: Statusify, query?: IncidentsQuery): Promise<IIncident[]>;
    getIncidentsFor(statusify: Statusify, component: Component, query: IncidentsQuery): Promise<IIncident[]>;
    getIncident(statusify: Statusify, id: string): Promise<IIncident | null>;
    private parseIncident;
    private buildQuery;
    private buildDateQuery;
    private nullableDate;
}
