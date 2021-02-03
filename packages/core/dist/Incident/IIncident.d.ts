import Component from "../component/Component";
import Severity from "../Severity/Severity";
import IIncidentUpdate from "./IIncidentUpdate";
export default interface IIncident {
    id: string;
    name: string;
    body: string;
    bodyStatus: string;
    updates: IIncidentUpdate[];
    severity: Severity;
    resolvedAt: Date;
    components: Component[];
    scheduledFor?: Date;
    scheduledUntil?: Date;
    createdAt: Date;
    updatedAt: Date;
}
