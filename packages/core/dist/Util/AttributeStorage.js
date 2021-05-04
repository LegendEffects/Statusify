"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AttributeStorage {
    constructor(attributes) {
        this.attributes = attributes !== null && attributes !== void 0 ? attributes : {};
    }
    async setAttribute(key, value) {
        this.attributes[key] = value;
    }
    async getAttribute(key) {
        return this.attributes[key];
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