"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IncidentSeverityProvider {
    async getGlobalSeverity(statusify) {
        const componentSeverities = Promise.all((await statusify.getComponents()).map(async (c) => {
            return this.getSeverityForComponent(c, statusify);
        }));
        return await this.worstSeverity(await componentSeverities, statusify);
    }
    async getSeverityForGroup(group, statusify) {
        const componentSeverities = Promise.all(group.components.map(async (c) => {
            return this.getSeverityForComponent(c, statusify);
        }));
        return await this.worstSeverity(await componentSeverities, statusify);
    }
    async getSeverityForComponent(component, statusify) {
        const activeIncidents = await statusify.getIncidentsFor(component, {
            resolvedAt: null
        });
        return await this.worstSeverity(activeIncidents.map(i => i.severity), statusify);
    }
    async worstSeverity(severities, statusify) {
        const allSeverities = await statusify.getSeverities();
        let currentWorst = 0;
        for (const severity of severities) {
            const index = allSeverities.findIndex((cSev) => cSev.id === severity.id);
            currentWorst = (index > currentWorst) ? index : currentWorst;
        }
        return allSeverities[currentWorst];
    }
}
exports.default = IncidentSeverityProvider;
//# sourceMappingURL=IncidentSeverityCalculator.js.map