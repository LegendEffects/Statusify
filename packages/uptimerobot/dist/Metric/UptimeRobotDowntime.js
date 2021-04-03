"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Metric_1 = require("@statusify/core/dist/Metric/Metric");
const GenericUptimeRobotMetric_1 = require("./GenericUptimeRobotMetric");
const constants_1 = require("../constants");
const dayjs_1 = __importDefault(require("dayjs"));
class UptimeRobotDowntime extends GenericUptimeRobotMetric_1.GenericUptimeRobotMetric {
    constructor(urc, params) {
        super(Metric_1.MetricType.DOWNTIME, urc, params);
        this.urc.useMonitor(this.monitorID, Metric_1.MetricType.DOWNTIME);
    }
    getPeriod(range) {
        return this.fetchData(range);
    }
    async getAverage(range) {
        const downtimes = await this.getPeriod(range);
        return {
            time: range.start,
            value: downtimes.map(v => v.value).reduce((a, b) => a + b) / downtimes.length
        };
    }
    async fetchData(range) {
        const data = await this.urc.getMonitor(range, this.monitorID, Metric_1.MetricType.DOWNTIME);
        return data.custom_uptime_ranges.split('-')
            .map((pr, i) => {
            return {
                time: dayjs_1.default(range.end).subtract(i, 'days').toDate(),
                value: constants_1.MILLISECONDS_IN_DAY - (constants_1.MILLISECONDS_IN_DAY * (parseFloat(pr) / 100))
            };
        })
            .filter(r => r.value > 0);
    }
}
exports.default = UptimeRobotDowntime;
//# sourceMappingURL=UptimeRobotDowntime.js.map