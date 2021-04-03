import UptimeRobotMonitorType from "./UptimeRobotMonitorType";
import IUptimeRobotResponseTime from "./IUptimeRobotResponseTime";
import UptimeRobotMonitorStatus from "./UptimeRobotMonitorStatus";

/**
 * (Partially) Defines the response schema for a monitor
 * @see https://uptimerobot.com/api/
 */
export default interface IUptimeRobotMonitor {
  /**
   * ID of the monitor
   */
  id: number;

  /**
   * The friendly name of the monitor
   */
  friendly_name: string;

  /**
   * The URL or IP Address of the monitor
   */
  url: string;

  /**
   * The type of monitor
   */
  type: UptimeRobotMonitorType;

  /**
   * Used for port monitoring (type 4), shows which service is monitored or a custom port.
   */
  sub_type: number | string;

  /**
   * The rate at which the monitor is checked in seconds
   */
  interval: number;

  /**
   * The status of the monitor
   */
  status: UptimeRobotMonitorStatus;

  /**
   * UNIX Timestamp of when the monitor was created.
   */
  create_datetime: number;

  /**
   * All time uptime ratio calculated since the monitor was created
   * Formatted As: up-down-paused
   */
  all_time_uptime_ratio?: string;

  /**
   * The durations of all time up-down-paused events in seconds
   * !!ASSUMED!! Formatted As: up-down-paused
   */
  all_time_uptime_durations?: string;

  /**
   * The uptime ratio of the monitor for the given periods
   * If there is more than 1 period then values are separated with "-"
   */
  custom_uptime_ratios?: string;

  /**
   * The down durations for the given periods in seconds
   * If there is more than 1 period then values are separated with "-"
   */
  custom_down_durations?: string;

  /**
   * The uptime ratio of the monitor for the given ranges
   * If there is more than 1 range then values are separated with "-"
   */
  custom_uptime_ranges?: string;

  /**
   * The average value of the response times
   * Requires response_times=1 in request
   */
  average_response_time?: string;

  /**
   * Response times for the monitor
   * Range is maxed at 7 days and if no range is provided then the last 24 hours are returned
   */
  response_times?: IUptimeRobotResponseTime[];
}