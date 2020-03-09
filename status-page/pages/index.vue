<template>
  <div v-if="loading" class="loading-container">
    <div class="loading-indicator" />
  </div>
  <div v-else class="container">

    <div class="monitor-group">
      <monitor />
      <monitor />
      <monitor />
    </div>

  </div>
</template>

<script>
import Monitor from "@/components/Monitor"

export default {
  components: {
    Monitor
  },

  data() {return {
    loading: false
  }}
}
</script>
