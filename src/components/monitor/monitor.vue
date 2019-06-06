<template>
    <div class="container" @click="toggleExtras">
        <div class="addPadding">
            <monitor-data :monitor="monitor"></monitor-data>
        </div>
        <monitor-extra-info :monitor="monitor" v-if="previouslyToggledExtra" v-show="showExtra"></monitor-extra-info>
    </div>
</template>

<script>
export default {
    name: 'monitor',
    props: ['monitor'],
    data: () => {return{
        showExtra: false,
        previouslyToggledExtra: false,
    }},
    methods: {
        toggleExtras() {
            if(!this.previouslyToggledExtra) this.previouslyToggledExtra = true;
            this.showExtra = !this.showExtra;
        }
    }
}
</script>

<style scoped>
    .container {
        border-radius: 5px;
        border: 1px solid #E0E0E0;
        margin-bottom: 30px;
    }
    .container:hover {
        cursor: pointer;
    }

    .addPadding {
        padding: 10px;
    }

    .container--titlebar {
        border-radius: 5px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;

        color: #fff;
        padding: 10px;
    }
</style>
