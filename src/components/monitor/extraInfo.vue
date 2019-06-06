<template>
    <div class="extraInfo--container data--container">
        <div v-if="response">
            <div class="contain">
                <span class="data--title">{{monitor.type.toUpperCase()}}</span>
                <highcharts :options="chart" style="width: 100%; height: 200px; margin-top: 20px;"></highcharts>
                <div class="latestLog eventTable">
                    <table>
                        <thead>
                            <tr>
                                <th>Event</th>
                                <th>Date</th>
                                <th>Reason</th>
                                <th>Duration</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="log of response.monitor.logs" :key="log.ID">
                                <td><span class="circle" :class="'status-'+log.class+'--c'"></span>
                                <td>{{log.date}}</td>
                                <td>{{log.reason}}</td>
                                <td>{{log.duration}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="spinner" v-else>
            <div class="rect1"></div>
            <div class="rect2"></div>
            <div class="rect3"></div>
            <div class="rect4"></div>
            <div class="rect5"></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import {Chart} from 'highcharts-vue';

export default {
    props: ['monitor'],
    data: () => {return {
        response: null,
        chart: null,   
    }},
    mounted() {
        axios.get('temp/getMonitor.php?m='+this.monitor.monitorId)
        .then(function(response) {
            this.response = response.data;

            let rawSeries = this.response.monitor.responseTimes;
            //let timeSeries = Object.entries(rawSeries).map(([key, v]) => ([rawSeries[key].datetime, rawSeries[key].value])).reverse()
            let data = {
                timestamp: [],
                latency: [],
            }
            for(let entry of rawSeries) {
                data.timestamp.push(entry.datetime);
                data.latency.push(entry.value);
            }

            this.chart = {
                title: {
                    text: ''
                },
                chart: {
                    type: 'line',
                },
                xAxis: {
                    categories: data.timestamp, 
                },
                yAxis: {
                    title: ''
                },
                series: [{
                    data: data.latency,
                    name: 'Latency (ms)'
                }],
                credits: {
                    enabled: false
                }
            };

        }.bind(this))
        .catch(function(error) {
            console.error(error);
        }.bind(this));
    },
    components: {
        highcharts: Chart,
    }
}
</script>

<style scoped>
    .extraInfo--container {
        width: 100%;
        font-size: 1rem;
        line-height: 1.5rem;
        color: #737F8D;

        overflow: hidden;
        transition: max-height 1s cubic-bezier(0, 1, 0, 1);
        border-top: solid 1px #E0E0E0;
    }
    .extraInfo--container.show {
        display: block;
        max-height: 99em;
        transition: max-height 1s ease-in-out;
    }
    .extraInfo--container .contain {
        padding: 10px;
        padding-top: 20px;
    }

    .title {
        display: inline-block;
    }
    .circle:before {
        content: ' \25CF';
        font-size: 75px;
    }
    .circle.status--success--c:before {
        color: #2ecc71;
    }
    .circle.status--danger--c:before {
        color: #e74c3c;
    }

    .eventTable table {
        width: 100%;
        border: 1px solid #E0E0E0;
    }
    .eventTable th {
        padding: 20px;
        text-align: left;
        border-left: 1px solid #E0E0E0;
        border-bottom: 1px solid #E0E0E0;
    }
    .eventTable td:first-of-type, .eventTable th:first-of-type {
        text-align: center;
    }
    .eventTable td {
        padding: 10px 20px;
        border-left: 1px solid #E0E0E0;
    }

    .eventTable table th:first-of-type, .eventTable table td:first-of-type {
        border-left: 0;
    }
</style>
