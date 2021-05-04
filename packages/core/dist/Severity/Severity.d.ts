import AttributeStorage, { AttributeStorageType } from "../Util/AttributeStorage";
import Component from "../Component/Component";
export interface SeverityCParams {
    id: string;
    name: string;
    attributes?: AttributeStorageType;
}
export default abstract class Severity extends AttributeStorage {
    readonly id: string;
    readonly name: string;
    constructor({ id, name, attributes }: SeverityCParams);
    abstract achieved(component: Component): Promise<Boolean>;
}
