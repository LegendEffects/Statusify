<template>
  <div class="container mx-auto max-w-4xl">
    <ComponentGroup
      v-for="(group, i) of componentGroups"
      :key="i"
      :group="group"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'IndexPage',
})
export default class extends Vue {
  get componentGroups() {
    return this.$status.componentGroups
  }
}
</script>
