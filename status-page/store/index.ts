import { Store } from 'vuex'
import { initialiseStores } from '~/utils/StoreAccessor'
const initializer = (store: Store<any>) => initialiseStores(store)
export const plugins = [initializer]
export * from '~/utils/StoreAccessor'