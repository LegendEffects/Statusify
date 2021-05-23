import Statusify from "..";

/**
 * Used to inject a statusify instance into anything statusify interacts with
 * Such as providers, calculators, and plugins
 */
export default interface IInjectStatusify {
  /**
   * Called upon instantiation of the entity.
   * @param statusify Statusify Instance
   */
  inject(statusify: Statusify): void;
}