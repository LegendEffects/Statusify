import Component from "../component/Component";
import ComponentGroup from "../Component/ComponentGroup";
import Statusify from "..";
import Severity from "./Severity";
export default interface ICalculatesSeverities {
    getSeverityForGroup(group: ComponentGroup, statusify: Statusify): Promise<Severity>;
    getSeverityForComponent(component: Component, statusify: Statusify): Promise<Severity>;
}
