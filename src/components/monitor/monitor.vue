<template>
    <div class="component--monitor">
        <div class="container">
            <div class="addPadding clickable" @click="toggleExtras">
                <monitor-data :monitor="monitor"></monitor-data>
            </div>
            <monitor-extra-info :monitor="monitor" v-if="previouslyToggledExtra" v-show="showExtra"></monitor-extra-info>
        </div>
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