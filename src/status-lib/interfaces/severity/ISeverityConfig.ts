export default interface ISeverityConfig {
  /**
   * ID of the severity, used for lookups and internal reference
   */
  id: string

  /**
   * Name which will be shown to users
   */
  displayName: string

  /**
   * Percentage required to reach this severity level
   * If none is provided then it will not be included for calculation
   */
  percentage?: number
}
