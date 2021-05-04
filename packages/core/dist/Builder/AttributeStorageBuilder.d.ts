import { AttributeStorageType } from "../Util/AttributeStorage";
export default class AttributeStorageBuilder {
    protected _attributes: AttributeStorageType;
    attribute(key: string, value: any): this;
}
