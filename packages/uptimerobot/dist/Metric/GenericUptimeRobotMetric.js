"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericUptimeRobotMetric = void 0;
const Metric_1 = __importDefault(require("@statusify/core/dist/Metric/Metric"));
class GenericUptimeRobotMetric extends Metric_1.default {
    constructor(type, urc, { monitorID, ...inherited }) {
        super({ type, ...inherited });
        this.urc = urc;
        this.monitorID = monitorID;
    }
}
exports.GenericUptimeRobotMetric = GenericUptimeRobotMetric;
//# sourceMappingURL=GenericUptimeRobotMetric.js.map