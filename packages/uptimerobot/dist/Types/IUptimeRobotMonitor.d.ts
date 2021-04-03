import UptimeRobotMonitorType from "./UptimeRobotMonitorType";
import IUptimeRobotResponseTime from "./IUptimeRobotResponseTime";
import UptimeRobotMonitorStatus from "./UptimeRobotMonitorStatus";
export default interface IUptimeRobotMonitor {
    id: number;
    friendly_name: string;
    url: string;
    type: UptimeRobotMonitorType;
    sub_type: number | string;
    interval: number;
    status: UptimeRobotMonitorStatus;
    create_datetime: number;
    all_time_uptime_ratio?: string;
    all_time_uptime_durations?: string;
    custom_uptime_ratios?: string;
    custom_down_durations?: string;
    custom_uptime_ranges?: string;
    average_response_time?: string;
    response_times?: IUptimeRobotResponseTime[];
}
