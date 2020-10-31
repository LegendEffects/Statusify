import IComponent from '../../interfaces/component/IComponent'
import IComponentConfig from '../../interfaces/component/IComponentConfig'
import IIncident from '../../interfaces/incident/IIncident'
import { IProviderComponentConfig } from '../../interfaces/provider/IProviderComponentConfig'

export default class Component implements IComponent {
  name: string
  slug: string
  description?: string
  provider?: IProviderComponentConfig

  constructor({ name, slug, description, provider }: IComponentConfig) {
    this.name = name
    this.slug = slug
    this.description = description
    this.provider = provider
  }

  getIncidents(): Promise<IIncident> {
    throw new Error('Method not implemented.')
  }
}
