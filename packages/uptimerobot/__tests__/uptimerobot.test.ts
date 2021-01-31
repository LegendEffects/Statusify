'use strict';
import IMetricRange from '@statusify/core/lib/Metric/IMetricRange';
import moment from 'moment';
import UptimeRobotCore from '../lib'
import UptimeRobotLatency from '../lib/Metric/UptimeRobotLatency'

const core = new UptimeRobotCore('ur488195-bd46852677deb5ca10988538');

describe('UptimeRobot/Latency', () => {
    const testMonitor = new UptimeRobotLatency(core, {
        monitorID: 780071088,
        id: 'ur-latency',
        name: 'Latency'
    })

    // test('Fetches Downtimes', async () => {
    //     // Get 30 days worth
    //     const ranges: IMetricRange[] = Array(30).map((_, i) => {
            
    //         const m = moment().subtract(i, 'days');
    //         return {
    //             start: m.startOf('day').toDate(),
    //             end: m.endOf('day').toDate()
    //         }
    //     })

    //     console.log(ranges)

    //     await testMonitor.fetchPeriods(ranges)
    // })
});
