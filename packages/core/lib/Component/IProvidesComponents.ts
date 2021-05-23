import Statusify from "..";
import Component from "./Component";
import ComponentGroup from "./ComponentGroup";

export default interface IProvidesComponents {
  /**
   * Gets the component groups for the service
   * @param statusify Statusify core
   */
  getComponentGroups(statusify: Statusify): Promise<ComponentGroup[]>
  
  /**
   * Gets the components for the service
   * @param statusify Statusify core
   */
  getComponents(statusify: Statusify): Promise<Component[]>

  /**
   * Gets a component by its ID
   * @param statusify Statusify core
   * @param id Component ID
   */
  getComponent(statusify: Statusify, id: string): Promise<Component | null>
}