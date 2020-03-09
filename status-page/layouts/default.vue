<template>
  <div class="fluid root">
    <div class="page-header">
      <div class="status">
        <div class="status-indicator status-operational" />
        All Systems Operational.
      </div>

      <div class="title">
        Status-Page Title
      </div>
    </div>

    <nuxt />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      theme: "settings/getTheme"
    })
  },

  beforeCreate() {
    const theme = this.$store.state.settings.theme;
    if(theme !== undefined) {
      import("@/assets/scss/" + theme + "/main.scss");
    }
  }
}
</script>