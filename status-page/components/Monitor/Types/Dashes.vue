<template>
  <div class="monitor-dashes">

    <svg v-if="providerInfo !== null" class="outage-graph" preserveAspectRatio="none" height="34" :viewBox="viewbox">
      <rect v-for="(dash, index) of getDashes()" :key="index" height="34" width="3" :x="index * 5" y="0" :class="'status-'+dash.state+'--f'" class="dash" v-tippy="{arrow: true, interactive: true}" :content="generateTooltip(dash)" />
    </svg>

    <div class="outage-graph-scale">
      <div class="left">{{daysShown}} Days</div>
      <div class="middle">
        <span v-if="providerInfo === null">Calculating</span>
        <span v-else>{{ (Math.round((providerInfo.averageUptimes[daysShown] + Number.EPSILON) * 100) / 100).toFixed(2) }}%</span>
      </div>
      <div class="right">Today</div>
    </div>

  </div>
</template>

<script>
import moment from 'moment'
import { mapGetters } from 'vuex'

import TimeMixin from "@/mixins/time"
import config from '@/config'

const viewportMargins = [
  {width: 1200, box: "0 0 448 34", days: 90},
  {width: 1000, box: "150 0 298 34", days: 60},
  {width: 0, box: "300 0 148 34", days: 30}
]

export default {
  mixins: [
    TimeMixin
  ],
  
  props: {
    monitor: {
      type: Object,
      default() {
        return {}
      }
    },
    providerInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },

  data() {return {
    viewbox: "0 0 448 34",
    daysShown: 90
  }},

  computed: {
    ...mapGetters({
      getRelatedIncidents: 'incidents/getIncidentsRelatedToMonitor'
    })
  },

  methods: {
    isStateWorse(that, than) {
      const severities = config.severityRatings;

      const thatIndex = severities.findIndex(severity => severity.name === that);
      const thanIndex = severities.findIndex(severity => severity.name === than);

      return thatIndex <= thanIndex;
    },

    getDashes() {
      let dashes = [];
      const incidents = this.getRelatedIncidents(this.monitor.name);

      for(let i = 0; i < this.daysShown; i++) {
        const dayMoment = moment().day(-i);
        const providerRatio = this.providerInfo.uptimeRatios[i];

        const dayIncidents = incidents.filter(incident => {
          return dayMoment.isSame(incident.attributes.date, 'day');
        });

        let state = "operational";
        for(const incident of dayIncidents) {
          if(incident.attributes.severity === 'info') continue;
          if(this.isStateWorse(incident.attributes.severity, state)) {
            state = incident.attributes.severity;
          }
        }

        if(providerRatio >= 100 && this.isStateWorse('operational', state)) state = "operational";
        else if(providerRatio >= 85 && this.isStateWorse('partial', state)) state = "partial";
        else state = "major";

        dashes.push({
          date: dayMoment,
          dayIncidents,
          state
        })
      }

      return dashes;
    },

    generateTooltip(dashInfo) {
      // Is this messy? Yes.
      // However, vue has issues parsing ``` for some reason? 

      const humanDate = this.formatDate(dashInfo.date, config.incidents.overallDateFormat);
      let incidents = '';

      if(dashInfo.dayIncidents.length === 0) {
        incidents = 'No incidents reported on this day.';
      } else {
        incidents += '<div class="heading">Related</div>';
        incidents += '<div class="tooltip-incidents">';

        for(const incident of dashInfo.dayIncidents) {
          const slug = this.getSlug(incident);
          incidents += `<a href="/incident/${slug}">${incident.attributes.title}</a>`
        }

        incidents += `</div>`;
      }

      let html = '<div class="tick-tooltip">';
      html += `  <div class="date">${humanDate}</div>`;
      html += incidents;
      html += '</div>';

      return html;
    },

    getSlug(incident) {
      return incident.meta.resourcePath.replace(/^.*[\\\/]/, '').replace('.md', '');
    },

    resize() {
      for(const margin of viewportMargins) {
        if(window.innerWidth >= margin.width) {
          this.viewbox = margin.box;
          this.daysShown = margin.days
          return;
        }
      }
    }
  },

  created() {
    this.resize();
    window.addEventListener("resize", this.resize);
  },
}
</script>