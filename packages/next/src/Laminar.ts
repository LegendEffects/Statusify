export interface LaminarOptions {
  /**
   * Colors
   * @see https://chakra-ui.com/docs/theming/theme#colors
   */
  colors: {
    severities: {[id: string]: string}
  }

  /**
   * How big the content container should be
   */
  pageWidth: string

  /**
   * Network Operations Center View
   */
  noc: {
    enabled: boolean
    default: boolean
  }
}