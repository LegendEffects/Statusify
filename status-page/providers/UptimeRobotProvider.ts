import Config from '~/config';
import moment from 'moment';
import Provider from "./Provider";
import { $axios } from '~/plugins/axios';
import config from '~/config';
import { MonitorInfo } from '~/types';

export default class UptimeRobotProvider extends Provider {
  private cache: any = null;
  private key: string;
  private monitorIDs: number[] = [];

  constructor(apiKey: string) {
    super();
    this.key = apiKey;
  }

  async init() {
    this.monitorIDs = []
    for(const group of Config.monitors) {
      let monitors = Array.isArray(group) ? group : group.monitors;
      for(const monitor of monitors) this.monitorIDs.push(monitor.provider_id);
    }

    let uptimeRanges = [];
    for(let d = 0; d <= 90; d++) {
      const dayMoment = moment().subtract(d, 'days');
      uptimeRanges.push(`${dayMoment.startOf('day').unix()}_${dayMoment.endOf('day').unix()}`);
    }

    const { data } = await $axios.post('https://api.uptimerobot.com/v2/getMonitors', {
      api_key: this.key,
      monitors: this.monitorIDs.join('-'),
      custom_uptime_ratios: '30-60-90',
      custom_uptime_ranges: uptimeRanges.join('-')
    });

    this.cache = data;
  }

  async fetchMonitor(monitorInfo: MonitorInfo) {
    const monitor = this.cache.monitors.find((mon: any) => mon.id === monitorInfo.provider.id);
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
}