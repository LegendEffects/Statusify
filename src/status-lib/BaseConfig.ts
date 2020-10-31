import IComponentConfig from './interfaces/component/IComponentConfig'
import IComponentGroupConfig from './interfaces/component/IComponentGroupConfig'
import IProvider from './interfaces/provider/IProvider'
import ISeverityConfig from './interfaces/severity/ISeverityConfig'

/**
 * MomentJS
 */
export interface IMomentJSFormats {
  short: string
  medium: string
  full: string
}

export interface IMomentJSConfig {
  timezone: string
  formats: IMomentJSFormats
}

/**
 * Ticker
 */
export interface ITickConfig {
  width: number
  box: string
  days: number
}

export type ProviderConfig = { [key: string]: any }

export type ComponentConfig = (IComponentConfig[] | IComponentGroupConfig)[]

export type TicksConfig = ITickConfig[]

export type SeverityConfig = ISeverityConfig[]

/**
 * Config Definition
 */
export abstract class BaseConfig {
  abstract components: ComponentConfig
  abstract moment: IMomentJSConfig
  abstract ticks: TicksConfig
  abstract severities: SeverityConfig

  provider: IProvider | null = null
}
