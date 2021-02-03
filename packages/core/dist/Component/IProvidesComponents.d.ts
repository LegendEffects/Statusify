import Statusify from "..";
import Component from "./Component";
import ComponentGroup from "./ComponentGroup";
export default interface IProvidesComponents {
    getComponentGroups(statusify: Statusify): Promise<ComponentGroup[]>;
    getComponents(statusify: Statusify): Promise<Component[]>;
    getComponent(statusify: Statusify, id: string): Promise<Component | null>;
}
