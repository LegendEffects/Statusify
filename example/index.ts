import Statusify from '../packages/core/lib'
import { Builder, group, component } from '../packages/core/dist/Builder'
import { runnableSeverity } from '../packages/core/dist/Severity/RunnableSeverity'
import IncidentSeverityCalculator from '../packages/core/dist/Severity/IncidentSeverityCalculator'
import LokiIncidentProvider from './LokiIncidentProvider';

import UptimeRobotCore from '../packages/uptimerobot/dist/index'
import UptimeRobotLatency from '../packages/uptimerobot/dist/Metric/UptimeRobotLatency'
import UptimeRobotDowntime from '../packages/uptimerobot/dist/Metric/UptimeRobotDowntime'


const uptimeRobotCore = new UptimeRobotCore('ur488195-bd46852677deb5ca10988538');

const built = new Builder()
    .groups([
        group()
            .name('Test Group')
            .description('Test Groups Description')
            .components([
                component('component-1')
                    .name('Test Component 1')
                    .description('Test Component 1 Description')
                    .metric(new UptimeRobotLatency(uptimeRobotCore, {name: 'Latency', monitorID: 780071088, id: 'ur-latency-1'}))
                    .metric(new UptimeRobotDowntime(uptimeRobotCore, {name: 'Downtime', monitorID: 780071088, id: 'ur-downtime-1'})),
                    
                    
                component('component-2')
                    .name('Test Component 2')
            ]),

        group()
            .name('Test Group 2')
            .components([
                component('component-3')
                    .name('Test Component 3')
                    .description('Test Component 3 Description'),

                component('component-4')
                    .name('Test Component 4')
            ]),
    ])
    
    .severities([
        runnableSeverity('operational')
            .name('Operational')
            .runnable(async (component) => {
                return true
            }),

        runnableSeverity('partial')
            .name('Partial')
            .runnable(async (component) => {
                return false
            }),

        runnableSeverity('minor')
            .name('Minor')
            .runnable(async (component) => {
                return false
            }),
        
        runnableSeverity('major')
            .name('Major')
            .runnable(async (component) => {
                return false
            }),
    ])
;

export const statusify = new Statusify({
componentProvider: built,
severityProvider: built,
incidentProvider: new LokiIncidentProvider(),
severityCalculator: new IncidentSeverityCalculator()
});

export default statusify;

//   const groups = await statusify.getComponentGroups()

//   console.log(await statusify.getIncidentsFor(groups[0].components[0], {}))
//   console.log(groups)
//   console.log(await statusify.getIncidents())
//   console.log(await statusify.getSeverityForGroup(groups[0]))
//   console.log(await statusify.getSeverityForComponent(groups[0].components[0]))
    // console.log((await groups[0].getComponents())[0].metrics)