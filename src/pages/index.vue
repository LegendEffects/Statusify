<template>
  <div class="container mx-auto max-w-4xl px-4">
    <div v-if="!providerAvailable" class="alert px-4 py-2 bg-s-major mb-10">
      <div class="title text-xl">Uh Oh!</div>
      <div>
        It seems like our provider is down, some information may be missing.
      </div>
    </div>

    <ComponentGroup
      v-for="(group, i) of componentGroups"
      :key="i"
      :group="group"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  providerAvailable = true

  get componentGroups() {
    return this.$status.componentGroups
  }

  async created() {
    if (this.$status.provider !== undefined) {
      this.providerAvailable = await this.$status.provider?.available()
    }
  }
}
</script>
