import Metric, { MetricType } from "@statusify/core/dist/Metric/Metric";
import MetricRecord from "@statusify/core/dist/Metric/MetricRecord";
import { AttributeStorageType } from "@statusify/core/dist/Util/AttributeStorage";
import React from "react";
import { useComponent } from "../contexts/ComponentContext";

export default function useComponentMetric<T extends MetricRecord>(type: MetricType): undefined | [ Metric<T>, AttributeStorageType ] {
  const component = useComponent();

  const [ attributes, setAttributes ] = React.useState<AttributeStorageType>([]);

  const metric = React.useMemo(() => {
    if(!component || !component.metrics) {
      return undefined;
    }

    return component.metrics.find(m => m.type === type);
  }, [ component, type ]);

  React.useEffect(() => {
    let isMounted = true;

    metric.getAttributes().then((attributes) => {
      if(isMounted) {
        setAttributes(attributes);
      }
    });

    return () => {
      isMounted = false;
    }
  }, [ metric ]);

  return [
    (metric as Metric<T>),
    attributes
  ];
}