<template>
  <div class="container">

    <incidents :resolved="false" />
    
    <monitors />

    <incidents :resolved="true" />
  </div>
</template>

<script>
import Monitors from "@/components/Monitor/Monitors"
import Incidents from "@/components/Incidents/Incidents"

export default {
  components: {
    Monitors,
    Incidents
  }
}
</script>
