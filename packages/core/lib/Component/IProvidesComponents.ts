import Statusify from "../Statusify";
import ComponentGroup from "./ComponentGroup";

export default interface IProvidesComponents {
  /**
   * Gets the component groups for the service
   * @param statusify Statusify core
   */
  getComponents(statusify: Statusify): Promise<ComponentGroup[]>
}