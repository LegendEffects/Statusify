import IIncident from "@statusify/core/dist/Incident/IIncident";
import { IncidentsQuery } from "@statusify/core/dist/Incident/IProvidesIncidents";
import React from "react";
import { useStatusify } from "../contexts/StatusifyContext";

export default function useIncidents(query?: IncidentsQuery) {
  const statusify = useStatusify();
  const [ incidents, setIncidents ] = React.useState<IIncident[]>([]);

  React.useEffect(() => {
    statusify.getIncidents(query).then(setIncidents);
  }, [ query, statusify ]);

  return incidents;
}