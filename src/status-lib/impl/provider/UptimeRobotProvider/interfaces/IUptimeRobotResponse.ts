import IUptimeRobotMonitor from "./IUptimeRobotMonitor";
import IUptimeRobotPagination from "./IUptimeRobotPaginations";

export default interface IUptimeRobotResponse {
  stat: 'ok' | 'fail'
  pagination: IUptimeRobotPagination
  monitors: IUptimeRobotMonitor[]
}
