import * as React from "react";

import { Badge, Box, Flex, Heading, Stack } from "@chakra-ui/layout";

import IIncident from "@statusify/core/dist/Incident/IIncident";
import IncidentBannerUpdate from "./IncidentBannerUpdate";
import { Link } from "react-router-dom";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import Severity from "@statusify/core/dist/Severity/Severity";
import dayjs from "dayjs";
import useSeverityColor from "../../../hooks/useSeverityColor";

dayjs.extend(LocalizedFormat);

export interface InterfaceBannerProps {
  incident: IIncident;
}

const IncidentBanner: React.FC<InterfaceBannerProps> = ({ incident }) => {
  const [ lastSeverity, setLastSeverity ] = React.useState<Severity>();
  const severityColor = useSeverityColor(lastSeverity, 'gray');

  React.useEffect(() => {
    setLastSeverity((incident.updates.length === 0) ? incident.severity : incident.updates[0].severity)
  }, [ incident ]);

  return (
    <Box 
      borderLeft="4px" 
      rounded="sm"
      borderColor={`${severityColor}.400`}
      bg="gray.900"
      p={6}
      >
        <Flex align="center" color={`${severityColor}.400`}>
          <div>
            <Badge 
              bg={`${severityColor}.400`} 
              color="blackAlpha.700"
              py={1}
              px={2}
              >
                {lastSeverity && lastSeverity.name}
            </Badge>
          </div>

          <Heading size="lg" fontWeight="normal" ml={3}>
            <Link to="#">{incident.name}</Link>
          </Heading>
        </Flex>

        <Stack spacing={4} mt={6}>
            {incident.updates.map((update, i) => <IncidentBannerUpdate key={i} update={update} /> )}
            <IncidentBannerUpdate update={incident} />
        </Stack>

    </Box>
  );
}

export default IncidentBanner;