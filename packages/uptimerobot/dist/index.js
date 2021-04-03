"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const Metric_1 = require("@statusify/core/dist/Metric/Metric");
const constants_1 = require("./constants");
const dayjs_1 = __importDefault(require("dayjs"));
const useCache_1 = __importDefault(require("./Util/useCache"));
class UptimeRobotCore {
    constructor(apiKey, cacheLifetime = constants_1.CACHE_LIFETIME) {
        this.downtimeRequest = undefined;
        this.latencyRequest = undefined;
        this.monitorIds = {
            downtime: [],
            latency: [],
            custom: []
        };
        this.axios = axios_1.default.create({
            baseURL: UptimeRobotCore.API_URL,
            params: {
                api_key: apiKey,
                format: 'json'
            }
        });
        this.getDowntimeRes = useCache_1.default(cacheLifetime * 1000, this.getDowntimes.bind(this))[0];
        this.getLatencyRes = useCache_1.default(cacheLifetime * 1000, this.getLatencies.bind(this))[0];
    }
    useMonitor(id, type) {
        this.monitorIds[type].push(id);
    }
    async getMonitor(key, id, type, ignoreCache) {
        let res;
        switch (type) {
            case Metric_1.MetricType.DOWNTIME:
                res = await this.getDowntimeRes(key, ignoreCache);
                break;
            case Metric_1.MetricType.LATENCY:
                res = await this.getLatencyRes(key, ignoreCache);
                break;
            default:
                throw new Error("Attempted to get unsupported UptimeRobot monitor type.");
        }
        return res.monitors.find(m => m.id === id);
    }
    async getDowntimes(range) {
        if (this.downtimeRequest !== undefined) {
            return this.downtimeRequest;
        }
        this.downtimeRequest = new Promise(async (resolve) => {
            const days = Math.round(dayjs_1.default(range.end).diff(dayjs_1.default(range.start), 'days'));
            const ranges = [...Array(days)].map((_, i) => {
                const d = dayjs_1.default().subtract(i, 'days');
                return `${d.startOf('day').unix()}_${d.endOf('day').unix()}`;
            }).join('-');
            const { data } = await this.axios.post('getMonitors', {
                monitors: this.monitorIds.downtime.join('-'),
                custom_uptime_ranges: ranges,
                custom_down_durations: 1
            });
            return resolve(data);
        });
        return this.downtimeRequest;
    }
    async getLatencies(range) {
        if (this.latencyRequest !== undefined) {
            return this.latencyRequest;
        }
        this.latencyRequest = new Promise(async (resolve) => {
            const { data } = await this.axios.post('getMonitors', {
                monitors: this.monitorIds.latency.join('-'),
                response_times: 1,
                response_times_start_date: (range.start.getTime() / 1000),
                response_times_end_date: (range.end.getTime() / 1000)
            });
            return resolve(data);
        }).then(this.latencyRequest = undefined);
        return this.latencyRequest;
    }
}
exports.default = UptimeRobotCore;
UptimeRobotCore.API_URL = 'https://api.uptimerobot.com/v2/';
//# sourceMappingURL=index.js.map