"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArrayIncidentProviders {
    constructor() {
        this.incidents = [];
    }
    async getIncidents(_statusify, query) {
        return this.filterThroughQuery(this.incidents, query);
    }
    async getIncidentsFor(_statusify, component, query) {
        return this.filterThroughQuery(this.incidents, { ...query, id: component.id });
    }
    async getIncident(_statusify, id) {
        return this.incidents.find((i) => i.id === id);
    }
    filterThroughQuery(incidents, query) {
        const qDate = (value, query) => {
            if (query.before && !(value.getTime() < query.before.getTime())) {
                return false;
            }
            if (query.after && !(value.getTime() > query.before.getTime())) {
                return false;
            }
        };
        return incidents.filter((i) => {
            if (query.createdAt && qDate(i.createdAt, query.createdAt) === false)
                return false;
            if (query.updatedAt && qDate(i.createdAt, query.updatedAt) === false)
                return false;
            if (query.resolvedAt && qDate(i.createdAt, query.resolvedAt) === false)
                return false;
            if (query.id && query.id !== i.id)
                return false;
            return true;
        });
    }
}
exports.default = ArrayIncidentProviders;
//# sourceMappingURL=ArrayIncidentProvider.js.map