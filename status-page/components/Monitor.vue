<template>
  <div class="monitor">

    <div class="main-info">
      <div class="title">Test Title</div>
      <div class="status status-operational--c">Operational</div>
    </div>

    <div class="monitor-dashes">
      <svg class="outage-graph" preserveAspectRatio="none" height="34" :viewBox="viewbox">
        <rect v-for="(percent, index) of sampleDashes" :key="index" height="34" width="3" :x="index * 5" y="0" :class="getDashStyle(percent)" class="dash" />
      </svg>
      <div class="outage-graph-scale">
        <div class="left">90 Days</div>
        <div class="middle">Calculating</div>
        <div class="right">Today</div>
      </div>
    </div>

  </div>
</template>

<script>
const viewportMargins = [
  {width: 1200, box: "0 0 448 34"},
  {width: 1000, box: "150 0 298 34"},
  {width: 0, box: "300 0 148 34"}
]

export default {
  props: {
    monitor: {
      type: Object,
      default() {
        return {}
      }
    }
  },

  data() {return {
    sampleDashes: [],
    viewbox: "0 0 448 34"
  }},

  methods: {
    getDashStyle(percent) {
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