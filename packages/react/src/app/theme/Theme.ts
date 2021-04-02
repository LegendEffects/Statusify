import LaminarThemeOptions from "./LaminarThemeOptions";

const theme: LaminarThemeOptions = {
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true
  },

  viewboxes: [
    {width: 1200, box: "0 0 448 40", days: 90},
    {width: 900, box: "0 0 298 40", days: 60},
    {width: 0, box: "0 0 148 40", days: 30}
  ],
  
  severityColors: {
    operational: 'green',
    partial: 'orange',
    minor: 'yellow',
    major: 'red',
  },

  downtimeSeverities: {
    0: 'operational',
    1: 'partial',
    300: 'minor',
    1800: 'major'    
  },

  sizes: {
    container: {
      xl: '1140px'
    }
  }
}

export default theme;