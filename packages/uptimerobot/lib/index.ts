import axios, { AxiosInstance } from "axios";

import { CACHE_LIFETIME } from "./constants";
import IMetricRange from "@statusify/core/dist/Metric/IMetricRange";
import IUptimeRobotMonitorResponse from "./Types/IUptimeRobotMonitorResponse";
import { MetricType } from "@statusify/core/dist/Metric/Metric";
import dayjs from "dayjs";
import useCache from "./Util/useCache";
import useSomewhatSingleton from "./Util/useSomewhatSingleton";

export default class UptimeRobotCore {
    // Constants
    private static readonly API_URL = 'https://api.uptimerobot.com/v2/';
    
    // Instance
    public readonly axios: AxiosInstance;
    public readonly getDowntimeRes: (key: IMetricRange, ignoreCache?: boolean) => Promise<IUptimeRobotMonitorResponse>;
    public readonly getLatencyRes: (key: IMetricRange, ignoreCache?: boolean) => Promise<IUptimeRobotMonitorResponse>;

    // Stores monitor IDs that are in use so that they can all be done in 1 request
    private monitorIds: {[index in MetricType]: number[]} = {
        downtime: [],
        latency: [],
        custom: []
    }

    //
    // Constructor
    //
    constructor(apiKey: string, cacheLifetime: number = CACHE_LIFETIME) {
        this.axios = axios.create({
            baseURL: UptimeRobotCore.API_URL,
            params: {
                api_key: apiKey,
                format: 'json'
            }
        });

        this.getDowntimeRes = useSomewhatSingleton(
            useCache<IMetricRange, IUptimeRobotMonitorResponse>(cacheLifetime * 1000, this.getDowntimes.bind(this))[0]
        );
        this.getLatencyRes = useSomewhatSingleton(
            useCache<IMetricRange, IUptimeRobotMonitorResponse>(cacheLifetime * 1000, this.getLatencies.bind(this))[0]
        );
    }

    //
    // Public
    //
    public useMonitor(id: number, type: MetricType) {
        this.monitorIds[type].push(id);
    }

    public async getMonitor(key: IMetricRange, id: number, type: MetricType, ignoreCache?: boolean) {
        let res: IUptimeRobotMonitorResponse;

        switch(type) {
            case MetricType.DOWNTIME:
                res = await this.getDowntimeRes(key, ignoreCache);
                break;
            case MetricType.LATENCY:
                res = await this.getLatencyRes(key, ignoreCache);
                break;
            default:
                throw new Error("Attempted to get unsupported UptimeRobot monitor type.");
        }

        return res.monitors.find(m => m.id === id);
    }

    //
    // Private
    //
    private async getDowntimes(range: IMetricRange) {
        const days = Math.round(dayjs(range.end).diff(dayjs(range.start), 'days'));

        const ranges = [...Array(days)].map((_, i) => {
            const d = dayjs().subtract(i, 'days');
            return `${d.startOf('day').unix()}_${d.endOf('day').unix()}`
        }).join('-');


        const { data } = await this.axios.post('getMonitors', {
            monitors: this.monitorIds.downtime.join('-'),
            custom_uptime_ranges: ranges,
            custom_down_durations: 1
        });

        return data as IUptimeRobotMonitorResponse;        
    }

    private async getLatencies(range: IMetricRange) {
        const { data } = await this.axios.post('getMonitors', {
            monitors: this.monitorIds.latency.join('-'),
            response_times: 1,
            response_times_start_date: (range.start.getTime() / 1000),
            response_times_end_date: (range.end.getTime() / 1000)
        });

        return data as IUptimeRobotMonitorResponse;
    }
}