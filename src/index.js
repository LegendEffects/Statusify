import Vue from 'vue';
// import VueRouter from 'vue-router';
import highchartsVue from 'highcharts-vue';

// Vue.use(VueRouter);
Vue.use(highchartsVue);

const components = require('./components');

let App = require('./pages/index.vue');
Vue.config.productionTip = false;

// const routes = [
//     {path: '/', component: components.pages.list, name: 'StatusPage'},
//     {path: '*', component: components.pages.notfound, name: '404'}
// ]
// const router = new VueRouter({routes, mode: 'history'});

//https://stackoverflow.com/questions/11833759/add-stylesheet-to-head-using-javascript-in-body
function addCss(fileName) {
    let link = document.createElement("link");
  
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = fileName;
    link.id = "themeImport";
  
    document.head.appendChild(link);
}

// Fetch selected theme from storage
let storage = window.localStorage;
let theme = storage.getItem('theme');
if(!theme || (theme != 'light' && theme != 'dark')) storage.setItem('theme', 'light');

theme = storage.getItem('theme'); // Rewrite the theme variable to the new setting

if(theme == 'light') {
    addCss('./dist/light.css');
} else if(theme == 'dark') {
    addCss('./dist/dark.css');
}

new Vue({
    render: h => h(App),
}).$mount('#app');