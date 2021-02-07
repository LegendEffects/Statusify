import Component from "../component/Component";
import ComponentGroup from "../Component/ComponentGroup";
import Statusify from "..";
import ICalculatesSeverities from "./ICalculatesSeverities";
import Severity from "./Severity";
export default class IncidentSeverityProvider implements ICalculatesSeverities {
    getGlobalSeverity(statusify: Statusify): Promise<Severity>;
    getSeverityForGroup(group: ComponentGroup, statusify: Statusify): Promise<Severity>;
    getSeverityForComponent(component: Component, statusify: Statusify): Promise<Severity>;
}
