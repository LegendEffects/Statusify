import lib from "..";
import Component from "../Component/Component";
import ComponentGroup from "../Component/ComponentGroup";
import WorstSeverity from "../Util/WorstSeverity";
import ICalculatesSeverities from "./ICalculatesSeverities";
import Severity from "./Severity";

/**
 * Combines multiple severity calculators into one
 */
export default class CombinedSeverityCalculator implements ICalculatesSeverities {
  private calculators: ICalculatesSeverities[];

  constructor(calculators: ICalculatesSeverities[]) {
    this.calculators = calculators;
  }

  async getGlobalSeverity(statusify: lib): Promise<Severity> {
    return WorstSeverity(
      await Promise.all(this.calculators.map(c => c.getGlobalSeverity(statusify))),
      statusify
    )
  }

  async getSeverityForGroup(group: ComponentGroup, statusify: lib): Promise<Severity> {
    return WorstSeverity(
      await Promise.all(this.calculators.map(c => c.getSeverityForGroup(group, statusify))),
      statusify
    )
  }

  async getSeverityForComponent(component: Component, statusify: lib): Promise<Severity> {
    return WorstSeverity(
      await Promise.all(this.calculators.map(c => c.getSeverityForComponent(component, statusify))),
      statusify
    )
  }
}