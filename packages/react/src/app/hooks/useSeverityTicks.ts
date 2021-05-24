import IDowntimeMetricRecord from "@statusify/core/dist/Metric/IDowntimeMetricRecord";
import IMetricRange from "@statusify/core/dist/Metric/IMetricRange";
import ISeverityTick from "../interfaces/ISeverityTick";
import { MetricType } from "@statusify/core/dist/Metric/Metric";
import React from "react";
import Severity from "@statusify/core/dist/Severity/Severity";
import WorstSeverity from "@statusify/core/dist/Util/WorstSeverity";
import dayjs from "../utils/dayjs";
import { useComponent } from "../contexts/ComponentContext";
import { useLaminar } from "../contexts/LaminarContext";
import { useStatusify } from "../contexts/StatusifyContext";
import useIncidents from "./useIncidents";
import { IncidentsQuery } from "@statusify/core/dist/Incident/IProvidesIncidents";

export default function useSeverityTicks(range: IMetricRange) {
  const statusify = useStatusify();
  const component = useComponent();
  const { downtimeSeverities } = useLaminar();
  const [ ticks, setTicks ] = React.useState<ISeverityTick[]>([]);

  const incidentsQuery = React.useMemo((): IncidentsQuery => {
    return {
      component: component.id,
      createdAt: {
        after: range.start,
        before: range.end
      },
    }
  }, [ range, component ]);

  const incidents = useIncidents(incidentsQuery);

  React.useMemo(() => {
    new Promise(async (resolve, _reject) => {
      // Find a downtime metric
      const downtimeMetric = component.metrics?.find(m => m.type === MetricType.DOWNTIME);
      const downtimes: IDowntimeMetricRecord[] = (downtimeMetric) ? await downtimeMetric.getPeriod(range) : [];
      const severities = await statusify.getSeverities();

      // Calculate some dates
      const nStart = dayjs(range.start).startOf('day');
      const nEnd = dayjs(range.end).endOf('day');
      const daysBetween = nEnd.diff(nStart, 'days');
      
      // Work on each day to find its tick
      const dayTicks = [ ...Array(daysBetween) ].map(async (_, i) => {
        const day = dayjs(nStart).add(i + 1, 'days').startOf('day');
        const daySeverities: Severity[] = [];

        const dayIncidents = incidents
          .filter((incident) => {
            return day.isBetween(incident.createdAt, incident.resolvedAt, 'day', '[]');
          }).map((v) => {
            // Add to the severities
            daySeverities.push(v.severity);
            return v;
          });

        const dayDowntimes: IDowntimeMetricRecord[] = (downtimes === undefined) ? [] : downtimes.filter((downtime) => {
          const startedAt = dayjs(downtime.time);
          const endedAt = startedAt.add(downtime.value, 'millisecond');
          return day.isBetween(startedAt, endedAt, 'day', '(]')
        }).map((v) => {
          // Add to the severities based upon the config
          const index = Number(Object.keys(downtimeSeverities).reduce((a, b) => {
            if(Number(b) > Number(a) && (v.value / 1000 >= Number(b))) {
              return b;
            }
            return a;
          }))

          // Use the index to get the severity id and then get the actual severity instance
          const foundSeverity = severities.find(s => s.id === downtimeSeverities[index]);
          if(foundSeverity !== undefined) {
            daySeverities.push(foundSeverity);
          }

          return v;
        });

        return {
          date: day.toDate(),
          severity: await WorstSeverity(daySeverities, statusify),
          relatedIncidents: dayIncidents,
          relatedDowntimes: dayDowntimes
        }
      });

      // Do everything, set the ticks and resolve for some reason
      Promise.all(dayTicks).then(setTicks).then(resolve);
    })
  }, [ component, incidents, downtimeSeverities, range, statusify ]);

  return ticks;
}