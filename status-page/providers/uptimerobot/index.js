import moment from "moment";

// Sample response
// {
//   numOfDays: 7,
//   uptimeRatios: [
//     100.00,
//     100.00,
//     100.00,
//     100.00
//     88.35,
//     100.00,
//     75.35
//   ],
//   averageUptimes: {
//     90: 100.0,
//     60: 100.0,
//     30: 100.0
//   }
//
//   latency: {
//     timestamps: ["20:53","21:03","21:18","21:43","21:58"],
//     latency: [16,0,16,0,11]
//   }
// }

let monitorIDs = [];
let cache = null;

export default {
  async init({axios, config}) {
    for(const group of config.monitors) {
      let monitors = Array.isArray(group) ? group : group.monitors;
      for(const monitorIndex in monitors) monitorIDs.push(monitors[monitorIndex].provider_id);
    }

    let uptimeRanges = [];
    for(let d = 0; d <= 90; d++) {
      const dayMoment = moment().dayOfYear(moment().dayOfYear() - d);
      console.log(dayMoment);

      uptimeRanges.push(dayMoment.startOf('day').unix() + '_' + dayMoment.endOf('day').unix());
    }

    await axios.post('https://api.uptimerobot.com/v2/getMonitors', { 
      api_key: config.provider.apikey,
      monitors: monitorIDs.join('-'),
      custom_uptime_ratios: '30-60-90',
      custom_uptime_ranges: uptimeRanges.join('-')
    }).then(response => {
      cache = response.data;
      console.log(response);
    }).catch(err => {
      console.log(err);
    })
  },

  fetchMonitor({axios, monitorConfig}) {
    
    const monitor = cache.monitors.find(mon => mon.id === monitorConfig.provider_id);
    const averages = monitor.custom_uptime_ratio.split('-');

    return {
      numOfDays: 90,

      uptimeRatios: monitor.custom_uptime_ranges.split('-').map(val => parseFloat(val)),
      averageUptimes: {
        30: parseFloat(averages[0]),
        60: parseFloat(averages[1]),
        90: parseFloat(averages[2])
      }
    }
  }
}