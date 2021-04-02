import { MetricType } from "@statusify/core/dist/Metric/Metric";
import Component from "@statusify/core/dist/Component/Component";
import IMetricRange from "@statusify/core/dist/Metric/IMetricRange";
import dayjs from "dayjs";
import React from "react";

export default function useUptimePercentage(range: IMetricRange, component: Component) {
  const [ percent, setPercent ] = React.useState<number>(1);
  
  React.useMemo(() => {
    new Promise(async (resolve, reject) => {

      const downtimeMetric = component.metrics?.find(m => m.type === MetricType.DOWNTIME);
      if(downtimeMetric === undefined) {
        return reject();
      }

      const downtimes = await downtimeMetric.getPeriod(range);

      const totalTimeRange = dayjs(range.end).diff(range.start, 'milliseconds')
      const totalDowntime = downtimes
        .map(v => v.value)
        .reduce((a, b) => a + b, 0)

      resolve((totalTimeRange - totalDowntime) / totalTimeRange )
    }).then(setPercent).catch(() => {});
  }, [ range, component ])

  return percent;
}