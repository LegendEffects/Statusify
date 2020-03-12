<template>
    <div class="container incident-page">
        <div class="meta">
            <div class="title">{{ incident.attributes.title }}</div>
            <div class="date">
                {{ formatDate(incident.attributes.date, config.incidents.fullPageDateFormat) }}
                <span v-if="incident.attributes.resolved"> - {{ formatDate(incident.attributes.resolvedWhen, config.incidents.fullPageDateFormat) }}</span>
            </div>
        </div>

        <div class="affected">
            <div class="service" v-for="(affected, index) of incident.attributes.affected" :key="index">{{ affected }}</div>
        </div>

        <div class="body" v-html="getBody" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

import config from "@/config"
import TimeMixin from "@/mixins/time"

export default {
    mixins: [
        TimeMixin
    ],

    computed: {
        ...mapGetters({
            "getIncidentBySlug": "incidents/getIncidentBySlug"
        }),
        config() {
            return config;
        },

        getBody() {
            let final = this.incident.html;
            let matches = [... final.matchAll(/\{\{date\((.*)\)\}\}/g)];

            for(const match of matches) {
                final = final.replace(match[0], `<div class="date">${this.formatDate(match[1], config.incidents.updateDateFormat)}</div>`);
            }
            return final;
        }
    },

    data() {return {
        incident: null
    }},

    created() {
        this.incident = this.getIncidentBySlug(this.$route.params.slug);
    }
}
</script>