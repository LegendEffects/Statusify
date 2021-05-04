import AttributeStorage, { AttributeStorageType } from "../Util/AttributeStorage";
import Component from "./Component";
export interface ComponentGroupCParams {
    name?: string;
    description?: string;
    attributes?: AttributeStorageType;
}
export default class ComponentGroup extends AttributeStorage {
    readonly name?: string;
    readonly description?: string;
    readonly components: Component[];
    constructor({ name, description, attributes }: ComponentGroupCParams);
    addComponent(component: Component): Promise<void>;
    addComponents(components: Component[]): Promise<void>;
    getName(): Promise<string>;
    getDescription(): Promise<string>;
    getComponents(): Promise<Component[]>;
}
