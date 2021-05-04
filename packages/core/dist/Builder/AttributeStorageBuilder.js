"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AttributeStorageBuilder {
    constructor() {
        this._attributes = {};
    }
    attribute(key, value) {
        this._attributes[key] = value;
        return this;
    }
}
exports.default = AttributeStorageBuilder;
//# sourceMappingURL=AttributeStorageBuilder.js.map