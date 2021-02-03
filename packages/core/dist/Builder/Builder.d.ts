import { ComponentBuilderMixin } from "./ComponentBuilder";
import { SeverityBuilderMixin } from "./SeverityBuilder";
export declare class Builder {
}
export interface Builder extends ComponentBuilderMixin, SeverityBuilderMixin {
}
