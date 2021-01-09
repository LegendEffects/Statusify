import { SeverityBuilder } from "../Builder";
import Component from "../component/Component";
import Severity, { SeverityCParams } from "./Severity";

export type SeverityRunnable = (component: Component) => Promise<Boolean>

export class RunnableSeverity extends Severity {
  private runnable: SeverityRunnable

  constructor({ id, name, runnable }: { runnable: SeverityRunnable } & SeverityCParams) {
    super({ id, name })
    this.runnable = runnable
  }

  achieved(component: Component): Promise<Boolean> {
    return this.runnable(component)
  }
}

export class RunnableSeverityBuilder extends SeverityBuilder {
  private _runnable: SeverityRunnable

  public runnable(runnable: SeverityRunnable) {
    this._runnable = runnable
    return this
  }

  public build(): Severity {
    return new RunnableSeverity({
      id: this._id,
      name: this._name,
      runnable: this._runnable
    })
  }
}

export function runnableSeverity(id: string) {
  return new RunnableSeverityBuilder(id)
}