import IIncident from "@statusify/core/dist/Incident/IIncident";
import { IncidentsQuery } from "@statusify/core/dist/Incident/IProvidesIncidents";
import React from "react";
import { useStatusify } from "../contexts/StatusifyContext";
import useStatusifyEvent from "./useStatusifyEvent";

export default function useIncidents(query?: IncidentsQuery) {
  const statusify = useStatusify();
  const [ incidents, setIncidents ] = React.useState<IIncident[]>([]);

  React.useEffect(() => {
    let isMounted = true;

    statusify.getIncidents(query).then((incidents) => {
      if(isMounted) {
        setIncidents(incidents);
      }
    });

    return () => {
      isMounted = false;
    };
    
  }, [ query, statusify ]);

  useStatusifyEvent('incidents::updated', (incidents) => {
    setIncidents(incidents);
  })

  return incidents;
}