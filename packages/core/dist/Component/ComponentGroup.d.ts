import Component from "./Component";
export interface ComponentGroupCParams {
    name?: string;
    description?: string;
}
export default class ComponentGroup {
    readonly name?: string;
    readonly description?: string;
    readonly components: Component[];
    constructor({ name, description }: ComponentGroupCParams);
    addComponent(component: Component): Promise<void>;
    addComponents(components: Component[]): Promise<void>;
    getName(): Promise<string>;
    getDescription(): Promise<string>;
    getComponents(): Promise<Component[]>;
}
