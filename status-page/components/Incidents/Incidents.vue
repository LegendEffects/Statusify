<template>
  <div class="incidents" :class="{resolved, unresolved: !resolved}">
    <div class="sub-heading" v-if="resolved">Past Incidents</div>

    <incident v-for="(incident, key) of getIncidents" :key="key" :incident="incident" />
  </div>
</template>

<script>
import Incident from "./Incident"

export default {
  components: {
    Incident
  },

  props: {
    incidents: {
      type: Array,
      default() { return [] }
    },
    resolved: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    getIncidents() {
      if(this.resolved) {
        return this.incidents.filter(incident => incident.attributes.resolved);
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