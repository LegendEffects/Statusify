<template>
  <div class="incident">
    <div class="title" :class="'status-' + incident.attributes.severity + '--c'">{{ incident.attributes.title }}</div>
    <div class="updates">
      <div v-html="incident.html" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    incident: {
      type: Object,
      default() {
        return {}
      }
    }
  },

  created() {
    let matches = [... this.incident.html.matchAll(/\{\{time\((.*)\)\}\}/g)];
    for(const match of matches) {
      this.incident.html = this.incident.html.replace(match[0], `<div class="date">${match[1]}</div>`);
    }
  }
}
</script>