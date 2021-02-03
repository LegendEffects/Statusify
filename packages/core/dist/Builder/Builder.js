"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Builder = void 0;
const ApplyMixins_1 = require("../Util/ApplyMixins");
const ComponentBuilder_1 = require("./ComponentBuilder");
const SeverityBuilder_1 = require("./SeverityBuilder");
class Builder {
}
exports.Builder = Builder;
ApplyMixins_1.applyMixins(Builder, [ComponentBuilder_1.ComponentBuilderMixin, SeverityBuilder_1.SeverityBuilderMixin]);
//# sourceMappingURL=Builder.js.map