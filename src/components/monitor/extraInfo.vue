<template>
    <div class="component--monitor-extra">
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

            let colour = document.querySelector('.component--monitor .container').style.backgroundColor;
            let tcolour = document.querySelector('.component--monitor-extra .extraInfo--container').style.color;
            console.log(tcolour);

            this.chart = {
                title: {
                    text: ''
                },
                chart: {
                    type: 'line',
                    backgroundColor: colour,
                },
                xAxis: {
                    categories: data.timestamp, 
                },
                yAxis: {
                    title: ''
                },
                series: [{
                    data: data.latency,
                    name: 'Latency (ms)',
                }],
                legend: {
                    itemStyle: {
                        color: tcolour
                    }
                },
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