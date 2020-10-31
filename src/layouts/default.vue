<template>
  <div>
    <div class="page-header py-12 mb-8 bg-background-2">
      <div class="container mx-auto">
        <div class="text-center text-5xl font-semibold">LegendEffects</div>
      </div>
    </div>

    <Nuxt />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  public head() {
    return {
      bodyAttrs: {
        class: 'bg-layout text-color',
      },
    }
  }
}
</script>
