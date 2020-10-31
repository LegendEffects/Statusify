<template>
  <div
    v-show="tick !== null && shown"
    ref="tooltip"
    role="tooltip"
    class="day-tooltip-container"
    @mouseenter.self="enter"
    @mouseleave.self="leave"
  >
    <div class="tooltip-arrow" data-popper-arrow />
    <div class="day-tooltip">
      <div v-if="tick !== null">
        <div class="date">{{ $status.formatShort(tick.date) }}</div>
        <div class="info">
          <template v-if="hasIssues">
            <div v-if="downtime" class="outage">
              {{ downtime }}
            </div>
            <div v-if="incidents">
              <div class="font-medium mb-1">
                {{ $t('component.incidents.related') }}
              </div>

              <div
                v-for="(incident, i) of incidents"
                :key="i"
                class="font-light"
              >
                <NuxtLink
                  :to="`/incidents/${incident.slug}`"
                  class="hover:underline"
                  >{{ incident.title }}</NuxtLink
                >
              </div>
            </div>
          </template>
          <template v-else>
            {{ $t('component.noDowntime') }}
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Ref } from 'nuxt-property-decorator'
import { createPopper, Instance } from '@popperjs/core'
import ITick from '~/src/status-lib/interfaces/ticks/ITick'

@Component({
  name: 'ComponentTickGraph',
})
export default class extends Vue {
  @Ref()
  tooltip!: HTMLElement

  private popperInstance: Instance | null = null
  private shown: boolean = false
  private hovered: boolean = false
  private tick: ITick | null = null
  private debounce: NodeJS.Timeout | null = null

  //
  // Component
  //
  get hasIssues() {
    return this.downtime || this.incidents
  }

  get downtime() {
    if (this.tick === null) {
      return false
    }

    if (this.tick.downtime === undefined || this.tick.downtime === 0) {
      return false
    }

    return this.tick.downtime
  }

  get incidents() {
    if (this.tick === null) {
      return false
    }

    if (this.tick.incidents.length === 0) {
      return false
    }

    return this.tick.incidents
  }

  //
  // Utility
  //
  private createPopperInstance(ref: HTMLElement): Instance {
    return createPopper(ref, this.tooltip, {
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, -4],
          },
        },
      ],
    })
  }

  private destroyPopperInstance() {
    if (this.popperInstance === null) {
      return
    }

    this.popperInstance.destroy()
    this.popperInstance = null
  }

  //
  // Public
  //
  show(e: MouseEvent, tick: ITick) {
    this.destroyPopperInstance()

    this.tick = tick
    this.shown = true
    this.popperInstance = this.createPopperInstance(e.target as HTMLElement)
  }

  // Debounce the element to give time to understand if the tooltip itself is now
  // being hovered over, if not then destroy the instance
  hide() {
    if (this.debounce !== null) {
      clearTimeout(this.debounce)
    }
    this.debounce = setTimeout(() => {
      if (this.hovered) {
        return
      }

      this.destroyPopperInstance()
      this.shown = false
    }, 50)
  }

  //
  // Tooltip Element Enter/Leave
  //
  enter() {
    this.hovered = true
  }

  leave() {
    this.hovered = false
    this.hide()
  }
}
</script>

<style>
.day-tooltip {
  @apply bg-background text-color px-4 py-2 text-sm rounded-sm mt-3;
}
.day-tooltip .date {
  @apply font-medium mb-2 w-64;
}

.tooltip-arrow,
.tooltip-arrow::before {
  @apply absolute w-2 h-2;
  z-index: -1;
}

.tooltip-arrow::before {
  @apply bg-background transform rotate-45 mt-2;
  content: '';
}

.day-tooltip[data-popper-placement^='top'] > .tooltip-arrow {
  bottom: -4px;
}

.day-tooltip[data-popper-placement^='bottom'] > .tooltip-arrow {
  top: -4px;
}

.day-tooltip[data-popper-placement^='left'] > .tooltip-arrow {
  right: -4px;
}

.day-tooltip[data-popper-placement^='right'] > .tooltip-arrow {
  left: -4px;
}
</style>
