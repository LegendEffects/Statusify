import Component from "../component/Component";
import Statusify from "..";
import IIncident from "./IIncident";
export declare type DateQuery = {
    after?: Date;
    before?: Date;
};
export declare type IncidentsQuery = {
    createdAt?: DateQuery;
    updatedAt?: DateQuery;
    resolvedAt?: DateQuery | null;
    limit?: number;
    offset?: number;
    id?: string;
};
export default interface IProvidesIncidents {
    getIncidents(statusify: Statusify, query?: IncidentsQuery): Promise<IIncident[]>;
    getIncidentsFor(statusify: Statusify, component: Component, query?: IncidentsQuery): Promise<IIncident[]>;
    getIncident(statusify: Statusify, id: string): Promise<IIncident | null>;
}
