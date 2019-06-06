<template>
    <div>
        <page-header title="LegendEffects" cornertext=""></page-header>

        <div class="page" v-if="status !== null">
            <status state="major" message="test"></status>
            <monitor :monitor="status.psp.monitors[0]"></monitor>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'page_index',
    data: () => {return {
        'status': null,
        'error': false,
    }},
    mounted() {
        axios.get('temp/getMonitors.php')
        .then(function(response) {
            this.status = response.data;
            console.log(this.status);
        }.bind(this))
        .catch(function(error) {
            this.error = true;
            console.error("There was an error while collecting the status of this page.");
            console.error(error);
        }.bind(this));
    }
}
</script>

<style>
    
</style>
