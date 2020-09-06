<template>
  <div class="monitor border-solid border border-background-2 p-4 border-t-0 first:border-t last:border-b">
    <div class="info flex">
      <div class="title mr-auto text-color">
        <NuxtLink :to="'/monitor/aaa'" class="text-lg">Test Monitor</NuxtLink>
        <span v-tippy="{arrow: true}" :content="'aaaaaaaaaa'" class="tooltip text-color-light">(?)</span>
      </div>
      <div class="status text-s-operational" v-tippy="{arrow: true}" content="Statuses are calculated by the uptime and incident with the highest severity.">Operational</div>
    </div>

    <Dashes />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class extends Vue { }
</script>