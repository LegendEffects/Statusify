import { ANONYMOUS, CHART_AVERAGE, CHART_SERIES_NAME, CHART_TITLE, COLLAPSED, COLLAPSIBLE } from './app/constants/FrontendOptions'
import { Builder, component, group } from '@statusify/core/dist/Builder'

import AchievedSeverityCalculator from '@statusify/core/dist/Severity/AchievedSeverityCalculator'
import ArrayIncidentProvider from '@statusify/core/dist/Incident/ArrayIncidentProvider'
import IncidentSeverityCalculator from '@statusify/core/dist/Severity/IncidentSeverityCalculator'
import SeverityMultiplexer from '@statusify/core/dist/Severity/SeverityMultiplexer'
import Statusify from '@statusify/core/dist'
import UptimeRobotCore from '@statusify/uptimerobot/dist'
import UptimeRobotDowntime from '@statusify/uptimerobot/dist/Metric/UptimeRobotDowntime'
import UptimeRobotLatency from '@statusify/uptimerobot/dist/Metric/UptimeRobotLatency'
import { runnableSeverity } from '@statusify/core/dist/Severity/RunnableSeverity'

const uptimeRobotCore = new UptimeRobotCore('ur488195-bd46852677deb5ca10988538');

const built = new Builder()
    .groups([
        group()
            .name('Servers')
            .description('Our core services are hosted here.')
            .attribute(COLLAPSED, false) // Make the group expanded automatically
            .components([
                component('vps')
                    .name('VPS')
                    .description('The core of our services.')
                    .metric(
                        new UptimeRobotLatency(uptimeRobotCore, {name: 'Latency', monitorID: 780071088, id: 'vps-latency'})
                            .attribute(CHART_TITLE, 'Latency')
                            .attribute(CHART_SERIES_NAME, 'Latency (ms)')
                            .attribute(CHART_AVERAGE, 'Averaging {{average}}ms')
                    )
                    .metric(new UptimeRobotDowntime(uptimeRobotCore, {name: 'Downtime', monitorID: 780071088, id: 'vps-downtime'})),
                    
                    
                component('demo-pages')
                    .name('Demo Pages')
                    .metric(new UptimeRobotLatency(uptimeRobotCore, {name: 'Latency', monitorID: 779382341, id: 'demo-pages-latency'}))
                    .metric(new UptimeRobotDowntime(uptimeRobotCore, {name: 'Downtime', monitorID: 779382341, id: 'demo-pages-downtime'}))
            ]),

        group()
            .name('Test Group 2')
            // If a group is both noncollapsible and anonymous then the header is hidden
            .attribute(COLLAPSIBLE, false) // An noncollapsible group is automatically expanded
            .attribute(ANONYMOUS, true) // Anonymous groups are automatically expanded
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

const incidentProvider = new ArrayIncidentProvider();

export const statusify = new Statusify({
    componentProvider: built,
    severityProvider: built,
    incidentProvider: incidentProvider,
    severityCalculator: new SeverityMultiplexer([
        new IncidentSeverityCalculator(),
        new AchievedSeverityCalculator()
    ])
});

async function bootstrapDependencies() {
    incidentProvider.incidents.push({
        id: 'test-incident',
        name: 'Incident on Cluster SBG-1',
        body: 'We are encountering a partial outage that impacts some API calls.',
        bodyStatus: 'Partial',
        updates: [
            {
                body: 'The incident has been resolved.',
                bodyStatus: 'Operational',
                severity: await statusify.getSeverity('operational'),
                createdAt: new Date(1620405538852),
                updatedAt: new Date(),
            },
            {
                body: 'All API calls are now impacted, our teams are working hard to get everything back on track.',
                bodyStatus: 'Major',
                severity: await statusify.getSeverity('major'),
                createdAt: new Date(1620403538852),
                updatedAt: new Date(),
            },
        ],
        resolvedAt: null,
        severity: await statusify.getSeverity('partial'),
        components: [
            await statusify.getComponent('vps')
        ],
        createdAt: new Date(1620403138852),
        updatedAt: new Date(),
    });
}

bootstrapDependencies();

export default statusify;