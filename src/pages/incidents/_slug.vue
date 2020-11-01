<template>
  <div class="container mx-auto max-w-4xl px-4">
    <NuxtLink class="back-link mb-4" to="/">
      <div class="arrow" />
      Home
    </NuxtLink>

    <div class="flex flex-wrap">
      <h2
        class="w-full md:w-1/2 text-2xl font-semibold"
        :class="`text-s-${incident.severity}`"
      >
        {{ incident.title }}
      </h2>
      <div
        class="ml-auto flex items-start w-full md:w-1/2 md:justify-end my-4 md:my-0"
      >
        <NuxtLink
          v-for="(component, i) of affected"
          :key="i"
          :to="`/components/${component.slug}`"
          class="affected-component last:mr-0 whitespace-no-wrap"
        >
          {{ component.name }}
        </NuxtLink>
      </div>
    </div>

    <div>
      {{ $status.formatFull(createdAt) }}
    </div>
    <div class="text-color-light">
      {{ $t('incident.resolvedAfter', { duration }) }}
    </div>

    <nuxt-content class="mt-8" :document="incident" />
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import { Vue, Component } from 'nuxt-property-decorator'
import moment, { Moment } from 'moment-timezone'
import IncidentUpdate from '@/components/incidents/IncidentUpdate.vue'
import IIncident from '~/src/status-lib/interfaces/incident/IIncident'

@Component({
  components: { IncidentUpdate },
})
export default class extends Vue {
  async asyncData({ params, $content }: Context) {
    const incident = await $content('incidents', params.slug).fetch()

    return {
      incident,
    }
  }

  incident!: IIncident

  get duration() {
    return moment
      .duration(this.createdAt.diff(this.incident.resolvedAt))
      .humanize()
  }

  get createdAt(): Moment {
    if (this.incident.date !== undefined) {
      return moment(this.incident.date)
    }

    return moment(this.incident.createdAt)
  }

  get resolvedAt(): Moment {
    if (this.incident.resolved === true) {
      return moment(this.incident.updatedAt)
    }

    if (this.incident.resolved && moment(this.incident.resolved).isValid()) {
      return moment(this.incident.resolved)
    }

    return moment()
  }

  get affected() {
    return this.incident.affected.map((slug) => {
      return this.$status.findComponentBy('slug', slug)
    })
  }
}
</script>

<style>
.affected-component {
  @apply py-2 px-4 bg-background mr-2;
}
</style>
