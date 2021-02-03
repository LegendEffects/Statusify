"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeverityBuilder = exports.SeverityBuilderMixin = void 0;
class SeverityBuilderMixin {
    constructor() {
        this._severities = [];
    }
    severities(builders) {
        this._severities = builders;
        return this;
    }
    async getSeverities(statusify) {
        return this._severities.map(s => s.build());
    }
    async getSeverity(statusify, id) {
        const found = (await this.getSeverities(statusify)).find(s => s.id === id);
        return (found === undefined) ? null : found;
    }
}
exports.SeverityBuilderMixin = SeverityBuilderMixin;
class SeverityBuilder {
    constructor(id) {
        this._id = id;
    }
    name(name) {
        this._name = name;
        return this;
    }
}
exports.SeverityBuilder = SeverityBuilder;
//# sourceMappingURL=SeverityBuilder.js.map