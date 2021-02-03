"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
class Statusify extends events_1.EventEmitter {
    constructor(options) {
        super();
        this.componentProvider = options.componentProvider;
        this.severityProvider = options.severityProvider;
        this.incidentProvider = options.incidentProvider;
        this.severityCalculator = options.severityCalculator;
    }
    async getComponentGroups() {
        return this.componentProvider.getComponentGroups(this);
    }
    async getComponents() {
        return this.componentProvider.getComponents(this);
    }
    async getComponent(id) {
        return this.componentProvider.getComponent(this, id);
    }
    async getIncident(id) {
        return this.incidentProvider.getIncident(this, id);
    }
    async getIncidents(query) {
        return this.incidentProvider.getIncidents(this, query);
    }
    async getIncidentsFor(component, query) {
        return this.incidentProvider.getIncidentsFor(this, component, query);
    }
    async getSeverities() {
        return this.severityProvider.getSeverities(this);
    }
    async getSeverity(id) {
        return this.severityProvider.getSeverity(this, id);
    }
    async getSeverityForComponent(component) {
        return this.severityCalculator.getSeverityForComponent(component, this);
    }
    async getSeverityForGroup(group) {
        return this.severityCalculator.getSeverityForGroup(group, this);
    }
}
exports.default = Statusify;
//# sourceMappingURL=index.js.map