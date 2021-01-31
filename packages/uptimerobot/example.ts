import IMetricRange from "@statusify/core/lib/Metric/IMetricRange";
import UptimeRobotCore from "./lib";
import UptimeRobotLatency from "./lib/Metric/UptimeRobotLatency";
import UptimeRobotDowntime from "./lib/Metric/UptimeRobotDowntime";

import * as moment from "moment"


async function bootstrap() {
  const core = new UptimeRobotCore('ur488195-bd46852677deb5ca10988538');
  const testMonitor = new UptimeRobotDowntime(core, {
    monitorID: 780071088,
    id: 'ur-latency',
    name: 'Latency'
  })

  // const ranges: IMetricRange[] = [...Array(30)].map((_, i) => {
  //   const m = moment().subtract(i, 'days');
  //   return {
  //       start: m.startOf('day').toDate(),
  //       end: m.endOf('day').toDate()
  //   }
  // })
  // console.log(ranges)

  
  const range: IMetricRange = {
    start: moment().subtract(90, 'days').toDate(),
    end: moment().toDate()
  }

  console.log(await testMonitor.getPeriod(range))
  console.log(await testMonitor.getAverage(range))
}

bootstrap();