<template>
  <div class="monitor-group" :class="{'collapsible': collapsible, 'collapsed': collapsed, 'has-title': title !== null}">
    <div class="title" v-if="title !== null" @click="collapse">
      <div v-if="collapsible" class="collapse-indicator">{{ collapsedIndicator }}</div>
      {{ title }}
    </div>

    <slide-up-down :active="!collapsed">
      <div class="monitors">
        <monitor v-for="(monitor, index) of monitors" :key="index" :monitor="monitor" />
      </div>
    </slide-up-down>
    
  </div>
</template>

<script>
import Monitor from "./Monitor"
import SlideUpDown from "vue-slide-up-down"

export default {
  components: {
    Monitor,
    SlideUpDown
  },

  props: {
    title: {
      type: String,
      default: null
    },
    monitors: {
      type: Array,
      default() {return []}
    },

    collapsible: {
      type: Boolean,
      default: false
    },
    initiallyCollapsed: {
      type: Boolean,
      default: false
    }
  },

  data() {return {
    collapsed: false
  }},

  computed: {
    isCollapsed() {
      return !(this.collapsible && this.collapsed);
    },
    collapsedIndicator() {
      return this.collapsed ? "+" : "-";
    }
  },

  methods: {
    collapse() {
      if(!this.collapsible) {
        return;
      }

      this.collapsed = !this.collapsed;
    }
  },

  created() {
    this.collapsed = this.collapsed.initiallyCollapsed;
  }
}
</script>