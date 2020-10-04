<template>
  <div class="monitor-group mb-8" :class="{ collapsible, collapsed, 'has-title': !anonymous }">
    <div class="title flex bg-background-2 p-4 font-medium text-xl leading-full" v-if="name !== null" @click="collapse" :class="{ 'cursor-pointer': collapsible }">
      <div v-if="collapsible" class="collapse-indicator">{{ collapsedIndicator }}</div>

      {{ name }}&nbsp;<span v-if="description" v-tippy="{arrow: true}" :content="description" class="tooltip">(?)</span>

      <transition name="fade-up">
        <div class="ml-auto text-base font-normal text-s-operational" v-show="lCollapsed" v-tippy="{arrow: true}" :content="$t('groups.overallStatusDescription')">Operational</div>
      </transition>
    </div>

    <SlideUpDown :active="!lCollapsed">
      <div class="monitors">
        <Monitor v-for="(monitor, index) of monitors" :key="index" v-bind="monitor" />
      </div>
    </SlideUpDown>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, State } from 'nuxt-property-decorator';
import SlideUpDown from 'vue-slide-up-down';
import { MonitorState } from '../../store/monitors';
import { MonitorGroup } from '../../types';

@Component({
  name: 'MonitorGroup',
  components: {
    SlideUpDown
  }
})
export default class extends Vue { 
  private lCollapsed = false;

  @Prop({ default: null })
  private name!: string|null;

  @Prop({ default: null })
  private description!: string|null;

  @Prop({ default: false, type: Boolean })
  private collapsed!: boolean;

  @Prop({ default: false, type: Boolean })
  private collapsible!: boolean;

  @Prop()
  private monitors!: MonitorGroup[];

  get shouldHaveHeader() {
    return this.collapsible || (!this.anonymous);
  }

  get anonymous() {
    return this.name === null;
  }

  get collapsedIndicator() {
    return this.lCollapsed ? "+" : "-";
  }

  collapse() {
    if(!this.collapsible) {
      return;
    }

    this.lCollapsed = !this.lCollapsed;
  }

  created() {
    this.lCollapsed = this.collapsed;
  }
}
</script>

<style>
.collapse-indicator {
  @apply text-center mr-2 w-4 text-xl;
}

.tooltip {
  @apply text-base font-normal text-color-light;
}
</style>