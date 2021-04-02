"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Metric_1 = require("@statusify/core/dist/Metric/Metric");
const GenericUptimeRobotMetric_1 = require("./GenericUptimeRobotMetric");
const moment = require("moment");
const UseCache_1 = require("../Util/UseCache");
const constants_1 = require("../constants");
class UptimeRobotDowntime extends GenericUptimeRobotMetric_1.GenericUptimeRobotMetric {
    constructor(urc, params) {
        super(Metric_1.MetricType.DOWNTIME, urc, params);
        this.getDowntimes = UseCache_1.default(constants_1.CACHE_LIFETIME * 1000, this.pullNewData.bind(this))[0];
    }
    getPeriod(range) {
        return this.getDowntimes(range);
    }
    getAverage(range) {
        throw new Error("Method not implemented.");
    }
    async pullNewData(range) {
        const days = Math.round(moment.duration(moment(range.end).diff(moment(range.start))).asDays());
        const ranges = [...Array(days)].map((_, i) => {
            const m = moment().subtract(i, 'days');
            return `${m.startOf('day').unix()}_${m.endOf('day').unix()}`;
        }).join('-');
        const { data } = await this.urc.axios.post('getMonitors', {
            monitors: String(this.monitorID),
            custom_uptime_ranges: ranges,
            custom_down_durations: 1
        });
        return data.monitors[0].custom_uptime_ranges
            .split('-')
            .map((pr, i) => {
            return {
                time: moment(range.end).subtract(i, 'days').toDate(),
                value: constants_1.MILLISECONDS_IN_DAY - (constants_1.MILLISECONDS_IN_DAY * (parseFloat(pr) / 100))
            };
        });
    }
}
exports.default = UptimeRobotDowntime;
//# sourceMappingURL=UptimeRobotDowntime.js.map