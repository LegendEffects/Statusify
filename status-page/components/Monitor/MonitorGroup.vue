<template>
  <div class="monitor-group" :class="{'collapsible': collapsible, 'collapsed': collapsed, 'has-title': title !== null}">
    <div class="title" v-if="title !== null" @click="collapse">
      <div v-if="collapsible" class="collapse-indicator">{{ collapsedIndicator }}</div>
      {{ title }}&nbsp;

      <span v-if="description !== null" v-tippy="{arrow: true}" :content="description" class="tooltip">(?)</span>
      <div class="status" v-tippy="{arrow: true}" content="Groups take on the status of their most degraded child component. Click to see the status of individual children." :class="'status-' + getStatus().name + '--c'">{{ getStatus().display_name }}</div>
    </div>

    <slide-up-down :active="!collapsed">
      <div class="monitors">
        <monitor v-for="(monitor, index) of monitors" :key="index" :monitor="monitor" />
      </div>
    </slide-up-down>
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SlideUpDown from "vue-slide-up-down"

import Monitor from "./Monitor"
import config from "@/config"

export default {
  components: {
    Monitor,
    SlideUpDown
  },

  props: {
    title: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },

    monitors: {
      type: Array,
      default() {return []}
    },

    collapsible: {
      type: Boolean,
      default: false
    },
    initiallyCollapsed: {
      type: Boolean,
      default: false
    }
  },

  data() {return {
    collapsed: false
  }},

  computed: {
    ...mapGetters({
      getRelatedActiveIncidents: "incidents/getRelatedActiveIncidentsToMonitor"
    }),

    isCollapsed() {
      return !(this.collapsible && this.collapsed);
    },
    collapsedIndicator() {
      return this.collapsed ? "+" : "-";
    }
  },

  methods: {
    collapse() {
      if(!this.collapsible) {
        return;
      }

      this.collapsed = !this.collapsed;
    },

    getStatus() {

      let highestSeverity = config.severityRatings.length - 1; // Default to the lowest severity
      for(const monitor of this.monitors) {
        const incidents = this.getRelatedActiveIncidents(monitor.name);
        
        for(const incident of incidents) {
          for(let i = 0; i < config.severityRatings.length; i++) {
            if(incident.attributes.severity === config.severityRatings[i].name && i < highestSeverity) {
              highestSeverity = i;
            }
          }
        }

        return config.severityRatings[highestSeverity];
      }

    }
  },

  created() {
    this.collapsed = this.collapsed.initiallyCollapsed;
  }
}
</script>