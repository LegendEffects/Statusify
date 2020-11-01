<template>
  <div class="component first:border-t last:border-b">
    <div class="info flex">
      <div class="title mr-auto text-color">
        <NuxtLink :to="`/monitor/${slug}`">{{ name }}</NuxtLink>
        <span
          v-if="description"
          v-tippy
          :content="description"
          class="tooltip"
          >{{ $t('tooltip') }}</span
        >
      </div>
      <div
        v-tippy
        :content="$t('component.statusDescription')"
        class="status"
        :class="`text-s-${severity !== null ? severity.id : 'info'}`"
      >
        {{ severity !== null ? severity.displayName : '' }}
      </div>
    </div>

    <ComponentTickGraph :component="component" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import IComponent from '~/src/status-lib/interfaces/component/IComponent'
import ISeverity from '~/src/status-lib/interfaces/severity/ISeverity'

@Component({
  name: 'ComponentDisplay',
})
export default class extends Vue {
  @Prop()
  component!: IComponent

  get name() {
    return this.component.name
  }

  get description() {
    return this.component.description
  }

  get slug() {
    return this.component.slug
  }

  severity: ISeverity | null = null

  async created() {
    this.severity = await this.component.getSeverity()
  }
}
</script>

<style>
.component {
  @apply border-solid border border-background-2 p-4 border-t-0;
}
</style>
