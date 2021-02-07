"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function WorstSeverity(severities, statusify) {
    const allSeverities = await statusify.getSeverities();
    let currentWorst = 0;
    for (const severity of severities) {
        const index = allSeverities.findIndex((cSev) => cSev.id === severity.id);
        currentWorst = (index > currentWorst) ? index : currentWorst;
    }
    return allSeverities[currentWorst];
}
exports.default = WorstSeverity;
//# sourceMappingURL=WorstSeverity.js.map