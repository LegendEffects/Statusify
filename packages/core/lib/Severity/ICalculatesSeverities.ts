import Component from "../component/Component";
import ComponentGroup from "../Component/ComponentGroup";
import Statusify from "../Statusify";
import Severity from "./Severity";

export default interface ICalculatesSeverities {
  /**
   * Gets the severity for a group
   * @param group Group to get the severity for
   * @param statusify Statusify Core
   */
  getSeverityForGroup(group: ComponentGroup, statusify: Statusify): Promise<Severity>
  
  /**
   * Gets the severity for a component
   * @param component Component to get the severity for
   * @param statusify Statusify Core
   */
  getSeverityForComponent(component: Component, statusify: Statusify): Promise<Severity>
}