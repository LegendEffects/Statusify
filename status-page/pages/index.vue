<template>
  <div v-if="loading" class="loading-container">
    <div class="loading-indicator" />
  </div>
  <div v-else class="container">

    <incidents :incidents="incidents" :resolved="false" />

    <div class="monitor-group">
      <monitor />
      <monitor />
      <monitor />
    </div>

    <incidents :incidents="incidents" :resolved="true" />
  </div>
</template>

<script>
import Monitor from "@/components/Monitor/Monitor"
import Incidents from "@/components/Incidents/Incidents"

export default {
  components: {
    Monitor,
    Incidents
  },

  async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    const resolve = require.context('@/content/incidents/', true, /\.md$/);
    const imports = resolve.keys().map(key => {
      return resolve(key);
    }).reverse();

    return { incidents: imports };
  },

  data() {return {
    loading: false
  }},

}
</script>
