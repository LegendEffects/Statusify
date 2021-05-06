import * as React from 'react';

import { Box, Circle, Flex, Grid } from '@chakra-ui/layout';

import IIncidentUpdate from '@statusify/core/dist/Incident/IIncidentUpdate';
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import dayjs from "dayjs";
import { useLaminar } from '../../../contexts/LaminarContext';
import { useTranslation } from 'react-i18next';

dayjs.extend(LocalizedFormat);

interface IncidentBannerUpdateProps {
  update: IIncidentUpdate;
}

const IncidentBannerUpdate: React.FC<IncidentBannerUpdateProps> = ({ update }) => {
  const { severityColors } = useLaminar();
  const { t } = useTranslation();
  
  return (
    <Grid
      templateColumns="minmax(auto, 120px) minmax(auto, 32px) auto"
      alignItems="center"
      >
        <Flex align="center">
          <Box fontWeight="bold">
            {dayjs(update.createdAt).format(t("incidents.banner.timeFormat"))}
          </Box>
          <Box ml={2}>
            {dayjs(update.createdAt).format(t("incidents.banner.dateFormat"))}
          </Box>
        </Flex>
        
        <Box>
          <Circle size="8px" bg={`${severityColors[update.severity.id]}.400`} />
        </Box>

        <Box>
          {update.body}
        </Box>
    </Grid>
  );
}

export default IncidentBannerUpdate;