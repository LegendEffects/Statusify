<template>
  <div class="container mx-auto max-w-4xl">
    <MonitorGroup v-for="(monitor, i) of monitors" :key="i" v-bind="monitor" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, State } from 'nuxt-property-decorator'
import { MonitorState } from '../store/monitors'

@Component
export default class extends Vue {
  @State('monitors')
  private monitorStore!: MonitorState

  get monitors() {
    return this.monitorStore.monitors
  }
}
</script>
