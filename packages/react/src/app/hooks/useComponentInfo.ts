import Component from "@statusify/core/dist/Component/Component";
import { MetricType } from "@statusify/core/dist/Metric/Metric";
import React, { useEffect } from "react";

export interface ComponentInfo {
  hasDowntime: boolean
  hasLatency: boolean
}

export default function useComponentInfo(component: Component) {
  const [ state, setState ] = React.useState<ComponentInfo>({ hasDowntime: false, hasLatency: false});

  useEffect(() => {
    setState(state => ({
      ...state,
      hasDowntime: component.metrics?.find(m => m.type === MetricType.DOWNTIME) !== undefined,
      hasLatency: component.metrics?.find(m => m.type === MetricType.LATENCY) !== undefined,
    }));
  }, [ component ]);

  return state;
}