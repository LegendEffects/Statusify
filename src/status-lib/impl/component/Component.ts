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

  /**
   * @inheritdoc
   */
  getIncidents(query?: Object): Promise<IIncident[]> {
    return StatusLib.instance
      .getNuxt()
      .$content('incidents')
      .where({ ...query, affected: { $contains: this.slug } })
      .fetch() as Promise<IIncident[]>
  }

  /**
   * @inheritdoc
   */
  async getTicks(range: number): Promise<ITick[]> {
    const ticks: ITick[] = []
    const incidents = await this.getIncidents()
    const severityRegistry = StatusLib.instance.severities
    const provider = StatusLib.instance.provider

    let providerInfo

    if (provider !== undefined) {
      try {
        providerInfo = await provider.ticksInfo(this, 90)
      } catch (e) {}
    }

    for (let i = range - 1; i >= 0; i--) {
      const date = moment().startOf('day').subtract(i, 'days')
      const tIncidents: IIncident[] = incidents.filter((i: IIncident) => {
        return date.isBetween(
          i.date === undefined ? i.createdAt : i.date,
          this.getResolvedDate(i)
        )
      })

      let downtime
      let uptimePercentage
      if (providerInfo !== undefined && providerInfo[i].downtime !== 0) {
        downtime = {
          length: providerInfo[i].downtime,
          severity: severityRegistry.fromPercentage(
            ((86400 - providerInfo[i].downtime) / 86400) * 100
          ),
        }
        uptimePercentage = providerInfo[i].uptimePercentage
      }

      // Calculate state
      const allStates: ISeverity[] = [
        ...(tIncidents
          .map((i) => severityRegistry.get(i.severity))
          .filter((s) => s !== undefined) as ISeverity[]),
        severityRegistry.get('operational') as ISeverity,
      ]

      if (uptimePercentage !== undefined) {
        allStates.push(severityRegistry.fromPercentage(uptimePercentage))
      }

      ticks.push({
        date,
        incidents: tIncidents,
        severity: StatusLib.instance.severities.worstOf(...allStates),
        uptimePercentage,
        downtime,
      })
    }

    return ticks
  }

  /**
   * @inheritdoc
   */
  async getSeverity(): Promise<ISeverity> {
    const provider = StatusLib.instance.provider
    const severityRegistry = StatusLib.instance.severities
    const states = [severityRegistry.get('operational') as ISeverity]

    // From Incidents
    const incidentStates: ISeverity[] =
      (
        await this.getIncidents({
          resolved: {
            $in: [null, false],
          },
        })
      ).map((i) => severityRegistry.get(i.severity)) || []

    // From Provider
    if (provider !== undefined) {
      try {
        const providerState = await provider.getSeverity(this)
        if (providerState !== undefined) {
          states.push(providerState)
        }
      } catch (e) {}
    }

    // Get the worst one
    return severityRegistry.worstOf(...states, ...incidentStates)
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
