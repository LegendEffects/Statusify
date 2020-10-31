import IComponentGroup from '../component/IComponentGroup'
import ISeverity from '../severity/ISeverity'
import { TicksConfig, IMomentJSConfig } from '~/src/status-lib/BaseConfig'

export default interface IParsedConfig {
  components: IComponentGroup[]
  moment: IMomentJSConfig
  ticks: TicksConfig
  severities: ISeverity[]
}
