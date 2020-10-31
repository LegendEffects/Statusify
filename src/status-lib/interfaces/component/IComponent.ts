import IIncident from '../incident/IIncident'
import IComponentConfig from './IComponentConfig'

export default interface IComponent extends IComponentConfig {
  getIncidents(): Promise<IIncident>
}
