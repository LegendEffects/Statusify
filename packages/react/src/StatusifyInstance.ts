import Statusify from '@statusify/core/dist'
import { Builder, group, component } from '@statusify/core/dist/Builder'
import { runnableSeverity } from '@statusify/core/dist/Severity/RunnableSeverity'
import IncidentSeverityCalculator from '@statusify/core/dist/Severity/IncidentSeverityCalculator'
import AchievedSeverityCalculator from '@statusify/core/dist/Severity/AchievedSeverityCalculator'
import SeverityMultiplexer from '@statusify/core/dist/Severity/SeverityMultiplexer'
import ArrayIncidentProvider from '@statusify/core/dist/Incident/ArrayIncidentProvider'

import UptimeRobotCore from '@statusify/uptimerobot/dist'
import UptimeRobotLatency from '@statusify/uptimerobot/dist/Metric/UptimeRobotLatency'
import UptimeRobotDowntime from '@statusify/uptimerobot/dist/Metric/UptimeRobotDowntime'


const uptimeRobotCore = new UptimeRobotCore('ur488195-bd46852677deb5ca10988538');

const built = new Builder()
    .groups([
        group()
            .name('Servers')
            .description('Our core services are hosted here.')
            .components([
                component('vps')
                    .name('VPS')
                    .description('The core of our services.')
                    .metric(new UptimeRobotLatency(uptimeRobotCore, {name: 'Latency', monitorID: 780071088, id: 'vps-latency'}))
                    .metric(new UptimeRobotDowntime(uptimeRobotCore, {name: 'Downtime', monitorID: 780071088, id: 'vps-downtime'})),
                    
                    
                component('demo-pages')
                    .name('Demo Pages')
                    .metric(new UptimeRobotLatency(uptimeRobotCore, {name: 'Latency', monitorID: 779382341, id: 'demo-pages-latency'}))
                    .metric(new UptimeRobotDowntime(uptimeRobotCore, {name: 'Latency', monitorID: 779382341, id: 'demo-pages-downtime'}))
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
    incidentProvider: new ArrayIncidentProvider(),
    severityCalculator: new SeverityMultiplexer([
        new IncidentSeverityCalculator(),
        new AchievedSeverityCalculator()
    ])
});

export default statusify;