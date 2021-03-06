import Component from "../Component/Component";
import ComponentGroup from "../Component/ComponentGroup";
import ICalculatesSeverities from "./ICalculatesSeverities";
import Severity from "./Severity";
import Statusify from "..";
import WorstSeverity from "../Util/WorstSeverity";

/**
 * This take into account severities only, it is expected to be extended to implement extra functionality
 */
export default class IncidentSeverityProvider implements ICalculatesSeverities {
  /**
   * Gets a global severity for all groups
   * Uses the severity of the most degraded child
   * @param statusify Statusify Core
   */
  async getGlobalSeverity(statusify: Statusify): Promise<Severity> {
    const componentSeverities = Promise.all(
      (await statusify.getComponents()).map(async (c) => {
        return this.getSeverityForComponent(c, statusify)
      })
    )

    return await WorstSeverity(await componentSeverities, statusify)
  }

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
    
    return await WorstSeverity(await componentSeverities, statusify)
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

    return await WorstSeverity(activeIncidents.map(i => i.severity), statusify)
  }
}