import IComponentConfig from '../interfaces/component/IComponentConfig'
import IComponentGroup from '../interfaces/component/IComponentGroup'
import IParsedConfig from '../interfaces/config/IParsedConfig'
import ISeverity from '../interfaces/severity/ISeverity'
import ISeverityRegistry from '../interfaces/severity/ISeverityRegistry'
import ISeverityConfig from '../interfaces/severity/ISeverityConfig'
import Component from './component/Component'
import ComponentGroup from './component/ComponentGroup'
import Severity from './severity/Severity'
import { BaseConfig, ComponentConfig } from '~/src/status-lib/BaseConfig'

export default function ConfigParser(
  { components, severities, ...config }: BaseConfig,
  severityRegistry: ISeverityRegistry
): IParsedConfig {
  return {
    components: parseComponents(components),
    severities: parseSeverities(severities, severityRegistry),
    ...config,
  }
}

function parseSeverities(
  severities: ISeverityConfig[],
  severityRegistry: ISeverityRegistry
): ISeverity[] {
  return severities.map((s) => {
    const sev = new Severity({ ...s, registry: severityRegistry })
    severityRegistry.add(sev)
    return sev
  })
}

//
// Config => Named / Anonymous Groups
//
function parseComponents(components: ComponentConfig): IComponentGroup[] {
  const parsedComponents: IComponentGroup[] = []

  for (const componentEntry of components) {
    let result

    if (Array.isArray(componentEntry)) {
      // Anonymous Group
      result = new ComponentGroup({
        components: toComponents(componentEntry),
      })
    } else {
      // Named Group
      result = new ComponentGroup({
        ...componentEntry,
        components: toComponents(componentEntry.components),
      })
    }

    parsedComponents.push(result)
  }

  return parsedComponents
}

//
// Utility Functions
//
function toComponents(componentConfigs: IComponentConfig[]) {
  return componentConfigs.map((c) => {
    return new Component(c)
  })
}
