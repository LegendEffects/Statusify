"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ComponentGroup {
    constructor({ name, description }) {
        this.components = [];
        this.name = name;
        this.description = description;
    }
    async addComponent(component) {
        this.components.push(component);
    }
    async addComponents(components) {
        for (const component of components) {
            this.addComponent(component);
        }
    }
    async getName() {
        return this.name;
    }
    async getDescription() {
        return this.description;
    }
    async getComponents() {
        return this.components;
    }
}
exports.default = ComponentGroup;
//# sourceMappingURL=ComponentGroup.js.map