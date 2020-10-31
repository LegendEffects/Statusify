import IComponentConfig from './IComponentConfig'

/**
 * Configuration for a component
 */
export default interface IComponentGroupConfig {
  /**
   * OPTIONAL
   * Name of the ComponentGroup
   */
  name?: string

  /**
   * OPTIONAL
   * Description of the ComponentGroup
   */
  description?: string

  /**
   * OPTIONAL
   * If the group is collapsible or not
   */
  collapsible?: boolean

  /**
   * OPTIONAL
   * If the group is already collapsed
   */
  collapsed?: boolean

  /**
   * Components belonging to the ComponentGroup
   */
  components: IComponentConfig[]
}
