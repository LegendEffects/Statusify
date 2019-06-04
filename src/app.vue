<template>
    <router-view></router-view>
</template>

<script>
import axios from 'axios';
export default {
    name: 'App',
    data: () => {return {
        'status': null,
        'error': false,
    }},
    mounted() {
        axios.get('temp/getMonitors.php')
        .then(function(response) {
            this.status = response;
            console.log(response);
        }.bind(this))
        .catch(function(error) {
            this.error = true;
            console.error("There was an error while collecting the status of this page.");
            console.error(error);
        }.bind(this)); 
    }
}
</script>