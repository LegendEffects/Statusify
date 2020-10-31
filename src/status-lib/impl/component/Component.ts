import moment from 'moment-timezone'
import IComponent from '../../interfaces/component/IComponent'
import IComponentConfig from '../../interfaces/component/IComponentConfig'
import IIncident from '../../interfaces/incident/IIncident'
import { IProviderComponentConfig } from '../../interfaces/provider/IProviderComponentConfig'
import ISeverity from '../../interfaces/severity/ISeverity'
import ITick from '../../interfaces/ticks/ITick'
import StatusLib from '../StatusLib'

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

  getIncidents(query?: Object): Promise<IIncident[]> {
    return StatusLib.instance
      .getNuxt()
      .$content('incidents')
      .where({ ...query, affected: { $contains: this.name } })
      .fetch() as Promise<IIncident[]>
  }

  async getTicks(range: number): Promise<ITick[]> {
    const ticks: ITick[] = []
    const incidents = await this.getIncidents()
    const severityRegistry = StatusLib.instance.severities

    for (let i = range; i > 0; i--) {
      const date = moment().startOf('day').subtract(i, 'days')
      const tIncidents: IIncident[] = incidents.filter((i: IIncident) => {
        return date.isBetween(
          i.date === undefined ? i.createdAt : i.date,
          this.getResolvedDate(i)
        )
      })

      const allStates: ISeverity[] = [
        ...(tIncidents
          .map((i) => severityRegistry.get(i.severity))
          .filter((s) => s !== undefined) as ISeverity[]),
        severityRegistry.get('operational') as ISeverity,
      ]

      ticks.push({
        date,
        incidents: tIncidents,
        severity: StatusLib.instance.severities.worstOf(...allStates),
      })
    }

    return ticks
  }

  //
  // Private
  //
  private getResolvedDate(i: IIncident): Date {
    if (i.resolved === true) {
      return i.updatedAt
    }

    if (i.resolved && moment(i.resolved).isValid()) {
      return moment(i.resolved).toDate()
    }

    return new Date()
  }
}