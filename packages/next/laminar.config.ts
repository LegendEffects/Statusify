import { LaminarOptions } from "./src/Laminar";

const config: LaminarOptions = {
  /**
   * Colors
   * @see https://chakra-ui.com/docs/theming/theme#colors
   */
  colors: {
    severities: {
      operational: 'green',
      partial: 'orange',
      minor: 'yellow',
      major: 'red',
    }
  },

  pageWidth: '1140px',

  /**
   * Network Operations Center View
   */
  noc: {
    enabled: true,
    default: false
  }
}

export default config