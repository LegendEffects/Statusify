"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WorstSeverity_1 = __importDefault(require("../Util/WorstSeverity"));
class CombinedSeverityCalculator {
    constructor(calculators) {
        this.calculators = calculators;
    }
    async getGlobalSeverity(statusify) {
        return WorstSeverity_1.default(await Promise.all(this.calculators.map(c => c.getGlobalSeverity(statusify))), statusify);
    }
    async getSeverityForGroup(group, statusify) {
        return WorstSeverity_1.default(await Promise.all(this.calculators.map(c => c.getSeverityForGroup(group, statusify))), statusify);
    }
    async getSeverityForComponent(component, statusify) {
        return WorstSeverity_1.default(await Promise.all(this.calculators.map(c => c.getSeverityForComponent(component, statusify))), statusify);
    }
}
exports.default = CombinedSeverityCalculator;
//# sourceMappingURL=SeverityMultiplexer.js.map