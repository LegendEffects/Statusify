import IComponent from '../../interfaces/component/IComponent'
import IComponentGroup from '../../interfaces/component/IComponentGroup'
import IComponentGroupConfig from '../../interfaces/component/IComponentGroupConfig'
import ISeverity from '../../interfaces/severity/ISeverity'
import StatusLib from '../StatusLib'

export default class ComponentGroup implements IComponentGroup {
  name?: string
  description?: string
  collapsible: boolean
  collapsed: boolean
  components: IComponent[]

  constructor({
    name,
    description,
    collapsible,
    collapsed,
    components,
  }: IComponentGroupConfig & { components: IComponent[] }) {
    this.name = name
    this.description = description
    this.collapsible = collapsible || false
    this.collapsed = collapsed || false
    this.components = components
  }

  isAnonymous(): boolean {
    return this.name === undefined
  }

  async getSeverity(): Promise<ISeverity> {
    const sevs = await Promise.all(this.components.map((c) => c.getSeverity()))
    return StatusLib.instance.severities.worstOf(...sevs)
  }
}
