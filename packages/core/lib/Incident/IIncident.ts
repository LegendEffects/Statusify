import Component from "../Component/Component";
import IIncidentUpdate from "./IIncidentUpdate";
import Severity from "../Severity/Severity";

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
   * When the incident was resolved (undefined if unresolved)
   */
  resolvedAt?: Date

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