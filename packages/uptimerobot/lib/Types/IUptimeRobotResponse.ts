export default interface IUptimeRobotResponse {
  stat: "ok" | "fail";
  pagination: {
    offset: number;
    limit: number;
    total: number;
  }
}