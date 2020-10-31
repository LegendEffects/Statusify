import { Moment } from 'moment-timezone'
import IIncident from '../incident/IIncident'
import ISeverity from '../severity/ISeverity'

export default interface ITick {
  /**
   * Date for the tick, should be taken from the start of the day
   */
  date: Moment

  /**
   * Incidents for the day
   */
  incidents: IIncident[]

  /**
   * Severity of the tick
   */
  severity: ISeverity

  /**
   * OPTIONAL (May not have a provider)
   * Seconds of downtime
   */
  downtime?: number

  /**
   * OPTIONAL (May not have a provider)
   * Percentage of uptime from the provider
   */
  uptimePercentage?: number
}
