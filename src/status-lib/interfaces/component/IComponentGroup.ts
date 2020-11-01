import ISeverity from '../severity/ISeverity'
import IComponentGroupConfig from './IComponentGroupConfig'

export default interface IComponentGroup extends IComponentGroupConfig {
  isAnonymous(): boolean

  /**
   * Gets the current severity for the component
   */
  getSeverity(): Promise<ISeverity>
}
