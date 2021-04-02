import Component from "../Component/Component";
import ComponentGroup from "../Component/ComponentGroup";
import IProvidesComponents from "../Component/IProvidesComponents";
import Statusify from "..";
import MetricRecord from "../Metric/MetricRecord";
import Metric from "../Metric/Metric";
export declare class ComponentBuilderMixin implements IProvidesComponents {
    _groups: ComponentGroupBuilder[];
    groups(builders: ComponentGroupBuilder[]): this;
    getComponentGroups(_statusify: Statusify): Promise<ComponentGroup[]>;
    getComponents(statusify: Statusify): Promise<Component[]>;
    getComponent(statusify: Statusify, id: string): Promise<Component>;
}
export declare class ComponentGroupBuilder {
    protected _name?: string;
    protected _description?: string;
    protected _components: ComponentBuilder[];
    name(name: string): this;
    description(description: string): this;
    components(builders: ComponentBuilder[]): this;
    build(): ComponentGroup;
}
export declare function group(): ComponentGroupBuilder;
export declare class ComponentBuilder {
    protected _id: string;
    protected _name: string;
    protected _description?: string;
    protected _metrics?: Metric<MetricRecord>[];
    constructor(id: string);
    name(name: string): this;
    description(description: string): this;
    metric(metric: Metric<MetricRecord>): this;
    build(): Component;
}
export declare function component(id: string): ComponentBuilder;
