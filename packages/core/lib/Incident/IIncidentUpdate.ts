import Severity from "../Severity/Severity"

export default interface IIncidentUpdate {
  /**
   * The severity this update makes the incident
   */
  severity: Severity

  /**
   * The body of the incident message
   */
  body: string
  
  /**
   * The status the incident message
   */
  bodyStatus: string

  /**
   * When the incident update was created
   */
  createdAt: Date

  /**
   * When the incident update was last updated at
   */
  updatedAt: Date
}