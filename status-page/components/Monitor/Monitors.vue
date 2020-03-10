<template>
  <div>
    <!-- <div class="monitor-group">
      <monitor />
      <monitor />
    </div>
    <div class="monitor-group">
      <monitor />
    </div> -->

    <div v-for="(group, index) of getMonitorGroups" :key="index" class="monitor-group">
      <div class="title" v-if="isDetailedGroup(group)">
        {{ group.group_name }}
      </div>

      <div class="monitors" v-if="isDetailedGroup(group)">
        <monitor v-for="(monitor, index) of group.monitors" :key="index" :monitor="monitor" />
      </div>
      <div class="monitors" v-else>
        <monitor v-for="(monitor, index) of group" :key="index" :monitor="monitor" />
      </div>

    </div>
  </div>
</template>

<script>
import config from "@/config"

import Monitor from "./Monitor"

export default {
  components: {
    Monitor
  },

  computed: {
    getMonitorGroups() {
      return config.monitors;
    }
  },

  methods: {
    isDetailedGroup(group) {
      return group['group_name'] !== undefined && group.group_name.length !== 0;
    }
  }
}
</script>

<style>

</style>