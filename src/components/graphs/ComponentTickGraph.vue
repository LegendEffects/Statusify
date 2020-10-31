<template>
  <div class="component-ticks mt-2">
    <svg
      class="graph w-full overflow-hidden"
      preserveAspectRatio="none"
      height="34"
      :viewBox="viewport.box"
      @mouseleave.self="tooltip.hide()"
      @blur="tooltip.hide()"
    >
      <rect
        v-for="(tick, i) of ticks"
        :key="i"
        height="34"
        width="3"
        :x="i * 5"
        :class="`fill-s-${tick.severity.id}`"
        y="0"
        class="tick hover:fill-s-info"
        @mouseenter.self="tooltip.show($event, tick)"
        @focus="tooltip.show($event, tick)"
      />
    </svg>

    <div class="graph-scale flex justify-between mt-1 font-light">
      <div class="align-left text-color-light">{{ viewport.days }} Days</div>
      <div class="align-middle">TODO</div>
      <div class="align-right text-color-light">Today</div>
    </div>

    <ComponentTickGraphTooltip ref="tooltip" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Ref } from 'nuxt-property-decorator'
import ComponentTickGraphTooltip from './ComponentTickGraphTooltip.vue'
import { ITickConfig } from '~/src/status-lib/BaseConfig'
import IComponent from '~/src/status-lib/interfaces/component/IComponent'
import ITick from '~/src/status-lib/interfaces/ticks/ITick'

@Component({
  name: 'ComponentTickGraph',
})
export default class extends Vue {
  @Prop()
  component!: IComponent

  @Ref()
  tooltip!: ComponentTickGraphTooltip

  private viewport: ITickConfig = this.$status.config.ticks[0]
  private resizeTimeout!: NodeJS.Timeout
  private ticks: ITick[] = []

  //
  // Viewport Resizing
  //
  private resize() {
    this.viewport =
      this.$status.config.ticks.find((m) => window.innerWidth >= m.width) ||
      this.$status.config.ticks[0]
  }

  async created() {
    this.ticks = await this.component.getTicks(90)
    console.log(this.component)

    this.resize()
    window.addEventListener('resize', () => {
      clearTimeout(this.resizeTimeout)
      this.resizeTimeout = setTimeout(this.resize, 50)
    })
  }
}
</script>
