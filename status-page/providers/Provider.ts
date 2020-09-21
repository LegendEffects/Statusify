import { MonitorInfo, ProviderMonitorResponse } from "~/types";

export default abstract class Provider {
  abstract async init(): Promise<void>;
  abstract async fetchMonitor(monitor: MonitorInfo): Promise<ProviderMonitorResponse>;
}