import Statusify from '../packages/core/lib/Statusify'
import { Builder, group, component } from '../packages/core/lib/Builder'
import { runnableSeverity } from '../packages/core/lib/Severity/RunnableSeverity'
import LokiIncidentProvider from './LokiIncidentProvider';

async function bootstrap() {
  const builder = new Builder()
        .groups([
            group()
                .name('Test Group')
                .description('Test Groups Description')
                .components([
                    component('component-1')
                        .name('Test Component 1')
                        .description('Test Component 1 Description'),
                        
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

  const statusify = new Statusify({
    componentProvider: builder,
    severityProvider: builder,
    incidentProvider: new LokiIncidentProvider()
  });

  console.log(await statusify.getComponentGroups())
  console.log(await statusify.getIncidents())
}

bootstrap()