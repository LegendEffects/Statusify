"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AttributeStorage_1 = __importDefault(require("../Util/AttributeStorage"));
class Component extends AttributeStorage_1.default {
    constructor({ id, name, description, metrics, attributes }) {
        super(attributes);
        this.id = id;
        this.name = name;
        this.description = description;
        this.metrics = metrics;
    }
}
exports.default = Component;
//# sourceMappingURL=Component.js.map