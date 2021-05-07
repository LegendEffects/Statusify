<p align="center">
  <img align="center" height="100" src="../../.github/statusify-core.png"/>
</p>

<br/>

<p align="center">
  <strong>Core for Statusify</strong>
</p>

---

## Features
- Incidents
- Metrics
- Severities
- Builder Pattern
- ASynchronous API

## Technologies
- [Chakra UI](https://chakra-ui.com/)
- [React Router](https://reactrouter.com/)
## Building
```bash
$ tsc
```

## Usage

### Constructing
Statusify needs to be initialized with Providers and a Severity Calculator, below is a list of included providers and calculators.

#### Providers
- [Builder](./lib/Builder/Builder.ts) (Component + Severity)
- [ArrayIncidentProvider](./lib/Incident/ArrayIncidentProvider.ts) (Incident)

#### Calculators
- [AchievedSeverityCalculator](./lib/Severity/AchievedSeverityCalculator.ts)
- [SeverityMultiplexer](./lib/Severity/SeverityMultiplexer.ts)

```ts
const statusify = new Statusify({
  componentProvider: <ComponentProvider>,
  incidentProvider: <IncidentProvider>,
  severityProvider: <SeverityProvider>,
  severityCalculator: <SeverityCalculator>,
});
```

### Fetching Data
All APIs are asynchronous and must therefore be used with Promise#then or await, read more [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

Methods for fetching data can be found within the [Statusify class](./lib/index.ts).

## Creating Custom Providers and Calculators
Custom providers can be created by implementing one or more of the following interfaces:
- [IProvidesIncidents](./lib/Incident/IProvidesIncidents.ts)
- [IProvidesComponents](./lib/Component/IProvidesComponents.ts)
- [IProvidesSeverities](./lib/Severity/IProvidesSeverities.ts)

Custom calculators can be created by implementing the [ICalculatesSeverities](./lib/Severity/ICalculatesSeverities.ts) interface.