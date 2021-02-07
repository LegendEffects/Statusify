"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WorstSeverity_1 = require("../Util/WorstSeverity");
class AchievedSeverityCalculator {
    async getGlobalSeverity(statusify) {
        const components = await statusify.getComponents();
        const compSeverities = (await Promise.all(components.map(async (c_) => {
            return await this.getAchievedSeveritiesForComponent(c_, statusify);
        }))).flat();
        return WorstSeverity_1.default(compSeverities, statusify);
    }
    async getSeverityForGroup(group, statusify) {
        const compSeverities = (await Promise.all(group.components.map(async (c_) => {
            return await this.getAchievedSeveritiesForComponent(c_, statusify);
        }))).flat();
        return WorstSeverity_1.default(compSeverities, statusify);
    }
    async getSeverityForComponent(component, statusify) {
        return WorstSeverity_1.default(await this.getAchievedSeveritiesForComponent(component, statusify), statusify);
    }
    async getAchievedSeveritiesForComponent(component, statusify) {
        const severities = await statusify.getSeverities();
        return (await Promise.all(severities.map(async (s) => ({ s, a: await s.achieved(component) }))))
            .filter(e => e.a === true)
            .map(e => e.s);
    }
}
exports.default = AchievedSeverityCalculator;
//# sourceMappingURL=AchievedSeverityCalculator.js.map