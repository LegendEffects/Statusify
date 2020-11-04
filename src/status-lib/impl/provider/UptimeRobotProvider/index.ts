import moment from 'moment-timezone'
import StatusLib from '../../StatusLib'
import IComponent from '../../../interfaces/component/IComponent'
import IProvider from '../../../interfaces/provider/IProvider'
import IProviderTickInfo from '../../../interfaces/provider/IProviderTickInfo'
import IUptimeRobotResponse from './interfaces/IUptimeRobotResponse'
import IUptimeRobotMonitor from './interfaces/IUptimeRobotMonitor'
import { BaseConfig } from '~/src/status-lib/BaseConfig'
import ISeverity from '~/src/status-lib/interfaces/severity/ISeverity'

export default class UptimeRobotProvider implements IProvider {
  private cache: IUptimeRobotResponse | null = null
  private key: string
  private monitorIDs: number[] = []
  private statusLib: StatusLib | undefined = undefined

  static readonly POLL_URL = 'https://api.uptimerobot.com/v2/getMonitors'
  static readonly SECONDS_IN_DAY = 86400

  /**
   * UptimeRobotProvider Constructor
   * @param apiKey Read only key for UptimeRobot API
   */
  constructor(apiKey: string) {
    this.key = apiKey
  }

  /**
   * @inheritdoc
   */
  async init(statusLib: StatusLib, _original: BaseConfig): Promise<void> {
    this.monitorIDs = statusLib.componentGroups.flatMap((cg) => {
      return cg.components
        .filter((c) => {
          return c.provider !== undefined && c.provider.id !== undefined
        })
        .map((c) => {
          return parseInt(c.provider?.id)
        })
    })

    const averageRanges = statusLib.config.ticks.map((t) => t.days)
    const uptimeRanges = []
    for (let i = 0; i < 90; i++) {
      const m = moment().subtract(i, 'days')
      uptimeRanges.push(`${m.startOf('day').unix()}_${m.endOf('day').unix()}`)
    }

    const { data } = await statusLib
      .getNuxt()
      .$axios.post(UptimeRobotProvider.POLL_URL, {
        api_key: this.key,
        monitors: this.monitorIDs.join('-'),
        custom_uptime_ratios: averageRanges.join('-'),
        custom_uptime_ranges: uptimeRanges.join('-'),
      })

    this.cache = data as IUptimeRobotResponse
  }

  /**
   * @inheritdoc
   */
  available(): Promise<boolean> {
    return new Promise((resolve) => {
      resolve(this.cache !== null && this.cache.stat === 'ok')
    })
  }

  /**
   * @inheritdoc
   * Issues with this: UptimeRobot doesn't give us downtimes for this type, so let's estimate!
   */
  async downtimesFor(component: IComponent, range: number): Promise<number[]> {
    if (this.cache === null) {
      throw new Error("Cache isn't populated, you're early!")
    }

    const monitor = this.findMonitorFor(component)
    if (monitor === undefined) {
      throw new Error('Unable to find related monitor for component')
    }

    const uptimePercentages = await this.uptimePercentagesFor(component, range)
    return uptimePercentages.map((percent) => {
      // Take the seconds in a day and calculate the seconds of uptime from it
      const uptime = UptimeRobotProvider.SECONDS_IN_DAY * (percent / 100)

      // Take away from seconds in day to get the downtime
      return Math.ceil(UptimeRobotProvider.SECONDS_IN_DAY - uptime)
    })
  }

  /**
   * @inheritdoc
   */
  uptimePercentagesFor(
    component: IComponent,
    range: number
  ): Promise<number[]> {
    return new Promise((resolve, reject) => {
      if (this.cache === null) {
        return reject(new Error("Cache isn't populated, you're early!"))
      }

      const monitor = this.findMonitorFor(component)
      if (monitor === undefined) {
        return reject(new Error('Unable to find related monitor for component'))
      }

      const uptimes = monitor.custom_uptime_ranges
        .split('-')
        .map((val) => parseFloat(val))

      return resolve(uptimes.slice(0, range))
    })
  }

  /**
   * @inheritdoc
   */
  async averageUptimeOver(
    component: IComponent,
    range: number
  ): Promise<number> {
    if (this.cache === null) {
      throw new Error("Cache isn't populated, you're early!")
    }

    const monitor = this.findMonitorFor(component)
    if (monitor === undefined) {
      throw new Error('Unable to find related monitor for component')
    }

    // Check if it's a common amount
    for (let i = 0; i < StatusLib.config.ticks.length; i++) {
      const element = StatusLib.config.ticks[i]
      if (element.days === range) {
        return parseFloat(monitor.custom_uptime_ratio.split('-')[i])
      }
    }

    const { data } = await StatusLib.instance
      .getNuxt()
      .$axios.post(UptimeRobotProvider.POLL_URL, {
        api_key: this.key,
        monitors: component.provider?.id,
        custom_uptime_ratios: `1-${range}`,
      })

    return parseFloat(data.monitors[0].custom_uptime_ratio.split('-')[1])
  }

  /**
   * @inheritdoc
   */
  async ticksInfo(
    component: IComponent,
    range: number
  ): Promise<IProviderTickInfo[]> {
    const uptimes = await this.uptimePercentagesFor(component, range)
    const ticks: IProviderTickInfo[] = []

    for (const uptimePercentage of uptimes) {
      const downtime = Math.ceil(
        UptimeRobotProvider.SECONDS_IN_DAY -
          UptimeRobotProvider.SECONDS_IN_DAY * (uptimePercentage / 100)
      )

      ticks.push({
        downtime,
        uptimePercentage,
      })
    }

    return ticks
  }

  /**
   * @inheritdoc
   */
  getSeverity(component: IComponent): Promise<ISeverity> {
    return new Promise((resolve, reject) => {
      if (this.cache === null) {
        return reject(new Error("Cache isn't populated, you're early!"))
      }

      const monitor = this.findMonitorFor(component)
      if (monitor === undefined) {
        return reject(new Error('Unable to find related monitor for component'))
      }

      const ratios = monitor.custom_uptime_ratios
      resolve(
        this.statusLib?.severities.fromPercentage(
          parseFloat(ratios[ratios.length - 1])
        )
      )
    })
  }

  //
  // Utility
  //
  private findMonitorFor(
    component: IComponent
  ): IUptimeRobotMonitor | undefined {
    if (this.cache === null) {
      throw new Error("Cache isn't populated, you're early!")
    }

    if (
      component.provider === undefined ||
      component.provider.id === undefined
    ) {
      return undefined
    }

    return this.cache.monitors.find(
      (m) => m.id === parseInt(component.provider?.id)
    )
  }
}
