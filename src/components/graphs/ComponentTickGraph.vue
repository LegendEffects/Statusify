/* eslint-disable prettier/prettier */
<template>
  <div class="component-ticks mt-2">
    <svg
      class="graph w-full overflow-hidden"
      preserveAspectRatio="none"
      height="34"
      :viewBox="viewport.box"
    >
      <rect
        v-for="(tick, i) of ticks"
        :key="i"
        height="34"
        width="3"
        :x="i * 5"
        y="0"
        class="tick hover:fill-s-info fill-s-operational"
      />
    </svg>

    <div class="graph-scale flex justify-between mt-1">
      <div class="align-left text-color-light">{{ viewport.days }} Days</div>
      <div class="align-middle">TODO</div>
      <div class="align-right text-color-light">Today</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import moment from 'moment-timezone'
import { ITickConfig } from '~/src/status-lib/BaseConfig'
import IComponent from '~/src/status-lib/interfaces/component/IComponent'

@Component({
  name: 'ComponentTickGraph',
})
export default class extends Vue {
  @Prop()
  component!: IComponent

  get ticks() {
    const ticks = []
    for (let i = this.viewport.days; i > 0; i--) {
      const date = moment().startOf('day').subtract(i, 'days')
      const state = 'operational'

      ticks.push({
        date,
        state,
      })
    }

    return ticks
  }

  private viewport: ITickConfig = this.$status.config.ticks[0]
  private resizeTimeout!: NodeJS.Timeout

  private resize() {
    this.viewport =
      this.$status.config.ticks.find((m) => window.innerWidth >= m.width) ||
      this.$status.config.ticks[0]
  }

  created() {
    this.resize()

    window.addEventListener('resize', () => {
      clearTimeout(this.resizeTimeout)
      this.resizeTimeout = setTimeout(this.resize, 50)
    })
  }
}
</script>
