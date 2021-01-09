import Component from "../component/Component";
import ComponentGroup from "../Component/ComponentGroup";
import Statusify from "../Statusify";
import ICalculatesSeverities from "./ICalculatesSeverities";
import Severity from "./Severity";

/**
 * This take into account severities only, it is expected to be extended to implement extra functionality
 */
export default class IncidentSeverityProvider implements ICalculatesSeverities {

  /**
   * Gets the severity for a group
   * Uses the severity of the most degraded child in the group
   * @param group Group to get the severity for
   * @param statusify Statusify Core
   */
  async getSeverityForGroup(group: ComponentGroup, statusify: Statusify): Promise<Severity> {
    const componentSeverities = Promise.all(
      group.components.map(async (c) => {
        return this.getSeverityForComponent(c, statusify)
      })
    )
    
    return await this.worstSeverity(await componentSeverities, statusify)
  }
  
  /**
   * Gets the severity for a component
   * In this instance it gets all of the active incidents and finds the worst severity from those
   * @param component Component to get the severity for
   * @param statusify Statusify Core
   */
  async getSeverityForComponent(component: Component, statusify: Statusify): Promise<Severity> {
    const activeIncidents = await statusify.getIncidentsFor(component, {
      resolvedAt: null
    })

    return await this.worstSeverity(activeIncidents.map(i => i.severity), statusify)
  }

  //
  // Private
  //
  /**
   * Finds the worst severity from all of the severities provided
   * @param severities Severities to find the worst one of
   * @param statusify Statusify Core
   */
  private async worstSeverity(severities: Severity[], statusify: Statusify) {
    const allSeverities = await statusify.getSeverities()
    let currentWorst = 0

    for(const severity of severities) {
      const index = allSeverities.findIndex((cSev) => cSev.id === severity.id)
      currentWorst = (index > currentWorst) ? index : currentWorst
    }

    return allSeverities[currentWorst]
  }
}