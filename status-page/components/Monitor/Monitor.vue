<template>
  <div class="monitor border-solid border border-background-2 p-4 border-t-0 first:border-t last:border-b">
    <div class="info flex">
      <div class="title mr-auto text-color">
        <NuxtLink :to="'/monitor/' + slug" class="text-lg">{{ name }}</NuxtLink>
        <span v-if="description" v-tippy="{arrow: true}" :content="description" class="tooltip text-color-light">(?)</span>
      </div>
      <div class="status text-s-operational" v-tippy="{arrow: true}" :content="$t('monitor.statusDescription')">Operational</div>
    </div>

    <Dashes />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Provide, Inject, ProvideReactive } from 'nuxt-property-decorator'
import { Monitor, MonitorInfo } from '../../types'
import moment from 'moment'
import Slugify from 'slugify'
import config from '../../config'

@Component({
  name: 'Monitor'
})
export default class extends Vue {
  @Prop()
  @Provide()
  name!: string;

  @Prop({type: String})
  @Provide()
  slug!: string;

  @Prop({default: null, type: String})
  @Provide()
  description!: string|null;

  @Prop({default: false, type: Boolean})
  @Provide()
  latency!: boolean;

  @Prop({default: undefined})
  @Provide()
  provider!: any;

  @Provide()
  getMonitorInfo(): MonitorInfo {
    return this.$props as MonitorInfo;
  }

  @Provide()
  async getProviderInfo() {
    try {
      return await this.$provider.fetchMonitor(this.getMonitorInfo());
    } catch(e) {
      this.$logger.error('Monitor', 'Error accessing provider.', e);
      return false;
    }
  }
}
</script>
