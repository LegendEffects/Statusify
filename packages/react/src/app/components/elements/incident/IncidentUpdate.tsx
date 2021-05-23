import {Box, Circle, Flex, Heading, Text} from '@chakra-ui/layout';
import IIncidentUpdate from '@statusify/core/dist/Incident/IIncidentUpdate';
import dayjs from 'dayjs';
import React from 'react';
import { useTranslation } from 'react-i18next';
import useSeverityColor from '../../../hooks/useSeverityColor';

export interface IncidentUpdateProps {
  update: IIncidentUpdate;
}

const IncidentUpdate: React.FC<IncidentUpdateProps> = ({update}) => {
  const severityColor = useSeverityColor(update.severity);
  const { t } = useTranslation();

  return (
    <>
      <Box>
        <Flex align="center">
          <Circle size="12px" bg={`${severityColor}.400`} mr={4} />

          <Heading size="md" fontWeight="semibold">
            {update.bodyStatus}
          </Heading>
        </Flex>
      </Box>

      <Box>
        
        <Text>{update.body}</Text>
        <Box mt={2} color="gray.500">
          <time>
            {dayjs(update.createdAt).format(t('incidents.overallFormat'))}
          </time>
        </Box>

      </Box>
    </>
  );
};


export default IncidentUpdate;