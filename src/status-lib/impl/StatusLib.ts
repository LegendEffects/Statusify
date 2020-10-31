import { Context } from '@nuxt/types'
import { Consola } from 'consola/types/consola'
import consola from 'consola'
import moment, { Moment } from 'moment-timezone'
import ISeverityRegistry from '../interfaces/severity/ISeverityRegistry'
import IComponentGroup from '../interfaces/component/IComponentGroup'
import IProvider from '../interfaces/provider/IProvider'
import ConfigParser from './ConfigParser'
import SeverityRegistry from './severity/SeverityRegistry'
import { BaseConfig, IMomentJSFormats, TicksConfig } from '~/src/status-lib/BaseConfig'

export default class StatusLib {
  /**
   * Static Singleton
   */
  private static _instance: StatusLib

  /**
   * Nuxt Context
   */
  private nuxt: Context

  /**
   * Consola Logger Instance
   */
  private logger: Consola

  /**
   * Severity Registry
   */
  public severities: ISeverityRegistry

  /**
   * Component Groups
   */
  public componentGroups: IComponentGroup[]

  /**
   * Config
   */
  public config: { formats: IMomentJSFormats; ticks: TicksConfig }

  /**
   * Provider
   */
  public provider?: IProvider

  /**
   * Constructor
   * @param BaseConfig Config
   * @param nuxt Nuxt Context
   */
  constructor(_config: BaseConfig, nuxt: Context) {
    if (StatusLib._instance !== undefined) {
      throw new Error('Use StatusLib.instance instead of prompting new.')
    }

    // Setup Singleton
    StatusLib._instance = this

    // Setup References
    this.nuxt = nuxt
    this.severities = new SeverityRegistry()

    // Create consola instance
    this.logger = consola.withScope('StatusLib').create({})

    //
    // Init the plugin
    //

    // Parse Information From Config
    const config = ConfigParser(_config, this.severities)
    this.componentGroups = config.components

    // Setup MomentJS
    moment.tz.setDefault(config.moment.timezone)

    // Setup Static Config
    this.config = {
      formats: config.moment.formats,
      ticks: config.ticks,
    }
  }

  async init(_config: BaseConfig) {
    // Setup Provider
    if (_config.provider) {
      this.provider = _config.provider
      await this.provider?.init(this, _config)
      this.logger.log('Provider Initialized.')
    }

    this.logger.log('Initialized.')
  }

  getNuxt() {
    return this.nuxt
  }

  getLogger() {
    return this.logger
  }

  //
  // Date Utilities
  //
  formatFull(moment: Moment): string {
    return moment.format(this.config.formats.full)
  }

  formatMedium(moment: Moment): string {
    return moment.format(this.config.formats.medium)
  }

  formatShort(moment: Moment): string {
    return moment.format(this.config.formats.short)
  }

  /**
   * Static singleton accessor
   */
  public static get instance() {
    return this._instance
  }

  public static get config() {
    return this._instance.config
  }
}
