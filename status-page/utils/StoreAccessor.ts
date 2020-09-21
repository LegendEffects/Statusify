import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import Monitors from '~/store/monitors'

let MonitorStore: Monitors;

function initialiseStores(store: Store<any>): void {
  MonitorStore = getModule(Monitors, store);
}

export { initialiseStores, MonitorStore }