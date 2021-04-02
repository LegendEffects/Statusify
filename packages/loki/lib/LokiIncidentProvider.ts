const path = require('path')
const fs = require('fs')
const loki = require('lokijs')
import Component from "@statusify/core/dist/Component/Component";
import IIncident from "@statusify/core/dist/Incident/IIncident";
import IIncidentUpdate from "@statusify/core/dist/Incident/IIncidentUpdate";
import IProvidesIncidents, { DateQuery, IncidentsQuery } from "@statusify/core/dist/Incident/IProvidesIncidents";
import Statusify from "@statusify/core/dist";

export interface LokiIncidentProviderOptions {
  autoLoadPath?: string // Path to load files from
}

export default class LokiIncidentProvider implements IProvidesIncidents {
  protected options: LokiIncidentProviderOptions
  public db = new loki('incidents')
  public incidents: Collection<any>

  /**
   * LokiIncidentProvider Constructor
   */
  constructor(options: LokiIncidentProviderOptions = {}) {
    this.incidents = this.db.addCollection('incidents')
    
    this.options = options

    // Load files
    if(options.autoLoadPath !== undefined) {
      this.load();
    }
  }

  load() {
    const files = fs.readdirSync(this.options.autoLoadPath)
    for(const file of files) {
      this.incidents.insert( require(path.join(this.options.autoLoadPath, file)) )
    }
  }

  /**
   * Gets incidents matching the query
   * @param statusify Statusify Instance
   * @param query Query
   */
  async getIncidents(statusify: Statusify, query: IncidentsQuery = {}): Promise<IIncident[]> {
    return Promise.all(
      this.incidents.chain()
        .find(this.buildQuery(query))
        .limit(query.limit)
        .offset(query.offset)
        .data()
        .map(i => this.parseIncident(i, statusify))
    )
  }
  
  /**
   * Gets incidents matching the query
   * @param statusify Statusify Instance
   * @param query Query
   */
  async getIncidentsFor(statusify: Statusify, component: Component, query: IncidentsQuery): Promise<IIncident[]> {
    return Promise.all(
      this.incidents.chain()
        .find({...this.buildQuery(query), components: {$contains: component.id} })
        .limit(query.limit)
        .offset(query.offset)
        .data()
        .map(i => this.parseIncident(i, statusify))
    )
  }

  /**
   * Gets an incident matching the query
   * @param statusify Statusify Instance
   * @param query Query
   */
  async getIncident(statusify: Statusify, id: string): Promise<IIncident | null> {
    const found = this.incidents.findOne({ id })
    return (found === null) ? null : await this.parseIncident(found, statusify)
  }

  /**
   * Converts a loki entry for an incident into a Statusify Incident interface object
   * @param incident 
   * @param statusify 
   */
  private async parseIncident(incident: any, statusify: Statusify): Promise<IIncident> {
    const updates = incident.updates.map(async (u) => {
      const update: IIncidentUpdate = {
        severity: await statusify.getSeverity(u.severity),
        body: u.body,
        bodyStatus: u.body_status,
        createdAt: new Date(u.created_at),
        updatedAt: new Date(u.updated_at)
      }
      return update
    }) as IIncidentUpdate[]

    const parsed: IIncident = {
      id: incident.id,
      name: incident.name,
      
      body: incident.body,
      bodyStatus: incident.body_status,
      
      severity: await statusify.getSeverity(incident.severity),
      components: (await statusify.getComponents()).filter(c => incident.components.includes(c.id)),
      updates: await Promise.all(updates),

      scheduledFor: this.nullableDate(incident.scheduled_for),
      scheduledUntil: this.nullableDate(incident.schedule_until),
      resolvedAt: this.nullableDate(incident.resolved_at),

      createdAt: new Date(incident.created_at),
      updatedAt: new Date(incident.updated_at)
    }

    return parsed as IIncident
  }

  /**
   * Builds a loki Mongo type query based on the incident query
   * @param query 
   */
  private buildQuery(query: IncidentsQuery): any {
    const qComp = {}

    if(query.createdAt !== undefined) {
      qComp['created_at'] = this.buildDateQuery(query.createdAt)
    }

    if(query.updatedAt !== undefined) {
      qComp['updated_at'] = this.buildDateQuery(query.updatedAt)
    }

    if(query.resolvedAt !== undefined) {
      qComp['resolved_at'] = this.buildDateQuery(query.resolvedAt)
    }

    if(query.id !== undefined) {
      qComp['id'] = query.id
    }

    return qComp
  }

  private buildDateQuery(query: DateQuery): any {
    const qComp = {}

    if(query === undefined || query === null) {
      return undefined
    }

    if(query.after === undefined) {
      qComp['$gt'] = query.after
    }

    if(query.before === undefined) {
      qComp['$lt'] = query.after
    }
  }

  private nullableDate(val: any) {
    if(val === null || val === undefined) {
      return undefined
    }

    return new Date(val)
  }
}