import ISeverity from './ISeverity'

export default interface ISeverityRegistry {
  severities: ISeverity[]

  /**
   * Adds a severity to the array
   * @param severity Severity to add
   */
  add(severity: ISeverity): void

  /**
   * Adds an array of severities to the array
   * @param severities Severities to add
   */
  addAll(severities: ISeverity[]): void

  /**
   * Gets a severity from its id
   * @param id {string} ID of the severity
   */
  get(id: string): ISeverity | undefined

  /**
   * Finds the severity which a percentage falls into
   * @param percentage {number}
   */
  fromPercentage(percentage: number): ISeverity

  /**
   * Returns the worse severity from an array of severities
   * @param severities Severities to compare
   */
  worstOf(...severities: ISeverity[]): ISeverity
}
