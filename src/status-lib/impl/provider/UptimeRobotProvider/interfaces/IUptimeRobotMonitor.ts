/* eslint-disable camelcase */

import { IUptimeRobotMonitorStatus } from './IUptimeRobotMonitorStatus'

/**
 * @see https://uptimerobot.com/api/
 */
export default interface IUptimeRobotMonitor {
  /**
   * Monitor ID
   */
  id: number

  /**
   * Friendly Name in UR
   */
  friendly_name: string

  /**
   * Interval in seconds that the monitor is checked
   */
  interval: number

  /**
   * When the monitor was created (unix timestamp)
   */
  create_datetime: number

  /**
   * String seperated by '-'
   */
  custom_down_durations: string

  /**
   * String seperated by '-'
   */
  custom_uptime_ranges: string

  /**
   * String seperated by '-'
   */
  custom_uptime_ratios: string

  /**
   * Type of monitor
   */
  type: 1 | 2 | 3 | 4 | 5

  /**
   * Status of the monitor
   */
  status: IUptimeRobotMonitorStatus

  /**
   * Sub Type of Monitor
   */
  sub_type: number

  /**
   * URL which is checked
   */
  url: string
}
