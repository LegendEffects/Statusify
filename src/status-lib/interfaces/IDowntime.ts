import ISeverity from './severity/ISeverity'

export default interface IDowntime {
  length: number
  severity: ISeverity
}
