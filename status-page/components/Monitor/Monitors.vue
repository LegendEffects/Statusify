<template>
  <div>
    <template v-for="(group, index) in getMonitorGroups">
      <monitor-group :key="index" v-if="isDetailedGroup(group)" :monitors="group.monitors" :title="group.group_name" :description="group.description" :collapsible="group.collapsible" :initiallyCollapsed="group.collapsed" />
      <monitor-group :key="index" v-else :monitors="group" />
    </template>
  </div>
</template>

<script>
import config from "@/config"

import MonitorGroup from "./MonitorGroup"

export default {
  components: {
    MonitorGroup
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