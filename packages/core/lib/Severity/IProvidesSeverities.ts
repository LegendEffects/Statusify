import Statusify from "../Statusify";
import Severity from "./Severity";

export default interface IProvidesSeverities {
  /**
   * Gets all of the registered severities
   * @param statusify Statusify Core
   */
  getSeverities(statusify: Statusify): Promise<Severity[]>

  /**
   * Gets a specific severity that matches an id
   * @param statusify Statusify Core
   * @param id ID of the severity to get
   */
  getSeverity(statusify: Statusify, id: string): Promise<Severity | null>
}