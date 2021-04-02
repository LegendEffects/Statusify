import LaminarThemeOptions from "./LaminarThemeOptions";

const theme: LaminarThemeOptions = {
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true
  },
  
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