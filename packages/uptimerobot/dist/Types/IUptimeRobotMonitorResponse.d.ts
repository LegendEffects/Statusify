import IUptimeRobotMonitor from "./IUptimeRobotMonitor";
import IUptimeRobotResponse from "./IUptimeRobotResponse";
export default interface IUptimeRobotMonitorResponse extends IUptimeRobotResponse {
    monitors: IUptimeRobotMonitor[];
}
