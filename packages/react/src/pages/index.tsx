import { Container, Stack } from "@chakra-ui/layout";

import ComponentGroup from "../app/components/elements/componentGroup/ComponentGroup";
import DefaultLayout from "../app/components/layouts/DefaultLayout";
import IncidentBanner from "../app/components/elements/incident/IncidentBanner";
import { IncidentsQuery } from "@statusify/core/dist/Incident/IProvidesIncidents";
import React from "react";
import StatusifyComponentGroup from "@statusify/core/dist/Component/ComponentGroup";
import useIncidents from "../app/hooks/useIncidents";
import { useStatusify } from "../app/contexts/StatusifyContext";

const activeIncidentsQuery: IncidentsQuery = { resolvedAt: null }

export default function Home() {
  const [ groups, setGroups ] = React.useState<StatusifyComponentGroup[]>([]);
  const statusify = useStatusify();
  const incidents = useIncidents(activeIncidentsQuery);

  React.useEffect(() => {
    let isMounted = true;

    statusify.getComponentGroups().then((groups) => {
      if(isMounted) {
        setGroups(groups);
      }
    });

    return () => { 
      isMounted = false;
    }
  }, [ statusify ]);

  return (
    <DefaultLayout>
      <Container maxW="container.xl" mt={8}>
        <Stack spacing={16}>
          
          <Stack spacing={4}>
            {incidents.map(incident => <IncidentBanner key={incident.id} incident={incident} />)}
          </Stack>

          <Stack spacing={4}>
            {groups.map((group, i) => <ComponentGroup key={`${i}.${group.name}`} group={group} />)}
          </Stack>

        </Stack>
      </Container>
    </DefaultLayout>
  )
}