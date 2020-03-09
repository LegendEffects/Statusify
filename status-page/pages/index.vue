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

    <div class="incidents">
      <div class="sub-heading">Past Incidents</div>
      <incident v-for="(incident, key) of incidents" :key="key" :incident="incident" />
    </div>
  </div>
</template>

<script>
import Monitor from "@/components/Monitor/Monitor"
import Incident from "@/components/Incidents/Incident"

export default {
  async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    const resolve = require.context('../content/incidents/', true, /\.md$/);
    // console.log(incidents.keys());
    const imports = resolve.keys().map(key => {
      const [, name] = key.match(/\/(.+)\.md$/);
      return resolve(key);
    });

    return {
      incidents: imports
    };
  },
  
  components: {
    Monitor,
    Incident
  },

  data() {return {
    loading: false
  }},

}
</script>
