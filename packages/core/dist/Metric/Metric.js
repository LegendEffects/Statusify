"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metric = exports.MetricType = void 0;
var MetricType;
(function (MetricType) {
    MetricType["DOWNTIME"] = "downtime";
    MetricType["LATENCY"] = "latency";
    MetricType["CUSTOM"] = "custom";
})(MetricType = exports.MetricType || (exports.MetricType = {}));
class Metric {
    constructor({ type, id, name, description }) {
        this.type = type;
        this.id = id;
        this.name = name;
        this.description = description;
    }
}
exports.Metric = Metric;
exports.default = Metric;
//# sourceMappingURL=Metric.js.map