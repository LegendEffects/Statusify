"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericUptimeRobotMetric = void 0;
const Metric_1 = require("@statusify/core/dist/Metric/Metric");
class GenericUptimeRobotMetric extends Metric_1.default {
    constructor(type, urc, _a) {
        var { monitorID } = _a, inherited = __rest(_a, ["monitorID"]);
        super(Object.assign({ type }, inherited));
        this.urc = urc;
        this.monitorID = monitorID;
    }
}
exports.GenericUptimeRobotMetric = GenericUptimeRobotMetric;
//# sourceMappingURL=GenericUptimeRobotMetric.js.map