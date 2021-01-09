const path = require('path')
const fs = require('fs')
const loki = require('lokijs')
import Component from "../packages/core/lib/Component/Component";
import IIncident from "../packages/core/lib/Incident/IIncident";
import IProvidesIncidents, { IncidentsQuery } from "../packages/core/lib/Incident/IProvidesIncidents";

export default class LokiIncidentProvider implements IProvidesIncidents {
  private db = new loki('incidents');
  private incidents: Collection<any>

  constructor() {
    this.incidents = this.db.addCollection('incidents')
    
    // Load files
    const files = fs.readdirSync(path.join(__dirname, 'incidents'))
    for(const file of files) {
      this.incidents.insert( require(path.join(__dirname, 'incidents', file)) )
    }
  }

  async getIncidents(query: IncidentsQuery = {}): Promise<IIncident[]> {
    return this.incidents.find(this.buildQuery(query))
  }
  
  async getIncidentsFor(component: Component, query: IncidentsQuery): Promise<IIncident[]> {
    return this.incidents.find({
      ...this.buildQuery(query),
      id: component.id
    })
  }

  async getIncident(query: IncidentsQuery): Promise<IIncident> {
    throw new Error("Method not implemented.");
  }

  /**
   * Builds a loki Mongo type query based on the incident query
   * @param query 
   */
  private buildQuery(query: IncidentsQuery): any {
    const qComp = {}

    if(query.after !== undefined) {
      qComp['created_at']['$gt'] = query.after
    }
    if(query.before !== undefined) {
      qComp['created_at']['$lt'] = query.before
    }
    if(query.id !== undefined) {
      qComp['id'] = query.id
    }

    return qComp
  }
}