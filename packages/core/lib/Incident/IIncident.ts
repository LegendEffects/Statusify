import Component from "../component/Component";
import Severity from "../Severity/Severity";
import IIncidentUpdate from "./IIncidentUpdate";

export default interface IIncident {
  /**
   * Identifier for the incident
   */
  id: string

  /**
   * The name of the incident
   */
  name: string

  /**
   * If the incident has been resolved
   */
  resolved: boolean

  /**
   * The body of the incident message
   */
  body: string
  
  /**
   * The status the incident message
   */
  bodyStatus: string

  /**
   * Updates for the incident
   */
  updates: IIncidentUpdate[]

  /**
   * Severity that the incident inflicts
   */
  severity: Severity

  /**
   * Components that are affected by the incident
   */
  components: Component[]

  /**
   * When the incident is scheduled to be created
   */
  scheduledFor?: Date
  
  /**
   * When the incident is scheduled to be resolved
   */
  scheduledUntil?: Date

  /**
   * When the incident was created
   */
  createdAt: Date

  /**
   * When the incident was last updated at
   */
  updatedAt: Date
}