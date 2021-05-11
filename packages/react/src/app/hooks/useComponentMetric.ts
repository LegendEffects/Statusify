import Metric, { MetricType } from "@statusify/core/dist/Metric/Metric";
import MetricRecord from "@statusify/core/dist/Metric/MetricRecord";
import React from "react";
import { useComponent } from "../contexts/ComponentContext";

export default function useComponentMetric<T extends MetricRecord>(type: MetricType): undefined | Metric<T> {
  const component = useComponent();

  return React.useMemo(() => {
    if(!component || !component.metrics) {
      return undefined;
    }

    return component.metrics.find(m => m.type === type) as Metric<T>;
  // There's an error where eslint expects T to be provided? Unable to find another solution currently.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ component, type ]);
}