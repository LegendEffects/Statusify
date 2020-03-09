<template>
  <div v-if="loading" class="loading-container">
    <div class="loading-indicator" />
  </div>
  <div v-else class="container">
    
  </div>
</template>

<script>
export default {
  data() {return {
    loading: true
  }}
}
</script>
