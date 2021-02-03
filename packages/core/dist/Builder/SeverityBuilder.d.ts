import IProvidesSeverities from "../Severity/IProvidesSeverities";
import Severity from "../Severity/Severity";
import Statusify from "..";
export declare class SeverityBuilderMixin implements IProvidesSeverities {
    _severities: SeverityBuilder[];
    severities(builders: SeverityBuilder[]): this;
    getSeverities(statusify: Statusify): Promise<Severity[]>;
    getSeverity(statusify: Statusify, id: string): Promise<Severity>;
}
export declare abstract class SeverityBuilder {
    protected _name: string;
    protected _id: string;
    constructor(id: string);
    name(name: string): this;
    abstract build(): Severity;
}
