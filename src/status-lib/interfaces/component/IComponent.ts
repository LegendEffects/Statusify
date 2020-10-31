import IIncident from '../incident/IIncident'
import ITick from '../ticks/ITick'
import IComponentConfig from './IComponentConfig'

export default interface IComponent extends IComponentConfig {
  /**
   * Gets incidents for the component
   */
  getIncidents(query?: Object): Promise<IIncident[]>

  /**
   * Gets ticks for the TickGraph
   */
  getTicks(range: number): Promise<ITick[]>
}
