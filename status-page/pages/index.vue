<template>
  <div class="container mx-auto max-w-4xl">    
    <MonitorGroup />
    
    <MonitorGroup title="Test Title" description="This is a test group" collapsible />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class extends Vue { }
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
