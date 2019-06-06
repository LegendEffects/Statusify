<template>
    <div>
        <div class="container">
            <span class="title">{{monitor.name}}</span>
            <span class="status" :class="'status-'+parseStatus(monitor.statusClass).toLowerCase()+'--c'">{{parseStatus(monitor.weeklyRatio.label)}}</span>
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

<style scoped>
    .container {
        width: 100%;
        font-size: 1rem;
        line-height: 1.5rem;
        color: #737F8D;
    }
    .title {
        display: inline-block;
    }
    .status {
        float: right;
        display: block;
        font-size: .875rem;
        font-weight: lighter;
    }
    .percentile--container {
        width: 100%;
        text-align: center;
    }
    .indicator--block {
        padding: 3px 15px;
        margin-right: 5px;
        margin-left: 5px;
        font-size: 12px;
        line-height: 25px;
        color: #fff;
    }
    .base--container {
        width: 100%;
        display: flex;
        position: relative;
        flex-direction: row;
        align-items: center;
        align-content: center;
        justify-content: center;
    }
    .base--data {
        opacity: .5;
        color: #99aab5;
        flex: 0 0 auto;
        font-size: .875rem;
        position: relative;
        line-height: 1.5rem;
        flex: 1;
        text-align: center;
    }
    .base--spacer {
        background: #99aab5;
        opacity: 0.3;
        height: 1px;
        flex: 1;
        margin: .75rem 2rem 0 2rem;
    }
    .base--center {
        position: absolute;
    }
    .data--showExtra {
        background: #E0E0E0;
        font-size: 1.4rem;
        padding-left: 10px;
        color: #535353;
    }

    .data--downtime--mod {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
    .data--downtime {
        padding-bottom: .3rem;
        padding-top: .3rem;
    }
    .data--downtime--title {
        display: inline-block;
        padding-bottom: 5px;
    }
    .data--downtime--main {
        font-size: .875rem;
        display: block;
    }

    @media only screen and (max-width: 768px) {
        .indicator--block {
            padding: 3px 7px;
            font-size: 10px;
        }
    }
</style>
