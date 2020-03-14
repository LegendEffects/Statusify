<template>
  <div class="monitor-dashes">

    <svg v-if="providerInfo !== null" class="outage-graph" preserveAspectRatio="none" height="34" :viewBox="viewbox">
      <rect v-for="(percent, index) of providerInfo.uptimeRatios" :key="index" height="34" width="3" :x="index * 5" y="0" :class="getDashStyle(percent, index)" class="dash" />
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
const viewportMargins = [
  {width: 1200, box: "0 0 448 34", days: 90},
  {width: 1000, box: "150 0 298 34", days: 60},
  {width: 0, box: "300 0 148 34", days: 30}
]

export default {
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
    sampleDashes: [],
    viewbox: "0 0 448 34",
    daysShown: 90
  }},

  methods: {
    getDashStyle(percent, index) {
      console.log(percent, index);

      if(percent >= 100) {
        return ["status-operational--f"];
      }

      if(percent >= 85) {
        return ["status-partial--f"];
      }

      return ["status-major--f"];
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
    for(let i = 0; i < 90; i++) {
      this.sampleDashes.push(Math.floor(Math.random() * 100) + 50);
    }

    this.resize();
    window.addEventListener("resize", this.resize);
  },
}
</script>