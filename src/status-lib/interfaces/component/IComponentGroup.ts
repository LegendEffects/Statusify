import IComponentGroupConfig from './IComponentGroupConfig'

export default interface IComponentGroup extends IComponentGroupConfig {
  isAnonymous(): boolean
}
