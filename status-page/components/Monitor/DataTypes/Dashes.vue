<template>
  <div class="monitor data-dashes mt-2">
    <svg class="graph w-full overflow-hidden" preserveAspectRatio="none" height="34" :viewBox="viewport.box">
      <rect v-for="(dash, i) of getDashes()" :key="i" height="34" width="3" :x="i * 5" y="0" class="dash fill-s-operational" />
    </svg>

    <div class="graph-scale flex justify-between">
      <div class="left text-color-light">{{ viewport.days }} Days</div>
      <div class="middle">TODO</div>
      <div class="right text-color-light">Today</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import moment from 'moment'

const viewportMargins = [
  {width: 1200, box: "0 0 448 34", days: 90},
  {width: 1000, box: "0 0 298 34", days: 60},
  {width: 0, box: "0 0 148 34", days: 30}
];

@Component
export default class extends Vue { 
  private viewport = viewportMargins[0];
  
  getDashes() {
    let dashes = [];

    for(let i = this.viewport.days; i > 0; i--) {
      const date = moment().subtract(i, 'days');
      let state = "operational";

      dashes.push({
        date,
        state
      });
    }

    return dashes;
  }


  //
  // Events
  //
  resize() {
    for(const margin of viewportMargins) {
      if(window.innerWidth >= margin.width) {
        this.viewport = margin;
        return;
      }
    }
  }

  created() {
    this.resize();
    window.addEventListener("resize", this.resize);
  }
}
</script>