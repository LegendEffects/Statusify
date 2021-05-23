import Component from "../Component/Component";
import ComponentGroup from "../Component/ComponentGroup";
import Severity from "./Severity";
import Statusify from "..";

export default interface ICalculatesSeverities {
  /**
   * Gets a global severity for all groups
   * @param statusify Statusify Core
   */
  getGlobalSeverity(statusify: Statusify): Promise<Severity>

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