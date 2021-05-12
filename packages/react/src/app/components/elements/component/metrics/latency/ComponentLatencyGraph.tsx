import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { Box, Flex, Text } from "@chakra-ui/layout";

import Chart from "react-apexcharts";
import { Collapse } from "@chakra-ui/transition";
import ILatencyMetricRecord from "@statusify/core/dist/Metric/ILatencyMetricRecord"
import { IconButton } from "@chakra-ui/button";
import { MetricType } from "@statusify/core/dist/Metric/Metric"
import React from "react";
import useComponentMetric from "../../../../../hooks/useComponentMetric"
import useMetricRange from "../../../../../hooks/useMetricRange";
import { useTheme } from "@chakra-ui/system";
import { useTranslation } from "react-i18next";
import { ApexOptions } from "apexcharts";
import { CHART_AVERAGE, CHART_SERIES_NAME, CHART_TITLE } from "../../../../../constants/FrontendOptions";

export default function ComponentLatencyGraph() {
  const [ lastUpdated, setLastUpdated ] = React.useState(undefined);
  const [ visible, setVisible ] = React.useState(false);

  const [ datapoints, setDatapoints ] = React.useState<ILatencyMetricRecord[]>([]);
  const [ average, setAverage ] = React.useState<number>(0);
  
  const { t } = useTranslation();
  const [ latencyMetric, latencyMetricAttributes ] = useComponentMetric<ILatencyMetricRecord>(MetricType.LATENCY);
  const range = useMetricRange();
  const theme = useTheme();
  
  const toggleVisibility = () => setVisible(!visible);

  React.useEffect(() => {
    // Don't do anything if it's not visible or we have valid metrics
    if(!visible || (lastUpdated && (new Date().getTime() - lastUpdated) < 300 * 1000)) {
      return;
    }

    // Update the last updated timestamp
    setLastUpdated(new Date().getTime());
    latencyMetric.getPeriod(range)
      .then(setDatapoints)
      .then(() => {
        // Prevent double queueing requests
        latencyMetric.getAverage(range).then(r => {
          setAverage(Math.round(r.value * 100) / 100)
        });
      });
  }, [ range, latencyMetric, visible, lastUpdated ]);

  const chartOptions = React.useMemo(() => ({
    chart: {
      background: 'transparent',
      toolbar: {
        tools: {
          download: false,
        }
      },
      foreColor: theme.colors.gray[500],
    },
    colors: [
      theme.colors.gray[500],
    ],
    dataLabels: {
      enabled: false
    },
    theme: {
      mode: 'dark'
    },
    xaxis: {
      type: 'datetime'
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0,
        opacityFrom: .6,
        opacityTo: 1,
        type: 'vertical'
      }
    },
    stroke: {
      curve: 'smooth',
      show: false
    }
  }), [ theme ]);
  
  const series = React.useMemo(() => {
    return [{
      name: latencyMetricAttributes[CHART_SERIES_NAME] ?? t('components.metrics.latency.seriesName'),
      data: datapoints.map(point => ({x: point.time.getTime(), y: point.value }))
    }]
  }, [ datapoints, latencyMetricAttributes, t ])


  return (
    <Box>
      <Collapse in={visible}>
        <Box bg="blackAlpha.200" p={4}>
          <Flex justify="space-between" mb={4}>
            <Text>
              {latencyMetricAttributes[CHART_TITLE] ?? t('components.metrics.latency.title')}
            </Text>
            <Text color="whiteAlpha.700">
              {latencyMetricAttributes[CHART_AVERAGE] ? latencyMetricAttributes[CHART_AVERAGE].replaceAll('{{average}}', average) : t('components.metrics.latency.average', { average })}
            </Text>
          </Flex>

          <Chart type="area" height={200} options={chartOptions as ApexOptions} series={series} />
        </Box>
      </Collapse>

      <IconButton 
        w="full" 
        roundedTop={0}
        bg="blackAlpha.200"
        aria-label="Toggle Details" 
        icon={(visible) ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />} 

        onClick={toggleVisibility}

        _hover={{
          bg: "blackAlpha.300"
        }}
        _focus={{
          bg: "blackAlpha.300",
          border: "1px",
          borderColor: "blue.500"
        }}
        _active={{
          bg: "blackAlpha.400"
        }}
        />
    </Box>
  )
}