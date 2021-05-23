import Component from "@statusify/core/dist/Component/Component";
import ComponentGroup from "@statusify/core/dist/Component/ComponentGroup";
import Severity from "@statusify/core/dist/Severity/Severity";
import React from "react";
import { useStatusify } from "../contexts/StatusifyContext";

export default function useSeverity(target: Component | ComponentGroup){
  
  const statusify = useStatusify();
  const [ severity, setSeverity ] = React.useState<Severity>();
  
  React.useEffect(() => {
    let isMounted = true;

    const promise = (target instanceof Component) ? statusify.getSeverityForComponent(target) : statusify.getSeverityForGroup(target);

    promise.then((severity) => {
      if(isMounted) {
        setSeverity(severity);
      }
    })

    return () => {
      isMounted = false;
    };
  }, [ target, statusify ]);

  return severity;
}