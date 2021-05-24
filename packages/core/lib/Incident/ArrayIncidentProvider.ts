import IProvidesIncidents, { DateQuery, IncidentsQuery } from "./IProvidesIncidents";

import Component from "../Component/Component";
import IIncident from "./IIncident";
import lib from "..";
import IInjectStatusify from "../Util/IInjectStatusify";
import Statusify from "..";

export default class ArrayIncidentProviders implements IProvidesIncidents, IInjectStatusify {
  private statusify!: Statusify;
  private incidentFactory?: (statusify: Statusify) => Promise<IIncident[]>;

  public incidents: IIncident[] = new Proxy([], {
    set: (target: IIncident[], prop, value, _receiver) => {
      if(prop === 'length') {
        return true;
      }

      target[prop as unknown as number] = value;

      if(this.statusify !== null) {
        this.statusify.emit('incidents::updated', target);
      }
      return true;
    }
  })

  //
  // Constructor
  //
  constructor(incidentFactory?: (statusify: Statusify) => Promise<IIncident[]>) {
    this.incidentFactory = incidentFactory;
  }

  inject(statusify: lib): void {
    this.statusify = statusify;

    if(this.incidentFactory) {
      this.incidentFactory(statusify).then(incidents => {
        incidents.forEach(incident => this.incidents.push(incident));
      });
    }
  }

  /**
   * @inheritdoc
   */
  async getIncidents(_statusify: lib, query: IncidentsQuery = {}): Promise<IIncident[]> {
    return this.filterThroughQuery(this.incidents, query)
  }
  
  /**
   * @inheritdoc
   */
  async getIncidentsFor(_statusify: lib, component: Component, query?: IncidentsQuery): Promise<IIncident[]> {
    return this.filterThroughQuery(this.incidents, {...query, component: component.id })
  }
  
  /**
   * @inheritdoc
   */
  async getIncident(_statusify: lib, id: string): Promise<IIncident | null> {
    return this.incidents.find((i) => i.id === id) || null;
  }

  //
  // Private
  //
  private filterThroughQuery(incidents: IIncident[], query: IncidentsQuery): IIncident[] {
    const qDate = (value: Date, query: DateQuery) => {
      if(query === null) {
        return query === value;
      }

      if(query.before && !(value.getTime() < query.before.getTime()) ) {
        return false;
      }
      if(query.after && !(value.getTime() > query.after.getTime()) ) {
        return false;
      }
    }

    return incidents.filter((i) => {
      if(query.createdAt !== undefined && qDate(i.createdAt, query.createdAt) === false) return false;
      if(query.updatedAt !== undefined && qDate(i.createdAt, query.updatedAt) === false) return false;
      if(query.resolvedAt !== undefined && qDate(i.createdAt, query.resolvedAt) === false) return false;

      if(query.component && i.components.find(c => c.id === query.component) === undefined) return false;
      if(query.id && query.id !== i.id) return false;

      return true;
    })
  }
}