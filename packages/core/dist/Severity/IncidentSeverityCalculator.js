"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WorstSeverity_1 = require("../Util/WorstSeverity");
class IncidentSeverityProvider {
    async getGlobalSeverity(statusify) {
        const componentSeverities = Promise.all((await statusify.getComponents()).map(async (c) => {
            return this.getSeverityForComponent(c, statusify);
        }));
        return await WorstSeverity_1.default(await componentSeverities, statusify);
    }
    async getSeverityForGroup(group, statusify) {
        const componentSeverities = Promise.all(group.components.map(async (c) => {
            return this.getSeverityForComponent(c, statusify);
        }));
        return await WorstSeverity_1.default(await componentSeverities, statusify);
    }
    async getSeverityForComponent(component, statusify) {
        const activeIncidents = await statusify.getIncidentsFor(component, {
            resolvedAt: null
        });
        return await WorstSeverity_1.default(activeIncidents.map(i => i.severity), statusify);
    }
}
exports.default = IncidentSeverityProvider;
//# sourceMappingURL=IncidentSeverityCalculator.js.map