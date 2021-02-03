"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Metric_1 = require("@statusify/core/dist/Metric/Metric");
const moment = require("moment");
const constants_1 = require("../constants");
const UseCache_1 = require("../Util/UseCache");
const GenericUptimeRobotMetric_1 = require("./GenericUptimeRobotMetric");
class UptimeRobotLatency extends GenericUptimeRobotMetric_1.GenericUptimeRobotMetric {
    constructor(urc, params) {
        super(Metric_1.MetricType.LATENCY, urc, params);
        this.getLatency = UseCache_1.default(constants_1.CACHE_LIFETIME * 1000, this.pullNewData.bind(this))[0];
    }
    async getPeriod(range) {
        if (moment.duration(moment(range.end).diff(moment(range.start))).asDays() > 7) {
            throw new Error("Range cannot go past 7 days.");
        }
        return this.getLatency(range);
    }
    async getAverage(range) {
        const dataPoints = await this.getPeriod(range);
        const sum = dataPoints.reduce((r, i) => ({
            time: r.time,
            value: r.value + i.value
        }));
        return {
            time: new Date(),
            value: sum.value / dataPoints.length
        };
    }
    async pullNewData(range) {
        const { data } = await this.urc.axios.post('getMonitors', {
            monitors: String(this.monitorID),
            response_times: 1,
            response_times_start_date: (range.start.getTime() / 1000),
            response_times_end_date: (range.end.getTime() / 1000)
        });
        return data.monitors[0].response_times.map((t) => ({
            time: new Date(t.datetime * 1000),
            value: t.value
        }));
    }
}
exports.default = UptimeRobotLatency;
//# sourceMappingURL=UptimeRobotLatency.js.map