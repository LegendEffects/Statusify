"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AttributeStorage {
    constructor(attributes) {
        this.attributes = attributes !== null && attributes !== void 0 ? attributes : {};
    }
    async setAttribute(key, value) {
        this.attributes[key] = value;
    }
    async getAttribute(key, def) {
        var _a;
        return (_a = this.attributes[key]) !== null && _a !== void 0 ? _a : def;
    }
    async removeAttribute(key) {
        delete this.attributes[key];
    }
    async getAttributes() {
        return this.attributes;
    }
}
exports.default = AttributeStorage;
//# sourceMappingURL=AttributeStorage.js.map