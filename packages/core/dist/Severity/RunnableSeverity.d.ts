import Severity, { SeverityCParams } from "./Severity";
import Component from "../component/Component";
import { SeverityBuilder } from "../Builder";
export declare type SeverityRunnable = (component: Component) => Promise<Boolean>;
export declare class RunnableSeverity extends Severity {
    private runnable;
    constructor({ id, name, runnable }: {
        runnable: SeverityRunnable;
    } & SeverityCParams);
    achieved(component: Component): Promise<Boolean>;
}
export declare class RunnableSeverityBuilder extends SeverityBuilder {
    private _runnable;
    runnable(runnable: SeverityRunnable): this;
    build(): Severity;
}
export declare function runnableSeverity(id: string): RunnableSeverityBuilder;
