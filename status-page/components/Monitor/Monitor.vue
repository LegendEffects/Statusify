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
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { Monitor } from '../../types'
import Slugify from 'slugify'

@Component({
  name: 'Monitor'
})
export default class extends Vue { 
  @Prop()
  name!: string;

  @Prop({type: String})
  slug!: string;

  @Prop({default: null, type: String})
  description!: string|null;  

  @Prop({default: false, type: Boolean})
  latency!: boolean;
}
</script>