import { SeverityBuilder } from "../Builder";
import Component from "../component/Component";
import Severity, { SeverityCParams } from "./Severity";
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
