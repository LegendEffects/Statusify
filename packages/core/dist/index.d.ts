/// <reference types="node" />
import IProvidesComponents from "./Component/IProvidesComponents";
import IProvidesSeverities from "./Severity/IProvidesSeverities";
import IProvidesIncidents, { IncidentsQuery } from './Incident/IProvidesIncidents';
import { EventEmitter } from 'events';
import Component from "./component/Component";
import ICalculatesSeverities from "./Severity/ICalculatesSeverities";
import ComponentGroup from "./Component/ComponentGroup";
export interface StatusifyOptions {
    componentProvider: IProvidesComponents;
    incidentProvider: IProvidesIncidents;
    severityProvider: IProvidesSeverities;
    severityCalculator: ICalculatesSeverities;
}
export default class Statusify extends EventEmitter {
    private componentProvider;
    private incidentProvider;
    private severityProvider;
    private severityCalculator;
    constructor(options: StatusifyOptions);
    getComponentGroups(): Promise<ComponentGroup[]>;
    getComponents(): Promise<Component[]>;
    getComponent(id: string): Promise<Component>;
    getIncident(id: string): Promise<import("./Incident/IIncident").default>;
    getIncidents(query?: IncidentsQuery): Promise<import("./Incident/IIncident").default[]>;
    getIncidentsFor(component: Component, query: IncidentsQuery): Promise<import("./Incident/IIncident").default[]>;
    getSeverities(): Promise<import("./Severity/Severity").default[]>;
    getSeverity(id: string): Promise<import("./Severity/Severity").default>;
    getSeverityForComponent(component: Component): Promise<import("./Severity/Severity").default>;
    getSeverityForGroup(group: ComponentGroup): Promise<import("./Severity/Severity").default>;
}
