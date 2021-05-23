import { applyMixins } from "../Util/ApplyMixins"
import { ComponentBuilderMixin } from "./ComponentBuilder"
import { SeverityBuilderMixin } from "./SeverityBuilder"

export class Builder {}

export interface Builder extends ComponentBuilderMixin, SeverityBuilderMixin {}

applyMixins(Builder, [ ComponentBuilderMixin, SeverityBuilderMixin ])

