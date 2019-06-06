<template>
    <div>
        <page-header title="LegendEffects" cornertext=""></page-header>


        <div class="page">
            <status :state="status.state" :message="status.message"></status>

            <div v-if="response !== null">
                <monitor v-for="monitor of response.psp.monitors" :monitor="monitor" :key="monitor.ID"></monitor>
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
