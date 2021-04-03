"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs_1 = __importDefault(require("dayjs"));
const Metric_1 = require("@statusify/core/dist/Metric/Metric");
const GenericUptimeRobotMetric_1 = require("./GenericUptimeRobotMetric");
class UptimeRobotLatency extends GenericUptimeRobotMetric_1.GenericUptimeRobotMetric {
    constructor(urc, params) {
        super(Metric_1.MetricType.LATENCY, urc, params);
        this.urc.useMonitor(this.monitorID, Metric_1.MetricType.LATENCY);
    }
    async getPeriod(range) {
        const data = await this.fetchData(range);
        return data.response_times.map((t) => ({
            time: new Date(t.datetime * 1000),
            value: t.value
        }));
    }
    async getAverage(range) {
        const data = await this.urc.getMonitor(range, this.monitorID, Metric_1.MetricType.LATENCY);
        return {
            time: new Date(),
            value: parseFloat(data.average_response_time)
        };
    }
    async fetchData(range) {
        let computedRange = range;
        if (dayjs_1.default(range.end).diff(range.start, 'days') > 7) {
            console.warn("Range cannot go past 7 days.");
            computedRange.start = dayjs_1.default(range.end).startOf('day').subtract(7, 'days').toDate();
        }
        return await this.urc.getMonitor(computedRange, this.monitorID, Metric_1.MetricType.LATENCY);
    }
}
exports.default = UptimeRobotLatency;
//# sourceMappingURL=UptimeRobotLatency.js.map