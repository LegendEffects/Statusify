import lib from "..";
import Component from "../Component/Component";
import ComponentGroup from "../Component/ComponentGroup";
import ICalculatesSeverities from "./ICalculatesSeverities";
import Severity from "./Severity";
export default class AchievedSeverityCalculator implements ICalculatesSeverities {
    getGlobalSeverity(statusify: lib): Promise<Severity>;
    getSeverityForGroup(group: ComponentGroup, statusify: lib): Promise<Severity>;
    getSeverityForComponent(component: Component, statusify: lib): Promise<Severity>;
    protected getAchievedSeveritiesForComponent(component: Component, statusify: lib): Promise<Severity[]>;
}
