<template>
  <div class="monitor-group mb-8" :class="{ collapsible, collapsed, 'has-title': title !== null }">
    <div class="title flex bg-background-2 p-4 font-medium text-xl leading-full" v-if="title !== null" @click="collapse" :class="{ 'cursor-pointer': collapsible }">
      <div v-if="collapsible" class="collapse-indicator">{{ collapsedIndicator }}</div>
      {{ title }}&nbsp;
      <span v-if="description" v-tippy="{arrow: true}" :content="description" class="tooltip">(?)</span>
    </div>

    <SlideUpDown :active="!collapsed">
      <div class="monitors">
        <Monitor />
        <Monitor />
        <Monitor />
        <Monitor />
      </div>
    </SlideUpDown>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import SlideUpDown from 'vue-slide-up-down'

@Component({
  components: {
    SlideUpDown
  }
})
export default class extends Vue { 
  private collapsed = false;

  @Prop({ default: null})
  private title!: string|null;

  @Prop({ default: null})
  private description!: string|null;

  @Prop({ default: false, type: Boolean })
  private collapsible!: boolean;

  get isCollapsed() {
    return !(this.collapsed);
  }

  get collapsedIndicator() {
    return this.collapsed ? "+" : "-";
  }

  collapse() {
    if(!this.collapsible) {
      return;
    }

    this.collapsed = !this.collapsed;
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