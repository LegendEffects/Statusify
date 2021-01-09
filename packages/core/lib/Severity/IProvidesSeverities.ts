import Statusify from "../Statusify";
import Severity from "./Severity";

export default interface IProvidesSeverities {
  getSeverities(statusify: Statusify): Promise<Severity[]>
}