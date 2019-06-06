import Vue from 'vue';
import VueRouter from 'vue-router';
import highchartsVue from 'highcharts-vue';

Vue.use(VueRouter);
Vue.use(highchartsVue);

const components = require('./components');

let App = require('./app.vue');
Vue.config.productionTip = false;

const routes = [
    {path: '/', component: components.pages.list, name: 'StatusPage'},
    {path: '/monitor/:id', component: components.pages.monitor, name: 'Monitor'},

    {path: '*', component: components.pages.notfound, name: '404'}
]
const router = new VueRouter({routes, mode: 'history'});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');