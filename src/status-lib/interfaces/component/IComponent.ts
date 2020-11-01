import IIncident from '../incident/IIncident'
import ISeverity from '../severity/ISeverity'
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

  /**
   * Gets the current severity for the component
   */
  getSeverity(): Promise<ISeverity>
}
