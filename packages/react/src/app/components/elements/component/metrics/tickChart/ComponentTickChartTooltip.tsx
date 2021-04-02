import { Box, Text } from "@chakra-ui/layout";
import { usePopper } from "react-popper";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import RelativeTime from "dayjs/plugin/relativeTime";
import Duration from "dayjs/plugin/duration";

import ISeverityTick from "../../../../../interfaces/ISeverityTick";
import React from "react";
import { useTranslation } from "react-i18next";

dayjs.extend(LocalizedFormat);
dayjs.extend(RelativeTime);
dayjs.extend(Duration);

export interface ComponentTickChartTooltipProps {
  reference: HTMLElement;
  tick: ISeverityTick;
}

export default function ComponentTickChartTooltip({ tick, reference, ...props }: ComponentTickChartTooltipProps) {
  const { t } = useTranslation();
  const [ popperElement, setPopperElement ] = React.useState(null);
  const [ arrowElement, setArrowElement ] = React.useState(null);

  const offsetModifier = React.useMemo(() => ({
    name: 'offset',
    options: {
      offset: (o) => {
        return [0, o.reference.y - reference.parentElement.getBoundingClientRect().y]
      }
    }
  }), [ reference ]);

  const { styles, attributes } = usePopper(reference, popperElement, {
    modifiers: [
      { name: 'arrow', options: { element: arrowElement } },
      offsetModifier
    ]
  });

  return (
    <Box ref={setPopperElement} style={styles.popper} {...attributes.popper}>
      <div ref={setArrowElement} style={styles.arrow} />
      <Box bg="gray.800" shadow="md" px={6} py={4} textAlign="left">
        <Text mb={2}>{dayjs(tick.date).format(t('components.metrics.tickChart.dateFormat'))}</Text>

        {/* Downtimes */}
        {tick.relatedDowntimes.length === 0 ? (
          <Text color="whiteAlpha.700">
            {t('components.metrics.tickChart.noDowntime')}
          </Text>
        ) : (
          tick.relatedDowntimes.map((downtime, i) => (
            <Text color="red.400" key={i}>
              {t('components.metrics.tickChart.downtime', { duration: dayjs.duration(downtime.value, 'ms').humanize() })}
            </Text>
          ))
        )}
        

        {/* Incidents */}
        {tick.relatedIncidents.length === 0 && (
          <Text color="whiteAlpha.700">
            {t('components.metrics.tickChart.noIncidents')}
          </Text>
        )}
      </Box>
    </Box>
  )
}