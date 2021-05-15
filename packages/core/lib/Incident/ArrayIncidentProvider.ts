import IProvidesIncidents, { DateQuery, IncidentsQuery } from "./IProvidesIncidents";

import Component from "../Component/Component";
import IIncident from "./IIncident";
import lib from "..";
import IInjectStatusify from "../Util/IInjectStatusify";
import Statusify from "..";

export default class ArrayIncidentProviders implements IProvidesIncidents, IInjectStatusify {
  private statusify!: Statusify;

  public incidents: IIncident[] = new Proxy([], {
    set: (target: IIncident[], prop, value, _receiver) => {
      if(prop === 'length') {
        return true;
      }

      target[prop as unknown as number] = value;
      this.statusify.emit('incidents::updated', target);
      return true;
    }
  })

  inject(statusify: lib): void {
    this.statusify = statusify;
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
    return this.filterThroughQuery(this.incidents, {...query, id: component.id})
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
        return value === null;
      }

      if(query.before && !(value.getTime() < query.before.getTime()) ) {
        return false;
      }
      if(query.after && !(value.getTime() > query.after.getTime()) ) {
        return false;
      }
    }

    return incidents.filter((i) => {
      if(query.createdAt && qDate(i.createdAt, query.createdAt) === false) return false;
      if(query.updatedAt && qDate(i.createdAt, query.updatedAt) === false) return false;
      if(query.resolvedAt && qDate(i.createdAt, query.resolvedAt) === false) return false;

      if(query.id && query.id !== i.id) return false;

      return true;
    })
  }
}