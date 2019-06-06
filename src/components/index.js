import Vue from 'vue';

module.exports = {
    components: {
        header: Vue.component('page-header', require('./header.vue')),
        status: Vue.component('status', require('./statusBox.vue')),
        monitor: {
            main: Vue.component('monitor', require('./monitor/monitor.vue')),
            data: Vue.component('monitor-data', require('./monitor/data.vue')),
            extra: Vue.component('monitor-extra-info', require('./monitor/extraInfo.vue')),
        }
    },
    pages: {
        list: Vue.component('page_index', require('../pages/index.vue')),
        monitor: Vue.component('page_monitor', require('../pages/monitor.vue'))
    }
}