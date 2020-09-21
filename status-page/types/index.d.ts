import { AxiosInstance } from 'axios';

export type MonitorGroupInfo = {
  name: string;
  description?: string;

  collapsible?: boolean;
  collapsed?: boolean;

  monitors: MonitorInfo[];
}
export type MonitorInfo = {
  name: string;
  description?: string;

  provider?: any; // Any provider options
}

export type ProviderMonitorResponse = {
  uptimeRatios: number[];
  averageUptimes: {[key: number]: number};
  latency?: {[key: string]: number}
}

export interface Monitor extends MonitorInfo {
  providerInfo?: ProviderMonitorResponse;
}

// declare module 'vue-slide-up-down';
