<p align="center">
  <img align="center" height="100" src="./.github/statusify.png"/>
</p>

<br/>

<p align="center">
  <strong>A library connecting status platforms into a single glorious integration</strong>
</p>

<p align="center">
  TODO: Insert Badges
</p>

<h3 align="center">
  <a href="./CONTRIBUTING.md">Contribute</a>
  <span>·</span>
  <a href="#getting-started">Getting Started</a>
</h3>


---

## Status of This Project
This branch of the project is currently under construction, production usage isn't recommended but possible with some work. Contributions are welcome.

## Here for a Status Page?
If you're here for a status page then you'll want to look at our [React Frontend](./packages/react)

## Structure
This project uses a Monorepo structure managed with [LernaJS](https://lerna.js.org/)

| Package                             |      Description              |
| :---------------------------------- | :---------------------------: |
| [core](packages/core)               | Core Connection Library       |
| [loki](packages/loki)               | Loki Incident Provider        |
| [next](packages/next)               | Deprecated NextJS Frontend    |
| [react](packages/react)             | React Frontend                |
| [uptimerobot](packages/uptimerobot) | UptimeRobot Metric Providers  |


## Features
- Platform Agnostic Structure
- Incident Reporting
- Component Grouping
- Support for Downtime, Latency, and Custom Metrics
- Support for Custom Attributes

## Installation
```bash
$ lerna bootstrap
```

Then follow individual package documentation.

## Contributing
Read through our [contributing guidelines](./CONTRIBUTING.md) to learn about the contribution process and style guides.

## Configuration
Configuration is currently mainly supported through a builder pattern; however, this is not enforced.
```ts
const builder = new Builder()
    .groups([
        group()
            .name('Group 1')
            .description('Group 1 Description')
            .components([
                component('component-1')
                    .name('Component 1')
                    .description('Component 1 Description')
                component('component-2')
                    .name('Component 2')
            ]),
        group()
            .name('Group 2')
            .components([
                component('component-3')
                    .name('Component 3')
                    .description('Test Component 3 Description'),
            ]),
    ])
    .severities([
        runnableSeverity('operational')
            .name('Operational')
            .runnable(async (component) => true),

        runnableSeverity('partial')
            .name('Partial')
            .runnable(async (component) => false),

        runnableSeverity('minor')
            .name('Minor')
            .runnable(async (component) => false),
        
        runnableSeverity('major')
            .name('Major')
            .runnable(async (component) => false),
    ])
;

export const statusify = new Statusify({
  componentProvider: builder,
  severityProvider: builder,
  incidentProvider: new ArrayIncidentProvider(),
  severityCalculator: new AchievedSeverityCalculator(),
});
```