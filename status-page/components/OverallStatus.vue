<template>
  <div class="status">
      <div class="status-indicator" :class="'status-' + getStatus()" />
      {{ humanize(getStatus()) }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import config from '@/config'

export default {
    computed: {
        ...mapGetters({
            'activeIncidents': 'incidents/getUnresolvedIncidents'
        })
    },

    methods: {
        isStateWorse(that, than) {
            const severities = config.severityRatings;

            const thatIndex = severities.findIndex(severity => severity.name === that);
            const thanIndex = severities.findIndex(severity => severity.name === than);

            return thatIndex <= thanIndex;
        },

        getStatus() {
            let status = 'operational';

            for(const incident of this.activeIncidents) {
                console.log(incident);

                if(incident.attributes.severity === 'info') continue;
                if(this.isStateWorse(incident.attributes.severity, status)) status = incident.attributes.severity;
            }

            return status;
        },

        humanize(state) {
            switch(state) {
                case 'operational':
                    return 'All Systems Operational';
                case 'partial':
                    return 'Partial Outages';
                case 'major':
                    return 'Major Outages';
            }
        }
    }
}
</script>