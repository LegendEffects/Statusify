<template>
  <div class="incident" :class="incidentClasses">
    <div class="title" :class="incidentTitleClasses">
      {{ incident.attributes.title }}
      <div class="date no-margin">{{ formatDate(new Date(incident.attributes.date), config.incidents.overallDateFormat) }}</div>
    </div>
    <div class="updates">
      <div v-html="incident.html" />
    </div>
  </div>
</template>

<script>
import TimeMixin from "@/mixins/time"
import config from "@/config"

export default {
  props: {
    incident: {
      type: Object,
      default() {
        return {}
      }
    }
  },

  mixins: [
    TimeMixin
  ],

  computed: {
    config() {
      return config;
    },

    isResolved() {
      return this.incident.attributes.resolved;
    },
    getSeverity() {
      return this.incident.attributes.severity;
    },

    incidentClasses() {
      const final = [];
      final.push(this.isResolved ? "resolved" : "unresolved");
      final.push(this.getSeverity);

      return final;
    },
    
    incidentTitleClasses() {
      if(this.isResolved) {
        return ['status-' + this.incident.attributes.severity + '--c']
      }

      return ['status-' + this.incident.attributes.severity];
    }
  },

  created() {
    let matches = [... this.incident.html.matchAll(/\{\{date\((.*)\)\}\}/g)];

    for(const match of matches) {
      this.incident.html = this.incident.html.replace(match[0], `<div class="date">${this.formatDate(match[1], config.incidents.updateDateFormat)}</div>`);
    }
  }
}
</script>