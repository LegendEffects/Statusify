import Component from "../component/Component";
import ComponentGroup from "../Component/ComponentGroup";
import Statusify from "../Statusify";
import Severity from "./Severity";

export default interface IProvidesSeverities {
  getSeverities(statusify: Statusify): Promise<Severity[]>

  getSeverityForGroup(group: ComponentGroup, statusify: Statusify): Promise<Severity>
  
  getSeverityForComponent(component: Component, statusify: Statusify): Promise<Severity>
}