import { MonitorInfo, ProviderMonitorResponse } from "~/types";

/**
 * Yes, this is dumb, but TypeScript doesn't allow for `instanceof` checks on interfaces
 * due to them only existing during compile time.
 */
export default abstract class Provider {
  abstract async init(): Promise<void>;
  abstract async fetchMonitor(monitor: MonitorInfo): Promise<ProviderMonitorResponse>;

  async availableFor(monitor: MonitorInfo): Promise<boolean> {
    if(monitor.provider === undefined) {
      return false;
    }

    if(monitor.provider.id === undefined) {
      return false;
    }

    return true;
  }
}
