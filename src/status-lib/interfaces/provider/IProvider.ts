import { BaseConfig } from '../../BaseConfig'
import StatusLib from '../../impl/StatusLib'
import IComponent from '../component/IComponent'
import ISeverity from '../severity/ISeverity'
import IProviderTickInfo from './IProviderTickInfo'

export default interface IProvider {
  /**
   * Initialization of the provider
   */
  init(statusLib: StatusLib, _originalConfig: BaseConfig): Promise<void>

  /**
   * Gets downtimes for a select range of time
   * @param component Component to get downtimes for
   * @param range Number of days that need to be fetched
   */
  downtimesFor(component: IComponent, range: number): Promise<number[]>

  /**
   * Gets uptime percentages for a select range of time
   * @param component Component to get the uptime percentages for
   * @param range Number of days that need to be fetched
   */
  uptimePercentagesFor(component: IComponent, range: number): Promise<number[]>

  /**
   * Calculates the average uptime for the given range
   * @param component Component to calculate the average uptime for
   * @param range Number of days that the average goes over
   */
  averageUptimeOver(component: IComponent, range: number): Promise<number>

  /**
   * Gets all info for ticks
   * @param component Component to get tick info for
   * @param range Number of days that need to be fetched
   */
  ticksInfo(component: IComponent, range: number): Promise<IProviderTickInfo[]>

  /**
   * Gets a components current severity
   * @param component Component to get severity for
   */
  getSeverity(component: IComponent): Promise<ISeverity>
}
