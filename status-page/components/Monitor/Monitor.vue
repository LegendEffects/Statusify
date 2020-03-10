<template>
  <div class="monitor">

    <div class="main-info">
      <div class="title">
        {{ monitor.name }}
        <span v-if="monitor.description" v-tippy="{arrow: true}" :content="monitor.description" class="tooltip">(?)</span>
      </div>
      <div class="status status-operational--c">Operational</div>
    </div>

    <dashes />

  </div>
</template>

<script>
import Dashes from "./Types/Dashes";

export default {
  props: {
    monitor: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  
  components: {
    Dashes
  }
}
</script>