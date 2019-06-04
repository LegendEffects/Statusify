import Vue from 'vue';

module.exports = {
    components: {

    },
    pages: {
        list: Vue.component('page_index', require('../pages/index.vue')),
        monitor: Vue.component('page_monitor', require('../pages/monitor.vue'))
    }
}