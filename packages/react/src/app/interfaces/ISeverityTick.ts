import IDowntimeMetricRecord from "@statusify/core/dist/Metric/IDowntimeMetricRecord";
import IIncident from "@statusify/core/dist/Incident/IIncident";
import Severity from "@statusify/core/dist/Severity/Severity";

export default interface ISeverityTick {
  date: Date;
  severity: Severity;
  relatedIncidents: IIncident[];
  relatedDowntimes: IDowntimeMetricRecord[];
}