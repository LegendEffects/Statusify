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
