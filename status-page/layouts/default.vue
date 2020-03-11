<template>
  <div class="fluid root">
    <div class="page-header">
      <div class="status">
        <div class="status-indicator status-operational" />
        All Systems Operational.
      </div>

      <div class="title">
        Status Page
      </div>
    </div>

    <nuxt />
  </div>
</template>

<script>
export default {
  beforeCreate() {
    // Can't use a mapped getter here as beforeCreate has no access to them.
    // Should be moved into a middleware
    const theme = this.$store.state.settings.theme;
    if(theme !== undefined) {
      import("@/assets/scss/" + theme + "/main.scss");
    }

    this.$store.dispatch("incidents/loadIncidents");
  }
}
</script>