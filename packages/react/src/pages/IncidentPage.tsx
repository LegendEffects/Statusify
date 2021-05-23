import { Badge, Box, Container, Flex, Grid, Heading, Link } from "@chakra-ui/layout";
import IIncident from "@statusify/core/dist/Incident/IIncident";
import Severity from "@statusify/core/dist/Severity/Severity";
import dayjs from "dayjs";
import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import IncidentUpdate from "../app/components/elements/incident/IncidentUpdate";
import DefaultLayout from "../app/components/layouts/DefaultLayout";
import { useStatusify } from "../app/contexts/StatusifyContext";
import useSeverityColor from "../app/hooks/useSeverityColor";
import useStatusifyEvent from "../app/hooks/useStatusifyEvent";

const IncidentPage: React.FC = () => {
  const statusify = useStatusify();
  const { t } = useTranslation();
  
  const { id } = useParams<{ id: string }>();
  const [ incident, setIncident ] = React.useState<IIncident>(undefined);
  
  const [ lastSeverity, setLastSeverity ] = React.useState<Severity>();
  const severityColor = useSeverityColor(lastSeverity, 'gray');

  const fetchIncident = React.useCallback(async () => {
    statusify.getIncident(id).then((incident) => {
      setIncident(incident);

      if(incident) {
        setLastSeverity((incident.updates.length === 0) ? incident.severity : incident.updates[0].severity);
      }
    });
  }, [ id, statusify ]);

  React.useEffect(() => {
    let mounted = true;

    if(mounted) {
      fetchIncident();
    }

    return () => {
      mounted = false;
    }
  }, [ fetchIncident ]);

  useStatusifyEvent('incidents::updated', fetchIncident);

  return (
    <DefaultLayout>
      {incident && (
        <>
          <Container maxW="container.xl">
            <Box
              mt={-8}
              borderLeft="4px"
              borderColor={`${severityColor}.400`}
              bg="gray.800"
              rounded="md"
              shadow="lg"
              padding={8}
              pb={4}
            >
              <Flex align="center">
                <Badge
                  bg={`${incident.resolvedAt ? 'green' : 'red'}.400`} 
                  color="blackAlpha.700"
                  py={1}
                  px={2}
                  mr={4}
                  >
                  {t(`incidents.badge.${incident.resolvedAt ? 'closed' : 'open'}`)}
                </Badge>

                <Heading size="lg">
                  {incident.name}
                </Heading>
              </Flex>

              <Box mt={2} color="gray.500">
                {incident.resolvedAt && (
                  <Box>
                    {t('incidents.resolvedAfter', {duration: dayjs.duration(incident.resolvedAt.getTime() - incident.createdAt.getTime()).humanize() })}
                  </Box>
                )}
                

                <Box>
                  {dayjs(incident.createdAt).format(t('incidents.overallFormat'))}
                  {incident.resolvedAt && (
                    <> - {dayjs(incident.resolvedAt).format(t('incidents.overallFormat'))} </>
                  )}
                </Box>

              </Box>

              <Flex mt={4}>
                {incident.components
                  .filter((component) => component.name !== undefined)
                  .map((component) => (
                    <Link as={RouterLink} to={`/components/${component.id}`} px={4} py={2} bg="blackAlpha.600" color="white" rounded="lg">
                      {component.name}
                    </Link>
                ))}
              </Flex>
            </Box>

          </Container>

          <Container maxW="container.xl" mt={12}>
            <Grid
              templateColumns="minmax(auto, 175px) auto"
              columnGap={4}
              rowGap={8}
              >
                {incident.updates.map((update, i) => <IncidentUpdate update={update} key={i} />)}
            </Grid>
          </Container>
        </>
      )}

    </DefaultLayout>
  );
}



export default IncidentPage;