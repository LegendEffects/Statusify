import { Module, VuexModule, Mutation, Action } from 'nuxt-property-decorator';
import { Monitor } from '~/types/index';

export interface MonitorState {
  monitors: {[key: string]: Monitor}
}

@Module({
  name: 'Monitors',
  stateFactory: true,
  namespaced: true
})
export default class Monitors extends VuexModule implements MonitorState {
  monitors = {};

  
}