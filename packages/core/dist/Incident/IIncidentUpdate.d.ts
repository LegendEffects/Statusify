import Severity from "../Severity/Severity";
export default class IIncidentUpdate {
    severity: Severity;
    body: string;
    bodyStatus: string;
    createdAt: Date;
    updatedAt: Date;
}
