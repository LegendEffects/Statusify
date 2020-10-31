import { Context } from '@nuxt/types'
import { Consola } from 'consola/types/consola'
import consola from 'consola'
import Config from '@@/config'
import moment from 'moment-timezone'
import IStatusLibModuleConfig from '../interfaces/config/IStatusLibModuleConfig'
import ISeverityRegistry from '../interfaces/severity/ISeverityRegistry'
import IComponentGroup from '../interfaces/component/IComponentGroup'
import ConfigParser from './ConfigParser'
import SeverityRegistry from './severity/SeverityRegistry'
import { IMomentJSFormats, TicksConfig } from '~/src/status-lib/BaseConfig'

export default class StatusLib {
  /**
   * Static Singleton
   */
  private static _instance: StatusLib

  /**
   * Module Config
   */
  private moduleConfig: IStatusLibModuleConfig

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
   * Constructor
   * @param moduleConfig Module Configuration
   * @param nuxt Nuxt Context
   */
  constructor(moduleConfig: IStatusLibModuleConfig, nuxt: Context) {
    if (StatusLib._instance !== undefined) {
      throw new Error('Use StatusLib.instance instead of prompting new.')
    }

    // Setup Singleton
    StatusLib._instance = this

    // Setup References
    this.moduleConfig = moduleConfig
    this.nuxt = nuxt
    this.severities = new SeverityRegistry()

    // Create consola instance
    this.logger = consola.withScope('StatusLib').create({})

    //
    // Init the plugin
    //

    // Parse Information From Config
    const config = ConfigParser(new Config(), this.severities)
    this.componentGroups = config.components

    // Setup MomentJS
    moment.tz.setDefault(config.moment.timezone)

    // Setup Static Config
    this.config = {
      formats: config.moment.formats,
      ticks: config.ticks,
    }

    this.logger.log('Initialized.')
  }

  getNuxt() {
    return this.nuxt
  }

  getLogger() {
    return this.logger
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
