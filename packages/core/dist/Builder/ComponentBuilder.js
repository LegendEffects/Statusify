"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.component = exports.ComponentBuilder = exports.group = exports.ComponentGroupBuilder = exports.ComponentBuilderMixin = void 0;
const Component_1 = require("../Component/Component");
const ComponentGroup_1 = require("../Component/ComponentGroup");
class ComponentBuilderMixin {
    constructor() {
        this._groups = [];
    }
    groups(builders) {
        this._groups = builders;
        return this;
    }
    async getComponentGroups(_statusify) {
        return this._groups.map(g => g.build());
    }
    async getComponents(statusify) {
        const components = [];
        (await this.getComponentGroups(statusify)).forEach(async (group) => {
            components.push(...(await group.getComponents()));
        });
        return components;
    }
    async getComponent(statusify, id) {
        const found = (await this.getComponents(statusify)).find(c => c.id === id);
        return (found === undefined) ? null : found;
    }
}
exports.ComponentBuilderMixin = ComponentBuilderMixin;
class ComponentGroupBuilder {
    constructor() {
        this._components = [];
    }
    name(name) {
        this._name = name;
        return this;
    }
    description(description) {
        this._description = description;
        return this;
    }
    components(builders) {
        this._components = builders;
        return this;
    }
    build() {
        const group = new ComponentGroup_1.default({
            name: this._name,
            description: this._description
        });
        group.addComponents(this._components.map(c => c.build()));
        return group;
    }
}
exports.ComponentGroupBuilder = ComponentGroupBuilder;
function group() {
    return new ComponentGroupBuilder();
}
exports.group = group;
class ComponentBuilder {
    constructor(id) {
        this._id = id;
    }
    name(name) {
        this._name = name;
        return this;
    }
    description(description) {
        this._description = description;
        return this;
    }
    metric(metric) {
        if (this._metrics === undefined)
            this._metrics = [];
        this._metrics.push(metric);
        return this;
    }
    build() {
        return new Component_1.default({
            id: this._id,
            name: this._name,
            description: this._description,
            metrics: this._metrics
        });
    }
}
exports.ComponentBuilder = ComponentBuilder;
function component(id) {
    return new ComponentBuilder(id);
}
exports.component = component;
//# sourceMappingURL=ComponentBuilder.js.map