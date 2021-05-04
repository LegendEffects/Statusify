"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runnableSeverity = exports.RunnableSeverityBuilder = exports.RunnableSeverity = void 0;
const Severity_1 = __importDefault(require("./Severity"));
const Builder_1 = require("../Builder");
class RunnableSeverity extends Severity_1.default {
    constructor({ id, name, runnable }) {
        super({ id, name });
        this.runnable = runnable;
    }
    achieved(component) {
        return this.runnable(component);
    }
}
exports.RunnableSeverity = RunnableSeverity;
class RunnableSeverityBuilder extends Builder_1.SeverityBuilder {
    runnable(runnable) {
        this._runnable = runnable;
        return this;
    }
    build() {
        return new RunnableSeverity({
            id: this._id,
            name: this._name,
            attributes: this._attributes,
            runnable: this._runnable,
        });
    }
}
exports.RunnableSeverityBuilder = RunnableSeverityBuilder;
function runnableSeverity(id) {
    return new RunnableSeverityBuilder(id);
}
exports.runnableSeverity = runnableSeverity;
//# sourceMappingURL=RunnableSeverity.js.map