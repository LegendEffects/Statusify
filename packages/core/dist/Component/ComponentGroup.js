"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AttributeStorage_1 = __importDefault(require("../Util/AttributeStorage"));
class ComponentGroup extends AttributeStorage_1.default {
    constructor({ name, description, attributes }) {
        super(attributes);
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