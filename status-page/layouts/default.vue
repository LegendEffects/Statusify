<template>
  <div class="fluid root">
    <div class="page-header">

      <overall-status v-if="config.header.showOverallStatus" />

      <div class="title" v-if="config.header.link !== false && config.header.link.length > 0">
        <router-link v-if="config.header.internalLink" :to="config.header.link">
          <img v-if="config.header.logo !== false && config.header.logo.length > 0" :src="config.header.logo">
          <span v-else>{{ config.header.name }}</span>
        </router-link>
        <a v-else :href="config.header.link">
          <img v-if="config.header.logo !== false && config.header.logo.length > 0" :src="config.header.logo">
          <span v-else>{{ config.header.name }}</span>
        </a>
      </div>
      <div class="title" v-else>
        <img v-if="config.header.logo !== false && config.header.logo.length > 0" :src="config.header.logo">
        <span v-else>{{ config.header.name }}</span>
      </div>

    </div>
    <nuxt />
  </div>
</template>

<script>
import config from '@/config'

import OverallStatus from '@/components/OverallStatus'

export default {
  async beforeCreate() {
    // Can't use a mapped getter here as beforeCreate has no access to them.
    // Should be moved into a plugin but there is no easy way to emit an event out of a plugin.
    const theme = this.$store.state.settings.theme;
    if(theme !== undefined) {
      import("@/assets/scss/" + theme + "/main.scss");
    }

    this.$store.dispatch("incidents/loadIncidents");

    if(config.provider.enabled) {
      import('@/providers/' + config.provider.name).then(async provider => {
        this.$store.commit("setProvider", provider.default);
    
        await provider.default.init({
          axios: this.$axios,
          config
        });

        this.$root.$emit('providerReady', provider);
      });
    }
  },

  head() {
    return {
      title: config.title.default
    }
  },
  
  components: {
    OverallStatus
  },

  computed: {
    config() {
      return config;
    }
  },
}
</script>