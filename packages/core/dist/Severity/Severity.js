"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AttributeStorage_1 = __importDefault(require("../Util/AttributeStorage"));
class Severity extends AttributeStorage_1.default {
    constructor({ id, name, attributes }) {
        super(attributes);
        this.id = id;
        this.name = name;
    }
}
exports.default = Severity;
//# sourceMappingURL=Severity.js.map