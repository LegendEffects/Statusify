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
                return false
            }),

        runnableSeverity('partial')
            .name('Partial')
            .runnable(async (component) => {
                return false
            }),

        runnableSeverity('minor')
            .name('Minor')
            .runnable(async (component) => {
                return true
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