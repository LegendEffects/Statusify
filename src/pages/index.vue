<template>
    <div>
        <page-header title="LegendEffects" cornertext=""></page-header>

        <div class="page">
            <div v-if="response !== null">
                <status :state="status.state" :message="status.message"></status>
                <monitor v-for="monitor of response.psp.monitors" :monitor="monitor" :key="monitor.ID"></monitor>
            </div>
            <div class="spinner" v-else>
                <div class="rect1"></div>
                <div class="rect2"></div>
                <div class="rect3"></div>
                <div class="rect4"></div>
                <div class="rect5"></div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'page_index',
    data: () => {return {
        status: {
            state: 'unknown',
            message: 'Loading...'
        },
        response: null,
        error: false,
    }},
    mounted() {
        let titleEl = document.getElementById('title');
        document.title = titleEl.value;
        titleEl.remove();

        axios.get('temp/getMonitors.php')
        .then(function(response) {
            this.response = response.data;
            console.log(this.status);

            let activeCount = this.response.psp.totalMonitors - this.response.statistics.counts.paused;
            let percentAlive = 100 - ((activeCount - this.response.statistics.counts.up) / activeCount) * 100;

            this.status.state = this.parseSeverity(percentAlive).toLowerCase();
            switch(percentAlive) {
                case percentAlive < 90:
                    this.status.message = 'Major Outage';
                    break;
                case percentAlive < 100:
                    this.status.message = 'Partial Outage';
                    break;
                default:
                    this.status.message = 'All Systems Operational';
            }

        }.bind(this))
        .catch(function(error) {
            this.error = true;
            console.error("There was an error while collecting the status of this page.");
            console.error(error);

            this.status.state = "major";
            this.status.message = "There was an error while collecting the statuses.";
        }.bind(this));
    }
}
</script>

<style>
    
</style>
