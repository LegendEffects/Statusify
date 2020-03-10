<template>
  <div class="incident" :class="[isResolved ? 'resolved' : 'unresolved', getSeverity]">
    <div class="title" :class="'status-' + getSeverity + (isResolved ? '--c' : '')">
      {{ incident.attributes.title }}
      <div class="date no-margin">{{ formatDate(incident.attributes.date, config.incidents.overallDateFormat) }}</div>
    </div>
    <div class="updates">
      <div v-html="html" />
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
    }
  },
  
  data() {return {
    html: ""
  }},

  created() {
    this.html = this.incident.html;
    let matches = [... this.html.matchAll(/\{\{date\((.*)\)\}\}/g)];

    for(const match of matches) {
      this.html = this.html.replace(match[0], `<div class="date">${this.formatDate(match[1], config.incidents.updateDateFormat)}</div>`);
    }
  }
}
</script>