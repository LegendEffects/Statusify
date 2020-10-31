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
        <div class="info">
          <div class="date">{{ $status.formatShort(tick.date) }}</div>
          <template v-if="!hasIssues">{{
            $t('component.downtime.none')
          }}</template>

          <div v-if="incidents" class="incidents">
            <div class="font-medium mb-1">
              {{ $t('component.incidents.related') }}
            </div>

            <div v-for="(incident, i) of incidents" :key="i" class="font-light">
              <NuxtLink
                :to="`/incidents/${incident.slug}`"
                class="hover:underline"
                >{{ incident.title }}</NuxtLink
              >
            </div>
          </div>
        </div>
        <div v-if="downtime" class="outage">
          <template v-if="downtime.severity.id === 'major'">
            <!-- eslint-disable-next-line prettier/prettier -->
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path class="fill-s-major" fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
          </template>
          <template v-else-if="downtime.severity.id === 'partial'">
            <!-- eslint-disable-next-line prettier/prettier -->
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation" class="svg-inline--fa fa-exclamation" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path class="fill-s-partial" fill="currentColor" d="M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z"></path></svg>
          </template>

          <span class="severity">
            {{
              $t('component.downtime.display', {
                severity: downtime.severity.displayName,
              })
            }}
          </span>
          {{ duration(downtime.length, 'seconds').humanize() }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Ref } from 'nuxt-property-decorator'
import { createPopper, Instance } from '@popperjs/core'
import moment, { DurationInputArg1, DurationInputArg2 } from 'moment-timezone'
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

    if (this.tick.downtime === undefined) {
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

  duration(val: DurationInputArg1, unit: DurationInputArg2) {
    return moment.duration(val, unit)
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
  @apply bg-background text-color text-sm rounded-sm mt-3;
}

.day-tooltip .info {
  @apply px-4 py-2;
}

.day-tooltip .date {
  @apply font-medium w-64;
}
.day-tooltip .incidents {
  @apply mt-2;
}
.day-tooltip .outage {
  @apply bg-background-2 px-4 py-2 flex;
}
.day-tooltip .outage svg {
  @apply w-2 mr-3;
}
.day-tooltip .outage .severity {
  @apply mr-auto font-medium;
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
