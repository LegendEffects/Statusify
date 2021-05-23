import lib from "..";
import Component from "../Component/Component";
import ComponentGroup from "../Component/ComponentGroup";
import WorstSeverity from "../Util/WorstSeverity";
import ICalculatesSeverities from "./ICalculatesSeverities";
import Severity from "./Severity";

export default class AchievedSeverityCalculator implements ICalculatesSeverities {
  async getGlobalSeverity(statusify: lib): Promise<Severity> {
    const components = await statusify.getComponents();

    const compSeverities = (
      await Promise.all(components.map(async c_ => {
        return await this.getAchievedSeveritiesForComponent(c_, statusify)
      }))
    ).flat()

    return WorstSeverity(compSeverities, statusify)
  }

  async getSeverityForGroup(group: ComponentGroup, statusify: lib): Promise<Severity> {
    const compSeverities = (
      await Promise.all(group.components.map(async c_ => {
        return await this.getAchievedSeveritiesForComponent(c_, statusify)
      }))
    ).flat()

    return WorstSeverity(compSeverities, statusify)
  }

  async getSeverityForComponent(component: Component, statusify: lib): Promise<Severity> {
    return WorstSeverity(await this.getAchievedSeveritiesForComponent(component, statusify), statusify)
  }

  //
  // Protected
  //
  protected async getAchievedSeveritiesForComponent(component: Component, statusify: lib) {
    const severities = await statusify.getSeverities();

    return (await Promise.all(severities.map(async s => ({s, a: await s.achieved(component)}) )))
      .filter(e => e.a === true)
      .map(e => e.s)
  }
}