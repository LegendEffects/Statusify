"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require('path');
const fs = require('fs');
const loki = require('lokijs');
class LokiIncidentProvider {
    constructor(options = {}) {
        this.db = new loki('incidents');
        this.incidents = this.db.addCollection('incidents');
        this.options = options;
        if (options.autoLoadPath !== undefined) {
            this.load();
        }
    }
    load() {
        const files = fs.readdirSync(this.options.autoLoadPath);
        for (const file of files) {
            this.incidents.insert(require(path.join(this.options.autoLoadPath, file)));
        }
    }
    async getIncidents(statusify, query = {}) {
        return Promise.all(this.incidents
            .find(this.buildQuery(query))
            .map(i => this.parseIncident(i, statusify)));
    }
    async getIncidentsFor(statusify, component, query) {
        return Promise.all(this.incidents
            .find(Object.assign(Object.assign({}, this.buildQuery(query)), { components: { $contains: component.id } }))
            .map(i => this.parseIncident(i, statusify)));
    }
    async getIncident(statusify, id) {
        const found = this.incidents.findOne({ id });
        return (found === null) ? null : await this.parseIncident(found, statusify);
    }
    async parseIncident(incident, statusify) {
        const updates = incident.updates.map(async (u) => {
            const update = {
                severity: await statusify.getSeverity(u.severity),
                body: u.body,
                bodyStatus: u.body_status,
                createdAt: new Date(u.created_at),
                updatedAt: new Date(u.updated_at)
            };
            return update;
        });
        const parsed = {
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
        };
        return parsed;
    }
    buildQuery(query) {
        const qComp = {};
        if (query.createdAt !== undefined) {
            qComp['created_at'] = this.buildDateQuery(query.createdAt);
        }
        if (query.updatedAt !== undefined) {
            qComp['updated_at'] = this.buildDateQuery(query.updatedAt);
        }
        if (query.resolvedAt !== undefined) {
            qComp['resolved_at'] = this.buildDateQuery(query.resolvedAt);
        }
        if (query.id !== undefined) {
            qComp['id'] = query.id;
        }
        return qComp;
    }
    buildDateQuery(query) {
        const qComp = {};
        if (query === undefined || query === null) {
            return undefined;
        }
        if (query.after === undefined) {
            qComp['$gt'] = query.after;
        }
        if (query.before === undefined) {
            qComp['$lt'] = query.after;
        }
    }
    nullableDate(val) {
        if (val === null || val === undefined) {
            return undefined;
        }
        return new Date(val);
    }
}
exports.default = LokiIncidentProvider;
//# sourceMappingURL=LokiIncidentProvider.js.map