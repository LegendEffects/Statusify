export declare type AttributeStorageType = {
    [key: string]: any;
};
export default class AttributeStorage {
    readonly attributes: AttributeStorageType;
    constructor(attributes?: AttributeStorageType);
    setAttribute(key: string, value: any): Promise<void>;
    getAttribute(key: string, def?: any): Promise<any>;
    removeAttribute(key: string): Promise<void>;
    getAttributes(): Promise<AttributeStorageType>;
}
