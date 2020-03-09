<template>
  <div class="monitor">

    <div class="main-info">
      <div class="title">Test Title</div>
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