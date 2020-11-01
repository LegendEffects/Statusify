<template>
  <div class="monitor-group mb-8" :class="monitorClasses">
    <div v-if="hasTitle" class="title-bar" @click="collapse">
      <div v-if="collapsible" class="collapse-indicator">
        {{ collapsed ? '+' : '-' }}
      </div>

      <div v-if="!isAnonymous">{{ name }}</div>

      <span
        v-if="description"
        v-tippy="{ arrow: true }"
        :content="description"
        class="tooltip"
        >{{ $t('tooltip') }}</span
      >

      <transition name="fade-up">
        <div
          v-show="collapsed"
          v-tippy
          :content="$t('component.groups.overallStatusDescription')"
          class="overall-status text-s-operational"
        >
          Operational
        </div>
      </transition>
    </div>

    <Collapsible :active="!collapsed">
      <ComponentDisplay
        v-for="(component, i) of group.components"
        :key="i"
        :component="component"
      />
    </Collapsible>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import Collapsible from 'vue-slide-up-down'
import IComponentGroup from '~/src/status-lib/interfaces/component/IComponentGroup'

@Component({
  name: 'ComponentGroup',
  components: {
    Collapsible,
  },
})
export default class extends Vue {
  @Prop()
  private group!: IComponentGroup

  get name() {
    return this.group.name
  }

  get description() {
    return this.group.description
  }

  get collapsible() {
    return this.group.collapsible
  }

  get isAnonymous() {
    return this.group.isAnonymous()
  }

  private collapsed: boolean = false

  get monitorClasses() {
    return {
      collapsible: this.collapsible,
      collapsed: this.collapsed,
      'has-title': this.hasTitle,
    }
  }

  get hasTitle() {
    return this.collapsible || !this.group.isAnonymous()
  }

  collapse() {
    if (this.collapsible) {
      this.collapsed = !this.collapsed
    }
  }

  created() {
    this.collapsed = this.group.collapsed || false
  }
}
</script>

<style>
.monitor-group .title-bar {
  @apply flex bg-background-2 p-4 font-medium text-xl leading-full;
}

.monitor-group.collapsible .title-bar {
  @apply cursor-pointer;
}

.monitor-group .collapse-indicator {
  @apply text-center mr-2 w-4 text-xl cursor-pointer;
}

.monitor-group .overall-status {
  @apply ml-auto text-base font-normal;
}
</style>
