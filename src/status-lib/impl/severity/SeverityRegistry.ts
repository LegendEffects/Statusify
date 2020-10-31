import ISeverity from '../../interfaces/severity/ISeverity'
import ISeverityRegistry from '../../interfaces/severity/ISeverityRegistry'

export default class SeverityRegistry implements ISeverityRegistry {
  severities: ISeverity[] = []

  /**
   * Adds a severity to the array
   * @param severity Severity to add
   */
  add(severity: ISeverity): void {
    this.severities.push(severity)
  }

  /**
   * Adds an array of severities to the array
   * @param severities Severities to add
   */
  addAll(severities: ISeverity[]): void {
    severities.forEach((s) => this.add(s))
  }

  /**
   * Gets a severity from its id
   * @param id {string} ID of the severity
   */
  get(id: string): ISeverity | undefined {
    return this.severities.find((s) => s.id === id)
  }

  /**
   * Finds the severity which a percentage falls into
   * @param percentage {number}
   */
  fromPercentage(percentage: number): ISeverity {
    return this.severities
      .filter((s) => s.percentage !== undefined)
      .reduce((prev: ISeverity, curr: ISeverity) => {
        if (
          curr.percentage! <= percentage &&
          prev.percentage! < curr.percentage!
        ) {
          return curr
        }
        return prev
      })
  }

  /**
   * Returns the worse severity from an array of severities
   * @param severities Severities to compare
   */
  worstOf(...severities: ISeverity[]): ISeverity {
    return severities.reduce((prev: ISeverity, curr: ISeverity) => {
      if (this.findIndex(curr.id) < this.findIndex(prev.id)) {
        return curr
      }
      return prev
    })
  }

  /**
   * Finds the index of a severity from the array
   * @param id ID to find
   */
  private findIndex(id: string): number {
    return this.severities.findIndex((s) => s.id === id)
  }
}
