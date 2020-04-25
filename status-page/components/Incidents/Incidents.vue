<template>
  <div class="incidents" :class="{resolved, unresolved: !resolved}">
    <div class="sub-heading" v-if="resolved">Past Incidents</div>

    <incident v-for="(incident, key) of getIncidents" :key="key" :incident="incident" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import config from '@/config'
import Incident from "./Incident"

export default {
  components: {
    Incident
  },

  props: {
    resolved: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    ...mapGetters({
      incidents: 'incidents/getIncidents'
    }),

    getIncidents() {
      if(this.resolved) {
        return this.incidents.filter(incident => incident.attributes.resolved).slice(0, config.pageLimit);
      } else {
        return this.incidents.filter(incident => !incident.attributes.resolved);
      }
    }
  },

  render: (createElement) => {
    for(const key in this.getIncidents) {
      const incident = this.incidents[key];
    }
  }
}
</script>