import Statusify from "..";
import Severity from "./Severity";
export default interface IProvidesSeverities {
    getSeverities(statusify: Statusify): Promise<Severity[]>;
    getSeverity(statusify: Statusify, id: string): Promise<Severity | null>;
}
