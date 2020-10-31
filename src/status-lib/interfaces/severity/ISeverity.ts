import ISeverityConfig from './ISeverityConfig'

export default interface ISeverity extends ISeverityConfig {
  worseThan(severity: ISeverity): ISeverity
}
