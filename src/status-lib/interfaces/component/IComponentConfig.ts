import { IProviderComponentConfig } from '../provider/IProviderComponentConfig'

/**
 * Configuration for a component
 */
export default interface IComponentConfig {
  /**
   * Name of the Component
   */
  name: string

  /**
   * Page Slug for the Component
   */
  slug: string

  /**
   * OPTIONAL
   * Description of the Component
   */
  description?: string

  /**
   * OPTIONAL
   * Configuration for the provider to use
   */
  provider?: IProviderComponentConfig
}
