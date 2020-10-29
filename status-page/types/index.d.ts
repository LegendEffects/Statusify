import { contentFunc } from "@nuxt/content"
import VueI18n from "vue-i18n"
import Provider from "~/providers/Provider"
import Logger from "~/utils/Logger"

export type MonitorGroup = {
  name?: string;
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
  slug: string;
}

declare module '@nuxt/types' {
  interface Context {
    $logger: Logger;
    $i18n: VueI18n;
    $content: contentFunc;
    $provider: Provider;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $logger: Logger;
    $provider: Provider;
  }
}
