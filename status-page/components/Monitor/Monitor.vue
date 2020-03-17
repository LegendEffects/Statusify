<template>
  <div class="monitor">

    <div class="main-info">
      <div class="title">
        {{ monitor.name }}
        <span v-if="monitor.description" v-tippy="{arrow: true}" :content="monitor.description" class="tooltip">(?)</span>
      </div>
      <div class="status" :class="'status-' + getStatus().name + '--c'" v-tippy="{arrow: true}" content="Statues are calculated by the uptime and incident with the highest severity.">{{ getStatus().display_name }}</div>
    </div>

    <dashes :monitor="monitor" :providerInfo="providerInfo" />

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import config from "@/config"
import Dashes from "./Types/Dashes"

export default {
  components: {
    Dashes
  },

  props: {
    monitor: {
      type: Object,
      default() {
        return {}
      }
    }
  },

  computed: {
    ...mapGetters({
      getRelatedActiveIncidents: "incidents/getRelatedActiveIncidentsToMonitor",
      getProvider: "getProvider"
    })
  },

  data() {return {
    providerInfo: null
  }},
  
  methods: {
    getStatus() {
      const incidents = this.getRelatedActiveIncidents(this.monitor.name);
      let highestSeverity = config.severityRatings.length - 1; // Default to the lowest severity
      
      for(const incident of incidents) {
        for(let i = 0; i < config.severityRatings.length; i++) {
          if(incident.attributes.severity === config.severityRatings[i].name && i < highestSeverity) {
            highestSeverity = i;
          }
        }
      }

      return config.severityRatings[highestSeverity];
    },

    getProviderInformation() {
      this.providerInfo = this.getProvider.fetchMonitor({
        axios: this.$axios,
        monitorConfig: this.monitor
      });
    }
  },
  created() {
    if(config.provider.enabled) {
      this.$root.$on('providerReady', this.getProviderInformation);
    }
  }
}
</script>