"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metric = exports.MetricType = void 0;
const AttributeStorage_1 = __importDefault(require("../Util/AttributeStorage"));
var MetricType;
(function (MetricType) {
    MetricType["DOWNTIME"] = "downtime";
    MetricType["LATENCY"] = "latency";
    MetricType["CUSTOM"] = "custom";
})(MetricType = exports.MetricType || (exports.MetricType = {}));
class Metric extends AttributeStorage_1.default {
    constructor({ type, id, name, description, attributes }) {
        super(attributes);
        this.type = type;
        this.id = id;
        this.name = name;
        this.description = description;
    }
}
exports.Metric = Metric;
exports.default = Metric;
//# sourceMappingURL=Metric.js.map