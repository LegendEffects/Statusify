import IIncident from "../Incident/IIncident";

export default interface StatusifyEvents {
  'incidents::updated': (incidents: IIncident[]) => void;
}