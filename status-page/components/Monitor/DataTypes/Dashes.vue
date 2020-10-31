<template>
  <div class="monitor data-dashes mt-2">
    <svg class="graph w-full overflow-hidden" preserveAspectRatio="none" height="34" :viewBox="viewport.box">
      <rect v-for="(dash, i) of dashes" :key="i" height="34" width="3" :x="i * 5" y="0" :name="getDashName(i)" :class="`fill-s-${dash.state}`" class="dash hover:fill-s-info" />
    </svg>

    <div class="graph-scale flex justify-between">
      <div class="left text-color-light">{{ viewport.days }} Days</div>
      <div class="middle">TODO</div>
      <div class="right text-color-light">Today</div>
    </div>

    <tippy v-for="(dash, i) of dashes" :key="i" :to="getDashName(i)" arrow interactive>
      <div class="p-2 text-left">

        <div class="mb-4">{{ formatDate(dash.date) }}</div>

        <template v-if="dash.incidents.length === 0 && dash.providerRatio === 100">
          {{$t('monitor.incidents.none')}}
        </template>
        <template v-else>
          <div class="font-medium text-base">{{$t('monitor.incidents.related')}}</div>
          <div class="text-color-light">
            <NuxtLink v-for="(incident, i) of dash.incidents" :key="i" :to="`/incidents/${incident.slug}`">{{incident.title}}</NuxtLink>
            <template v-if="dash.providerRatio < 100">{{guessDowntimeDuration(dash.providerRatio)}}</template>
          </div>
        </template>

      </div>
    </tippy>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Inject, InjectReactive } from 'nuxt-property-decorator'
import { NuxtContentInstance } from '@nuxt/content'
import moment, { Moment } from 'moment'
import config from '../../../config'
import { isWorseThan, findSeverityFromPercentage } from '../../../utils/ParseUtils'
import { MonitorInfo, ProviderMonitorResponse } from '../../../types'

@Component({
  name: 'GraphDashes',
})
export default class extends Vue {
  private viewport = config.viewportMargins[0];
  private resizeTimeout = null;

  @Inject('name')
  monitorName!: string;

  @Inject()
  getMonitorInfo: () => MonitorInfo;

  @Inject()
  getProviderInfo: () => Promise<ProviderMonitorResponse>;

  incidents = [];
  providerInfo: ProviderMonitorResponse = null;


  getDashName(i: number) {
    const monitorName = this.$parent.$props.name;
    return `dashes-${monitorName}-${i}`;
  }

  formatDate(date: Moment) {
    return date.format(config.dateFormats.overall);
  }

  get dashes() {
    let dashes = [];

    for(let i = this.viewport.days; i > 0; i--) {
      const date = moment().startOf('day').subtract(i, 'days');
      let state = 'operational';
      let downtimes = [];

      // Filter incidents for ones which flows through this day.
      const incidents = this.incidents.filter(i => {
        return date.isBetween(i.date, (!i.resolved) ? moment.now() : i.resolved);
      });

      // Set the state according to the incident
      incidents.forEach(i => (state = (isWorseThan(i.severity, state)) ? i.severity : state));

      // Check for provider issues if available
      if(this.providerInfo !== null) {
        const providerState = findSeverityFromPercentage(this.providerInfo.uptimeRatios[i]);
        state = (isWorseThan(providerState.name, state)) ? providerState.name : state;
      }

      dashes.push({
        date,
        state,
        incidents,
        providerRatio: (this.providerInfo !== null) ? this.providerInfo.uptimeRatios[i] : 100
      });
    }

    return dashes;
  }

  guessDowntimeDuration(percentage: number): string {
    return moment.duration((3600 * 24) * ((percentage / 100) - 1), 'seconds').humanize();
  }

  /**
   * Gets incidents which are visible in the maximum viewport
   */
  getIncidents() {
    // Get the most days that will be displayed.
    const mostDays = config.viewportMargins.reduce((max, margin) => {
      return margin.days >= max.days ? margin : max;
    });

    return this.$content('incidents')
      .where({
        affected: {
          $contains: this.monitorName
        },
        date: {
          $gte: moment().startOf('day').subtract(mostDays, 'days').unix()
        }
      })
      .fetch();
  }

  //
  // Events
  //
  resize() {
    this.viewport = config.viewportMargins.find(margin => (window.innerWidth >= margin.width));
  }

  created() {
    this.resize();

    window.addEventListener("resize", () => {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout(this.resize, 50);
    });

    this.getIncidents().then(r => {
      this.incidents = r;
    });

    this.$provider.availableFor(this.getMonitorInfo()).then(async available => {
      if(!available) return;
      this.providerInfo = await this.getProviderInfo();
    });
  }
}
</script>
