import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';
import config from '~/config';
import { Monitor, MonitorGroup } from '~/types/index';
import Slugify from 'slugify';
import { Context } from '@nuxt/types';

export interface MonitorState {
  monitors: MonitorGroup[];
}

@Module({
  name: 'monitors',
  stateFactory: true,
  namespaced: true
})
export default class Monitors extends VuexModule implements MonitorState {
  monitors: MonitorGroup[] = [];

  @Mutation
  setMonitors(monitors: MonitorGroup[]) {
    this.monitors = monitors;
  }

  @Action
  async refreshMonitors(ctx: any) {

  }

  @Action
  async getMonitorDetails(monitor: string) {

  }

  /**
   * Flattens the tree
   */
  get flattened() {
    let final: Monitor[] = [];

    for(const group of this.monitors) {
      final = final.concat(group.monitors);
    }

    return final;
  }

  @Action
  async find(name: string): Promise<undefined|Monitor> {
    return this.flattened.find((m) => (m.name === name));
  }

  //
  // Init
  //
  @Action
  async nuxtClientInit(ctx: Context) {
    // We need to convert the config into a standard format which can be easily implemented in code.
    let final: MonitorGroup[] = [];

    // Groups => (Named Groups / Anonymous Groups)
    const monitors = config.monitors;
    for(const monitorEntry of monitors) {
      const mArr = (Array.isArray(monitorEntry) ? { monitors: monitorEntry } : monitorEntry) as any;

      // Inject Slugs
      for(const monitor of mArr.monitors) {
        monitor.slug = Slugify(monitor.name).toLowerCase();
      }

      final.push(mArr);
    }

    this.setMonitors(final);
    ctx.$logger.info('Monitors', 'Monitors Initialized.');
  }
}
