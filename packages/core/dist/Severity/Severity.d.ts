import Component from "../Component/Component";
export interface SeverityCParams {
    id: string;
    name: string;
}
export default abstract class Severity {
    readonly id: string;
    readonly name: string;
    constructor({ id, name }: SeverityCParams);
    abstract achieved(component: Component): Promise<Boolean>;
}
