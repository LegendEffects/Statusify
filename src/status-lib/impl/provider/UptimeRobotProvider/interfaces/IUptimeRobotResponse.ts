import IUptimeRobotMonitor from './IUptimeRobotMonitor'
import IUptimeRobotPagination from './IUptimeRobotPagination'

export default interface IUptimeRobotResponse {
  stat: 'ok' | 'fail'
  pagination: IUptimeRobotPagination
  monitors: IUptimeRobotMonitor[]
}
