<template>
  <div class="container monitor-page">
    <div class="meta">
      <router-link class="back-link" to="/">
          <div class="arrow" />
          Back to Monitors
      </router-link>

      <div class="title">
        {{ monitor.name }}
      </div>
    </div>

    <template v-if="getRelatedIncidents(monitor.name).length === 0">
      <div class="subtitle status-operational--c">No incidents to display.</div>
    </template>
    <template v-else>
      <div v-for="(incident, index) of getRelatedIncidents(monitor.name).slice(0, config.pageLimit)" :key="index" class="incident">
        <div class="title">
          <router-link :to="'/incident/' + getSlug(incident)">{{ incident.attributes.title }}</router-link>
          <div class="date">{{ formatDate(incident.attributes.date, config.incidents.fullPageDateFormat) }}</div>
        </div>

        <span v-if="incident.attributes.resolved" class="status-operational--c">
          Resolved after {{ formatDuration(incident.attributes.date, incident.attributes.resolvedWhen) }} of downtime.
        </span>
        <span v-else class="status-major--c">
          Incident still active.
        </span>
      </div>
    </template>


  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import config from "@/config"
import TimeMixin from "@/mixins/time"

export default {
  mixins: [
      TimeMixin
  ],

  async asyncData({ params }) {
    let result;

    const comparison = (monitor) => {
      return monitor.name.toLowerCase() === params.id.toLowerCase();
    }

    for(const monitorGroup of config.monitors) {
      if(Array.isArray(monitorGroup)) {
        result = monitorGroup.find(comparison);
        if(result !== undefined) return { monitor: result };
      } else {
        result = monitorGroup.monitors.find(comparison);
        if(result !== undefined) return { monitor: result };
      }
    }

    return false;
  },

  head() {
    return {
      title: config.title.prefixed.replace("{prefix}", this.monitor.name)
    }
  },

  computed: {
    ...mapGetters({
      getRelatedIncidents: 'incidents/getIncidentsRelatedToMonitor'
    }),

    config() {
      return config;
    }
  },

  methods: {
    getSlug(incident) {
      return incident.meta.resourcePath.replace(/^.*[\\\/]/, '').replace('.md', '');
    }
  }
}
</script>