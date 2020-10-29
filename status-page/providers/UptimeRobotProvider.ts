import Config from '~/config';
import moment from 'moment';
import Provider from "./Provider";
import { $axios } from '~/plugins/3-AxiosAccessor';
import { MonitorInfo } from '~/types';

export default class UptimeRobotProvider extends Provider {
  private cache: any = null;
  private key: string;
  private monitorIDs: string[] = [];

  constructor(apiKey: string) {
    super();
    this.key = apiKey;
  }

  async init() {
    this.monitorIDs = []
    for(const group of Config.monitors) {
      let monitors = Array.isArray(group) ? group : group.monitors;

      for(const monitor of monitors) {
        if(monitor.provider === undefined) {
          continue;
        }

        this.monitorIDs.push(monitor.provider.id);
      }
    }

    let uptimeRanges = [];
    for(let d = 0; d <= 90; d++) {
      const dayMoment = moment().subtract(d, 'days');
      uptimeRanges.push(`${dayMoment.startOf('day').unix()}_${dayMoment.endOf('day').unix()}`);
    }

    let averageRanges = Config.viewportMargins.map(r => r.days);

    const { data } = await $axios.post('https://api.uptimerobot.com/v2/getMonitors', {
      api_key: this.key,
      monitors: this.monitorIDs.join('-'),
      custom_uptime_ratios: averageRanges.join('-'),
      custom_uptime_ranges: uptimeRanges.join('-')
    });

    this.cache = data;
  }

  async fetchMonitor(monitorInfo: MonitorInfo) {
    if(monitorInfo.provider === undefined || monitorInfo.provider.id === undefined) {
      throw new Error("Invalid Provider ID Given.");
    }

    const monitor = this.cache.monitors.find((mon: any) => (mon.id === parseInt(monitorInfo.provider.id)));
    if(monitor === undefined) {
      throw new Error(`Unable to find monitor with Provider ID "${monitorInfo.provider.id}"`);
    }

    const averages = monitor.custom_uptime_ratio.split('-');

    return {
      uptimeRatios: monitor.custom_uptime_ranges.split('-').map((val: string) => parseFloat(val)),
      averageUptimes: {
        30: parseFloat(averages[0]),
        60: parseFloat(averages[1]),
        90: parseFloat(averages[2])
      }
    }
  }

  async availableFor(monitorInfo: MonitorInfo) {
    if(!(await super.availableFor(monitorInfo))) {
      return false;
    }

    return this.cache.monitors.find((mon: any) => (mon.id === parseInt(monitorInfo.provider.id))) !== undefined;
  }
}
