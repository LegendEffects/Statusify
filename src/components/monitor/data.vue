<template>
    <div class="component--monitor-data">
        <div class="container">
            <span class="title">{{monitor.name}}</span>
            <span class="status" :class="'status-'+parseStatus(monitor.weeklyRatio.label).toLowerCase()+'--c'">{{parseSeverity(monitor.weeklyRatio.ratio)}}</span>
        </div>
        <div class="percentile--container">
            <span v-for="range in monitor.dailyRatios" :key="range.ID" :class="'status-'+parseSeverity(range.ratio).toLowerCase()" class="indicator--block">{{range.ratio}}%</span>
        </div>
        <div class="base--container">
            <div class="base--data">6 Days Ago</div>
            <div class="base--spacer"></div>

            <div class="base--data base--center">{{monitor.weeklyRatio.ratio}}%</div>

            <div class="base--spacer"></div>
            <div class="base--data">Today</div>
        </div>
    </div>
</template>

<script>
const utils = require('../../util');
export default {
    mixins: [utils],
    name: 'monitor-data',
    props: ['monitor'],
}
</script>