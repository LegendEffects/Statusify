require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert(".banner[data-v-f37e46a0] {\n    width: 100%;\n    height: 300px;\n    background-size: cover;\n    text-align: center;\n    margin-bottom: 50px;\n    background-image: linear-gradient(323deg, #36D1DC 5%, #5B86E5);\n}\n.cornerInfo[data-v-f37e46a0] {\n    position: absolute;\n    top: 2%;\n    left: 2%;\n    font-size: .95rem;\n    color: #fff;\n    font-variant-numeric: tabular-nums;\n}\n.title[data-v-f37e46a0] {\n    text-align: center;\n    line-height: 300px;\n    font-size: 3rem;\n    color: #fff;\n    font-weight: 800;\n}")
;(function(){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'page-header',
    props: ['title', 'cornertext']
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"banner"},[_c('span',{staticClass:"cornerInfo"},[_vm._v(_vm._s(_vm.cornertext))]),_vm._v(" "),_c('span',{staticClass:"title"},[_vm._v(_vm._s(_vm.title))])])}
__vue__options__.staticRenderFns = []
__vue__options__._scopeId = "data-v-f37e46a0"
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f37e46a0", __vue__options__)
  } else {
    hotAPI.rerender("data-v-f37e46a0", __vue__options__)
  }
})()}
},{"vue":"vue","vue-hot-reload-api":38,"vueify/lib/insert-css":39}],2:[function(require,module,exports){
'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    components: {
        header: _vue2.default.component('page-header', require('./header.vue')),
        status: _vue2.default.component('status', require('./statusBox.vue')),
        monitor: {
            main: _vue2.default.component('monitor', require('./monitor/monitor.vue')),
            data: _vue2.default.component('monitor-data', require('./monitor/data.vue')),
            extra: _vue2.default.component('monitor-extra-info', require('./monitor/extraInfo.vue'))
        }
    },
    pages: {
        list: _vue2.default.component('page_index', require('../pages/index.vue'))
    }
};

},{"../pages/index.vue":40,"./header.vue":1,"./monitor/data.vue":3,"./monitor/extraInfo.vue":4,"./monitor/monitor.vue":5,"./statusBox.vue":6,"vue":"vue"}],3:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert(".container[data-v-b471afbc] {\n    width: 100%;\n    font-size: 1rem;\n    line-height: 1.5rem;\n    color: #737F8D;\n}\n.title[data-v-b471afbc] {\n    display: inline-block;\n}\n.status[data-v-b471afbc] {\n    float: right;\n    display: block;\n    font-size: .875rem;\n    font-weight: lighter;\n}\n.percentile--container[data-v-b471afbc] {\n    width: 100%;\n    text-align: center;\n}\n.indicator--block[data-v-b471afbc] {\n    padding: 3px 15px;\n    margin-right: 5px;\n    margin-left: 5px;\n    font-size: 12px;\n    line-height: 25px;\n    color: #fff;\n}\n.base--container[data-v-b471afbc] {\n    width: 100%;\n    display: flex;\n    position: relative;\n    flex-direction: row;\n    align-items: center;\n    align-content: center;\n    justify-content: center;\n}\n.base--data[data-v-b471afbc] {\n    opacity: .5;\n    color: #99aab5;\n    flex: 0 0 auto;\n    font-size: .875rem;\n    position: relative;\n    line-height: 1.5rem;\n    flex: 1;\n    text-align: center;\n}\n.base--spacer[data-v-b471afbc] {\n    background: #99aab5;\n    opacity: 0.3;\n    height: 1px;\n    flex: 1;\n    margin: .75rem 2rem 0 2rem;\n}\n.base--center[data-v-b471afbc] {\n    position: absolute;\n}\n.data--showExtra[data-v-b471afbc] {\n    background: #E0E0E0;\n    font-size: 1.4rem;\n    padding-left: 10px;\n    color: #535353;\n}\n\n.data--downtime--mod[data-v-b471afbc] {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n.data--downtime[data-v-b471afbc] {\n    padding-bottom: .3rem;\n    padding-top: .3rem;\n}\n.data--downtime--title[data-v-b471afbc] {\n    display: inline-block;\n    padding-bottom: 5px;\n}\n.data--downtime--main[data-v-b471afbc] {\n    font-size: .875rem;\n    display: block;\n}\n\n@media only screen and (max-width: 768px) {\n    .indicator--block[data-v-b471afbc] {\n        padding: 3px 7px;\n        font-size: 10px;\n    }\n}")
;(function(){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var utils = require('../../util');
exports.default = {
    mixins: [utils],
    name: 'monitor-data',
    props: ['monitor']
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"container"},[_c('span',{staticClass:"title"},[_vm._v(_vm._s(_vm.monitor.name))]),_vm._v(" "),_c('span',{staticClass:"status",class:'status-'+_vm.parseStatus(_vm.monitor.statusClass).toLowerCase()+'--c'},[_vm._v(_vm._s(_vm.parseStatus(_vm.monitor.weeklyRatio.label)))])]),_vm._v(" "),_c('div',{staticClass:"percentile--container"},_vm._l((_vm.monitor.dailyRatios),function(range){return _c('span',{key:range.ID,staticClass:"indicator--block",class:'status-'+_vm.parseSeverity(range.ratio).toLowerCase()},[_vm._v(_vm._s(range.ratio)+"%")])}),0),_vm._v(" "),_c('div',{staticClass:"base--container"},[_c('div',{staticClass:"base--data"},[_vm._v("6 Days Ago")]),_vm._v(" "),_c('div',{staticClass:"base--spacer"}),_vm._v(" "),_c('div',{staticClass:"base--data base--center"},[_vm._v(_vm._s(_vm.monitor.weeklyRatio.ratio)+"%")]),_vm._v(" "),_c('div',{staticClass:"base--spacer"}),_vm._v(" "),_c('div',{staticClass:"base--data"},[_vm._v("Today")])])])}
__vue__options__.staticRenderFns = []
__vue__options__._scopeId = "data-v-b471afbc"
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b471afbc", __vue__options__)
  } else {
    hotAPI.rerender("data-v-b471afbc", __vue__options__)
  }
})()}
},{"../../util":41,"vue":"vue","vue-hot-reload-api":38,"vueify/lib/insert-css":39}],4:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert(".extraInfo--container[data-v-0f795996] {\n    width: 100%;\n    font-size: 1rem;\n    line-height: 1.5rem;\n    color: #737F8D;\n\n    overflow: hidden;\n    transition: max-height 1s cubic-bezier(0, 1, 0, 1);\n    border-top: solid 1px #E0E0E0;\n}\n.extraInfo--container.show[data-v-0f795996] {\n    display: block;\n    max-height: 99em;\n    transition: max-height 1s ease-in-out;\n}\n.extraInfo--container .contain[data-v-0f795996] {\n    padding: 10px;\n    padding-top: 20px;\n}\n\n.title[data-v-0f795996] {\n    display: inline-block;\n}\n.circle[data-v-0f795996]:before {\n    content: ' \\25CF';\n    font-size: 75px;\n}\n.circle.status--success--c[data-v-0f795996]:before {\n    color: #2ecc71;\n}\n.circle.status--danger--c[data-v-0f795996]:before {\n    color: #e74c3c;\n}\n\n.eventTable table[data-v-0f795996] {\n    width: 100%;\n    border: 1px solid #E0E0E0;\n}\n.eventTable th[data-v-0f795996] {\n    padding: 20px;\n    text-align: left;\n    border-left: 1px solid #E0E0E0;\n    border-bottom: 1px solid #E0E0E0;\n}\n.eventTable td[data-v-0f795996]:first-of-type, .eventTable th[data-v-0f795996]:first-of-type {\n    text-align: center;\n}\n.eventTable td[data-v-0f795996] {\n    padding: 10px 20px;\n    border-left: 1px solid #E0E0E0;\n}\n\n.eventTable table th[data-v-0f795996]:first-of-type, .eventTable table td[data-v-0f795996]:first-of-type {\n    border-left: 0;\n}")
;(function(){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _highchartsVue = require('highcharts-vue');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: ['monitor'],
    data: function data() {
        return {
            response: null,
            chart: null
        };
    },
    mounted: function mounted() {
        _axios2.default.get('temp/getMonitor.php?m=' + this.monitor.monitorId).then(function (response) {
            this.response = response.data;

            var rawSeries = this.response.monitor.responseTimes;

            var data = {
                timestamp: [],
                latency: []
            };
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = rawSeries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var entry = _step.value;

                    data.timestamp.push(entry.datetime);
                    data.latency.push(entry.value);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this.chart = {
                title: {
                    text: ''
                },
                chart: {
                    type: 'line'
                },
                xAxis: {
                    categories: data.timestamp
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
        }.bind(this)).catch(function (error) {
            console.error(error);
        }.bind(this));
    },

    components: {
        highcharts: _highchartsVue.Chart
    }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"extraInfo--container data--container"},[(_vm.response)?_c('div',[_c('div',{staticClass:"contain"},[_c('span',{staticClass:"data--title"},[_vm._v(_vm._s(_vm.monitor.type.toUpperCase()))]),_vm._v(" "),_c('highcharts',{staticStyle:{"width":"100%","height":"200px","margin-top":"20px"},attrs:{"options":_vm.chart}}),_vm._v(" "),_c('div',{staticClass:"latestLog eventTable"},[_c('table',[_vm._m(0),_vm._v(" "),_c('tbody',_vm._l((_vm.response.monitor.logs),function(log){return _c('tr',{key:log.ID},[_c('td',[_c('span',{staticClass:"circle",class:'status-'+log.class+'--c'})]),_c('td',[_vm._v(_vm._s(log.date))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(log.reason))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(log.duration))])])}),0)])])],1)]):_c('div',{staticClass:"spinner"},[_c('div',{staticClass:"rect1"}),_vm._v(" "),_c('div',{staticClass:"rect2"}),_vm._v(" "),_c('div',{staticClass:"rect3"}),_vm._v(" "),_c('div',{staticClass:"rect4"}),_vm._v(" "),_c('div',{staticClass:"rect5"})])])}
__vue__options__.staticRenderFns = [function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_vm._v("Event")]),_vm._v(" "),_c('th',[_vm._v("Date")]),_vm._v(" "),_c('th',[_vm._v("Reason")]),_vm._v(" "),_c('th',[_vm._v("Duration")])])])}]
__vue__options__._scopeId = "data-v-0f795996"
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0f795996", __vue__options__)
  } else {
    hotAPI.rerender("data-v-0f795996", __vue__options__)
  }
})()}
},{"axios":8,"highcharts-vue":34,"vue":"vue","vue-hot-reload-api":38,"vueify/lib/insert-css":39}],5:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert(".container[data-v-e95547dc] {\n    border-radius: 5px;\n    border: 1px solid #E0E0E0;\n    margin-bottom: 30px;\n}\n.container[data-v-e95547dc]:hover {\n    cursor: pointer;\n}\n\n.addPadding[data-v-e95547dc] {\n    padding: 10px;\n}\n\n.container--titlebar[data-v-e95547dc] {\n    border-radius: 5px;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n\n    color: #fff;\n    padding: 10px;\n}")
;(function(){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'monitor',
    props: ['monitor'],
    data: function data() {
        return {
            showExtra: false,
            previouslyToggledExtra: false
        };
    },
    methods: {
        toggleExtras: function toggleExtras() {
            if (!this.previouslyToggledExtra) this.previouslyToggledExtra = true;
            this.showExtra = !this.showExtra;
        }
    }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container",on:{"click":_vm.toggleExtras}},[_c('div',{staticClass:"addPadding"},[_c('monitor-data',{attrs:{"monitor":_vm.monitor}})],1),_vm._v(" "),(_vm.previouslyToggledExtra)?_c('monitor-extra-info',{directives:[{name:"show",rawName:"v-show",value:(_vm.showExtra),expression:"showExtra"}],attrs:{"monitor":_vm.monitor}}):_vm._e()],1)}
__vue__options__.staticRenderFns = []
__vue__options__._scopeId = "data-v-e95547dc"
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e95547dc", __vue__options__)
  } else {
    hotAPI.rerender("data-v-e95547dc", __vue__options__)
  }
})()}
},{"vue":"vue","vue-hot-reload-api":38,"vueify/lib/insert-css":39}],6:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert(".status[data-v-200edeb4] {\n    color: #fff;\n    font-size: 1.3rem;\n    border-radius: 10px;\n    padding: 1.1rem 1.25rem 1rem;\n    font-weight: 300;\n    margin-bottom: 50px;\n}")
;(function(){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'status-box',
    props: ['message', 'state']

};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"status",class:'status-'+_vm.state},[_c('span',{staticClass:"message"},[_vm._v(_vm._s(_vm.message))])])}
__vue__options__.staticRenderFns = []
__vue__options__._scopeId = "data-v-200edeb4"
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-200edeb4", __vue__options__)
  } else {
    hotAPI.rerender("data-v-200edeb4", __vue__options__)
  }
})()}
},{"vue":"vue","vue-hot-reload-api":38,"vueify/lib/insert-css":39}],7:[function(require,module,exports){
'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _highchartsVue = require('highcharts-vue');

var _highchartsVue2 = _interopRequireDefault(_highchartsVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Vue.use(VueRouter);
_vue2.default.use(_highchartsVue2.default);
// import VueRouter from 'vue-router';


var components = require('./components');

var App = require('./pages/index.vue');
_vue2.default.config.productionTip = false;

// const routes = [
//     {path: '/', component: components.pages.list, name: 'StatusPage'},

//     {path: '*', component: components.pages.notfound, name: '404'}
// ]
// const router = new VueRouter({routes, mode: 'history'});

new _vue2.default({
    render: function render(h) {
        return h(App);
    }
}).$mount('#app');

},{"./components":2,"./pages/index.vue":40,"highcharts-vue":34,"vue":"vue"}],8:[function(require,module,exports){
module.exports = require('./lib/axios');
},{"./lib/axios":10}],9:[function(require,module,exports){
'use strict';

var utils = require('./../utils');
var settle = require('./../core/settle');
var buildURL = require('./../helpers/buildURL');
var parseHeaders = require('./../helpers/parseHeaders');
var isURLSameOrigin = require('./../helpers/isURLSameOrigin');
var createError = require('../core/createError');

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = require('./../helpers/cookies');

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

},{"../core/createError":16,"./../core/settle":20,"./../helpers/buildURL":24,"./../helpers/cookies":26,"./../helpers/isURLSameOrigin":28,"./../helpers/parseHeaders":30,"./../utils":32}],10:[function(require,module,exports){
'use strict';

var utils = require('./utils');
var bind = require('./helpers/bind');
var Axios = require('./core/Axios');
var mergeConfig = require('./core/mergeConfig');
var defaults = require('./defaults');

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = require('./cancel/Cancel');
axios.CancelToken = require('./cancel/CancelToken');
axios.isCancel = require('./cancel/isCancel');

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = require('./helpers/spread');

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

},{"./cancel/Cancel":11,"./cancel/CancelToken":12,"./cancel/isCancel":13,"./core/Axios":14,"./core/mergeConfig":19,"./defaults":22,"./helpers/bind":23,"./helpers/spread":31,"./utils":32}],11:[function(require,module,exports){
'use strict';

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

},{}],12:[function(require,module,exports){
'use strict';

var Cancel = require('./Cancel');

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

},{"./Cancel":11}],13:[function(require,module,exports){
'use strict';

module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

},{}],14:[function(require,module,exports){
'use strict';

var utils = require('./../utils');
var buildURL = require('../helpers/buildURL');
var InterceptorManager = require('./InterceptorManager');
var dispatchRequest = require('./dispatchRequest');
var mergeConfig = require('./mergeConfig');

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);
  config.method = config.method ? config.method.toLowerCase() : 'get';

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;

},{"../helpers/buildURL":24,"./../utils":32,"./InterceptorManager":15,"./dispatchRequest":17,"./mergeConfig":19}],15:[function(require,module,exports){
'use strict';

var utils = require('./../utils');

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

},{"./../utils":32}],16:[function(require,module,exports){
'use strict';

var enhanceError = require('./enhanceError');

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

},{"./enhanceError":18}],17:[function(require,module,exports){
'use strict';

var utils = require('./../utils');
var transformData = require('./transformData');
var isCancel = require('../cancel/isCancel');
var defaults = require('../defaults');
var isAbsoluteURL = require('./../helpers/isAbsoluteURL');
var combineURLs = require('./../helpers/combineURLs');

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};

},{"../cancel/isCancel":13,"../defaults":22,"./../helpers/combineURLs":25,"./../helpers/isAbsoluteURL":27,"./../utils":32,"./transformData":21}],18:[function(require,module,exports){
'use strict';

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};

},{}],19:[function(require,module,exports){
'use strict';

var utils = require('../utils');

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  utils.forEach(['url', 'method', 'params', 'data'], function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(['headers', 'auth', 'proxy'], function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach([
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength',
    'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken',
    'socketPath'
  ], function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};

},{"../utils":32}],20:[function(require,module,exports){
'use strict';

var createError = require('./createError');

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};

},{"./createError":16}],21:[function(require,module,exports){
'use strict';

var utils = require('./../utils');

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

},{"./../utils":32}],22:[function(require,module,exports){
(function (process){
'use strict';

var utils = require('./utils');
var normalizeHeaderName = require('./helpers/normalizeHeaderName');

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  // Only Node.JS has a process variable that is of [[Class]] process
  if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = require('./adapters/http');
  } else if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = require('./adapters/xhr');
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

}).call(this,require('_process'))
},{"./adapters/http":9,"./adapters/xhr":9,"./helpers/normalizeHeaderName":29,"./utils":32,"_process":36}],23:[function(require,module,exports){
'use strict';

module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

},{}],24:[function(require,module,exports){
'use strict';

var utils = require('./../utils');

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

},{"./../utils":32}],25:[function(require,module,exports){
'use strict';

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};

},{}],26:[function(require,module,exports){
'use strict';

var utils = require('./../utils');

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);

},{"./../utils":32}],27:[function(require,module,exports){
'use strict';

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

},{}],28:[function(require,module,exports){
'use strict';

var utils = require('./../utils');

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);

},{"./../utils":32}],29:[function(require,module,exports){
'use strict';

var utils = require('../utils');

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

},{"../utils":32}],30:[function(require,module,exports){
'use strict';

var utils = require('./../utils');

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

},{"./../utils":32}],31:[function(require,module,exports){
'use strict';

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

},{}],32:[function(require,module,exports){
'use strict';

var bind = require('./helpers/bind');
var isBuffer = require('is-buffer');

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};

},{"./helpers/bind":23,"is-buffer":33}],33:[function(require,module,exports){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

},{}],34:[function(require,module,exports){
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("highcharts")):"function"==typeof define&&define.amd?define(["highcharts"],e):"object"==typeof exports?exports.HighchartsVue=e(require("highcharts")):t.HighchartsVue=e(t.Highcharts)}("undefined"!=typeof self?self:this,function(t){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(e,r){e.exports=t},function(t,e,r){"use strict";function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.component(e.tagName||"highcharts",Object(o.a)(e.highcharts||i.a))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n,r.d(e,"Chart",function(){return a});var o=r(2),c=r(0),i=r.n(c),a=Object(o.a)(i.a)},function(t,e,r){"use strict";function n(t){return i(t)||c(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function i(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}var a=r(3),s=function(t){return{template:'<div ref="chart"></div>',render:function(t){return t("div",{ref:"chart"})},props:{constructorType:{type:String,default:"chart"},options:{type:Object,required:!0},callback:Function,updateArgs:{type:Array,default:function(){return[!0,!0]}},highcharts:{type:Object},deepCopyOnUpdate:{type:Boolean,default:!0}},watch:{options:{handler:function(t){var e;(e=this.chart).update.apply(e,[Object(a.a)(t,this.deepCopyOnUpdate)].concat(n(this.updateArgs)))},deep:!0}},mounted:function(){var e=this.highcharts||t;this.options&&e[this.constructorType]?this.chart=e[this.constructorType](this.$refs.chart,Object(a.a)(this.options,!0),this.callback?this.callback:null):this.options?console.warn("'".concat(this.constructorType,"' constructor-type is incorrect. Sometimes this error is caused by the fact, that the corresponding module wasn't imported.")):console.warn('The "options" parameter was not passed.')},beforeDestroy:function(){this.chart&&this.chart.destroy()}}};e.a=s},function(t,e,r){"use strict";function n(t,e,r){function o(o,i){!c.a.isObject(o,!r)||c.a.isClass(o)||c.a.isDOMElement(o)?t[i]=e[i]:t[i]=n(t[i]||c.a.isArray(o)?[]:{},o,r)}return c.a.isArray(e)?e.forEach(o):c.a.objectEach(e,o),t}r.d(e,"a",function(){return i});var o=r(0),c=r.n(o),i=function(t,e){return n({},t,e)}}])});
},{"highcharts":35}],35:[function(require,module,exports){
/*
 Highcharts JS v7.1.2 (2019-06-03)

 (c) 2009-2018 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(O,J){"object"===typeof module&&module.exports?(J["default"]=J,module.exports=O.document?J(O):J):"function"===typeof define&&define.amd?define("highcharts/highcharts",function(){return J(O)}):(O.Highcharts&&O.Highcharts.error(16,!0),O.Highcharts=J(O))})("undefined"!==typeof window?window:this,function(O){function J(a,E,H,B){a.hasOwnProperty(E)||(a[E]=B.apply(null,H))}var G={};J(G,"parts/Globals.js",[],function(){var a="undefined"===typeof O?"undefined"!==typeof window?window:{}:O,E=a.document,
H=a.navigator&&a.navigator.userAgent||"",B=E&&E.createElementNS&&!!E.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,h=/(edge|msie|trident)/i.test(H)&&!a.opera,e=-1!==H.indexOf("Firefox"),q=-1!==H.indexOf("Chrome"),t=e&&4>parseInt(H.split("Firefox/")[1],10);return{product:"Highcharts",version:"7.1.2",deg2rad:2*Math.PI/360,doc:E,hasBidiBug:t,hasTouch:E&&"undefined"!==typeof E.documentElement.ontouchstart,isMS:h,isWebKit:-1!==H.indexOf("AppleWebKit"),isFirefox:e,isChrome:q,isSafari:!q&&
-1!==H.indexOf("Safari"),isTouchDevice:/(Mobile|Android|Windows Phone)/.test(H),SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:B,win:a,marginNames:["plotTop","marginRight","marginBottom","plotLeft"],noop:function(){},charts:[],dateFormats:{}}});J(G,"parts/Utilities.js",[G["parts/Globals.js"]],function(a){a.timers=[];var E=a.charts,H=a.doc,B=a.win;a.error=function(h,e,q){var t=a.isNumber(h)?"Highcharts error #"+h+": www.highcharts.com/errors/"+h:h,u=function(){if(e)throw Error(t);
B.console&&console.log(t)};q?a.fireEvent(q,"displayError",{code:h,message:t},u):u()};a.Fx=function(a,e,q){this.options=e;this.elem=a;this.prop=q};a.Fx.prototype={dSetter:function(){var a=this.paths[0],e=this.paths[1],q=[],t=this.now,u=a.length,v;if(1===t)q=this.toD;else if(u===e.length&&1>t)for(;u--;)v=parseFloat(a[u]),q[u]=isNaN(v)?e[u]:t*parseFloat(e[u]-v)+v;else q=e;this.elem.attr("d",q,null,!0)},update:function(){var a=this.elem,e=this.prop,q=this.now,t=this.options.step;if(this[e+"Setter"])this[e+
"Setter"]();else a.attr?a.element&&a.attr(e,q,null,!0):a.style[e]=q+this.unit;t&&t.call(a,q,this)},run:function(h,e,q){var t=this,u=t.options,v=function(a){return v.stopped?!1:t.step(a)},n=B.requestAnimationFrame||function(a){setTimeout(a,13)},g=function(){for(var d=0;d<a.timers.length;d++)a.timers[d]()||a.timers.splice(d--,1);a.timers.length&&n(g)};h!==e||this.elem["forceAnimate:"+this.prop]?(this.startTime=+new Date,this.start=h,this.end=e,this.unit=q,this.now=this.start,this.pos=0,v.elem=this.elem,
v.prop=this.prop,v()&&1===a.timers.push(v)&&n(g)):(delete u.curAnim[this.prop],u.complete&&0===Object.keys(u.curAnim).length&&u.complete.call(this.elem))},step:function(h){var e=+new Date,q,t=this.options,u=this.elem,v=t.complete,n=t.duration,g=t.curAnim;u.attr&&!u.element?h=!1:h||e>=n+this.startTime?(this.now=this.end,this.pos=1,this.update(),q=g[this.prop]=!0,a.objectEach(g,function(a){!0!==a&&(q=!1)}),q&&v&&v.call(u),h=!1):(this.pos=t.easing((e-this.startTime)/n),this.now=this.start+(this.end-
this.start)*this.pos,this.update(),h=!0);return h},initPath:function(h,e,q){function t(a){var b,l;for(c=a.length;c--;)b="M"===a[c]||"L"===a[c],l=/[a-zA-Z]/.test(a[c+3]),b&&l&&a.splice(c+1,0,a[c+1],a[c+2],a[c+1],a[c+2])}function u(a,d){for(;a.length<k;){a[0]=d[k-a.length];var l=a.slice(0,b);[].splice.apply(a,[0,0].concat(l));x&&(l=a.slice(a.length-b),[].splice.apply(a,[a.length,0].concat(l)),c--)}a[0]="M"}function v(a,c){for(var l=(k-a.length)/b;0<l&&l--;)p=a.slice().splice(a.length/K-b,b*K),p[0]=
c[k-b-l*b],m&&(p[b-6]=p[b-2],p[b-5]=p[b-1]),[].splice.apply(a,[a.length/K,0].concat(p)),x&&l--}e=e||"";var n,g=h.startX,d=h.endX,m=-1<e.indexOf("C"),b=m?7:3,k,p,c;e=e.split(" ");q=q.slice();var x=h.isArea,K=x?2:1,w;m&&(t(e),t(q));if(g&&d){for(c=0;c<g.length;c++)if(g[c]===d[0]){n=c;break}else if(g[0]===d[d.length-g.length+c]){n=c;w=!0;break}else if(g[g.length-1]===d[d.length-g.length+c]){n=g.length-c;break}"undefined"===typeof n&&(e=[])}e.length&&a.isNumber(n)&&(k=q.length+n*K*b,w?(u(e,q),v(q,e)):
(u(q,e),v(e,q)));return[e,q]},fillSetter:function(){a.Fx.prototype.strokeSetter.apply(this,arguments)},strokeSetter:function(){this.elem.attr(this.prop,a.color(this.start).tweenTo(a.color(this.end),this.pos),null,!0)}};a.merge=function(){var h,e=arguments,q,t={},u=function(e,n){"object"!==typeof e&&(e={});a.objectEach(n,function(g,d){!a.isObject(g,!0)||a.isClass(g)||a.isDOMElement(g)?e[d]=n[d]:e[d]=u(e[d]||{},g)});return e};!0===e[0]&&(t=e[1],e=Array.prototype.slice.call(e,2));q=e.length;for(h=0;h<
q;h++)t=u(t,e[h]);return t};a.pInt=function(a,e){return parseInt(a,e||10)};a.isString=function(a){return"string"===typeof a};a.isArray=function(a){a=Object.prototype.toString.call(a);return"[object Array]"===a||"[object Array Iterator]"===a};a.isObject=function(h,e){return!!h&&"object"===typeof h&&(!e||!a.isArray(h))};a.isDOMElement=function(h){return a.isObject(h)&&"number"===typeof h.nodeType};a.isClass=function(h){var e=h&&h.constructor;return!(!a.isObject(h,!0)||a.isDOMElement(h)||!e||!e.name||
"Object"===e.name)};a.isNumber=function(a){return"number"===typeof a&&!isNaN(a)&&Infinity>a&&-Infinity<a};a.erase=function(a,e){for(var h=a.length;h--;)if(a[h]===e){a.splice(h,1);break}};a.defined=function(a){return"undefined"!==typeof a&&null!==a};a.attr=function(h,e,q){var t;a.isString(e)?a.defined(q)?h.setAttribute(e,q):h&&h.getAttribute&&((t=h.getAttribute(e))||"class"!==e||(t=h.getAttribute(e+"Name"))):a.defined(e)&&a.isObject(e)&&a.objectEach(e,function(a,e){h.setAttribute(e,a)});return t};
a.splat=function(h){return a.isArray(h)?h:[h]};a.syncTimeout=function(a,e,q){if(e)return setTimeout(a,e,q);a.call(0,q)};a.clearTimeout=function(h){a.defined(h)&&clearTimeout(h)};a.extend=function(a,e){var h;a||(a={});for(h in e)a[h]=e[h];return a};a.pick=function(){var a=arguments,e,q,t=a.length;for(e=0;e<t;e++)if(q=a[e],"undefined"!==typeof q&&null!==q)return q};a.css=function(h,e){a.isMS&&!a.svg&&e&&"undefined"!==typeof e.opacity&&(e.filter="alpha(opacity\x3d"+100*e.opacity+")");a.extend(h.style,
e)};a.createElement=function(h,e,q,t,u){h=H.createElement(h);var v=a.css;e&&a.extend(h,e);u&&v(h,{padding:"0",border:"none",margin:"0"});q&&v(h,q);t&&t.appendChild(h);return h};a.extendClass=function(h,e){var q=function(){};q.prototype=new h;a.extend(q.prototype,e);return q};a.pad=function(a,e,q){return Array((e||2)+1-String(a).replace("-","").length).join(q||"0")+a};a.relativeLength=function(a,e,q){return/%$/.test(a)?e*parseFloat(a)/100+(q||0):parseFloat(a)};a.wrap=function(a,e,q){var h=a[e];a[e]=
function(){var a=Array.prototype.slice.call(arguments),e=arguments,n=this;n.proceed=function(){h.apply(n,arguments.length?arguments:e)};a.unshift(h);a=q.apply(this,a);n.proceed=null;return a}};a.datePropsToTimestamps=function(h){a.objectEach(h,function(e,q){a.isObject(e)&&"function"===typeof e.getTime?h[q]=e.getTime():(a.isObject(e)||a.isArray(e))&&a.datePropsToTimestamps(e)})};a.formatSingle=function(h,e,q){var t=/\.([0-9])/,u=a.defaultOptions.lang;/f$/.test(h)?(q=(q=h.match(t))?q[1]:-1,null!==e&&
(e=a.numberFormat(e,q,u.decimalPoint,-1<h.indexOf(",")?u.thousandsSep:""))):e=(q||a.time).dateFormat(h,e);return e};a.format=function(h,e,q){for(var t="{",u=!1,v,n,g,d,m=[],b;h;){t=h.indexOf(t);if(-1===t)break;v=h.slice(0,t);if(u){v=v.split(":");n=v.shift().split(".");d=n.length;b=e;for(g=0;g<d;g++)b&&(b=b[n[g]]);v.length&&(b=a.formatSingle(v.join(":"),b,q));m.push(b)}else m.push(v);h=h.slice(t+1);t=(u=!u)?"}":"{"}m.push(h);return m.join("")};a.getMagnitude=function(a){return Math.pow(10,Math.floor(Math.log(a)/
Math.LN10))};a.normalizeTickInterval=function(h,e,q,t,u){var v,n=h;q=a.pick(q,1);v=h/q;e||(e=u?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===t&&(1===q?e=e.filter(function(a){return 0===a%1}):.1>=q&&(e=[1/q])));for(t=0;t<e.length&&!(n=e[t],u&&n*q>=h||!u&&v<=(e[t]+(e[t+1]||e[t]))/2);t++);return n=a.correctFloat(n*q,-Math.round(Math.log(.001)/Math.LN10))};a.stableSort=function(a,e){var h=a.length,t,u;for(u=0;u<h;u++)a[u].safeI=u;a.sort(function(a,n){t=e(a,n);return 0===t?a.safeI-n.safeI:t});for(u=
0;u<h;u++)delete a[u].safeI};a.arrayMin=function(a){for(var e=a.length,h=a[0];e--;)a[e]<h&&(h=a[e]);return h};a.arrayMax=function(a){for(var e=a.length,h=a[0];e--;)a[e]>h&&(h=a[e]);return h};a.destroyObjectProperties=function(h,e){a.objectEach(h,function(a,t){a&&a!==e&&a.destroy&&a.destroy();delete h[t]})};a.discardElement=function(h){var e=a.garbageBin;e||(e=a.createElement("div"));h&&e.appendChild(h);e.innerHTML=""};a.correctFloat=function(a,e){return parseFloat(a.toPrecision(e||14))};a.setAnimation=
function(h,e){e.renderer.globalAnimation=a.pick(h,e.options.chart.animation,!0)};a.animObject=function(h){return a.isObject(h)?a.merge(h):{duration:h?500:0}};a.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5};a.numberFormat=function(h,e,q,t){h=+h||0;e=+e;var u=a.defaultOptions.lang,v=(h.toString().split(".")[1]||"").split("e")[0].length,n,g,d=h.toString().split("e");-1===e?e=Math.min(v,20):a.isNumber(e)?e&&d[1]&&0>d[1]&&(n=e+ +d[1],0<=n?(d[0]=
(+d[0]).toExponential(n).split("e")[0],e=n):(d[0]=d[0].split(".")[0]||0,h=20>e?(d[0]*Math.pow(10,d[1])).toFixed(e):0,d[1]=0)):e=2;g=(Math.abs(d[1]?d[0]:h)+Math.pow(10,-Math.max(e,v)-1)).toFixed(e);v=String(a.pInt(g));n=3<v.length?v.length%3:0;q=a.pick(q,u.decimalPoint);t=a.pick(t,u.thousandsSep);h=(0>h?"-":"")+(n?v.substr(0,n)+t:"");h+=v.substr(n).replace(/(\d{3})(?=\d)/g,"$1"+t);e&&(h+=q+g.slice(-e));d[1]&&0!==+h&&(h+="e"+d[1]);return h};Math.easeInOutSine=function(a){return-.5*(Math.cos(Math.PI*
a)-1)};a.getStyle=function(h,e,q){if("width"===e)return Math.max(0,Math.min(h.offsetWidth,h.scrollWidth,h.getBoundingClientRect&&"none"===a.getStyle(h,"transform",!1)?Math.floor(h.getBoundingClientRect().width):Infinity)-a.getStyle(h,"padding-left")-a.getStyle(h,"padding-right"));if("height"===e)return Math.max(0,Math.min(h.offsetHeight,h.scrollHeight)-a.getStyle(h,"padding-top")-a.getStyle(h,"padding-bottom"));B.getComputedStyle||a.error(27,!0);if(h=B.getComputedStyle(h,void 0))h=h.getPropertyValue(e),
a.pick(q,"opacity"!==e)&&(h=a.pInt(h));return h};a.inArray=function(a,e,q){return e.indexOf(a,q)};a.find=Array.prototype.find?function(a,e){return a.find(e)}:function(a,e){var h,t=a.length;for(h=0;h<t;h++)if(e(a[h],h))return a[h]};a.keys=Object.keys;a.offset=function(a){var e=H.documentElement;a=a.parentElement||a.parentNode?a.getBoundingClientRect():{top:0,left:0};return{top:a.top+(B.pageYOffset||e.scrollTop)-(e.clientTop||0),left:a.left+(B.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}};a.stop=function(h,
e){for(var q=a.timers.length;q--;)a.timers[q].elem!==h||e&&e!==a.timers[q].prop||(a.timers[q].stopped=!0)};a.objectEach=function(a,e,q){for(var h in a)a.hasOwnProperty(h)&&e.call(q||a[h],a[h],h,a)};a.objectEach({map:"map",each:"forEach",grep:"filter",reduce:"reduce",some:"some"},function(h,e){a[e]=function(a){return Array.prototype[h].apply(a,[].slice.call(arguments,1))}});a.addEvent=function(h,e,q,t){void 0===t&&(t={});var u,v=h.addEventListener||a.addEventListenerPolyfill;u="function"===typeof h&&
h.prototype?h.prototype.protoEvents=h.prototype.protoEvents||{}:h.hcEvents=h.hcEvents||{};a.Point&&h instanceof a.Point&&h.series&&h.series.chart&&(h.series.chart.runTrackerClick=!0);v&&v.call(h,e,q,!1);u[e]||(u[e]=[]);u[e].push({fn:q,order:"number"===typeof t.order?t.order:Infinity});u[e].sort(function(a,g){return a.order-g.order});return function(){a.removeEvent(h,e,q)}};a.removeEvent=function(h,e,q){function t(n,g){var d=h.removeEventListener||a.removeEventListenerPolyfill;d&&d.call(h,n,g,!1)}
function u(n){var g,d;h.nodeName&&(e?(g={},g[e]=!0):g=n,a.objectEach(g,function(a,b){if(n[b])for(d=n[b].length;d--;)t(b,n[b][d].fn)}))}var v;["protoEvents","hcEvents"].forEach(function(a){var g=h[a];g&&(e?(v=g[e]||[],q?(g[e]=v.filter(function(a){return q!==a.fn}),t(e,q)):(u(g),g[e]=[])):(u(g),h[a]={}))})};a.fireEvent=function(h,e,q,t){var u,v;q=q||{};H.createEvent&&(h.dispatchEvent||h.fireEvent)?(u=H.createEvent("Events"),u.initEvent(e,!0,!0),a.extend(u,q),h.dispatchEvent?h.dispatchEvent(u):h.fireEvent(e,
u)):(q.target||a.extend(q,{preventDefault:function(){q.defaultPrevented=!0},target:h,type:e}),function(a,g){void 0===a&&(a=[]);void 0===g&&(g=[]);var d=0,m=0,b=a.length+g.length;for(v=0;v<b;v++)!1===(a[d]?g[m]?a[d].order<=g[m].order?a[d++]:g[m++]:a[d++]:g[m++]).fn.call(h,q)&&q.preventDefault()}(h.protoEvents&&h.protoEvents[e],h.hcEvents&&h.hcEvents[e]));t&&!q.defaultPrevented&&t.call(h,q)};a.animate=function(h,e,q){var t,u="",v,n,g;a.isObject(q)||(g=arguments,q={duration:g[2],easing:g[3],complete:g[4]});
a.isNumber(q.duration)||(q.duration=400);q.easing="function"===typeof q.easing?q.easing:Math[q.easing]||Math.easeInOutSine;q.curAnim=a.merge(e);a.objectEach(e,function(d,g){a.stop(h,g);n=new a.Fx(h,q,g);v=null;"d"===g?(n.paths=n.initPath(h,h.d,e.d),n.toD=e.d,t=0,v=1):h.attr?t=h.attr(g):(t=parseFloat(a.getStyle(h,g))||0,"opacity"!==g&&(u="px"));v||(v=d);v&&v.match&&v.match("px")&&(v=v.replace(/px/g,""));n.run(t,v,u)})};a.seriesType=function(h,e,q,t,u){var v=a.getOptions(),n=a.seriesTypes;v.plotOptions[h]=
a.merge(v.plotOptions[e],q);n[h]=a.extendClass(n[e]||function(){},t);n[h].prototype.type=h;u&&(n[h].prototype.pointClass=a.extendClass(a.Point,u));return n[h]};a.uniqueKey=function(){var a=Math.random().toString(36).substring(2,9),e=0;return function(){return"highcharts-"+a+"-"+e++}}();a.isFunction=function(a){return"function"===typeof a};B.jQuery&&(B.jQuery.fn.highcharts=function(){var h=[].slice.call(arguments);if(this[0])return h[0]?(new (a[a.isString(h[0])?h.shift():"Chart"])(this[0],h[0],h[1]),
this):E[a.attr(this[0],"data-highcharts-chart")]})});J(G,"parts/Color.js",[G["parts/Globals.js"]],function(a){var E=a.isNumber,H=a.merge,B=a.pInt;a.Color=function(h){if(!(this instanceof a.Color))return new a.Color(h);this.init(h)};a.Color.prototype={parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(a){return[B(a[1]),B(a[2]),B(a[3]),parseFloat(a[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
parse:function(a){return[B(a[1]),B(a[2]),B(a[3]),1]}}],names:{white:"#ffffff",black:"#000000"},init:function(h){var e,q,t,u;if((this.input=h=this.names[h&&h.toLowerCase?h.toLowerCase():""]||h)&&h.stops)this.stops=h.stops.map(function(e){return new a.Color(e[1])});else if(h&&h.charAt&&"#"===h.charAt()&&(e=h.length,h=parseInt(h.substr(1),16),7===e?q=[(h&16711680)>>16,(h&65280)>>8,h&255,1]:4===e&&(q=[(h&3840)>>4|(h&3840)>>8,(h&240)>>4|h&240,(h&15)<<4|h&15,1])),!q)for(t=this.parsers.length;t--&&!q;)u=
this.parsers[t],(e=u.regex.exec(h))&&(q=u.parse(e));this.rgba=q||[]},get:function(a){var e=this.input,h=this.rgba,t;this.stops?(t=H(e),t.stops=[].concat(t.stops),this.stops.forEach(function(e,h){t.stops[h]=[t.stops[h][0],e.get(a)]})):t=h&&E(h[0])?"rgb"===a||!a&&1===h[3]?"rgb("+h[0]+","+h[1]+","+h[2]+")":"a"===a?h[3]:"rgba("+h.join(",")+")":e;return t},brighten:function(a){var e,h=this.rgba;if(this.stops)this.stops.forEach(function(e){e.brighten(a)});else if(E(a)&&0!==a)for(e=0;3>e;e++)h[e]+=B(255*
a),0>h[e]&&(h[e]=0),255<h[e]&&(h[e]=255);return this},setOpacity:function(a){this.rgba[3]=a;return this},tweenTo:function(a,e){var h=this.rgba,t=a.rgba;t.length&&h&&h.length?(a=1!==t[3]||1!==h[3],e=(a?"rgba(":"rgb(")+Math.round(t[0]+(h[0]-t[0])*(1-e))+","+Math.round(t[1]+(h[1]-t[1])*(1-e))+","+Math.round(t[2]+(h[2]-t[2])*(1-e))+(a?","+(t[3]+(h[3]-t[3])*(1-e)):"")+")"):e=a.input||"none";return e}};a.color=function(h){return new a.Color(h)}});J(G,"parts/SvgRenderer.js",[G["parts/Globals.js"]],function(a){var E,
H,B=a.addEvent,h=a.animate,e=a.attr,q=a.charts,t=a.color,u=a.css,v=a.createElement,n=a.defined,g=a.deg2rad,d=a.destroyObjectProperties,m=a.doc,b=a.extend,k=a.erase,p=a.hasTouch,c=a.isArray,x=a.isFirefox,K=a.isMS,w=a.isObject,F=a.isString,C=a.isWebKit,l=a.merge,D=a.noop,A=a.objectEach,z=a.pick,I=a.pInt,f=a.removeEvent,r=a.splat,Q=a.stop,N=a.svg,L=a.SVG_NS,M=a.symbolSizes,R=a.win;E=a.SVGElement=function(){return this};b(E.prototype,{opacity:1,SVG_NS:L,textProps:"direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline cursor".split(" "),
init:function(y,f){this.element="span"===f?v(f):m.createElementNS(this.SVG_NS,f);this.renderer=y;a.fireEvent(this,"afterInit")},animate:function(y,f,b){var c=a.animObject(z(f,this.renderer.globalAnimation,!0));z(m.hidden,m.msHidden,m.webkitHidden,!1)&&(c.duration=0);0!==c.duration?(b&&(c.complete=b),h(this,y,c)):(this.attr(y,void 0,b),a.objectEach(y,function(a,y){c.step&&c.step.call(this,a,{prop:y,pos:1})},this));return this},complexColor:function(y,f,b){var r=this.renderer,d,p,k,g,S,L,m,x,e,D,w,
z=[],N;a.fireEvent(this.renderer,"complexColor",{args:arguments},function(){y.radialGradient?p="radialGradient":y.linearGradient&&(p="linearGradient");p&&(k=y[p],S=r.gradients,m=y.stops,D=b.radialReference,c(k)&&(y[p]=k={x1:k[0],y1:k[1],x2:k[2],y2:k[3],gradientUnits:"userSpaceOnUse"}),"radialGradient"===p&&D&&!n(k.gradientUnits)&&(g=k,k=l(k,r.getRadialAttr(D,g),{gradientUnits:"userSpaceOnUse"})),A(k,function(a,y){"id"!==y&&z.push(y,a)}),A(m,function(a){z.push(a)}),z=z.join(","),S[z]?w=S[z].attr("id"):
(k.id=w=a.uniqueKey(),S[z]=L=r.createElement(p).attr(k).add(r.defs),L.radAttr=g,L.stops=[],m.forEach(function(y){0===y[1].indexOf("rgba")?(d=a.color(y[1]),x=d.get("rgb"),e=d.get("a")):(x=y[1],e=1);y=r.createElement("stop").attr({offset:y[0],"stop-color":x,"stop-opacity":e}).add(L);L.stops.push(y)})),N="url("+r.url+"#"+w+")",b.setAttribute(f,N),b.gradient=z,y.toString=function(){return N})})},applyTextOutline:function(y){var f=this.element,b,c,r;-1!==y.indexOf("contrast")&&(y=y.replace(/contrast/g,
this.renderer.getContrast(f.style.fill)));y=y.split(" ");b=y[y.length-1];(c=y[0])&&"none"!==c&&a.svg&&(this.fakeTS=!0,y=[].slice.call(f.getElementsByTagName("tspan")),this.ySetter=this.xSetter,c=c.replace(/(^[\d\.]+)(.*?)$/g,function(a,y,f){return 2*y+f}),this.removeTextOutline(y),r=f.firstChild,y.forEach(function(a,y){0===y&&(a.setAttribute("x",f.getAttribute("x")),y=f.getAttribute("y"),a.setAttribute("y",y||0),null===y&&f.setAttribute("y",0));a=a.cloneNode(1);e(a,{"class":"highcharts-text-outline",
fill:b,stroke:b,"stroke-width":c,"stroke-linejoin":"round"});f.insertBefore(a,r)}))},removeTextOutline:function(a){for(var y=a.length,f;y--;)f=a[y],"highcharts-text-outline"===f.getAttribute("class")&&k(a,this.element.removeChild(f))},symbolCustomAttribs:"x y width height r start end innerR anchorX anchorY rounded".split(" "),attr:function(y,f,b,c){var r,k=this.element,l,p=this,d,g,L=this.symbolCustomAttribs;"string"===typeof y&&void 0!==f&&(r=y,y={},y[r]=f);"string"===typeof y?p=(this[y+"Getter"]||
this._defaultGetter).call(this,y,k):(A(y,function(f,b){d=!1;c||Q(this,b);this.symbolName&&-1!==a.inArray(b,L)&&(l||(this.symbolAttr(y),l=!0),d=!0);!this.rotation||"x"!==b&&"y"!==b||(this.doTransform=!0);d||(g=this[b+"Setter"]||this._defaultSetter,g.call(this,f,b,k),!this.styledMode&&this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(b)&&this.updateShadows(b,f,g))},this),this.afterSetters());b&&b.call(this);return p},afterSetters:function(){this.doTransform&&(this.updateTransform(),
this.doTransform=!1)},updateShadows:function(a,f,b){for(var y=this.shadows,c=y.length;c--;)b.call(y[c],"height"===a?Math.max(f-(y[c].cutHeight||0),0):"d"===a?this.d:f,a,y[c])},addClass:function(a,f){var y=this.attr("class")||"";f||(a=(a||"").split(/ /g).reduce(function(a,f){-1===y.indexOf(f)&&a.push(f);return a},y?[y]:[]).join(" "));a!==y&&this.attr("class",a);return this},hasClass:function(a){return-1!==(this.attr("class")||"").split(" ").indexOf(a)},removeClass:function(a){return this.attr("class",
(this.attr("class")||"").replace(a,""))},symbolAttr:function(a){var y=this;"x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach(function(f){y[f]=z(a[f],y[f])});y.attr({d:y.renderer.symbols[y.symbolName](y.x,y.y,y.width,y.height,y)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":"none")},crisp:function(a,f){var y;f=f||a.strokeWidth||0;y=Math.round(f)%2/2;a.x=Math.floor(a.x||this.x||0)+y;a.y=Math.floor(a.y||this.y||0)+y;a.width=
Math.floor((a.width||this.width||0)-2*y);a.height=Math.floor((a.height||this.height||0)-2*y);n(a.strokeWidth)&&(a.strokeWidth=f);return a},css:function(a){var y=this.styles,f={},c=this.element,r,k="",l,p=!y,d=["textOutline","textOverflow","width"];a&&a.color&&(a.fill=a.color);y&&A(a,function(a,b){a!==y[b]&&(f[b]=a,p=!0)});p&&(y&&(a=b(y,f)),a&&(null===a.width||"auto"===a.width?delete this.textWidth:"text"===c.nodeName.toLowerCase()&&a.width&&(r=this.textWidth=I(a.width))),this.styles=a,r&&!N&&this.renderer.forExport&&
delete a.width,c.namespaceURI===this.SVG_NS?(l=function(a,y){return"-"+y.toLowerCase()},A(a,function(a,y){-1===d.indexOf(y)&&(k+=y.replace(/([A-Z])/g,l)+":"+a+";")}),k&&e(c,"style",k)):u(c,a),this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),a&&a.textOutline&&this.applyTextOutline(a.textOutline)));return this},getStyle:function(a){return R.getComputedStyle(this.element||this,"").getPropertyValue(a)},strokeWidth:function(){if(!this.renderer.styledMode)return this["stroke-width"]||
0;var a=this.getStyle("stroke-width"),f;a.indexOf("px")===a.length-2?a=I(a):(f=m.createElementNS(L,"rect"),e(f,{width:a,"stroke-width":0}),this.element.parentNode.appendChild(f),a=f.getBBox().width,f.parentNode.removeChild(f));return a},on:function(a,f){var y=this,b=y.element;p&&"click"===a?(b.ontouchstart=function(a){y.touchEventFired=Date.now();a.preventDefault();f.call(b,a)},b.onclick=function(a){(-1===R.navigator.userAgent.indexOf("Android")||1100<Date.now()-(y.touchEventFired||0))&&f.call(b,
a)}):b["on"+a]=f;return this},setRadialReference:function(a){var y=this.renderer.gradients[this.element.gradient];this.element.radialReference=a;y&&y.radAttr&&y.animate(this.renderer.getRadialAttr(a,y.radAttr));return this},translate:function(a,f){return this.attr({translateX:a,translateY:f})},invert:function(a){this.inverted=a;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,f=this.translateY||0,b=this.scaleX,c=this.scaleY,r=this.inverted,k=this.rotation,l=
this.matrix,p=this.element;r&&(a+=this.width,f+=this.height);a=["translate("+a+","+f+")"];n(l)&&a.push("matrix("+l.join(",")+")");r?a.push("rotate(90) scale(-1,1)"):k&&a.push("rotate("+k+" "+z(this.rotationOriginX,p.getAttribute("x"),0)+" "+z(this.rotationOriginY,p.getAttribute("y")||0)+")");(n(b)||n(c))&&a.push("scale("+z(b,1)+" "+z(c,1)+")");a.length&&p.setAttribute("transform",a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,f,b){var y,
c,r,p,l={};c=this.renderer;r=c.alignedObjects;var d,g;if(a){if(this.alignOptions=a,this.alignByTranslate=f,!b||F(b))this.alignTo=y=b||"renderer",k(r,this),r.push(this),b=null}else a=this.alignOptions,f=this.alignByTranslate,y=this.alignTo;b=z(b,c[y],c);y=a.align;c=a.verticalAlign;r=(b.x||0)+(a.x||0);p=(b.y||0)+(a.y||0);"right"===y?d=1:"center"===y&&(d=2);d&&(r+=(b.width-(a.width||0))/d);l[f?"translateX":"x"]=Math.round(r);"bottom"===c?g=1:"middle"===c&&(g=2);g&&(p+=(b.height-(a.height||0))/g);l[f?
"translateY":"y"]=Math.round(p);this[this.placed?"animate":"attr"](l);this.placed=!0;this.alignAttr=l;return this},getBBox:function(a,f){var y,c=this.renderer,r,k=this.element,l=this.styles,p,d=this.textStr,A,L=c.cache,m=c.cacheKeys,x=k.namespaceURI===this.SVG_NS,e;f=z(f,this.rotation);r=f*g;p=c.styledMode?k&&E.prototype.getStyle.call(k,"font-size"):l&&l.fontSize;n(d)&&(e=d.toString(),-1===e.indexOf("\x3c")&&(e=e.replace(/[0-9]/g,"0")),e+=["",f||0,p,this.textWidth,l&&l.textOverflow].join());e&&!a&&
(y=L[e]);if(!y){if(x||c.forExport){try{(A=this.fakeTS&&function(a){[].forEach.call(k.querySelectorAll(".highcharts-text-outline"),function(f){f.style.display=a})})&&A("none"),y=k.getBBox?b({},k.getBBox()):{width:k.offsetWidth,height:k.offsetHeight},A&&A("")}catch(Y){""}if(!y||0>y.width)y={width:0,height:0}}else y=this.htmlGetBBox();c.isSVG&&(a=y.width,c=y.height,x&&(y.height=c={"11px,17":14,"13px,20":16}[l&&l.fontSize+","+Math.round(c)]||c),f&&(y.width=Math.abs(c*Math.sin(r))+Math.abs(a*Math.cos(r)),
y.height=Math.abs(c*Math.cos(r))+Math.abs(a*Math.sin(r))));if(e&&0<y.height){for(;250<m.length;)delete L[m.shift()];L[e]||m.push(e);L[e]=y}}return y},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var f=this;f.animate({opacity:0},{duration:a||150,complete:function(){f.attr({y:-9999})}})},add:function(a){var f=this.renderer,y=this.element,b;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;
void 0!==this.textStr&&f.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)b=this.zIndexSetter();b||(a?a.element:f.box).appendChild(y);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var f=a.parentNode;f&&f.removeChild(a)},destroy:function(){var a=this,f=a.element||{},b=a.renderer,c=b.isSVG&&"SPAN"===f.nodeName&&a.parentGroup,r=f.ownerSVGElement,l=a.clipPath;f.onclick=f.onmouseout=f.onmouseover=f.onmousemove=f.point=null;Q(a);l&&r&&([].forEach.call(r.querySelectorAll("[clip-path],[CLIP-PATH]"),
function(a){-1<a.getAttribute("clip-path").indexOf(l.element.id)&&a.removeAttribute("clip-path")}),a.clipPath=l.destroy());if(a.stops){for(r=0;r<a.stops.length;r++)a.stops[r]=a.stops[r].destroy();a.stops=null}a.safeRemoveChild(f);for(b.styledMode||a.destroyShadows();c&&c.div&&0===c.div.childNodes.length;)f=c.parentGroup,a.safeRemoveChild(c.div),delete c.div,c=f;a.alignTo&&k(b.alignedObjects,a);A(a,function(f,y){delete a[y]})},shadow:function(a,f,b){var y=[],c,r,l=this.element,k,p,d,g;if(!a)this.destroyShadows();
else if(!this.shadows){p=z(a.width,3);d=(a.opacity||.15)/p;g=this.parentInverted?"(-1,-1)":"("+z(a.offsetX,1)+", "+z(a.offsetY,1)+")";for(c=1;c<=p;c++)r=l.cloneNode(0),k=2*p+1-2*c,e(r,{stroke:a.color||"#000000","stroke-opacity":d*c,"stroke-width":k,transform:"translate"+g,fill:"none"}),r.setAttribute("class",(r.getAttribute("class")||"")+" highcharts-shadow"),b&&(e(r,"height",Math.max(e(r,"height")-k,0)),r.cutHeight=k),f?f.element.appendChild(r):l.parentNode&&l.parentNode.insertBefore(r,l),y.push(r);
this.shadows=y}return this},destroyShadows:function(){(this.shadows||[]).forEach(function(a){this.safeRemoveChild(a)},this);this.shadows=void 0},xGetter:function(a){"circle"===this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)},_defaultGetter:function(a){a=z(this[a+"Value"],this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,f,b){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a=
"M 0 0");this[f]!==a&&(b.setAttribute(f,a),this[f]=a)},dashstyleSetter:function(a){var f,y=this["stroke-width"];"inherit"===y&&(y=1);if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(f=a.length;f--;)a[f]=I(a[f])*y;a=a.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",
a)}},alignSetter:function(a){var f={left:"start",center:"middle",right:"end"};f[a]&&(this.alignValue=a,this.element.setAttribute("text-anchor",f[a]))},opacitySetter:function(a,f,b){this[f]=a;b.setAttribute(f,a)},titleSetter:function(a){var f=this.element.getElementsByTagName("title")[0];f||(f=m.createElementNS(this.SVG_NS,"title"),this.element.appendChild(f));f.firstChild&&f.removeChild(f.firstChild);f.appendChild(m.createTextNode(String(z(a,"")).replace(/<[^>]*>/g,"").replace(/&lt;/g,"\x3c").replace(/&gt;/g,
"\x3e")))},textSetter:function(a){a!==this.textStr&&(delete this.bBox,delete this.textPxLength,this.textStr=a,this.added&&this.renderer.buildText(this))},setTextPath:function(f,b){var y=this.element,c={textAnchor:"text-anchor"},r,k=!1,p,d=this.textPathWrapper,g=!d;b=l(!0,{enabled:!0,attributes:{dy:-5,startOffset:"50%",textAnchor:"middle"}},b);r=b.attributes;if(f&&b&&b.enabled){this.options&&this.options.padding&&(r.dx=-this.options.padding);d||(this.textPathWrapper=d=this.renderer.createElement("textPath"),
k=!0);p=d.element;(b=f.element.getAttribute("id"))||f.element.setAttribute("id",b=a.uniqueKey());if(g)for(f=y.getElementsByTagName("tspan");f.length;)f[0].setAttribute("y",0),p.appendChild(f[0]);k&&d.add({element:this.text?this.text.element:y});p.setAttributeNS("http://www.w3.org/1999/xlink","href",this.renderer.url+"#"+b);n(r.dy)&&(p.parentNode.setAttribute("dy",r.dy),delete r.dy);n(r.dx)&&(p.parentNode.setAttribute("dx",r.dx),delete r.dx);a.objectEach(r,function(a,f){p.setAttribute(c[f]||f,a)});
y.removeAttribute("transform");this.removeTextOutline.call(d,[].slice.call(y.getElementsByTagName("tspan")));this.text&&!this.renderer.styledMode&&this.attr({fill:"none","stroke-width":0});this.applyTextOutline=this.updateTransform=D}else d&&(delete this.updateTransform,delete this.applyTextOutline,this.destroyTextPath(y,f));return this},destroyTextPath:function(a,f){var b;f.element.setAttribute("id","");for(b=this.textPathWrapper.element.childNodes;b.length;)a.firstChild.appendChild(b[0]);a.firstChild.removeChild(this.textPathWrapper.element);
delete f.textPathWrapper},fillSetter:function(a,f,b){"string"===typeof a?b.setAttribute(f,a):a&&this.complexColor(a,f,b)},visibilitySetter:function(a,f,b){"inherit"===a?b.removeAttribute(f):this[f]!==a&&b.setAttribute(f,a);this[f]=a},zIndexSetter:function(a,f){var b=this.renderer,y=this.parentGroup,c=(y||b).element||b.box,r,k=this.element,l=!1,p,b=c===b.box;r=this.added;var d;n(a)?(k.setAttribute("data-z-index",a),a=+a,this[f]===a&&(r=!1)):n(this[f])&&k.removeAttribute("data-z-index");this[f]=a;if(r){(a=
this.zIndex)&&y&&(y.handleZ=!0);f=c.childNodes;for(d=f.length-1;0<=d&&!l;d--)if(y=f[d],r=y.getAttribute("data-z-index"),p=!n(r),y!==k)if(0>a&&p&&!b&&!d)c.insertBefore(k,f[d]),l=!0;else if(I(r)<=a||p&&(!n(a)||0<=a))c.insertBefore(k,f[d+1]||null),l=!0;l||(c.insertBefore(k,f[b?3:0]||null),l=!0)}return l},_defaultSetter:function(a,f,b){b.setAttribute(f,a)}});E.prototype.yGetter=E.prototype.xGetter;E.prototype.translateXSetter=E.prototype.translateYSetter=E.prototype.rotationSetter=E.prototype.verticalAlignSetter=
E.prototype.rotationOriginXSetter=E.prototype.rotationOriginYSetter=E.prototype.scaleXSetter=E.prototype.scaleYSetter=E.prototype.matrixSetter=function(a,f){this[f]=a;this.doTransform=!0};E.prototype["stroke-widthSetter"]=E.prototype.strokeSetter=function(a,f,b){this[f]=a;this.stroke&&this["stroke-width"]?(E.prototype.fillSetter.call(this,this.stroke,"stroke",b),b.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0):"stroke-width"===f&&0===a&&this.hasStroke&&(b.removeAttribute("stroke"),
this.hasStroke=!1)};H=a.SVGRenderer=function(){this.init.apply(this,arguments)};b(H.prototype,{Element:E,SVG_NS:L,init:function(a,f,b,c,r,k,l){var y;y=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"});l||y.css(this.getStyle(c));c=y.element;a.appendChild(c);e(a,"dir","ltr");-1===a.innerHTML.indexOf("xmlns")&&e(c,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=c;this.boxWrapper=y;this.alignedObjects=[];this.url=(x||C)&&m.getElementsByTagName("base").length?R.location.href.split("#")[0].replace(/<[^>]*>/g,
"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(m.createTextNode("Created with Highcharts 7.1.2"));this.defs=this.createElement("defs").add();this.allowHTML=k;this.forExport=r;this.styledMode=l;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(f,b,!1);var p;x&&a.getBoundingClientRect&&(f=function(){u(a,{left:0,top:0});p=a.getBoundingClientRect();u(a,{left:Math.ceil(p.left)-p.left+"px",top:Math.ceil(p.top)-p.top+
"px"})},f(),this.unSubPixelFix=B(R,"resize",f))},definition:function(a){function f(a,c){var y;r(a).forEach(function(a){var r=b.createElement(a.tagName),k={};A(a,function(a,f){"tagName"!==f&&"children"!==f&&"textContent"!==f&&(k[f]=a)});r.attr(k);r.add(c||b.defs);a.textContent&&r.element.appendChild(m.createTextNode(a.textContent));f(a.children||[],r);y=r});return y}var b=this;return f(a)},getStyle:function(a){return this.style=b({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
fontSize:"12px"},a)},setStyle:function(a){this.boxWrapper.css(this.getStyle(a))},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();d(this.gradients||{});this.gradients=null;a&&(this.defs=a.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null},createElement:function(a){var f=new this.Element;f.init(this,a);return f},draw:D,getRadialAttr:function(a,f){return{cx:a[0]-a[2]/
2+f.cx*a[2],cy:a[1]-a[2]/2+f.cy*a[2],r:f.r*a[2]}},truncate:function(a,f,b,c,r,k,l){var y=this,p=a.rotation,d,g=c?1:0,A=(b||c).length,L=A,x=[],e=function(a){f.firstChild&&f.removeChild(f.firstChild);a&&f.appendChild(m.createTextNode(a))},n=function(k,p){p=p||k;if(void 0===x[p])if(f.getSubStringLength)try{x[p]=r+f.getSubStringLength(0,c?p+1:p)}catch(Z){""}else y.getSpanWidth&&(e(l(b||c,k)),x[p]=r+y.getSpanWidth(a,f));return x[p]},D,w;a.rotation=0;D=n(f.textContent.length);if(w=r+D>k){for(;g<=A;)L=Math.ceil((g+
A)/2),c&&(d=l(c,L)),D=n(L,d&&d.length-1),g===A?g=A+1:D>k?A=L-1:g=L;0===A?e(""):b&&A===b.length-1||e(d||l(b||c,L))}c&&c.splice(0,L);a.actualWidth=D;a.rotation=p;return w},escapes:{"\x26":"\x26amp;","\x3c":"\x26lt;","\x3e":"\x26gt;","'":"\x26#39;",'"':"\x26quot;"},buildText:function(a){var f=a.element,b=this,c=b.forExport,r=z(a.textStr,"").toString(),y=-1!==r.indexOf("\x3c"),k=f.childNodes,p,l=e(f,"x"),d=a.styles,g=a.textWidth,x=d&&d.lineHeight,n=d&&d.textOutline,D=d&&"ellipsis"===d.textOverflow,w=
d&&"nowrap"===d.whiteSpace,Q=d&&d.fontSize,M,C,h=k.length,d=g&&!a.added&&this.box,F=function(a){var c;b.styledMode||(c=/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:Q||b.style.fontSize||12);return x?I(x):b.fontMetrics(c,a.getAttribute("style")?a:f).h},R=function(a,f){A(b.escapes,function(b,c){f&&-1!==f.indexOf(b)||(a=a.toString().replace(new RegExp(b,"g"),c))});return a},v=function(a,f){var b;b=a.indexOf("\x3c");a=a.substring(b,a.indexOf("\x3e")-b);b=a.indexOf(f+"\x3d");if(-1!==b&&(b=b+f.length+
1,f=a.charAt(b),'"'===f||"'"===f))return a=a.substring(b+1),a.substring(0,a.indexOf(f))};M=[r,D,w,x,n,Q,g].join();if(M!==a.textCache){for(a.textCache=M;h--;)f.removeChild(k[h]);y||n||D||g||-1!==r.indexOf(" ")?(d&&d.appendChild(f),y?(r=b.styledMode?r.replace(/<(b|strong)>/g,'\x3cspan class\x3d"highcharts-strong"\x3e').replace(/<(i|em)>/g,'\x3cspan class\x3d"highcharts-emphasized"\x3e'):r.replace(/<(b|strong)>/g,'\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g,'\x3cspan style\x3d"font-style:italic"\x3e'),
r=r.replace(/<a/g,"\x3cspan").replace(/<\/(b|strong|i|em|a)>/g,"\x3c/span\x3e").split(/<br.*?>/g)):r=[r],r=r.filter(function(a){return""!==a}),r.forEach(function(r,y){var k,d=0,A=0;r=r.replace(/^\s+|\s+$/g,"").replace(/<span/g,"|||\x3cspan").replace(/<\/span>/g,"\x3c/span\x3e|||");k=r.split("|||");k.forEach(function(r){if(""!==r||1===k.length){var x={},n=m.createElementNS(b.SVG_NS,"tspan"),z,M;(z=v(r,"class"))&&e(n,"class",z);if(z=v(r,"style"))z=z.replace(/(;| |^)color([ :])/,"$1fill$2"),e(n,"style",
z);(M=v(r,"href"))&&!c&&(e(n,"onclick",'location.href\x3d"'+M+'"'),e(n,"class","highcharts-anchor"),b.styledMode||u(n,{cursor:"pointer"}));r=R(r.replace(/<[a-zA-Z\/](.|\n)*?>/g,"")||" ");if(" "!==r){n.appendChild(m.createTextNode(r));d?x.dx=0:y&&null!==l&&(x.x=l);e(n,x);f.appendChild(n);!d&&C&&(!N&&c&&u(n,{display:"block"}),e(n,"dy",F(n)));if(g){var h=r.replace(/([^\^])-/g,"$1- ").split(" "),x=!w&&(1<k.length||y||1<h.length);M=0;var I=F(n);if(D)p=b.truncate(a,n,r,void 0,0,Math.max(0,g-parseInt(Q||
12,10)),function(a,f){return a.substring(0,f)+"\u2026"});else if(x)for(;h.length;)h.length&&!w&&0<M&&(n=m.createElementNS(L,"tspan"),e(n,{dy:I,x:l}),z&&e(n,"style",z),n.appendChild(m.createTextNode(h.join(" ").replace(/- /g,"-"))),f.appendChild(n)),b.truncate(a,n,null,h,0===M?A:0,g,function(a,f){return h.slice(0,f).join(" ").replace(/- /g,"-")}),A=a.actualWidth,M++}d++}}});C=C||f.childNodes.length}),D&&p&&a.attr("title",R(a.textStr,["\x26lt;","\x26gt;"])),d&&d.removeChild(f),n&&a.applyTextOutline&&
a.applyTextOutline(n)):f.appendChild(m.createTextNode(R(r)))}},getContrast:function(a){a=t(a).rgba;a[0]*=1;a[1]*=1.2;a[2]*=.5;return 459<a[0]+a[1]+a[2]?"#000000":"#FFFFFF"},button:function(a,f,c,r,k,d,p,g,A,L){var y=this.label(a,f,c,A,null,null,L,null,"button"),n=0,x=this.styledMode;y.attr(l({padding:8,r:2},k));if(!x){var m,e,D,w;k=l({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1,style:{color:"#333333",cursor:"pointer",fontWeight:"normal"}},k);m=k.style;delete k.style;d=l(k,{fill:"#e6e6e6"},d);
e=d.style;delete d.style;p=l(k,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},p);D=p.style;delete p.style;g=l(k,{style:{color:"#cccccc"}},g);w=g.style;delete g.style}B(y.element,K?"mouseover":"mouseenter",function(){3!==n&&y.setState(1)});B(y.element,K?"mouseout":"mouseleave",function(){3!==n&&y.setState(n)});y.setState=function(a){1!==a&&(y.state=n=a);y.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed","disabled"][a||
0]);x||y.attr([k,d,p,g][a||0]).css([m,e,D,w][a||0])};x||y.attr(k).css(b({cursor:"default"},m));return y.on("click",function(a){3!==n&&r.call(y,a)})},crispLine:function(a,f){a[1]===a[4]&&(a[1]=a[4]=Math.round(a[1])-f%2/2);a[2]===a[5]&&(a[2]=a[5]=Math.round(a[2])+f%2/2);return a},path:function(a){var f=this.styledMode?{}:{fill:"none"};c(a)?f.d=a:w(a)&&b(f,a);return this.createElement("path").attr(f)},circle:function(a,f,b){a=w(a)?a:void 0===a?{}:{x:a,y:f,r:b};f=this.createElement("circle");f.xSetter=
f.ySetter=function(a,f,b){b.setAttribute("c"+f,a)};return f.attr(a)},arc:function(a,f,b,c,r,k){w(a)?(c=a,f=c.y,b=c.r,a=c.x):c={innerR:c,start:r,end:k};a=this.symbol("arc",a,f,b,b,c);a.r=b;return a},rect:function(a,f,b,c,r,k){r=w(a)?a.r:r;var d=this.createElement("rect");a=w(a)?a:void 0===a?{}:{x:a,y:f,width:Math.max(b,0),height:Math.max(c,0)};this.styledMode||(void 0!==k&&(a.strokeWidth=k,a=d.crisp(a)),a.fill="none");r&&(a.r=r);d.rSetter=function(a,f,b){d.r=a;e(b,{rx:a,ry:a})};d.rGetter=function(){return d.r};
return d.attr(a)},setSize:function(a,f,b){var c=this.alignedObjects,r=c.length;this.width=a;this.height=f;for(this.boxWrapper.animate({width:a,height:f},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+" "+this.attr("height")})},duration:z(b,!0)?void 0:0});r--;)c[r].align()},g:function(a){var f=this.createElement("g");return a?f.attr({"class":"highcharts-"+a}):f},image:function(a,f,c,r,k,d){var p={preserveAspectRatio:"none"},l,y=function(a,f){a.setAttributeNS?a.setAttributeNS("http://www.w3.org/1999/xlink",
"href",f):a.setAttribute("hc-svg-href",f)},g=function(f){y(l.element,a);d.call(l,f)};1<arguments.length&&b(p,{x:f,y:c,width:r,height:k});l=this.createElement("image").attr(p);d?(y(l.element,"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw\x3d\x3d"),p=new R.Image,B(p,"load",g),p.src=a,p.complete&&g({})):y(l.element,a);return l},symbol:function(a,f,c,r,k,d){var p=this,l,y=/^url\((.*?)\)$/,g=y.test(a),A=!g&&(this.symbols[a]?a:"circle"),L=A&&this.symbols[A],x=n(f)&&L&&L.call(this.symbols,
Math.round(f),Math.round(c),r,k,d),e,D;L?(l=this.path(x),p.styledMode||l.attr("fill","none"),b(l,{symbolName:A,x:f,y:c,width:r,height:k}),d&&b(l,d)):g&&(e=a.match(y)[1],l=this.image(e),l.imgwidth=z(M[e]&&M[e].width,d&&d.width),l.imgheight=z(M[e]&&M[e].height,d&&d.height),D=function(){l.attr({width:l.width,height:l.height})},["width","height"].forEach(function(a){l[a+"Setter"]=function(a,f){var b={},c=this["img"+f],r="width"===f?"translateX":"translateY";this[f]=a;n(c)&&(d&&"within"===d.backgroundSize&&
this.width&&this.height&&(c=Math.round(c*Math.min(this.width/this.imgwidth,this.height/this.imgheight))),this.element&&this.element.setAttribute(f,c),this.alignByTranslate||(b[r]=((this[f]||0)-c)/2,this.attr(b)))}}),n(f)&&l.attr({x:f,y:c}),l.isImg=!0,n(l.imgwidth)&&n(l.imgheight)?D():(l.attr({width:0,height:0}),v("img",{onload:function(){var a=q[p.chartIndex];0===this.width&&(u(this,{position:"absolute",top:"-999em"}),m.body.appendChild(this));M[e]={width:this.width,height:this.height};l.imgwidth=
this.width;l.imgheight=this.height;l.element&&D();this.parentNode&&this.parentNode.removeChild(this);p.imgCount--;if(!p.imgCount&&a&&a.onload)a.onload()},src:e}),this.imgCount++));return l},symbols:{circle:function(a,f,b,c){return this.arc(a+b/2,f+c/2,b/2,c/2,{start:.5*Math.PI,end:2.5*Math.PI,open:!1})},square:function(a,f,b,c){return["M",a,f,"L",a+b,f,a+b,f+c,a,f+c,"Z"]},triangle:function(a,f,b,c){return["M",a+b/2,f,"L",a+b,f+c,a,f+c,"Z"]},"triangle-down":function(a,f,b,c){return["M",a,f,"L",a+b,
f,a+b/2,f+c,"Z"]},diamond:function(a,f,b,c){return["M",a+b/2,f,"L",a+b,f+c/2,a+b/2,f+c,a,f+c/2,"Z"]},arc:function(a,f,b,c,r){var d=r.start,k=r.r||b,l=r.r||c||b,p=r.end-.001;b=r.innerR;c=z(r.open,.001>Math.abs(r.end-r.start-2*Math.PI));var y=Math.cos(d),g=Math.sin(d),A=Math.cos(p),p=Math.sin(p),d=.001>r.end-d-Math.PI?0:1;r=["M",a+k*y,f+l*g,"A",k,l,0,d,z(r.clockwise,1),a+k*A,f+l*p];n(b)&&r.push(c?"M":"L",a+b*A,f+b*p,"A",b,b,0,d,0,a+b*y,f+b*g);r.push(c?"":"Z");return r},callout:function(a,f,b,c,r){var d=
Math.min(r&&r.r||0,b,c),k=d+6,l=r&&r.anchorX;r=r&&r.anchorY;var p;p=["M",a+d,f,"L",a+b-d,f,"C",a+b,f,a+b,f,a+b,f+d,"L",a+b,f+c-d,"C",a+b,f+c,a+b,f+c,a+b-d,f+c,"L",a+d,f+c,"C",a,f+c,a,f+c,a,f+c-d,"L",a,f+d,"C",a,f,a,f,a+d,f];l&&l>b?r>f+k&&r<f+c-k?p.splice(13,3,"L",a+b,r-6,a+b+6,r,a+b,r+6,a+b,f+c-d):p.splice(13,3,"L",a+b,c/2,l,r,a+b,c/2,a+b,f+c-d):l&&0>l?r>f+k&&r<f+c-k?p.splice(33,3,"L",a,r+6,a-6,r,a,r-6,a,f+d):p.splice(33,3,"L",a,c/2,l,r,a,c/2,a,f+d):r&&r>c&&l>a+k&&l<a+b-k?p.splice(23,3,"L",l+6,f+
c,l,f+c+6,l-6,f+c,a+d,f+c):r&&0>r&&l>a+k&&l<a+b-k&&p.splice(3,3,"L",l-6,f,l,f-6,l+6,f,b-d,f);return p}},clipRect:function(f,b,c,r){var d=a.uniqueKey()+"-",l=this.createElement("clipPath").attr({id:d}).add(this.defs);f=this.rect(f,b,c,r,0).add(l);f.id=d;f.clipPath=l;f.count=0;return f},text:function(a,f,b,c){var r={};if(c&&(this.allowHTML||!this.forExport))return this.html(a,f,b);r.x=Math.round(f||0);b&&(r.y=Math.round(b));n(a)&&(r.text=a);a=this.createElement("text").attr(r);c||(a.xSetter=function(a,
f,b){var c=b.getElementsByTagName("tspan"),r,d=b.getAttribute(f),l;for(l=0;l<c.length;l++)r=c[l],r.getAttribute(f)===d&&r.setAttribute(f,a);b.setAttribute(f,a)});return a},fontMetrics:function(a,f){a=!this.styledMode&&/px/.test(a)||!R.getComputedStyle?a||f&&f.style&&f.style.fontSize||this.style&&this.style.fontSize:f&&E.prototype.getStyle.call(f,"font-size");a=/px/.test(a)?I(a):12;f=24>a?a+3:Math.round(1.2*a);return{h:f,b:Math.round(.8*f),f:a}},rotCorr:function(a,f,b){var c=a;f&&b&&(c=Math.max(c*
Math.cos(f*g),4));return{x:-a/3*Math.sin(f*g),y:c}},label:function(c,r,d,k,p,g,A,L,x){var y=this,e=y.styledMode,m=y.g("button"!==x&&"label"),D=m.text=y.text("",0,0,A).attr({zIndex:1}),w,z,N=0,M=3,Q=0,C,h,I,F,R,v={},K,t,q=/^url\((.*?)\)$/.test(k),u=e||q,S=function(){return e?w.strokeWidth()%2/2:(K?parseInt(K,10):0)%2/2},U,P,T;x&&m.addClass("highcharts-"+x);U=function(){var a=D.element.style,f={};z=(void 0===C||void 0===h||R)&&n(D.textStr)&&D.getBBox();m.width=(C||z.width||0)+2*M+Q;m.height=(h||z.height||
0)+2*M;t=M+Math.min(y.fontMetrics(a&&a.fontSize,D).b,z?z.height:Infinity);u&&(w||(m.box=w=y.symbols[k]||q?y.symbol(k):y.rect(),w.addClass(("button"===x?"":"highcharts-label-box")+(x?" highcharts-"+x+"-box":"")),w.add(m),a=S(),f.x=a,f.y=(L?-t:0)+a),f.width=Math.round(m.width),f.height=Math.round(m.height),w.attr(b(f,v)),v={})};P=function(){var a=Q+M,f;f=L?0:t;n(C)&&z&&("center"===R||"right"===R)&&(a+={center:.5,right:1}[R]*(C-z.width));if(a!==D.x||f!==D.y)D.attr("x",a),D.hasBoxWidthChanged&&(z=D.getBBox(!0),
U()),void 0!==f&&D.attr("y",f);D.x=a;D.y=f};T=function(a,f){w?w.attr(a,f):v[a]=f};m.onAdd=function(){D.add(m);m.attr({text:c||0===c?c:"",x:r,y:d});w&&n(p)&&m.attr({anchorX:p,anchorY:g})};m.widthSetter=function(f){C=a.isNumber(f)?f:null};m.heightSetter=function(a){h=a};m["text-alignSetter"]=function(a){R=a};m.paddingSetter=function(a){n(a)&&a!==M&&(M=m.padding=a,P())};m.paddingLeftSetter=function(a){n(a)&&a!==Q&&(Q=a,P())};m.alignSetter=function(a){a={left:0,center:.5,right:1}[a];a!==N&&(N=a,z&&m.attr({x:I}))};
m.textSetter=function(a){void 0!==a&&D.attr({text:a});U();P()};m["stroke-widthSetter"]=function(a,f){a&&(u=!0);K=this["stroke-width"]=a;T(f,a)};e?m.rSetter=function(a,f){T(f,a)}:m.strokeSetter=m.fillSetter=m.rSetter=function(a,f){"r"!==f&&("fill"===f&&a&&(u=!0),m[f]=a);T(f,a)};m.anchorXSetter=function(a,f){p=m.anchorX=a;T(f,Math.round(a)-S()-I)};m.anchorYSetter=function(a,f){g=m.anchorY=a;T(f,a-F)};m.xSetter=function(a){m.x=a;N&&(a-=N*((C||z.width)+2*M),m["forceAnimate:x"]=!0);I=Math.round(a);m.attr("translateX",
I)};m.ySetter=function(a){F=m.y=Math.round(a);m.attr("translateY",F)};var B=m.css;A={css:function(a){if(a){var f={};a=l(a);m.textProps.forEach(function(b){void 0!==a[b]&&(f[b]=a[b],delete a[b])});D.css(f);"width"in f&&U();"fontSize"in f&&(U(),P())}return B.call(m,a)},getBBox:function(){return{width:z.width+2*M,height:z.height+2*M,x:z.x-M,y:z.y-M}},destroy:function(){f(m.element,"mouseenter");f(m.element,"mouseleave");D&&(D=D.destroy());w&&(w=w.destroy());E.prototype.destroy.call(m);m=y=U=P=T=null}};
e||(A.shadow=function(a){a&&(U(),w&&w.shadow(a));return m});return b(m,A)}});a.Renderer=H});J(G,"parts/Html.js",[G["parts/Globals.js"]],function(a){var E=a.attr,H=a.createElement,B=a.css,h=a.defined,e=a.extend,q=a.isFirefox,t=a.isMS,u=a.isWebKit,v=a.pick,n=a.pInt,g=a.SVGElement,d=a.SVGRenderer,m=a.win;e(g.prototype,{htmlCss:function(a){var b="SPAN"===this.element.tagName&&a&&"width"in a,d=v(b&&a.width,void 0),c;b&&(delete a.width,this.textWidth=d,c=!0);a&&"ellipsis"===a.textOverflow&&(a.whiteSpace=
"nowrap",a.overflow="hidden");this.styles=e(this.styles,a);B(this.element,a);c&&this.htmlUpdateTransform();return this},htmlGetBBox:function(){var a=this.element;return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,d=this.element,p=this.translateX||0,c=this.translateY||0,g=this.x||0,m=this.y||0,e=this.textAlign||"left",F={left:0,center:.5,right:1}[e],C=this.styles,l=C&&C.whiteSpace;B(d,{marginLeft:p,marginTop:c});
!a.styledMode&&this.shadows&&this.shadows.forEach(function(a){B(a,{marginLeft:p+1,marginTop:c+1})});this.inverted&&[].forEach.call(d.childNodes,function(b){a.invertChild(b,d)});if("SPAN"===d.tagName){var C=this.rotation,D=this.textWidth&&n(this.textWidth),A=[C,e,d.innerHTML,this.textWidth,this.textAlign].join(),z;(z=D!==this.oldTextWidth)&&!(z=D>this.oldTextWidth)&&((z=this.textPxLength)||(B(d,{width:"",whiteSpace:l||"nowrap"}),z=d.offsetWidth),z=z>D);z&&(/[ \-]/.test(d.textContent||d.innerText)||
"ellipsis"===d.style.textOverflow)?(B(d,{width:D+"px",display:"block",whiteSpace:l||"normal"}),this.oldTextWidth=D,this.hasBoxWidthChanged=!0):this.hasBoxWidthChanged=!1;A!==this.cTT&&(l=a.fontMetrics(d.style.fontSize,d).b,!h(C)||C===(this.oldRotation||0)&&e===this.oldAlign||this.setSpanRotation(C,F,l),this.getSpanCorrection(!h(C)&&this.textPxLength||d.offsetWidth,l,F,C,e));B(d,{left:g+(this.xCorr||0)+"px",top:m+(this.yCorr||0)+"px"});this.cTT=A;this.oldRotation=C;this.oldAlign=e}}else this.alignOnAdd=
!0},setSpanRotation:function(a,d,p){var b={},k=this.renderer.getTransformKey();b[k]=b.transform="rotate("+a+"deg)";b[k+(q?"Origin":"-origin")]=b.transformOrigin=100*d+"% "+p+"px";B(this.element,b)},getSpanCorrection:function(a,d,p){this.xCorr=-a*p;this.yCorr=-d}});e(d.prototype,{getTransformKey:function(){return t&&!/Edge/.test(m.navigator.userAgent)?"-ms-transform":u?"-webkit-transform":q?"MozTransform":m.opera?"-o-transform":""},html:function(b,d,p){var c=this.createElement("span"),k=c.element,
m=c.renderer,n=m.isSVG,h=function(a,b){["opacity","visibility"].forEach(function(c){a[c+"Setter"]=function(d,l,f){var r=a.div?a.div.style:b;g.prototype[c+"Setter"].call(this,d,l,f);r&&(r[l]=d)}});a.addedSetters=!0},C=a.charts[m.chartIndex],C=C&&C.styledMode;c.textSetter=function(a){a!==k.innerHTML&&(delete this.bBox,delete this.oldTextWidth);this.textStr=a;k.innerHTML=v(a,"");c.doTransform=!0};n&&h(c,c.element.style);c.xSetter=c.ySetter=c.alignSetter=c.rotationSetter=function(a,b){"align"===b&&(b=
"textAlign");c[b]=a;c.doTransform=!0};c.afterSetters=function(){this.doTransform&&(this.htmlUpdateTransform(),this.doTransform=!1)};c.attr({text:b,x:Math.round(d),y:Math.round(p)}).css({position:"absolute"});C||c.css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize});k.style.whiteSpace="nowrap";c.css=c.htmlCss;n&&(c.add=function(a){var b,d=m.box.parentNode,l=[];if(this.parentGroup=a){if(b=a.div,!b){for(;a;)l.push(a),a=a.parentGroup;l.reverse().forEach(function(a){function f(f,b){a[b]=
f;"translateX"===b?r.left=f+"px":r.top=f+"px";a.doTransform=!0}var r,p=E(a.element,"class");p&&(p={className:p});b=a.div=a.div||H("div",p,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,opacity:a.opacity,pointerEvents:a.styles&&a.styles.pointerEvents},b||d);r=b.style;e(a,{classSetter:function(a){return function(f){this.element.setAttribute("class",f);a.className=f}}(b),on:function(){l[0].div&&c.on.apply({element:l[0].div},arguments);return a},translateXSetter:f,
translateYSetter:f});a.addedSetters||h(a)})}}else b=d;b.appendChild(k);c.added=!0;c.alignOnAdd&&c.htmlUpdateTransform();return c});return c}})});J(G,"parts/Time.js",[G["parts/Globals.js"]],function(a){var E=a.defined,H=a.extend,B=a.merge,h=a.pick,e=a.timeUnits,q=a.win;a.Time=function(a){this.update(a,!1)};a.Time.prototype={defaultOptions:{},update:function(a){var e=h(a&&a.useUTC,!0),v=this;this.options=a=B(!0,this.options||{},a);this.Date=a.Date||q.Date||Date;this.timezoneOffset=(this.useUTC=e)&&
a.timezoneOffset;this.getTimezoneOffset=this.timezoneOffsetFunction();(this.variableTimezone=!(e&&!a.getTimezoneOffset&&!a.timezone))||this.timezoneOffset?(this.get=function(a,g){var d=g.getTime(),m=d-v.getTimezoneOffset(g);g.setTime(m);a=g["getUTC"+a]();g.setTime(d);return a},this.set=function(a,g,d){var m;if("Milliseconds"===a||"Seconds"===a||"Minutes"===a&&0===g.getTimezoneOffset()%60)g["set"+a](d);else m=v.getTimezoneOffset(g),m=g.getTime()-m,g.setTime(m),g["setUTC"+a](d),a=v.getTimezoneOffset(g),
m=g.getTime()+a,g.setTime(m)}):e?(this.get=function(a,g){return g["getUTC"+a]()},this.set=function(a,g,d){return g["setUTC"+a](d)}):(this.get=function(a,g){return g["get"+a]()},this.set=function(a,g,d){return g["set"+a](d)})},makeTime:function(e,q,v,n,g,d){var m,b,k;this.useUTC?(m=this.Date.UTC.apply(0,arguments),b=this.getTimezoneOffset(m),m+=b,k=this.getTimezoneOffset(m),b!==k?m+=k-b:b-36E5!==this.getTimezoneOffset(m-36E5)||a.isSafari||(m-=36E5)):m=(new this.Date(e,q,h(v,1),h(n,0),h(g,0),h(d,0))).getTime();
return m},timezoneOffsetFunction:function(){var e=this,h=this.options,v=q.moment;if(!this.useUTC)return function(a){return 6E4*(new Date(a)).getTimezoneOffset()};if(h.timezone){if(v)return function(a){return 6E4*-v.tz(a,h.timezone).utcOffset()};a.error(25)}return this.useUTC&&h.getTimezoneOffset?function(a){return 6E4*h.getTimezoneOffset(a)}:function(){return 6E4*(e.timezoneOffset||0)}},dateFormat:function(e,h,v){if(!a.defined(h)||isNaN(h))return a.defaultOptions.lang.invalidDate||"";e=a.pick(e,"%Y-%m-%d %H:%M:%S");
var n=this,g=new this.Date(h),d=this.get("Hours",g),m=this.get("Day",g),b=this.get("Date",g),k=this.get("Month",g),p=this.get("FullYear",g),c=a.defaultOptions.lang,x=c.weekdays,q=c.shortWeekdays,w=a.pad,g=a.extend({a:q?q[m]:x[m].substr(0,3),A:x[m],d:w(b),e:w(b,2," "),w:m,b:c.shortMonths[k],B:c.months[k],m:w(k+1),o:k+1,y:p.toString().substr(2,2),Y:p,H:w(d),k:d,I:w(d%12||12),l:d%12||12,M:w(n.get("Minutes",g)),p:12>d?"AM":"PM",P:12>d?"am":"pm",S:w(g.getSeconds()),L:w(Math.floor(h%1E3),3)},a.dateFormats);
a.objectEach(g,function(a,b){for(;-1!==e.indexOf("%"+b);)e=e.replace("%"+b,"function"===typeof a?a.call(n,h):a)});return v?e.substr(0,1).toUpperCase()+e.substr(1):e},resolveDTLFormat:function(e){return a.isObject(e,!0)?e:(e=a.splat(e),{main:e[0],from:e[1],to:e[2]})},getTimeTicks:function(a,q,v,n){var g=this,d=[],m,b={},k;m=new g.Date(q);var p=a.unitRange,c=a.count||1,x;n=h(n,1);if(E(q)){g.set("Milliseconds",m,p>=e.second?0:c*Math.floor(g.get("Milliseconds",m)/c));p>=e.second&&g.set("Seconds",m,p>=
e.minute?0:c*Math.floor(g.get("Seconds",m)/c));p>=e.minute&&g.set("Minutes",m,p>=e.hour?0:c*Math.floor(g.get("Minutes",m)/c));p>=e.hour&&g.set("Hours",m,p>=e.day?0:c*Math.floor(g.get("Hours",m)/c));p>=e.day&&g.set("Date",m,p>=e.month?1:Math.max(1,c*Math.floor(g.get("Date",m)/c)));p>=e.month&&(g.set("Month",m,p>=e.year?0:c*Math.floor(g.get("Month",m)/c)),k=g.get("FullYear",m));p>=e.year&&g.set("FullYear",m,k-k%c);p===e.week&&(k=g.get("Day",m),g.set("Date",m,g.get("Date",m)-k+n+(k<n?-7:0)));k=g.get("FullYear",
m);n=g.get("Month",m);var K=g.get("Date",m),w=g.get("Hours",m);q=m.getTime();g.variableTimezone&&(x=v-q>4*e.month||g.getTimezoneOffset(q)!==g.getTimezoneOffset(v));q=m.getTime();for(m=1;q<v;)d.push(q),q=p===e.year?g.makeTime(k+m*c,0):p===e.month?g.makeTime(k,n+m*c):!x||p!==e.day&&p!==e.week?x&&p===e.hour&&1<c?g.makeTime(k,n,K,w+m*c):q+p*c:g.makeTime(k,n,K+m*c*(p===e.day?1:7)),m++;d.push(q);p<=e.hour&&1E4>d.length&&d.forEach(function(a){0===a%18E5&&"000000000"===g.dateFormat("%H%M%S%L",a)&&(b[a]="day")})}d.info=
H(a,{higherRanks:b,totalRange:p*c});return d}}});J(G,"parts/Options.js",[G["parts/Globals.js"]],function(a){var E=a.color,H=a.merge;a.defaultOptions={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{},time:a.Time.prototype.defaultOptions,chart:{styledMode:!1,borderRadius:0,colorCount:10,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:6},position:{align:"right",x:-10,y:10}},width:null,height:null,borderColor:"#335cad",backgroundColor:"#ffffff",
plotBorderColor:"#cccccc"},title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},plotOptions:{},labels:{style:{position:"absolute",color:"#333333"}},legend:{enabled:!0,align:"center",alignColumns:!0,layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},itemStyle:{color:"#333333",cursor:"pointer",fontSize:"12px",fontWeight:"bold",
textOverflow:"ellipsis"},itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:a.svg,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",
second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:a.isTouchDevice?25:10,headerFormat:'\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e',backgroundColor:E("#f7f7f7").setOpacity(.85).get(),borderWidth:1,shadow:!0,
style:{color:"#333333",cursor:"default",fontSize:"12px",pointerEvents:"none",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"https://www.highcharts.com?credits",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};a.setOptions=function(B){a.defaultOptions=H(!0,a.defaultOptions,B);a.time.update(H(a.defaultOptions.global,a.defaultOptions.time),!1);return a.defaultOptions};a.getOptions=function(){return a.defaultOptions};
a.defaultPlotOptions=a.defaultOptions.plotOptions;a.time=new a.Time(H(a.defaultOptions.global,a.defaultOptions.time));a.dateFormat=function(B,h,e){return a.time.dateFormat(B,h,e)};""});J(G,"parts/Tick.js",[G["parts/Globals.js"]],function(a){var E=a.correctFloat,H=a.defined,B=a.destroyObjectProperties,h=a.fireEvent,e=a.isNumber,q=a.merge,t=a.pick,u=a.deg2rad;a.Tick=function(a,e,g,d,m){this.axis=a;this.pos=e;this.type=g||"";this.isNewLabel=this.isNew=!0;this.parameters=m||{};this.tickmarkOffset=this.parameters.tickmarkOffset;
this.options=this.parameters.options;g||d||this.addLabel()};a.Tick.prototype={addLabel:function(){var e=this,n=e.axis,g=n.options,d=n.chart,m=n.categories,b=n.names,k=e.pos,p=t(e.options&&e.options.labels,g.labels),c=n.tickPositions,x=k===c[0],h=k===c[c.length-1],m=this.parameters.category||(m?t(m[k],b[k],k):k),w=e.label,c=c.info,F,C,l,D;n.isDatetimeAxis&&c&&(C=d.time.resolveDTLFormat(g.dateTimeLabelFormats[!g.grid&&c.higherRanks[k]||c.unitName]),F=C.main);e.isFirst=x;e.isLast=h;e.formatCtx={axis:n,
chart:d,isFirst:x,isLast:h,dateTimeLabelFormat:F,tickPositionInfo:c,value:n.isLog?E(n.lin2log(m)):m,pos:k};g=n.labelFormatter.call(e.formatCtx,this.formatCtx);if(D=C&&C.list)e.shortenLabel=function(){for(l=0;l<D.length;l++)if(w.attr({text:n.labelFormatter.call(a.extend(e.formatCtx,{dateTimeLabelFormat:D[l]}))}),w.getBBox().width<n.getSlotWidth(e)-2*t(p.padding,5))return;w.attr({text:""})};if(H(w))w&&w.textStr!==g&&(!w.textWidth||p.style&&p.style.width||w.styles.width||w.css({width:null}),w.attr({text:g}),
w.textPxLength=w.getBBox().width);else{if(e.label=w=H(g)&&p.enabled?d.renderer.text(g,0,0,p.useHTML).add(n.labelGroup):null)d.styledMode||w.css(q(p.style)),w.textPxLength=w.getBBox().width;e.rotation=0}},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(a){var e=this.axis,g=e.options.labels,d=a.x,m=e.chart.chartWidth,b=e.chart.spacing,k=t(e.labelLeft,Math.min(e.pos,b[3])),b=t(e.labelRight,Math.max(e.isRadial?0:e.pos+e.len,m-
b[1])),p=this.label,c=this.rotation,x={left:0,center:.5,right:1}[e.labelAlign||p.attr("align")],h=p.getBBox().width,w=e.getSlotWidth(this),F=w,C=1,l,D={};if(c||"justify"!==t(g.overflow,"justify"))0>c&&d-x*h<k?l=Math.round(d/Math.cos(c*u)-k):0<c&&d+x*h>b&&(l=Math.round((m-d)/Math.cos(c*u)));else if(m=d+(1-x)*h,d-x*h<k?F=a.x+F*(1-x)-k:m>b&&(F=b-a.x+F*x,C=-1),F=Math.min(w,F),F<w&&"center"===e.labelAlign&&(a.x+=C*(w-F-x*(w-Math.min(h,F)))),h>F||e.autoRotation&&(p.styles||{}).width)l=F;l&&(this.shortenLabel?
this.shortenLabel():(D.width=Math.floor(l),(g.style||{}).textOverflow||(D.textOverflow="ellipsis"),p.css(D)))},getPosition:function(e,n,g,d){var m=this.axis,b=m.chart,k=d&&b.oldChartHeight||b.chartHeight;e={x:e?a.correctFloat(m.translate(n+g,null,null,d)+m.transB):m.left+m.offset+(m.opposite?(d&&b.oldChartWidth||b.chartWidth)-m.right-m.left:0),y:e?k-m.bottom+m.offset-(m.opposite?m.height:0):a.correctFloat(k-m.translate(n+g,null,null,d)-m.transB)};e.y=Math.max(Math.min(e.y,1E5),-1E5);h(this,"afterGetPosition",
{pos:e});return e},getLabelPosition:function(a,e,g,d,m,b,k,p){var c=this.axis,x=c.transA,n=c.reversed,w=c.staggerLines,F=c.tickRotCorr||{x:0,y:0},C=m.y,l=d||c.reserveSpaceDefault?0:-c.labelOffset*("center"===c.labelAlign?.5:1),D={};H(C)||(C=0===c.side?g.rotation?-8:-g.getBBox().height:2===c.side?F.y+8:Math.cos(g.rotation*u)*(F.y-g.getBBox(!1,0).height/2));a=a+m.x+l+F.x-(b&&d?b*x*(n?-1:1):0);e=e+C-(b&&!d?b*x*(n?1:-1):0);w&&(g=k/(p||1)%w,c.opposite&&(g=w-g-1),e+=c.labelOffset/w*g);D.x=a;D.y=Math.round(e);
h(this,"afterGetLabelPosition",{pos:D,tickmarkOffset:b,index:k});return D},getMarkPath:function(a,e,g,d,m,b){return b.crispLine(["M",a,e,"L",a+(m?0:-g),e+(m?g:0)],d)},renderGridLine:function(a,e,g){var d=this.axis,m=d.options,b=this.gridLine,k={},p=this.pos,c=this.type,x=t(this.tickmarkOffset,d.tickmarkOffset),n=d.chart.renderer,w=c?c+"Grid":"grid",h=m[w+"LineWidth"],C=m[w+"LineColor"],m=m[w+"LineDashStyle"];b||(d.chart.styledMode||(k.stroke=C,k["stroke-width"]=h,m&&(k.dashstyle=m)),c||(k.zIndex=
1),a&&(e=0),this.gridLine=b=n.path().attr(k).addClass("highcharts-"+(c?c+"-":"")+"grid-line").add(d.gridGroup));if(b&&(g=d.getPlotLinePath({value:p+x,lineWidth:b.strokeWidth()*g,force:"pass",old:a})))b[a||this.isNew?"attr":"animate"]({d:g,opacity:e})},renderMark:function(a,e,g){var d=this.axis,m=d.options,b=d.chart.renderer,k=this.type,p=k?k+"Tick":"tick",c=d.tickSize(p),x=this.mark,n=!x,w=a.x;a=a.y;var h=t(m[p+"Width"],!k&&d.isXAxis?1:0),m=m[p+"Color"];c&&(d.opposite&&(c[0]=-c[0]),n&&(this.mark=
x=b.path().addClass("highcharts-"+(k?k+"-":"")+"tick").add(d.axisGroup),d.chart.styledMode||x.attr({stroke:m,"stroke-width":h})),x[n?"attr":"animate"]({d:this.getMarkPath(w,a,c[0],x.strokeWidth()*g,d.horiz,b),opacity:e}))},renderLabel:function(a,n,g,d){var m=this.axis,b=m.horiz,k=m.options,p=this.label,c=k.labels,x=c.step,m=t(this.tickmarkOffset,m.tickmarkOffset),h=!0,w=a.x;a=a.y;p&&e(w)&&(p.xy=a=this.getLabelPosition(w,a,p,b,c,m,d,x),this.isFirst&&!this.isLast&&!t(k.showFirstLabel,1)||this.isLast&&
!this.isFirst&&!t(k.showLastLabel,1)?h=!1:!b||c.step||c.rotation||n||0===g||this.handleOverflow(a),x&&d%x&&(h=!1),h&&e(a.y)?(a.opacity=g,p[this.isNewLabel?"attr":"animate"](a),this.isNewLabel=!1):(p.attr("y",-9999),this.isNewLabel=!0))},render:function(e,n,g){var d=this.axis,m=d.horiz,b=this.pos,k=t(this.tickmarkOffset,d.tickmarkOffset),b=this.getPosition(m,b,k,n),k=b.x,p=b.y,d=m&&k===d.pos+d.len||!m&&p===d.pos?-1:1;g=t(g,1);this.isActive=!0;this.renderGridLine(n,g,d);this.renderMark(b,g,d);this.renderLabel(b,
n,g,e);this.isNew=!1;a.fireEvent(this,"afterRender")},destroy:function(){B(this,this.axis)}}});J(G,"parts/Axis.js",[G["parts/Globals.js"]],function(a){var E=a.addEvent,H=a.animObject,B=a.arrayMax,h=a.arrayMin,e=a.color,q=a.correctFloat,t=a.defaultOptions,u=a.defined,v=a.deg2rad,n=a.destroyObjectProperties,g=a.extend,d=a.fireEvent,m=a.format,b=a.getMagnitude,k=a.isArray,p=a.isNumber,c=a.isString,x=a.merge,K=a.normalizeTickInterval,w=a.objectEach,F=a.pick,C=a.removeEvent,l=a.seriesTypes,D=a.splat,A=
a.syncTimeout,z=a.Tick,I=function(){this.init.apply(this,arguments)};a.extend(I.prototype,{defaultOptions:{dateTimeLabelFormats:{millisecond:{main:"%H:%M:%S.%L",range:!1},second:{main:"%H:%M:%S",range:!1},minute:{main:"%H:%M",range:!1},hour:{main:"%H:%M",range:!1},day:{main:"%e. %b"},week:{main:"%e. %b"},month:{main:"%b '%y"},year:{main:"%Y"}},endOnTick:!1,labels:{enabled:!0,indentation:10,x:0,style:{color:"#666666",cursor:"default",fontSize:"11px"}},maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",
minPadding:.01,showEmpty:!0,startOfWeek:1,startOnTick:!1,tickLength:10,tickPixelInterval:100,tickmarkPlacement:"between",tickPosition:"outside",title:{align:"middle",style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#ccd6eb",lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"},defaultYAxisOptions:{endOnTick:!0,maxPadding:.05,minPadding:.05,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},startOnTick:!0,title:{rotation:270,
text:"Values"},stackLabels:{allowOverlap:!1,enabled:!1,formatter:function(){return a.numberFormat(this.total,-1)},style:{color:"#000000",fontSize:"11px",fontWeight:"bold",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0},defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0},margin:15,title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0},margin:15,
title:{rotation:0}},init:function(f,b){var c=b.isX,r=this;r.chart=f;r.horiz=f.inverted&&!r.isZAxis?!c:c;r.isXAxis=c;r.coll=r.coll||(c?"xAxis":"yAxis");d(this,"init",{userOptions:b});r.opposite=b.opposite;r.side=b.side||(r.horiz?r.opposite?0:2:r.opposite?1:3);r.setOptions(b);var l=this.options,p=l.type;r.labelFormatter=l.labels.formatter||r.defaultLabelFormatter;r.userOptions=b;r.minPixelPadding=0;r.reversed=l.reversed;r.visible=!1!==l.visible;r.zoomEnabled=!1!==l.zoomEnabled;r.hasNames="category"===
p||!0===l.categories;r.categories=l.categories||r.hasNames;r.names||(r.names=[],r.names.keys={});r.plotLinesAndBandsGroups={};r.isLog="logarithmic"===p;r.isDatetimeAxis="datetime"===p;r.positiveValuesOnly=r.isLog&&!r.allowNegativeLog;r.isLinked=u(l.linkedTo);r.ticks={};r.labelEdge=[];r.minorTicks={};r.plotLinesAndBands=[];r.alternateBands={};r.len=0;r.minRange=r.userMinRange=l.minRange||l.maxZoom;r.range=l.range;r.offset=l.offset||0;r.stacks={};r.oldStacks={};r.stacksTouched=0;r.max=null;r.min=null;
r.crosshair=F(l.crosshair,D(f.options.tooltip.crosshairs)[c?0:1],!1);b=r.options.events;-1===f.axes.indexOf(r)&&(c?f.axes.splice(f.xAxis.length,0,r):f.axes.push(r),f[r.coll].push(r));r.series=r.series||[];f.inverted&&!r.isZAxis&&c&&void 0===r.reversed&&(r.reversed=!0);w(b,function(f,b){a.isFunction(f)&&E(r,b,f)});r.lin2log=l.linearToLogConverter||r.lin2log;r.isLog&&(r.val2lin=r.log2lin,r.lin2val=r.lin2log);d(this,"afterInit")},setOptions:function(a){this.options=x(this.defaultOptions,"yAxis"===this.coll&&
this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],x(t[this.coll],a));d(this,"afterSetOptions",{userOptions:a})},defaultLabelFormatter:function(){var f=this.axis,b=this.value,c=f.chart.time,d=f.categories,l=this.dateTimeLabelFormat,p=t.lang,k=p.numericSymbols,p=p.numericSymbolMagnitude||1E3,e=k&&k.length,g,A=f.options.labels.format,f=f.isLog?Math.abs(b):f.tickInterval;if(A)g=m(A,this,c);else if(d)g=
b;else if(l)g=c.dateFormat(l,b);else if(e&&1E3<=f)for(;e--&&void 0===g;)c=Math.pow(p,e+1),f>=c&&0===10*b%c&&null!==k[e]&&0!==b&&(g=a.numberFormat(b/c,-1)+k[e]);void 0===g&&(g=1E4<=Math.abs(b)?a.numberFormat(b,-1):a.numberFormat(b,-1,void 0,""));return g},getSeriesExtremes:function(){var a=this,b=a.chart,c;d(this,"getSeriesExtremes",null,function(){a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();a.series.forEach(function(f){if(f.visible||
!b.options.chart.ignoreHiddenSeries){var r=f.options,d=r.threshold,l,k;a.hasVisibleSeries=!0;a.positiveValuesOnly&&0>=d&&(d=null);if(a.isXAxis)r=f.xData,r.length&&(c=f.getXExtremes(r),l=c.min,k=c.max,p(l)||l instanceof Date||(r=r.filter(p),c=f.getXExtremes(r),l=c.min,k=c.max),r.length&&(a.dataMin=Math.min(F(a.dataMin,l),l),a.dataMax=Math.max(F(a.dataMax,k),k)));else if(f.getExtremes(),k=f.dataMax,l=f.dataMin,u(l)&&u(k)&&(a.dataMin=Math.min(F(a.dataMin,l),l),a.dataMax=Math.max(F(a.dataMax,k),k)),u(d)&&
(a.threshold=d),!r.softThreshold||a.positiveValuesOnly)a.softThreshold=!1}})});d(this,"afterGetSeriesExtremes")},translate:function(a,b,c,d,l,k){var f=this.linkedParent||this,r=1,e=0,g=d?f.oldTransA:f.transA;d=d?f.oldMin:f.min;var m=f.minPixelPadding;l=(f.isOrdinal||f.isBroken||f.isLog&&l)&&f.lin2val;g||(g=f.transA);c&&(r*=-1,e=f.len);f.reversed&&(r*=-1,e-=r*(f.sector||f.len));b?(a=(a*r+e-m)/g+d,l&&(a=f.lin2val(a))):(l&&(a=f.val2lin(a)),a=p(d)?r*(a-d)*g+e+r*m+(p(k)?g*k:0):void 0);return a},toPixels:function(a,
b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-(b?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a){var f=this,b=f.chart,c=f.left,l=f.top,k=a.old,e=a.value,g=a.translatedValue,m=a.lineWidth,A=a.force,x,D,n,w,z=k&&b.oldChartHeight||b.chartHeight,h=k&&b.oldChartWidth||b.chartWidth,C,I=f.transB,q=function(a,f,b){if("pass"!==A&&a<f||a>b)A?a=Math.min(Math.max(f,a),b):C=!0;return a};a={value:e,lineWidth:m,old:k,force:A,acrossPanes:a.acrossPanes,
translatedValue:g};d(this,"getPlotLinePath",a,function(a){g=F(g,f.translate(e,null,null,k));g=Math.min(Math.max(-1E5,g),1E5);x=n=Math.round(g+I);D=w=Math.round(z-g-I);p(g)?f.horiz?(D=l,w=z-f.bottom,x=n=q(x,c,c+f.width)):(x=c,n=h-f.right,D=w=q(D,l,l+f.height)):(C=!0,A=!1);a.path=C&&!A?null:b.renderer.crispLine(["M",x,D,"L",n,w],m||1)});return a.path},getLinearTickPositions:function(a,b,c){var f,r=q(Math.floor(b/a)*a);c=q(Math.ceil(c/a)*a);var d=[],l;q(r+a)===r&&(l=20);if(this.single)return[b];for(b=
r;b<=c;){d.push(b);b=q(b+a,l);if(b===f)break;f=b}return d},getMinorTickInterval:function(){var a=this.options;return!0===a.minorTicks?F(a.minorTickInterval,"auto"):!1===a.minorTicks?null:a.minorTickInterval},getMinorTickPositions:function(){var a=this,b=a.options,c=a.tickPositions,d=a.minorTickInterval,l=[],p=a.pointRangePadding||0,k=a.min-p,p=a.max+p,g=p-k;if(g&&g/d<a.len/3)if(a.isLog)this.paddedTicks.forEach(function(f,b,c){b&&l.push.apply(l,a.getLogTickPositions(d,c[b-1],c[b],!0))});else if(a.isDatetimeAxis&&
"auto"===this.getMinorTickInterval())l=l.concat(a.getTimeTicks(a.normalizeTimeTickInterval(d),k,p,b.startOfWeek));else for(b=k+(c[0]-k)%d;b<=p&&b!==l[0];b+=d)l.push(b);0!==l.length&&a.trimTicks(l);return l},adjustForMinRange:function(){var a=this.options,b=this.min,c=this.max,d,l,p,k,g,e,m,A;this.isXAxis&&void 0===this.minRange&&!this.isLog&&(u(a.min)||u(a.max)?this.minRange=null:(this.series.forEach(function(a){e=a.xData;for(k=m=a.xIncrement?1:e.length-1;0<k;k--)if(g=e[k]-e[k-1],void 0===p||g<p)p=
g}),this.minRange=Math.min(5*p,this.dataMax-this.dataMin)));c-b<this.minRange&&(l=this.dataMax-this.dataMin>=this.minRange,A=this.minRange,d=(A-c+b)/2,d=[b-d,F(a.min,b-d)],l&&(d[2]=this.isLog?this.log2lin(this.dataMin):this.dataMin),b=B(d),c=[b+A,F(a.max,b+A)],l&&(c[2]=this.isLog?this.log2lin(this.dataMax):this.dataMax),c=h(c),c-b<A&&(d[0]=c-A,d[1]=F(a.min,c-A),b=B(d)));this.min=b;this.max=c},getClosest:function(){var a;this.categories?a=1:this.series.forEach(function(f){var b=f.closestPointRange,
c=f.visible||!f.chart.options.chart.ignoreHiddenSeries;!f.noSharedTooltip&&u(b)&&c&&(a=u(a)?Math.min(a,b):b)});return a},nameToX:function(a){var f=k(this.categories),b=f?this.categories:this.names,c=a.options.x,d;a.series.requireSorting=!1;u(c)||(c=!1===this.options.uniqueNames?a.series.autoIncrement():f?b.indexOf(a.name):F(b.keys[a.name],-1));-1===c?f||(d=b.length):d=c;void 0!==d&&(this.names[d]=a.name,this.names.keys[a.name]=d);return d},updateNames:function(){var a=this,b=this.names;0<b.length&&
(Object.keys(b.keys).forEach(function(a){delete b.keys[a]}),b.length=0,this.minRange=this.userMinRange,(this.series||[]).forEach(function(f){f.xIncrement=null;if(!f.points||f.isDirtyData)a.max=Math.max(a.max,f.xData.length-1),f.processData(),f.generatePoints();f.data.forEach(function(b,c){var r;b&&b.options&&void 0!==b.name&&(r=a.nameToX(b),void 0!==r&&r!==b.x&&(b.x=r,f.xData[c]=r))})}))},setAxisTranslation:function(a){var f=this,b=f.max-f.min,p=f.axisPointRange||0,k,g=0,e=0,A=f.linkedParent,m=!!f.categories,
x=f.transA,D=f.isXAxis;if(D||m||p)k=f.getClosest(),A?(g=A.minPointOffset,e=A.pointRangePadding):f.series.forEach(function(a){var b=m?1:D?F(a.options.pointRange,k,0):f.axisPointRange||0,r=a.options.pointPlacement;p=Math.max(p,b);if(!f.single||m)a=l.xrange&&a instanceof l.xrange?!D:D,g=Math.max(g,a&&c(r)?0:b/2),e=Math.max(e,a&&"on"===r?0:b)}),A=f.ordinalSlope&&k?f.ordinalSlope/k:1,f.minPointOffset=g*=A,f.pointRangePadding=e*=A,f.pointRange=Math.min(p,b),D&&(f.closestPointRange=k);a&&(f.oldTransA=x);
f.translationSlope=f.transA=x=f.staticScale||f.len/(b+e||1);f.transB=f.horiz?f.left:f.bottom;f.minPixelPadding=x*g;d(this,"afterSetAxisTranslation")},minFromRange:function(){return this.max-this.range},setTickInterval:function(f){var c=this,l=c.chart,k=c.options,g=c.isLog,e=c.isDatetimeAxis,A=c.isXAxis,m=c.isLinked,x=k.maxPadding,D=k.minPadding,n,w=k.tickInterval,z=k.tickPixelInterval,h=c.categories,C=p(c.threshold)?c.threshold:null,I=c.softThreshold,t,v,B;e||h||m||this.getTickAmount();v=F(c.userMin,
k.min);B=F(c.userMax,k.max);m?(c.linkedParent=l[c.coll][k.linkedTo],n=c.linkedParent.getExtremes(),c.min=F(n.min,n.dataMin),c.max=F(n.max,n.dataMax),k.type!==c.linkedParent.options.type&&a.error(11,1,l)):(!I&&u(C)&&(c.dataMin>=C?(n=C,D=0):c.dataMax<=C&&(t=C,x=0)),c.min=F(v,n,c.dataMin),c.max=F(B,t,c.dataMax));g&&(c.positiveValuesOnly&&!f&&0>=Math.min(c.min,F(c.dataMin,c.min))&&a.error(10,1,l),c.min=q(c.log2lin(c.min),15),c.max=q(c.log2lin(c.max),15));c.range&&u(c.max)&&(c.userMin=c.min=v=Math.max(c.dataMin,
c.minFromRange()),c.userMax=B=c.max,c.range=null);d(c,"foundExtremes");c.beforePadding&&c.beforePadding();c.adjustForMinRange();!(h||c.axisPointRange||c.usePercentage||m)&&u(c.min)&&u(c.max)&&(l=c.max-c.min)&&(!u(v)&&D&&(c.min-=l*D),!u(B)&&x&&(c.max+=l*x));p(k.softMin)&&!p(c.userMin)&&k.softMin<c.min&&(c.min=v=k.softMin);p(k.softMax)&&!p(c.userMax)&&k.softMax>c.max&&(c.max=B=k.softMax);p(k.floor)&&(c.min=Math.min(Math.max(c.min,k.floor),Number.MAX_VALUE));p(k.ceiling)&&(c.max=Math.max(Math.min(c.max,
k.ceiling),F(c.userMax,-Number.MAX_VALUE)));I&&u(c.dataMin)&&(C=C||0,!u(v)&&c.min<C&&c.dataMin>=C?c.min=c.options.minRange?Math.min(C,c.max-c.minRange):C:!u(B)&&c.max>C&&c.dataMax<=C&&(c.max=c.options.minRange?Math.max(C,c.min+c.minRange):C));c.tickInterval=c.min===c.max||void 0===c.min||void 0===c.max?1:m&&!w&&z===c.linkedParent.options.tickPixelInterval?w=c.linkedParent.tickInterval:F(w,this.tickAmount?(c.max-c.min)/Math.max(this.tickAmount-1,1):void 0,h?1:(c.max-c.min)*z/Math.max(c.len,z));A&&
!f&&c.series.forEach(function(a){a.processData(c.min!==c.oldMin||c.max!==c.oldMax)});c.setAxisTranslation(!0);c.beforeSetTickPositions&&c.beforeSetTickPositions();c.postProcessTickInterval&&(c.tickInterval=c.postProcessTickInterval(c.tickInterval));c.pointRange&&!w&&(c.tickInterval=Math.max(c.pointRange,c.tickInterval));f=F(k.minTickInterval,c.isDatetimeAxis&&c.closestPointRange);!w&&c.tickInterval<f&&(c.tickInterval=f);e||g||w||(c.tickInterval=K(c.tickInterval,null,b(c.tickInterval),F(k.allowDecimals,
!(.5<c.tickInterval&&5>c.tickInterval&&1E3<c.max&&9999>c.max)),!!this.tickAmount));this.tickAmount||(c.tickInterval=c.unsquish());this.setTickPositions()},setTickPositions:function(){var f=this.options,c,b=f.tickPositions;c=this.getMinorTickInterval();var l=f.tickPositioner,k=f.startOnTick,p=f.endOnTick;this.tickmarkOffset=this.categories&&"between"===f.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===c&&this.tickInterval?this.tickInterval/5:c;this.single=this.min===this.max&&
u(this.min)&&!this.tickAmount&&(parseInt(this.min,10)===this.min||!1!==f.allowDecimals);this.tickPositions=c=b&&b.slice();!c&&(!this.ordinalPositions&&(this.max-this.min)/this.tickInterval>Math.max(2*this.len,200)?(c=[this.min,this.max],a.error(19,!1,this.chart)):c=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,f.units),this.min,this.max,f.startOfWeek,this.ordinalPositions,this.closestPointRange,!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,
this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),c.length>this.len&&(c=[c[0],c.pop()],c[0]===c[1]&&(c.length=1)),this.tickPositions=c,l&&(l=l.apply(this,[this.min,this.max])))&&(this.tickPositions=c=l);this.paddedTicks=c.slice(0);this.trimTicks(c,k,p);this.isLinked||(this.single&&2>c.length&&!this.categories&&(this.min-=.5,this.max+=.5),b||l||this.adjustTickAmount());d(this,"afterSetTickPositions")},trimTicks:function(a,c,b){var f=a[0],l=a[a.length-1],k=this.minPointOffset||
0;d(this,"trimTicks");if(!this.isLinked){if(c&&-Infinity!==f)this.min=f;else for(;this.min-k>a[0];)a.shift();if(b)this.max=l;else for(;this.max+k<a[a.length-1];)a.pop();0===a.length&&u(f)&&!this.options.tickPositions&&a.push((l+f)/2)}},alignToOthers:function(){var a={},c,b=this.options;!1===this.chart.options.chart.alignTicks||!1===b.alignTicks||!1===b.startOnTick||!1===b.endOnTick||this.isLog||this.chart[this.coll].forEach(function(f){var b=f.options,b=[f.horiz?b.left:b.top,b.width,b.height,b.pane].join();
f.series.length&&(a[b]?c=!0:a[b]=1)});return c},getTickAmount:function(){var a=this.options,c=a.tickAmount,b=a.tickPixelInterval;!u(a.tickInterval)&&this.len<b&&!this.isRadial&&!this.isLog&&a.startOnTick&&a.endOnTick&&(c=2);!c&&this.alignToOthers()&&(c=Math.ceil(this.len/b)+1);4>c&&(this.finalTickAmt=c,c=5);this.tickAmount=c},adjustTickAmount:function(){var a=this.options,c=this.tickInterval,b=this.tickPositions,d=this.tickAmount,l=this.finalTickAmt,k=b&&b.length,p=F(this.threshold,this.softThreshold?
0:null),g;if(this.hasData()){if(k<d){for(g=this.min;b.length<d;)b.length%2||g===p?b.push(q(b[b.length-1]+c)):b.unshift(q(b[0]-c));this.transA*=(k-1)/(d-1);this.min=a.startOnTick?b[0]:Math.min(this.min,b[0]);this.max=a.endOnTick?b[b.length-1]:Math.max(this.max,b[b.length-1])}else k>d&&(this.tickInterval*=2,this.setTickPositions());if(u(l)){for(c=a=b.length;c--;)(3===l&&1===c%2||2>=l&&0<c&&c<a-1)&&b.splice(c,1);this.finalTickAmt=void 0}}},setScale:function(){var a=this.series.some(function(a){return a.isDirtyData||
a.isDirty||a.xAxis.isDirty}),c;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();(c=this.len!==this.oldAxisLength)||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.resetStacks&&this.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,this.isDirty||(this.isDirty=c||this.min!==this.oldMin||this.max!==
this.oldMax)):this.cleanStacks&&this.cleanStacks();d(this,"afterSetScale")},setExtremes:function(a,c,b,l,k){var f=this,p=f.chart;b=F(b,!0);f.series.forEach(function(a){delete a.kdTree});k=g(k,{min:a,max:c});d(f,"setExtremes",k,function(){f.userMin=a;f.userMax=c;f.eventArgs=k;b&&p.redraw(l)})},zoom:function(a,c){var f=this.dataMin,b=this.dataMax,l=this.options,k=Math.min(f,F(l.min,f)),p=Math.max(b,F(l.max,b));a={newMin:a,newMax:c};d(this,"zoom",a,function(a){var c=a.newMin,d=a.newMax;if(c!==this.min||
d!==this.max)this.allowZoomOutside||(u(f)&&(c<k&&(c=k),c>p&&(c=p)),u(b)&&(d<k&&(d=k),d>p&&(d=p))),this.displayBtn=void 0!==c||void 0!==d,this.setExtremes(c,d,!1,void 0,{trigger:"zoom"});a.zoomed=!0});return a.zoomed},setAxisSize:function(){var f=this.chart,c=this.options,b=c.offsets||[0,0,0,0],d=this.horiz,l=this.width=Math.round(a.relativeLength(F(c.width,f.plotWidth-b[3]+b[1]),f.plotWidth)),k=this.height=Math.round(a.relativeLength(F(c.height,f.plotHeight-b[0]+b[2]),f.plotHeight)),p=this.top=Math.round(a.relativeLength(F(c.top,
f.plotTop+b[0]),f.plotHeight,f.plotTop)),c=this.left=Math.round(a.relativeLength(F(c.left,f.plotLeft+b[3]),f.plotWidth,f.plotLeft));this.bottom=f.chartHeight-k-p;this.right=f.chartWidth-l-c;this.len=Math.max(d?l:k,0);this.pos=d?c:p},getExtremes:function(){var a=this.isLog;return{min:a?q(this.lin2log(this.min)):this.min,max:a?q(this.lin2log(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var f=this.isLog,c=f?this.lin2log(this.min):
this.min,f=f?this.lin2log(this.max):this.max;null===a||-Infinity===a?a=c:Infinity===a?a=f:c>a?a=c:f<a&&(a=f);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){var f=(F(a,0)-90*this.side+720)%360;a={align:"center"};d(this,"autoLabelAlign",a,function(a){15<f&&165>f?a.align="right":195<f&&345>f&&(a.align="left")});return a.align},tickSize:function(a){var f=this.options,c=f[a+"Length"],b=F(f[a+"Width"],"tick"===a&&this.isXAxis&&!this.categories?1:0),l;b&&c&&("inside"===f[a+"Position"]&&(c=
-c),l=[c,b]);a={tickSize:l};d(this,"afterTickSize",a);return a.tickSize},labelMetrics:function(){var a=this.tickPositions&&this.tickPositions[0]||0;return this.chart.renderer.fontMetrics(this.options.labels.style&&this.options.labels.style.fontSize,this.ticks[a]&&this.ticks[a].label)},unsquish:function(){var a=this.options.labels,c=this.horiz,b=this.tickInterval,d=b,l=this.len/(((this.categories?1:0)+this.max-this.min)/b),k,p=a.rotation,g=this.labelMetrics(),e,A=Number.MAX_VALUE,m,x=this.max-this.min,
D=function(a){var f=a/(l||1),f=1<f?Math.ceil(f):1;f*b>x&&Infinity!==a&&Infinity!==l&&(f=Math.ceil(x/b));return q(f*b)};c?(m=!a.staggerLines&&!a.step&&(u(p)?[p]:l<F(a.autoRotationLimit,80)&&a.autoRotation))&&m.forEach(function(a){var f;if(a===p||a&&-90<=a&&90>=a)e=D(Math.abs(g.h/Math.sin(v*a))),f=e+Math.abs(a/360),f<A&&(A=f,k=a,d=e)}):a.step||(d=D(g.h));this.autoRotation=m;this.labelRotation=F(k,p);return d},getSlotWidth:function(a){var f=this.chart,c=this.horiz,b=this.options.labels,d=Math.max(this.tickPositions.length-
(this.categories?0:1),1),l=f.margin[3];return a&&a.slotWidth||c&&2>(b.step||0)&&!b.rotation&&(this.staggerLines||1)*this.len/d||!c&&(b.style&&parseInt(b.style.width,10)||l&&l-f.spacing[3]||.33*f.chartWidth)},renderUnsquish:function(){var a=this.chart,b=a.renderer,d=this.tickPositions,l=this.ticks,k=this.options.labels,p=k&&k.style||{},g=this.horiz,e=this.getSlotWidth(),A=Math.max(1,Math.round(e-2*(k.padding||5))),m={},x=this.labelMetrics(),D=k.style&&k.style.textOverflow,n,w,z=0,C;c(k.rotation)||
(m.rotation=k.rotation||0);d.forEach(function(a){(a=l[a])&&a.label&&a.label.textPxLength>z&&(z=a.label.textPxLength)});this.maxLabelLength=z;if(this.autoRotation)z>A&&z>x.h?m.rotation=this.labelRotation:this.labelRotation=0;else if(e&&(n=A,!D))for(w="clip",A=d.length;!g&&A--;)if(C=d[A],C=l[C].label)C.styles&&"ellipsis"===C.styles.textOverflow?C.css({textOverflow:"clip"}):C.textPxLength>e&&C.css({width:e+"px"}),C.getBBox().height>this.len/d.length-(x.h-x.f)&&(C.specificTextOverflow="ellipsis");m.rotation&&
(n=z>.5*a.chartHeight?.33*a.chartHeight:z,D||(w="ellipsis"));if(this.labelAlign=k.align||this.autoLabelAlign(this.labelRotation))m.align=this.labelAlign;d.forEach(function(a){var f=(a=l[a])&&a.label,c=p.width,b={};f&&(f.attr(m),a.shortenLabel?a.shortenLabel():n&&!c&&"nowrap"!==p.whiteSpace&&(n<f.textPxLength||"SPAN"===f.element.tagName)?(b.width=n,D||(b.textOverflow=f.specificTextOverflow||w),f.css(b)):f.styles&&f.styles.width&&!b.width&&!c&&f.css({width:null}),delete f.specificTextOverflow,a.rotation=
m.rotation)},this);this.tickRotCorr=b.rotCorr(x.b,this.labelRotation||0,0!==this.side)},hasData:function(){return this.series.some(function(a){return a.hasData()})||this.options.showEmpty&&u(this.min)&&u(this.max)},addTitle:function(a){var f=this.chart.renderer,c=this.horiz,b=this.opposite,d=this.options.title,l,k=this.chart.styledMode;this.axisTitle||((l=d.textAlign)||(l=(c?{low:"left",middle:"center",high:"right"}:{low:b?"right":"left",middle:"center",high:b?"left":"right"})[d.align]),this.axisTitle=
f.text(d.text,0,0,d.useHTML).attr({zIndex:7,rotation:d.rotation||0,align:l}).addClass("highcharts-axis-title"),k||this.axisTitle.css(x(d.style)),this.axisTitle.add(this.axisGroup),this.axisTitle.isNew=!0);k||d.style.width||this.isRadial||this.axisTitle.css({width:this.len});this.axisTitle[a?"show":"hide"](!0)},generateTick:function(a){var f=this.ticks;f[a]?f[a].addLabel():f[a]=new z(this,a)},getOffset:function(){var a=this,c=a.chart,b=c.renderer,l=a.options,k=a.tickPositions,p=a.ticks,g=a.horiz,e=
a.side,A=c.inverted&&!a.isZAxis?[1,0,3,2][e]:e,m,x,D=0,n,z=0,C=l.title,h=l.labels,I=0,q=c.axisOffset,c=c.clipOffset,K=[-1,1,1,-1][e],t=l.className,v=a.axisParent;m=a.hasData();a.showAxis=x=m||F(l.showEmpty,!0);a.staggerLines=a.horiz&&h.staggerLines;a.axisGroup||(a.gridGroup=b.g("grid").attr({zIndex:l.gridZIndex||1}).addClass("highcharts-"+this.coll.toLowerCase()+"-grid "+(t||"")).add(v),a.axisGroup=b.g("axis").attr({zIndex:l.zIndex||2}).addClass("highcharts-"+this.coll.toLowerCase()+" "+(t||"")).add(v),
a.labelGroup=b.g("axis-labels").attr({zIndex:h.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels "+(t||"")).add(v));m||a.isLinked?(k.forEach(function(c,b){a.generateTick(c,b)}),a.renderUnsquish(),a.reserveSpaceDefault=0===e||2===e||{1:"left",3:"right"}[e]===a.labelAlign,F(h.reserveSpace,"center"===a.labelAlign?!0:null,a.reserveSpaceDefault)&&k.forEach(function(a){I=Math.max(p[a].getLabelSize(),I)}),a.staggerLines&&(I*=a.staggerLines),a.labelOffset=I*(a.opposite?-1:1)):w(p,function(a,
c){a.destroy();delete p[c]});C&&C.text&&!1!==C.enabled&&(a.addTitle(x),x&&!1!==C.reserveSpace&&(a.titleOffset=D=a.axisTitle.getBBox()[g?"height":"width"],n=C.offset,z=u(n)?0:F(C.margin,g?5:10)));a.renderLine();a.offset=K*F(l.offset,q[e]?q[e]+(l.margin||0):0);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};b=0===e?-a.labelMetrics().h:2===e?a.tickRotCorr.y:0;z=Math.abs(I)+z;I&&(z=z-b+K*(g?F(h.y,a.tickRotCorr.y+8*K):h.x));a.axisTitleMargin=F(n,z);a.getMaxLabelDimensions&&(a.maxLabelDimensions=a.getMaxLabelDimensions(p,
k));g=this.tickSize("tick");q[e]=Math.max(q[e],a.axisTitleMargin+D+K*a.offset,z,k&&k.length&&g?g[0]+K*a.offset:0);l=l.offset?0:2*Math.floor(a.axisLine.strokeWidth()/2);c[A]=Math.max(c[A],l);d(this,"afterGetOffset")},getLinePath:function(a){var c=this.chart,b=this.opposite,f=this.offset,d=this.horiz,l=this.left+(b?this.width:0)+f,f=c.chartHeight-this.bottom-(b?this.height:0)+f;b&&(a*=-1);return c.renderer.crispLine(["M",d?this.left:l,d?f:this.top,"L",d?c.chartWidth-this.right:l,d?f:c.chartHeight-this.bottom],
a)},renderLine:function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),this.chart.styledMode||this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,zIndex:7}))},getTitlePosition:function(){var a=this.horiz,c=this.left,b=this.top,l=this.len,k=this.options.title,p=a?c:b,e=this.opposite,g=this.offset,A=k.x||0,m=k.y||0,x=this.axisTitle,D=this.chart.renderer.fontMetrics(k.style&&k.style.fontSize,x),x=Math.max(x.getBBox(null,
0).height-D.h-1,0),l={low:p+(a?0:l),middle:p+l/2,high:p+(a?l:0)}[k.align],c=(a?b+this.height:c)+(a?1:-1)*(e?-1:1)*this.axisTitleMargin+[-x,x,D.f,-x][this.side],a={x:a?l+A:c+(e?this.width:0)+g+A,y:a?c+m-(e?this.height:0)+g:l+m};d(this,"afterGetTitlePosition",{titlePosition:a});return a},renderMinorTick:function(a){var c=this.chart.hasRendered&&p(this.oldMin),b=this.minorTicks;b[a]||(b[a]=new z(this,a,"minor"));c&&b[a].isNew&&b[a].render(null,!0);b[a].render(null,!1,1)},renderTick:function(a,c){var b=
this.isLinked,f=this.ticks,d=this.chart.hasRendered&&p(this.oldMin);if(!b||a>=this.min&&a<=this.max)f[a]||(f[a]=new z(this,a)),d&&f[a].isNew&&f[a].render(c,!0,-1),f[a].render(c)},render:function(){var c=this,b=c.chart,l=c.options,k=c.isLog,e=c.isLinked,g=c.tickPositions,m=c.axisTitle,x=c.ticks,D=c.minorTicks,n=c.alternateBands,C=l.stackLabels,h=l.alternateGridColor,I=c.tickmarkOffset,q=c.axisLine,F=c.showAxis,K=H(b.renderer.globalAnimation),t,v;c.labelEdge.length=0;c.overlap=!1;[x,D,n].forEach(function(a){w(a,
function(a){a.isActive=!1})});if(c.hasData()||e)c.minorTickInterval&&!c.categories&&c.getMinorTickPositions().forEach(function(a){c.renderMinorTick(a)}),g.length&&(g.forEach(function(a,b){c.renderTick(a,b)}),I&&(0===c.min||c.single)&&(x[-1]||(x[-1]=new z(c,-1,null,!0)),x[-1].render(-1))),h&&g.forEach(function(f,l){v=void 0!==g[l+1]?g[l+1]+I:c.max-I;0===l%2&&f<c.max&&v<=c.max+(b.polar?-I:I)&&(n[f]||(n[f]=new a.PlotLineOrBand(c)),t=f+I,n[f].options={from:k?c.lin2log(t):t,to:k?c.lin2log(v):v,color:h},
n[f].render(),n[f].isActive=!0)}),c._addedPlotLB||((l.plotLines||[]).concat(l.plotBands||[]).forEach(function(a){c.addPlotBandOrLine(a)}),c._addedPlotLB=!0);[x,D,n].forEach(function(a){var c,f=[],l=K.duration;w(a,function(a,c){a.isActive||(a.render(c,!1,0),a.isActive=!1,f.push(c))});A(function(){for(c=f.length;c--;)a[f[c]]&&!a[f[c]].isActive&&(a[f[c]].destroy(),delete a[f[c]])},a!==n&&b.hasRendered&&l?l:0)});q&&(q[q.isPlaced?"animate":"attr"]({d:this.getLinePath(q.strokeWidth())}),q.isPlaced=!0,q[F?
"show":"hide"](!0));m&&F&&(l=c.getTitlePosition(),p(l.y)?(m[m.isNew?"attr":"animate"](l),m.isNew=!1):(m.attr("y",-9999),m.isNew=!0));C&&C.enabled&&c.renderStackTotals();c.isDirty=!1;d(this,"afterRender")},redraw:function(){this.visible&&(this.render(),this.plotLinesAndBands.forEach(function(a){a.render()}));this.series.forEach(function(a){a.isDirty=!0})},keepProps:"extKey hcEvents names series userMax userMin".split(" "),destroy:function(a){var c=this,b=c.stacks,f=c.plotLinesAndBands,l;d(this,"destroy",
{keepEvents:a});a||C(c);w(b,function(a,c){n(a);b[c]=null});[c.ticks,c.minorTicks,c.alternateBands].forEach(function(a){n(a)});if(f)for(a=f.length;a--;)f[a].destroy();"stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function(a){c[a]&&(c[a]=c[a].destroy())});for(l in c.plotLinesAndBandsGroups)c.plotLinesAndBandsGroups[l]=c.plotLinesAndBandsGroups[l].destroy();w(c,function(a,b){-1===c.keepProps.indexOf(b)&&delete c[b]})},drawCrosshair:function(a,
c){var b,f=this.crosshair,l=F(f.snap,!0),k,p=this.cross;d(this,"drawCrosshair",{e:a,point:c});a||(a=this.cross&&this.cross.e);if(this.crosshair&&!1!==(u(c)||!l)){l?u(c)&&(k=F(c.crosshairPos,this.isXAxis?c.plotX:this.len-c.plotY)):k=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos);u(k)&&(b=this.getPlotLinePath({value:c&&(this.isXAxis?c.x:F(c.stackY,c.y)),translatedValue:k})||null);if(!u(b)){this.hideCrosshair();return}l=this.categories&&!this.isRadial;p||(this.cross=p=this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+
(l?"category ":"thin ")+f.className).attr({zIndex:F(f.zIndex,2)}).add(),this.chart.styledMode||(p.attr({stroke:f.color||(l?e("#ccd6eb").setOpacity(.25).get():"#cccccc"),"stroke-width":F(f.width,1)}).css({"pointer-events":"none"}),f.dashStyle&&p.attr({dashstyle:f.dashStyle})));p.show().attr({d:b});l&&!f.width&&p.attr({"stroke-width":this.transA});this.cross.e=a}else this.hideCrosshair();d(this,"afterDrawCrosshair",{e:a,point:c})},hideCrosshair:function(){this.cross&&this.cross.hide();d(this,"afterHideCrosshair")}});
return a.Axis=I});J(G,"parts/DateTimeAxis.js",[G["parts/Globals.js"]],function(a){var E=a.Axis,H=a.getMagnitude,B=a.normalizeTickInterval,h=a.timeUnits;E.prototype.getTimeTicks=function(){return this.chart.time.getTimeTicks.apply(this.chart.time,arguments)};E.prototype.normalizeTimeTickInterval=function(a,q){var e=q||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],
["year",null]];q=e[e.length-1];var u=h[q[0]],v=q[1],n;for(n=0;n<e.length&&!(q=e[n],u=h[q[0]],v=q[1],e[n+1]&&a<=(u*v[v.length-1]+h[e[n+1][0]])/2);n++);u===h.year&&a<5*u&&(v=[1,2,5]);a=B(a/u,v,"year"===q[0]?Math.max(H(a/u),1):1);return{unitRange:u,count:a,unitName:q[0]}}});J(G,"parts/LogarithmicAxis.js",[G["parts/Globals.js"]],function(a){var E=a.Axis,H=a.getMagnitude,B=a.normalizeTickInterval,h=a.pick;E.prototype.getLogTickPositions=function(a,q,t,u){var e=this.options,n=this.len,g=[];u||(this._minorAutoInterval=
null);if(.5<=a)a=Math.round(a),g=this.getLinearTickPositions(a,q,t);else if(.08<=a)for(var n=Math.floor(q),d,m,b,k,p,e=.3<a?[1,2,4]:.15<a?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];n<t+1&&!p;n++)for(m=e.length,d=0;d<m&&!p;d++)b=this.log2lin(this.lin2log(n)*e[d]),b>q&&(!u||k<=t)&&void 0!==k&&g.push(k),k>t&&(p=!0),k=b;else q=this.lin2log(q),t=this.lin2log(t),a=u?this.getMinorTickInterval():e.tickInterval,a=h("auto"===a?null:a,this._minorAutoInterval,e.tickPixelInterval/(u?5:1)*(t-q)/((u?n/this.tickPositions.length:
n)||1)),a=B(a,null,H(a)),g=this.getLinearTickPositions(a,q,t).map(this.log2lin),u||(this._minorAutoInterval=a/5);u||(this.tickInterval=a);return g};E.prototype.log2lin=function(a){return Math.log(a)/Math.LN10};E.prototype.lin2log=function(a){return Math.pow(10,a)}});J(G,"parts/PlotLineOrBand.js",[G["parts/Globals.js"],G["parts/Axis.js"]],function(a,E){var H=a.arrayMax,B=a.arrayMin,h=a.defined,e=a.destroyObjectProperties,q=a.erase,t=a.merge,u=a.pick;a.PlotLineOrBand=function(a,e){this.axis=a;e&&(this.options=
e,this.id=e.id)};a.PlotLineOrBand.prototype={render:function(){a.fireEvent(this,"render");var e=this,n=e.axis,g=n.horiz,d=e.options,m=d.label,b=e.label,k=d.to,p=d.from,c=d.value,x=h(p)&&h(k),q=h(c),w=e.svgElem,F=!w,C=[],l=d.color,D=u(d.zIndex,0),A=d.events,C={"class":"highcharts-plot-"+(x?"band ":"line ")+(d.className||"")},z={},I=n.chart.renderer,f=x?"bands":"lines";n.isLog&&(p=n.log2lin(p),k=n.log2lin(k),c=n.log2lin(c));n.chart.styledMode||(q?(C.stroke=l,C["stroke-width"]=d.width,d.dashStyle&&(C.dashstyle=
d.dashStyle)):x&&(l&&(C.fill=l),d.borderWidth&&(C.stroke=d.borderColor,C["stroke-width"]=d.borderWidth)));z.zIndex=D;f+="-"+D;(l=n.plotLinesAndBandsGroups[f])||(n.plotLinesAndBandsGroups[f]=l=I.g("plot-"+f).attr(z).add());F&&(e.svgElem=w=I.path().attr(C).add(l));if(q)C=n.getPlotLinePath({value:c,lineWidth:w.strokeWidth(),acrossPanes:d.acrossPanes});else if(x)C=n.getPlotBandPath(p,k,d);else return;(F||!w.d)&&C&&C.length?(w.attr({d:C}),A&&a.objectEach(A,function(a,c){w.on(c,function(a){A[c].apply(e,
[a])})})):w&&(C?(w.show(!0),w.animate({d:C})):w.d&&(w.hide(),b&&(e.label=b=b.destroy())));m&&h(m.text)&&C&&C.length&&0<n.width&&0<n.height&&!C.isFlat?(m=t({align:g&&x&&"center",x:g?!x&&4:10,verticalAlign:!g&&x&&"middle",y:g?x?16:10:x?6:-4,rotation:g&&!x&&90},m),this.renderLabel(m,C,x,D)):b&&b.hide();return e},renderLabel:function(a,e,g,d){var m=this.label,b=this.axis.chart.renderer;m||(m={align:a.textAlign||a.align,rotation:a.rotation,"class":"highcharts-plot-"+(g?"band":"line")+"-label "+(a.className||
"")},m.zIndex=d,this.label=m=b.text(a.text,0,0,a.useHTML).attr(m).add(),this.axis.chart.styledMode||m.css(a.style));d=e.xBounds||[e[1],e[4],g?e[6]:e[1]];e=e.yBounds||[e[2],e[5],g?e[7]:e[2]];g=B(d);b=B(e);m.align(a,!1,{x:g,y:b,width:H(d)-g,height:H(e)-b});m.show(!0)},destroy:function(){q(this.axis.plotLinesAndBands,this);delete this.axis;e(this)}};a.extend(E.prototype,{getPlotBandPath:function(a,e){var g=this.getPlotLinePath({value:e,force:!0,acrossPanes:this.options.acrossPanes}),d=this.getPlotLinePath({value:a,
force:!0,acrossPanes:this.options.acrossPanes}),m=[],b=this.horiz,k=1,p;a=a<this.min&&e<this.min||a>this.max&&e>this.max;if(d&&g)for(a&&(p=d.toString()===g.toString(),k=0),a=0;a<d.length;a+=6)b&&g[a+1]===d[a+1]?(g[a+1]+=k,g[a+4]+=k):b||g[a+2]!==d[a+2]||(g[a+2]+=k,g[a+5]+=k),m.push("M",d[a+1],d[a+2],"L",d[a+4],d[a+5],g[a+4],g[a+5],g[a+1],g[a+2],"z"),m.isFlat=p;return m},addPlotBand:function(a){return this.addPlotBandOrLine(a,"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,"plotLines")},
addPlotBandOrLine:function(e,n){var g=(new a.PlotLineOrBand(this,e)).render(),d=this.userOptions;g&&(n&&(d[n]=d[n]||[],d[n].push(e)),this.plotLinesAndBands.push(g));return g},removePlotBandOrLine:function(a){for(var e=this.plotLinesAndBands,g=this.options,d=this.userOptions,m=e.length;m--;)e[m].id===a&&e[m].destroy();[g.plotLines||[],d.plotLines||[],g.plotBands||[],d.plotBands||[]].forEach(function(b){for(m=b.length;m--;)b[m].id===a&&q(b,b[m])})},removePlotBand:function(a){this.removePlotBandOrLine(a)},
removePlotLine:function(a){this.removePlotBandOrLine(a)}})});J(G,"parts/Tooltip.js",[G["parts/Globals.js"]],function(a){var E=a.doc,H=a.extend,B=a.format,h=a.isNumber,e=a.merge,q=a.pick,t=a.splat,u=a.syncTimeout,v=a.timeUnits;a.Tooltip=function(){this.init.apply(this,arguments)};a.Tooltip.prototype={init:function(a,e){this.chart=a;this.options=e;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.split=e.split&&!a.inverted;this.shared=e.shared||this.split;this.outside=q(e.outside,!(!a.scrollablePixelsX&&
!a.scrollablePixelsY))&&!this.split},cleanSplit:function(a){this.chart.series.forEach(function(e){var d=e&&e.tt;d&&(!d.isActive||a?e.tt=d.destroy():d.isActive=!1)})},applyFilter:function(){var a=this.chart;a.renderer.definition({tagName:"filter",id:"drop-shadow-"+a.index,opacity:.5,children:[{tagName:"feGaussianBlur","in":"SourceAlpha",stdDeviation:1},{tagName:"feOffset",dx:1,dy:1},{tagName:"feComponentTransfer",children:[{tagName:"feFuncA",type:"linear",slope:.3}]},{tagName:"feMerge",children:[{tagName:"feMergeNode"},
{tagName:"feMergeNode","in":"SourceGraphic"}]}]});a.renderer.definition({tagName:"style",textContent:".highcharts-tooltip-"+a.index+"{filter:url(#drop-shadow-"+a.index+")}"})},getLabel:function(){var e=this,g=this.chart.renderer,d=this.chart.styledMode,m=this.options,b,k;this.label||(this.outside&&(this.container=b=a.doc.createElement("div"),b.className="highcharts-tooltip-container",a.css(b,{position:"absolute",top:"1px",pointerEvents:m.style&&m.style.pointerEvents,zIndex:3}),a.doc.body.appendChild(b),
this.renderer=g=new a.Renderer(b,0,0)),this.split?this.label=g.g("tooltip"):(this.label=g.label("",0,0,m.shape||"callout",null,null,m.useHTML,null,"tooltip").attr({padding:m.padding,r:m.borderRadius}),d||this.label.attr({fill:m.backgroundColor,"stroke-width":m.borderWidth}).css(m.style).shadow(m.shadow)),d&&(this.applyFilter(),this.label.addClass("highcharts-tooltip-"+this.chart.index)),this.outside&&(k={x:this.label.xSetter,y:this.label.ySetter},this.label.xSetter=function(a,c){k[c].call(this.label,
e.distance);b.style.left=a+"px"},this.label.ySetter=function(a,c){k[c].call(this.label,e.distance);b.style.top=a+"px"}),this.label.attr({zIndex:8}).add());return this.label},update:function(a){this.destroy();e(!0,this.chart.options.tooltip.userOptions,a);this.init(this.chart,e(!0,this.options,a))},destroy:function(){this.label&&(this.label=this.label.destroy());this.split&&this.tt&&(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());this.renderer&&(this.renderer=this.renderer.destroy(),a.discardElement(this.container));
a.clearTimeout(this.hideTimer);a.clearTimeout(this.tooltipTimeout)},move:function(e,g,d,m){var b=this,k=b.now,p=!1!==b.options.animation&&!b.isHidden&&(1<Math.abs(e-k.x)||1<Math.abs(g-k.y)),c=b.followPointer||1<b.len;H(k,{x:p?(2*k.x+e)/3:e,y:p?(k.y+g)/2:g,anchorX:c?void 0:p?(2*k.anchorX+d)/3:d,anchorY:c?void 0:p?(k.anchorY+m)/2:m});b.getLabel().attr(k);p&&(a.clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){b&&b.move(e,g,d,m)},32))},hide:function(e){var g=this;a.clearTimeout(this.hideTimer);
e=q(e,this.options.hideDelay,500);this.isHidden||(this.hideTimer=u(function(){g.getLabel()[e?"fadeOut":"hide"]();g.isHidden=!0},e))},getAnchor:function(a,e){var d=this.chart,g=d.pointer,b=d.inverted,k=d.plotTop,p=d.plotLeft,c=0,x=0,h,w;a=t(a);this.followPointer&&e?(void 0===e.chartX&&(e=g.normalize(e)),a=[e.chartX-d.plotLeft,e.chartY-k]):a[0].tooltipPos?a=a[0].tooltipPos:(a.forEach(function(a){h=a.series.yAxis;w=a.series.xAxis;c+=a.plotX+(!b&&w?w.left-p:0);x+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+
(!b&&h?h.top-k:0)}),c/=a.length,x/=a.length,a=[b?d.plotWidth-x:c,this.shared&&!b&&1<a.length&&e?e.chartY-k:b?d.plotHeight-c:x]);return a.map(Math.round)},getPosition:function(a,e,d){var g=this.chart,b=this.distance,k={},p=g.inverted&&d.h||0,c,x=this.outside,h=x?E.documentElement.clientWidth-2*b:g.chartWidth,w=x?Math.max(E.body.scrollHeight,E.documentElement.scrollHeight,E.body.offsetHeight,E.documentElement.offsetHeight,E.documentElement.clientHeight):g.chartHeight,n=g.pointer.chartPosition,C=["y",
w,e,(x?n.top-b:0)+d.plotY+g.plotTop,x?0:g.plotTop,x?w:g.plotTop+g.plotHeight],l=["x",h,a,(x?n.left-b:0)+d.plotX+g.plotLeft,x?0:g.plotLeft,x?h:g.plotLeft+g.plotWidth],D=!this.followPointer&&q(d.ttBelow,!g.inverted===!!d.negative),A=function(a,c,f,l,d,e){var g=f<l-b,A=l+b+f<c,m=l-b-f;l+=b;if(D&&A)k[a]=l;else if(!D&&g)k[a]=m;else if(g)k[a]=Math.min(e-f,0>m-p?m:m-p);else if(A)k[a]=Math.max(d,l+p+f>c?l:l+p);else return!1},z=function(a,c,f,l){var d;l<b||l>c-b?d=!1:k[a]=l<f/2?1:l>c-f/2?c-f-2:l-f/2;return d},
I=function(a){var b=C;C=l;l=b;c=a},f=function(){!1!==A.apply(0,C)?!1!==z.apply(0,l)||c||(I(!0),f()):c?k.x=k.y=0:(I(!0),f())};(g.inverted||1<this.len)&&I();f();return k},defaultFormatter:function(a){var e=this.points||t(this),d;d=[a.tooltipFooterHeaderFormatter(e[0])];d=d.concat(a.bodyFormatter(e));d.push(a.tooltipFooterHeaderFormatter(e[0],!0));return d},refresh:function(e,g){var d=this.chart,m=this.options,b,k=e,p,c={},x,h=[];x=m.formatter||this.defaultFormatter;var c=this.shared,w=d.styledMode,
n=[];m.enabled&&(a.clearTimeout(this.hideTimer),this.followPointer=t(k)[0].series.tooltipOptions.followPointer,p=this.getAnchor(k,g),g=p[0],b=p[1],!c||k.series&&k.series.noSharedTooltip?c=k.getLabelConfig():(n=d.pointer.getActiveSeries(k),d.series.forEach(function(a){(a.options.inactiveOtherPoints||-1===n.indexOf(a))&&a.setState("inactive",!0)}),k.forEach(function(a){a.setState("hover");h.push(a.getLabelConfig())}),c={x:k[0].category,y:k[0].y},c.points=h,k=k[0]),this.len=h.length,x=x.call(c,this),
c=k.series,this.distance=q(c.tooltipOptions.distance,16),!1===x?this.hide():(d=this.getLabel(),this.isHidden&&d.attr({opacity:1}).show(),this.split?this.renderSplit(x,t(e)):(m.style.width&&!w||d.css({width:this.chart.spacingBox.width}),d.attr({text:x&&x.join?x.join(""):x}),d.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+q(k.colorIndex,c.colorIndex)),w||d.attr({stroke:m.borderColor||k.color||c.color||"#666666"}),this.updatePosition({plotX:g,plotY:b,negative:k.negative,ttBelow:k.ttBelow,
h:p[2]||0})),this.isHidden=!1),a.fireEvent(this,"refresh"))},renderSplit:function(e,g){var d=this,m=[],b=this.chart,k=b.renderer,p=!0,c=this.options,x=0,h,w=this.getLabel(),n=b.plotTop;a.isString(e)&&(e=[!1,e]);e.slice(0,g.length+1).forEach(function(a,l){if(!1!==a&&""!==a){l=g[l-1]||{isHeader:!0,plotX:g[0].plotX,plotY:b.plotHeight};var e=l.series||d,A=e.tt,z=l.series||{},C="highcharts-color-"+q(l.colorIndex,z.colorIndex,"none");A||(A={padding:c.padding,r:c.borderRadius},b.styledMode||(A.fill=c.backgroundColor,
A["stroke-width"]=c.borderWidth),e.tt=A=k.label(null,null,null,(l.isHeader?c.headerShape:c.shape)||"callout",null,null,c.useHTML).addClass("highcharts-tooltip-box "+C).attr(A).add(w));A.isActive=!0;A.attr({text:a});b.styledMode||A.css(c.style).shadow(c.shadow).attr({stroke:c.borderColor||l.color||z.color||"#333333"});a=A.getBBox();z=a.width+A.strokeWidth();l.isHeader?(x=a.height,b.xAxis[0].opposite&&(h=!0,n-=x),z=Math.max(0,Math.min(l.plotX+b.plotLeft-z/2,b.chartWidth+(b.scrollablePixelsX?b.scrollablePixelsX-
b.marginRight:0)-z))):z=l.plotX+b.plotLeft-q(c.distance,16)-z;0>z&&(p=!1);a=(l.series&&l.series.yAxis&&l.series.yAxis.pos)+(l.plotY||0);a-=n;l.isHeader&&(a=h?-x:b.plotHeight+x);m.push({target:a,rank:l.isHeader?1:0,size:e.tt.getBBox().height+1,point:l,x:z,tt:A})}});this.cleanSplit();c.positioner&&m.forEach(function(a){var b=c.positioner.call(d,a.tt.getBBox().width,a.size,a.point);a.x=b.x;a.align=0;a.target=b.y;a.rank=q(b.rank,a.rank)});a.distribute(m,b.plotHeight+x);m.forEach(function(a){var l=a.point,
k=l.series;a.tt.attr({visibility:void 0===a.pos?"hidden":"inherit",x:p||l.isHeader||c.positioner?a.x:l.plotX+b.plotLeft+d.distance,y:a.pos+n,anchorX:l.isHeader?l.plotX+b.plotLeft:l.plotX+k.xAxis.pos,anchorY:l.isHeader?b.plotTop+b.plotHeight/2:l.plotY+k.yAxis.pos})})},updatePosition:function(a){var e=this.chart,d=this.getLabel(),m=(this.options.positioner||this.getPosition).call(this,d.width,d.height,a),b=a.plotX+e.plotLeft;a=a.plotY+e.plotTop;var k;this.outside&&(k=(this.options.borderWidth||0)+2*
this.distance,this.renderer.setSize(d.width+k,d.height+k,!1),b+=e.pointer.chartPosition.left-m.x,a+=e.pointer.chartPosition.top-m.y);this.move(Math.round(m.x),Math.round(m.y||0),b,a)},getDateFormat:function(a,e,d,m){var b=this.chart.time,k=b.dateFormat("%m-%d %H:%M:%S.%L",e),p,c,g={millisecond:15,second:12,minute:9,hour:6,day:3},h="millisecond";for(c in v){if(a===v.week&&+b.dateFormat("%w",e)===d&&"00:00:00.000"===k.substr(6)){c="week";break}if(v[c]>a){c=h;break}if(g[c]&&k.substr(g[c])!=="01-01 00:00:00.000".substr(g[c]))break;
"week"!==c&&(h=c)}c&&(p=b.resolveDTLFormat(m[c]).main);return p},getXDateFormat:function(a,e,d){e=e.dateTimeLabelFormats;var g=d&&d.closestPointRange;return(g?this.getDateFormat(g,a.x,d.options.startOfWeek,e):e.day)||e.year},tooltipFooterHeaderFormatter:function(e,g){var d=g?"footer":"header",m=e.series,b=m.tooltipOptions,k=b.xDateFormat,p=m.xAxis,c=p&&"datetime"===p.options.type&&h(e.key),x=b[d+"Format"];g={isFooter:g,labelConfig:e};a.fireEvent(this,"headerFormatter",g,function(a){c&&!k&&(k=this.getXDateFormat(e,
b,p));c&&k&&(e.point&&e.point.tooltipDateKeys||["key"]).forEach(function(a){x=x.replace("{point."+a+"}","{point."+a+":"+k+"}")});m.chart.styledMode&&(x=this.styledModeFormat(x));a.text=B(x,{point:e,series:m},this.chart.time)});return g.text},bodyFormatter:function(a){return a.map(function(a){var d=a.series.tooltipOptions;return(d[(a.point.formatPrefix||"point")+"Formatter"]||a.point.tooltipFormatter).call(a.point,d[(a.point.formatPrefix||"point")+"Format"]||"")})},styledModeFormat:function(a){return a.replace('style\x3d"font-size: 10px"',
'class\x3d"highcharts-header"').replace(/style="color:{(point|series)\.color}"/g,'class\x3d"highcharts-color-{$1.colorIndex}"')}}});J(G,"parts/Pointer.js",[G["parts/Globals.js"]],function(a){var E=a.addEvent,H=a.attr,B=a.charts,h=a.color,e=a.css,q=a.defined,t=a.extend,u=a.find,v=a.fireEvent,n=a.isNumber,g=a.isObject,d=a.offset,m=a.pick,b=a.splat,k=a.Tooltip;a.Pointer=function(a,c){this.init(a,c)};a.Pointer.prototype={init:function(a,c){this.options=c;this.chart=a;this.runChartClick=c.chart.events&&
!!c.chart.events.click;this.pinchDown=[];this.lastValidTouch={};k&&(a.tooltip=new k(a,c.tooltip),this.followTouchMove=m(c.tooltip.followTouchMove,!0));this.setDOMEvents()},zoomOption:function(a){var c=this.chart,b=c.options.chart,d=b.zoomType||"",c=c.inverted;/touch/.test(a.type)&&(d=m(b.pinchType,d));this.zoomX=a=/x/.test(d);this.zoomY=d=/y/.test(d);this.zoomHor=a&&!c||d&&c;this.zoomVert=d&&!c||a&&c;this.hasZoom=a||d},normalize:function(a,c){var b;b=a.touches?a.touches.length?a.touches.item(0):a.changedTouches[0]:
a;c||(this.chartPosition=c=d(this.chart.container));return t(a,{chartX:Math.round(b.pageX-c.left),chartY:Math.round(b.pageY-c.top)})},getCoordinates:function(a){var c={xAxis:[],yAxis:[]};this.chart.axes.forEach(function(b){c[b.isXAxis?"xAxis":"yAxis"].push({axis:b,value:b.toValue(a[b.horiz?"chartX":"chartY"])})});return c},findNearestKDPoint:function(a,c,b){var d;a.forEach(function(a){var k=!(a.noSharedTooltip&&c)&&0>a.options.findNearestPointBy.indexOf("y");a=a.searchPoint(b,k);if((k=g(a,!0))&&!(k=
!g(d,!0)))var k=d.distX-a.distX,e=d.dist-a.dist,l=(a.series.group&&a.series.group.zIndex)-(d.series.group&&d.series.group.zIndex),k=0<(0!==k&&c?k:0!==e?e:0!==l?l:d.series.index>a.series.index?-1:1);k&&(d=a)});return d},getPointFromEvent:function(a){a=a.target;for(var c;a&&!c;)c=a.point,a=a.parentNode;return c},getChartCoordinatesFromPoint:function(a,c){var b=a.series,d=b.xAxis,b=b.yAxis,k=m(a.clientX,a.plotX),e=a.shapeArgs;if(d&&b)return c?{chartX:d.len+d.pos-k,chartY:b.len+b.pos-a.plotY}:{chartX:k+
d.pos,chartY:a.plotY+b.pos};if(e&&e.x&&e.y)return{chartX:e.x,chartY:e.y}},getHoverData:function(a,c,b,d,k,e){var p,l=[];d=!(!d||!a);var x=c&&!c.stickyTracking?[c]:b.filter(function(a){return a.visible&&!(!k&&a.directTouch)&&m(a.options.enableMouseTracking,!0)&&a.stickyTracking});c=(p=d?a:this.findNearestKDPoint(x,k,e))&&p.series;p&&(k&&!c.noSharedTooltip?(x=b.filter(function(a){return a.visible&&!(!k&&a.directTouch)&&m(a.options.enableMouseTracking,!0)&&!a.noSharedTooltip}),x.forEach(function(a){var c=
u(a.points,function(a){return a.x===p.x&&!a.isNull});g(c)&&(a.chart.isBoosting&&(c=a.getPoint(c)),l.push(c))})):l.push(p));return{hoverPoint:p,hoverSeries:c,hoverPoints:l}},runPointActions:function(b,c){var d=this.chart,k=d.tooltip&&d.tooltip.options.enabled?d.tooltip:void 0,e=k?k.shared:!1,p=c||d.hoverPoint,g=p&&p.series||d.hoverSeries,g=this.getHoverData(p,g,d.series,"touchmove"!==b.type&&(!!c||g&&g.directTouch&&this.isDirectTouch),e,b),l=[],D,p=g.hoverPoint;D=g.hoverPoints;c=(g=g.hoverSeries)&&
g.tooltipOptions.followPointer;e=e&&g&&!g.noSharedTooltip;if(p&&(p!==d.hoverPoint||k&&k.isHidden)){(d.hoverPoints||[]).forEach(function(a){-1===D.indexOf(a)&&a.setState()});if(d.hoverSeries!==g)g.onMouseOver();l=this.getActiveSeries(D);d.series.forEach(function(a){(a.options.inactiveOtherPoints||-1===l.indexOf(a))&&a.setState("inactive",!0)});(D||[]).forEach(function(a){a.setState("hover")});d.hoverPoint&&d.hoverPoint.firePointEvent("mouseOut");if(!p.series)return;p.firePointEvent("mouseOver");d.hoverPoints=
D;d.hoverPoint=p;k&&k.refresh(e?D:p,b)}else c&&k&&!k.isHidden&&(p=k.getAnchor([{}],b),k.updatePosition({plotX:p[0],plotY:p[1]}));this.unDocMouseMove||(this.unDocMouseMove=E(d.container.ownerDocument,"mousemove",function(c){var b=B[a.hoverChartIndex];if(b)b.pointer.onDocumentMouseMove(c)}));d.axes.forEach(function(c){var d=m(c.crosshair.snap,!0),l=d?a.find(D,function(a){return a.series[c.coll]===c}):void 0;l||!d?c.drawCrosshair(b,l):c.hideCrosshair()})},getActiveSeries:function(a){var c=[],b;(a||[]).forEach(function(a){b=
a.series;c.push(b);b.linkedParent&&c.push(b.linkedParent);b.linkedSeries&&(c=c.concat(b.linkedSeries));b.navigatorSeries&&c.push(b.navigatorSeries)});return c},reset:function(a,c){var d=this.chart,k=d.hoverSeries,e=d.hoverPoint,p=d.hoverPoints,g=d.tooltip,l=g&&g.shared?p:e;a&&l&&b(l).forEach(function(c){c.series.isCartesian&&void 0===c.plotX&&(a=!1)});if(a)g&&l&&b(l).length&&(g.refresh(l),g.shared&&p?p.forEach(function(a){a.setState(a.state,!0);a.series.isCartesian&&(a.series.xAxis.crosshair&&a.series.xAxis.drawCrosshair(null,
a),a.series.yAxis.crosshair&&a.series.yAxis.drawCrosshair(null,a))}):e&&(e.setState(e.state,!0),d.axes.forEach(function(a){a.crosshair&&a.drawCrosshair(null,e)})));else{if(e)e.onMouseOut();p&&p.forEach(function(a){a.setState()});if(k)k.onMouseOut();g&&g.hide(c);this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());d.axes.forEach(function(a){a.hideCrosshair()});this.hoverX=d.hoverPoints=d.hoverPoint=null}},scaleGroups:function(a,c){var b=this.chart,d;b.series.forEach(function(k){d=a||k.getPlotBox();
k.xAxis&&k.xAxis.zoomEnabled&&k.group&&(k.group.attr(d),k.markerGroup&&(k.markerGroup.attr(d),k.markerGroup.clip(c?b.clipRect:null)),k.dataLabelsGroup&&k.dataLabelsGroup.attr(d))});b.clipRect.attr(c||b.clipBox)},dragStart:function(a){var c=this.chart;c.mouseIsDown=a.type;c.cancelClick=!1;c.mouseDownX=this.mouseDownX=a.chartX;c.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var c=this.chart,b=c.options.chart,d=a.chartX,k=a.chartY,e=this.zoomHor,p=this.zoomVert,l=c.plotLeft,g=c.plotTop,m=c.plotWidth,
z=c.plotHeight,n,f=this.selectionMarker,r=this.mouseDownX,q=this.mouseDownY,t=b.panKey&&a[b.panKey+"Key"];f&&f.touch||(d<l?d=l:d>l+m&&(d=l+m),k<g?k=g:k>g+z&&(k=g+z),this.hasDragged=Math.sqrt(Math.pow(r-d,2)+Math.pow(q-k,2)),10<this.hasDragged&&(n=c.isInsidePlot(r-l,q-g),c.hasCartesianSeries&&(this.zoomX||this.zoomY)&&n&&!t&&!f&&(this.selectionMarker=f=c.renderer.rect(l,g,e?1:m,p?1:z,0).attr({"class":"highcharts-selection-marker",zIndex:7}).add(),c.styledMode||f.attr({fill:b.selectionMarkerFill||h("#335cad").setOpacity(.25).get()})),
f&&e&&(d-=r,f.attr({width:Math.abs(d),x:(0<d?0:d)+r})),f&&p&&(d=k-q,f.attr({height:Math.abs(d),y:(0<d?0:d)+q})),n&&!f&&b.panning&&c.pan(a,b.panning)))},drop:function(a){var c=this,b=this.chart,d=this.hasPinched;if(this.selectionMarker){var k={originalEvent:a,xAxis:[],yAxis:[]},p=this.selectionMarker,g=p.attr?p.attr("x"):p.x,l=p.attr?p.attr("y"):p.y,m=p.attr?p.attr("width"):p.width,A=p.attr?p.attr("height"):p.height,z;if(this.hasDragged||d)b.axes.forEach(function(b){if(b.zoomEnabled&&q(b.min)&&(d||
c[{xAxis:"zoomX",yAxis:"zoomY"}[b.coll]])){var f=b.horiz,e="touchend"===a.type?b.minPixelPadding:0,p=b.toValue((f?g:l)+e),f=b.toValue((f?g+m:l+A)-e);k[b.coll].push({axis:b,min:Math.min(p,f),max:Math.max(p,f)});z=!0}}),z&&v(b,"selection",k,function(a){b.zoom(t(a,d?{animation:!1}:null))});n(b.index)&&(this.selectionMarker=this.selectionMarker.destroy());d&&this.scaleGroups()}b&&n(b.index)&&(e(b.container,{cursor:b._cursor}),b.cancelClick=10<this.hasDragged,b.mouseIsDown=this.hasDragged=this.hasPinched=
!1,this.pinchDown=[])},onContainerMouseDown:function(a){a=this.normalize(a);2!==a.button&&(this.zoomOption(a),a.preventDefault&&a.preventDefault(),this.dragStart(a))},onDocumentMouseUp:function(b){B[a.hoverChartIndex]&&B[a.hoverChartIndex].pointer.drop(b)},onDocumentMouseMove:function(a){var c=this.chart,b=this.chartPosition;a=this.normalize(a,b);!b||this.inClass(a.target,"highcharts-tracker")||c.isInsidePlot(a.chartX-c.plotLeft,a.chartY-c.plotTop)||this.reset()},onContainerMouseLeave:function(b){var c=
B[a.hoverChartIndex];c&&(b.relatedTarget||b.toElement)&&(c.pointer.reset(),c.pointer.chartPosition=null)},onContainerMouseMove:function(b){var c=this.chart;q(a.hoverChartIndex)&&B[a.hoverChartIndex]&&B[a.hoverChartIndex].mouseIsDown||(a.hoverChartIndex=c.index);b=this.normalize(b);b.preventDefault||(b.returnValue=!1);"mousedown"===c.mouseIsDown&&this.drag(b);!this.inClass(b.target,"highcharts-tracker")&&!c.isInsidePlot(b.chartX-c.plotLeft,b.chartY-c.plotTop)||c.openMenu||this.runPointActions(b)},
inClass:function(a,c){for(var b;a;){if(b=H(a,"class")){if(-1!==b.indexOf(c))return!0;if(-1!==b.indexOf("highcharts-container"))return!1}a=a.parentNode}},onTrackerMouseOut:function(a){var c=this.chart.hoverSeries;a=a.relatedTarget||a.toElement;this.isDirectTouch=!1;if(!(!c||!a||c.stickyTracking||this.inClass(a,"highcharts-tooltip")||this.inClass(a,"highcharts-series-"+c.index)&&this.inClass(a,"highcharts-tracker")))c.onMouseOut()},onContainerClick:function(a){var c=this.chart,b=c.hoverPoint,d=c.plotLeft,
k=c.plotTop;a=this.normalize(a);c.cancelClick||(b&&this.inClass(a.target,"highcharts-tracker")?(v(b.series,"click",t(a,{point:b})),c.hoverPoint&&b.firePointEvent("click",a)):(t(a,this.getCoordinates(a)),c.isInsidePlot(a.chartX-d,a.chartY-k)&&v(c,"click",a)))},setDOMEvents:function(){var b=this,c=b.chart.container,d=c.ownerDocument;c.onmousedown=function(a){b.onContainerMouseDown(a)};c.onmousemove=function(a){b.onContainerMouseMove(a)};c.onclick=function(a){b.onContainerClick(a)};this.unbindContainerMouseLeave=
E(c,"mouseleave",b.onContainerMouseLeave);a.unbindDocumentMouseUp||(a.unbindDocumentMouseUp=E(d,"mouseup",b.onDocumentMouseUp));a.hasTouch&&(c.ontouchstart=function(a){b.onContainerTouchStart(a)},c.ontouchmove=function(a){b.onContainerTouchMove(a)},a.unbindDocumentTouchEnd||(a.unbindDocumentTouchEnd=E(d,"touchend",b.onDocumentTouchEnd)))},destroy:function(){var b=this;b.unDocMouseMove&&b.unDocMouseMove();this.unbindContainerMouseLeave();a.chartCount||(a.unbindDocumentMouseUp&&(a.unbindDocumentMouseUp=
a.unbindDocumentMouseUp()),a.unbindDocumentTouchEnd&&(a.unbindDocumentTouchEnd=a.unbindDocumentTouchEnd()));clearInterval(b.tooltipTimeout);a.objectEach(b,function(a,d){b[d]=null})}}});J(G,"parts/TouchPointer.js",[G["parts/Globals.js"]],function(a){var E=a.charts,H=a.extend,B=a.noop,h=a.pick;H(a.Pointer.prototype,{pinchTranslate:function(a,h,t,u,v,n){this.zoomHor&&this.pinchTranslateDirection(!0,a,h,t,u,v,n);this.zoomVert&&this.pinchTranslateDirection(!1,a,h,t,u,v,n)},pinchTranslateDirection:function(a,
h,t,u,v,n,g,d){var e=this.chart,b=a?"x":"y",k=a?"X":"Y",p="chart"+k,c=a?"width":"height",x=e["plot"+(a?"Left":"Top")],q,w,F=d||1,C=e.inverted,l=e.bounds[a?"h":"v"],D=1===h.length,A=h[0][p],z=t[0][p],I=!D&&h[1][p],f=!D&&t[1][p],r;t=function(){!D&&20<Math.abs(A-I)&&(F=d||Math.abs(z-f)/Math.abs(A-I));w=(x-z)/F+A;q=e["plot"+(a?"Width":"Height")]/F};t();h=w;h<l.min?(h=l.min,r=!0):h+q>l.max&&(h=l.max-q,r=!0);r?(z-=.8*(z-g[b][0]),D||(f-=.8*(f-g[b][1])),t()):g[b]=[z,f];C||(n[b]=w-x,n[c]=q);n=C?1/F:F;v[c]=
q;v[b]=h;u[C?a?"scaleY":"scaleX":"scale"+k]=F;u["translate"+k]=n*x+(z-n*A)},pinch:function(a){var e=this,t=e.chart,u=e.pinchDown,v=a.touches,n=v.length,g=e.lastValidTouch,d=e.hasZoom,m=e.selectionMarker,b={},k=1===n&&(e.inClass(a.target,"highcharts-tracker")&&t.runTrackerClick||e.runChartClick),p={};1<n&&(e.initiated=!0);d&&e.initiated&&!k&&a.preventDefault();[].map.call(v,function(a){return e.normalize(a)});"touchstart"===a.type?([].forEach.call(v,function(a,b){u[b]={chartX:a.chartX,chartY:a.chartY}}),
g.x=[u[0].chartX,u[1]&&u[1].chartX],g.y=[u[0].chartY,u[1]&&u[1].chartY],t.axes.forEach(function(a){if(a.zoomEnabled){var b=t.bounds[a.horiz?"h":"v"],c=a.minPixelPadding,d=a.toPixels(Math.min(h(a.options.min,a.dataMin),a.dataMin)),k=a.toPixels(Math.max(h(a.options.max,a.dataMax),a.dataMax)),e=Math.max(d,k);b.min=Math.min(a.pos,Math.min(d,k)-c);b.max=Math.max(a.pos+a.len,e+c)}}),e.res=!0):e.followTouchMove&&1===n?this.runPointActions(e.normalize(a)):u.length&&(m||(e.selectionMarker=m=H({destroy:B,touch:!0},
t.plotBox)),e.pinchTranslate(u,v,b,m,p,g),e.hasPinched=d,e.scaleGroups(b,p),e.res&&(e.res=!1,this.reset(!1,0)))},touch:function(e,q){var t=this.chart,u,v;if(t.index!==a.hoverChartIndex)this.onContainerMouseLeave({relatedTarget:!0});a.hoverChartIndex=t.index;1===e.touches.length?(e=this.normalize(e),(v=t.isInsidePlot(e.chartX-t.plotLeft,e.chartY-t.plotTop))&&!t.openMenu?(q&&this.runPointActions(e),"touchmove"===e.type&&(q=this.pinchDown,u=q[0]?4<=Math.sqrt(Math.pow(q[0].chartX-e.chartX,2)+Math.pow(q[0].chartY-
e.chartY,2)):!1),h(u,!0)&&this.pinch(e)):q&&this.reset()):2===e.touches.length&&this.pinch(e)},onContainerTouchStart:function(a){this.zoomOption(a);this.touch(a,!0)},onContainerTouchMove:function(a){this.touch(a)},onDocumentTouchEnd:function(e){E[a.hoverChartIndex]&&E[a.hoverChartIndex].pointer.drop(e)}})});J(G,"parts/MSPointer.js",[G["parts/Globals.js"]],function(a){var E=a.addEvent,H=a.charts,B=a.css,h=a.doc,e=a.extend,q=a.noop,t=a.Pointer,u=a.removeEvent,v=a.win,n=a.wrap;if(!a.hasTouch&&(v.PointerEvent||
v.MSPointerEvent)){var g={},d=!!v.PointerEvent,m=function(){var b=[];b.item=function(a){return this[a]};a.objectEach(g,function(a){b.push({pageX:a.pageX,pageY:a.pageY,target:a.target})});return b},b=function(b,d,c,e){"touch"!==b.pointerType&&b.pointerType!==b.MSPOINTER_TYPE_TOUCH||!H[a.hoverChartIndex]||(e(b),e=H[a.hoverChartIndex].pointer,e[d]({type:c,target:b.currentTarget,preventDefault:q,touches:m()}))};e(t.prototype,{onContainerPointerDown:function(a){b(a,"onContainerTouchStart","touchstart",
function(a){g[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},onContainerPointerMove:function(a){b(a,"onContainerTouchMove","touchmove",function(a){g[a.pointerId]={pageX:a.pageX,pageY:a.pageY};g[a.pointerId].target||(g[a.pointerId].target=a.currentTarget)})},onDocumentPointerUp:function(a){b(a,"onDocumentTouchEnd","touchend",function(a){delete g[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,d?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,
d?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(h,d?"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});n(t.prototype,"init",function(a,b,c){a.call(this,b,c);this.hasZoom&&B(b.container,{"-ms-touch-action":"none","touch-action":"none"})});n(t.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(E)});n(t.prototype,"destroy",function(a){this.batchMSEvents(u);a.call(this)})}});J(G,"parts/Legend.js",[G["parts/Globals.js"]],function(a){var E=
a.addEvent,H=a.css,B=a.discardElement,h=a.defined,e=a.fireEvent,q=a.isFirefox,t=a.marginNames,u=a.merge,v=a.pick,n=a.setAnimation,g=a.stableSort,d=a.win,m=a.wrap;a.Legend=function(a,d){this.init(a,d)};a.Legend.prototype={init:function(a,d){this.chart=a;this.setOptions(d);d.enabled&&(this.render(),E(this.chart,"endResize",function(){this.legend.positionCheckboxes()}),this.proximate?this.unchartrender=E(this.chart,"render",function(){this.legend.proximatePositions();this.legend.positionItems()}):this.unchartrender&&
this.unchartrender())},setOptions:function(a){var b=v(a.padding,8);this.options=a;this.chart.styledMode||(this.itemStyle=a.itemStyle,this.itemHiddenStyle=u(this.itemStyle,a.itemHiddenStyle));this.itemMarginTop=a.itemMarginTop||0;this.padding=b;this.initialItemY=b-5;this.symbolWidth=v(a.symbolWidth,16);this.pages=[];this.proximate="proximate"===a.layout&&!this.chart.inverted},update:function(a,d){var b=this.chart;this.setOptions(u(!0,this.options,a));this.destroy();b.isDirtyLegend=b.isDirtyBox=!0;
v(d,!0)&&b.redraw();e(this,"afterUpdate")},colorizeItem:function(a,d){a.legendGroup[d?"removeClass":"addClass"]("highcharts-legend-item-hidden");if(!this.chart.styledMode){var b=this.options,c=a.legendItem,k=a.legendLine,g=a.legendSymbol,m=this.itemHiddenStyle.color,b=d?b.itemStyle.color:m,h=d?a.color||m:m,n=a.options&&a.options.marker,l={fill:h};c&&c.css({fill:b,color:b});k&&k.attr({stroke:h});g&&(n&&g.isMarker&&(l=a.pointAttribs(),d||(l.stroke=l.fill=m)),g.attr(l))}e(this,"afterColorizeItem",{item:a,
visible:d})},positionItems:function(){this.allItems.forEach(this.positionItem,this);this.chart.isResizing||this.positionCheckboxes()},positionItem:function(a){var b=this.options,d=b.symbolPadding,b=!b.rtl,c=a._legendItemPos,e=c[0],c=c[1],g=a.checkbox;if((a=a.legendGroup)&&a.element)a[h(a.translateY)?"animate":"attr"]({translateX:b?e:this.legendWidth-e-2*d-4,translateY:c});g&&(g.x=e,g.y=c)},destroyItem:function(a){var b=a.checkbox;["legendItem","legendLine","legendSymbol","legendGroup"].forEach(function(b){a[b]&&
(a[b]=a[b].destroy())});b&&B(a.checkbox)},destroy:function(){function a(a){this[a]&&(this[a]=this[a].destroy())}this.getAllItems().forEach(function(b){["legendItem","legendGroup"].forEach(a,b)});"clipRect up down pager nav box title group".split(" ").forEach(a,this);this.display=null},positionCheckboxes:function(){var a=this.group&&this.group.alignAttr,d,e=this.clipHeight||this.legendHeight,c=this.titleHeight;a&&(d=a.translateY,this.allItems.forEach(function(b){var k=b.checkbox,g;k&&(g=d+c+k.y+(this.scrollOffset||
0)+3,H(k,{left:a.translateX+b.checkboxOffset+k.x-20+"px",top:g+"px",display:this.proximate||g>d-6&&g<d+e-6?"":"none"}))},this))},renderTitle:function(){var a=this.options,d=this.padding,e=a.title,c=0;e.text&&(this.title||(this.title=this.chart.renderer.label(e.text,d-3,d-4,null,null,null,a.useHTML,null,"legend-title").attr({zIndex:1}),this.chart.styledMode||this.title.css(e.style),this.title.add(this.group)),e.width||this.title.css({width:this.maxLegendWidth+"px"}),a=this.title.getBBox(),c=a.height,
this.offsetWidth=a.width,this.contentGroup.attr({translateY:c}));this.titleHeight=c},setText:function(b){var d=this.options;b.legendItem.attr({text:d.labelFormat?a.format(d.labelFormat,b,this.chart.time):d.labelFormatter.call(b)})},renderItem:function(a){var b=this.chart,d=b.renderer,c=this.options,e=this.symbolWidth,g=c.symbolPadding,m=this.itemStyle,h=this.itemHiddenStyle,n="horizontal"===c.layout?v(c.itemDistance,20):0,l=!c.rtl,D=a.legendItem,A=!a.series,z=!A&&a.series.drawLegendSymbol?a.series:
a,I=z.options,I=this.createCheckboxForItem&&I&&I.showCheckbox,n=e+g+n+(I?20:0),f=c.useHTML,r=a.options.className;D||(a.legendGroup=d.g("legend-item").addClass("highcharts-"+z.type+"-series highcharts-color-"+a.colorIndex+(r?" "+r:"")+(A?" highcharts-series-"+a.index:"")).attr({zIndex:1}).add(this.scrollGroup),a.legendItem=D=d.text("",l?e+g:-g,this.baseline||0,f),b.styledMode||D.css(u(a.visible?m:h)),D.attr({align:l?"left":"right",zIndex:2}).add(a.legendGroup),this.baseline||(this.fontMetrics=d.fontMetrics(b.styledMode?
12:m.fontSize,D),this.baseline=this.fontMetrics.f+3+this.itemMarginTop,D.attr("y",this.baseline)),this.symbolHeight=c.symbolHeight||this.fontMetrics.f,z.drawLegendSymbol(this,a),this.setItemEvents&&this.setItemEvents(a,D,f));I&&!a.checkbox&&this.createCheckboxForItem(a);this.colorizeItem(a,a.visible);!b.styledMode&&m.width||D.css({width:(c.itemWidth||this.widthOption||b.spacingBox.width)-n});this.setText(a);b=D.getBBox();a.itemWidth=a.checkboxOffset=c.itemWidth||a.legendItemWidth||b.width+n;this.maxItemWidth=
Math.max(this.maxItemWidth,a.itemWidth);this.totalItemWidth+=a.itemWidth;this.itemHeight=a.itemHeight=Math.round(a.legendItemHeight||b.height||this.symbolHeight)},layoutItem:function(a){var b=this.options,d=this.padding,c="horizontal"===b.layout,e=a.itemHeight,g=b.itemMarginBottom||0,m=this.itemMarginTop,h=c?v(b.itemDistance,20):0,n=this.maxLegendWidth,b=b.alignColumns&&this.totalItemWidth>n?this.maxItemWidth:a.itemWidth;c&&this.itemX-d+b>n&&(this.itemX=d,this.lastLineHeight&&(this.itemY+=m+this.lastLineHeight+
g),this.lastLineHeight=0);this.lastItemY=m+this.itemY+g;this.lastLineHeight=Math.max(e,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];c?this.itemX+=b:(this.itemY+=m+e+g,this.lastLineHeight=e);this.offsetWidth=this.widthOption||Math.max((c?this.itemX-d-(a.checkbox?0:h):b)+d,this.offsetWidth)},getAllItems:function(){var a=[];this.chart.series.forEach(function(b){var d=b&&b.options;b&&v(d.showInLegend,h(d.linkedTo)?!1:void 0,!0)&&(a=a.concat(b.legendItems||("point"===d.legendType?b.data:
b)))});e(this,"afterGetAllItems",{allItems:a});return a},getAlignment:function(){var a=this.options;return this.proximate?a.align.charAt(0)+"tv":a.floating?"":a.align.charAt(0)+a.verticalAlign.charAt(0)+a.layout.charAt(0)},adjustMargins:function(a,d){var b=this.chart,c=this.options,e=this.getAlignment(),k=void 0!==b.options.title.margin?b.titleOffset+b.options.title.margin:0;e&&[/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/].forEach(function(g,m){g.test(e)&&!h(a[m])&&(b[t[m]]=Math.max(b[t[m]],
b.legend[(m+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][m]*c[m%2?"x":"y"]+v(c.margin,12)+d[m]+(0===m&&(0===b.titleOffset?0:k))))})},proximatePositions:function(){var b=this.chart,d=[],e="left"===this.options.align;this.allItems.forEach(function(c){var k,g;g=e;var m;c.yAxis&&c.points&&(c.xAxis.options.reversed&&(g=!g),k=a.find(g?c.points:c.points.slice(0).reverse(),function(b){return a.isNumber(b.plotY)}),g=c.legendGroup.getBBox().height,m=c.yAxis.top-b.plotTop,c.visible?(k=k?k.plotY:c.yAxis.height,
k+=m-.3*g):k=m+c.yAxis.height,d.push({target:k,size:g,item:c}))},this);a.distribute(d,b.plotHeight);d.forEach(function(a){a.item._legendItemPos[1]=b.plotTop-b.spacing[0]+a.pos})},render:function(){var b=this.chart,d=b.renderer,m=this.group,c,h,n,w=this.box,q=this.options,C=this.padding;this.itemX=C;this.itemY=this.initialItemY;this.lastItemY=this.offsetWidth=0;this.widthOption=a.relativeLength(q.width,b.spacingBox.width-C);c=b.spacingBox.width-2*C-q.x;-1<["rm","lm"].indexOf(this.getAlignment().substring(0,
2))&&(c/=2);this.maxLegendWidth=this.widthOption||c;m||(this.group=m=d.g("legend").attr({zIndex:7}).add(),this.contentGroup=d.g().attr({zIndex:1}).add(m),this.scrollGroup=d.g().add(this.contentGroup));this.renderTitle();c=this.getAllItems();g(c,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});q.reversed&&c.reverse();this.allItems=c;this.display=h=!!c.length;this.itemHeight=this.totalItemWidth=this.maxItemWidth=this.lastLineHeight=0;c.forEach(this.renderItem,
this);c.forEach(this.layoutItem,this);c=(this.widthOption||this.offsetWidth)+C;n=this.lastItemY+this.lastLineHeight+this.titleHeight;n=this.handleOverflow(n);n+=C;w||(this.box=w=d.rect().addClass("highcharts-legend-box").attr({r:q.borderRadius}).add(m),w.isNew=!0);b.styledMode||w.attr({stroke:q.borderColor,"stroke-width":q.borderWidth||0,fill:q.backgroundColor||"none"}).shadow(q.shadow);0<c&&0<n&&(w[w.isNew?"attr":"animate"](w.crisp.call({},{x:0,y:0,width:c,height:n},w.strokeWidth())),w.isNew=!1);
w[h?"show":"hide"]();b.styledMode&&"none"===m.getStyle("display")&&(c=n=0);this.legendWidth=c;this.legendHeight=n;h&&(d=b.spacingBox,/(lth|ct|rth)/.test(this.getAlignment())&&(w=d.y+b.titleOffset,d=u(d,{y:0<b.titleOffset?w+=b.options.title.margin:w})),m.align(u(q,{width:c,height:n,verticalAlign:this.proximate?"top":q.verticalAlign}),!0,d));this.proximate||this.positionItems();e(this,"afterRender")},handleOverflow:function(a){var b=this,d=this.chart,c=d.renderer,e=this.options,g=e.y,m=this.padding,
g=d.spacingBox.height+("top"===e.verticalAlign?-g:g)-m,h=e.maxHeight,n,l=this.clipRect,D=e.navigation,A=v(D.animation,!0),z=D.arrowSize||12,I=this.nav,f=this.pages,r,q=this.allItems,t=function(a){"number"===typeof a?l.attr({height:a}):l&&(b.clipRect=l.destroy(),b.contentGroup.clip());b.contentGroup.div&&(b.contentGroup.div.style.clip=a?"rect("+m+"px,9999px,"+(m+a)+"px,0)":"auto")},L=function(a){b[a]=c.circle(0,0,1.3*z).translate(z/2,z/2).add(I);d.styledMode||b[a].attr("fill","rgba(0,0,0,0.0001)");
return b[a]};"horizontal"!==e.layout||"middle"===e.verticalAlign||e.floating||(g/=2);h&&(g=Math.min(g,h));f.length=0;a>g&&!1!==D.enabled?(this.clipHeight=n=Math.max(g-20-this.titleHeight-m,0),this.currentPage=v(this.currentPage,1),this.fullHeight=a,q.forEach(function(a,b){var c=a._legendItemPos[1],d=Math.round(a.legendItem.getBBox().height),l=f.length;if(!l||c-f[l-1]>n&&(r||c)!==f[l-1])f.push(r||c),l++;a.pageIx=l-1;r&&(q[b-1].pageIx=l-1);b===q.length-1&&c+d-f[l-1]>n&&c!==r&&(f.push(c),a.pageIx=l);
c!==r&&(r=c)}),l||(l=b.clipRect=c.clipRect(0,m,9999,0),b.contentGroup.clip(l)),t(n),I||(this.nav=I=c.g().attr({zIndex:1}).add(this.group),this.up=c.symbol("triangle",0,0,z,z).add(I),L("upTracker").on("click",function(){b.scroll(-1,A)}),this.pager=c.text("",15,10).addClass("highcharts-legend-navigation"),d.styledMode||this.pager.css(D.style),this.pager.add(I),this.down=c.symbol("triangle-down",0,0,z,z).add(I),L("downTracker").on("click",function(){b.scroll(1,A)})),b.scroll(0),a=g):I&&(t(),this.nav=
I.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);return a},scroll:function(a,d){var b=this.pages,c=b.length,e=this.currentPage+a;a=this.clipHeight;var k=this.options.navigation,g=this.pager,m=this.padding;e>c&&(e=c);0<e&&(void 0!==d&&n(d,this.chart),this.nav.attr({translateX:m,translateY:a+this.padding+7+this.titleHeight,visibility:"visible"}),[this.up,this.upTracker].forEach(function(a){a.attr({"class":1===e?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"})}),
g.attr({text:e+"/"+c}),[this.down,this.downTracker].forEach(function(a){a.attr({x:18+this.pager.getBBox().width,"class":e===c?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"})},this),this.chart.styledMode||(this.up.attr({fill:1===e?k.inactiveColor:k.activeColor}),this.upTracker.css({cursor:1===e?"default":"pointer"}),this.down.attr({fill:e===c?k.inactiveColor:k.activeColor}),this.downTracker.css({cursor:e===c?"default":"pointer"})),this.scrollOffset=-b[e-1]+this.initialItemY,this.scrollGroup.animate({translateY:this.scrollOffset}),
this.currentPage=e,this.positionCheckboxes())}};a.LegendSymbolMixin={drawRectangle:function(a,d){var b=a.symbolHeight,c=a.options.squareSymbol;d.legendSymbol=this.chart.renderer.rect(c?(a.symbolWidth-b)/2:0,a.baseline-b+1,c?b:a.symbolWidth,b,v(a.options.symbolRadius,b/2)).addClass("highcharts-point").attr({zIndex:3}).add(d.legendGroup)},drawLineMarker:function(a){var b=this.options,d=b.marker,c=a.symbolWidth,e=a.symbolHeight,g=e/2,m=this.chart.renderer,h=this.legendGroup;a=a.baseline-Math.round(.3*
a.fontMetrics.b);var n={};this.chart.styledMode||(n={"stroke-width":b.lineWidth||0},b.dashStyle&&(n.dashstyle=b.dashStyle));this.legendLine=m.path(["M",0,a,"L",c,a]).addClass("highcharts-graph").attr(n).add(h);d&&!1!==d.enabled&&c&&(b=Math.min(v(d.radius,g),g),0===this.symbol.indexOf("url")&&(d=u(d,{width:e,height:e}),b=0),this.legendSymbol=d=m.symbol(this.symbol,c/2-b,a-b,2*b,2*b,d).addClass("highcharts-point").add(h),d.isMarker=!0)}};(/Trident\/7\.0/.test(d.navigator&&d.navigator.userAgent)||q)&&
m(a.Legend.prototype,"positionItem",function(a,d){var b=this,c=function(){d._legendItemPos&&a.call(b,d)};c();b.bubbleLegend||setTimeout(c)})});J(G,"parts/Chart.js",[G["parts/Globals.js"]],function(a){var E=a.addEvent,H=a.animate,B=a.animObject,h=a.attr,e=a.doc,q=a.Axis,t=a.createElement,u=a.defaultOptions,v=a.discardElement,n=a.charts,g=a.css,d=a.defined,m=a.extend,b=a.find,k=a.fireEvent,p=a.isNumber,c=a.isObject,x=a.isString,K=a.Legend,w=a.marginNames,F=a.merge,C=a.objectEach,l=a.Pointer,D=a.pick,
A=a.pInt,z=a.removeEvent,I=a.seriesTypes,f=a.splat,r=a.syncTimeout,Q=a.win,N=a.Chart=function(){this.getArgs.apply(this,arguments)};a.chart=function(a,b,c){return new N(a,b,c)};m(N.prototype,{callbacks:[],getArgs:function(){var a=[].slice.call(arguments);if(x(a[0])||a[0].nodeName)this.renderTo=a.shift();this.init(a[0],a[1])},init:function(b,f){var d,l=b.series,e=b.plotOptions||{};k(this,"init",{args:arguments},function(){b.series=null;d=F(u,b);C(d.plotOptions,function(a,b){c(a)&&(a.tooltip=e[b]&&
F(e[b].tooltip)||void 0)});d.tooltip.userOptions=b.chart&&b.chart.forExport&&b.tooltip.userOptions||b.tooltip;d.series=b.series=l;this.userOptions=b;var g=d.chart,m=g.events;this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.labelCollectors=[];this.callback=f;this.isResizing=0;this.options=d;this.axes=[];this.series=[];this.time=b.time&&Object.keys(b.time).length?new a.Time(b.time):a.time;this.styledMode=g.styledMode;this.hasCartesianSeries=g.showAxes;var A=this;A.index=n.length;n.push(A);
a.chartCount++;m&&C(m,function(b,c){a.isFunction(b)&&E(A,c,b)});A.xAxis=[];A.yAxis=[];A.pointCount=A.colorCounter=A.symbolCounter=0;k(A,"afterInit");A.firstRender()})},initSeries:function(b){var c=this.options.chart;(c=I[b.type||c.type||c.defaultSeriesType])||a.error(17,!0,this);c=new c;c.init(this,b);return c},orderSeries:function(a){var b=this.series;for(a=a||0;a<b.length;a++)b[a]&&(b[a].index=a,b[a].name=b[a].getName())},isInsidePlot:function(a,b,c){var f=c?b:a;a=c?a:b;return 0<=f&&f<=this.plotWidth&&
0<=a&&a<=this.plotHeight},redraw:function(b){k(this,"beforeRedraw");var c=this.axes,f=this.series,d=this.pointer,l=this.legend,e=this.userOptions.legend,g=this.isDirtyLegend,A,p,r=this.hasCartesianSeries,h=this.isDirtyBox,D,z=this.renderer,n=z.isHidden(),x=[];this.setResponsive&&this.setResponsive(!1);a.setAnimation(b,this);n&&this.temporaryDisplay();this.layOutTitles();for(b=f.length;b--;)if(D=f[b],D.options.stacking&&(A=!0,D.isDirty)){p=!0;break}if(p)for(b=f.length;b--;)D=f[b],D.options.stacking&&
(D.isDirty=!0);f.forEach(function(a){a.isDirty&&("point"===a.options.legendType?(a.updateTotals&&a.updateTotals(),g=!0):e&&(e.labelFormatter||e.labelFormat)&&(g=!0));a.isDirtyData&&k(a,"updatedData")});g&&l&&l.options.enabled&&(l.render(),this.isDirtyLegend=!1);A&&this.getStacks();r&&c.forEach(function(a){a.updateNames();a.setScale()});this.getMargins();r&&(c.forEach(function(a){a.isDirty&&(h=!0)}),c.forEach(function(a){var b=a.min+","+a.max;a.extKey!==b&&(a.extKey=b,x.push(function(){k(a,"afterSetExtremes",
m(a.eventArgs,a.getExtremes()));delete a.eventArgs}));(h||A)&&a.redraw()}));h&&this.drawChartBox();k(this,"predraw");f.forEach(function(a){(h||a.isDirty)&&a.visible&&a.redraw();a.isDirtyData=!1});d&&d.reset(!0);z.draw();k(this,"redraw");k(this,"render");n&&this.temporaryDisplay(!0);x.forEach(function(a){a.call()})},get:function(a){function c(b){return b.id===a||b.options&&b.options.id===a}var f,d=this.series,l;f=b(this.axes,c)||b(this.series,c);for(l=0;!f&&l<d.length;l++)f=b(d[l].points||[],c);return f},
getAxes:function(){var a=this,b=this.options,c=b.xAxis=f(b.xAxis||{}),b=b.yAxis=f(b.yAxis||{});k(this,"getAxes");c.forEach(function(a,b){a.index=b;a.isX=!0});b.forEach(function(a,b){a.index=b});c.concat(b).forEach(function(b){new q(a,b)});k(this,"afterGetAxes")},getSelectedPoints:function(){var a=[];this.series.forEach(function(b){a=a.concat((b[b.hasGroupedData?"points":"data"]||[]).filter(function(a){return a.selected}))});return a},getSelectedSeries:function(){return this.series.filter(function(a){return a.selected})},
setTitle:function(a,b,c){var f=this,d=f.options,l=f.styledMode,e;e=d.title=F(!l&&{style:{color:"#333333",fontSize:d.isStock?"16px":"18px"}},d.title,a);d=d.subtitle=F(!l&&{style:{color:"#666666"}},d.subtitle,b);[["title",a,e],["subtitle",b,d]].forEach(function(a,b){var c=a[0],d=f[c],e=a[1];a=a[2];d&&e&&(f[c]=d=d.destroy());a&&!d&&(f[c]=f.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+c,zIndex:a.zIndex||4}).add(),f[c].update=function(a){f.setTitle(!b&&a,b&&a)},l||f[c].css(a.style))});
f.layOutTitles(c)},layOutTitles:function(a){var b=0,c,f=this.renderer,d=this.spacingBox;["title","subtitle"].forEach(function(a){var c=this[a],l=this.options[a];a="title"===a?-3:l.verticalAlign?0:b+2;var e;c&&(this.styledMode||(e=l.style.fontSize),e=f.fontMetrics(e,c).b,c.css({width:(l.width||d.width+l.widthAdjust)+"px"}).align(m({y:a+e},l),!1,"spacingBox"),l.floating||l.verticalAlign||(b=Math.ceil(b+c.getBBox(l.useHTML).height)))},this);c=this.titleOffset!==b;this.titleOffset=b;!this.isDirtyBox&&
c&&(this.isDirtyBox=this.isDirtyLegend=c,this.hasRendered&&D(a,!0)&&this.isDirtyBox&&this.redraw())},getChartSize:function(){var b=this.options.chart,c=b.width,b=b.height,f=this.renderTo;d(c)||(this.containerWidth=a.getStyle(f,"width"));d(b)||(this.containerHeight=a.getStyle(f,"height"));this.chartWidth=Math.max(0,c||this.containerWidth||600);this.chartHeight=Math.max(0,a.relativeLength(b,this.chartWidth)||(1<this.containerHeight?this.containerHeight:400))},temporaryDisplay:function(b){var c=this.renderTo;
if(b)for(;c&&c.style;)c.hcOrigStyle&&(a.css(c,c.hcOrigStyle),delete c.hcOrigStyle),c.hcOrigDetached&&(e.body.removeChild(c),c.hcOrigDetached=!1),c=c.parentNode;else for(;c&&c.style;){e.body.contains(c)||c.parentNode||(c.hcOrigDetached=!0,e.body.appendChild(c));if("none"===a.getStyle(c,"display",!1)||c.hcOricDetached)c.hcOrigStyle={display:c.style.display,height:c.style.height,overflow:c.style.overflow},b={display:"block",overflow:"hidden"},c!==this.renderTo&&(b.height=0),a.css(c,b),c.offsetWidth||
c.style.setProperty("display","block","important");c=c.parentNode;if(c===e.body)break}},setClassName:function(a){this.container.className="highcharts-container "+(a||"")},getContainer:function(){var b,c=this.options,f=c.chart,d,l;b=this.renderTo;var r=a.uniqueKey(),D,z;b||(this.renderTo=b=f.renderTo);x(b)&&(this.renderTo=b=e.getElementById(b));b||a.error(13,!0,this);d=A(h(b,"data-highcharts-chart"));p(d)&&n[d]&&n[d].hasRendered&&n[d].destroy();h(b,"data-highcharts-chart",this.index);b.innerHTML="";
f.skipClone||b.offsetWidth||this.temporaryDisplay();this.getChartSize();d=this.chartWidth;l=this.chartHeight;g(b,{overflow:"hidden"});this.styledMode||(D=m({position:"relative",overflow:"hidden",width:d+"px",height:l+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},f.style));this.container=b=t("div",{id:r},D,b);this._cursor=b.style.cursor;this.renderer=new (a[f.renderer]||a.Renderer)(b,d,l,null,f.forExport,c.exporting&&c.exporting.allowHTML,this.styledMode);
this.setClassName(f.className);if(this.styledMode)for(z in c.defs)this.renderer.definition(c.defs[z]);else this.renderer.setStyle(f.style);this.renderer.chartIndex=this.index;k(this,"afterGetContainer")},getMargins:function(a){var b=this.spacing,c=this.margin,f=this.titleOffset;this.resetMargins();f&&!d(c[0])&&(this.plotTop=Math.max(this.plotTop,f+this.options.title.margin+b[0]));this.legend&&this.legend.display&&this.legend.adjustMargins(c,b);k(this,"getMargins");a||this.getAxisMargins()},getAxisMargins:function(){var a=
this,b=a.axisOffset=[0,0,0,0],c=a.margin;a.hasCartesianSeries&&a.axes.forEach(function(a){a.visible&&a.getOffset()});w.forEach(function(f,l){d(c[l])||(a[f]+=b[l])});a.setChartSize()},reflow:function(b){var c=this,f=c.options.chart,l=c.renderTo,g=d(f.width)&&d(f.height),k=f.width||a.getStyle(l,"width"),f=f.height||a.getStyle(l,"height"),l=b?b.target:Q;if(!g&&!c.isPrinting&&k&&f&&(l===Q||l===e)){if(k!==c.containerWidth||f!==c.containerHeight)a.clearTimeout(c.reflowTimeout),c.reflowTimeout=r(function(){c.container&&
c.setSize(void 0,void 0,!1)},b?100:0);c.containerWidth=k;c.containerHeight=f}},setReflow:function(a){var b=this;!1===a||this.unbindReflow?!1===a&&this.unbindReflow&&(this.unbindReflow=this.unbindReflow()):(this.unbindReflow=E(Q,"resize",function(a){b.reflow(a)}),E(this,"destroy",this.unbindReflow))},setSize:function(b,c,f){var d=this,l=d.renderer,e;d.isResizing+=1;a.setAnimation(f,d);d.oldChartHeight=d.chartHeight;d.oldChartWidth=d.chartWidth;void 0!==b&&(d.options.chart.width=b);void 0!==c&&(d.options.chart.height=
c);d.getChartSize();d.styledMode||(e=l.globalAnimation,(e?H:g)(d.container,{width:d.chartWidth+"px",height:d.chartHeight+"px"},e));d.setChartSize(!0);l.setSize(d.chartWidth,d.chartHeight,f);d.axes.forEach(function(a){a.isDirty=!0;a.setScale()});d.isDirtyLegend=!0;d.isDirtyBox=!0;d.layOutTitles();d.getMargins();d.redraw(f);d.oldChartHeight=null;k(d,"resize");r(function(){d&&k(d,"endResize",null,function(){--d.isResizing})},B(e).duration)},setChartSize:function(a){var b=this.inverted,c=this.renderer,
f=this.chartWidth,d=this.chartHeight,l=this.options.chart,e=this.spacing,g=this.clipOffset,m,A,p,r;this.plotLeft=m=Math.round(this.plotLeft);this.plotTop=A=Math.round(this.plotTop);this.plotWidth=p=Math.max(0,Math.round(f-m-this.marginRight));this.plotHeight=r=Math.max(0,Math.round(d-A-this.marginBottom));this.plotSizeX=b?r:p;this.plotSizeY=b?p:r;this.plotBorderWidth=l.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:e[3],y:e[0],width:f-e[3]-e[1],height:d-e[0]-e[2]};this.plotBox=c.plotBox={x:m,
y:A,width:p,height:r};f=2*Math.floor(this.plotBorderWidth/2);b=Math.ceil(Math.max(f,g[3])/2);c=Math.ceil(Math.max(f,g[0])/2);this.clipBox={x:b,y:c,width:Math.floor(this.plotSizeX-Math.max(f,g[1])/2-b),height:Math.max(0,Math.floor(this.plotSizeY-Math.max(f,g[2])/2-c))};a||this.axes.forEach(function(a){a.setAxisSize();a.setAxisTranslation()});k(this,"afterSetChartSize",{skipAxes:a})},resetMargins:function(){k(this,"resetMargins");var a=this,b=a.options.chart;["margin","spacing"].forEach(function(f){var d=
b[f],l=c(d)?d:[d,d,d,d];["Top","Right","Bottom","Left"].forEach(function(c,d){a[f][d]=D(b[f+c],l[d])})});w.forEach(function(b,c){a[b]=D(a.margin[c],a.spacing[c])});a.axisOffset=[0,0,0,0];a.clipOffset=[0,0,0,0]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,c=this.chartWidth,f=this.chartHeight,d=this.chartBackground,l=this.plotBackground,e=this.plotBorder,g,m=this.styledMode,A=this.plotBGImage,p=a.backgroundColor,r=a.plotBackgroundColor,h=a.plotBackgroundImage,D,z=this.plotLeft,
n=this.plotTop,x=this.plotWidth,w=this.plotHeight,C=this.plotBox,I=this.clipRect,q=this.clipBox,t="animate";d||(this.chartBackground=d=b.rect().addClass("highcharts-background").add(),t="attr");if(m)g=D=d.strokeWidth();else{g=a.borderWidth||0;D=g+(a.shadow?8:0);p={fill:p||"none"};if(g||d["stroke-width"])p.stroke=a.borderColor,p["stroke-width"]=g;d.attr(p).shadow(a.shadow)}d[t]({x:D/2,y:D/2,width:c-D-g%2,height:f-D-g%2,r:a.borderRadius});t="animate";l||(t="attr",this.plotBackground=l=b.rect().addClass("highcharts-plot-background").add());
l[t](C);m||(l.attr({fill:r||"none"}).shadow(a.plotShadow),h&&(A?A.animate(C):this.plotBGImage=b.image(h,z,n,x,w).add()));I?I.animate({width:q.width,height:q.height}):this.clipRect=b.clipRect(q);t="animate";e||(t="attr",this.plotBorder=e=b.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());m||e.attr({stroke:a.plotBorderColor,"stroke-width":a.plotBorderWidth||0,fill:"none"});e[t](e.crisp({x:z,y:n,width:x,height:w},-e.strokeWidth()));this.isDirtyBox=!1;k(this,"afterDrawChartBox")},propFromSeries:function(){var a=
this,b=a.options.chart,c,f=a.options.series,d,l;["inverted","angular","polar"].forEach(function(e){c=I[b.type||b.defaultSeriesType];l=b[e]||c&&c.prototype[e];for(d=f&&f.length;!l&&d--;)(c=I[f[d].type])&&c.prototype[e]&&(l=!0);a[e]=l})},linkSeries:function(){var a=this,b=a.series;b.forEach(function(a){a.linkedSeries.length=0});b.forEach(function(b){var c=b.options.linkedTo;x(c)&&(c=":previous"===c?a.series[b.index-1]:a.get(c))&&c.linkedParent!==b&&(c.linkedSeries.push(b),b.linkedParent=c,b.visible=
D(b.options.visible,c.options.visible,b.visible))});k(this,"afterLinkSeries")},renderSeries:function(){this.series.forEach(function(a){a.translate();a.render()})},renderLabels:function(){var a=this,b=a.options.labels;b.items&&b.items.forEach(function(c){var f=m(b.style,c.style),d=A(f.left)+a.plotLeft,l=A(f.top)+a.plotTop+12;delete f.left;delete f.top;a.renderer.text(c.html,d,l).attr({zIndex:2}).css(f).add()})},render:function(){var a=this.axes,b=this.renderer,c=this.options,f=0,d,l,e;this.setTitle();
this.legend=new K(this,c.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();c=this.plotWidth;a.some(function(a){if(a.horiz&&a.visible&&a.options.labels.enabled&&a.series.length)return f=21,!0});d=this.plotHeight=Math.max(this.plotHeight-f,0);a.forEach(function(a){a.setScale()});this.getAxisMargins();l=1.1<c/this.plotWidth;e=1.05<d/this.plotHeight;if(l||e)a.forEach(function(a){(a.horiz&&l||!a.horiz&&e)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries&&
a.forEach(function(a){a.visible&&a.render()});this.seriesGroup||(this.seriesGroup=b.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.hasRendered=!0},addCredits:function(a){var b=this;a=F(!0,this.options.credits,a);a.enabled&&!this.credits&&(this.credits=this.renderer.text(a.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){a.href&&(Q.location.href=a.href)}).attr({align:a.position.align,
zIndex:8}),b.styledMode||this.credits.css(a.style),this.credits.add().align(a.position),this.credits.update=function(a){b.credits=b.credits.destroy();b.addCredits(a)})},destroy:function(){var b=this,c=b.axes,f=b.series,d=b.container,l,e=d&&d.parentNode;k(b,"destroy");b.renderer.forExport?a.erase(n,b):n[b.index]=void 0;a.chartCount--;b.renderTo.removeAttribute("data-highcharts-chart");z(b);for(l=c.length;l--;)c[l]=c[l].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(l=f.length;l--;)f[l]=
f[l].destroy();"title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function(a){var c=b[a];c&&c.destroy&&(b[a]=c.destroy())});d&&(d.innerHTML="",z(d),e&&v(d));C(b,function(a,c){delete b[c]})},firstRender:function(){var b=this,c=b.options;if(!b.isReadyToRender||b.isReadyToRender()){b.getContainer();b.resetMargins();b.setChartSize();b.propFromSeries();b.getAxes();(a.isArray(c.series)?
c.series:[]).forEach(function(a){b.initSeries(a)});b.linkSeries();k(b,"beforeRender");l&&(b.pointer=new l(b,c));b.render();if(!b.renderer.imgCount&&b.onload)b.onload();b.temporaryDisplay(!0)}},onload:function(){this.callbacks.concat([this.callback]).forEach(function(a){a&&void 0!==this.index&&a.apply(this,[this])},this);k(this,"load");k(this,"render");d(this.index)&&this.setReflow(this.options.chart.reflow);this.onload=null}})});J(G,"parts/ScrollablePlotArea.js",[G["parts/Globals.js"]],function(a){var E=
a.addEvent,H=a.Chart;E(H,"afterSetChartSize",function(B){var h=this.options.chart.scrollablePlotArea,e=h&&h.minWidth,h=h&&h.minHeight,q;if(!this.renderer.forExport){if(e){if(this.scrollablePixelsX=e=Math.max(0,e-this.chartWidth))this.plotWidth+=e,this.inverted?this.clipBox.height+=e:this.clipBox.width+=e,q={1:{name:"right",value:e}}}else h&&(this.scrollablePixelsY=e=Math.max(0,h-this.chartHeight))&&(this.plotHeight+=e,this.inverted?this.clipBox.width+=e:this.clipBox.height+=e,q={2:{name:"bottom",
value:e}});q&&!B.skipAxes&&this.axes.forEach(function(e){q[e.side]?e.getPlotLinePath=function(){var h=q[e.side].name,t=this[h],n;this[h]=t-q[e.side].value;n=a.Axis.prototype.getPlotLinePath.apply(this,arguments);this[h]=t;return n}:(e.setAxisSize(),e.setAxisTranslation())})}});E(H,"render",function(){this.scrollablePixelsX||this.scrollablePixelsY?(this.setUpScrolling&&this.setUpScrolling(),this.applyFixed()):this.fixedDiv&&this.applyFixed()});H.prototype.setUpScrolling=function(){var B={WebkitOverflowScrolling:"touch",
overflowX:"hidden",overflowY:"hidden"};this.scrollablePixelsX&&(B.overflowX="auto");this.scrollablePixelsY&&(B.overflowY="auto");this.scrollingContainer=a.createElement("div",{className:"highcharts-scrolling"},B,this.renderTo);this.innerContainer=a.createElement("div",{className:"highcharts-inner-container"},null,this.scrollingContainer);this.innerContainer.appendChild(this.container);this.setUpScrolling=null};H.prototype.moveFixedElements=function(){var a=this.container,h=this.fixedRenderer,e=".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-reset-zoom .highcharts-subtitle .highcharts-title .highcharts-legend-checkbox".split(" "),
q;this.scrollablePixelsX&&!this.inverted?q=".highcharts-yaxis":this.scrollablePixelsX&&this.inverted?q=".highcharts-xaxis":this.scrollablePixelsY&&!this.inverted?q=".highcharts-xaxis":this.scrollablePixelsY&&this.inverted&&(q=".highcharts-yaxis");e.push(q,q+"-labels");e.forEach(function(e){[].forEach.call(a.querySelectorAll(e),function(a){(a.namespaceURI===h.SVG_NS?h.box:h.box.parentNode).appendChild(a);a.style.pointerEvents="auto"})})};H.prototype.applyFixed=function(){var B,h,e=!this.fixedDiv,q=
this.options.chart.scrollablePlotArea;e?(this.fixedDiv=a.createElement("div",{className:"highcharts-fixed"},{position:"absolute",overflow:"hidden",pointerEvents:"none",zIndex:2},null,!0),this.renderTo.insertBefore(this.fixedDiv,this.renderTo.firstChild),this.renderTo.style.overflow="visible",this.fixedRenderer=B=new a.Renderer(this.fixedDiv,this.chartWidth,this.chartHeight),this.scrollableMask=B.path().attr({fill:a.color(this.options.chart.backgroundColor||"#fff").setOpacity(a.pick(q.opacity,.85)).get(),
zIndex:-1}).addClass("highcharts-scrollable-mask").add(),this.moveFixedElements(),E(this,"afterShowResetZoom",this.moveFixedElements)):this.fixedRenderer.setSize(this.chartWidth,this.chartHeight);B=this.chartWidth+(this.scrollablePixelsX||0);h=this.chartHeight+(this.scrollablePixelsY||0);a.stop(this.container);this.container.style.width=B+"px";this.container.style.height=h+"px";this.renderer.boxWrapper.attr({width:B,height:h,viewBox:[0,0,B,h].join(" ")});this.chartBackground.attr({width:B,height:h});
this.scrollablePixelsY&&(this.scrollingContainer.style.height=this.chartHeight+"px");e&&(q.scrollPositionX&&(this.scrollingContainer.scrollLeft=this.scrollablePixelsX*q.scrollPositionX),q.scrollPositionY&&(this.scrollingContainer.scrollTop=this.scrollablePixelsY*q.scrollPositionY));h=this.axisOffset;e=this.plotTop-h[0]-1;q=this.plotLeft-h[3]-1;B=this.plotTop+this.plotHeight+h[2]+1;h=this.plotLeft+this.plotWidth+h[1]+1;var t=this.plotLeft+this.plotWidth-(this.scrollablePixelsX||0),u=this.plotTop+this.plotHeight-
(this.scrollablePixelsY||0),e=this.scrollablePixelsX?["M",0,e,"L",this.plotLeft-1,e,"L",this.plotLeft-1,B,"L",0,B,"Z","M",t,e,"L",this.chartWidth,e,"L",this.chartWidth,B,"L",t,B,"Z"]:this.scrollablePixelsY?["M",q,0,"L",q,this.plotTop-1,"L",h,this.plotTop-1,"L",h,0,"Z","M",q,u,"L",q,this.chartHeight,"L",h,this.chartHeight,"L",h,u,"Z"]:["M",0,0];"adjustHeight"!==this.redrawTrigger&&this.scrollableMask.attr({d:e})}});J(G,"parts/Point.js",[G["parts/Globals.js"]],function(a){var E,H=a.extend,B=a.erase,
h=a.fireEvent,e=a.format,q=a.isArray,t=a.isNumber,u=a.pick,v=a.uniqueKey,n=a.defined,g=a.removeEvent;a.Point=E=function(){};a.Point.prototype={init:function(a,e,b){this.series=a;this.applyOptions(e,b);this.id=n(this.id)?this.id:v();this.resolveColor();a.chart.pointCount++;h(this,"afterInit");return this},resolveColor:function(){var a=this.series,e;e=a.chart.options.chart.colorCount;var b=a.chart.styledMode;b||this.options.color||(this.color=a.color);a.options.colorByPoint?(b||(e=a.options.colors||
a.chart.options.colors,this.color=this.color||e[a.colorCounter],e=e.length),b=a.colorCounter,a.colorCounter++,a.colorCounter===e&&(a.colorCounter=0)):b=a.colorIndex;this.colorIndex=u(this.colorIndex,b)},applyOptions:function(a,e){var b=this.series,d=b.options.pointValKey||b.pointValKey;a=E.prototype.optionsToObject.call(this,a);H(this,a);this.options=this.options?H(this.options,a):a;a.group&&delete this.group;a.dataLabels&&delete this.dataLabels;d&&(this.y=this[d]);if(this.isNull=u(this.isValid&&
!this.isValid(),null===this.x||!t(this.y,!0)))this.formatPrefix="null";this.selected&&(this.state="select");"name"in this&&void 0===e&&b.xAxis&&b.xAxis.hasNames&&(this.x=b.xAxis.nameToX(this));void 0===this.x&&b&&(this.x=void 0===e?b.autoIncrement(this):e);return this},setNestedProperty:function(d,e,b){b.split(".").reduce(function(b,d,c,g){b[d]=g.length-1===c?e:a.isObject(b[d],!0)?b[d]:{};return b[d]},d);return d},optionsToObject:function(d){var e={},b=this.series,g=b.options.keys,p=g||b.pointArrayMap||
["y"],c=p.length,h=0,n=0;if(t(d)||null===d)e[p[0]]=d;else if(q(d))for(!g&&d.length>c&&(b=typeof d[0],"string"===b?e.name=d[0]:"number"===b&&(e.x=d[0]),h++);n<c;)g&&void 0===d[h]||(0<p[n].indexOf(".")?a.Point.prototype.setNestedProperty(e,d[h],p[n]):e[p[n]]=d[h]),h++,n++;else"object"===typeof d&&(e=d,d.dataLabels&&(b._hasPointLabels=!0),d.marker&&(b._hasPointMarkers=!0));return e},getClassName:function(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":
"")+(this.isNull?" highcharts-null-point":"")+(void 0!==this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?" "+this.zone.className.replace("highcharts-negative",""):"")},getZone:function(){var a=this.series,e=a.zones,a=a.zoneAxis||"y",b=0,g;for(g=e[b];this[a]>=g.value;)g=e[++b];this.nonZonedColor||(this.nonZonedColor=this.color);this.color=g&&g.color&&!this.options.color?g.color:this.nonZonedColor;return g},
destroy:function(){var a=this.series.chart,e=a.hoverPoints,b;a.pointCount--;e&&(this.setState(),B(e,this),e.length||(a.hoverPoints=null));if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel||this.dataLabels)g(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);for(b in this)this[b]=null},destroyElements:function(a){var d=this,b=[],e,g;a=a||{graphic:1,dataLabel:1};a.graphic&&b.push("graphic","shadowGroup");a.dataLabel&&b.push("dataLabel","dataLabelUpper","connector");
for(g=b.length;g--;)e=b[g],d[e]&&(d[e]=d[e].destroy());["dataLabel","connector"].forEach(function(b){var c=b+"s";a[b]&&d[c]&&(d[c].forEach(function(a){a.element&&a.destroy()}),delete d[c])})},getLabelConfig:function(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var d=this.series,b=d.tooltipOptions,g=u(b.valueDecimals,
""),p=b.valuePrefix||"",c=b.valueSuffix||"";d.chart.styledMode&&(a=d.chart.tooltip.styledModeFormat(a));(d.pointArrayMap||["y"]).forEach(function(b){b="{point."+b;if(p||c)a=a.replace(RegExp(b+"}","g"),p+b+"}"+c);a=a.replace(RegExp(b+"}","g"),b+":,."+g+"f}")});return e(a,{point:this,series:this.series},d.chart.time)},firePointEvent:function(a,e,b){var d=this,g=this.series.options;(g.point.events[a]||d.options&&d.options.events&&d.options.events[a])&&this.importEvents();"click"===a&&g.allowPointSelect&&
(b=function(a){d.select&&d.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});h(this,a,e,b)},visible:!0}});J(G,"parts/Series.js",[G["parts/Globals.js"]],function(a){var E=a.addEvent,H=a.animObject,B=a.arrayMax,h=a.arrayMin,e=a.correctFloat,q=a.defaultOptions,t=a.defaultPlotOptions,u=a.defined,v=a.erase,n=a.extend,g=a.fireEvent,d=a.isArray,m=a.isNumber,b=a.isString,k=a.merge,p=a.objectEach,c=a.pick,x=a.removeEvent,K=a.splat,w=a.SVGElement,F=a.syncTimeout,C=a.win;a.Series=a.seriesType("line",null,{lineWidth:2,
allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},marker:{lineWidth:0,lineColor:"#ffffff",enabledThreshold:2,radius:4,states:{normal:{animation:!0},hover:{animation:{duration:50},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return null===this.y?"":a.numberFormat(this.y,-1)},padding:5,style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},
verticalAlign:"bottom",x:0,y:0},cropThreshold:300,opacity:1,pointRange:0,softThreshold:!0,states:{normal:{animation:!0},hover:{animation:{duration:50},lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},select:{animation:{duration:0}},inactive:{animation:{duration:50},opacity:.2}},stickyTracking:!0,turboThreshold:1E3,findNearestPointBy:"x"},{isCartesian:!0,pointClass:a.Point,sorted:!0,requireSorting:!0,directTouch:!1,axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],coll:"series",
cropShoulder:1,init:function(b,d){g(this,"init",{options:d});var e=this,l,k=b.series,f;e.chart=b;e.options=d=e.setOptions(d);e.linkedSeries=[];e.bindAxes();n(e,{name:d.name,state:"",visible:!1!==d.visible,selected:!0===d.selected});l=d.events;p(l,function(b,c){!a.isFunction(b)||e.hcEvents&&e.hcEvents[c]&&e.hcEvents[c].some(function(a){return a.fn===b})||E(e,c,b)});if(l&&l.click||d.point&&d.point.events&&d.point.events.click||d.allowPointSelect)b.runTrackerClick=!0;e.getColor();e.getSymbol();e.parallelArrays.forEach(function(a){e[a+
"Data"]||(e[a+"Data"]=[])});e.points||e.setData(d.data,!1);e.isCartesian&&(b.hasCartesianSeries=!0);k.length&&(f=k[k.length-1]);e._i=c(f&&f._i,-1)+1;b.orderSeries(this.insert(k));g(this,"afterInit")},insert:function(a){var b=this.options.index,d;if(m(b)){for(d=a.length;d--;)if(b>=c(a[d].options.index,a[d]._i)){a.splice(d+1,0,this);break}-1===d&&a.unshift(this);d+=1}else a.push(this);return c(d,a.length-1)},bindAxes:function(){var b=this,c=b.options,d=b.chart,e;g(this,"bindAxes",null,function(){(b.axisTypes||
[]).forEach(function(l){d[l].forEach(function(a){e=a.options;if(c[l]===e.index||void 0!==c[l]&&c[l]===e.id||void 0===c[l]&&0===e.index)b.insert(a.series),b[l]=a,a.isDirty=!0});b[l]||b.optionalAxis===l||a.error(18,!0,d)})})},updateParallelArrays:function(a,b){var c=a.series,d=arguments,e=m(b)?function(f){var d="y"===f&&c.toYData?c.toYData(a):a[f];c[f+"Data"][b]=d}:function(a){Array.prototype[b].apply(c[a+"Data"],Array.prototype.slice.call(d,2))};c.parallelArrays.forEach(e)},hasData:function(){return this.visible&&
void 0!==this.dataMax&&void 0!==this.dataMin||this.visible&&this.yData&&0<this.yData.length},autoIncrement:function(){var a=this.options,b=this.xIncrement,d,e=a.pointIntervalUnit,g=this.chart.time,b=c(b,a.pointStart,0);this.pointInterval=d=c(this.pointInterval,a.pointInterval,1);e&&(a=new g.Date(b),"day"===e?g.set("Date",a,g.get("Date",a)+d):"month"===e?g.set("Month",a,g.get("Month",a)+d):"year"===e&&g.set("FullYear",a,g.get("FullYear",a)+d),d=a.getTime()-b);this.xIncrement=b+d;return b},setOptions:function(a){var b=
this.chart,d=b.options,e=d.plotOptions,l=b.userOptions||{};a=k(a);var b=b.styledMode,f={plotOptions:e,userOptions:a};g(this,"setOptions",f);var m=l.plotOptions||{},p=f.plotOptions[this.type];this.userOptions=f.userOptions;l=k(p,e.series,l.plotOptions&&l.plotOptions[this.type],a);this.tooltipOptions=k(q.tooltip,q.plotOptions.series&&q.plotOptions.series.tooltip,q.plotOptions[this.type].tooltip,d.tooltip.userOptions,e.series&&e.series.tooltip,e[this.type].tooltip,a.tooltip);this.stickyTracking=c(a.stickyTracking,
m[this.type]&&m[this.type].stickyTracking,m.series&&m.series.stickyTracking,this.tooltipOptions.shared&&!this.noSharedTooltip?!0:l.stickyTracking);null===p.marker&&delete l.marker;this.zoneAxis=l.zoneAxis;d=this.zones=(l.zones||[]).slice();!l.negativeColor&&!l.negativeFillColor||l.zones||(e={value:l[this.zoneAxis+"Threshold"]||l.threshold||0,className:"highcharts-negative"},b||(e.color=l.negativeColor,e.fillColor=l.negativeFillColor),d.push(e));d.length&&u(d[d.length-1].value)&&d.push(b?{}:{color:this.color,
fillColor:this.fillColor});g(this,"afterSetOptions",{options:l});return l},getName:function(){return c(this.options.name,"Series "+(this.index+1))},getCyclic:function(a,b,d){var e,l=this.chart,f=this.userOptions,g=a+"Index",k=a+"Counter",m=d?d.length:c(l.options.chart[a+"Count"],l[a+"Count"]);b||(e=c(f[g],f["_"+g]),u(e)||(l.series.length||(l[k]=0),f["_"+g]=e=l[k]%m,l[k]+=1),d&&(b=d[e]));void 0!==e&&(this[g]=e);this[a]=b},getColor:function(){this.chart.styledMode?this.getCyclic("color"):this.options.colorByPoint?
this.options.color=null:this.getCyclic("color",this.options.color||t[this.type].color,this.chart.options.colors)},getSymbol:function(){this.getCyclic("symbol",this.options.marker.symbol,this.chart.options.symbols)},findPointIndex:function(a,b){var c=a.id;a=a.x;var d=this.points,e,f;c&&(f=(c=this.chart.get(c))&&c.index,void 0!==f&&(e=!0));void 0===f&&m(a)&&(f=this.xData.indexOf(a,b));-1!==f&&void 0!==f&&this.cropped&&(f=f>=this.cropStart?f-this.cropStart:f);!e&&d[f]&&d[f].touched&&(f=void 0);return f},
drawLegendSymbol:a.LegendSymbolMixin.drawLineMarker,updateData:function(b){var c=this.options,d=this.points,e=[],l,f,g,k=this.requireSorting,p=b.length===d.length,h=!0;this.xIncrement=null;b.forEach(function(b,f){var h,A=a.defined(b)&&this.pointClass.prototype.optionsToObject.call({series:this},b)||{};h=A.x;if(A.id||m(h))if(h=this.findPointIndex(A,g),-1===h||void 0===h?e.push(b):d[h]&&b!==c.data[h]?(d[h].update(b,!1,null,!1),d[h].touched=!0,k&&(g=h+1)):d[h]&&(d[h].touched=!0),!p||f!==h||this.hasDerivedData)l=
!0},this);if(l)for(b=d.length;b--;)(f=d[b])&&!f.touched&&f.remove(!1);else p?b.forEach(function(a,b){d[b].update&&a!==d[b].y&&d[b].update(a,!1,null,!1)}):h=!1;d.forEach(function(a){a&&(a.touched=!1)});if(!h)return!1;e.forEach(function(a){this.addPoint(a,!1,null,null,!1)},this);return!0},setData:function(e,g,k,p){var l=this,f=l.points,h=f&&f.length||0,A,n=l.options,D=l.chart,z=null,x=l.xAxis,w=n.turboThreshold,C=this.xData,q=this.yData,t=(A=l.pointArrayMap)&&A.length,u=n.keys,F=0,v=1,K;e=e||[];A=e.length;
g=c(g,!0);!1!==p&&A&&h&&!l.cropped&&!l.hasGroupedData&&l.visible&&!l.isSeriesBoosting&&(K=this.updateData(e));if(!K){l.xIncrement=null;l.colorCounter=0;this.parallelArrays.forEach(function(a){l[a+"Data"].length=0});if(w&&A>w){for(k=0;null===z&&k<A;)z=e[k],k++;if(m(z))for(k=0;k<A;k++)C[k]=this.autoIncrement(),q[k]=e[k];else if(d(z))if(t)for(k=0;k<A;k++)z=e[k],C[k]=z[0],q[k]=z.slice(1,t+1);else for(u&&(F=u.indexOf("x"),v=u.indexOf("y"),F=0<=F?F:0,v=0<=v?v:1),k=0;k<A;k++)z=e[k],C[k]=z[F],q[k]=z[v];else a.error(12,
!1,D)}else for(k=0;k<A;k++)void 0!==e[k]&&(z={series:l},l.pointClass.prototype.applyOptions.apply(z,[e[k]]),l.updateParallelArrays(z,k));q&&b(q[0])&&a.error(14,!0,D);l.data=[];l.options.data=l.userOptions.data=e;for(k=h;k--;)f[k]&&f[k].destroy&&f[k].destroy();x&&(x.minRange=x.userMinRange);l.isDirty=D.isDirtyBox=!0;l.isDirtyData=!!f;k=!1}"point"===n.legendType&&(this.processData(),this.generatePoints());g&&D.redraw(k)},processData:function(b){var c=this.xData,d=this.yData,e=c.length,l;l=0;var f,g,
k=this.xAxis,m,p=this.options;m=p.cropThreshold;var h=this.getExtremesFromAll||p.getExtremesFromAll,n=this.isCartesian,p=k&&k.val2lin,x=k&&k.isLog,w=this.requireSorting,C,q;if(n&&!this.isDirty&&!k.isDirty&&!this.yAxis.isDirty&&!b)return!1;k&&(b=k.getExtremes(),C=b.min,q=b.max);n&&this.sorted&&!h&&(!m||e>m||this.forceCrop)&&(c[e-1]<C||c[0]>q?(c=[],d=[]):this.yData&&(c[0]<C||c[e-1]>q)&&(l=this.cropData(this.xData,this.yData,C,q),c=l.xData,d=l.yData,l=l.start,f=!0));for(m=c.length||1;--m;)e=x?p(c[m])-
p(c[m-1]):c[m]-c[m-1],0<e&&(void 0===g||e<g)?g=e:0>e&&w&&(a.error(15,!1,this.chart),w=!1);this.cropped=f;this.cropStart=l;this.processedXData=c;this.processedYData=d;this.closestPointRange=g},cropData:function(a,b,d,e,g){var f=a.length,l=0,k=f,m;g=c(g,this.cropShoulder);for(m=0;m<f;m++)if(a[m]>=d){l=Math.max(0,m-g);break}for(d=m;d<f;d++)if(a[d]>e){k=d+g;break}return{xData:a.slice(l,k),yData:b.slice(l,k),start:l,end:k}},generatePoints:function(){var a=this.options,b=a.data,c=this.data,d,e=this.processedXData,
f=this.processedYData,k=this.pointClass,m=e.length,p=this.cropStart||0,h,x=this.hasGroupedData,a=a.keys,w,C=[],q;c||x||(c=[],c.length=b.length,c=this.data=c);a&&x&&(this.options.keys=!1);for(q=0;q<m;q++)h=p+q,x?(w=(new k).init(this,[e[q]].concat(K(f[q]))),w.dataGroup=this.groupMap[q],w.dataGroup.options&&(w.options=w.dataGroup.options,n(w,w.dataGroup.options),delete w.dataLabels)):(w=c[h])||void 0===b[h]||(c[h]=w=(new k).init(this,b[h],e[q])),w&&(w.index=h,C[q]=w);this.options.keys=a;if(c&&(m!==(d=
c.length)||x))for(q=0;q<d;q++)q!==p||x||(q+=m),c[q]&&(c[q].destroyElements(),c[q].plotX=void 0);this.data=c;this.points=C;g(this,"afterGeneratePoints")},getXExtremes:function(a){return{min:h(a),max:B(a)}},getExtremes:function(a){var b=this.yAxis,c=this.processedXData,e,l=[],f=0;e=this.xAxis.getExtremes();var k=e.min,p=e.max,n,w,x=this.requireSorting?this.cropShoulder:0,q,C;a=a||this.stackedYData||this.processedYData||[];e=a.length;for(C=0;C<e;C++)if(w=c[C],q=a[C],n=(m(q,!0)||d(q))&&(!b.positiveValuesOnly||
q.length||0<q),w=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||(c[C+x]||w)>=k&&(c[C-x]||w)<=p,n&&w)if(n=q.length)for(;n--;)"number"===typeof q[n]&&(l[f++]=q[n]);else l[f++]=q;this.dataMin=h(l);this.dataMax=B(l);g(this,"afterGetExtremes")},translate:function(){this.processedXData||this.processData();this.generatePoints();var a=this.options,b=a.stacking,k=this.xAxis,p=k.categories,h=this.yAxis,f=this.points,r=f.length,n=!!this.modifyValue,w,q=this.pointPlacementToXValue(),
C=m(q),x=a.threshold,t=a.startFromThreshold?x:0,F,v,K,B,E=this.zoneAxis||"y",H=Number.MAX_VALUE;for(w=0;w<r;w++){var G=f[w],J=G.x;v=G.y;var V=G.low,O=b&&h.stacks[(this.negStacks&&v<(t?0:x)?"-":"")+this.stackKey],W,X;h.positiveValuesOnly&&null!==v&&0>=v&&(G.isNull=!0);G.plotX=F=e(Math.min(Math.max(-1E5,k.translate(J,0,0,0,1,q,"flags"===this.type)),1E5));b&&this.visible&&!G.isNull&&O&&O[J]&&(B=this.getStackIndicator(B,J,this.index),W=O[J],X=W.points[B.key]);d(X)&&(V=X[0],v=X[1],V===t&&B.key===O[J].base&&
(V=c(m(x)&&x,h.min)),h.positiveValuesOnly&&0>=V&&(V=null),G.total=G.stackTotal=W.total,G.percentage=W.total&&G.y/W.total*100,G.stackY=v,W.setOffset(this.pointXOffset||0,this.barW||0));G.yBottom=u(V)?Math.min(Math.max(-1E5,h.translate(V,0,1,0,1)),1E5):null;n&&(v=this.modifyValue(v,G));G.plotY=v="number"===typeof v&&Infinity!==v?Math.min(Math.max(-1E5,h.translate(v,0,1,0,1)),1E5):void 0;G.isInside=void 0!==v&&0<=v&&v<=h.len&&0<=F&&F<=k.len;G.clientX=C?e(k.translate(J,0,0,0,1,q)):F;G.negative=G[E]<(a[E+
"Threshold"]||x||0);G.category=p&&void 0!==p[G.x]?p[G.x]:G.x;G.isNull||(void 0!==K&&(H=Math.min(H,Math.abs(F-K))),K=F);G.zone=this.zones.length&&G.getZone()}this.closestPointRangePx=H;g(this,"afterTranslate")},getValidPoints:function(a,b,c){var d=this.chart;return(a||this.points||[]).filter(function(a){return b&&!d.isInsidePlot(a.plotX,a.plotY,d.inverted)?!1:c||!a.isNull})},getClipBox:function(a,b){var c=this.options,d=this.chart,e=d.inverted,f=this.xAxis,l=f&&this.yAxis;a&&!1===c.clip&&l?a=e?{y:-d.chartWidth+
l.len+l.pos,height:d.chartWidth,width:d.chartHeight,x:-d.chartHeight+f.len+f.pos}:{y:-l.pos,height:d.chartHeight,width:d.chartWidth,x:-f.pos}:(a=this.clipBox||d.clipBox,b&&(a.width=d.plotSizeX,a.x=0));return b?{width:a.width,x:a.x}:a},setClip:function(a){var b=this.chart,c=this.options,d=b.renderer,e=b.inverted,f=this.clipBox,l=this.getClipBox(a),g=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,l.height,c.xAxis,c.yAxis].join(),k=b[g],m=b[g+"m"];k||(a&&(l.width=0,e&&(l.x=b.plotSizeX+
(!1!==c.clip?0:b.plotTop)),b[g+"m"]=m=d.clipRect(e?b.plotSizeX+99:-99,e?-b.plotLeft:-b.plotTop,99,e?b.chartWidth:b.chartHeight)),b[g]=k=d.clipRect(l),k.count={length:0});a&&!k.count[this.index]&&(k.count[this.index]=!0,k.count.length+=1);if(!1!==c.clip||a)this.group.clip(a||f?k:b.clipRect),this.markerGroup.clip(m),this.sharedClipKey=g;a||(k.count[this.index]&&(delete k.count[this.index],--k.count.length),0===k.count.length&&g&&b[g]&&(f||(b[g]=b[g].destroy()),b[g+"m"]&&(b[g+"m"]=b[g+"m"].destroy())))},
animate:function(a){var b=this.chart,c=H(this.options.animation),d,e;a?this.setClip(c):(d=this.sharedClipKey,a=b[d],e=this.getClipBox(c,!0),a&&a.animate(e,c),b[d+"m"]&&b[d+"m"].animate({width:e.width+99,x:e.x-(b.inverted?0:99)},c),this.animate=null)},afterAnimate:function(){this.setClip();g(this,"afterAnimate");this.finishedAnimating=!0},drawPoints:function(){var a=this.points,b=this.chart,d,e,g,f,k,m=this.options.marker,p,h,n,w=this[this.specialGroup]||this.markerGroup;d=this.xAxis;var q,x=c(m.enabled,
!d||d.isRadial?!0:null,this.closestPointRangePx>=m.enabledThreshold*m.radius);if(!1!==m.enabled||this._hasPointMarkers)for(d=0;d<a.length;d++)if(e=a[d],k=(f=e.graphic)?"animate":"attr",p=e.marker||{},h=!!e.marker,g=x&&void 0===p.enabled||p.enabled,n=!1!==e.isInside,g&&!e.isNull){g=c(p.symbol,this.symbol);q=this.markerAttribs(e,e.selected&&"select");f?f[n?"show":"hide"](!0).animate(q):n&&(0<q.width||e.hasImage)&&(e.graphic=f=b.renderer.symbol(g,q.x,q.y,q.width,q.height,h?p:m).add(w));if(f&&!b.styledMode)f[k](this.pointAttribs(e,
e.selected&&"select"));f&&f.addClass(e.getClassName(),!0)}else f&&(e.graphic=f.destroy())},markerAttribs:function(a,b){var d=this.options.marker,e=a.marker||{},l=e.symbol||d.symbol,f=c(e.radius,d.radius);b&&(d=d.states[b],b=e.states&&e.states[b],f=c(b&&b.radius,d&&d.radius,f+(d&&d.radiusPlus||0)));a.hasImage=l&&0===l.indexOf("url");a.hasImage&&(f=0);a={x:Math.floor(a.plotX)-f,y:a.plotY-f};f&&(a.width=a.height=2*f);return a},pointAttribs:function(a,b){var d=this.options.marker,e=a&&a.options,l=e&&
e.marker||{},f=this.color,g=e&&e.color,k=a&&a.color,e=c(l.lineWidth,d.lineWidth),m=a&&a.zone&&a.zone.color;a=1;f=g||m||k||f;g=l.fillColor||d.fillColor||f;f=l.lineColor||d.lineColor||f;b=b||"normal";d=d.states[b];b=l.states&&l.states[b]||{};e=c(b.lineWidth,d.lineWidth,e+c(b.lineWidthPlus,d.lineWidthPlus,0));g=b.fillColor||d.fillColor||g;f=b.lineColor||d.lineColor||f;a=c(b.opacity,d.opacity,a);return{stroke:f,"stroke-width":e,fill:g,opacity:a}},destroy:function(b){var c=this,d=c.chart,e=/AppleWebKit\/533/.test(C.navigator.userAgent),
l,f,k=c.data||[],m,h;g(c,"destroy");b||x(c);(c.axisTypes||[]).forEach(function(a){(h=c[a])&&h.series&&(v(h.series,c),h.isDirty=h.forceRedraw=!0)});c.legendItem&&c.chart.legend.destroyItem(c);for(f=k.length;f--;)(m=k[f])&&m.destroy&&m.destroy();c.points=null;a.clearTimeout(c.animationTimeout);p(c,function(a,b){a instanceof w&&!a.survive&&(l=e&&"group"===b?"hide":"destroy",a[l]())});d.hoverSeries===c&&(d.hoverSeries=null);v(d.series,c);d.orderSeries();p(c,function(a,d){b&&"hcEvents"===d||delete c[d]})},
getGraphPath:function(a,b,c){var d=this,e=d.options,f=e.step,l,g=[],k=[],m;a=a||d.points;(l=a.reversed)&&a.reverse();(f={right:1,center:2}[f]||f&&3)&&l&&(f=4-f);!e.connectNulls||b||c||(a=this.getValidPoints(a));a.forEach(function(l,p){var h=l.plotX,n=l.plotY,r=a[p-1];(l.leftCliff||r&&r.rightCliff)&&!c&&(m=!0);l.isNull&&!u(b)&&0<p?m=!e.connectNulls:l.isNull&&!b?m=!0:(0===p||m?p=["M",l.plotX,l.plotY]:d.getPointSpline?p=d.getPointSpline(a,l,p):f?(p=1===f?["L",r.plotX,n]:2===f?["L",(r.plotX+h)/2,r.plotY,
"L",(r.plotX+h)/2,n]:["L",h,r.plotY],p.push("L",h,n)):p=["L",h,n],k.push(l.x),f&&(k.push(l.x),2===f&&k.push(l.x)),g.push.apply(g,p),m=!1)});g.xMap=k;return d.graphPath=g},drawGraph:function(){var a=this,b=this.options,c=(this.gappedPath||this.getGraphPath).call(this),d=this.chart.styledMode,e=[["graph","highcharts-graph"]];d||e[0].push(b.lineColor||this.color||"#cccccc",b.dashStyle);e=a.getZonesGraphs(e);e.forEach(function(f,e){var l=f[0],g=a[l],k=g?"animate":"attr";g?(g.endX=a.preventGraphAnimation?
null:c.xMap,g.animate({d:c})):c.length&&(a[l]=g=a.chart.renderer.path(c).addClass(f[1]).attr({zIndex:1}).add(a.group));g&&!d&&(l={stroke:f[2],"stroke-width":b.lineWidth,fill:a.fillGraph&&a.color||"none"},f[3]?l.dashstyle=f[3]:"square"!==b.linecap&&(l["stroke-linecap"]=l["stroke-linejoin"]="round"),g[k](l).shadow(2>e&&b.shadow));g&&(g.startX=c.xMap,g.isArea=c.isArea)})},getZonesGraphs:function(a){this.zones.forEach(function(b,c){c=["zone-graph-"+c,"highcharts-graph highcharts-zone-graph-"+c+" "+(b.className||
"")];this.chart.styledMode||c.push(b.color||this.color,b.dashStyle||this.options.dashStyle);a.push(c)},this);return a},applyZones:function(){var a=this,b=this.chart,d=b.renderer,e=this.zones,g,f,k=this.clips||[],m,p=this.graph,h=this.area,n=Math.max(b.chartWidth,b.chartHeight),w=this[(this.zoneAxis||"y")+"Axis"],q,x,C=b.inverted,t,u,v,F,K=!1;e.length&&(p||h)&&w&&void 0!==w.min?(x=w.reversed,t=w.horiz,p&&!this.showLine&&p.hide(),h&&h.hide(),q=w.getExtremes(),e.forEach(function(e,l){g=x?t?b.plotWidth:
0:t?0:w.toPixels(q.min)||0;g=Math.min(Math.max(c(f,g),0),n);f=Math.min(Math.max(Math.round(w.toPixels(c(e.value,q.max),!0)||0),0),n);K&&(g=f=w.toPixels(q.max));u=Math.abs(g-f);v=Math.min(g,f);F=Math.max(g,f);w.isXAxis?(m={x:C?F:v,y:0,width:u,height:n},t||(m.x=b.plotHeight-m.x)):(m={x:0,y:C?F:v,width:n,height:u},t&&(m.y=b.plotWidth-m.y));C&&d.isVML&&(m=w.isXAxis?{x:0,y:x?v:F,height:m.width,width:b.chartWidth}:{x:m.y-b.plotLeft-b.spacingBox.x,y:0,width:m.height,height:b.chartHeight});k[l]?k[l].animate(m):
k[l]=d.clipRect(m);p&&a["zone-graph-"+l].clip(k[l]);h&&a["zone-area-"+l].clip(k[l]);K=e.value>q.max;a.resetZones&&0===f&&(f=void 0)}),this.clips=k):a.visible&&(p&&p.show(!0),h&&h.show(!0))},invertGroups:function(a){function b(){["group","markerGroup"].forEach(function(b){c[b]&&(d.renderer.isVML&&c[b].attr({width:c.yAxis.len,height:c.xAxis.len}),c[b].width=c.yAxis.len,c[b].height=c.xAxis.len,c[b].invert(a))})}var c=this,d=c.chart,e;c.xAxis&&(e=E(d,"resize",b),E(c,"destroy",e),b(a),c.invertGroups=b)},
plotGroup:function(a,b,c,d,e){var f=this[a],l=!f;l&&(this[a]=f=this.chart.renderer.g().attr({zIndex:d||.1}).add(e));f.addClass("highcharts-"+b+" highcharts-series-"+this.index+" highcharts-"+this.type+"-series "+(u(this.colorIndex)?"highcharts-color-"+this.colorIndex+" ":"")+(this.options.className||"")+(f.hasClass("highcharts-tracker")?" highcharts-tracker":""),!0);f.attr({visibility:c})[l?"attr":"animate"](this.getPlotBox());return f},getPlotBox:function(){var a=this.chart,b=this.xAxis,c=this.yAxis;
a.inverted&&(b=c,c=this.xAxis);return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,b=a.chart,c,d=a.options,e=!!a.animate&&b.renderer.isSVG&&H(d.animation).duration,f=a.visible?"inherit":"hidden",k=d.zIndex,m=a.hasRendered,p=b.seriesGroup,h=b.inverted;g(this,"render");c=a.plotGroup("group","series",f,k,p);a.markerGroup=a.plotGroup("markerGroup","markers",f,k,p);e&&a.animate(!0);c.inverted=a.isCartesian||a.invertable?h:!1;a.drawGraph&&
(a.drawGraph(),a.applyZones());a.visible&&a.drawPoints();a.drawDataLabels&&a.drawDataLabels();a.redrawPoints&&a.redrawPoints();a.drawTracker&&!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(h);!1===d.clip||a.sharedClipKey||m||c.clip(b.clipRect);e&&a.animate();m||(a.animationTimeout=F(function(){a.afterAnimate()},e));a.isDirty=!1;a.hasRendered=!0;g(a,"afterRender")},redraw:function(){var a=this.chart,b=this.isDirty||this.isDirtyData,d=this.group,e=this.xAxis,g=this.yAxis;d&&(a.inverted&&
d.attr({width:a.plotWidth,height:a.plotHeight}),d.animate({translateX:c(e&&e.left,a.plotLeft),translateY:c(g&&g.top,a.plotTop)}));this.translate();this.render();b&&delete this.kdTree},kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var c=this.xAxis,d=this.yAxis,e=this.chart.inverted;return this.searchKDTree({clientX:e?c.len-a.chartY+c.pos:a.chartX-c.pos,plotY:e?d.len-a.chartX+d.pos:a.chartY-d.pos},b,a)},buildKDTree:function(a){function b(a,d,e){var f,g;if(g=a&&a.length)return f=c.kdAxisArray[d%
e],a.sort(function(a,b){return a[f]-b[f]}),g=Math.floor(g/2),{point:a[g],left:b(a.slice(0,g),d+1,e),right:b(a.slice(g+1),d+1,e)}}this.buildingKdTree=!0;var c=this,d=-1<c.options.findNearestPointBy.indexOf("y")?2:1;delete c.kdTree;F(function(){c.kdTree=b(c.getValidPoints(null,!c.directTouch),d,d);c.buildingKdTree=!1},c.options.kdNow||a&&"touchstart"===a.type?0:1)},searchKDTree:function(a,b,c){function d(a,b,c,k){var m=b.point,p=e.kdAxisArray[c%k],h,n,r=m;n=u(a[f])&&u(m[f])?Math.pow(a[f]-m[f],2):null;
h=u(a[g])&&u(m[g])?Math.pow(a[g]-m[g],2):null;h=(n||0)+(h||0);m.dist=u(h)?Math.sqrt(h):Number.MAX_VALUE;m.distX=u(n)?Math.sqrt(n):Number.MAX_VALUE;p=a[p]-m[p];h=0>p?"left":"right";n=0>p?"right":"left";b[h]&&(h=d(a,b[h],c+1,k),r=h[l]<r[l]?h:m);b[n]&&Math.sqrt(p*p)<r[l]&&(a=d(a,b[n],c+1,k),r=a[l]<r[l]?a:r);return r}var e=this,f=this.kdAxisArray[0],g=this.kdAxisArray[1],l=b?"distX":"dist";b=-1<e.options.findNearestPointBy.indexOf("y")?2:1;this.kdTree||this.buildingKdTree||this.buildKDTree(c);if(this.kdTree)return d(a,
this.kdTree,b,b)},pointPlacementToXValue:function(){var a=this.options.pointPlacement;"between"===a&&(a=.5);m(a)&&(a*=c(this.options.pointRange||this.xAxis.pointRange));return a}})});J(G,"parts/Stacking.js",[G["parts/Globals.js"]],function(a){var E=a.Axis,H=a.Chart,B=a.correctFloat,h=a.defined,e=a.destroyObjectProperties,q=a.format,t=a.objectEach,u=a.pick,v=a.Series;a.StackItem=function(a,e,d,m,b){var g=a.chart.inverted;this.axis=a;this.isNegative=d;this.options=e;this.x=m;this.total=null;this.points=
{};this.stack=b;this.rightCliff=this.leftCliff=0;this.alignOptions={align:e.align||(g?d?"left":"right":"center"),verticalAlign:e.verticalAlign||(g?"middle":d?"bottom":"top"),y:u(e.y,g?4:d?14:-6),x:u(e.x,g?d?-6:6:0)};this.textAlign=e.textAlign||(g?d?"right":"left":"center")};a.StackItem.prototype={destroy:function(){e(this,this.axis)},render:function(a){var e=this.axis.chart,d=this.options,m=d.format,m=m?q(m,this,e.time):d.formatter.call(this);this.label?this.label.attr({text:m,visibility:"hidden"}):
this.label=e.renderer.text(m,null,null,d.useHTML).css(d.style).attr({align:this.textAlign,rotation:d.rotation,visibility:"hidden"}).add(a);this.label.labelrank=e.plotHeight},setOffset:function(a,e,d,m){var b=this.axis,g=b.chart;m=b.translate(b.usePercentage?100:m?m:this.total,0,0,0,1);d=b.translate(d?d:0);d=h(m)&&Math.abs(m-d);a=g.xAxis[0].translate(this.x)+a;b=h(m)&&this.getStackBox(g,this,a,m,e,d,b);(e=this.label)&&b&&(e.align(this.alignOptions,null,b),b=e.alignAttr,e[!1===this.options.crop||g.isInsidePlot(b.x,
b.y)?"show":"hide"](!0))},getStackBox:function(a,e,d,m,b,k,p){var c=e.axis.reversed,g=a.inverted;a=p.height+p.pos-(g?a.plotLeft:a.plotTop);e=e.isNegative&&!c||!e.isNegative&&c;return{x:g?e?m:m-k:d,y:g?a-d-b:e?a-m-k:a-m,width:g?k:b,height:g?b:k}}};H.prototype.getStacks=function(){var a=this;a.yAxis.forEach(function(a){a.stacks&&a.hasVisibleSeries&&(a.oldStacks=a.stacks)});a.series.forEach(function(e){!e.options.stacking||!0!==e.visible&&!1!==a.options.chart.ignoreHiddenSeries||(e.stackKey=e.type+u(e.options.stack,
""))})};E.prototype.buildStacks=function(){var a=this.series,e=u(this.options.reversedStacks,!0),d=a.length,m;if(!this.isXAxis){this.usePercentage=!1;for(m=d;m--;)a[e?m:d-m-1].setStackedPoints();for(m=0;m<d;m++)a[m].modifyStacks()}};E.prototype.renderStackTotals=function(){var a=this.chart,e=a.renderer,d=this.stacks,m=this.stackTotalGroup;m||(this.stackTotalGroup=m=e.g("stack-labels").attr({visibility:"visible",zIndex:6}).add());m.translate(a.plotLeft,a.plotTop);t(d,function(a){t(a,function(a){a.render(m)})})};
E.prototype.resetStacks=function(){var a=this,e=a.stacks;a.isXAxis||t(e,function(d){t(d,function(e,b){e.touched<a.stacksTouched?(e.destroy(),delete d[b]):(e.total=null,e.cumulative=null)})})};E.prototype.cleanStacks=function(){var a;this.isXAxis||(this.oldStacks&&(a=this.stacks=this.oldStacks),t(a,function(a){t(a,function(a){a.cumulative=a.total})}))};v.prototype.setStackedPoints=function(){if(this.options.stacking&&(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var e=this.processedXData,
g=this.processedYData,d=[],m=g.length,b=this.options,k=b.threshold,p=u(b.startFromThreshold&&k,0),c=b.stack,b=b.stacking,q=this.stackKey,t="-"+q,w=this.negStacks,v=this.yAxis,C=v.stacks,l=v.oldStacks,D,A,z,I,f,r,E;v.stacksTouched+=1;for(f=0;f<m;f++)r=e[f],E=g[f],D=this.getStackIndicator(D,r,this.index),I=D.key,z=(A=w&&E<(p?0:k))?t:q,C[z]||(C[z]={}),C[z][r]||(l[z]&&l[z][r]?(C[z][r]=l[z][r],C[z][r].total=null):C[z][r]=new a.StackItem(v,v.options.stackLabels,A,r,c)),z=C[z][r],null!==E?(z.points[I]=z.points[this.index]=
[u(z.cumulative,p)],h(z.cumulative)||(z.base=I),z.touched=v.stacksTouched,0<D.index&&!1===this.singleStacks&&(z.points[I][0]=z.points[this.index+","+r+",0"][0])):z.points[I]=z.points[this.index]=null,"percent"===b?(A=A?q:t,w&&C[A]&&C[A][r]?(A=C[A][r],z.total=A.total=Math.max(A.total,z.total)+Math.abs(E)||0):z.total=B(z.total+(Math.abs(E)||0))):z.total=B(z.total+(E||0)),z.cumulative=u(z.cumulative,p)+(E||0),null!==E&&(z.points[I].push(z.cumulative),d[f]=z.cumulative);"percent"===b&&(v.usePercentage=
!0);this.stackedYData=d;v.oldStacks={}}};v.prototype.modifyStacks=function(){var a=this,e=a.stackKey,d=a.yAxis.stacks,m=a.processedXData,b,k=a.options.stacking;a[k+"Stacker"]&&[e,"-"+e].forEach(function(e){for(var c=m.length,g,p;c--;)if(g=m[c],b=a.getStackIndicator(b,g,a.index,e),p=(g=d[e]&&d[e][g])&&g.points[b.key])a[k+"Stacker"](p,g,c)})};v.prototype.percentStacker=function(a,e,d){e=e.total?100/e.total:0;a[0]=B(a[0]*e);a[1]=B(a[1]*e);this.stackedYData[d]=a[1]};v.prototype.getStackIndicator=function(a,
e,d,m){!h(a)||a.x!==e||m&&a.key!==m?a={x:e,index:0,key:m}:a.index++;a.key=[d,e,a.index].join();return a}});J(G,"parts/Dynamics.js",[G["parts/Globals.js"]],function(a){var E=a.addEvent,H=a.animate,B=a.Axis,h=a.Chart,e=a.createElement,q=a.css,t=a.defined,u=a.erase,v=a.extend,n=a.fireEvent,g=a.isNumber,d=a.isObject,m=a.isArray,b=a.merge,k=a.objectEach,p=a.pick,c=a.Point,x=a.Series,K=a.seriesTypes,w=a.setAnimation,F=a.splat;a.cleanRecursively=function(b,c){var e={};k(b,function(g,l){if(d(b[l],!0)&&!b.nodeType&&
c[l])g=a.cleanRecursively(b[l],c[l]),Object.keys(g).length&&(e[l]=g);else if(d(b[l])||b[l]!==c[l])e[l]=b[l]});return e};v(h.prototype,{addSeries:function(a,b,c){var d,e=this;a&&(b=p(b,!0),n(e,"addSeries",{options:a},function(){d=e.initSeries(a);e.isDirtyLegend=!0;e.linkSeries();n(e,"afterAddSeries",{series:d});b&&e.redraw(c)}));return d},addAxis:function(a,c,d,e){var g=c?"xAxis":"yAxis",l=this.options;a=b(a,{index:this[g].length,isX:c});c=new B(this,a);l[g]=F(l[g]||{});l[g].push(a);p(d,!0)&&this.redraw(e);
return c},showLoading:function(a){var b=this,c=b.options,d=b.loadingDiv,g=c.loading,k=function(){d&&q(d,{left:b.plotLeft+"px",top:b.plotTop+"px",width:b.plotWidth+"px",height:b.plotHeight+"px"})};d||(b.loadingDiv=d=e("div",{className:"highcharts-loading highcharts-loading-hidden"},null,b.container),b.loadingSpan=e("span",{className:"highcharts-loading-inner"},null,d),E(b,"redraw",k));d.className="highcharts-loading";b.loadingSpan.innerHTML=a||c.lang.loading;b.styledMode||(q(d,v(g.style,{zIndex:10})),
q(b.loadingSpan,g.labelStyle),b.loadingShown||(q(d,{opacity:0,display:""}),H(d,{opacity:g.style.opacity||.5},{duration:g.showDuration||0})));b.loadingShown=!0;k()},hideLoading:function(){var a=this.options,b=this.loadingDiv;b&&(b.className="highcharts-loading highcharts-loading-hidden",this.styledMode||H(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){q(b,{display:"none"})}}));this.loadingShown=!1},propsRequireDirtyBox:"backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
propsRequireReflow:"margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" "),collectionsWithUpdate:"xAxis yAxis zAxis series colorAxis pane".split(" "),update:function(c,d,e,m){var l=this,h={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle"},f,r,w,q,x=[];n(l,"update",{options:c});c.isResponsiveOptions||
l.setResponsive(!1,!0);c=a.cleanRecursively(c,l.options);b(!0,l.userOptions,c);if(f=c.chart){b(!0,l.options.chart,f);"className"in f&&l.setClassName(f.className);"reflow"in f&&l.setReflow(f.reflow);if("inverted"in f||"polar"in f||"type"in f)l.propFromSeries(),r=!0;"alignTicks"in f&&(r=!0);k(f,function(a,b){-1!==l.propsRequireUpdateSeries.indexOf("chart."+b)&&(w=!0);-1!==l.propsRequireDirtyBox.indexOf(b)&&(l.isDirtyBox=!0);-1!==l.propsRequireReflow.indexOf(b)&&(q=!0)});!l.styledMode&&"style"in f&&
l.renderer.setStyle(f.style)}!l.styledMode&&c.colors&&(this.options.colors=c.colors);c.plotOptions&&b(!0,this.options.plotOptions,c.plotOptions);c.time&&this.time===a.time&&(this.time=new a.Time(c.time));k(c,function(a,b){if(l[b]&&"function"===typeof l[b].update)l[b].update(a,!1);else if("function"===typeof l[h[b]])l[h[b]](a);"chart"!==b&&-1!==l.propsRequireUpdateSeries.indexOf(b)&&(w=!0)});this.collectionsWithUpdate.forEach(function(a){var b;c[a]&&("series"===a&&(b=[],l[a].forEach(function(a,c){a.options.isInternal||
b.push(p(a.options.index,c))})),F(c[a]).forEach(function(c,d){(d=t(c.id)&&l.get(c.id)||l[a][b?b[d]:d])&&d.coll===a&&(d.update(c,!1),e&&(d.touched=!0));!d&&e&&l.collectionsWithInit[a]&&(l.collectionsWithInit[a][0].apply(l,[c].concat(l.collectionsWithInit[a][1]||[]).concat([!1])).touched=!0)}),e&&l[a].forEach(function(a){a.touched||a.options.isInternal?delete a.touched:x.push(a)}))});x.forEach(function(a){a.remove&&a.remove(!1)});r&&l.axes.forEach(function(a){a.update({},!1)});w&&l.series.forEach(function(a){a.update({},
!1)});c.loading&&b(!0,l.options.loading,c.loading);r=f&&f.width;f=f&&f.height;a.isString(f)&&(f=a.relativeLength(f,r||l.chartWidth));q||g(r)&&r!==l.chartWidth||g(f)&&f!==l.chartHeight?l.setSize(r,f,m):p(d,!0)&&l.redraw(m);n(l,"afterUpdate",{options:c,redraw:d,animation:m})},setSubtitle:function(a){this.setTitle(void 0,a)}});h.prototype.collectionsWithInit={xAxis:[h.prototype.addAxis,[!0]],yAxis:[h.prototype.addAxis,[!1]],series:[h.prototype.addSeries]};v(c.prototype,{update:function(a,b,c,e){function g(){l.applyOptions(a);
null===l.y&&k&&(l.graphic=k.destroy());d(a,!0)&&(k&&k.element&&a&&a.marker&&void 0!==a.marker.symbol&&(l.graphic=k.destroy()),a&&a.dataLabels&&l.dataLabel&&(l.dataLabel=l.dataLabel.destroy()),l.connector&&(l.connector=l.connector.destroy()));m=l.index;f.updateParallelArrays(l,m);n.data[m]=d(n.data[m],!0)||d(a,!0)?l.options:p(a,n.data[m]);f.isDirty=f.isDirtyData=!0;!f.fixedBox&&f.hasCartesianSeries&&(h.isDirtyBox=!0);"point"===n.legendType&&(h.isDirtyLegend=!0);b&&h.redraw(c)}var l=this,f=l.series,
k=l.graphic,m,h=f.chart,n=f.options;b=p(b,!0);!1===e?g():l.firePointEvent("update",{options:a},g)},remove:function(a,b){this.series.removePoint(this.series.data.indexOf(this),a,b)}});v(x.prototype,{addPoint:function(a,b,c,d,e){var g=this.options,f=this.data,l=this.chart,k=this.xAxis,k=k&&k.hasNames&&k.names,m=g.data,h,w=this.xData,q,x,C;b=p(b,!0);h={series:this};this.pointClass.prototype.applyOptions.apply(h,[a]);C=h.x;x=w.length;if(this.requireSorting&&C<w[x-1])for(q=!0;x&&w[x-1]>C;)x--;this.updateParallelArrays(h,
"splice",x,0,0);this.updateParallelArrays(h,x);k&&h.name&&(k[C]=h.name);m.splice(x,0,a);q&&(this.data.splice(x,0,null),this.processData());"point"===g.legendType&&this.generatePoints();c&&(f[0]&&f[0].remove?f[0].remove(!1):(f.shift(),this.updateParallelArrays(h,"shift"),m.shift()));!1!==e&&n(this,"addPoint",{point:h});this.isDirtyData=this.isDirty=!0;b&&l.redraw(d)},removePoint:function(a,b,c){var d=this,e=d.data,g=e[a],f=d.points,l=d.chart,k=function(){f&&f.length===e.length&&f.splice(a,1);e.splice(a,
1);d.options.data.splice(a,1);d.updateParallelArrays(g||{series:d},"splice",a,1);g&&g.destroy();d.isDirty=!0;d.isDirtyData=!0;b&&l.redraw()};w(c,l);b=p(b,!0);g?g.firePointEvent("remove",null,k):k()},remove:function(a,b,c,d){function e(){g.destroy(d);g.remove=null;f.isDirtyLegend=f.isDirtyBox=!0;f.linkSeries();p(a,!0)&&f.redraw(b)}var g=this,f=g.chart;!1!==c?n(g,"remove",null,e):e()},update:function(c,d){c=a.cleanRecursively(c,this.userOptions);n(this,"update",{options:c});var e=this,g=e.chart,l=e.userOptions,
k,f=e.initialType||e.type,m=c.type||l.type||g.options.chart.type,h=!(this.hasDerivedData||c.dataGrouping||m&&m!==this.type||void 0!==c.pointStart||c.pointInterval||c.pointIntervalUnit||c.keys),w=K[f].prototype,q,x=["group","markerGroup","dataLabelsGroup","transformGroup"],t=["navigatorSeries","baseSeries"],C=e.finishedAnimating&&{animation:!1},u={};h&&(t.push("data","isDirtyData","points","processedXData","processedYData","xIncrement","_hasPointMarkers","_hasPointLabels","mapMap","mapData","minY",
"maxY","minX","maxX"),!1!==c.visible&&t.push("area","graph"),e.parallelArrays.forEach(function(a){t.push(a+"Data")}),c.data&&this.setData(c.data,!1));c=b(l,C,{index:void 0===l.index?e.index:l.index,pointStart:p(l.pointStart,e.xData[0])},!h&&{data:e.options.data},c);t=x.concat(t);t.forEach(function(a){t[a]=e[a];delete e[a]});e.remove(!1,null,!1,!0);for(q in w)e[q]=void 0;K[m||f]?v(e,K[m||f].prototype):a.error(17,!0,g);t.forEach(function(a){e[a]=t[a]});e.init(g,c);h&&this.points&&(k=e.options,!1===
k.visible?(u.graphic=1,u.dataLabel=1):(k.marker&&!1===k.marker.enabled&&!e._hasPointMarkers&&(u.graphic=1),k.dataLabels&&!1===k.dataLabels.enabled&&!e._hasPointLabels&&(u.dataLabel=1)),this.points.forEach(function(a){a&&a.series&&(a.resolveColor(),Object.keys(u).length&&a.destroyElements(u),!1===k.showInLegend&&a.legendItem&&g.legend.destroyItem(a))},this));c.zIndex!==l.zIndex&&x.forEach(function(a){e[a]&&e[a].attr({zIndex:c.zIndex})});e.initialType=f;g.linkSeries();n(this,"afterUpdate");p(d,!0)&&
g.redraw(h?void 0:!1)},setName:function(a){this.name=this.options.name=this.userOptions.name=a;this.chart.isDirtyLegend=!0}});v(B.prototype,{update:function(a,c){var d=this.chart,e=a&&a.events||{};a=b(this.userOptions,a);d.options[this.coll].indexOf&&(d.options[this.coll][d.options[this.coll].indexOf(this.userOptions)]=a);k(d.options[this.coll].events,function(a,b){"undefined"===typeof e[b]&&(e[b]=void 0)});this.destroy(!0);this.init(d,v(a,{events:e}));d.isDirtyBox=!0;p(c,!0)&&d.redraw()},remove:function(a){for(var b=
this.chart,c=this.coll,d=this.series,e=d.length;e--;)d[e]&&d[e].remove(!1);u(b.axes,this);u(b[c],this);m(b.options[c])?b.options[c].splice(this.options.index,1):delete b.options[c];b[c].forEach(function(a,b){a.options.index=a.userOptions.index=b});this.destroy();b.isDirtyBox=!0;p(a,!0)&&b.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,b){this.update({categories:a},b)}})});J(G,"parts/AreaSeries.js",[G["parts/Globals.js"]],function(a){var E=a.color,H=a.pick,B=a.Series,
h=a.seriesType;h("area","line",{softThreshold:!1,threshold:0},{singleStacks:!1,getStackPoints:function(e){var h=[],t=[],u=this.xAxis,v=this.yAxis,n=v.stacks[this.stackKey],g={},d=this.index,m=v.series,b=m.length,k,p=H(v.options.reversedStacks,!0)?1:-1,c;e=e||this.points;if(this.options.stacking){for(c=0;c<e.length;c++)e[c].leftNull=e[c].rightNull=null,g[e[c].x]=e[c];a.objectEach(n,function(a,b){null!==a.total&&t.push(b)});t.sort(function(a,b){return a-b});k=m.map(function(a){return a.visible});t.forEach(function(a,
e){var m=0,q,x;if(g[a]&&!g[a].isNull)h.push(g[a]),[-1,1].forEach(function(l){var m=1===l?"rightNull":"leftNull",h=0,w=n[t[e+l]];if(w)for(c=d;0<=c&&c<b;)q=w.points[c],q||(c===d?g[a][m]=!0:k[c]&&(x=n[a].points[c])&&(h-=x[1]-x[0])),c+=p;g[a][1===l?"rightCliff":"leftCliff"]=h});else{for(c=d;0<=c&&c<b;){if(q=n[a].points[c]){m=q[1];break}c+=p}m=v.translate(m,0,1,0,1);h.push({isNull:!0,plotX:u.translate(a,0,0,0,1),x:a,plotY:m,yBottom:m})}})}return h},getGraphPath:function(e){var h=B.prototype.getGraphPath,
t=this.options,u=t.stacking,v=this.yAxis,n,g,d=[],m=[],b=this.index,k,p=v.stacks[this.stackKey],c=t.threshold,x=v.getThreshold(t.threshold),K,t=a.pick(t.connectNulls,"percent"===u),w=function(a,g,l){var h=e[a];a=u&&p[h.x].points[b];var n=h[l+"Null"]||0;l=h[l+"Cliff"]||0;var w,q,h=!0;l||n?(w=(n?a[0]:a[1])+l,q=a[0]+l,h=!!n):!u&&e[g]&&e[g].isNull&&(w=q=c);void 0!==w&&(m.push({plotX:k,plotY:null===w?x:v.getThreshold(w),isNull:h,isCliff:!0}),d.push({plotX:k,plotY:null===q?x:v.getThreshold(q),doCurve:!1}))};
e=e||this.points;u&&(e=this.getStackPoints(e));for(n=0;n<e.length;n++)if(g=e[n].isNull,k=H(e[n].rectPlotX,e[n].plotX),K=H(e[n].yBottom,x),!g||t)t||w(n,n-1,"left"),g&&!u&&t||(m.push(e[n]),d.push({x:n,plotX:k,plotY:K})),t||w(n,n+1,"right");n=h.call(this,m,!0,!0);d.reversed=!0;g=h.call(this,d,!0,!0);g.length&&(g[0]="L");g=n.concat(g);h=h.call(this,m,!1,t);g.xMap=n.xMap;this.areaPath=g;return h},drawGraph:function(){this.areaPath=[];B.prototype.drawGraph.apply(this);var a=this,h=this.areaPath,t=this.options,
u=[["area","highcharts-area",this.color,t.fillColor]];this.zones.forEach(function(e,h){u.push(["zone-area-"+h,"highcharts-area highcharts-zone-area-"+h+" "+e.className,e.color||a.color,e.fillColor||t.fillColor])});u.forEach(function(e){var n=e[0],g=a[n],d=g?"animate":"attr",m={};g?(g.endX=a.preventGraphAnimation?null:h.xMap,g.animate({d:h})):(m.zIndex=0,g=a[n]=a.chart.renderer.path(h).addClass(e[1]).add(a.group),g.isArea=!0);a.chart.styledMode||(m.fill=H(e[3],E(e[2]).setOpacity(H(t.fillOpacity,.75)).get()));
g[d](m);g.startX=h.xMap;g.shiftUnit=t.step?2:1})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})});J(G,"parts/SplineSeries.js",[G["parts/Globals.js"]],function(a){var E=a.pick;a=a.seriesType;a("spline","line",{},{getPointSpline:function(a,B,h){var e=B.plotX,q=B.plotY,t=a[h-1];h=a[h+1];var u,v,n,g;if(t&&!t.isNull&&!1!==t.doCurve&&!B.isCliff&&h&&!h.isNull&&!1!==h.doCurve&&!B.isCliff){a=t.plotY;n=h.plotX;h=h.plotY;var d=0;u=(1.5*e+t.plotX)/2.5;v=(1.5*q+a)/2.5;n=(1.5*e+n)/2.5;g=(1.5*q+h)/2.5;n!==
u&&(d=(g-v)*(n-e)/(n-u)+q-g);v+=d;g+=d;v>a&&v>q?(v=Math.max(a,q),g=2*q-v):v<a&&v<q&&(v=Math.min(a,q),g=2*q-v);g>h&&g>q?(g=Math.max(h,q),v=2*q-g):g<h&&g<q&&(g=Math.min(h,q),v=2*q-g);B.rightContX=n;B.rightContY=g}B=["C",E(t.rightContX,t.plotX),E(t.rightContY,t.plotY),E(u,e),E(v,q),e,q];t.rightContX=t.rightContY=null;return B}})});J(G,"parts/AreaSplineSeries.js",[G["parts/Globals.js"]],function(a){var E=a.seriesTypes.area.prototype,H=a.seriesType;H("areaspline","spline",a.defaultPlotOptions.area,{getStackPoints:E.getStackPoints,
getGraphPath:E.getGraphPath,drawGraph:E.drawGraph,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})});J(G,"parts/ColumnSeries.js",[G["parts/Globals.js"]],function(a){var E=a.animObject,H=a.color,B=a.extend,h=a.defined,e=a.isNumber,q=a.merge,t=a.pick,u=a.Series,v=a.seriesType,n=a.svg;v("column","line",{borderRadius:0,crisp:!0,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1},select:{color:"#cccccc",borderColor:"#000000"}},
dataLabels:{align:null,verticalAlign:null,y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){u.prototype.init.apply(this,arguments);var a=this,d=a.chart;d.hasRendered&&d.series.forEach(function(d){d.type===a.type&&(d.isDirty=!0)})},getColumnMetrics:function(){var a=this,d=a.options,e=a.xAxis,b=a.yAxis,k=e.options.reversedStacks,
k=e.reversed&&!k||!e.reversed&&k,h,c={},n=0;!1===d.grouping?n=1:a.chart.series.forEach(function(d){var e=d.options,g=d.yAxis,k;d.type!==a.type||!d.visible&&a.chart.options.chart.ignoreHiddenSeries||b.len!==g.len||b.pos!==g.pos||(e.stacking?(h=d.stackKey,void 0===c[h]&&(c[h]=n++),k=c[h]):!1!==e.grouping&&(k=n++),d.columnIndex=k)});var q=Math.min(Math.abs(e.transA)*(e.ordinalSlope||d.pointRange||e.closestPointRange||e.tickInterval||1),e.len),w=q*d.groupPadding,u=(q-2*w)/(n||1),d=Math.min(d.maxPointWidth||
e.len,t(d.pointWidth,u*(1-2*d.pointPadding)));a.columnMetrics={width:d,offset:(u-d)/2+(w+((a.columnIndex||0)+(k?1:0))*u-q/2)*(k?-1:1)};return a.columnMetrics},crispCol:function(a,d,e,b){var g=this.chart,m=this.borderWidth,c=-(m%2?.5:0),m=m%2?.5:1;g.inverted&&g.renderer.isVML&&(m+=1);this.options.crisp&&(e=Math.round(a+e)+c,a=Math.round(a)+c,e-=a);b=Math.round(d+b)+m;c=.5>=Math.abs(d)&&.5<b;d=Math.round(d)+m;b-=d;c&&b&&(--d,b+=1);return{x:a,y:d,width:e,height:b}},translate:function(){var a=this,d=
a.chart,e=a.options,b=a.dense=2>a.closestPointRange*a.xAxis.transA,b=a.borderWidth=t(e.borderWidth,b?0:1),k=a.yAxis,p=e.threshold,c=a.translatedThreshold=k.getThreshold(p),n=t(e.minPointLength,5),q=a.getColumnMetrics(),w=q.width,v=a.barW=Math.max(w,1+2*b),C=a.pointXOffset=q.offset,l=a.dataMin,D=a.dataMax;d.inverted&&(c-=.5);e.pointPadding&&(v=Math.ceil(v));u.prototype.translate.apply(a);a.points.forEach(function(b){var e=t(b.yBottom,c),g=999+Math.abs(e),f=w,g=Math.min(Math.max(-g,b.plotY),k.len+g),
m=b.plotX+C,q=v,x=Math.min(g,e),u,A=Math.max(g,e)-x;n&&Math.abs(A)<n&&(A=n,u=!k.reversed&&!b.negative||k.reversed&&b.negative,b.y===p&&a.dataMax<=p&&k.min<p&&l!==D&&(u=!u),x=Math.abs(x-c)>n?e-n:c-(u?n:0));h(b.options.pointWidth)&&(f=q=Math.ceil(b.options.pointWidth),m-=Math.round((f-w)/2));b.barX=m;b.pointWidth=f;b.tooltipPos=d.inverted?[k.len+k.pos-d.plotLeft-g,a.xAxis.len-m-q/2,A]:[m+q/2,g+k.pos-d.plotTop,A];b.shapeType=a.pointClass.prototype.shapeType||"rect";b.shapeArgs=a.crispCol.apply(a,b.isNull?
[m,c,q,0]:[m,x,q,A])})},getSymbol:a.noop,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")},pointAttribs:function(a,d){var e=this.options,b,k=this.pointAttrToOptions||{};b=k.stroke||"borderColor";var g=k["stroke-width"]||"borderWidth",c=a&&a.color||this.color,h=a&&a[b]||e[b]||this.color||c,n=a&&a[g]||e[g]||this[g]||0,k=a&&a.dashStyle||e.dashStyle,w=t(e.opacity,1),u;a&&this.zones.length&&(u=a.getZone(),c=
a.options.color||u&&u.color||this.color,u&&(h=u.borderColor||h,k=u.dashStyle||k,n=u.borderWidth||n));d&&(a=q(e.states[d],a.options.states&&a.options.states[d]||{}),d=a.brightness,c=a.color||void 0!==d&&H(c).brighten(a.brightness).get()||c,h=a[b]||h,n=a[g]||n,k=a.dashStyle||k,w=t(a.opacity,w));b={fill:c,stroke:h,"stroke-width":n,opacity:w};k&&(b.dashstyle=k);return b},drawPoints:function(){var a=this,d=this.chart,m=a.options,b=d.renderer,k=m.animationLimit||250,h;a.points.forEach(function(c){var g=
c.graphic,p=g&&d.pointCount<k?"animate":"attr";if(e(c.plotY)&&null!==c.y){h=c.shapeArgs;g&&g.element.nodeName!==c.shapeType&&(g=g.destroy());if(g)g[p](q(h));else c.graphic=g=b[c.shapeType](h).add(c.group||a.group);if(m.borderRadius)g[p]({r:m.borderRadius});d.styledMode||g[p](a.pointAttribs(c,c.selected&&"select")).shadow(!1!==c.allowShadow&&m.shadow,null,m.stacking&&!m.borderRadius);g.addClass(c.getClassName(),!0)}else g&&(c.graphic=g.destroy())})},animate:function(a){var d=this,e=this.yAxis,b=d.options,
g=this.chart.inverted,h={},c=g?"translateX":"translateY",q;n&&(a?(h.scaleY=.001,a=Math.min(e.pos+e.len,Math.max(e.pos,e.toPixels(b.threshold))),g?h.translateX=a-e.len:h.translateY=a,d.clipBox&&d.setClip(),d.group.attr(h)):(q=d.group.attr(c),d.group.animate({scaleY:1},B(E(d.options.animation),{step:function(a,b){h[c]=q+b.pos*(e.pos-q);d.group.attr(h)}})),d.animate=null))},remove:function(){var a=this,d=a.chart;d.hasRendered&&d.series.forEach(function(d){d.type===a.type&&(d.isDirty=!0)});u.prototype.remove.apply(a,
arguments)}})});J(G,"parts/BarSeries.js",[G["parts/Globals.js"]],function(a){a=a.seriesType;a("bar","column",null,{inverted:!0})});J(G,"parts/ScatterSeries.js",[G["parts/Globals.js"]],function(a){var E=a.Series,H=a.seriesType;H("scatter","line",{lineWidth:0,findNearestPointBy:"xy",jitter:{x:0,y:0},marker:{enabled:!0},tooltip:{headerFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cspan style\x3d"font-size: 10px"\x3e {series.name}\x3c/span\x3e\x3cbr/\x3e',pointFormat:"x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e"}},
{sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,drawGraph:function(){this.options.lineWidth&&E.prototype.drawGraph.call(this)},applyJitter:function(){var a=this,h=this.options.jitter,e=this.points.length;h&&this.points.forEach(function(q,t){["x","y"].forEach(function(u,v){var n,g="plot"+u.toUpperCase(),d,m;h[u]&&!q.isNull&&(n=a[u+"Axis"],m=h[u]*n.transA,n&&!n.isLog&&(d=Math.max(0,q[g]-m),n=Math.min(n.len,q[g]+m),v=1E4*
Math.sin(t+v*e),q[g]=d+(n-d)*(v-Math.floor(v)),"x"===u&&(q.clientX=q.plotX)))})})}});a.addEvent(E,"afterTranslate",function(){this.applyJitter&&this.applyJitter()})});J(G,"mixins/centered-series.js",[G["parts/Globals.js"]],function(a){var E=a.deg2rad,H=a.isNumber,B=a.pick,h=a.relativeLength;a.CenteredSeriesMixin={getCenter:function(){var a=this.options,q=this.chart,t=2*(a.slicedOffset||0),u=q.plotWidth-2*t,q=q.plotHeight-2*t,v=a.center,v=[B(v[0],"50%"),B(v[1],"50%"),a.size||"100%",a.innerSize||0],
n=Math.min(u,q),g,d;for(g=0;4>g;++g)d=v[g],a=2>g||2===g&&/%$/.test(d),v[g]=h(d,[u,q,n,v[2]][g])+(a?t:0);v[3]>v[2]&&(v[3]=v[2]);return v},getStartAndEndRadians:function(a,h){a=H(a)?a:0;h=H(h)&&h>a&&360>h-a?h:a+360;return{start:E*(a+-90),end:E*(h+-90)}}}});J(G,"parts/PieSeries.js",[G["parts/Globals.js"]],function(a){var E=a.addEvent,H=a.CenteredSeriesMixin,B=a.defined,h=H.getStartAndEndRadians,e=a.merge,q=a.noop,t=a.pick,u=a.Point,v=a.Series,n=a.seriesType,g=a.setAnimation;n("pie","line",{center:[null,
null],clip:!1,colorByPoint:!0,dataLabels:{allowOverlap:!0,connectorPadding:5,distance:30,enabled:!0,formatter:function(){return this.point.isNull?void 0:this.point.name},softConnector:!0,x:0,connectorShape:"fixedOffset",crookDistance:"70%"},ignoreHiddenPoint:!0,inactiveOtherPoints:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:"#ffffff",borderWidth:1,states:{hover:{brightness:.1}}},{isCartesian:!1,requireSorting:!1,
directTouch:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttribs:a.seriesTypes.column.prototype.pointAttribs,animate:function(a){var d=this,b=d.points,e=d.startAngleRad;a||(b.forEach(function(a){var b=a.graphic,g=a.shapeArgs;b&&(b.attr({r:a.startR||d.center[3]/2,start:e,end:e}),b.animate({r:g.r,start:g.start,end:g.end},d.options.animation))}),d.animate=null)},hasData:function(){return!!this.processedXData.length},updateTotals:function(){var a,e=0,b=this.points,
g=b.length,h,c=this.options.ignoreHiddenPoint;for(a=0;a<g;a++)h=b[a],e+=c&&!h.visible?0:h.isNull?0:h.y;this.total=e;for(a=0;a<g;a++)h=b[a],h.percentage=0<e&&(h.visible||!c)?h.y/e*100:0,h.total=e},generatePoints:function(){v.prototype.generatePoints.call(this);this.updateTotals()},getX:function(a,e,b){var d=this.center,g=this.radii?this.radii[b.index]:d[2]/2;return d[0]+(e?-1:1)*Math.cos(Math.asin(Math.max(Math.min((a-d[1])/(g+b.labelDistance),1),-1)))*(g+b.labelDistance)+(0<b.labelDistance?(e?-1:
1)*this.options.dataLabels.padding:0)},translate:function(d){this.generatePoints();var e=0,b=this.options,g=b.slicedOffset,p=g+(b.borderWidth||0),c,n,q=h(b.startAngle,b.endAngle),w=this.startAngleRad=q.start,q=(this.endAngleRad=q.end)-w,u=this.points,C,l,v=b.dataLabels.distance,b=b.ignoreHiddenPoint,A,z=u.length,B;d||(this.center=d=this.getCenter());for(A=0;A<z;A++){B=u[A];c=w+e*q;if(!b||B.visible)e+=B.percentage/100;n=w+e*q;B.shapeType="arc";B.shapeArgs={x:d[0],y:d[1],r:d[2]/2,innerR:d[3]/2,start:Math.round(1E3*
c)/1E3,end:Math.round(1E3*n)/1E3};B.labelDistance=t(B.options.dataLabels&&B.options.dataLabels.distance,v);B.labelDistance=a.relativeLength(B.labelDistance,B.shapeArgs.r);this.maxLabelDistance=Math.max(this.maxLabelDistance||0,B.labelDistance);n=(n+c)/2;n>1.5*Math.PI?n-=2*Math.PI:n<-Math.PI/2&&(n+=2*Math.PI);B.slicedTranslation={translateX:Math.round(Math.cos(n)*g),translateY:Math.round(Math.sin(n)*g)};C=Math.cos(n)*d[2]/2;l=Math.sin(n)*d[2]/2;B.tooltipPos=[d[0]+.7*C,d[1]+.7*l];B.half=n<-Math.PI/
2||n>Math.PI/2?1:0;B.angle=n;c=Math.min(p,B.labelDistance/5);B.labelPosition={natural:{x:d[0]+C+Math.cos(n)*B.labelDistance,y:d[1]+l+Math.sin(n)*B.labelDistance},"final":{},alignment:0>B.labelDistance?"center":B.half?"right":"left",connectorPosition:{breakAt:{x:d[0]+C+Math.cos(n)*c,y:d[1]+l+Math.sin(n)*c},touchingSliceAt:{x:d[0]+C,y:d[1]+l}}}}},drawGraph:null,redrawPoints:function(){var a=this,g=a.chart,b=g.renderer,k,h,c,n,q=a.options.shadow;!q||a.shadowGroup||g.styledMode||(a.shadowGroup=b.g("shadow").attr({zIndex:-1}).add(a.group));
a.points.forEach(function(d){var m={};h=d.graphic;if(!d.isNull&&h){n=d.shapeArgs;k=d.getTranslate();if(!g.styledMode){var p=d.shadowGroup;q&&!p&&(p=d.shadowGroup=b.g("shadow").add(a.shadowGroup));p&&p.attr(k);c=a.pointAttribs(d,d.selected&&"select")}d.delayedRendering?(h.setRadialReference(a.center).attr(n).attr(k),g.styledMode||h.attr(c).attr({"stroke-linejoin":"round"}).shadow(q,p),d.delayedRendering=!1):(h.setRadialReference(a.center),g.styledMode||e(!0,m,c),e(!0,m,n,k),h.animate(m));h.attr({visibility:d.visible?
"inherit":"hidden"});h.addClass(d.getClassName())}else h&&(d.graphic=h.destroy())})},drawPoints:function(){var a=this.chart.renderer;this.points.forEach(function(d){d.graphic||(d.graphic=a[d.shapeType](d.shapeArgs).add(d.series.group),d.delayedRendering=!0)})},searchPoint:q,sortByAngle:function(a,e){a.sort(function(a,d){return void 0!==a.angle&&(d.angle-a.angle)*e})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,getCenter:H.getCenter,getSymbol:q},{init:function(){u.prototype.init.apply(this,
arguments);var a=this,e;a.name=t(a.name,"Slice");e=function(b){a.slice("select"===b.type)};E(a,"select",e);E(a,"unselect",e);return a},isValid:function(){return a.isNumber(this.y,!0)&&0<=this.y},setVisible:function(a,e){var b=this,d=b.series,g=d.chart,c=d.options.ignoreHiddenPoint;e=t(e,c);a!==b.visible&&(b.visible=b.options.visible=a=void 0===a?!b.visible:a,d.options.data[d.data.indexOf(b)]=b.options,["graphic","dataLabel","connector","shadowGroup"].forEach(function(c){if(b[c])b[c][a?"show":"hide"](!0)}),
b.legendItem&&g.legend.colorizeItem(b,a),a||"hover"!==b.state||b.setState(""),c&&(d.isDirty=!0),e&&g.redraw())},slice:function(a,e,b){var d=this.series;g(b,d.chart);t(e,!0);this.sliced=this.options.sliced=B(a)?a:!this.sliced;d.options.data[d.data.indexOf(this)]=this.options;this.graphic.animate(this.getTranslate());this.shadowGroup&&this.shadowGroup.animate(this.getTranslate())},getTranslate:function(){return this.sliced?this.slicedTranslation:{translateX:0,translateY:0}},haloPath:function(a){var d=
this.shapeArgs;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(d.x,d.y,d.r+a,d.r+a,{innerR:this.shapeArgs.r-1,start:d.start,end:d.end})},connectorShapes:{fixedOffset:function(a,e,b){var d=e.breakAt;e=e.touchingSliceAt;return["M",a.x,a.y].concat(b.softConnector?["C",a.x+("left"===a.alignment?-5:5),a.y,2*d.x-e.x,2*d.y-e.y,d.x,d.y]:["L",d.x,d.y]).concat(["L",e.x,e.y])},straight:function(a,e){e=e.touchingSliceAt;return["M",a.x,a.y,"L",e.x,e.y]},crookedLine:function(d,e,b){e=
e.touchingSliceAt;var g=this.series,h=g.center[0],c=g.chart.plotWidth,m=g.chart.plotLeft,g=d.alignment,n=this.shapeArgs.r;b=a.relativeLength(b.crookDistance,1);b="left"===g?h+n+(c+m-h-n)*(1-b):m+(h-n)*b;h=["L",b,d.y];if("left"===g?b>d.x||b<e.x:b<d.x||b>e.x)h=[];return["M",d.x,d.y].concat(h).concat(["L",e.x,e.y])}},getConnectorPath:function(){var a=this.labelPosition,e=this.series.options.dataLabels,b=e.connectorShape,g=this.connectorShapes;g[b]&&(b=g[b]);return b.call(this,{x:a.final.x,y:a.final.y,
alignment:a.alignment},a.connectorPosition,e)}})});J(G,"parts/DataLabels.js",[G["parts/Globals.js"]],function(a){var E=a.arrayMax,H=a.defined,B=a.extend,h=a.format,e=a.merge,q=a.noop,t=a.pick,u=a.relativeLength,v=a.Series,n=a.seriesTypes,g=a.stableSort,d=a.isArray,m=a.splat;a.distribute=function(b,d,e){function c(a,b){return a.target-b.target}var k,h=!0,m=b,p=[],n;n=0;var l=m.reducedLen||d;for(k=b.length;k--;)n+=b[k].size;if(n>l){g(b,function(a,b){return(b.rank||0)-(a.rank||0)});for(n=k=0;n<=l;)n+=
b[k].size,k++;p=b.splice(k-1,b.length)}g(b,c);for(b=b.map(function(a){return{size:a.size,targets:[a.target],align:t(a.align,.5)}});h;){for(k=b.length;k--;)h=b[k],n=(Math.min.apply(0,h.targets)+Math.max.apply(0,h.targets))/2,h.pos=Math.min(Math.max(0,n-h.size*h.align),d-h.size);k=b.length;for(h=!1;k--;)0<k&&b[k-1].pos+b[k-1].size>b[k].pos&&(b[k-1].size+=b[k].size,b[k-1].targets=b[k-1].targets.concat(b[k].targets),b[k-1].align=.5,b[k-1].pos+b[k-1].size>d&&(b[k-1].pos=d-b[k-1].size),b.splice(k,1),h=
!0)}m.push.apply(m,p);k=0;b.some(function(b){var c=0;if(b.targets.some(function(){m[k].pos=b.pos+c;if(Math.abs(m[k].pos-m[k].target)>e)return m.slice(0,k+1).forEach(function(a){delete a.pos}),m.reducedLen=(m.reducedLen||d)-.1*d,m.reducedLen>.1*d&&a.distribute(m,d,e),!0;c+=m[k].size;k++}))return!0});g(m,c)};v.prototype.drawDataLabels=function(){function b(a,b){var c=b.filter;return c?(b=c.operator,a=a[c.property],c=c.value,"\x3e"===b&&a>c||"\x3c"===b&&a<c||"\x3e\x3d"===b&&a>=c||"\x3c\x3d"===b&&a<=
c||"\x3d\x3d"===b&&a==c||"\x3d\x3d\x3d"===b&&a===c?!0:!1):!0}function g(a,b){var c=[],f;if(d(a)&&!d(b))c=a.map(function(a){return e(a,b)});else if(d(b)&&!d(a))c=b.map(function(b){return e(a,b)});else if(d(a)||d(b))for(f=Math.max(a.length,b.length);f--;)c[f]=e(a[f],b[f]);else c=e(a,b);return c}var p=this,c=p.chart,n=p.options,q=n.dataLabels,w=p.points,u,C=p.hasRendered||0,l,v=a.animObject(n.animation).duration,A=Math.min(v,200),z=!c.renderer.forExport&&t(q.defer,0<A),B=c.renderer,q=g(g(c.options.plotOptions&&
c.options.plotOptions.series&&c.options.plotOptions.series.dataLabels,c.options.plotOptions&&c.options.plotOptions[p.type]&&c.options.plotOptions[p.type].dataLabels),q);a.fireEvent(this,"drawDataLabels");if(d(q)||q.enabled||p._hasPointLabels)l=p.plotGroup("dataLabelsGroup","data-labels",z&&!C?"hidden":"inherit",q.zIndex||6),z&&(l.attr({opacity:+C}),C||setTimeout(function(){var a=p.dataLabelsGroup;a&&(p.visible&&l.show(!0),a[n.animation?"animate":"attr"]({opacity:1},{duration:A}))},v-A)),w.forEach(function(d){u=
m(g(q,d.dlOptions||d.options&&d.options.dataLabels));u.forEach(function(e,f){var g=e.enabled&&(!d.isNull||d.dataLabelOnNull)&&b(d,e),k,m,q,w,r=d.dataLabels?d.dataLabels[f]:d.dataLabel,u=d.connectors?d.connectors[f]:d.connector,x=!r;g&&(k=d.getLabelConfig(),m=t(e[d.formatPrefix+"Format"],e.format),k=H(m)?h(m,k,c.time):(e[d.formatPrefix+"Formatter"]||e.formatter).call(k,e),m=e.style,q=e.rotation,c.styledMode||(m.color=t(e.color,m.color,p.color,"#000000"),"contrast"===m.color&&(d.contrastColor=B.getContrast(d.color||
p.color),m.color=e.inside||0>t(e.distance,d.labelDistance)||n.stacking?d.contrastColor:"#000000"),n.cursor&&(m.cursor=n.cursor)),w={r:e.borderRadius||0,rotation:q,padding:e.padding,zIndex:1},c.styledMode||(w.fill=e.backgroundColor,w.stroke=e.borderColor,w["stroke-width"]=e.borderWidth),a.objectEach(w,function(a,b){void 0===a&&delete w[b]}));!r||g&&H(k)?g&&H(k)&&(r?w.text=k:(d.dataLabels=d.dataLabels||[],r=d.dataLabels[f]=q?B.text(k,0,-9999).addClass("highcharts-data-label"):B.label(k,0,-9999,e.shape,
null,null,e.useHTML,null,"data-label"),f||(d.dataLabel=r),r.addClass(" highcharts-data-label-color-"+d.colorIndex+" "+(e.className||"")+(e.useHTML?" highcharts-tracker":""))),r.options=e,r.attr(w),c.styledMode||r.css(m).shadow(e.shadow),r.added||r.add(l),e.textPath&&!e.useHTML&&r.setTextPath(d.getDataLabelPath&&d.getDataLabelPath(r)||d.graphic,e.textPath),p.alignDataLabel(d,r,e,null,x)):(d.dataLabel=d.dataLabel&&d.dataLabel.destroy(),d.dataLabels&&(1===d.dataLabels.length?delete d.dataLabels:delete d.dataLabels[f]),
f||delete d.dataLabel,u&&(d.connector=d.connector.destroy(),d.connectors&&(1===d.connectors.length?delete d.connectors:delete d.connectors[f])))})});a.fireEvent(this,"afterDrawDataLabels")};v.prototype.alignDataLabel=function(a,d,e,c,g){var b=this.chart,k=this.isCartesian&&b.inverted,h=t(a.dlBox&&a.dlBox.centerX,a.plotX,-9999),m=t(a.plotY,-9999),l=d.getBBox(),p,n=e.rotation,q=e.align,u=this.visible&&(a.series.forceDL||b.isInsidePlot(h,Math.round(m),k)||c&&b.isInsidePlot(h,k?c.x+1:c.y+c.height-1,k)),
f="justify"===t(e.overflow,"justify");if(u&&(p=b.renderer.fontMetrics(b.styledMode?void 0:e.style.fontSize,d).b,c=B({x:k?this.yAxis.len-m:h,y:Math.round(k?this.xAxis.len-h:m),width:0,height:0},c),B(e,{width:l.width,height:l.height}),n?(f=!1,h=b.renderer.rotCorr(p,n),h={x:c.x+e.x+c.width/2+h.x,y:c.y+e.y+{top:0,middle:.5,bottom:1}[e.verticalAlign]*c.height},d[g?"attr":"animate"](h).attr({align:q}),m=(n+720)%360,m=180<m&&360>m,"left"===q?h.y-=m?l.height:0:"center"===q?(h.x-=l.width/2,h.y-=l.height/2):
"right"===q&&(h.x-=l.width,h.y-=m?0:l.height),d.placed=!0,d.alignAttr=h):(d.align(e,null,c),h=d.alignAttr),f&&0<=c.height?a.isLabelJustified=this.justifyDataLabel(d,e,h,l,c,g):t(e.crop,!0)&&(u=b.isInsidePlot(h.x,h.y)&&b.isInsidePlot(h.x+l.width,h.y+l.height)),e.shape&&!n))d[g?"attr":"animate"]({anchorX:k?b.plotWidth-a.plotY:a.plotX,anchorY:k?b.plotHeight-a.plotX:a.plotY});u||(d.attr({y:-9999}),d.placed=!1)};v.prototype.justifyDataLabel=function(a,d,e,c,g,h){var b=this.chart,k=d.align,m=d.verticalAlign,
l,p,n=a.box?0:a.padding||0;l=e.x+n;0>l&&("right"===k?d.align="left":d.x=-l,p=!0);l=e.x+c.width-n;l>b.plotWidth&&("left"===k?d.align="right":d.x=b.plotWidth-l,p=!0);l=e.y+n;0>l&&("bottom"===m?d.verticalAlign="top":d.y=-l,p=!0);l=e.y+c.height-n;l>b.plotHeight&&("top"===m?d.verticalAlign="bottom":d.y=b.plotHeight-l,p=!0);p&&(a.placed=!h,a.align(d,null,g));return p};n.pie&&(n.pie.prototype.dataLabelPositioners={radialDistributionY:function(a){return a.top+a.distributeBox.pos},radialDistributionX:function(a,
d,e,c){return a.getX(e<d.top+2||e>d.bottom-2?c:e,d.half,d)},justify:function(a,d,e){return e[0]+(a.half?-1:1)*(d+a.labelDistance)},alignToPlotEdges:function(a,d,e,c){a=a.getBBox().width;return d?a+c:e-a-c},alignToConnectors:function(a,d,e,c){var b=0,g;a.forEach(function(a){g=a.dataLabel.getBBox().width;g>b&&(b=g)});return d?b+c:e-b-c}},n.pie.prototype.drawDataLabels=function(){var b=this,d=b.data,g,c=b.chart,h=b.options.dataLabels,m=h.connectorPadding,n,q=c.plotWidth,u=c.plotHeight,l=c.plotLeft,D=
Math.round(c.chartWidth/3),A,z=b.center,B=z[2]/2,f=z[1],r,G,N,L,M=[[],[]],J,y,S,U,P=[0,0,0,0],T=b.dataLabelPositioners,O;b.visible&&(h.enabled||b._hasPointLabels)&&(d.forEach(function(a){a.dataLabel&&a.visible&&a.dataLabel.shortened&&(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),a.dataLabel.shortened=!1)}),v.prototype.drawDataLabels.apply(b),d.forEach(function(a){a.dataLabel&&(a.visible?(M[a.half].push(a),a.dataLabel._pos=null,!H(h.style.width)&&!H(a.options.dataLabels&&
a.options.dataLabels.style&&a.options.dataLabels.style.width)&&a.dataLabel.getBBox().width>D&&(a.dataLabel.css({width:.7*D}),a.dataLabel.shortened=!0)):(a.dataLabel=a.dataLabel.destroy(),a.dataLabels&&1===a.dataLabels.length&&delete a.dataLabels))}),M.forEach(function(d,e){var k,p,n=d.length,w=[],v;if(n)for(b.sortByAngle(d,e-.5),0<b.maxLabelDistance&&(k=Math.max(0,f-B-b.maxLabelDistance),p=Math.min(f+B+b.maxLabelDistance,c.plotHeight),d.forEach(function(a){0<a.labelDistance&&a.dataLabel&&(a.top=Math.max(0,
f-B-a.labelDistance),a.bottom=Math.min(f+B+a.labelDistance,c.plotHeight),v=a.dataLabel.getBBox().height||21,a.distributeBox={target:a.labelPosition.natural.y-a.top+v/2,size:v,rank:a.y},w.push(a.distributeBox))}),k=p+v-k,a.distribute(w,k,k/5)),U=0;U<n;U++){g=d[U];N=g.labelPosition;r=g.dataLabel;S=!1===g.visible?"hidden":"inherit";y=k=N.natural.y;w&&H(g.distributeBox)&&(void 0===g.distributeBox.pos?S="hidden":(L=g.distributeBox.size,y=T.radialDistributionY(g)));delete g.positionIndex;if(h.justify)J=
T.justify(g,B,z);else switch(h.alignTo){case "connectors":J=T.alignToConnectors(d,e,q,l);break;case "plotEdges":J=T.alignToPlotEdges(r,e,q,l);break;default:J=T.radialDistributionX(b,g,y,k)}r._attr={visibility:S,align:N.alignment};r._pos={x:J+h.x+({left:m,right:-m}[N.alignment]||0),y:y+h.y-10};N.final.x=J;N.final.y=y;t(h.crop,!0)&&(G=r.getBBox().width,k=null,J-G<m&&1===e?(k=Math.round(G-J+m),P[3]=Math.max(k,P[3])):J+G>q-m&&0===e&&(k=Math.round(J+G-q+m),P[1]=Math.max(k,P[1])),0>y-L/2?P[0]=Math.max(Math.round(-y+
L/2),P[0]):y+L/2>u&&(P[2]=Math.max(Math.round(y+L/2-u),P[2])),r.sideOverflow=k)}}),0===E(P)||this.verifyDataLabelOverflow(P))&&(this.placeDataLabels(),this.points.forEach(function(a){O=e(h,a.options.dataLabels);if(n=t(O.connectorWidth,1)){var d;A=a.connector;if((r=a.dataLabel)&&r._pos&&a.visible&&0<a.labelDistance){S=r._attr.visibility;if(d=!A)a.connector=A=c.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-"+a.colorIndex+(a.className?" "+a.className:"")).add(b.dataLabelsGroup),
c.styledMode||A.attr({"stroke-width":n,stroke:O.connectorColor||a.color||"#666666"});A[d?"attr":"animate"]({d:a.getConnectorPath()});A.attr("visibility",S)}else A&&(a.connector=A.destroy())}}))},n.pie.prototype.placeDataLabels=function(){this.points.forEach(function(a){var b=a.dataLabel,d;b&&a.visible&&((d=b._pos)?(b.sideOverflow&&(b._attr.width=Math.max(b.getBBox().width-b.sideOverflow,0),b.css({width:b._attr.width+"px",textOverflow:(this.options.dataLabels.style||{}).textOverflow||"ellipsis"}),
b.shortened=!0),b.attr(b._attr),b[b.moved?"animate":"attr"](d),b.moved=!0):b&&b.attr({y:-9999}));delete a.distributeBox},this)},n.pie.prototype.alignDataLabel=q,n.pie.prototype.verifyDataLabelOverflow=function(a){var b=this.center,d=this.options,c=d.center,e=d.minSize||80,g,h=null!==d.size;h||(null!==c[0]?g=Math.max(b[2]-Math.max(a[1],a[3]),e):(g=Math.max(b[2]-a[1]-a[3],e),b[0]+=(a[3]-a[1])/2),null!==c[1]?g=Math.max(Math.min(g,b[2]-Math.max(a[0],a[2])),e):(g=Math.max(Math.min(g,b[2]-a[0]-a[2]),e),
b[1]+=(a[0]-a[2])/2),g<b[2]?(b[2]=g,b[3]=Math.min(u(d.innerSize||0,g),g),this.translate(b),this.drawDataLabels&&this.drawDataLabels()):h=!0);return h});n.column&&(n.column.prototype.alignDataLabel=function(a,d,g,c,h){var b=this.chart.inverted,k=a.series,m=a.dlBox||a.shapeArgs,n=t(a.below,a.plotY>t(this.translatedThreshold,k.yAxis.len)),l=t(g.inside,!!this.options.stacking);m&&(c=e(m),0>c.y&&(c.height+=c.y,c.y=0),m=c.y+c.height-k.yAxis.len,0<m&&(c.height-=m),b&&(c={x:k.yAxis.len-c.y-c.height,y:k.xAxis.len-
c.x-c.width,width:c.height,height:c.width}),l||(b?(c.x+=n?0:c.width,c.width=0):(c.y+=n?c.height:0,c.height=0)));g.align=t(g.align,!b||l?"center":n?"right":"left");g.verticalAlign=t(g.verticalAlign,b||l?"middle":n?"top":"bottom");v.prototype.alignDataLabel.call(this,a,d,g,c,h);a.isLabelJustified&&a.contrastColor&&d.css({color:a.contrastColor})})});J(G,"modules/overlapping-datalabels.src.js",[G["parts/Globals.js"]],function(a){var E=a.Chart,G=a.isArray,B=a.objectEach,h=a.pick,e=a.addEvent,q=a.fireEvent;
e(E,"render",function(){var a=[];(this.labelCollectors||[]).forEach(function(e){a=a.concat(e())});(this.yAxis||[]).forEach(function(e){e.options.stackLabels&&!e.options.stackLabels.allowOverlap&&B(e.stacks,function(e){B(e,function(e){a.push(e.label)})})});(this.series||[]).forEach(function(e){var q=e.options.dataLabels;e.visible&&(!1!==q.enabled||e._hasPointLabels)&&e.points.forEach(function(e){e.visible&&(G(e.dataLabels)?e.dataLabels:e.dataLabel?[e.dataLabel]:[]).forEach(function(g){var d=g.options;
g.labelrank=h(d.labelrank,e.labelrank,e.shapeArgs&&e.shapeArgs.height);d.allowOverlap||a.push(g)})})});this.hideOverlappingLabels(a)});E.prototype.hideOverlappingLabels=function(a){var e=this,h=a.length,n=e.renderer,g,d,m,b,k,p,c=function(a,b,c,d,e,g,k,h){return!(e>a+c||e+k<a||g>b+d||g+h<b)};m=function(a){var b,c,d,e=a.box?0:a.padding||0;d=0;if(a&&(!a.alignAttr||a.placed))return b=a.alignAttr||{x:a.attr("x"),y:a.attr("y")},c=a.parentGroup,a.width||(d=a.getBBox(),a.width=d.width,a.height=d.height,
d=n.fontMetrics(null,a.element).h),{x:b.x+(c.translateX||0)+e,y:b.y+(c.translateY||0)+e-d,width:a.width-2*e,height:a.height-2*e}};for(d=0;d<h;d++)if(g=a[d])g.oldOpacity=g.opacity,g.newOpacity=1,g.absoluteBox=m(g);a.sort(function(a,b){return(b.labelrank||0)-(a.labelrank||0)});for(d=0;d<h;d++)for(p=(m=a[d])&&m.absoluteBox,g=d+1;g<h;++g)if(k=(b=a[g])&&b.absoluteBox,p&&k&&m!==b&&0!==m.newOpacity&&0!==b.newOpacity&&(k=c(p.x,p.y,p.width,p.height,k.x,k.y,k.width,k.height)))(m.labelrank<b.labelrank?m:b).newOpacity=
0;a.forEach(function(a){var b,c;a&&(c=a.newOpacity,a.oldOpacity!==c&&(a.alignAttr&&a.placed?(c?a.show(!0):b=function(){a.hide()},a.alignAttr.opacity=c,a[a.isOld?"animate":"attr"](a.alignAttr,null,b),q(e,"afterHideOverlappingLabels")):a.attr({opacity:c})),a.isOld=!0)})}});J(G,"parts/Interaction.js",[G["parts/Globals.js"]],function(a){var E=a.addEvent,G=a.Chart,B=a.createElement,h=a.css,e=a.defaultOptions,q=a.defaultPlotOptions,t=a.extend,u=a.fireEvent,v=a.hasTouch,n=a.isObject,g=a.isArray,d=a.Legend,
m=a.merge,b=a.pick,k=a.Point,p=a.Series,c=a.seriesTypes,x=a.svg,J;J=a.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart,c=b.pointer,d=function(a){var b=c.getPointFromEvent(a);void 0!==b&&(c.isDirectTouch=!0,b.onMouseOver(a))},e;a.points.forEach(function(a){e=g(a.dataLabels)?a.dataLabels:a.dataLabel?[a.dataLabel]:[];a.graphic&&(a.graphic.element.point=a);e.forEach(function(b){b.div?b.div.point=a:b.element.point=a})});a._hasTracking||(a.trackerGroups.forEach(function(e){if(a[e]){a[e].addClass("highcharts-tracker").on("mouseover",
d).on("mouseout",function(a){c.onTrackerMouseOut(a)});if(v)a[e].on("touchstart",d);!b.styledMode&&a.options.cursor&&a[e].css(h).css({cursor:a.options.cursor})}}),a._hasTracking=!0);u(this,"afterDrawTracker")},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:a.graphPath),e=d.length,g=a.chart,k=g.pointer,h=g.renderer,f=g.options.tooltip.snap,m=a.tracker,n,p=function(){if(g.hoverSeries!==a)a.onMouseOver()},q="rgba(192,192,192,"+(x?.0001:.002)+")";if(e&&!c)for(n=
e+1;n--;)"M"===d[n]&&d.splice(n+1,0,d[n+1]-f,d[n+2],"L"),(n&&"M"===d[n]||n===e)&&d.splice(n,0,"L",d[n-2]+f,d[n-1]);m?m.attr({d:d}):a.graph&&(a.tracker=h.path(d).attr({visibility:a.visible?"visible":"hidden",zIndex:2}).addClass(c?"highcharts-tracker-area":"highcharts-tracker-line").add(a.group),g.styledMode||a.tracker.attr({"stroke-linejoin":"round",stroke:q,fill:c?q:"none","stroke-width":a.graph.strokeWidth()+(c?0:2*f)}),[a.tracker,a.markerGroup].forEach(function(a){a.addClass("highcharts-tracker").on("mouseover",
p).on("mouseout",function(a){k.onTrackerMouseOut(a)});b.cursor&&!g.styledMode&&a.css({cursor:b.cursor});if(v)a.on("touchstart",p)}));u(this,"afterDrawTracker")}};c.column&&(c.column.prototype.drawTracker=J.drawTrackerPoint);c.pie&&(c.pie.prototype.drawTracker=J.drawTrackerPoint);c.scatter&&(c.scatter.prototype.drawTracker=J.drawTrackerPoint);t(d.prototype,{setItemEvents:function(a,b,c){var d=this,e=d.chart.renderer.boxWrapper,g=a instanceof k,h="highcharts-legend-"+(g?"point":"series")+"-active",
n=d.chart.styledMode;(c?b:a.legendGroup).on("mouseover",function(){d.allItems.forEach(function(b){a!==b&&b.setState("inactive",!g)});a.setState("hover");a.visible&&e.addClass(h);n||b.css(d.options.itemHoverStyle)}).on("mouseout",function(){d.styledMode||b.css(m(a.visible?d.itemStyle:d.itemHiddenStyle));d.allItems.forEach(function(b){a!==b&&b.setState("",!g)});e.removeClass(h);a.setState()}).on("click",function(b){var c=function(){a.setVisible&&a.setVisible()};e.removeClass(h);b={browserEvent:b};a.firePointEvent?
a.firePointEvent("legendItemClick",b,c):u(a,"legendItemClick",b,c)})},createCheckboxForItem:function(a){a.checkbox=B("input",{type:"checkbox",className:"highcharts-legend-checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);E(a.checkbox,"click",function(b){u(a.series||a,"checkboxClick",{checked:b.target.checked,item:a},function(){a.select()})})}});t(G.prototype,{showResetZoom:function(){function a(){b.zoomOut()}var b=this,c=e.lang,d=b.options.chart.resetZoomButton,
g=d.theme,k=g.states,h="chart"===d.relativeTo||"spaceBox"===d.relativeTo?null:"plotBox";u(this,"beforeShowResetZoom",null,function(){b.resetZoomButton=b.renderer.button(c.resetZoom,null,null,a,g,k&&k.hover).attr({align:d.position.align,title:c.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(d.position,!1,h)});u(this,"afterShowResetZoom")},zoomOut:function(){u(this,"selection",{resetSelection:!0},this.zoom)},zoom:function(c){var d=this,e,g=d.pointer,k=!1,h=d.inverted?g.mouseDownX:g.mouseDownY,
m;!c||c.resetSelection?(d.axes.forEach(function(a){e=a.zoom()}),g.initiated=!1):c.xAxis.concat(c.yAxis).forEach(function(b){var c=b.axis,l=d.inverted?c.left:c.top,m=d.inverted?l+c.width:l+c.height,n=c.isXAxis,p=!1;if(!n&&h>=l&&h<=m||n||!a.defined(h))p=!0;g[n?"zoomX":"zoomY"]&&p&&(e=c.zoom(b.min,b.max),c.displayBtn&&(k=!0))});m=d.resetZoomButton;k&&!m?d.showResetZoom():!k&&n(m)&&(d.resetZoomButton=m.destroy());e&&d.redraw(b(d.options.chart.animation,c&&c.animation,100>d.pointCount))},pan:function(a,
b){var c=this,d=c.hoverPoints,e;u(this,"pan",{originalEvent:a},function(){d&&d.forEach(function(a){a.setState()});("xy"===b?[1,0]:[1]).forEach(function(b){b=c[b?"xAxis":"yAxis"][0];var d=b.horiz,g=a[d?"chartX":"chartY"],d=d?"mouseDownX":"mouseDownY",f=c[d],l=(b.pointRange||0)/2,k=b.reversed&&!c.inverted||!b.reversed&&c.inverted?-1:1,h=b.getExtremes(),m=b.toValue(f-g,!0)+l*k,k=b.toValue(f+b.len-g,!0)-l*k,n=k<m,f=n?k:m,m=n?m:k,k=Math.min(h.dataMin,l?h.min:b.toValue(b.toPixels(h.min)-b.minPixelPadding)),
l=Math.max(h.dataMax,l?h.max:b.toValue(b.toPixels(h.max)+b.minPixelPadding)),n=k-f;0<n&&(m+=n,f=k);n=m-l;0<n&&(m=l,f-=n);b.series.length&&f!==h.min&&m!==h.max&&(b.setExtremes(f,m,!1,!1,{trigger:"pan"}),e=!0);c[d]=g});e&&c.redraw(!1);h(c.container,{cursor:"move"})})}});t(k.prototype,{select:function(a,c){var d=this,e=d.series,g=e.chart;a=b(a,!d.selected);d.firePointEvent(a?"select":"unselect",{accumulate:c},function(){d.selected=d.options.selected=a;e.options.data[e.data.indexOf(d)]=d.options;d.setState(a&&
"select");c||g.getSelectedPoints().forEach(function(a){var b=a.series;a.selected&&a!==d&&(a.selected=a.options.selected=!1,b.options.data[b.data.indexOf(a)]=a.options,a.setState(g.hoverPoints&&b.options.inactiveOtherPoints?"inactive":""),a.firePointEvent("unselect"))})})},onMouseOver:function(a){var b=this.series.chart,c=b.pointer;a=a?c.normalize(a):c.getChartCoordinatesFromPoint(this,b.inverted);c.runPointActions(a,this)},onMouseOut:function(){var a=this.series.chart;this.firePointEvent("mouseOut");
this.series.options.inactiveOtherPoints||(a.hoverPoints||[]).forEach(function(a){a.setState()});a.hoverPoints=a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var b=this,c=m(b.series.options.point,b.options).events;b.events=c;a.objectEach(c,function(c,d){a.isFunction(c)&&E(b,d,c)});this.hasImportedEvents=!0}},setState:function(a,c){var d=Math.floor(this.plotX),e=this.plotY,g=this.series,k=this.state,h=g.options.states[a||"normal"]||{},m=q[g.type].marker&&g.options.marker,f=m&&
!1===m.enabled,n=m&&m.states&&m.states[a||"normal"]||{},p=!1===n.enabled,w=g.stateMarkerGraphic,v=this.marker||{},x=g.chart,B=g.halo,y,E,F,G=m&&g.markerAttribs;a=a||"";if(!(a===this.state&&!c||this.selected&&"select"!==a||!1===h.enabled||a&&(p||f&&!1===n.enabled)||a&&v.states&&v.states[a]&&!1===v.states[a].enabled)){this.state=a;G&&(y=g.markerAttribs(this,a));if(this.graphic)k&&this.graphic.removeClass("highcharts-point-"+k),a&&this.graphic.addClass("highcharts-point-"+a),x.styledMode||(E=g.pointAttribs(this,
a),F=b(x.options.chart.animation,h.animation),g.options.inactiveOtherPoints&&((this.dataLabels||[]).forEach(function(a){a&&a.animate({opacity:E.opacity},F)}),this.connector&&this.connector.animate({opacity:E.opacity},F)),this.graphic.animate(E,F)),y&&this.graphic.animate(y,b(x.options.chart.animation,n.animation,m.animation)),w&&w.hide();else{if(a&&n){k=v.symbol||g.symbol;w&&w.currentSymbol!==k&&(w=w.destroy());if(w)w[c?"animate":"attr"]({x:y.x,y:y.y});else k&&(g.stateMarkerGraphic=w=x.renderer.symbol(k,
y.x,y.y,y.width,y.height).add(g.markerGroup),w.currentSymbol=k);!x.styledMode&&w&&w.attr(g.pointAttribs(this,a))}w&&(w[a&&x.isInsidePlot(d,e,x.inverted)?"show":"hide"](),w.element.point=this)}(a=h.halo)&&a.size?(B||(g.halo=B=x.renderer.path().add((this.graphic||w).parentGroup)),B.show()[c?"animate":"attr"]({d:this.haloPath(a.size)}),B.attr({"class":"highcharts-halo highcharts-color-"+b(this.colorIndex,g.colorIndex)+(this.className?" "+this.className:""),zIndex:-1}),B.point=this,x.styledMode||B.attr(t({fill:this.color||
g.color,"fill-opacity":a.opacity},a.attributes))):B&&B.point&&B.point.haloPath&&B.animate({d:B.point.haloPath(0)},null,B.hide);u(this,"afterSetState")}},haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-a,this.plotY-a,2*a,2*a)}});t(p.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&u(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,
b=this.chart,c=b.tooltip,d=b.hoverPoint;b.hoverSeries=null;if(d)d.onMouseOut();this&&a.events.mouseOut&&u(this,"mouseOut");!c||this.stickyTracking||c.shared&&!this.noSharedTooltip||c.hide();b.series.forEach(function(a){a.setState("",!0)})},setState:function(a,c){var d=this,e=d.options,g=d.graph,k=e.inactiveOtherPoints,h=e.states,m=e.lineWidth,f=e.opacity,n=b(h[a||"normal"]&&h[a||"normal"].animation,d.chart.options.chart.animation),e=0;a=a||"";if(d.state!==a&&([d.group,d.markerGroup,d.dataLabelsGroup].forEach(function(b){b&&
(d.state&&b.removeClass("highcharts-series-"+d.state),a&&b.addClass("highcharts-series-"+a))}),d.state=a,!d.chart.styledMode)){if(h[a]&&!1===h[a].enabled)return;a&&(m=h[a].lineWidth||m+(h[a].lineWidthPlus||0),f=b(h[a].opacity,f));if(g&&!g.dashstyle)for(h={"stroke-width":m},g.animate(h,n);d["zone-graph-"+e];)d["zone-graph-"+e].attr(h),e+=1;k||[d.group,d.markerGroup,d.dataLabelsGroup,d.labelBySeries].forEach(function(a){a&&a.animate({opacity:f},n)})}c&&k&&d.points&&d.points.forEach(function(b){b.setState&&
b.setState(a)})},setVisible:function(a,b){var c=this,d=c.chart,e=c.legendItem,g,k=d.options.chart.ignoreHiddenSeries,h=c.visible;g=(c.visible=a=c.options.visible=c.userOptions.visible=void 0===a?!h:a)?"show":"hide";["group","dataLabelsGroup","markerGroup","tracker","tt"].forEach(function(a){if(c[a])c[a][g]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&d.series.forEach(function(a){a.options.stacking&&
a.visible&&(a.isDirty=!0)});c.linkedSeries.forEach(function(b){b.setVisible(a,!1)});k&&(d.isDirtyBox=!0);u(c,g);!1!==b&&d.redraw()},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=this.options.selected=void 0===a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);u(this,a?"select":"unselect")},drawTracker:J.drawTrackerGraph})});J(G,"parts/Responsive.js",[G["parts/Globals.js"]],function(a){var E=a.Chart,G=a.isArray,B=a.isObject,h=
a.pick,e=a.splat;E.prototype.setResponsive=function(e,h){var q=this.options.responsive,t=[],n=this.currentResponsive;!h&&q&&q.rules&&q.rules.forEach(function(g){void 0===g._id&&(g._id=a.uniqueKey());this.matchResponsiveRule(g,t,e)},this);h=a.merge.apply(0,t.map(function(e){return a.find(q.rules,function(a){return a._id===e}).chartOptions}));h.isResponsiveOptions=!0;t=t.toString()||void 0;t!==(n&&n.ruleIds)&&(n&&this.update(n.undoOptions,e,!0),t?(n=this.currentOptions(h),n.isResponsiveOptions=!0,this.currentResponsive=
{ruleIds:t,mergedOptions:h,undoOptions:n},this.update(h,e,!0)):this.currentResponsive=void 0)};E.prototype.matchResponsiveRule=function(a,e){var q=a.condition;(q.callback||function(){return this.chartWidth<=h(q.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=h(q.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=h(q.minWidth,0)&&this.chartHeight>=h(q.minHeight,0)}).call(this)&&e.push(a._id)};E.prototype.currentOptions=function(q){function t(n,g,d,m){var b;a.objectEach(n,function(a,n){if(!m&&-1<u.collectionsWithUpdate.indexOf(n))for(a=
e(a),d[n]=[],b=0;b<a.length;b++)g[n][b]&&(d[n][b]={},t(a[b],g[n][b],d[n][b],m+1));else B(a)?(d[n]=G(a)?[]:{},t(a,g[n]||{},d[n],m+1)):d[n]=h(g[n],null)})}var u=this,v={};t(q,this.options,v,0);return v}});J(G,"masters/highcharts.src.js",[G["parts/Globals.js"]],function(a){return a});G["masters/highcharts.src.js"]._modules=G;return G["masters/highcharts.src.js"]});

},{}],36:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],37:[function(require,module,exports){
(function (setImmediate,clearImmediate){
var nextTick = require('process/browser.js').nextTick;
var apply = Function.prototype.apply;
var slice = Array.prototype.slice;
var immediateIds = {};
var nextImmediateId = 0;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) { timeout.close(); };

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// That's not how node.js implements it but the exposed api is the same.
exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
  var id = nextImmediateId++;
  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

  immediateIds[id] = true;

  nextTick(function onNextTick() {
    if (immediateIds[id]) {
      // fn.call() is faster so we optimize for the common use-case
      // @see http://jsperf.com/call-apply-segu
      if (args) {
        fn.apply(null, args);
      } else {
        fn.call(null);
      }
      // Prevent ids from leaking
      exports.clearImmediate(id);
    }
  });

  return id;
};

exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
  delete immediateIds[id];
};
}).call(this,require("timers").setImmediate,require("timers").clearImmediate)
},{"process/browser.js":36,"timers":37}],38:[function(require,module,exports){
var Vue // late bind
var version
var map = Object.create(null)
if (typeof window !== 'undefined') {
  window.__VUE_HOT_MAP__ = map
}
var installed = false
var isBrowserify = false
var initHookName = 'beforeCreate'

exports.install = function (vue, browserify) {
  if (installed) { return }
  installed = true

  Vue = vue.__esModule ? vue.default : vue
  version = Vue.version.split('.').map(Number)
  isBrowserify = browserify

  // compat with < 2.0.0-alpha.7
  if (Vue.config._lifecycleHooks.indexOf('init') > -1) {
    initHookName = 'init'
  }

  exports.compatible = version[0] >= 2
  if (!exports.compatible) {
    console.warn(
      '[HMR] You are using a version of vue-hot-reload-api that is ' +
        'only compatible with Vue.js core ^2.0.0.'
    )
    return
  }
}

/**
 * Create a record for a hot module, which keeps track of its constructor
 * and instances
 *
 * @param {String} id
 * @param {Object} options
 */

exports.createRecord = function (id, options) {
  if(map[id]) { return }

  var Ctor = null
  if (typeof options === 'function') {
    Ctor = options
    options = Ctor.options
  }
  makeOptionsHot(id, options)
  map[id] = {
    Ctor: Ctor,
    options: options,
    instances: []
  }
}

/**
 * Check if module is recorded
 *
 * @param {String} id
 */

exports.isRecorded = function (id) {
  return typeof map[id] !== 'undefined'
}

/**
 * Make a Component options object hot.
 *
 * @param {String} id
 * @param {Object} options
 */

function makeOptionsHot(id, options) {
  if (options.functional) {
    var render = options.render
    options.render = function (h, ctx) {
      var instances = map[id].instances
      if (ctx && instances.indexOf(ctx.parent) < 0) {
        instances.push(ctx.parent)
      }
      return render(h, ctx)
    }
  } else {
    injectHook(options, initHookName, function() {
      var record = map[id]
      if (!record.Ctor) {
        record.Ctor = this.constructor
      }
      record.instances.push(this)
    })
    injectHook(options, 'beforeDestroy', function() {
      var instances = map[id].instances
      instances.splice(instances.indexOf(this), 1)
    })
  }
}

/**
 * Inject a hook to a hot reloadable component so that
 * we can keep track of it.
 *
 * @param {Object} options
 * @param {String} name
 * @param {Function} hook
 */

function injectHook(options, name, hook) {
  var existing = options[name]
  options[name] = existing
    ? Array.isArray(existing) ? existing.concat(hook) : [existing, hook]
    : [hook]
}

function tryWrap(fn) {
  return function (id, arg) {
    try {
      fn(id, arg)
    } catch (e) {
      console.error(e)
      console.warn(
        'Something went wrong during Vue component hot-reload. Full reload required.'
      )
    }
  }
}

function updateOptions (oldOptions, newOptions) {
  for (var key in oldOptions) {
    if (!(key in newOptions)) {
      delete oldOptions[key]
    }
  }
  for (var key$1 in newOptions) {
    oldOptions[key$1] = newOptions[key$1]
  }
}

exports.rerender = tryWrap(function (id, options) {
  var record = map[id]
  if (!options) {
    record.instances.slice().forEach(function (instance) {
      instance.$forceUpdate()
    })
    return
  }
  if (typeof options === 'function') {
    options = options.options
  }
  if (record.Ctor) {
    record.Ctor.options.render = options.render
    record.Ctor.options.staticRenderFns = options.staticRenderFns
    record.instances.slice().forEach(function (instance) {
      instance.$options.render = options.render
      instance.$options.staticRenderFns = options.staticRenderFns
      // reset static trees
      // pre 2.5, all static trees are cached together on the instance
      if (instance._staticTrees) {
        instance._staticTrees = []
      }
      // 2.5.0
      if (Array.isArray(record.Ctor.options.cached)) {
        record.Ctor.options.cached = []
      }
      // 2.5.3
      if (Array.isArray(instance.$options.cached)) {
        instance.$options.cached = []
      }

      // post 2.5.4: v-once trees are cached on instance._staticTrees.
      // Pure static trees are cached on the staticRenderFns array
      // (both already reset above)

      // 2.6: temporarily mark rendered scoped slots as unstable so that
      // child components can be forced to update
      var restore = patchScopedSlots(instance)
      instance.$forceUpdate()
      instance.$nextTick(restore)
    })
  } else {
    // functional or no instance created yet
    record.options.render = options.render
    record.options.staticRenderFns = options.staticRenderFns

    // handle functional component re-render
    if (record.options.functional) {
      // rerender with full options
      if (Object.keys(options).length > 2) {
        updateOptions(record.options, options)
      } else {
        // template-only rerender.
        // need to inject the style injection code for CSS modules
        // to work properly.
        var injectStyles = record.options._injectStyles
        if (injectStyles) {
          var render = options.render
          record.options.render = function (h, ctx) {
            injectStyles.call(ctx)
            return render(h, ctx)
          }
        }
      }
      record.options._Ctor = null
      // 2.5.3
      if (Array.isArray(record.options.cached)) {
        record.options.cached = []
      }
      record.instances.slice().forEach(function (instance) {
        instance.$forceUpdate()
      })
    }
  }
})

exports.reload = tryWrap(function (id, options) {
  var record = map[id]
  if (options) {
    if (typeof options === 'function') {
      options = options.options
    }
    makeOptionsHot(id, options)
    if (record.Ctor) {
      if (version[1] < 2) {
        // preserve pre 2.2 behavior for global mixin handling
        record.Ctor.extendOptions = options
      }
      var newCtor = record.Ctor.super.extend(options)
      record.Ctor.options = newCtor.options
      record.Ctor.cid = newCtor.cid
      record.Ctor.prototype = newCtor.prototype
      if (newCtor.release) {
        // temporary global mixin strategy used in < 2.0.0-alpha.6
        newCtor.release()
      }
    } else {
      updateOptions(record.options, options)
    }
  }
  record.instances.slice().forEach(function (instance) {
    if (instance.$vnode && instance.$vnode.context) {
      instance.$vnode.context.$forceUpdate()
    } else {
      console.warn(
        'Root or manually mounted instance modified. Full reload required.'
      )
    }
  })
})

// 2.6 optimizes template-compiled scoped slots and skips updates if child
// only uses scoped slots. We need to patch the scoped slots resolving helper
// to temporarily mark all scoped slots as unstable in order to force child
// updates.
function patchScopedSlots (instance) {
  if (!instance._u) { return }
  // https://github.com/vuejs/vue/blob/dev/src/core/instance/render-helpers/resolve-scoped-slots.js
  var original = instance._u
  instance._u = function (slots) {
    try {
      // 2.6.4 ~ 2.6.6
      return original(slots, true)
    } catch (e) {
      // 2.5 / >= 2.6.7
      return original(slots, null, true)
    }
  }
  return function () {
    instance._u = original
  }
}

},{}],39:[function(require,module,exports){
var inserted = exports.cache = {}

function noop () {}

exports.insert = function (css) {
  if (inserted[css]) return noop
  inserted[css] = true

  var elem = document.createElement('style')
  elem.setAttribute('type', 'text/css')

  if ('textContent' in elem) {
    elem.textContent = css
  } else {
    elem.styleSheet.cssText = css
  }

  document.getElementsByTagName('head')[0].appendChild(elem)
  return function () {
    document.getElementsByTagName('head')[0].removeChild(elem)
    inserted[css] = false
  }
}

},{}],40:[function(require,module,exports){
;(function(){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'page_index',
    data: function data() {
        return {
            status: {
                state: 'unknown',
                message: 'Loading...'
            },
            response: null,
            error: false,
            title: null,

            interval: 300,
            secondsLeft: 300
        };
    },
    mounted: function mounted() {
        var titleEl = document.getElementById('title');
        document.title = titleEl.value;
        titleEl.remove();

        var headerEl = document.getElementById('header');
        this.title = headerEl.value;
        headerEl.remove();

        this.getStatus();
        setInterval(this.attemptRefresh, 1000);
    },

    methods: {
        getStatus: function getStatus() {
            _axios2.default.get('temp/getMonitors.php').then(function (response) {
                this.response = response.data;

                console.log(this.status);

                var activeCount = this.response.psp.totalMonitors - this.response.statistics.counts.paused;
                var percentAlive = 100 - (activeCount - this.response.statistics.counts.up) / activeCount * 100;

                this.status.state = this.parseSeverity(percentAlive).toLowerCase();
                switch (percentAlive) {
                    case percentAlive < 90:
                        this.status.message = 'Major Outage';
                        break;
                    case percentAlive < 100:
                        this.status.message = 'Partial Outage';
                        break;
                    default:
                        this.status.message = 'All Systems Operational';
                }
            }.bind(this)).catch(function (error) {
                this.error = true;

                console.error("There was an error while collecting the status of this page.");
                console.error(error);

                this.status.state = "major";
                this.status.message = "There was an error while collecting the statuses.";
            }.bind(this));
        },
        attemptRefresh: function attemptRefresh() {
            if (this.secondsLeft === 0) {
                this.getStatus();
                this.secondsLeft = this.interval;
            } else {
                this.secondsLeft--;
            }
        }
    }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('page-header',{attrs:{"title":_vm.title,"cornertext":'Refreshing in: '+_vm.secondsLeft + ' seconds'}}),_vm._v(" "),_c('div',{staticClass:"page"},[(_vm.response !== null)?_c('div',[_c('status',{attrs:{"state":_vm.status.state,"message":_vm.status.message}}),_vm._v(" "),_vm._l((_vm.response.psp.monitors),function(monitor){return _c('monitor',{key:monitor.ID,attrs:{"monitor":monitor}})})],2):_c('div',{staticClass:"spinner"},[_c('div',{staticClass:"rect1"}),_vm._v(" "),_c('div',{staticClass:"rect2"}),_vm._v(" "),_c('div',{staticClass:"rect3"}),_vm._v(" "),_c('div',{staticClass:"rect4"}),_vm._v(" "),_c('div',{staticClass:"rect5"})])])],1)}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-548fbe5e", __vue__options__)
  } else {
    hotAPI.reload("data-v-548fbe5e", __vue__options__)
  }
})()}
},{"axios":8,"vue":"vue","vue-hot-reload-api":38}],41:[function(require,module,exports){
'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _vue2.default.mixin({
    methods: {
        parseStatus: function parseStatus(status) {
            switch (status) {
                case 0:
                    return 'Paused';
                case 2:
                    return 'Operational';
                case 8:
                    return 'Partial';
                case 9:
                    return 'Major';
                case 'success':
                    return 'Operational';
                case 'warning':
                    return 'Partial';
                default:
                    return 'Unknown';
            }
        },
        parseSeverity: function parseSeverity(input) {
            if (input < 80) {
                return 'Major';
            } else if (input < 100) {
                return 'Partial';
            } else {
                return 'Operational';
            }
        }
    }
});

},{"vue":"vue"}],"vue":[function(require,module,exports){
(function (global,setImmediate){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
  (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = global || self, global.Vue = factory());
})(undefined, function () {
  'use strict';

  /*  */

  var emptyObject = Object.freeze({});

  // These helpers produce better VM code in JS engines due to their
  // explicitness and function inlining.
  function isUndef(v) {
    return v === undefined || v === null;
  }

  function isDef(v) {
    return v !== undefined && v !== null;
  }

  function isTrue(v) {
    return v === true;
  }

  function isFalse(v) {
    return v === false;
  }

  /**
   * Check if value is primitive.
   */
  function isPrimitive(value) {
    return typeof value === 'string' || typeof value === 'number' ||
    // $flow-disable-line
    (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'symbol' || typeof value === 'boolean';
  }

  /**
   * Quick object check - this is primarily used to tell
   * Objects from primitive values when we know the value
   * is a JSON-compliant type.
   */
  function isObject(obj) {
    return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
  }

  /**
   * Get the raw type string of a value, e.g., [object Object].
   */
  var _toString = Object.prototype.toString;

  function toRawType(value) {
    return _toString.call(value).slice(8, -1);
  }

  /**
   * Strict object type check. Only returns true
   * for plain JavaScript objects.
   */
  function isPlainObject(obj) {
    return _toString.call(obj) === '[object Object]';
  }

  function isRegExp(v) {
    return _toString.call(v) === '[object RegExp]';
  }

  /**
   * Check if val is a valid array index.
   */
  function isValidArrayIndex(val) {
    var n = parseFloat(String(val));
    return n >= 0 && Math.floor(n) === n && isFinite(val);
  }

  function isPromise(val) {
    return isDef(val) && typeof val.then === 'function' && typeof val.catch === 'function';
  }

  /**
   * Convert a value to a string that is actually rendered.
   */
  function toString(val) {
    return val == null ? '' : Array.isArray(val) || isPlainObject(val) && val.toString === _toString ? JSON.stringify(val, null, 2) : String(val);
  }

  /**
   * Convert an input value to a number for persistence.
   * If the conversion fails, return original string.
   */
  function toNumber(val) {
    var n = parseFloat(val);
    return isNaN(n) ? val : n;
  }

  /**
   * Make a map and return a function for checking if a key
   * is in that map.
   */
  function makeMap(str, expectsLowerCase) {
    var map = Object.create(null);
    var list = str.split(',');
    for (var i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase ? function (val) {
      return map[val.toLowerCase()];
    } : function (val) {
      return map[val];
    };
  }

  /**
   * Check if a tag is a built-in tag.
   */
  var isBuiltInTag = makeMap('slot,component', true);

  /**
   * Check if an attribute is a reserved attribute.
   */
  var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

  /**
   * Remove an item from an array.
   */
  function remove(arr, item) {
    if (arr.length) {
      var index = arr.indexOf(item);
      if (index > -1) {
        return arr.splice(index, 1);
      }
    }
  }

  /**
   * Check whether an object has the property.
   */
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
  }

  /**
   * Create a cached version of a pure function.
   */
  function cached(fn) {
    var cache = Object.create(null);
    return function cachedFn(str) {
      var hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  }

  /**
   * Camelize a hyphen-delimited string.
   */
  var camelizeRE = /-(\w)/g;
  var camelize = cached(function (str) {
    return str.replace(camelizeRE, function (_, c) {
      return c ? c.toUpperCase() : '';
    });
  });

  /**
   * Capitalize a string.
   */
  var capitalize = cached(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });

  /**
   * Hyphenate a camelCase string.
   */
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cached(function (str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase();
  });

  /**
   * Simple bind polyfill for environments that do not support it,
   * e.g., PhantomJS 1.x. Technically, we don't need this anymore
   * since native bind is now performant enough in most browsers.
   * But removing it would mean breaking code that was able to run in
   * PhantomJS 1.x, so this must be kept for backward compatibility.
   */

  /* istanbul ignore next */
  function polyfillBind(fn, ctx) {
    function boundFn(a) {
      var l = arguments.length;
      return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
    }

    boundFn._length = fn.length;
    return boundFn;
  }

  function nativeBind(fn, ctx) {
    return fn.bind(ctx);
  }

  var bind = Function.prototype.bind ? nativeBind : polyfillBind;

  /**
   * Convert an Array-like object to a real Array.
   */
  function toArray(list, start) {
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);
    while (i--) {
      ret[i] = list[i + start];
    }
    return ret;
  }

  /**
   * Mix properties into target object.
   */
  function extend(to, _from) {
    for (var key in _from) {
      to[key] = _from[key];
    }
    return to;
  }

  /**
   * Merge an Array of Objects into a single Object.
   */
  function toObject(arr) {
    var res = {};
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        extend(res, arr[i]);
      }
    }
    return res;
  }

  /* eslint-disable no-unused-vars */

  /**
   * Perform no operation.
   * Stubbing args to make Flow happy without leaving useless transpiled code
   * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
   */
  function noop(a, b, c) {}

  /**
   * Always return false.
   */
  var no = function no(a, b, c) {
    return false;
  };

  /* eslint-enable no-unused-vars */

  /**
   * Return the same value.
   */
  var identity = function identity(_) {
    return _;
  };

  /**
   * Generate a string containing static keys from compiler modules.
   */
  function genStaticKeys(modules) {
    return modules.reduce(function (keys, m) {
      return keys.concat(m.staticKeys || []);
    }, []).join(',');
  }

  /**
   * Check if two values are loosely equal - that is,
   * if they are plain objects, do they have the same shape?
   */
  function looseEqual(a, b) {
    if (a === b) {
      return true;
    }
    var isObjectA = isObject(a);
    var isObjectB = isObject(b);
    if (isObjectA && isObjectB) {
      try {
        var isArrayA = Array.isArray(a);
        var isArrayB = Array.isArray(b);
        if (isArrayA && isArrayB) {
          return a.length === b.length && a.every(function (e, i) {
            return looseEqual(e, b[i]);
          });
        } else if (a instanceof Date && b instanceof Date) {
          return a.getTime() === b.getTime();
        } else if (!isArrayA && !isArrayB) {
          var keysA = Object.keys(a);
          var keysB = Object.keys(b);
          return keysA.length === keysB.length && keysA.every(function (key) {
            return looseEqual(a[key], b[key]);
          });
        } else {
          /* istanbul ignore next */
          return false;
        }
      } catch (e) {
        /* istanbul ignore next */
        return false;
      }
    } else if (!isObjectA && !isObjectB) {
      return String(a) === String(b);
    } else {
      return false;
    }
  }

  /**
   * Return the first index at which a loosely equal value can be
   * found in the array (if value is a plain object, the array must
   * contain an object of the same shape), or -1 if it is not present.
   */
  function looseIndexOf(arr, val) {
    for (var i = 0; i < arr.length; i++) {
      if (looseEqual(arr[i], val)) {
        return i;
      }
    }
    return -1;
  }

  /**
   * Ensure a function is called only once.
   */
  function once(fn) {
    var called = false;
    return function () {
      if (!called) {
        called = true;
        fn.apply(this, arguments);
      }
    };
  }

  var SSR_ATTR = 'data-server-rendered';

  var ASSET_TYPES = ['component', 'directive', 'filter'];

  var LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated', 'errorCaptured', 'serverPrefetch'];

  /*  */

  var config = {
    /**
     * Option merge strategies (used in core/util/options)
     */
    // $flow-disable-line
    optionMergeStrategies: Object.create(null),

    /**
     * Whether to suppress warnings.
     */
    silent: false,

    /**
     * Show production mode tip message on boot?
     */
    productionTip: "development" !== 'production',

    /**
     * Whether to enable devtools
     */
    devtools: "development" !== 'production',

    /**
     * Whether to record perf
     */
    performance: false,

    /**
     * Error handler for watcher errors
     */
    errorHandler: null,

    /**
     * Warn handler for watcher warns
     */
    warnHandler: null,

    /**
     * Ignore certain custom elements
     */
    ignoredElements: [],

    /**
     * Custom user key aliases for v-on
     */
    // $flow-disable-line
    keyCodes: Object.create(null),

    /**
     * Check if a tag is reserved so that it cannot be registered as a
     * component. This is platform-dependent and may be overwritten.
     */
    isReservedTag: no,

    /**
     * Check if an attribute is reserved so that it cannot be used as a component
     * prop. This is platform-dependent and may be overwritten.
     */
    isReservedAttr: no,

    /**
     * Check if a tag is an unknown element.
     * Platform-dependent.
     */
    isUnknownElement: no,

    /**
     * Get the namespace of an element
     */
    getTagNamespace: noop,

    /**
     * Parse the real tag name for the specific platform.
     */
    parsePlatformTagName: identity,

    /**
     * Check if an attribute must be bound using property, e.g. value
     * Platform-dependent.
     */
    mustUseProp: no,

    /**
     * Perform updates asynchronously. Intended to be used by Vue Test Utils
     * This will significantly reduce performance if set to false.
     */
    async: true,

    /**
     * Exposed for legacy reasons
     */
    _lifecycleHooks: LIFECYCLE_HOOKS
  };

  /*  */

  /**
   * unicode letters used for parsing html tags, component names and property paths.
   * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
   * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
   */
  var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

  /**
   * Check if a string starts with $ or _
   */
  function isReserved(str) {
    var c = (str + '').charCodeAt(0);
    return c === 0x24 || c === 0x5F;
  }

  /**
   * Define a property.
   */
  function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
      value: val,
      enumerable: !!enumerable,
      writable: true,
      configurable: true
    });
  }

  /**
   * Parse simple path.
   */
  var bailRE = new RegExp("[^" + unicodeRegExp.source + ".$_\\d]");
  function parsePath(path) {
    if (bailRE.test(path)) {
      return;
    }
    var segments = path.split('.');
    return function (obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) {
          return;
        }
        obj = obj[segments[i]];
      }
      return obj;
    };
  }

  /*  */

  // can we use __proto__?
  var hasProto = '__proto__' in {};

  // Browser environment sniffing
  var inBrowser = typeof window !== 'undefined';
  var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
  var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
  var UA = inBrowser && window.navigator.userAgent.toLowerCase();
  var isIE = UA && /msie|trident/.test(UA);
  var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
  var isEdge = UA && UA.indexOf('edge/') > 0;
  var isAndroid = UA && UA.indexOf('android') > 0 || weexPlatform === 'android';
  var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === 'ios';
  var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
  var isPhantomJS = UA && /phantomjs/.test(UA);
  var isFF = UA && UA.match(/firefox\/(\d+)/);

  // Firefox has a "watch" function on Object.prototype...
  var nativeWatch = {}.watch;

  var supportsPassive = false;
  if (inBrowser) {
    try {
      var opts = {};
      Object.defineProperty(opts, 'passive', {
        get: function get() {
          /* istanbul ignore next */
          supportsPassive = true;
        }
      }); // https://github.com/facebook/flow/issues/285
      window.addEventListener('test-passive', null, opts);
    } catch (e) {}
  }

  // this needs to be lazy-evaled because vue may be required before
  // vue-server-renderer can set VUE_ENV
  var _isServer;
  var isServerRendering = function isServerRendering() {
    if (_isServer === undefined) {
      /* istanbul ignore if */
      if (!inBrowser && !inWeex && typeof global !== 'undefined') {
        // detect presence of vue-server-renderer and avoid
        // Webpack shimming the process
        _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
      } else {
        _isServer = false;
      }
    }
    return _isServer;
  };

  // detect devtools
  var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

  /* istanbul ignore next */
  function isNative(Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
  }

  var hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

  var _Set;
  /* istanbul ignore if */ // $flow-disable-line
  if (typeof Set !== 'undefined' && isNative(Set)) {
    // use native Set when available.
    _Set = Set;
  } else {
    // a non-standard Set polyfill that only works with primitive keys.
    _Set = /*@__PURE__*/function () {
      function Set() {
        this.set = Object.create(null);
      }
      Set.prototype.has = function has(key) {
        return this.set[key] === true;
      };
      Set.prototype.add = function add(key) {
        this.set[key] = true;
      };
      Set.prototype.clear = function clear() {
        this.set = Object.create(null);
      };

      return Set;
    }();
  }

  /*  */

  var warn = noop;
  var tip = noop;
  var generateComponentTrace = noop; // work around flow check
  var formatComponentName = noop;

  {
    var hasConsole = typeof console !== 'undefined';
    var classifyRE = /(?:^|[-_])(\w)/g;
    var classify = function classify(str) {
      return str.replace(classifyRE, function (c) {
        return c.toUpperCase();
      }).replace(/[-_]/g, '');
    };

    warn = function warn(msg, vm) {
      var trace = vm ? generateComponentTrace(vm) : '';

      if (config.warnHandler) {
        config.warnHandler.call(null, msg, vm, trace);
      } else if (hasConsole && !config.silent) {
        console.error("[Vue warn]: " + msg + trace);
      }
    };

    tip = function tip(msg, vm) {
      if (hasConsole && !config.silent) {
        console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ''));
      }
    };

    formatComponentName = function formatComponentName(vm, includeFile) {
      if (vm.$root === vm) {
        return '<Root>';
      }
      var options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm;
      var name = options.name || options._componentTag;
      var file = options.__file;
      if (!name && file) {
        var match = file.match(/([^/\\]+)\.vue$/);
        name = match && match[1];
      }

      return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : '');
    };

    var repeat = function repeat(str, n) {
      var res = '';
      while (n) {
        if (n % 2 === 1) {
          res += str;
        }
        if (n > 1) {
          str += str;
        }
        n >>= 1;
      }
      return res;
    };

    generateComponentTrace = function generateComponentTrace(vm) {
      if (vm._isVue && vm.$parent) {
        var tree = [];
        var currentRecursiveSequence = 0;
        while (vm) {
          if (tree.length > 0) {
            var last = tree[tree.length - 1];
            if (last.constructor === vm.constructor) {
              currentRecursiveSequence++;
              vm = vm.$parent;
              continue;
            } else if (currentRecursiveSequence > 0) {
              tree[tree.length - 1] = [last, currentRecursiveSequence];
              currentRecursiveSequence = 0;
            }
          }
          tree.push(vm);
          vm = vm.$parent;
        }
        return '\n\nfound in\n\n' + tree.map(function (vm, i) {
          return "" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : formatComponentName(vm));
        }).join('\n');
      } else {
        return "\n\n(found in " + formatComponentName(vm) + ")";
      }
    };
  }

  /*  */

  var uid = 0;

  /**
   * A dep is an observable that can have multiple
   * directives subscribing to it.
   */
  var Dep = function Dep() {
    this.id = uid++;
    this.subs = [];
  };

  Dep.prototype.addSub = function addSub(sub) {
    this.subs.push(sub);
  };

  Dep.prototype.removeSub = function removeSub(sub) {
    remove(this.subs, sub);
  };

  Dep.prototype.depend = function depend() {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  };

  Dep.prototype.notify = function notify() {
    // stabilize the subscriber list first
    var subs = this.subs.slice();
    if (!config.async) {
      // subs aren't sorted in scheduler if not running async
      // we need to sort them now to make sure they fire in correct
      // order
      subs.sort(function (a, b) {
        return a.id - b.id;
      });
    }
    for (var i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  };

  // The current target watcher being evaluated.
  // This is globally unique because only one watcher
  // can be evaluated at a time.
  Dep.target = null;
  var targetStack = [];

  function pushTarget(target) {
    targetStack.push(target);
    Dep.target = target;
  }

  function popTarget() {
    targetStack.pop();
    Dep.target = targetStack[targetStack.length - 1];
  }

  /*  */

  var VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
    this.ns = undefined;
    this.context = context;
    this.fnContext = undefined;
    this.fnOptions = undefined;
    this.fnScopeId = undefined;
    this.key = data && data.key;
    this.componentOptions = componentOptions;
    this.componentInstance = undefined;
    this.parent = undefined;
    this.raw = false;
    this.isStatic = false;
    this.isRootInsert = true;
    this.isComment = false;
    this.isCloned = false;
    this.isOnce = false;
    this.asyncFactory = asyncFactory;
    this.asyncMeta = undefined;
    this.isAsyncPlaceholder = false;
  };

  var prototypeAccessors = { child: { configurable: true } };

  // DEPRECATED: alias for componentInstance for backwards compat.
  /* istanbul ignore next */
  prototypeAccessors.child.get = function () {
    return this.componentInstance;
  };

  Object.defineProperties(VNode.prototype, prototypeAccessors);

  var createEmptyVNode = function createEmptyVNode(text) {
    if (text === void 0) text = '';

    var node = new VNode();
    node.text = text;
    node.isComment = true;
    return node;
  };

  function createTextVNode(val) {
    return new VNode(undefined, undefined, undefined, String(val));
  }

  // optimized shallow clone
  // used for static nodes and slot nodes because they may be reused across
  // multiple renders, cloning them avoids errors when DOM manipulations rely
  // on their elm reference.
  function cloneVNode(vnode) {
    var cloned = new VNode(vnode.tag, vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.fnContext = vnode.fnContext;
    cloned.fnOptions = vnode.fnOptions;
    cloned.fnScopeId = vnode.fnScopeId;
    cloned.asyncMeta = vnode.asyncMeta;
    cloned.isCloned = true;
    return cloned;
  }

  /*
   * not type checking this file because flow doesn't play well with
   * dynamically accessing methods on Array prototype
   */

  var arrayProto = Array.prototype;
  var arrayMethods = Object.create(arrayProto);

  var methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];

  /**
   * Intercept mutating methods and emit events
   */
  methodsToPatch.forEach(function (method) {
    // cache original method
    var original = arrayProto[method];
    def(arrayMethods, method, function mutator() {
      var args = [],
          len = arguments.length;
      while (len--) {
        args[len] = arguments[len];
      }var result = original.apply(this, args);
      var ob = this.__ob__;
      var inserted;
      switch (method) {
        case 'push':
        case 'unshift':
          inserted = args;
          break;
        case 'splice':
          inserted = args.slice(2);
          break;
      }
      if (inserted) {
        ob.observeArray(inserted);
      }
      // notify change
      ob.dep.notify();
      return result;
    });
  });

  /*  */

  var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

  /**
   * In some cases we may want to disable observation inside a component's
   * update computation.
   */
  var shouldObserve = true;

  function toggleObserving(value) {
    shouldObserve = value;
  }

  /**
   * Observer class that is attached to each observed
   * object. Once attached, the observer converts the target
   * object's property keys into getter/setters that
   * collect dependencies and dispatch updates.
   */
  var Observer = function Observer(value) {
    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;
    def(value, '__ob__', this);
    if (Array.isArray(value)) {
      if (hasProto) {
        protoAugment(value, arrayMethods);
      } else {
        copyAugment(value, arrayMethods, arrayKeys);
      }
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  };

  /**
   * Walk through all properties and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */
  Observer.prototype.walk = function walk(obj) {
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      defineReactive$$1(obj, keys[i]);
    }
  };

  /**
   * Observe a list of Array items.
   */
  Observer.prototype.observeArray = function observeArray(items) {
    for (var i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  };

  // helpers

  /**
   * Augment a target Object or Array by intercepting
   * the prototype chain using __proto__
   */
  function protoAugment(target, src) {
    /* eslint-disable no-proto */
    target.__proto__ = src;
    /* eslint-enable no-proto */
  }

  /**
   * Augment a target Object or Array by defining
   * hidden properties.
   */
  /* istanbul ignore next */
  function copyAugment(target, src, keys) {
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      def(target, key, src[key]);
    }
  }

  /**
   * Attempt to create an observer instance for a value,
   * returns the new observer if successfully observed,
   * or the existing observer if the value already has one.
   */
  function observe(value, asRootData) {
    if (!isObject(value) || value instanceof VNode) {
      return;
    }
    var ob;
    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
      ob = value.__ob__;
    } else if (shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
      ob = new Observer(value);
    }
    if (asRootData && ob) {
      ob.vmCount++;
    }
    return ob;
  }

  /**
   * Define a reactive property on an Object.
   */
  function defineReactive$$1(obj, key, val, customSetter, shallow) {
    var dep = new Dep();

    var property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) {
      return;
    }

    // cater for pre-defined getter/setters
    var getter = property && property.get;
    var setter = property && property.set;
    if ((!getter || setter) && arguments.length === 2) {
      val = obj[key];
    }

    var childOb = !shallow && observe(val);
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter() {
        var value = getter ? getter.call(obj) : val;
        if (Dep.target) {
          dep.depend();
          if (childOb) {
            childOb.dep.depend();
            if (Array.isArray(value)) {
              dependArray(value);
            }
          }
        }
        return value;
      },
      set: function reactiveSetter(newVal) {
        var value = getter ? getter.call(obj) : val;
        /* eslint-disable no-self-compare */
        if (newVal === value || newVal !== newVal && value !== value) {
          return;
        }
        /* eslint-enable no-self-compare */
        if (customSetter) {
          customSetter();
        }
        // #7981: for accessor properties without setter
        if (getter && !setter) {
          return;
        }
        if (setter) {
          setter.call(obj, newVal);
        } else {
          val = newVal;
        }
        childOb = !shallow && observe(newVal);
        dep.notify();
      }
    });
  }

  /**
   * Set a property on an object. Adds the new property and
   * triggers change notification if the property doesn't
   * already exist.
   */
  function set(target, key, val) {
    if (isUndef(target) || isPrimitive(target)) {
      warn("Cannot set reactive property on undefined, null, or primitive value: " + target);
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val;
    }
    if (key in target && !(key in Object.prototype)) {
      target[key] = val;
      return val;
    }
    var ob = target.__ob__;
    if (target._isVue || ob && ob.vmCount) {
      warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
      return val;
    }
    if (!ob) {
      target[key] = val;
      return val;
    }
    defineReactive$$1(ob.value, key, val);
    ob.dep.notify();
    return val;
  }

  /**
   * Delete a property and trigger change if necessary.
   */
  function del(target, key) {
    if (isUndef(target) || isPrimitive(target)) {
      warn("Cannot delete reactive property on undefined, null, or primitive value: " + target);
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.splice(key, 1);
      return;
    }
    var ob = target.__ob__;
    if (target._isVue || ob && ob.vmCount) {
      warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
      return;
    }
    if (!hasOwn(target, key)) {
      return;
    }
    delete target[key];
    if (!ob) {
      return;
    }
    ob.dep.notify();
  }

  /**
   * Collect dependencies on array elements when the array is touched, since
   * we cannot intercept array element access like property getters.
   */
  function dependArray(value) {
    for (var e = void 0, i = 0, l = value.length; i < l; i++) {
      e = value[i];
      e && e.__ob__ && e.__ob__.dep.depend();
      if (Array.isArray(e)) {
        dependArray(e);
      }
    }
  }

  /*  */

  /**
   * Option overwriting strategies are functions that handle
   * how to merge a parent option value and a child option
   * value into the final value.
   */
  var strats = config.optionMergeStrategies;

  /**
   * Options with restrictions
   */
  {
    strats.el = strats.propsData = function (parent, child, vm, key) {
      if (!vm) {
        warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
      }
      return defaultStrat(parent, child);
    };
  }

  /**
   * Helper that recursively merges two data objects together.
   */
  function mergeData(to, from) {
    if (!from) {
      return to;
    }
    var key, toVal, fromVal;

    var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);

    for (var i = 0; i < keys.length; i++) {
      key = keys[i];
      // in case the object is already observed...
      if (key === '__ob__') {
        continue;
      }
      toVal = to[key];
      fromVal = from[key];
      if (!hasOwn(to, key)) {
        set(to, key, fromVal);
      } else if (toVal !== fromVal && isPlainObject(toVal) && isPlainObject(fromVal)) {
        mergeData(toVal, fromVal);
      }
    }
    return to;
  }

  /**
   * Data
   */
  function mergeDataOrFn(parentVal, childVal, vm) {
    if (!vm) {
      // in a Vue.extend merge, both should be functions
      if (!childVal) {
        return parentVal;
      }
      if (!parentVal) {
        return childVal;
      }
      // when parentVal & childVal are both present,
      // we need to return a function that returns the
      // merged result of both functions... no need to
      // check if parentVal is a function here because
      // it has to be a function to pass previous merges.
      return function mergedDataFn() {
        return mergeData(typeof childVal === 'function' ? childVal.call(this, this) : childVal, typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal);
      };
    } else {
      return function mergedInstanceDataFn() {
        // instance merge
        var instanceData = typeof childVal === 'function' ? childVal.call(vm, vm) : childVal;
        var defaultData = typeof parentVal === 'function' ? parentVal.call(vm, vm) : parentVal;
        if (instanceData) {
          return mergeData(instanceData, defaultData);
        } else {
          return defaultData;
        }
      };
    }
  }

  strats.data = function (parentVal, childVal, vm) {
    if (!vm) {
      if (childVal && typeof childVal !== 'function') {
        warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);

        return parentVal;
      }
      return mergeDataOrFn(parentVal, childVal);
    }

    return mergeDataOrFn(parentVal, childVal, vm);
  };

  /**
   * Hooks and props are merged as arrays.
   */
  function mergeHook(parentVal, childVal) {
    var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
    return res ? dedupeHooks(res) : res;
  }

  function dedupeHooks(hooks) {
    var res = [];
    for (var i = 0; i < hooks.length; i++) {
      if (res.indexOf(hooks[i]) === -1) {
        res.push(hooks[i]);
      }
    }
    return res;
  }

  LIFECYCLE_HOOKS.forEach(function (hook) {
    strats[hook] = mergeHook;
  });

  /**
   * Assets
   *
   * When a vm is present (instance creation), we need to do
   * a three-way merge between constructor options, instance
   * options and parent options.
   */
  function mergeAssets(parentVal, childVal, vm, key) {
    var res = Object.create(parentVal || null);
    if (childVal) {
      assertObjectType(key, childVal, vm);
      return extend(res, childVal);
    } else {
      return res;
    }
  }

  ASSET_TYPES.forEach(function (type) {
    strats[type + 's'] = mergeAssets;
  });

  /**
   * Watchers.
   *
   * Watchers hashes should not overwrite one
   * another, so we merge them as arrays.
   */
  strats.watch = function (parentVal, childVal, vm, key) {
    // work around Firefox's Object.prototype.watch...
    if (parentVal === nativeWatch) {
      parentVal = undefined;
    }
    if (childVal === nativeWatch) {
      childVal = undefined;
    }
    /* istanbul ignore if */
    if (!childVal) {
      return Object.create(parentVal || null);
    }
    {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) {
      return childVal;
    }
    var ret = {};
    extend(ret, parentVal);
    for (var key$1 in childVal) {
      var parent = ret[key$1];
      var child = childVal[key$1];
      if (parent && !Array.isArray(parent)) {
        parent = [parent];
      }
      ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
    }
    return ret;
  };

  /**
   * Other object hashes.
   */
  strats.props = strats.methods = strats.inject = strats.computed = function (parentVal, childVal, vm, key) {
    if (childVal && "development" !== 'production') {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) {
      return childVal;
    }
    var ret = Object.create(null);
    extend(ret, parentVal);
    if (childVal) {
      extend(ret, childVal);
    }
    return ret;
  };
  strats.provide = mergeDataOrFn;

  /**
   * Default strategy.
   */
  var defaultStrat = function defaultStrat(parentVal, childVal) {
    return childVal === undefined ? parentVal : childVal;
  };

  /**
   * Validate component names
   */
  function checkComponents(options) {
    for (var key in options.components) {
      validateComponentName(key);
    }
  }

  function validateComponentName(name) {
    if (!new RegExp("^[a-zA-Z][\\-\\.0-9_" + unicodeRegExp.source + "]*$").test(name)) {
      warn('Invalid component name: "' + name + '". Component names ' + 'should conform to valid custom element name in html5 specification.');
    }
    if (isBuiltInTag(name) || config.isReservedTag(name)) {
      warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + name);
    }
  }

  /**
   * Ensure all props option syntax are normalized into the
   * Object-based format.
   */
  function normalizeProps(options, vm) {
    var props = options.props;
    if (!props) {
      return;
    }
    var res = {};
    var i, val, name;
    if (Array.isArray(props)) {
      i = props.length;
      while (i--) {
        val = props[i];
        if (typeof val === 'string') {
          name = camelize(val);
          res[name] = { type: null };
        } else {
          warn('props must be strings when using array syntax.');
        }
      }
    } else if (isPlainObject(props)) {
      for (var key in props) {
        val = props[key];
        name = camelize(key);
        res[name] = isPlainObject(val) ? val : { type: val };
      }
    } else {
      warn("Invalid value for option \"props\": expected an Array or an Object, " + "but got " + toRawType(props) + ".", vm);
    }
    options.props = res;
  }

  /**
   * Normalize all injections into Object-based format
   */
  function normalizeInject(options, vm) {
    var inject = options.inject;
    if (!inject) {
      return;
    }
    var normalized = options.inject = {};
    if (Array.isArray(inject)) {
      for (var i = 0; i < inject.length; i++) {
        normalized[inject[i]] = { from: inject[i] };
      }
    } else if (isPlainObject(inject)) {
      for (var key in inject) {
        var val = inject[key];
        normalized[key] = isPlainObject(val) ? extend({ from: key }, val) : { from: val };
      }
    } else {
      warn("Invalid value for option \"inject\": expected an Array or an Object, " + "but got " + toRawType(inject) + ".", vm);
    }
  }

  /**
   * Normalize raw function directives into object format.
   */
  function normalizeDirectives(options) {
    var dirs = options.directives;
    if (dirs) {
      for (var key in dirs) {
        var def$$1 = dirs[key];
        if (typeof def$$1 === 'function') {
          dirs[key] = { bind: def$$1, update: def$$1 };
        }
      }
    }
  }

  function assertObjectType(name, value, vm) {
    if (!isPlainObject(value)) {
      warn("Invalid value for option \"" + name + "\": expected an Object, " + "but got " + toRawType(value) + ".", vm);
    }
  }

  /**
   * Merge two option objects into a new one.
   * Core utility used in both instantiation and inheritance.
   */
  function mergeOptions(parent, child, vm) {
    {
      checkComponents(child);
    }

    if (typeof child === 'function') {
      child = child.options;
    }

    normalizeProps(child, vm);
    normalizeInject(child, vm);
    normalizeDirectives(child);

    // Apply extends and mixins on the child options,
    // but only if it is a raw options object that isn't
    // the result of another mergeOptions call.
    // Only merged options has the _base property.
    if (!child._base) {
      if (child.extends) {
        parent = mergeOptions(parent, child.extends, vm);
      }
      if (child.mixins) {
        for (var i = 0, l = child.mixins.length; i < l; i++) {
          parent = mergeOptions(parent, child.mixins[i], vm);
        }
      }
    }

    var options = {};
    var key;
    for (key in parent) {
      mergeField(key);
    }
    for (key in child) {
      if (!hasOwn(parent, key)) {
        mergeField(key);
      }
    }
    function mergeField(key) {
      var strat = strats[key] || defaultStrat;
      options[key] = strat(parent[key], child[key], vm, key);
    }
    return options;
  }

  /**
   * Resolve an asset.
   * This function is used because child instances need access
   * to assets defined in its ancestor chain.
   */
  function resolveAsset(options, type, id, warnMissing) {
    /* istanbul ignore if */
    if (typeof id !== 'string') {
      return;
    }
    var assets = options[type];
    // check local registration variations first
    if (hasOwn(assets, id)) {
      return assets[id];
    }
    var camelizedId = camelize(id);
    if (hasOwn(assets, camelizedId)) {
      return assets[camelizedId];
    }
    var PascalCaseId = capitalize(camelizedId);
    if (hasOwn(assets, PascalCaseId)) {
      return assets[PascalCaseId];
    }
    // fallback to prototype chain
    var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
    if (warnMissing && !res) {
      warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
    }
    return res;
  }

  /*  */

  function validateProp(key, propOptions, propsData, vm) {
    var prop = propOptions[key];
    var absent = !hasOwn(propsData, key);
    var value = propsData[key];
    // boolean casting
    var booleanIndex = getTypeIndex(Boolean, prop.type);
    if (booleanIndex > -1) {
      if (absent && !hasOwn(prop, 'default')) {
        value = false;
      } else if (value === '' || value === hyphenate(key)) {
        // only cast empty string / same name to boolean if
        // boolean has higher priority
        var stringIndex = getTypeIndex(String, prop.type);
        if (stringIndex < 0 || booleanIndex < stringIndex) {
          value = true;
        }
      }
    }
    // check default value
    if (value === undefined) {
      value = getPropDefaultValue(vm, prop, key);
      // since the default value is a fresh copy,
      // make sure to observe it.
      var prevShouldObserve = shouldObserve;
      toggleObserving(true);
      observe(value);
      toggleObserving(prevShouldObserve);
    }
    {
      assertProp(prop, key, value, vm, absent);
    }
    return value;
  }

  /**
   * Get the default value of a prop.
   */
  function getPropDefaultValue(vm, prop, key) {
    // no default, return undefined
    if (!hasOwn(prop, 'default')) {
      return undefined;
    }
    var def = prop.default;
    // warn against non-factory defaults for Object & Array
    if (isObject(def)) {
      warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
    }
    // the raw prop value was also undefined from previous render,
    // return previous default value to avoid unnecessary watcher trigger
    if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
      return vm._props[key];
    }
    // call factory function for non-Function types
    // a value is Function if its prototype is function even across different execution context
    return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
  }

  /**
   * Assert whether a prop is valid.
   */
  function assertProp(prop, name, value, vm, absent) {
    if (prop.required && absent) {
      warn('Missing required prop: "' + name + '"', vm);
      return;
    }
    if (value == null && !prop.required) {
      return;
    }
    var type = prop.type;
    var valid = !type || type === true;
    var expectedTypes = [];
    if (type) {
      if (!Array.isArray(type)) {
        type = [type];
      }
      for (var i = 0; i < type.length && !valid; i++) {
        var assertedType = assertType(value, type[i]);
        expectedTypes.push(assertedType.expectedType || '');
        valid = assertedType.valid;
      }
    }

    if (!valid) {
      warn(getInvalidTypeMessage(name, value, expectedTypes), vm);
      return;
    }
    var validator = prop.validator;
    if (validator) {
      if (!validator(value)) {
        warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
      }
    }
  }

  var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

  function assertType(value, type) {
    var valid;
    var expectedType = getType(type);
    if (simpleCheckRE.test(expectedType)) {
      var t = typeof value === 'undefined' ? 'undefined' : _typeof(value);
      valid = t === expectedType.toLowerCase();
      // for primitive wrapper objects
      if (!valid && t === 'object') {
        valid = value instanceof type;
      }
    } else if (expectedType === 'Object') {
      valid = isPlainObject(value);
    } else if (expectedType === 'Array') {
      valid = Array.isArray(value);
    } else {
      valid = value instanceof type;
    }
    return {
      valid: valid,
      expectedType: expectedType
    };
  }

  /**
   * Use function string name to check built-in types,
   * because a simple equality check will fail when running
   * across different vms / iframes.
   */
  function getType(fn) {
    var match = fn && fn.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : '';
  }

  function isSameType(a, b) {
    return getType(a) === getType(b);
  }

  function getTypeIndex(type, expectedTypes) {
    if (!Array.isArray(expectedTypes)) {
      return isSameType(expectedTypes, type) ? 0 : -1;
    }
    for (var i = 0, len = expectedTypes.length; i < len; i++) {
      if (isSameType(expectedTypes[i], type)) {
        return i;
      }
    }
    return -1;
  }

  function getInvalidTypeMessage(name, value, expectedTypes) {
    var message = "Invalid prop: type check failed for prop \"" + name + "\"." + " Expected " + expectedTypes.map(capitalize).join(', ');
    var expectedType = expectedTypes[0];
    var receivedType = toRawType(value);
    var expectedValue = styleValue(value, expectedType);
    var receivedValue = styleValue(value, receivedType);
    // check if we need to specify expected value
    if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
      message += " with value " + expectedValue;
    }
    message += ", got " + receivedType + " ";
    // check if we need to specify received value
    if (isExplicable(receivedType)) {
      message += "with value " + receivedValue + ".";
    }
    return message;
  }

  function styleValue(value, type) {
    if (type === 'String') {
      return "\"" + value + "\"";
    } else if (type === 'Number') {
      return "" + Number(value);
    } else {
      return "" + value;
    }
  }

  function isExplicable(value) {
    var explicitTypes = ['string', 'number', 'boolean'];
    return explicitTypes.some(function (elem) {
      return value.toLowerCase() === elem;
    });
  }

  function isBoolean() {
    var args = [],
        len = arguments.length;
    while (len--) {
      args[len] = arguments[len];
    }return args.some(function (elem) {
      return elem.toLowerCase() === 'boolean';
    });
  }

  /*  */

  function handleError(err, vm, info) {
    // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
    // See: https://github.com/vuejs/vuex/issues/1505
    pushTarget();
    try {
      if (vm) {
        var cur = vm;
        while (cur = cur.$parent) {
          var hooks = cur.$options.errorCaptured;
          if (hooks) {
            for (var i = 0; i < hooks.length; i++) {
              try {
                var capture = hooks[i].call(cur, err, vm, info) === false;
                if (capture) {
                  return;
                }
              } catch (e) {
                globalHandleError(e, cur, 'errorCaptured hook');
              }
            }
          }
        }
      }
      globalHandleError(err, vm, info);
    } finally {
      popTarget();
    }
  }

  function invokeWithErrorHandling(handler, context, args, vm, info) {
    var res;
    try {
      res = args ? handler.apply(context, args) : handler.call(context);
      if (res && !res._isVue && isPromise(res) && !res._handled) {
        res.catch(function (e) {
          return handleError(e, vm, info + " (Promise/async)");
        });
        // issue #9511
        // avoid catch triggering multiple times when nested calls
        res._handled = true;
      }
    } catch (e) {
      handleError(e, vm, info);
    }
    return res;
  }

  function globalHandleError(err, vm, info) {
    if (config.errorHandler) {
      try {
        return config.errorHandler.call(null, err, vm, info);
      } catch (e) {
        // if the user intentionally throws the original error in the handler,
        // do not log it twice
        if (e !== err) {
          logError(e, null, 'config.errorHandler');
        }
      }
    }
    logError(err, vm, info);
  }

  function logError(err, vm, info) {
    {
      warn("Error in " + info + ": \"" + err.toString() + "\"", vm);
    }
    /* istanbul ignore else */
    if ((inBrowser || inWeex) && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err;
    }
  }

  /*  */

  var isUsingMicroTask = false;

  var callbacks = [];
  var pending = false;

  function flushCallbacks() {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // Here we have async deferring wrappers using microtasks.
  // In 2.5 we used (macro) tasks (in combination with microtasks).
  // However, it has subtle problems when state is changed right before repaint
  // (e.g. #6813, out-in transitions).
  // Also, using (macro) tasks in event handler would cause some weird behaviors
  // that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
  // So we now use microtasks everywhere, again.
  // A major drawback of this tradeoff is that there are some scenarios
  // where microtasks have too high a priority and fire in between supposedly
  // sequential events (e.g. #4521, #6690, which have workarounds)
  // or even between bubbling of the same event (#6566).
  var timerFunc;

  // The nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore next, $flow-disable-line */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    timerFunc = function timerFunc() {
      p.then(flushCallbacks);
      // In problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) {
        setTimeout(noop);
      }
    };
    isUsingMicroTask = true;
  } else if (!isIE && typeof MutationObserver !== 'undefined' && (isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]')) {
    // Use MutationObserver where native Promise is not available,
    // e.g. PhantomJS, iOS7, Android 4.4
    // (#6466 MutationObserver is unreliable in IE11)
    var counter = 1;
    var observer = new MutationObserver(flushCallbacks);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function timerFunc() {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
    isUsingMicroTask = true;
  } else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
    // Fallback to setImmediate.
    // Techinically it leverages the (macro) task queue,
    // but it is still a better choice than setTimeout.
    timerFunc = function timerFunc() {
      setImmediate(flushCallbacks);
    };
  } else {
    // Fallback to setTimeout.
    timerFunc = function timerFunc() {
      setTimeout(flushCallbacks, 0);
    };
  }

  function nextTick(cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve) {
        _resolve = resolve;
      });
    }
  }

  /*  */

  var mark;
  var measure;

  {
    var perf = inBrowser && window.performance;
    /* istanbul ignore if */
    if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
      mark = function mark(tag) {
        return perf.mark(tag);
      };
      measure = function measure(name, startTag, endTag) {
        perf.measure(name, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
        // perf.clearMeasures(name)
      };
    }
  }

  /* not type checking this file because flow doesn't play well with Proxy */

  var initProxy;

  {
    var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require' // for Webpack/Browserify
    );

    var warnNonPresent = function warnNonPresent(target, key) {
      warn("Property or method \"" + key + "\" is not defined on the instance but " + 'referenced during render. Make sure that this property is reactive, ' + 'either in the data option, or for class-based components, by ' + 'initializing the property. ' + 'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
    };

    var warnReservedPrefix = function warnReservedPrefix(target, key) {
      warn("Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " + 'properties starting with "$" or "_" are not proxied in the Vue instance to ' + 'prevent conflicts with Vue internals' + 'See: https://vuejs.org/v2/api/#data', target);
    };

    var hasProxy = typeof Proxy !== 'undefined' && isNative(Proxy);

    if (hasProxy) {
      var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
      config.keyCodes = new Proxy(config.keyCodes, {
        set: function set(target, key, value) {
          if (isBuiltInModifier(key)) {
            warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
            return false;
          } else {
            target[key] = value;
            return true;
          }
        }
      });
    }

    var hasHandler = {
      has: function has(target, key) {
        var has = key in target;
        var isAllowed = allowedGlobals(key) || typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data);
        if (!has && !isAllowed) {
          if (key in target.$data) {
            warnReservedPrefix(target, key);
          } else {
            warnNonPresent(target, key);
          }
        }
        return has || !isAllowed;
      }
    };

    var getHandler = {
      get: function get(target, key) {
        if (typeof key === 'string' && !(key in target)) {
          if (key in target.$data) {
            warnReservedPrefix(target, key);
          } else {
            warnNonPresent(target, key);
          }
        }
        return target[key];
      }
    };

    initProxy = function initProxy(vm) {
      if (hasProxy) {
        // determine which proxy handler to use
        var options = vm.$options;
        var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
        vm._renderProxy = new Proxy(vm, handlers);
      } else {
        vm._renderProxy = vm;
      }
    };
  }

  /*  */

  var seenObjects = new _Set();

  /**
   * Recursively traverse an object to evoke all converted
   * getters, so that every nested property inside the object
   * is collected as a "deep" dependency.
   */
  function traverse(val) {
    _traverse(val, seenObjects);
    seenObjects.clear();
  }

  function _traverse(val, seen) {
    var i, keys;
    var isA = Array.isArray(val);
    if (!isA && !isObject(val) || Object.isFrozen(val) || val instanceof VNode) {
      return;
    }
    if (val.__ob__) {
      var depId = val.__ob__.dep.id;
      if (seen.has(depId)) {
        return;
      }
      seen.add(depId);
    }
    if (isA) {
      i = val.length;
      while (i--) {
        _traverse(val[i], seen);
      }
    } else {
      keys = Object.keys(val);
      i = keys.length;
      while (i--) {
        _traverse(val[keys[i]], seen);
      }
    }
  }

  /*  */

  var normalizeEvent = cached(function (name) {
    var passive = name.charAt(0) === '&';
    name = passive ? name.slice(1) : name;
    var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
    name = once$$1 ? name.slice(1) : name;
    var capture = name.charAt(0) === '!';
    name = capture ? name.slice(1) : name;
    return {
      name: name,
      once: once$$1,
      capture: capture,
      passive: passive
    };
  });

  function createFnInvoker(fns, vm) {
    function invoker() {
      var arguments$1 = arguments;

      var fns = invoker.fns;
      if (Array.isArray(fns)) {
        var cloned = fns.slice();
        for (var i = 0; i < cloned.length; i++) {
          invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
        }
      } else {
        // return handler return value for single handlers
        return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler");
      }
    }
    invoker.fns = fns;
    return invoker;
  }

  function updateListeners(on, oldOn, add, remove$$1, createOnceHandler, vm) {
    var name, def$$1, cur, old, event;
    for (name in on) {
      def$$1 = cur = on[name];
      old = oldOn[name];
      event = normalizeEvent(name);
      if (isUndef(cur)) {
        warn("Invalid handler for event \"" + event.name + "\": got " + String(cur), vm);
      } else if (isUndef(old)) {
        if (isUndef(cur.fns)) {
          cur = on[name] = createFnInvoker(cur, vm);
        }
        if (isTrue(event.once)) {
          cur = on[name] = createOnceHandler(event.name, cur, event.capture);
        }
        add(event.name, cur, event.capture, event.passive, event.params);
      } else if (cur !== old) {
        old.fns = cur;
        on[name] = old;
      }
    }
    for (name in oldOn) {
      if (isUndef(on[name])) {
        event = normalizeEvent(name);
        remove$$1(event.name, oldOn[name], event.capture);
      }
    }
  }

  /*  */

  function mergeVNodeHook(def, hookKey, hook) {
    if (def instanceof VNode) {
      def = def.data.hook || (def.data.hook = {});
    }
    var invoker;
    var oldHook = def[hookKey];

    function wrappedHook() {
      hook.apply(this, arguments);
      // important: remove merged hook to ensure it's called only once
      // and prevent memory leak
      remove(invoker.fns, wrappedHook);
    }

    if (isUndef(oldHook)) {
      // no existing hook
      invoker = createFnInvoker([wrappedHook]);
    } else {
      /* istanbul ignore if */
      if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
        // already a merged invoker
        invoker = oldHook;
        invoker.fns.push(wrappedHook);
      } else {
        // existing plain hook
        invoker = createFnInvoker([oldHook, wrappedHook]);
      }
    }

    invoker.merged = true;
    def[hookKey] = invoker;
  }

  /*  */

  function extractPropsFromVNodeData(data, Ctor, tag) {
    // we are only extracting raw values here.
    // validation and default values are handled in the child
    // component itself.
    var propOptions = Ctor.options.props;
    if (isUndef(propOptions)) {
      return;
    }
    var res = {};
    var attrs = data.attrs;
    var props = data.props;
    if (isDef(attrs) || isDef(props)) {
      for (var key in propOptions) {
        var altKey = hyphenate(key);
        {
          var keyInLowerCase = key.toLowerCase();
          if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
            tip("Prop \"" + keyInLowerCase + "\" is passed to component " + formatComponentName(tag || Ctor) + ", but the declared prop name is" + " \"" + key + "\". " + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\".");
          }
        }
        checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
      }
    }
    return res;
  }

  function checkProp(res, hash, key, altKey, preserve) {
    if (isDef(hash)) {
      if (hasOwn(hash, key)) {
        res[key] = hash[key];
        if (!preserve) {
          delete hash[key];
        }
        return true;
      } else if (hasOwn(hash, altKey)) {
        res[key] = hash[altKey];
        if (!preserve) {
          delete hash[altKey];
        }
        return true;
      }
    }
    return false;
  }

  /*  */

  // The template compiler attempts to minimize the need for normalization by
  // statically analyzing the template at compile time.
  //
  // For plain HTML markup, normalization can be completely skipped because the
  // generated render function is guaranteed to return Array<VNode>. There are
  // two cases where extra normalization is needed:

  // 1. When the children contains components - because a functional component
  // may return an Array instead of a single root. In this case, just a simple
  // normalization is needed - if any child is an Array, we flatten the whole
  // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
  // because functional components already normalize their own children.
  function simpleNormalizeChildren(children) {
    for (var i = 0; i < children.length; i++) {
      if (Array.isArray(children[i])) {
        return Array.prototype.concat.apply([], children);
      }
    }
    return children;
  }

  // 2. When the children contains constructs that always generated nested Arrays,
  // e.g. <template>, <slot>, v-for, or when the children is provided by user
  // with hand-written render functions / JSX. In such cases a full normalization
  // is needed to cater to all possible types of children values.
  function normalizeChildren(children) {
    return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
  }

  function isTextNode(node) {
    return isDef(node) && isDef(node.text) && isFalse(node.isComment);
  }

  function normalizeArrayChildren(children, nestedIndex) {
    var res = [];
    var i, c, lastIndex, last;
    for (i = 0; i < children.length; i++) {
      c = children[i];
      if (isUndef(c) || typeof c === 'boolean') {
        continue;
      }
      lastIndex = res.length - 1;
      last = res[lastIndex];
      //  nested
      if (Array.isArray(c)) {
        if (c.length > 0) {
          c = normalizeArrayChildren(c, (nestedIndex || '') + "_" + i);
          // merge adjacent text nodes
          if (isTextNode(c[0]) && isTextNode(last)) {
            res[lastIndex] = createTextVNode(last.text + c[0].text);
            c.shift();
          }
          res.push.apply(res, c);
        }
      } else if (isPrimitive(c)) {
        if (isTextNode(last)) {
          // merge adjacent text nodes
          // this is necessary for SSR hydration because text nodes are
          // essentially merged when rendered to HTML strings
          res[lastIndex] = createTextVNode(last.text + c);
        } else if (c !== '') {
          // convert primitive to vnode
          res.push(createTextVNode(c));
        }
      } else {
        if (isTextNode(c) && isTextNode(last)) {
          // merge adjacent text nodes
          res[lastIndex] = createTextVNode(last.text + c.text);
        } else {
          // default key for nested array children (likely generated by v-for)
          if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
            c.key = "__vlist" + nestedIndex + "_" + i + "__";
          }
          res.push(c);
        }
      }
    }
    return res;
  }

  /*  */

  function initProvide(vm) {
    var provide = vm.$options.provide;
    if (provide) {
      vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
    }
  }

  function initInjections(vm) {
    var result = resolveInject(vm.$options.inject, vm);
    if (result) {
      toggleObserving(false);
      Object.keys(result).forEach(function (key) {
        /* istanbul ignore else */
        {
          defineReactive$$1(vm, key, result[key], function () {
            warn("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + "injection being mutated: \"" + key + "\"", vm);
          });
        }
      });
      toggleObserving(true);
    }
  }

  function resolveInject(inject, vm) {
    if (inject) {
      // inject is :any because flow is not smart enough to figure out cached
      var result = Object.create(null);
      var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        // #6574 in case the inject object is observed...
        if (key === '__ob__') {
          continue;
        }
        var provideKey = inject[key].from;
        var source = vm;
        while (source) {
          if (source._provided && hasOwn(source._provided, provideKey)) {
            result[key] = source._provided[provideKey];
            break;
          }
          source = source.$parent;
        }
        if (!source) {
          if ('default' in inject[key]) {
            var provideDefault = inject[key].default;
            result[key] = typeof provideDefault === 'function' ? provideDefault.call(vm) : provideDefault;
          } else {
            warn("Injection \"" + key + "\" not found", vm);
          }
        }
      }
      return result;
    }
  }

  /*  */

  /**
   * Runtime helper for resolving raw children VNodes into a slot object.
   */
  function resolveSlots(children, context) {
    if (!children || !children.length) {
      return {};
    }
    var slots = {};
    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      var data = child.data;
      // remove slot attribute if the node is resolved as a Vue slot node
      if (data && data.attrs && data.attrs.slot) {
        delete data.attrs.slot;
      }
      // named slots should only be respected if the vnode was rendered in the
      // same context.
      if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
        var name = data.slot;
        var slot = slots[name] || (slots[name] = []);
        if (child.tag === 'template') {
          slot.push.apply(slot, child.children || []);
        } else {
          slot.push(child);
        }
      } else {
        (slots.default || (slots.default = [])).push(child);
      }
    }
    // ignore slots that contains only whitespace
    for (var name$1 in slots) {
      if (slots[name$1].every(isWhitespace)) {
        delete slots[name$1];
      }
    }
    return slots;
  }

  function isWhitespace(node) {
    return node.isComment && !node.asyncFactory || node.text === ' ';
  }

  /*  */

  function normalizeScopedSlots(slots, normalSlots, prevSlots) {
    var res;
    var hasNormalSlots = Object.keys(normalSlots).length > 0;
    var isStable = slots ? !!slots.$stable : !hasNormalSlots;
    var key = slots && slots.$key;
    if (!slots) {
      res = {};
    } else if (slots._normalized) {
      // fast path 1: child component re-render only, parent did not change
      return slots._normalized;
    } else if (isStable && prevSlots && prevSlots !== emptyObject && key === prevSlots.$key && !hasNormalSlots && !prevSlots.$hasNormal) {
      // fast path 2: stable scoped slots w/ no normal slots to proxy,
      // only need to normalize once
      return prevSlots;
    } else {
      res = {};
      for (var key$1 in slots) {
        if (slots[key$1] && key$1[0] !== '$') {
          res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
        }
      }
    }
    // expose normal slots on scopedSlots
    for (var key$2 in normalSlots) {
      if (!(key$2 in res)) {
        res[key$2] = proxyNormalSlot(normalSlots, key$2);
      }
    }
    // avoriaz seems to mock a non-extensible $scopedSlots object
    // and when that is passed down this would cause an error
    if (slots && Object.isExtensible(slots)) {
      slots._normalized = res;
    }
    def(res, '$stable', isStable);
    def(res, '$key', key);
    def(res, '$hasNormal', hasNormalSlots);
    return res;
  }

  function normalizeScopedSlot(normalSlots, key, fn) {
    var normalized = function normalized() {
      var res = arguments.length ? fn.apply(null, arguments) : fn({});
      res = res && (typeof res === 'undefined' ? 'undefined' : _typeof(res)) === 'object' && !Array.isArray(res) ? [res] // single vnode
      : normalizeChildren(res);
      return res && (res.length === 0 || res.length === 1 && res[0].isComment // #9658
      ) ? undefined : res;
    };
    // this is a slot using the new v-slot syntax without scope. although it is
    // compiled as a scoped slot, render fn users would expect it to be present
    // on this.$slots because the usage is semantically a normal slot.
    if (fn.proxy) {
      Object.defineProperty(normalSlots, key, {
        get: normalized,
        enumerable: true,
        configurable: true
      });
    }
    return normalized;
  }

  function proxyNormalSlot(slots, key) {
    return function () {
      return slots[key];
    };
  }

  /*  */

  /**
   * Runtime helper for rendering v-for lists.
   */
  function renderList(val, render) {
    var ret, i, l, keys, key;
    if (Array.isArray(val) || typeof val === 'string') {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = render(val[i], i);
      }
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0; i < val; i++) {
        ret[i] = render(i + 1, i);
      }
    } else if (isObject(val)) {
      if (hasSymbol && val[Symbol.iterator]) {
        ret = [];
        var iterator = val[Symbol.iterator]();
        var result = iterator.next();
        while (!result.done) {
          ret.push(render(result.value, ret.length));
          result = iterator.next();
        }
      } else {
        keys = Object.keys(val);
        ret = new Array(keys.length);
        for (i = 0, l = keys.length; i < l; i++) {
          key = keys[i];
          ret[i] = render(val[key], key, i);
        }
      }
    }
    if (!isDef(ret)) {
      ret = [];
    }
    ret._isVList = true;
    return ret;
  }

  /*  */

  /**
   * Runtime helper for rendering <slot>
   */
  function renderSlot(name, fallback, props, bindObject) {
    var scopedSlotFn = this.$scopedSlots[name];
    var nodes;
    if (scopedSlotFn) {
      // scoped slot
      props = props || {};
      if (bindObject) {
        if (!isObject(bindObject)) {
          warn('slot v-bind without argument expects an Object', this);
        }
        props = extend(extend({}, bindObject), props);
      }
      nodes = scopedSlotFn(props) || fallback;
    } else {
      nodes = this.$slots[name] || fallback;
    }

    var target = props && props.slot;
    if (target) {
      return this.$createElement('template', { slot: target }, nodes);
    } else {
      return nodes;
    }
  }

  /*  */

  /**
   * Runtime helper for resolving filters
   */
  function resolveFilter(id) {
    return resolveAsset(this.$options, 'filters', id, true) || identity;
  }

  /*  */

  function isKeyNotMatch(expect, actual) {
    if (Array.isArray(expect)) {
      return expect.indexOf(actual) === -1;
    } else {
      return expect !== actual;
    }
  }

  /**
   * Runtime helper for checking keyCodes from config.
   * exposed as Vue.prototype._k
   * passing in eventKeyName as last argument separately for backwards compat
   */
  function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
    var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
    if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
      return isKeyNotMatch(builtInKeyName, eventKeyName);
    } else if (mappedKeyCode) {
      return isKeyNotMatch(mappedKeyCode, eventKeyCode);
    } else if (eventKeyName) {
      return hyphenate(eventKeyName) !== key;
    }
  }

  /*  */

  /**
   * Runtime helper for merging v-bind="object" into a VNode's data.
   */
  function bindObjectProps(data, tag, value, asProp, isSync) {
    if (value) {
      if (!isObject(value)) {
        warn('v-bind without argument expects an Object or Array value', this);
      } else {
        if (Array.isArray(value)) {
          value = toObject(value);
        }
        var hash;
        var loop = function loop(key) {
          if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
            hash = data;
          } else {
            var type = data.attrs && data.attrs.type;
            hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
          }
          var camelizedKey = camelize(key);
          var hyphenatedKey = hyphenate(key);
          if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
            hash[key] = value[key];

            if (isSync) {
              var on = data.on || (data.on = {});
              on["update:" + key] = function ($event) {
                value[key] = $event;
              };
            }
          }
        };

        for (var key in value) {
          loop(key);
        }
      }
    }
    return data;
  }

  /*  */

  /**
   * Runtime helper for rendering static trees.
   */
  function renderStatic(index, isInFor) {
    var cached = this._staticTrees || (this._staticTrees = []);
    var tree = cached[index];
    // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree.
    if (tree && !isInFor) {
      return tree;
    }
    // otherwise, render a fresh tree.
    tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this // for render fns generated for functional component templates
    );
    markStatic(tree, "__static__" + index, false);
    return tree;
  }

  /**
   * Runtime helper for v-once.
   * Effectively it means marking the node as static with a unique key.
   */
  function markOnce(tree, index, key) {
    markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
    return tree;
  }

  function markStatic(tree, key, isOnce) {
    if (Array.isArray(tree)) {
      for (var i = 0; i < tree.length; i++) {
        if (tree[i] && typeof tree[i] !== 'string') {
          markStaticNode(tree[i], key + "_" + i, isOnce);
        }
      }
    } else {
      markStaticNode(tree, key, isOnce);
    }
  }

  function markStaticNode(node, key, isOnce) {
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
  }

  /*  */

  function bindObjectListeners(data, value) {
    if (value) {
      if (!isPlainObject(value)) {
        warn('v-on without argument expects an Object value', this);
      } else {
        var on = data.on = data.on ? extend({}, data.on) : {};
        for (var key in value) {
          var existing = on[key];
          var ours = value[key];
          on[key] = existing ? [].concat(existing, ours) : ours;
        }
      }
    }
    return data;
  }

  /*  */

  function resolveScopedSlots(fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys, contentHashKey) {
    res = res || { $stable: !hasDynamicKeys };
    for (var i = 0; i < fns.length; i++) {
      var slot = fns[i];
      if (Array.isArray(slot)) {
        resolveScopedSlots(slot, res, hasDynamicKeys);
      } else if (slot) {
        // marker for reverse proxying v-slot without scope on this.$slots
        if (slot.proxy) {
          slot.fn.proxy = true;
        }
        res[slot.key] = slot.fn;
      }
    }
    if (contentHashKey) {
      res.$key = contentHashKey;
    }
    return res;
  }

  /*  */

  function bindDynamicKeys(baseObj, values) {
    for (var i = 0; i < values.length; i += 2) {
      var key = values[i];
      if (typeof key === 'string' && key) {
        baseObj[values[i]] = values[i + 1];
      } else if (key !== '' && key !== null) {
        // null is a speical value for explicitly removing a binding
        warn("Invalid value for dynamic directive argument (expected string or null): " + key, this);
      }
    }
    return baseObj;
  }

  // helper to dynamically append modifier runtime markers to event names.
  // ensure only append when value is already string, otherwise it will be cast
  // to string and cause the type check to miss.
  function prependModifier(value, symbol) {
    return typeof value === 'string' ? symbol + value : value;
  }

  /*  */

  function installRenderHelpers(target) {
    target._o = markOnce;
    target._n = toNumber;
    target._s = toString;
    target._l = renderList;
    target._t = renderSlot;
    target._q = looseEqual;
    target._i = looseIndexOf;
    target._m = renderStatic;
    target._f = resolveFilter;
    target._k = checkKeyCodes;
    target._b = bindObjectProps;
    target._v = createTextVNode;
    target._e = createEmptyVNode;
    target._u = resolveScopedSlots;
    target._g = bindObjectListeners;
    target._d = bindDynamicKeys;
    target._p = prependModifier;
  }

  /*  */

  function FunctionalRenderContext(data, props, children, parent, Ctor) {
    var this$1 = this;

    var options = Ctor.options;
    // ensure the createElement function in functional components
    // gets a unique context - this is necessary for correct named slot check
    var contextVm;
    if (hasOwn(parent, '_uid')) {
      contextVm = Object.create(parent);
      // $flow-disable-line
      contextVm._original = parent;
    } else {
      // the context vm passed in is a functional context as well.
      // in this case we want to make sure we are able to get a hold to the
      // real context instance.
      contextVm = parent;
      // $flow-disable-line
      parent = parent._original;
    }
    var isCompiled = isTrue(options._compiled);
    var needNormalization = !isCompiled;

    this.data = data;
    this.props = props;
    this.children = children;
    this.parent = parent;
    this.listeners = data.on || emptyObject;
    this.injections = resolveInject(options.inject, parent);
    this.slots = function () {
      if (!this$1.$slots) {
        normalizeScopedSlots(data.scopedSlots, this$1.$slots = resolveSlots(children, parent));
      }
      return this$1.$slots;
    };

    Object.defineProperty(this, 'scopedSlots', {
      enumerable: true,
      get: function get() {
        return normalizeScopedSlots(data.scopedSlots, this.slots());
      }
    });

    // support for compiled functional template
    if (isCompiled) {
      // exposing $options for renderStatic()
      this.$options = options;
      // pre-resolve slots for renderSlot()
      this.$slots = this.slots();
      this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
    }

    if (options._scopeId) {
      this._c = function (a, b, c, d) {
        var vnode = createElement(contextVm, a, b, c, d, needNormalization);
        if (vnode && !Array.isArray(vnode)) {
          vnode.fnScopeId = options._scopeId;
          vnode.fnContext = parent;
        }
        return vnode;
      };
    } else {
      this._c = function (a, b, c, d) {
        return createElement(contextVm, a, b, c, d, needNormalization);
      };
    }
  }

  installRenderHelpers(FunctionalRenderContext.prototype);

  function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
    var options = Ctor.options;
    var props = {};
    var propOptions = options.props;
    if (isDef(propOptions)) {
      for (var key in propOptions) {
        props[key] = validateProp(key, propOptions, propsData || emptyObject);
      }
    } else {
      if (isDef(data.attrs)) {
        mergeProps(props, data.attrs);
      }
      if (isDef(data.props)) {
        mergeProps(props, data.props);
      }
    }

    var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);

    var vnode = options.render.call(null, renderContext._c, renderContext);

    if (vnode instanceof VNode) {
      return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext);
    } else if (Array.isArray(vnode)) {
      var vnodes = normalizeChildren(vnode) || [];
      var res = new Array(vnodes.length);
      for (var i = 0; i < vnodes.length; i++) {
        res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
      }
      return res;
    }
  }

  function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
    // #7817 clone node before setting fnContext, otherwise if the node is reused
    // (e.g. it was from a cached normal slot) the fnContext causes named slots
    // that should not be matched to match.
    var clone = cloneVNode(vnode);
    clone.fnContext = contextVm;
    clone.fnOptions = options;
    {
      (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
    }
    if (data.slot) {
      (clone.data || (clone.data = {})).slot = data.slot;
    }
    return clone;
  }

  function mergeProps(to, from) {
    for (var key in from) {
      to[camelize(key)] = from[key];
    }
  }

  /*  */

  /*  */

  /*  */

  /*  */

  // inline hooks to be invoked on component VNodes during patch
  var componentVNodeHooks = {
    init: function init(vnode, hydrating) {
      if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
        // kept-alive components, treat as a patch
        var mountedNode = vnode; // work around flow
        componentVNodeHooks.prepatch(mountedNode, mountedNode);
      } else {
        var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance);
        child.$mount(hydrating ? vnode.elm : undefined, hydrating);
      }
    },

    prepatch: function prepatch(oldVnode, vnode) {
      var options = vnode.componentOptions;
      var child = vnode.componentInstance = oldVnode.componentInstance;
      updateChildComponent(child, options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
      );
    },

    insert: function insert(vnode) {
      var context = vnode.context;
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isMounted) {
        componentInstance._isMounted = true;
        callHook(componentInstance, 'mounted');
      }
      if (vnode.data.keepAlive) {
        if (context._isMounted) {
          // vue-router#1212
          // During updates, a kept-alive component's child components may
          // change, so directly walking the tree here may call activated hooks
          // on incorrect children. Instead we push them into a queue which will
          // be processed after the whole patch process ended.
          queueActivatedComponent(componentInstance);
        } else {
          activateChildComponent(componentInstance, true /* direct */);
        }
      }
    },

    destroy: function destroy(vnode) {
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isDestroyed) {
        if (!vnode.data.keepAlive) {
          componentInstance.$destroy();
        } else {
          deactivateChildComponent(componentInstance, true /* direct */);
        }
      }
    }
  };

  var hooksToMerge = Object.keys(componentVNodeHooks);

  function createComponent(Ctor, data, context, children, tag) {
    if (isUndef(Ctor)) {
      return;
    }

    var baseCtor = context.$options._base;

    // plain options object: turn it into a constructor
    if (isObject(Ctor)) {
      Ctor = baseCtor.extend(Ctor);
    }

    // if at this stage it's not a constructor or an async component factory,
    // reject.
    if (typeof Ctor !== 'function') {
      {
        warn("Invalid Component definition: " + String(Ctor), context);
      }
      return;
    }

    // async component
    var asyncFactory;
    if (isUndef(Ctor.cid)) {
      asyncFactory = Ctor;
      Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
      if (Ctor === undefined) {
        // return a placeholder node for async component, which is rendered
        // as a comment node but preserves all the raw information for the node.
        // the information will be used for async server-rendering and hydration.
        return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
      }
    }

    data = data || {};

    // resolve constructor options in case global mixins are applied after
    // component constructor creation
    resolveConstructorOptions(Ctor);

    // transform component v-model data into props & events
    if (isDef(data.model)) {
      transformModel(Ctor.options, data);
    }

    // extract props
    var propsData = extractPropsFromVNodeData(data, Ctor, tag);

    // functional component
    if (isTrue(Ctor.options.functional)) {
      return createFunctionalComponent(Ctor, propsData, data, context, children);
    }

    // extract listeners, since these needs to be treated as
    // child component listeners instead of DOM listeners
    var listeners = data.on;
    // replace with listeners with .native modifier
    // so it gets processed during parent component patch.
    data.on = data.nativeOn;

    if (isTrue(Ctor.options.abstract)) {
      // abstract components do not keep anything
      // other than props & listeners & slot

      // work around flow
      var slot = data.slot;
      data = {};
      if (slot) {
        data.slot = slot;
      }
    }

    // install component management hooks onto the placeholder node
    installComponentHooks(data);

    // return a placeholder vnode
    var name = Ctor.options.name || tag;
    var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }, asyncFactory);

    return vnode;
  }

  function createComponentInstanceForVnode(vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
  ) {
    var options = {
      _isComponent: true,
      _parentVnode: vnode,
      parent: parent
    };
    // check inline-template render functions
    var inlineTemplate = vnode.data.inlineTemplate;
    if (isDef(inlineTemplate)) {
      options.render = inlineTemplate.render;
      options.staticRenderFns = inlineTemplate.staticRenderFns;
    }
    return new vnode.componentOptions.Ctor(options);
  }

  function installComponentHooks(data) {
    var hooks = data.hook || (data.hook = {});
    for (var i = 0; i < hooksToMerge.length; i++) {
      var key = hooksToMerge[i];
      var existing = hooks[key];
      var toMerge = componentVNodeHooks[key];
      if (existing !== toMerge && !(existing && existing._merged)) {
        hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
      }
    }
  }

  function mergeHook$1(f1, f2) {
    var merged = function merged(a, b) {
      // flow complains about extra args which is why we use any
      f1(a, b);
      f2(a, b);
    };
    merged._merged = true;
    return merged;
  }

  // transform component v-model info (value and callback) into
  // prop and event handler respectively.
  function transformModel(options, data) {
    var prop = options.model && options.model.prop || 'value';
    var event = options.model && options.model.event || 'input';(data.attrs || (data.attrs = {}))[prop] = data.model.value;
    var on = data.on || (data.on = {});
    var existing = on[event];
    var callback = data.model.callback;
    if (isDef(existing)) {
      if (Array.isArray(existing) ? existing.indexOf(callback) === -1 : existing !== callback) {
        on[event] = [callback].concat(existing);
      }
    } else {
      on[event] = callback;
    }
  }

  /*  */

  var SIMPLE_NORMALIZE = 1;
  var ALWAYS_NORMALIZE = 2;

  // wrapper function for providing a more flexible interface
  // without getting yelled at by flow
  function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
    if (Array.isArray(data) || isPrimitive(data)) {
      normalizationType = children;
      children = data;
      data = undefined;
    }
    if (isTrue(alwaysNormalize)) {
      normalizationType = ALWAYS_NORMALIZE;
    }
    return _createElement(context, tag, data, children, normalizationType);
  }

  function _createElement(context, tag, data, children, normalizationType) {
    if (isDef(data) && isDef(data.__ob__)) {
      warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
      return createEmptyVNode();
    }
    // object syntax in v-bind
    if (isDef(data) && isDef(data.is)) {
      tag = data.is;
    }
    if (!tag) {
      // in case of component :is set to falsy value
      return createEmptyVNode();
    }
    // warn against non-primitive key
    if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
      {
        warn('Avoid using non-primitive value as key, ' + 'use string/number value instead.', context);
      }
    }
    // support single function children as default scoped slot
    if (Array.isArray(children) && typeof children[0] === 'function') {
      data = data || {};
      data.scopedSlots = { default: children[0] };
      children.length = 0;
    }
    if (normalizationType === ALWAYS_NORMALIZE) {
      children = normalizeChildren(children);
    } else if (normalizationType === SIMPLE_NORMALIZE) {
      children = simpleNormalizeChildren(children);
    }
    var vnode, ns;
    if (typeof tag === 'string') {
      var Ctor;
      ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);
      if (config.isReservedTag(tag)) {
        // platform built-in elements
        vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
      } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
        // component
        vnode = createComponent(Ctor, data, context, children, tag);
      } else {
        // unknown or unlisted namespaced elements
        // check at runtime because it may get assigned a namespace when its
        // parent normalizes children
        vnode = new VNode(tag, data, children, undefined, undefined, context);
      }
    } else {
      // direct component options / constructor
      vnode = createComponent(tag, data, context, children);
    }
    if (Array.isArray(vnode)) {
      return vnode;
    } else if (isDef(vnode)) {
      if (isDef(ns)) {
        applyNS(vnode, ns);
      }
      if (isDef(data)) {
        registerDeepBindings(data);
      }
      return vnode;
    } else {
      return createEmptyVNode();
    }
  }

  function applyNS(vnode, ns, force) {
    vnode.ns = ns;
    if (vnode.tag === 'foreignObject') {
      // use default namespace inside foreignObject
      ns = undefined;
      force = true;
    }
    if (isDef(vnode.children)) {
      for (var i = 0, l = vnode.children.length; i < l; i++) {
        var child = vnode.children[i];
        if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && child.tag !== 'svg')) {
          applyNS(child, ns, force);
        }
      }
    }
  }

  // ref #5318
  // necessary to ensure parent re-render when deep bindings like :style and
  // :class are used on slot nodes
  function registerDeepBindings(data) {
    if (isObject(data.style)) {
      traverse(data.style);
    }
    if (isObject(data.class)) {
      traverse(data.class);
    }
  }

  /*  */

  function initRender(vm) {
    vm._vnode = null; // the root of the child tree
    vm._staticTrees = null; // v-once cached trees
    var options = vm.$options;
    var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
    var renderContext = parentVnode && parentVnode.context;
    vm.$slots = resolveSlots(options._renderChildren, renderContext);
    vm.$scopedSlots = emptyObject;
    // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize
    // internal version is used by render functions compiled from templates
    vm._c = function (a, b, c, d) {
      return createElement(vm, a, b, c, d, false);
    };
    // normalization is always applied for the public version, used in
    // user-written render functions.
    vm.$createElement = function (a, b, c, d) {
      return createElement(vm, a, b, c, d, true);
    };

    // $attrs & $listeners are exposed for easier HOC creation.
    // they need to be reactive so that HOCs using them are always updated
    var parentData = parentVnode && parentVnode.data;

    /* istanbul ignore else */
    {
      defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
        !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
      }, true);
      defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
        !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
      }, true);
    }
  }

  var currentRenderingInstance = null;

  function renderMixin(Vue) {
    // install runtime convenience helpers
    installRenderHelpers(Vue.prototype);

    Vue.prototype.$nextTick = function (fn) {
      return nextTick(fn, this);
    };

    Vue.prototype._render = function () {
      var vm = this;
      var ref = vm.$options;
      var render = ref.render;
      var _parentVnode = ref._parentVnode;

      if (_parentVnode) {
        vm.$scopedSlots = normalizeScopedSlots(_parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
      }

      // set parent vnode. this allows render functions to have access
      // to the data on the placeholder node.
      vm.$vnode = _parentVnode;
      // render self
      var vnode;
      try {
        // There's no need to maintain a stack becaues all render fns are called
        // separately from one another. Nested component's render fns are called
        // when parent component is patched.
        currentRenderingInstance = vm;
        vnode = render.call(vm._renderProxy, vm.$createElement);
      } catch (e) {
        handleError(e, vm, "render");
        // return error render result,
        // or previous vnode to prevent render error causing blank component
        /* istanbul ignore else */
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } finally {
        currentRenderingInstance = null;
      }
      // if the returned array contains only a single node, allow it
      if (Array.isArray(vnode) && vnode.length === 1) {
        vnode = vnode[0];
      }
      // return empty vnode in case the render function errored out
      if (!(vnode instanceof VNode)) {
        if (Array.isArray(vnode)) {
          warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
        }
        vnode = createEmptyVNode();
      }
      // set parent
      vnode.parent = _parentVnode;
      return vnode;
    };
  }

  /*  */

  function ensureCtor(comp, base) {
    if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === 'Module') {
      comp = comp.default;
    }
    return isObject(comp) ? base.extend(comp) : comp;
  }

  function createAsyncPlaceholder(factory, data, context, children, tag) {
    var node = createEmptyVNode();
    node.asyncFactory = factory;
    node.asyncMeta = { data: data, context: context, children: children, tag: tag };
    return node;
  }

  function resolveAsyncComponent(factory, baseCtor) {
    if (isTrue(factory.error) && isDef(factory.errorComp)) {
      return factory.errorComp;
    }

    if (isDef(factory.resolved)) {
      return factory.resolved;
    }

    var owner = currentRenderingInstance;
    if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
      // already pending
      factory.owners.push(owner);
    }

    if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
      return factory.loadingComp;
    }

    if (owner && !isDef(factory.owners)) {
      var owners = factory.owners = [owner];
      var sync = true;
      var timerLoading = null;
      var timerTimeout = null;owner.$on('hook:destroyed', function () {
        return remove(owners, owner);
      });

      var forceRender = function forceRender(renderCompleted) {
        for (var i = 0, l = owners.length; i < l; i++) {
          owners[i].$forceUpdate();
        }

        if (renderCompleted) {
          owners.length = 0;
          if (timerLoading !== null) {
            clearTimeout(timerLoading);
            timerLoading = null;
          }
          if (timerTimeout !== null) {
            clearTimeout(timerTimeout);
            timerTimeout = null;
          }
        }
      };

      var resolve = once(function (res) {
        // cache resolved
        factory.resolved = ensureCtor(res, baseCtor);
        // invoke callbacks only if this is not a synchronous resolve
        // (async resolves are shimmed as synchronous during SSR)
        if (!sync) {
          forceRender(true);
        } else {
          owners.length = 0;
        }
      });

      var reject = once(function (reason) {
        warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));
        if (isDef(factory.errorComp)) {
          factory.error = true;
          forceRender(true);
        }
      });

      var res = factory(resolve, reject);

      if (isObject(res)) {
        if (isPromise(res)) {
          // () => Promise
          if (isUndef(factory.resolved)) {
            res.then(resolve, reject);
          }
        } else if (isPromise(res.component)) {
          res.component.then(resolve, reject);

          if (isDef(res.error)) {
            factory.errorComp = ensureCtor(res.error, baseCtor);
          }

          if (isDef(res.loading)) {
            factory.loadingComp = ensureCtor(res.loading, baseCtor);
            if (res.delay === 0) {
              factory.loading = true;
            } else {
              timerLoading = setTimeout(function () {
                timerLoading = null;
                if (isUndef(factory.resolved) && isUndef(factory.error)) {
                  factory.loading = true;
                  forceRender(false);
                }
              }, res.delay || 200);
            }
          }

          if (isDef(res.timeout)) {
            timerTimeout = setTimeout(function () {
              timerTimeout = null;
              if (isUndef(factory.resolved)) {
                reject("timeout (" + res.timeout + "ms)");
              }
            }, res.timeout);
          }
        }
      }

      sync = false;
      // return in case resolved synchronously
      return factory.loading ? factory.loadingComp : factory.resolved;
    }
  }

  /*  */

  function isAsyncPlaceholder(node) {
    return node.isComment && node.asyncFactory;
  }

  /*  */

  function getFirstComponentChild(children) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        var c = children[i];
        if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
          return c;
        }
      }
    }
  }

  /*  */

  /*  */

  function initEvents(vm) {
    vm._events = Object.create(null);
    vm._hasHookEvent = false;
    // init parent attached events
    var listeners = vm.$options._parentListeners;
    if (listeners) {
      updateComponentListeners(vm, listeners);
    }
  }

  var target;

  function add(event, fn) {
    target.$on(event, fn);
  }

  function remove$1(event, fn) {
    target.$off(event, fn);
  }

  function createOnceHandler(event, fn) {
    var _target = target;
    return function onceHandler() {
      var res = fn.apply(null, arguments);
      if (res !== null) {
        _target.$off(event, onceHandler);
      }
    };
  }

  function updateComponentListeners(vm, listeners, oldListeners) {
    target = vm;
    updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
    target = undefined;
  }

  function eventsMixin(Vue) {
    var hookRE = /^hook:/;
    Vue.prototype.$on = function (event, fn) {
      var vm = this;
      if (Array.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          vm.$on(event[i], fn);
        }
      } else {
        (vm._events[event] || (vm._events[event] = [])).push(fn);
        // optimize hook:event cost by using a boolean flag marked at registration
        // instead of a hash lookup
        if (hookRE.test(event)) {
          vm._hasHookEvent = true;
        }
      }
      return vm;
    };

    Vue.prototype.$once = function (event, fn) {
      var vm = this;
      function on() {
        vm.$off(event, on);
        fn.apply(vm, arguments);
      }
      on.fn = fn;
      vm.$on(event, on);
      return vm;
    };

    Vue.prototype.$off = function (event, fn) {
      var vm = this;
      // all
      if (!arguments.length) {
        vm._events = Object.create(null);
        return vm;
      }
      // array of events
      if (Array.isArray(event)) {
        for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
          vm.$off(event[i$1], fn);
        }
        return vm;
      }
      // specific event
      var cbs = vm._events[event];
      if (!cbs) {
        return vm;
      }
      if (!fn) {
        vm._events[event] = null;
        return vm;
      }
      // specific handler
      var cb;
      var i = cbs.length;
      while (i--) {
        cb = cbs[i];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i, 1);
          break;
        }
      }
      return vm;
    };

    Vue.prototype.$emit = function (event) {
      var vm = this;
      {
        var lowerCaseEvent = event.toLowerCase();
        if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
          tip("Event \"" + lowerCaseEvent + "\" is emitted in component " + formatComponentName(vm) + " but the handler is registered for \"" + event + "\". " + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"" + hyphenate(event) + "\" instead of \"" + event + "\".");
        }
      }
      var cbs = vm._events[event];
      if (cbs) {
        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
        var args = toArray(arguments, 1);
        var info = "event handler for \"" + event + "\"";
        for (var i = 0, l = cbs.length; i < l; i++) {
          invokeWithErrorHandling(cbs[i], vm, args, vm, info);
        }
      }
      return vm;
    };
  }

  /*  */

  var activeInstance = null;
  var isUpdatingChildComponent = false;

  function setActiveInstance(vm) {
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    return function () {
      activeInstance = prevActiveInstance;
    };
  }

  function initLifecycle(vm) {
    var options = vm.$options;

    // locate first non-abstract parent
    var parent = options.parent;
    if (parent && !options.abstract) {
      while (parent.$options.abstract && parent.$parent) {
        parent = parent.$parent;
      }
      parent.$children.push(vm);
    }

    vm.$parent = parent;
    vm.$root = parent ? parent.$root : vm;

    vm.$children = [];
    vm.$refs = {};

    vm._watcher = null;
    vm._inactive = null;
    vm._directInactive = false;
    vm._isMounted = false;
    vm._isDestroyed = false;
    vm._isBeingDestroyed = false;
  }

  function lifecycleMixin(Vue) {
    Vue.prototype._update = function (vnode, hydrating) {
      var vm = this;
      var prevEl = vm.$el;
      var prevVnode = vm._vnode;
      var restoreActiveInstance = setActiveInstance(vm);
      vm._vnode = vnode;
      // Vue.prototype.__patch__ is injected in entry points
      // based on the rendering backend used.
      if (!prevVnode) {
        // initial render
        vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
      } else {
        // updates
        vm.$el = vm.__patch__(prevVnode, vnode);
      }
      restoreActiveInstance();
      // update __vue__ reference
      if (prevEl) {
        prevEl.__vue__ = null;
      }
      if (vm.$el) {
        vm.$el.__vue__ = vm;
      }
      // if parent is an HOC, update its $el as well
      if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
        vm.$parent.$el = vm.$el;
      }
      // updated hook is called by the scheduler to ensure that children are
      // updated in a parent's updated hook.
    };

    Vue.prototype.$forceUpdate = function () {
      var vm = this;
      if (vm._watcher) {
        vm._watcher.update();
      }
    };

    Vue.prototype.$destroy = function () {
      var vm = this;
      if (vm._isBeingDestroyed) {
        return;
      }
      callHook(vm, 'beforeDestroy');
      vm._isBeingDestroyed = true;
      // remove self from parent
      var parent = vm.$parent;
      if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
        remove(parent.$children, vm);
      }
      // teardown watchers
      if (vm._watcher) {
        vm._watcher.teardown();
      }
      var i = vm._watchers.length;
      while (i--) {
        vm._watchers[i].teardown();
      }
      // remove reference from data ob
      // frozen object may not have observer.
      if (vm._data.__ob__) {
        vm._data.__ob__.vmCount--;
      }
      // call the last hook...
      vm._isDestroyed = true;
      // invoke destroy hooks on current rendered tree
      vm.__patch__(vm._vnode, null);
      // fire destroyed hook
      callHook(vm, 'destroyed');
      // turn off all instance listeners.
      vm.$off();
      // remove __vue__ reference
      if (vm.$el) {
        vm.$el.__vue__ = null;
      }
      // release circular reference (#6759)
      if (vm.$vnode) {
        vm.$vnode.parent = null;
      }
    };
  }

  function mountComponent(vm, el, hydrating) {
    vm.$el = el;
    if (!vm.$options.render) {
      vm.$options.render = createEmptyVNode;
      {
        /* istanbul ignore if */
        if (vm.$options.template && vm.$options.template.charAt(0) !== '#' || vm.$options.el || el) {
          warn('You are using the runtime-only build of Vue where the template ' + 'compiler is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
        } else {
          warn('Failed to mount component: template or render function not defined.', vm);
        }
      }
    }
    callHook(vm, 'beforeMount');

    var updateComponent;
    /* istanbul ignore if */
    if (config.performance && mark) {
      updateComponent = function updateComponent() {
        var name = vm._name;
        var id = vm._uid;
        var startTag = "vue-perf-start:" + id;
        var endTag = "vue-perf-end:" + id;

        mark(startTag);
        var vnode = vm._render();
        mark(endTag);
        measure("vue " + name + " render", startTag, endTag);

        mark(startTag);
        vm._update(vnode, hydrating);
        mark(endTag);
        measure("vue " + name + " patch", startTag, endTag);
      };
    } else {
      updateComponent = function updateComponent() {
        vm._update(vm._render(), hydrating);
      };
    }

    // we set this to vm._watcher inside the watcher's constructor
    // since the watcher's initial patch may call $forceUpdate (e.g. inside child
    // component's mounted hook), which relies on vm._watcher being already defined
    new Watcher(vm, updateComponent, noop, {
      before: function before() {
        if (vm._isMounted && !vm._isDestroyed) {
          callHook(vm, 'beforeUpdate');
        }
      }
    }, true /* isRenderWatcher */);
    hydrating = false;

    // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook
    if (vm.$vnode == null) {
      vm._isMounted = true;
      callHook(vm, 'mounted');
    }
    return vm;
  }

  function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
    {
      isUpdatingChildComponent = true;
    }

    // determine whether component has slot children
    // we need to do this before overwriting $options._renderChildren.

    // check if there are dynamic scopedSlots (hand-written or compiled but with
    // dynamic slot names). Static scoped slots compiled from template has the
    // "$stable" marker.
    var newScopedSlots = parentVnode.data.scopedSlots;
    var oldScopedSlots = vm.$scopedSlots;
    var hasDynamicScopedSlot = !!(newScopedSlots && !newScopedSlots.$stable || oldScopedSlots !== emptyObject && !oldScopedSlots.$stable || newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key);

    // Any static slot children from the parent may have changed during parent's
    // update. Dynamic scoped slots may also have changed. In such cases, a forced
    // update is necessary to ensure correctness.
    var needsForceUpdate = !!(renderChildren || // has new static slots
    vm.$options._renderChildren || // has old static slots
    hasDynamicScopedSlot);

    vm.$options._parentVnode = parentVnode;
    vm.$vnode = parentVnode; // update vm's placeholder node without re-render

    if (vm._vnode) {
      // update child tree's parent
      vm._vnode.parent = parentVnode;
    }
    vm.$options._renderChildren = renderChildren;

    // update $attrs and $listeners hash
    // these are also reactive so they may trigger child update if the child
    // used them during render
    vm.$attrs = parentVnode.data.attrs || emptyObject;
    vm.$listeners = listeners || emptyObject;

    // update props
    if (propsData && vm.$options.props) {
      toggleObserving(false);
      var props = vm._props;
      var propKeys = vm.$options._propKeys || [];
      for (var i = 0; i < propKeys.length; i++) {
        var key = propKeys[i];
        var propOptions = vm.$options.props; // wtf flow?
        props[key] = validateProp(key, propOptions, propsData, vm);
      }
      toggleObserving(true);
      // keep a copy of raw propsData
      vm.$options.propsData = propsData;
    }

    // update listeners
    listeners = listeners || emptyObject;
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);

    // resolve slots + force update if has children
    if (needsForceUpdate) {
      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
      vm.$forceUpdate();
    }

    {
      isUpdatingChildComponent = false;
    }
  }

  function isInInactiveTree(vm) {
    while (vm && (vm = vm.$parent)) {
      if (vm._inactive) {
        return true;
      }
    }
    return false;
  }

  function activateChildComponent(vm, direct) {
    if (direct) {
      vm._directInactive = false;
      if (isInInactiveTree(vm)) {
        return;
      }
    } else if (vm._directInactive) {
      return;
    }
    if (vm._inactive || vm._inactive === null) {
      vm._inactive = false;
      for (var i = 0; i < vm.$children.length; i++) {
        activateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'activated');
    }
  }

  function deactivateChildComponent(vm, direct) {
    if (direct) {
      vm._directInactive = true;
      if (isInInactiveTree(vm)) {
        return;
      }
    }
    if (!vm._inactive) {
      vm._inactive = true;
      for (var i = 0; i < vm.$children.length; i++) {
        deactivateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'deactivated');
    }
  }

  function callHook(vm, hook) {
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        invokeWithErrorHandling(handlers[i], vm, null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook);
    }
    popTarget();
  }

  /*  */

  var MAX_UPDATE_COUNT = 100;

  var queue = [];
  var activatedChildren = [];
  var has = {};
  var circular = {};
  var waiting = false;
  var flushing = false;
  var index = 0;

  /**
   * Reset the scheduler's state.
   */
  function resetSchedulerState() {
    index = queue.length = activatedChildren.length = 0;
    has = {};
    {
      circular = {};
    }
    waiting = flushing = false;
  }

  // Async edge case #6566 requires saving the timestamp when event listeners are
  // attached. However, calling performance.now() has a perf overhead especially
  // if the page has thousands of event listeners. Instead, we take a timestamp
  // every time the scheduler flushes and use that for all event listeners
  // attached during that flush.
  var currentFlushTimestamp = 0;

  // Async edge case fix requires storing an event listener's attach timestamp.
  var getNow = Date.now;

  // Determine what event timestamp the browser is using. Annoyingly, the
  // timestamp can either be hi-res (relative to page load) or low-res
  // (relative to UNIX epoch), so in order to compare time we have to use the
  // same timestamp type when saving the flush timestamp.
  // All IE versions use low-res event timestamps, and have problematic clock
  // implementations (#9632)
  if (inBrowser && !isIE) {
    var performance = window.performance;
    if (performance && typeof performance.now === 'function' && getNow() > document.createEvent('Event').timeStamp) {
      // if the event timestamp, although evaluated AFTER the Date.now(), is
      // smaller than it, it means the event is using a hi-res timestamp,
      // and we need to use the hi-res version for event listener timestamps as
      // well.
      getNow = function getNow() {
        return performance.now();
      };
    }
  }

  /**
   * Flush both queues and run the watchers.
   */
  function flushSchedulerQueue() {
    currentFlushTimestamp = getNow();
    flushing = true;
    var watcher, id;

    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child)
    // 2. A component's user watchers are run before its render watcher (because
    //    user watchers are created before the render watcher)
    // 3. If a component is destroyed during a parent component's watcher run,
    //    its watchers can be skipped.
    queue.sort(function (a, b) {
      return a.id - b.id;
    });

    // do not cache length because more watchers might be pushed
    // as we run existing watchers
    for (index = 0; index < queue.length; index++) {
      watcher = queue[index];
      if (watcher.before) {
        watcher.before();
      }
      id = watcher.id;
      has[id] = null;
      watcher.run();
      // in dev build, check and stop circular updates.
      if (has[id] != null) {
        circular[id] = (circular[id] || 0) + 1;
        if (circular[id] > MAX_UPDATE_COUNT) {
          warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
          break;
        }
      }
    }

    // keep copies of post queues before resetting state
    var activatedQueue = activatedChildren.slice();
    var updatedQueue = queue.slice();

    resetSchedulerState();

    // call component updated and activated hooks
    callActivatedHooks(activatedQueue);
    callUpdatedHooks(updatedQueue);

    // devtool hook
    /* istanbul ignore if */
    if (devtools && config.devtools) {
      devtools.emit('flush');
    }
  }

  function callUpdatedHooks(queue) {
    var i = queue.length;
    while (i--) {
      var watcher = queue[i];
      var vm = watcher.vm;
      if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'updated');
      }
    }
  }

  /**
   * Queue a kept-alive component that was activated during patch.
   * The queue will be processed after the entire tree has been patched.
   */
  function queueActivatedComponent(vm) {
    // setting _inactive to false here so that a render function can
    // rely on checking whether it's in an inactive tree (e.g. router-view)
    vm._inactive = false;
    activatedChildren.push(vm);
  }

  function callActivatedHooks(queue) {
    for (var i = 0; i < queue.length; i++) {
      queue[i]._inactive = true;
      activateChildComponent(queue[i], true /* true */);
    }
  }

  /**
   * Push a watcher into the watcher queue.
   * Jobs with duplicate IDs will be skipped unless it's
   * pushed when the queue is being flushed.
   */
  function queueWatcher(watcher) {
    var id = watcher.id;
    if (has[id] == null) {
      has[id] = true;
      if (!flushing) {
        queue.push(watcher);
      } else {
        // if already flushing, splice the watcher based on its id
        // if already past its id, it will be run next immediately.
        var i = queue.length - 1;
        while (i > index && queue[i].id > watcher.id) {
          i--;
        }
        queue.splice(i + 1, 0, watcher);
      }
      // queue the flush
      if (!waiting) {
        waiting = true;

        if (!config.async) {
          flushSchedulerQueue();
          return;
        }
        nextTick(flushSchedulerQueue);
      }
    }
  }

  /*  */

  var uid$2 = 0;

  /**
   * A watcher parses an expression, collects dependencies,
   * and fires callback when the expression value changes.
   * This is used for both the $watch() api and directives.
   */
  var Watcher = function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
    this.vm = vm;
    if (isRenderWatcher) {
      vm._watcher = this;
    }
    vm._watchers.push(this);
    // options
    if (options) {
      this.deep = !!options.deep;
      this.user = !!options.user;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
      this.before = options.before;
    } else {
      this.deep = this.user = this.lazy = this.sync = false;
    }
    this.cb = cb;
    this.id = ++uid$2; // uid for batching
    this.active = true;
    this.dirty = this.lazy; // for lazy watchers
    this.deps = [];
    this.newDeps = [];
    this.depIds = new _Set();
    this.newDepIds = new _Set();
    this.expression = expOrFn.toString();
    // parse expression for getter
    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);
      if (!this.getter) {
        this.getter = noop;
        warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
      }
    }
    this.value = this.lazy ? undefined : this.get();
  };

  /**
   * Evaluate the getter, and re-collect dependencies.
   */
  Watcher.prototype.get = function get() {
    pushTarget(this);
    var value;
    var vm = this.vm;
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      if (this.user) {
        handleError(e, vm, "getter for watcher \"" + this.expression + "\"");
      } else {
        throw e;
      }
    } finally {
      // "touch" every property so they are all tracked as
      // dependencies for deep watching
      if (this.deep) {
        traverse(value);
      }
      popTarget();
      this.cleanupDeps();
    }
    return value;
  };

  /**
   * Add a dependency to this directive.
   */
  Watcher.prototype.addDep = function addDep(dep) {
    var id = dep.id;
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id);
      this.newDeps.push(dep);
      if (!this.depIds.has(id)) {
        dep.addSub(this);
      }
    }
  };

  /**
   * Clean up for dependency collection.
   */
  Watcher.prototype.cleanupDeps = function cleanupDeps() {
    var i = this.deps.length;
    while (i--) {
      var dep = this.deps[i];
      if (!this.newDepIds.has(dep.id)) {
        dep.removeSub(this);
      }
    }
    var tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;
  };

  /**
   * Subscriber interface.
   * Will be called when a dependency changes.
   */
  Watcher.prototype.update = function update() {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      queueWatcher(this);
    }
  };

  /**
   * Scheduler job interface.
   * Will be called by the scheduler.
   */
  Watcher.prototype.run = function run() {
    if (this.active) {
      var value = this.get();
      if (value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) || this.deep) {
        // set new value
        var oldValue = this.value;
        this.value = value;
        if (this.user) {
          try {
            this.cb.call(this.vm, value, oldValue);
          } catch (e) {
            handleError(e, this.vm, "callback for watcher \"" + this.expression + "\"");
          }
        } else {
          this.cb.call(this.vm, value, oldValue);
        }
      }
    }
  };

  /**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */
  Watcher.prototype.evaluate = function evaluate() {
    this.value = this.get();
    this.dirty = false;
  };

  /**
   * Depend on all deps collected by this watcher.
   */
  Watcher.prototype.depend = function depend() {
    var i = this.deps.length;
    while (i--) {
      this.deps[i].depend();
    }
  };

  /**
   * Remove self from all dependencies' subscriber list.
   */
  Watcher.prototype.teardown = function teardown() {
    if (this.active) {
      // remove self from vm's watcher list
      // this is a somewhat expensive operation so we skip it
      // if the vm is being destroyed.
      if (!this.vm._isBeingDestroyed) {
        remove(this.vm._watchers, this);
      }
      var i = this.deps.length;
      while (i--) {
        this.deps[i].removeSub(this);
      }
      this.active = false;
    }
  };

  /*  */

  var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
  };

  function proxy(target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter() {
      return this[sourceKey][key];
    };
    sharedPropertyDefinition.set = function proxySetter(val) {
      this[sourceKey][key] = val;
    };
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function initState(vm) {
    vm._watchers = [];
    var opts = vm.$options;
    if (opts.props) {
      initProps(vm, opts.props);
    }
    if (opts.methods) {
      initMethods(vm, opts.methods);
    }
    if (opts.data) {
      initData(vm);
    } else {
      observe(vm._data = {}, true /* asRootData */);
    }
    if (opts.computed) {
      initComputed(vm, opts.computed);
    }
    if (opts.watch && opts.watch !== nativeWatch) {
      initWatch(vm, opts.watch);
    }
  }

  function initProps(vm, propsOptions) {
    var propsData = vm.$options.propsData || {};
    var props = vm._props = {};
    // cache prop keys so that future props updates can iterate using Array
    // instead of dynamic object key enumeration.
    var keys = vm.$options._propKeys = [];
    var isRoot = !vm.$parent;
    // root instance props should be converted
    if (!isRoot) {
      toggleObserving(false);
    }
    var loop = function loop(key) {
      keys.push(key);
      var value = validateProp(key, propsOptions, propsData, vm);
      /* istanbul ignore else */
      {
        var hyphenatedKey = hyphenate(key);
        if (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) {
          warn("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop.", vm);
        }
        defineReactive$$1(props, key, value, function () {
          if (!isRoot && !isUpdatingChildComponent) {
            warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
          }
        });
      }
      // static props are already proxied on the component's prototype
      // during Vue.extend(). We only need to proxy props defined at
      // instantiation here.
      if (!(key in vm)) {
        proxy(vm, "_props", key);
      }
    };

    for (var key in propsOptions) {
      loop(key);
    }toggleObserving(true);
  }

  function initData(vm) {
    var data = vm.$options.data;
    data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};
    if (!isPlainObject(data)) {
      data = {};
      warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
    }
    // proxy data on instance
    var keys = Object.keys(data);
    var props = vm.$options.props;
    var methods = vm.$options.methods;
    var i = keys.length;
    while (i--) {
      var key = keys[i];
      {
        if (methods && hasOwn(methods, key)) {
          warn("Method \"" + key + "\" has already been defined as a data property.", vm);
        }
      }
      if (props && hasOwn(props, key)) {
        warn("The data property \"" + key + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
      } else if (!isReserved(key)) {
        proxy(vm, "_data", key);
      }
    }
    // observe data
    observe(data, true /* asRootData */);
  }

  function getData(data, vm) {
    // #7573 disable dep collection when invoking data getters
    pushTarget();
    try {
      return data.call(vm, vm);
    } catch (e) {
      handleError(e, vm, "data()");
      return {};
    } finally {
      popTarget();
    }
  }

  var computedWatcherOptions = { lazy: true };

  function initComputed(vm, computed) {
    // $flow-disable-line
    var watchers = vm._computedWatchers = Object.create(null);
    // computed properties are just getters during SSR
    var isSSR = isServerRendering();

    for (var key in computed) {
      var userDef = computed[key];
      var getter = typeof userDef === 'function' ? userDef : userDef.get;
      if (getter == null) {
        warn("Getter is missing for computed property \"" + key + "\".", vm);
      }

      if (!isSSR) {
        // create internal watcher for the computed property.
        watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
      }

      // component-defined computed properties are already defined on the
      // component prototype. We only need to define computed properties defined
      // at instantiation here.
      if (!(key in vm)) {
        defineComputed(vm, key, userDef);
      } else {
        if (key in vm.$data) {
          warn("The computed property \"" + key + "\" is already defined in data.", vm);
        } else if (vm.$options.props && key in vm.$options.props) {
          warn("The computed property \"" + key + "\" is already defined as a prop.", vm);
        }
      }
    }
  }

  function defineComputed(target, key, userDef) {
    var shouldCache = !isServerRendering();
    if (typeof userDef === 'function') {
      sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : createGetterInvoker(userDef);
      sharedPropertyDefinition.set = noop;
    } else {
      sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : createGetterInvoker(userDef.get) : noop;
      sharedPropertyDefinition.set = userDef.set || noop;
    }
    if (sharedPropertyDefinition.set === noop) {
      sharedPropertyDefinition.set = function () {
        warn("Computed property \"" + key + "\" was assigned to but it has no setter.", this);
      };
    }
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function createComputedGetter(key) {
    return function computedGetter() {
      var watcher = this._computedWatchers && this._computedWatchers[key];
      if (watcher) {
        if (watcher.dirty) {
          watcher.evaluate();
        }
        if (Dep.target) {
          watcher.depend();
        }
        return watcher.value;
      }
    };
  }

  function createGetterInvoker(fn) {
    return function computedGetter() {
      return fn.call(this, this);
    };
  }

  function initMethods(vm, methods) {
    var props = vm.$options.props;
    for (var key in methods) {
      {
        if (typeof methods[key] !== 'function') {
          warn("Method \"" + key + "\" has type \"" + _typeof(methods[key]) + "\" in the component definition. " + "Did you reference the function correctly?", vm);
        }
        if (props && hasOwn(props, key)) {
          warn("Method \"" + key + "\" has already been defined as a prop.", vm);
        }
        if (key in vm && isReserved(key)) {
          warn("Method \"" + key + "\" conflicts with an existing Vue instance method. " + "Avoid defining component methods that start with _ or $.");
        }
      }
      vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
    }
  }

  function initWatch(vm, watch) {
    for (var key in watch) {
      var handler = watch[key];
      if (Array.isArray(handler)) {
        for (var i = 0; i < handler.length; i++) {
          createWatcher(vm, key, handler[i]);
        }
      } else {
        createWatcher(vm, key, handler);
      }
    }
  }

  function createWatcher(vm, expOrFn, handler, options) {
    if (isPlainObject(handler)) {
      options = handler;
      handler = handler.handler;
    }
    if (typeof handler === 'string') {
      handler = vm[handler];
    }
    return vm.$watch(expOrFn, handler, options);
  }

  function stateMixin(Vue) {
    // flow somehow has problems with directly declared definition object
    // when using Object.defineProperty, so we have to procedurally build up
    // the object here.
    var dataDef = {};
    dataDef.get = function () {
      return this._data;
    };
    var propsDef = {};
    propsDef.get = function () {
      return this._props;
    };
    {
      dataDef.set = function () {
        warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
      };
      propsDef.set = function () {
        warn("$props is readonly.", this);
      };
    }
    Object.defineProperty(Vue.prototype, '$data', dataDef);
    Object.defineProperty(Vue.prototype, '$props', propsDef);

    Vue.prototype.$set = set;
    Vue.prototype.$delete = del;

    Vue.prototype.$watch = function (expOrFn, cb, options) {
      var vm = this;
      if (isPlainObject(cb)) {
        return createWatcher(vm, expOrFn, cb, options);
      }
      options = options || {};
      options.user = true;
      var watcher = new Watcher(vm, expOrFn, cb, options);
      if (options.immediate) {
        try {
          cb.call(vm, watcher.value);
        } catch (error) {
          handleError(error, vm, "callback for immediate watcher \"" + watcher.expression + "\"");
        }
      }
      return function unwatchFn() {
        watcher.teardown();
      };
    };
  }

  /*  */

  var uid$3 = 0;

  function initMixin(Vue) {
    Vue.prototype._init = function (options) {
      var vm = this;
      // a uid
      vm._uid = uid$3++;

      var startTag, endTag;
      /* istanbul ignore if */
      if (config.performance && mark) {
        startTag = "vue-perf-start:" + vm._uid;
        endTag = "vue-perf-end:" + vm._uid;
        mark(startTag);
      }

      // a flag to avoid this being observed
      vm._isVue = true;
      // merge options
      if (options && options._isComponent) {
        // optimize internal component instantiation
        // since dynamic options merging is pretty slow, and none of the
        // internal component options needs special treatment.
        initInternalComponent(vm, options);
      } else {
        vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
      }
      /* istanbul ignore else */
      {
        initProxy(vm);
      }
      // expose real self
      vm._self = vm;
      initLifecycle(vm);
      initEvents(vm);
      initRender(vm);
      callHook(vm, 'beforeCreate');
      initInjections(vm); // resolve injections before data/props
      initState(vm);
      initProvide(vm); // resolve provide after data/props
      callHook(vm, 'created');

      /* istanbul ignore if */
      if (config.performance && mark) {
        vm._name = formatComponentName(vm, false);
        mark(endTag);
        measure("vue " + vm._name + " init", startTag, endTag);
      }

      if (vm.$options.el) {
        vm.$mount(vm.$options.el);
      }
    };
  }

  function initInternalComponent(vm, options) {
    var opts = vm.$options = Object.create(vm.constructor.options);
    // doing this because it's faster than dynamic enumeration.
    var parentVnode = options._parentVnode;
    opts.parent = options.parent;
    opts._parentVnode = parentVnode;

    var vnodeComponentOptions = parentVnode.componentOptions;
    opts.propsData = vnodeComponentOptions.propsData;
    opts._parentListeners = vnodeComponentOptions.listeners;
    opts._renderChildren = vnodeComponentOptions.children;
    opts._componentTag = vnodeComponentOptions.tag;

    if (options.render) {
      opts.render = options.render;
      opts.staticRenderFns = options.staticRenderFns;
    }
  }

  function resolveConstructorOptions(Ctor) {
    var options = Ctor.options;
    if (Ctor.super) {
      var superOptions = resolveConstructorOptions(Ctor.super);
      var cachedSuperOptions = Ctor.superOptions;
      if (superOptions !== cachedSuperOptions) {
        // super option changed,
        // need to resolve new options.
        Ctor.superOptions = superOptions;
        // check if there are any late-modified/attached options (#4976)
        var modifiedOptions = resolveModifiedOptions(Ctor);
        // update base extend options
        if (modifiedOptions) {
          extend(Ctor.extendOptions, modifiedOptions);
        }
        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
        if (options.name) {
          options.components[options.name] = Ctor;
        }
      }
    }
    return options;
  }

  function resolveModifiedOptions(Ctor) {
    var modified;
    var latest = Ctor.options;
    var sealed = Ctor.sealedOptions;
    for (var key in latest) {
      if (latest[key] !== sealed[key]) {
        if (!modified) {
          modified = {};
        }
        modified[key] = latest[key];
      }
    }
    return modified;
  }

  function Vue(options) {
    if (!(this instanceof Vue)) {
      warn('Vue is a constructor and should be called with the `new` keyword');
    }
    this._init(options);
  }

  initMixin(Vue);
  stateMixin(Vue);
  eventsMixin(Vue);
  lifecycleMixin(Vue);
  renderMixin(Vue);

  /*  */

  function initUse(Vue) {
    Vue.use = function (plugin) {
      var installedPlugins = this._installedPlugins || (this._installedPlugins = []);
      if (installedPlugins.indexOf(plugin) > -1) {
        return this;
      }

      // additional parameters
      var args = toArray(arguments, 1);
      args.unshift(this);
      if (typeof plugin.install === 'function') {
        plugin.install.apply(plugin, args);
      } else if (typeof plugin === 'function') {
        plugin.apply(null, args);
      }
      installedPlugins.push(plugin);
      return this;
    };
  }

  /*  */

  function initMixin$1(Vue) {
    Vue.mixin = function (mixin) {
      this.options = mergeOptions(this.options, mixin);
      return this;
    };
  }

  /*  */

  function initExtend(Vue) {
    /**
     * Each instance constructor, including Vue, has a unique
     * cid. This enables us to create wrapped "child
     * constructors" for prototypal inheritance and cache them.
     */
    Vue.cid = 0;
    var cid = 1;

    /**
     * Class inheritance
     */
    Vue.extend = function (extendOptions) {
      extendOptions = extendOptions || {};
      var Super = this;
      var SuperId = Super.cid;
      var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
      if (cachedCtors[SuperId]) {
        return cachedCtors[SuperId];
      }

      var name = extendOptions.name || Super.options.name;
      if (name) {
        validateComponentName(name);
      }

      var Sub = function VueComponent(options) {
        this._init(options);
      };
      Sub.prototype = Object.create(Super.prototype);
      Sub.prototype.constructor = Sub;
      Sub.cid = cid++;
      Sub.options = mergeOptions(Super.options, extendOptions);
      Sub['super'] = Super;

      // For props and computed properties, we define the proxy getters on
      // the Vue instances at extension time, on the extended prototype. This
      // avoids Object.defineProperty calls for each instance created.
      if (Sub.options.props) {
        initProps$1(Sub);
      }
      if (Sub.options.computed) {
        initComputed$1(Sub);
      }

      // allow further extension/mixin/plugin usage
      Sub.extend = Super.extend;
      Sub.mixin = Super.mixin;
      Sub.use = Super.use;

      // create asset registers, so extended classes
      // can have their private assets too.
      ASSET_TYPES.forEach(function (type) {
        Sub[type] = Super[type];
      });
      // enable recursive self-lookup
      if (name) {
        Sub.options.components[name] = Sub;
      }

      // keep a reference to the super options at extension time.
      // later at instantiation we can check if Super's options have
      // been updated.
      Sub.superOptions = Super.options;
      Sub.extendOptions = extendOptions;
      Sub.sealedOptions = extend({}, Sub.options);

      // cache constructor
      cachedCtors[SuperId] = Sub;
      return Sub;
    };
  }

  function initProps$1(Comp) {
    var props = Comp.options.props;
    for (var key in props) {
      proxy(Comp.prototype, "_props", key);
    }
  }

  function initComputed$1(Comp) {
    var computed = Comp.options.computed;
    for (var key in computed) {
      defineComputed(Comp.prototype, key, computed[key]);
    }
  }

  /*  */

  function initAssetRegisters(Vue) {
    /**
     * Create asset registration methods.
     */
    ASSET_TYPES.forEach(function (type) {
      Vue[type] = function (id, definition) {
        if (!definition) {
          return this.options[type + 's'][id];
        } else {
          /* istanbul ignore if */
          if (type === 'component') {
            validateComponentName(id);
          }
          if (type === 'component' && isPlainObject(definition)) {
            definition.name = definition.name || id;
            definition = this.options._base.extend(definition);
          }
          if (type === 'directive' && typeof definition === 'function') {
            definition = { bind: definition, update: definition };
          }
          this.options[type + 's'][id] = definition;
          return definition;
        }
      };
    });
  }

  /*  */

  function getComponentName(opts) {
    return opts && (opts.Ctor.options.name || opts.tag);
  }

  function matches(pattern, name) {
    if (Array.isArray(pattern)) {
      return pattern.indexOf(name) > -1;
    } else if (typeof pattern === 'string') {
      return pattern.split(',').indexOf(name) > -1;
    } else if (isRegExp(pattern)) {
      return pattern.test(name);
    }
    /* istanbul ignore next */
    return false;
  }

  function pruneCache(keepAliveInstance, filter) {
    var cache = keepAliveInstance.cache;
    var keys = keepAliveInstance.keys;
    var _vnode = keepAliveInstance._vnode;
    for (var key in cache) {
      var cachedNode = cache[key];
      if (cachedNode) {
        var name = getComponentName(cachedNode.componentOptions);
        if (name && !filter(name)) {
          pruneCacheEntry(cache, key, keys, _vnode);
        }
      }
    }
  }

  function pruneCacheEntry(cache, key, keys, current) {
    var cached$$1 = cache[key];
    if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
      cached$$1.componentInstance.$destroy();
    }
    cache[key] = null;
    remove(keys, key);
  }

  var patternTypes = [String, RegExp, Array];

  var KeepAlive = {
    name: 'keep-alive',
    abstract: true,

    props: {
      include: patternTypes,
      exclude: patternTypes,
      max: [String, Number]
    },

    created: function created() {
      this.cache = Object.create(null);
      this.keys = [];
    },

    destroyed: function destroyed() {
      for (var key in this.cache) {
        pruneCacheEntry(this.cache, key, this.keys);
      }
    },

    mounted: function mounted() {
      var this$1 = this;

      this.$watch('include', function (val) {
        pruneCache(this$1, function (name) {
          return matches(val, name);
        });
      });
      this.$watch('exclude', function (val) {
        pruneCache(this$1, function (name) {
          return !matches(val, name);
        });
      });
    },

    render: function render() {
      var slot = this.$slots.default;
      var vnode = getFirstComponentChild(slot);
      var componentOptions = vnode && vnode.componentOptions;
      if (componentOptions) {
        // check pattern
        var name = getComponentName(componentOptions);
        var ref = this;
        var include = ref.include;
        var exclude = ref.exclude;
        if (
        // not included
        include && (!name || !matches(include, name)) ||
        // excluded
        exclude && name && matches(exclude, name)) {
          return vnode;
        }

        var ref$1 = this;
        var cache = ref$1.cache;
        var keys = ref$1.keys;
        var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : '') : vnode.key;
        if (cache[key]) {
          vnode.componentInstance = cache[key].componentInstance;
          // make current key freshest
          remove(keys, key);
          keys.push(key);
        } else {
          cache[key] = vnode;
          keys.push(key);
          // prune oldest entry
          if (this.max && keys.length > parseInt(this.max)) {
            pruneCacheEntry(cache, keys[0], keys, this._vnode);
          }
        }

        vnode.data.keepAlive = true;
      }
      return vnode || slot && slot[0];
    }
  };

  var builtInComponents = {
    KeepAlive: KeepAlive
  };

  /*  */

  function initGlobalAPI(Vue) {
    // config
    var configDef = {};
    configDef.get = function () {
      return config;
    };
    {
      configDef.set = function () {
        warn('Do not replace the Vue.config object, set individual fields instead.');
      };
    }
    Object.defineProperty(Vue, 'config', configDef);

    // exposed util methods.
    // NOTE: these are not considered part of the public API - avoid relying on
    // them unless you are aware of the risk.
    Vue.util = {
      warn: warn,
      extend: extend,
      mergeOptions: mergeOptions,
      defineReactive: defineReactive$$1
    };

    Vue.set = set;
    Vue.delete = del;
    Vue.nextTick = nextTick;

    // 2.6 explicit observable API
    Vue.observable = function (obj) {
      observe(obj);
      return obj;
    };

    Vue.options = Object.create(null);
    ASSET_TYPES.forEach(function (type) {
      Vue.options[type + 's'] = Object.create(null);
    });

    // this is used to identify the "base" constructor to extend all plain-object
    // components with in Weex's multi-instance scenarios.
    Vue.options._base = Vue;

    extend(Vue.options.components, builtInComponents);

    initUse(Vue);
    initMixin$1(Vue);
    initExtend(Vue);
    initAssetRegisters(Vue);
  }

  initGlobalAPI(Vue);

  Object.defineProperty(Vue.prototype, '$isServer', {
    get: isServerRendering
  });

  Object.defineProperty(Vue.prototype, '$ssrContext', {
    get: function get() {
      /* istanbul ignore next */
      return this.$vnode && this.$vnode.ssrContext;
    }
  });

  // expose FunctionalRenderContext for ssr runtime helper installation
  Object.defineProperty(Vue, 'FunctionalRenderContext', {
    value: FunctionalRenderContext
  });

  Vue.version = '2.6.10';

  /*  */

  // these are reserved for web because they are directly compiled away
  // during template compilation
  var isReservedAttr = makeMap('style,class');

  // attributes that should be using props for binding
  var acceptValue = makeMap('input,textarea,option,select,progress');
  var mustUseProp = function mustUseProp(tag, type, attr) {
    return attr === 'value' && acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
  };

  var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

  var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

  var convertEnumeratedValue = function convertEnumeratedValue(key, value) {
    return isFalsyAttrValue(value) || value === 'false' ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value) ? value : 'true';
  };

  var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,translate,' + 'truespeed,typemustmatch,visible');

  var xlinkNS = 'http://www.w3.org/1999/xlink';

  var isXlink = function isXlink(name) {
    return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
  };

  var getXlinkProp = function getXlinkProp(name) {
    return isXlink(name) ? name.slice(6, name.length) : '';
  };

  var isFalsyAttrValue = function isFalsyAttrValue(val) {
    return val == null || val === false;
  };

  /*  */

  function genClassForVnode(vnode) {
    var data = vnode.data;
    var parentNode = vnode;
    var childNode = vnode;
    while (isDef(childNode.componentInstance)) {
      childNode = childNode.componentInstance._vnode;
      if (childNode && childNode.data) {
        data = mergeClassData(childNode.data, data);
      }
    }
    while (isDef(parentNode = parentNode.parent)) {
      if (parentNode && parentNode.data) {
        data = mergeClassData(data, parentNode.data);
      }
    }
    return renderClass(data.staticClass, data.class);
  }

  function mergeClassData(child, parent) {
    return {
      staticClass: concat(child.staticClass, parent.staticClass),
      class: isDef(child.class) ? [child.class, parent.class] : parent.class
    };
  }

  function renderClass(staticClass, dynamicClass) {
    if (isDef(staticClass) || isDef(dynamicClass)) {
      return concat(staticClass, stringifyClass(dynamicClass));
    }
    /* istanbul ignore next */
    return '';
  }

  function concat(a, b) {
    return a ? b ? a + ' ' + b : a : b || '';
  }

  function stringifyClass(value) {
    if (Array.isArray(value)) {
      return stringifyArray(value);
    }
    if (isObject(value)) {
      return stringifyObject(value);
    }
    if (typeof value === 'string') {
      return value;
    }
    /* istanbul ignore next */
    return '';
  }

  function stringifyArray(value) {
    var res = '';
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
      if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
        if (res) {
          res += ' ';
        }
        res += stringified;
      }
    }
    return res;
  }

  function stringifyObject(value) {
    var res = '';
    for (var key in value) {
      if (value[key]) {
        if (res) {
          res += ' ';
        }
        res += key;
      }
    }
    return res;
  }

  /*  */

  var namespaceMap = {
    svg: 'http://www.w3.org/2000/svg',
    math: 'http://www.w3.org/1998/Math/MathML'
  };

  var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot');

  // this map is intentionally selective, only covering SVG elements that may
  // contain child elements.
  var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);

  var isPreTag = function isPreTag(tag) {
    return tag === 'pre';
  };

  var isReservedTag = function isReservedTag(tag) {
    return isHTMLTag(tag) || isSVG(tag);
  };

  function getTagNamespace(tag) {
    if (isSVG(tag)) {
      return 'svg';
    }
    // basic support for MathML
    // note it doesn't support other MathML elements being component roots
    if (tag === 'math') {
      return 'math';
    }
  }

  var unknownElementCache = Object.create(null);
  function isUnknownElement(tag) {
    /* istanbul ignore if */
    if (!inBrowser) {
      return true;
    }
    if (isReservedTag(tag)) {
      return false;
    }
    tag = tag.toLowerCase();
    /* istanbul ignore if */
    if (unknownElementCache[tag] != null) {
      return unknownElementCache[tag];
    }
    var el = document.createElement(tag);
    if (tag.indexOf('-') > -1) {
      // http://stackoverflow.com/a/28210364/1070244
      return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
    } else {
      return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
    }
  }

  var isTextInputType = makeMap('text,number,password,search,email,tel,url');

  /*  */

  /**
   * Query an element selector if it's not an element already.
   */
  function query(el) {
    if (typeof el === 'string') {
      var selected = document.querySelector(el);
      if (!selected) {
        warn('Cannot find element: ' + el);
        return document.createElement('div');
      }
      return selected;
    } else {
      return el;
    }
  }

  /*  */

  function createElement$1(tagName, vnode) {
    var elm = document.createElement(tagName);
    if (tagName !== 'select') {
      return elm;
    }
    // false or null will remove the attribute but undefined will not
    if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
      elm.setAttribute('multiple', 'multiple');
    }
    return elm;
  }

  function createElementNS(namespace, tagName) {
    return document.createElementNS(namespaceMap[namespace], tagName);
  }

  function createTextNode(text) {
    return document.createTextNode(text);
  }

  function createComment(text) {
    return document.createComment(text);
  }

  function insertBefore(parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
  }

  function removeChild(node, child) {
    node.removeChild(child);
  }

  function appendChild(node, child) {
    node.appendChild(child);
  }

  function parentNode(node) {
    return node.parentNode;
  }

  function nextSibling(node) {
    return node.nextSibling;
  }

  function tagName(node) {
    return node.tagName;
  }

  function setTextContent(node, text) {
    node.textContent = text;
  }

  function setStyleScope(node, scopeId) {
    node.setAttribute(scopeId, '');
  }

  var nodeOps = /*#__PURE__*/Object.freeze({
    createElement: createElement$1,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    setStyleScope: setStyleScope
  });

  /*  */

  var ref = {
    create: function create(_, vnode) {
      registerRef(vnode);
    },
    update: function update(oldVnode, vnode) {
      if (oldVnode.data.ref !== vnode.data.ref) {
        registerRef(oldVnode, true);
        registerRef(vnode);
      }
    },
    destroy: function destroy(vnode) {
      registerRef(vnode, true);
    }
  };

  function registerRef(vnode, isRemoval) {
    var key = vnode.data.ref;
    if (!isDef(key)) {
      return;
    }

    var vm = vnode.context;
    var ref = vnode.componentInstance || vnode.elm;
    var refs = vm.$refs;
    if (isRemoval) {
      if (Array.isArray(refs[key])) {
        remove(refs[key], ref);
      } else if (refs[key] === ref) {
        refs[key] = undefined;
      }
    } else {
      if (vnode.data.refInFor) {
        if (!Array.isArray(refs[key])) {
          refs[key] = [ref];
        } else if (refs[key].indexOf(ref) < 0) {
          // $flow-disable-line
          refs[key].push(ref);
        }
      } else {
        refs[key] = ref;
      }
    }
  }

  /**
   * Virtual DOM patching algorithm based on Snabbdom by
   * Simon Friis Vindum (@paldepind)
   * Licensed under the MIT License
   * https://github.com/paldepind/snabbdom/blob/master/LICENSE
   *
   * modified by Evan You (@yyx990803)
   *
   * Not type-checking this because this file is perf-critical and the cost
   * of making flow understand it is not worth it.
   */

  var emptyNode = new VNode('', {}, []);

  var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

  function sameVnode(a, b) {
    return a.key === b.key && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && a.asyncFactory === b.asyncFactory && isUndef(b.asyncFactory.error));
  }

  function sameInputType(a, b) {
    if (a.tag !== 'input') {
      return true;
    }
    var i;
    var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
    var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
    return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
  }

  function createKeyToOldIdx(children, beginIdx, endIdx) {
    var i, key;
    var map = {};
    for (i = beginIdx; i <= endIdx; ++i) {
      key = children[i].key;
      if (isDef(key)) {
        map[key] = i;
      }
    }
    return map;
  }

  function createPatchFunction(backend) {
    var i, j;
    var cbs = {};

    var modules = backend.modules;
    var nodeOps = backend.nodeOps;

    for (i = 0; i < hooks.length; ++i) {
      cbs[hooks[i]] = [];
      for (j = 0; j < modules.length; ++j) {
        if (isDef(modules[j][hooks[i]])) {
          cbs[hooks[i]].push(modules[j][hooks[i]]);
        }
      }
    }

    function emptyNodeAt(elm) {
      return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
    }

    function createRmCb(childElm, listeners) {
      function remove$$1() {
        if (--remove$$1.listeners === 0) {
          removeNode(childElm);
        }
      }
      remove$$1.listeners = listeners;
      return remove$$1;
    }

    function removeNode(el) {
      var parent = nodeOps.parentNode(el);
      // element may have already been removed due to v-html / v-text
      if (isDef(parent)) {
        nodeOps.removeChild(parent, el);
      }
    }

    function isUnknownElement$$1(vnode, inVPre) {
      return !inVPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.some(function (ignore) {
        return isRegExp(ignore) ? ignore.test(vnode.tag) : ignore === vnode.tag;
      })) && config.isUnknownElement(vnode.tag);
    }

    var creatingElmInVPre = 0;

    function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // This vnode was used in a previous render!
        // now it's used as a new node, overwriting its elm would cause
        // potential patch errors down the road when it's used as an insertion
        // reference node. Instead, we clone the node on-demand before creating
        // associated DOM element for it.
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      vnode.isRootInsert = !nested; // for transition enter check
      if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
        return;
      }

      var data = vnode.data;
      var children = vnode.children;
      var tag = vnode.tag;
      if (isDef(tag)) {
        {
          if (data && data.pre) {
            creatingElmInVPre++;
          }
          if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
            warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
          }
        }

        vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
        setScope(vnode);

        /* istanbul ignore if */
        {
          createChildren(vnode, children, insertedVnodeQueue);
          if (isDef(data)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
          }
          insert(parentElm, vnode.elm, refElm);
        }

        if (data && data.pre) {
          creatingElmInVPre--;
        }
      } else if (isTrue(vnode.isComment)) {
        vnode.elm = nodeOps.createComment(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      } else {
        vnode.elm = nodeOps.createTextNode(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      }
    }

    function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
      var i = vnode.data;
      if (isDef(i)) {
        var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
        if (isDef(i = i.hook) && isDef(i = i.init)) {
          i(vnode, false /* hydrating */);
        }
        // after calling the init hook, if the vnode is a child component
        // it should've created a child instance and mounted it. the child
        // component also has set the placeholder vnode's elm.
        // in that case we can just return the element and be done.
        if (isDef(vnode.componentInstance)) {
          initComponent(vnode, insertedVnodeQueue);
          insert(parentElm, vnode.elm, refElm);
          if (isTrue(isReactivated)) {
            reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
          }
          return true;
        }
      }
    }

    function initComponent(vnode, insertedVnodeQueue) {
      if (isDef(vnode.data.pendingInsert)) {
        insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
        vnode.data.pendingInsert = null;
      }
      vnode.elm = vnode.componentInstance.$el;
      if (isPatchable(vnode)) {
        invokeCreateHooks(vnode, insertedVnodeQueue);
        setScope(vnode);
      } else {
        // empty component root.
        // skip all element-related modules except for ref (#3455)
        registerRef(vnode);
        // make sure to invoke the insert hook
        insertedVnodeQueue.push(vnode);
      }
    }

    function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
      var i;
      // hack for #4339: a reactivated component with inner transition
      // does not trigger because the inner node's created hooks are not called
      // again. It's not ideal to involve module-specific logic in here but
      // there doesn't seem to be a better way to do it.
      var innerNode = vnode;
      while (innerNode.componentInstance) {
        innerNode = innerNode.componentInstance._vnode;
        if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
          for (i = 0; i < cbs.activate.length; ++i) {
            cbs.activate[i](emptyNode, innerNode);
          }
          insertedVnodeQueue.push(innerNode);
          break;
        }
      }
      // unlike a newly created component,
      // a reactivated keep-alive component doesn't insert itself
      insert(parentElm, vnode.elm, refElm);
    }

    function insert(parent, elm, ref$$1) {
      if (isDef(parent)) {
        if (isDef(ref$$1)) {
          if (nodeOps.parentNode(ref$$1) === parent) {
            nodeOps.insertBefore(parent, elm, ref$$1);
          }
        } else {
          nodeOps.appendChild(parent, elm);
        }
      }
    }

    function createChildren(vnode, children, insertedVnodeQueue) {
      if (Array.isArray(children)) {
        {
          checkDuplicateKeys(children);
        }
        for (var i = 0; i < children.length; ++i) {
          createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
        }
      } else if (isPrimitive(vnode.text)) {
        nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
      }
    }

    function isPatchable(vnode) {
      while (vnode.componentInstance) {
        vnode = vnode.componentInstance._vnode;
      }
      return isDef(vnode.tag);
    }

    function invokeCreateHooks(vnode, insertedVnodeQueue) {
      for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
        cbs.create[i$1](emptyNode, vnode);
      }
      i = vnode.data.hook; // Reuse variable
      if (isDef(i)) {
        if (isDef(i.create)) {
          i.create(emptyNode, vnode);
        }
        if (isDef(i.insert)) {
          insertedVnodeQueue.push(vnode);
        }
      }
    }

    // set scope id attribute for scoped CSS.
    // this is implemented as a special case to avoid the overhead
    // of going through the normal attribute patching process.
    function setScope(vnode) {
      var i;
      if (isDef(i = vnode.fnScopeId)) {
        nodeOps.setStyleScope(vnode.elm, i);
      } else {
        var ancestor = vnode;
        while (ancestor) {
          if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
            nodeOps.setStyleScope(vnode.elm, i);
          }
          ancestor = ancestor.parent;
        }
      }
      // for slot content they should also get the scopeId from the host instance.
      if (isDef(i = activeInstance) && i !== vnode.context && i !== vnode.fnContext && isDef(i = i.$options._scopeId)) {
        nodeOps.setStyleScope(vnode.elm, i);
      }
    }

    function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
      for (; startIdx <= endIdx; ++startIdx) {
        createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
      }
    }

    function invokeDestroyHook(vnode) {
      var i, j;
      var data = vnode.data;
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.destroy)) {
          i(vnode);
        }
        for (i = 0; i < cbs.destroy.length; ++i) {
          cbs.destroy[i](vnode);
        }
      }
      if (isDef(i = vnode.children)) {
        for (j = 0; j < vnode.children.length; ++j) {
          invokeDestroyHook(vnode.children[j]);
        }
      }
    }

    function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
      for (; startIdx <= endIdx; ++startIdx) {
        var ch = vnodes[startIdx];
        if (isDef(ch)) {
          if (isDef(ch.tag)) {
            removeAndInvokeRemoveHook(ch);
            invokeDestroyHook(ch);
          } else {
            // Text node
            removeNode(ch.elm);
          }
        }
      }
    }

    function removeAndInvokeRemoveHook(vnode, rm) {
      if (isDef(rm) || isDef(vnode.data)) {
        var i;
        var listeners = cbs.remove.length + 1;
        if (isDef(rm)) {
          // we have a recursively passed down rm callback
          // increase the listeners count
          rm.listeners += listeners;
        } else {
          // directly removing
          rm = createRmCb(vnode.elm, listeners);
        }
        // recursively invoke hooks on child component root node
        if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
          removeAndInvokeRemoveHook(i, rm);
        }
        for (i = 0; i < cbs.remove.length; ++i) {
          cbs.remove[i](vnode, rm);
        }
        if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
          i(vnode, rm);
        } else {
          rm();
        }
      } else {
        removeNode(vnode.elm);
      }
    }

    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
      var oldStartIdx = 0;
      var newStartIdx = 0;
      var oldEndIdx = oldCh.length - 1;
      var oldStartVnode = oldCh[0];
      var oldEndVnode = oldCh[oldEndIdx];
      var newEndIdx = newCh.length - 1;
      var newStartVnode = newCh[0];
      var newEndVnode = newCh[newEndIdx];
      var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

      // removeOnly is a special flag used only by <transition-group>
      // to ensure removed elements stay in correct relative positions
      // during leaving transitions
      var canMove = !removeOnly;

      {
        checkDuplicateKeys(newCh);
      }

      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (isUndef(oldStartVnode)) {
          oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
        } else if (isUndef(oldEndVnode)) {
          oldEndVnode = oldCh[--oldEndIdx];
        } else if (sameVnode(oldStartVnode, newStartVnode)) {
          patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          oldStartVnode = oldCh[++oldStartIdx];
          newStartVnode = newCh[++newStartIdx];
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
          patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          oldEndVnode = oldCh[--oldEndIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newEndVnode)) {
          // Vnode moved right
          patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
          oldStartVnode = oldCh[++oldStartIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldEndVnode, newStartVnode)) {
          // Vnode moved left
          patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
          oldEndVnode = oldCh[--oldEndIdx];
          newStartVnode = newCh[++newStartIdx];
        } else {
          if (isUndef(oldKeyToIdx)) {
            oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
          }
          idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
          if (isUndef(idxInOld)) {
            // New element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          } else {
            vnodeToMove = oldCh[idxInOld];
            if (sameVnode(vnodeToMove, newStartVnode)) {
              patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
              oldCh[idxInOld] = undefined;
              canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
            } else {
              // same key but different element. treat as new element
              createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
            }
          }
          newStartVnode = newCh[++newStartIdx];
        }
      }
      if (oldStartIdx > oldEndIdx) {
        refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
        addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
      } else if (newStartIdx > newEndIdx) {
        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
      }
    }

    function checkDuplicateKeys(children) {
      var seenKeys = {};
      for (var i = 0; i < children.length; i++) {
        var vnode = children[i];
        var key = vnode.key;
        if (isDef(key)) {
          if (seenKeys[key]) {
            warn("Duplicate keys detected: '" + key + "'. This may cause an update error.", vnode.context);
          } else {
            seenKeys[key] = true;
          }
        }
      }
    }

    function findIdxInOld(node, oldCh, start, end) {
      for (var i = start; i < end; i++) {
        var c = oldCh[i];
        if (isDef(c) && sameVnode(node, c)) {
          return i;
        }
      }
    }

    function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index, removeOnly) {
      if (oldVnode === vnode) {
        return;
      }

      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // clone reused vnode
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      var elm = vnode.elm = oldVnode.elm;

      if (isTrue(oldVnode.isAsyncPlaceholder)) {
        if (isDef(vnode.asyncFactory.resolved)) {
          hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
        } else {
          vnode.isAsyncPlaceholder = true;
        }
        return;
      }

      // reuse element for static trees.
      // note we only do this if the vnode is cloned -
      // if the new node is not cloned it means the render functions have been
      // reset by the hot-reload-api and we need to do a proper re-render.
      if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
        vnode.componentInstance = oldVnode.componentInstance;
        return;
      }

      var i;
      var data = vnode.data;
      if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
        i(oldVnode, vnode);
      }

      var oldCh = oldVnode.children;
      var ch = vnode.children;
      if (isDef(data) && isPatchable(vnode)) {
        for (i = 0; i < cbs.update.length; ++i) {
          cbs.update[i](oldVnode, vnode);
        }
        if (isDef(i = data.hook) && isDef(i = i.update)) {
          i(oldVnode, vnode);
        }
      }
      if (isUndef(vnode.text)) {
        if (isDef(oldCh) && isDef(ch)) {
          if (oldCh !== ch) {
            updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
          }
        } else if (isDef(ch)) {
          {
            checkDuplicateKeys(ch);
          }
          if (isDef(oldVnode.text)) {
            nodeOps.setTextContent(elm, '');
          }
          addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
        } else if (isDef(oldCh)) {
          removeVnodes(elm, oldCh, 0, oldCh.length - 1);
        } else if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }
      } else if (oldVnode.text !== vnode.text) {
        nodeOps.setTextContent(elm, vnode.text);
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
          i(oldVnode, vnode);
        }
      }
    }

    function invokeInsertHook(vnode, queue, initial) {
      // delay insert hooks for component root nodes, invoke them after the
      // element is really inserted
      if (isTrue(initial) && isDef(vnode.parent)) {
        vnode.parent.data.pendingInsert = queue;
      } else {
        for (var i = 0; i < queue.length; ++i) {
          queue[i].data.hook.insert(queue[i]);
        }
      }
    }

    var hydrationBailed = false;
    // list of modules that can skip create hook during hydration because they
    // are already rendered on the client or has no need for initialization
    // Note: style is excluded because it relies on initial clone for future
    // deep updates (#7063).
    var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

    // Note: this is a browser-only function so we can assume elms are DOM nodes.
    function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
      var i;
      var tag = vnode.tag;
      var data = vnode.data;
      var children = vnode.children;
      inVPre = inVPre || data && data.pre;
      vnode.elm = elm;

      if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
        vnode.isAsyncPlaceholder = true;
        return true;
      }
      // assert node match
      {
        if (!assertNodeMatch(elm, vnode, inVPre)) {
          return false;
        }
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.init)) {
          i(vnode, true /* hydrating */);
        }
        if (isDef(i = vnode.componentInstance)) {
          // child component. it should have hydrated its own tree.
          initComponent(vnode, insertedVnodeQueue);
          return true;
        }
      }
      if (isDef(tag)) {
        if (isDef(children)) {
          // empty element, allow client to pick up and populate children
          if (!elm.hasChildNodes()) {
            createChildren(vnode, children, insertedVnodeQueue);
          } else {
            // v-html and domProps: innerHTML
            if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
              if (i !== elm.innerHTML) {
                /* istanbul ignore if */
                if (typeof console !== 'undefined' && !hydrationBailed) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('server innerHTML: ', i);
                  console.warn('client innerHTML: ', elm.innerHTML);
                }
                return false;
              }
            } else {
              // iterate and compare children lists
              var childrenMatch = true;
              var childNode = elm.firstChild;
              for (var i$1 = 0; i$1 < children.length; i$1++) {
                if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                  childrenMatch = false;
                  break;
                }
                childNode = childNode.nextSibling;
              }
              // if childNode is not null, it means the actual childNodes list is
              // longer than the virtual children list.
              if (!childrenMatch || childNode) {
                /* istanbul ignore if */
                if (typeof console !== 'undefined' && !hydrationBailed) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
                }
                return false;
              }
            }
          }
        }
        if (isDef(data)) {
          var fullInvoke = false;
          for (var key in data) {
            if (!isRenderedModule(key)) {
              fullInvoke = true;
              invokeCreateHooks(vnode, insertedVnodeQueue);
              break;
            }
          }
          if (!fullInvoke && data['class']) {
            // ensure collecting deps for deep class bindings for future updates
            traverse(data['class']);
          }
        }
      } else if (elm.data !== vnode.text) {
        elm.data = vnode.text;
      }
      return true;
    }

    function assertNodeMatch(node, vnode, inVPre) {
      if (isDef(vnode.tag)) {
        return vnode.tag.indexOf('vue-component') === 0 || !isUnknownElement$$1(vnode, inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
      } else {
        return node.nodeType === (vnode.isComment ? 8 : 3);
      }
    }

    return function patch(oldVnode, vnode, hydrating, removeOnly) {
      if (isUndef(vnode)) {
        if (isDef(oldVnode)) {
          invokeDestroyHook(oldVnode);
        }
        return;
      }

      var isInitialPatch = false;
      var insertedVnodeQueue = [];

      if (isUndef(oldVnode)) {
        // empty mount (likely as component), create new root element
        isInitialPatch = true;
        createElm(vnode, insertedVnodeQueue);
      } else {
        var isRealElement = isDef(oldVnode.nodeType);
        if (!isRealElement && sameVnode(oldVnode, vnode)) {
          // patch existing root node
          patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
        } else {
          if (isRealElement) {
            // mounting to a real element
            // check if this is server-rendered content and if we can perform
            // a successful hydration.
            if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
              oldVnode.removeAttribute(SSR_ATTR);
              hydrating = true;
            }
            if (isTrue(hydrating)) {
              if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                invokeInsertHook(vnode, insertedVnodeQueue, true);
                return oldVnode;
              } else {
                warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
              }
            }
            // either not server-rendered, or hydration failed.
            // create an empty node and replace it
            oldVnode = emptyNodeAt(oldVnode);
          }

          // replacing existing element
          var oldElm = oldVnode.elm;
          var parentElm = nodeOps.parentNode(oldElm);

          // create new node
          createElm(vnode, insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm, nodeOps.nextSibling(oldElm));

          // update parent placeholder node element, recursively
          if (isDef(vnode.parent)) {
            var ancestor = vnode.parent;
            var patchable = isPatchable(vnode);
            while (ancestor) {
              for (var i = 0; i < cbs.destroy.length; ++i) {
                cbs.destroy[i](ancestor);
              }
              ancestor.elm = vnode.elm;
              if (patchable) {
                for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                  cbs.create[i$1](emptyNode, ancestor);
                }
                // #6513
                // invoke insert hooks that may have been merged by create hooks.
                // e.g. for directives that uses the "inserted" hook.
                var insert = ancestor.data.hook.insert;
                if (insert.merged) {
                  // start at index 1 to avoid re-invoking component mounted hook
                  for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                    insert.fns[i$2]();
                  }
                }
              } else {
                registerRef(ancestor);
              }
              ancestor = ancestor.parent;
            }
          }

          // destroy old node
          if (isDef(parentElm)) {
            removeVnodes(parentElm, [oldVnode], 0, 0);
          } else if (isDef(oldVnode.tag)) {
            invokeDestroyHook(oldVnode);
          }
        }
      }

      invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
      return vnode.elm;
    };
  }

  /*  */

  var directives = {
    create: updateDirectives,
    update: updateDirectives,
    destroy: function unbindDirectives(vnode) {
      updateDirectives(vnode, emptyNode);
    }
  };

  function updateDirectives(oldVnode, vnode) {
    if (oldVnode.data.directives || vnode.data.directives) {
      _update(oldVnode, vnode);
    }
  }

  function _update(oldVnode, vnode) {
    var isCreate = oldVnode === emptyNode;
    var isDestroy = vnode === emptyNode;
    var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
    var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

    var dirsWithInsert = [];
    var dirsWithPostpatch = [];

    var key, oldDir, dir;
    for (key in newDirs) {
      oldDir = oldDirs[key];
      dir = newDirs[key];
      if (!oldDir) {
        // new directive, bind
        callHook$1(dir, 'bind', vnode, oldVnode);
        if (dir.def && dir.def.inserted) {
          dirsWithInsert.push(dir);
        }
      } else {
        // existing directive, update
        dir.oldValue = oldDir.value;
        dir.oldArg = oldDir.arg;
        callHook$1(dir, 'update', vnode, oldVnode);
        if (dir.def && dir.def.componentUpdated) {
          dirsWithPostpatch.push(dir);
        }
      }
    }

    if (dirsWithInsert.length) {
      var callInsert = function callInsert() {
        for (var i = 0; i < dirsWithInsert.length; i++) {
          callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
        }
      };
      if (isCreate) {
        mergeVNodeHook(vnode, 'insert', callInsert);
      } else {
        callInsert();
      }
    }

    if (dirsWithPostpatch.length) {
      mergeVNodeHook(vnode, 'postpatch', function () {
        for (var i = 0; i < dirsWithPostpatch.length; i++) {
          callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
        }
      });
    }

    if (!isCreate) {
      for (key in oldDirs) {
        if (!newDirs[key]) {
          // no longer present, unbind
          callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
        }
      }
    }
  }

  var emptyModifiers = Object.create(null);

  function normalizeDirectives$1(dirs, vm) {
    var res = Object.create(null);
    if (!dirs) {
      // $flow-disable-line
      return res;
    }
    var i, dir;
    for (i = 0; i < dirs.length; i++) {
      dir = dirs[i];
      if (!dir.modifiers) {
        // $flow-disable-line
        dir.modifiers = emptyModifiers;
      }
      res[getRawDirName(dir)] = dir;
      dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
    }
    // $flow-disable-line
    return res;
  }

  function getRawDirName(dir) {
    return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.');
  }

  function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
    var fn = dir.def && dir.def[hook];
    if (fn) {
      try {
        fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
      } catch (e) {
        handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
      }
    }
  }

  var baseModules = [ref, directives];

  /*  */

  function updateAttrs(oldVnode, vnode) {
    var opts = vnode.componentOptions;
    if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
      return;
    }
    if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
      return;
    }
    var key, cur, old;
    var elm = vnode.elm;
    var oldAttrs = oldVnode.data.attrs || {};
    var attrs = vnode.data.attrs || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(attrs.__ob__)) {
      attrs = vnode.data.attrs = extend({}, attrs);
    }

    for (key in attrs) {
      cur = attrs[key];
      old = oldAttrs[key];
      if (old !== cur) {
        setAttr(elm, key, cur);
      }
    }
    // #4391: in IE9, setting type can reset value for input[type=radio]
    // #6666: IE/Edge forces progress value down to 1 before setting a max
    /* istanbul ignore if */
    if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
      setAttr(elm, 'value', attrs.value);
    }
    for (key in oldAttrs) {
      if (isUndef(attrs[key])) {
        if (isXlink(key)) {
          elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
        } else if (!isEnumeratedAttr(key)) {
          elm.removeAttribute(key);
        }
      }
    }
  }

  function setAttr(el, key, value) {
    if (el.tagName.indexOf('-') > -1) {
      baseSetAttr(el, key, value);
    } else if (isBooleanAttr(key)) {
      // set attribute for blank value
      // e.g. <option disabled>Select one</option>
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        // technically allowfullscreen is a boolean attribute for <iframe>,
        // but Flash expects a value of "true" when used on <embed> tag
        value = key === 'allowfullscreen' && el.tagName === 'EMBED' ? 'true' : key;
        el.setAttribute(key, value);
      }
    } else if (isEnumeratedAttr(key)) {
      el.setAttribute(key, convertEnumeratedValue(key, value));
    } else if (isXlink(key)) {
      if (isFalsyAttrValue(value)) {
        el.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else {
        el.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      baseSetAttr(el, key, value);
    }
  }

  function baseSetAttr(el, key, value) {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // #7138: IE10 & 11 fires input event when setting placeholder on
      // <textarea>... block the first input event and remove the blocker
      // immediately.
      /* istanbul ignore if */
      if (isIE && !isIE9 && el.tagName === 'TEXTAREA' && key === 'placeholder' && value !== '' && !el.__ieph) {
        var blocker = function blocker(e) {
          e.stopImmediatePropagation();
          el.removeEventListener('input', blocker);
        };
        el.addEventListener('input', blocker);
        // $flow-disable-line
        el.__ieph = true; /* IE placeholder patched */
      }
      el.setAttribute(key, value);
    }
  }

  var attrs = {
    create: updateAttrs,
    update: updateAttrs
  };

  /*  */

  function updateClass(oldVnode, vnode) {
    var el = vnode.elm;
    var data = vnode.data;
    var oldData = oldVnode.data;
    if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) {
      return;
    }

    var cls = genClassForVnode(vnode);

    // handle transition classes
    var transitionClass = el._transitionClasses;
    if (isDef(transitionClass)) {
      cls = concat(cls, stringifyClass(transitionClass));
    }

    // set the class
    if (cls !== el._prevClass) {
      el.setAttribute('class', cls);
      el._prevClass = cls;
    }
  }

  var klass = {
    create: updateClass,
    update: updateClass
  };

  /*  */

  var validDivisionCharRE = /[\w).+\-_$\]]/;

  function parseFilters(exp) {
    var inSingle = false;
    var inDouble = false;
    var inTemplateString = false;
    var inRegex = false;
    var curly = 0;
    var square = 0;
    var paren = 0;
    var lastFilterIndex = 0;
    var c, prev, i, expression, filters;

    for (i = 0; i < exp.length; i++) {
      prev = c;
      c = exp.charCodeAt(i);
      if (inSingle) {
        if (c === 0x27 && prev !== 0x5C) {
          inSingle = false;
        }
      } else if (inDouble) {
        if (c === 0x22 && prev !== 0x5C) {
          inDouble = false;
        }
      } else if (inTemplateString) {
        if (c === 0x60 && prev !== 0x5C) {
          inTemplateString = false;
        }
      } else if (inRegex) {
        if (c === 0x2f && prev !== 0x5C) {
          inRegex = false;
        }
      } else if (c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C && exp.charCodeAt(i - 1) !== 0x7C && !curly && !square && !paren) {
        if (expression === undefined) {
          // first filter, end of expression
          lastFilterIndex = i + 1;
          expression = exp.slice(0, i).trim();
        } else {
          pushFilter();
        }
      } else {
        switch (c) {
          case 0x22:
            inDouble = true;break; // "
          case 0x27:
            inSingle = true;break; // '
          case 0x60:
            inTemplateString = true;break; // `
          case 0x28:
            paren++;break; // (
          case 0x29:
            paren--;break; // )
          case 0x5B:
            square++;break; // [
          case 0x5D:
            square--;break; // ]
          case 0x7B:
            curly++;break; // {
          case 0x7D:
            curly--;break; // }
        }
        if (c === 0x2f) {
          // /
          var j = i - 1;
          var p = void 0;
          // find first non-whitespace prev char
          for (; j >= 0; j--) {
            p = exp.charAt(j);
            if (p !== ' ') {
              break;
            }
          }
          if (!p || !validDivisionCharRE.test(p)) {
            inRegex = true;
          }
        }
      }
    }

    if (expression === undefined) {
      expression = exp.slice(0, i).trim();
    } else if (lastFilterIndex !== 0) {
      pushFilter();
    }

    function pushFilter() {
      (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
      lastFilterIndex = i + 1;
    }

    if (filters) {
      for (i = 0; i < filters.length; i++) {
        expression = wrapFilter(expression, filters[i]);
      }
    }

    return expression;
  }

  function wrapFilter(exp, filter) {
    var i = filter.indexOf('(');
    if (i < 0) {
      // _f: resolveFilter
      return "_f(\"" + filter + "\")(" + exp + ")";
    } else {
      var name = filter.slice(0, i);
      var args = filter.slice(i + 1);
      return "_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args);
    }
  }

  /*  */

  /* eslint-disable no-unused-vars */
  function baseWarn(msg, range) {
    console.error("[Vue compiler]: " + msg);
  }
  /* eslint-enable no-unused-vars */

  function pluckModuleFunction(modules, key) {
    return modules ? modules.map(function (m) {
      return m[key];
    }).filter(function (_) {
      return _;
    }) : [];
  }

  function addProp(el, name, value, range, dynamic) {
    (el.props || (el.props = [])).push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
    el.plain = false;
  }

  function addAttr(el, name, value, range, dynamic) {
    var attrs = dynamic ? el.dynamicAttrs || (el.dynamicAttrs = []) : el.attrs || (el.attrs = []);
    attrs.push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
    el.plain = false;
  }

  // add a raw attr (use this in preTransforms)
  function addRawAttr(el, name, value, range) {
    el.attrsMap[name] = value;
    el.attrsList.push(rangeSetItem({ name: name, value: value }, range));
  }

  function addDirective(el, name, rawName, value, arg, isDynamicArg, modifiers, range) {
    (el.directives || (el.directives = [])).push(rangeSetItem({
      name: name,
      rawName: rawName,
      value: value,
      arg: arg,
      isDynamicArg: isDynamicArg,
      modifiers: modifiers
    }, range));
    el.plain = false;
  }

  function prependModifierMarker(symbol, name, dynamic) {
    return dynamic ? "_p(" + name + ",\"" + symbol + "\")" : symbol + name; // mark the event as captured
  }

  function addHandler(el, name, value, modifiers, important, warn, range, dynamic) {
    modifiers = modifiers || emptyObject;
    // warn prevent and passive modifier
    /* istanbul ignore if */
    if (warn && modifiers.prevent && modifiers.passive) {
      warn('passive and prevent can\'t be used together. ' + 'Passive handler can\'t prevent default event.', range);
    }

    // normalize click.right and click.middle since they don't actually fire
    // this is technically browser-specific, but at least for now browsers are
    // the only target envs that have right/middle clicks.
    if (modifiers.right) {
      if (dynamic) {
        name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
      } else if (name === 'click') {
        name = 'contextmenu';
        delete modifiers.right;
      }
    } else if (modifiers.middle) {
      if (dynamic) {
        name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
      } else if (name === 'click') {
        name = 'mouseup';
      }
    }

    // check capture modifier
    if (modifiers.capture) {
      delete modifiers.capture;
      name = prependModifierMarker('!', name, dynamic);
    }
    if (modifiers.once) {
      delete modifiers.once;
      name = prependModifierMarker('~', name, dynamic);
    }
    /* istanbul ignore if */
    if (modifiers.passive) {
      delete modifiers.passive;
      name = prependModifierMarker('&', name, dynamic);
    }

    var events;
    if (modifiers.native) {
      delete modifiers.native;
      events = el.nativeEvents || (el.nativeEvents = {});
    } else {
      events = el.events || (el.events = {});
    }

    var newHandler = rangeSetItem({ value: value.trim(), dynamic: dynamic }, range);
    if (modifiers !== emptyObject) {
      newHandler.modifiers = modifiers;
    }

    var handlers = events[name];
    /* istanbul ignore if */
    if (Array.isArray(handlers)) {
      important ? handlers.unshift(newHandler) : handlers.push(newHandler);
    } else if (handlers) {
      events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
    } else {
      events[name] = newHandler;
    }

    el.plain = false;
  }

  function getRawBindingAttr(el, name) {
    return el.rawAttrsMap[':' + name] || el.rawAttrsMap['v-bind:' + name] || el.rawAttrsMap[name];
  }

  function getBindingAttr(el, name, getStatic) {
    var dynamicValue = getAndRemoveAttr(el, ':' + name) || getAndRemoveAttr(el, 'v-bind:' + name);
    if (dynamicValue != null) {
      return parseFilters(dynamicValue);
    } else if (getStatic !== false) {
      var staticValue = getAndRemoveAttr(el, name);
      if (staticValue != null) {
        return JSON.stringify(staticValue);
      }
    }
  }

  // note: this only removes the attr from the Array (attrsList) so that it
  // doesn't get processed by processAttrs.
  // By default it does NOT remove it from the map (attrsMap) because the map is
  // needed during codegen.
  function getAndRemoveAttr(el, name, removeFromMap) {
    var val;
    if ((val = el.attrsMap[name]) != null) {
      var list = el.attrsList;
      for (var i = 0, l = list.length; i < l; i++) {
        if (list[i].name === name) {
          list.splice(i, 1);
          break;
        }
      }
    }
    if (removeFromMap) {
      delete el.attrsMap[name];
    }
    return val;
  }

  function getAndRemoveAttrByRegex(el, name) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      var attr = list[i];
      if (name.test(attr.name)) {
        list.splice(i, 1);
        return attr;
      }
    }
  }

  function rangeSetItem(item, range) {
    if (range) {
      if (range.start != null) {
        item.start = range.start;
      }
      if (range.end != null) {
        item.end = range.end;
      }
    }
    return item;
  }

  /*  */

  /**
   * Cross-platform code generation for component v-model
   */
  function genComponentModel(el, value, modifiers) {
    var ref = modifiers || {};
    var number = ref.number;
    var trim = ref.trim;

    var baseValueExpression = '$$v';
    var valueExpression = baseValueExpression;
    if (trim) {
      valueExpression = "(typeof " + baseValueExpression + " === 'string'" + "? " + baseValueExpression + ".trim()" + ": " + baseValueExpression + ")";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }
    var assignment = genAssignmentCode(value, valueExpression);

    el.model = {
      value: "(" + value + ")",
      expression: JSON.stringify(value),
      callback: "function (" + baseValueExpression + ") {" + assignment + "}"
    };
  }

  /**
   * Cross-platform codegen helper for generating v-model value assignment code.
   */
  function genAssignmentCode(value, assignment) {
    var res = parseModel(value);
    if (res.key === null) {
      return value + "=" + assignment;
    } else {
      return "$set(" + res.exp + ", " + res.key + ", " + assignment + ")";
    }
  }

  /**
   * Parse a v-model expression into a base path and a final key segment.
   * Handles both dot-path and possible square brackets.
   *
   * Possible cases:
   *
   * - test
   * - test[key]
   * - test[test1[key]]
   * - test["a"][key]
   * - xxx.test[a[a].test1[key]]
   * - test.xxx.a["asa"][test1[key]]
   *
   */

  var len, str, chr, index$1, expressionPos, expressionEndPos;

  function parseModel(val) {
    // Fix https://github.com/vuejs/vue/pull/7730
    // allow v-model="obj.val " (trailing whitespace)
    val = val.trim();
    len = val.length;

    if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
      index$1 = val.lastIndexOf('.');
      if (index$1 > -1) {
        return {
          exp: val.slice(0, index$1),
          key: '"' + val.slice(index$1 + 1) + '"'
        };
      } else {
        return {
          exp: val,
          key: null
        };
      }
    }

    str = val;
    index$1 = expressionPos = expressionEndPos = 0;

    while (!eof()) {
      chr = next();
      /* istanbul ignore if */
      if (isStringStart(chr)) {
        parseString(chr);
      } else if (chr === 0x5B) {
        parseBracket(chr);
      }
    }

    return {
      exp: val.slice(0, expressionPos),
      key: val.slice(expressionPos + 1, expressionEndPos)
    };
  }

  function next() {
    return str.charCodeAt(++index$1);
  }

  function eof() {
    return index$1 >= len;
  }

  function isStringStart(chr) {
    return chr === 0x22 || chr === 0x27;
  }

  function parseBracket(chr) {
    var inBracket = 1;
    expressionPos = index$1;
    while (!eof()) {
      chr = next();
      if (isStringStart(chr)) {
        parseString(chr);
        continue;
      }
      if (chr === 0x5B) {
        inBracket++;
      }
      if (chr === 0x5D) {
        inBracket--;
      }
      if (inBracket === 0) {
        expressionEndPos = index$1;
        break;
      }
    }
  }

  function parseString(chr) {
    var stringQuote = chr;
    while (!eof()) {
      chr = next();
      if (chr === stringQuote) {
        break;
      }
    }
  }

  /*  */

  var warn$1;

  // in some cases, the event used has to be determined at runtime
  // so we used some reserved tokens during compile.
  var RANGE_TOKEN = '__r';
  var CHECKBOX_RADIO_TOKEN = '__c';

  function model(el, dir, _warn) {
    warn$1 = _warn;
    var value = dir.value;
    var modifiers = dir.modifiers;
    var tag = el.tag;
    var type = el.attrsMap.type;

    {
      // inputs with type="file" are read only and setting the input's
      // value will throw an error.
      if (tag === 'input' && type === 'file') {
        warn$1("<" + el.tag + " v-model=\"" + value + "\" type=\"file\">:\n" + "File inputs are read only. Use a v-on:change listener instead.", el.rawAttrsMap['v-model']);
      }
    }

    if (el.component) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime
      return false;
    } else if (tag === 'select') {
      genSelect(el, value, modifiers);
    } else if (tag === 'input' && type === 'checkbox') {
      genCheckboxModel(el, value, modifiers);
    } else if (tag === 'input' && type === 'radio') {
      genRadioModel(el, value, modifiers);
    } else if (tag === 'input' || tag === 'textarea') {
      genDefaultModel(el, value, modifiers);
    } else if (!config.isReservedTag(tag)) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime
      return false;
    } else {
      warn$1("<" + el.tag + " v-model=\"" + value + "\">: " + "v-model is not supported on this element type. " + 'If you are working with contenteditable, it\'s recommended to ' + 'wrap a library dedicated for that purpose inside a custom component.', el.rawAttrsMap['v-model']);
    }

    // ensure runtime directive metadata
    return true;
  }

  function genCheckboxModel(el, value, modifiers) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
    var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
    addProp(el, 'checked', "Array.isArray(" + value + ")" + "?_i(" + value + "," + valueBinding + ")>-1" + (trueValueBinding === 'true' ? ":(" + value + ")" : ":_q(" + value + "," + trueValueBinding + ")"));
    addHandler(el, 'change', "var $$a=" + value + "," + '$$el=$event.target,' + "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" + 'if(Array.isArray($$a)){' + "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," + '$$i=_i($$a,$$v);' + "if($$el.checked){$$i<0&&(" + genAssignmentCode(value, '$$a.concat([$$v])') + ")}" + "else{$$i>-1&&(" + genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))') + ")}" + "}else{" + genAssignmentCode(value, '$$c') + "}", null, true);
  }

  function genRadioModel(el, value, modifiers) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    valueBinding = number ? "_n(" + valueBinding + ")" : valueBinding;
    addProp(el, 'checked', "_q(" + value + "," + valueBinding + ")");
    addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
  }

  function genSelect(el, value, modifiers) {
    var number = modifiers && modifiers.number;
    var selectedVal = "Array.prototype.filter" + ".call($event.target.options,function(o){return o.selected})" + ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" + "return " + (number ? '_n(val)' : 'val') + "})";

    var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
    var code = "var $$selectedVal = " + selectedVal + ";";
    code = code + " " + genAssignmentCode(value, assignment);
    addHandler(el, 'change', code, null, true);
  }

  function genDefaultModel(el, value, modifiers) {
    var type = el.attrsMap.type;

    // warn if v-bind:value conflicts with v-model
    // except for inputs with v-bind:type
    {
      var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
      var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
      if (value$1 && !typeBinding) {
        var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
        warn$1(binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " + 'because the latter already expands to a value binding internally', el.rawAttrsMap[binding]);
      }
    }

    var ref = modifiers || {};
    var lazy = ref.lazy;
    var number = ref.number;
    var trim = ref.trim;
    var needCompositionGuard = !lazy && type !== 'range';
    var event = lazy ? 'change' : type === 'range' ? RANGE_TOKEN : 'input';

    var valueExpression = '$event.target.value';
    if (trim) {
      valueExpression = "$event.target.value.trim()";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }

    var code = genAssignmentCode(value, valueExpression);
    if (needCompositionGuard) {
      code = "if($event.target.composing)return;" + code;
    }

    addProp(el, 'value', "(" + value + ")");
    addHandler(el, event, code, null, true);
    if (trim || number) {
      addHandler(el, 'blur', '$forceUpdate()');
    }
  }

  /*  */

  // normalize v-model event tokens that can only be determined at runtime.
  // it's important to place the event as the first in the array because
  // the whole point is ensuring the v-model callback gets called before
  // user-attached handlers.
  function normalizeEvents(on) {
    /* istanbul ignore if */
    if (isDef(on[RANGE_TOKEN])) {
      // IE input[type=range] only supports `change` event
      var event = isIE ? 'change' : 'input';
      on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
      delete on[RANGE_TOKEN];
    }
    // This was originally intended to fix #4521 but no longer necessary
    // after 2.5. Keeping it for backwards compat with generated code from < 2.4
    /* istanbul ignore if */
    if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
      on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
      delete on[CHECKBOX_RADIO_TOKEN];
    }
  }

  var target$1;

  function createOnceHandler$1(event, handler, capture) {
    var _target = target$1; // save current target element in closure
    return function onceHandler() {
      var res = handler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, onceHandler, capture, _target);
      }
    };
  }

  // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
  // implementation and does not fire microtasks in between event propagation, so
  // safe to exclude.
  var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

  function add$1(name, handler, capture, passive) {
    // async edge case #6566: inner click event triggers patch, event handler
    // attached to outer element during patch, and triggered again. This
    // happens because browsers fire microtask ticks between event propagation.
    // the solution is simple: we save the timestamp when a handler is attached,
    // and the handler would only fire if the event passed to it was fired
    // AFTER it was attached.
    if (useMicrotaskFix) {
      var attachedTimestamp = currentFlushTimestamp;
      var original = handler;
      handler = original._wrapper = function (e) {
        if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document) {
          return original.apply(this, arguments);
        }
      };
    }
    target$1.addEventListener(name, handler, supportsPassive ? { capture: capture, passive: passive } : capture);
  }

  function remove$2(name, handler, capture, _target) {
    (_target || target$1).removeEventListener(name, handler._wrapper || handler, capture);
  }

  function updateDOMListeners(oldVnode, vnode) {
    if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
      return;
    }
    var on = vnode.data.on || {};
    var oldOn = oldVnode.data.on || {};
    target$1 = vnode.elm;
    normalizeEvents(on);
    updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
    target$1 = undefined;
  }

  var events = {
    create: updateDOMListeners,
    update: updateDOMListeners
  };

  /*  */

  var svgContainer;

  function updateDOMProps(oldVnode, vnode) {
    if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
      return;
    }
    var key, cur;
    var elm = vnode.elm;
    var oldProps = oldVnode.data.domProps || {};
    var props = vnode.data.domProps || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(props.__ob__)) {
      props = vnode.data.domProps = extend({}, props);
    }

    for (key in oldProps) {
      if (!(key in props)) {
        elm[key] = '';
      }
    }

    for (key in props) {
      cur = props[key];
      // ignore children if the node has textContent or innerHTML,
      // as these will throw away existing DOM nodes and cause removal errors
      // on subsequent patches (#3360)
      if (key === 'textContent' || key === 'innerHTML') {
        if (vnode.children) {
          vnode.children.length = 0;
        }
        if (cur === oldProps[key]) {
          continue;
        }
        // #6601 work around Chrome version <= 55 bug where single textNode
        // replaced by innerHTML/textContent retains its parentNode property
        if (elm.childNodes.length === 1) {
          elm.removeChild(elm.childNodes[0]);
        }
      }

      if (key === 'value' && elm.tagName !== 'PROGRESS') {
        // store value as _value as well since
        // non-string values will be stringified
        elm._value = cur;
        // avoid resetting cursor position when value is the same
        var strCur = isUndef(cur) ? '' : String(cur);
        if (shouldUpdateValue(elm, strCur)) {
          elm.value = strCur;
        }
      } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
        // IE doesn't support innerHTML for SVG elements
        svgContainer = svgContainer || document.createElement('div');
        svgContainer.innerHTML = "<svg>" + cur + "</svg>";
        var svg = svgContainer.firstChild;
        while (elm.firstChild) {
          elm.removeChild(elm.firstChild);
        }
        while (svg.firstChild) {
          elm.appendChild(svg.firstChild);
        }
      } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecesarry `checked` update.
      cur !== oldProps[key]) {
        // some property updates can throw
        // e.g. `value` on <progress> w/ non-finite value
        try {
          elm[key] = cur;
        } catch (e) {}
      }
    }
  }

  // check platforms/web/util/attrs.js acceptValue


  function shouldUpdateValue(elm, checkVal) {
    return !elm.composing && (elm.tagName === 'OPTION' || isNotInFocusAndDirty(elm, checkVal) || isDirtyWithModifiers(elm, checkVal));
  }

  function isNotInFocusAndDirty(elm, checkVal) {
    // return true when textbox (.number and .trim) loses focus and its value is
    // not equal to the updated value
    var notInFocus = true;
    // #6157
    // work around IE bug when accessing document.activeElement in an iframe
    try {
      notInFocus = document.activeElement !== elm;
    } catch (e) {}
    return notInFocus && elm.value !== checkVal;
  }

  function isDirtyWithModifiers(elm, newVal) {
    var value = elm.value;
    var modifiers = elm._vModifiers; // injected by v-model runtime
    if (isDef(modifiers)) {
      if (modifiers.number) {
        return toNumber(value) !== toNumber(newVal);
      }
      if (modifiers.trim) {
        return value.trim() !== newVal.trim();
      }
    }
    return value !== newVal;
  }

  var domProps = {
    create: updateDOMProps,
    update: updateDOMProps
  };

  /*  */

  var parseStyleText = cached(function (cssText) {
    var res = {};
    var listDelimiter = /;(?![^(]*\))/g;
    var propertyDelimiter = /:(.+)/;
    cssText.split(listDelimiter).forEach(function (item) {
      if (item) {
        var tmp = item.split(propertyDelimiter);
        tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return res;
  });

  // merge static and dynamic style data on the same vnode
  function normalizeStyleData(data) {
    var style = normalizeStyleBinding(data.style);
    // static style is pre-processed into an object during compilation
    // and is always a fresh object, so it's safe to merge into it
    return data.staticStyle ? extend(data.staticStyle, style) : style;
  }

  // normalize possible array / string values into Object
  function normalizeStyleBinding(bindingStyle) {
    if (Array.isArray(bindingStyle)) {
      return toObject(bindingStyle);
    }
    if (typeof bindingStyle === 'string') {
      return parseStyleText(bindingStyle);
    }
    return bindingStyle;
  }

  /**
   * parent component style should be after child's
   * so that parent component's style could override it
   */
  function getStyle(vnode, checkChild) {
    var res = {};
    var styleData;

    if (checkChild) {
      var childNode = vnode;
      while (childNode.componentInstance) {
        childNode = childNode.componentInstance._vnode;
        if (childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))) {
          extend(res, styleData);
        }
      }
    }

    if (styleData = normalizeStyleData(vnode.data)) {
      extend(res, styleData);
    }

    var parentNode = vnode;
    while (parentNode = parentNode.parent) {
      if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
        extend(res, styleData);
      }
    }
    return res;
  }

  /*  */

  var cssVarRE = /^--/;
  var importantRE = /\s*!important$/;
  var setProp = function setProp(el, name, val) {
    /* istanbul ignore if */
    if (cssVarRE.test(name)) {
      el.style.setProperty(name, val);
    } else if (importantRE.test(val)) {
      el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
    } else {
      var normalizedName = normalize(name);
      if (Array.isArray(val)) {
        // Support values array created by autoprefixer, e.g.
        // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
        // Set them one by one, and the browser will only set those it can recognize
        for (var i = 0, len = val.length; i < len; i++) {
          el.style[normalizedName] = val[i];
        }
      } else {
        el.style[normalizedName] = val;
      }
    }
  };

  var vendorNames = ['Webkit', 'Moz', 'ms'];

  var emptyStyle;
  var normalize = cached(function (prop) {
    emptyStyle = emptyStyle || document.createElement('div').style;
    prop = camelize(prop);
    if (prop !== 'filter' && prop in emptyStyle) {
      return prop;
    }
    var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
    for (var i = 0; i < vendorNames.length; i++) {
      var name = vendorNames[i] + capName;
      if (name in emptyStyle) {
        return name;
      }
    }
  });

  function updateStyle(oldVnode, vnode) {
    var data = vnode.data;
    var oldData = oldVnode.data;

    if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
      return;
    }

    var cur, name;
    var el = vnode.elm;
    var oldStaticStyle = oldData.staticStyle;
    var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

    // if static style exists, stylebinding already merged into it when doing normalizeStyleData
    var oldStyle = oldStaticStyle || oldStyleBinding;

    var style = normalizeStyleBinding(vnode.data.style) || {};

    // store normalized style under a different key for next diff
    // make sure to clone it if it's reactive, since the user likely wants
    // to mutate it.
    vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;

    var newStyle = getStyle(vnode, true);

    for (name in oldStyle) {
      if (isUndef(newStyle[name])) {
        setProp(el, name, '');
      }
    }
    for (name in newStyle) {
      cur = newStyle[name];
      if (cur !== oldStyle[name]) {
        // ie9 setting to null has no effect, must use empty string
        setProp(el, name, cur == null ? '' : cur);
      }
    }
  }

  var style = {
    create: updateStyle,
    update: updateStyle
  };

  /*  */

  var whitespaceRE = /\s+/;

  /**
   * Add class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function addClass(el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return;
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function (c) {
          return el.classList.add(c);
        });
      } else {
        el.classList.add(cls);
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      if (cur.indexOf(' ' + cls + ' ') < 0) {
        el.setAttribute('class', (cur + cls).trim());
      }
    }
  }

  /**
   * Remove class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function removeClass(el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return;
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function (c) {
          return el.classList.remove(c);
        });
      } else {
        el.classList.remove(cls);
      }
      if (!el.classList.length) {
        el.removeAttribute('class');
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      var tar = ' ' + cls + ' ';
      while (cur.indexOf(tar) >= 0) {
        cur = cur.replace(tar, ' ');
      }
      cur = cur.trim();
      if (cur) {
        el.setAttribute('class', cur);
      } else {
        el.removeAttribute('class');
      }
    }
  }

  /*  */

  function resolveTransition(def$$1) {
    if (!def$$1) {
      return;
    }
    /* istanbul ignore else */
    if ((typeof def$$1 === 'undefined' ? 'undefined' : _typeof(def$$1)) === 'object') {
      var res = {};
      if (def$$1.css !== false) {
        extend(res, autoCssTransition(def$$1.name || 'v'));
      }
      extend(res, def$$1);
      return res;
    } else if (typeof def$$1 === 'string') {
      return autoCssTransition(def$$1);
    }
  }

  var autoCssTransition = cached(function (name) {
    return {
      enterClass: name + "-enter",
      enterToClass: name + "-enter-to",
      enterActiveClass: name + "-enter-active",
      leaveClass: name + "-leave",
      leaveToClass: name + "-leave-to",
      leaveActiveClass: name + "-leave-active"
    };
  });

  var hasTransition = inBrowser && !isIE9;
  var TRANSITION = 'transition';
  var ANIMATION = 'animation';

  // Transition property/event sniffing
  var transitionProp = 'transition';
  var transitionEndEvent = 'transitionend';
  var animationProp = 'animation';
  var animationEndEvent = 'animationend';
  if (hasTransition) {
    /* istanbul ignore if */
    if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
      transitionProp = 'WebkitTransition';
      transitionEndEvent = 'webkitTransitionEnd';
    }
    if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
      animationProp = 'WebkitAnimation';
      animationEndEvent = 'webkitAnimationEnd';
    }
  }

  // binding to window is necessary to make hot reload work in IE in strict mode
  var raf = inBrowser ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : /* istanbul ignore next */function (fn) {
    return fn();
  };

  function nextFrame(fn) {
    raf(function () {
      raf(fn);
    });
  }

  function addTransitionClass(el, cls) {
    var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
    if (transitionClasses.indexOf(cls) < 0) {
      transitionClasses.push(cls);
      addClass(el, cls);
    }
  }

  function removeTransitionClass(el, cls) {
    if (el._transitionClasses) {
      remove(el._transitionClasses, cls);
    }
    removeClass(el, cls);
  }

  function whenTransitionEnds(el, expectedType, cb) {
    var ref = getTransitionInfo(el, expectedType);
    var type = ref.type;
    var timeout = ref.timeout;
    var propCount = ref.propCount;
    if (!type) {
      return cb();
    }
    var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
    var ended = 0;
    var end = function end() {
      el.removeEventListener(event, onEnd);
      cb();
    };
    var onEnd = function onEnd(e) {
      if (e.target === el) {
        if (++ended >= propCount) {
          end();
        }
      }
    };
    setTimeout(function () {
      if (ended < propCount) {
        end();
      }
    }, timeout + 1);
    el.addEventListener(event, onEnd);
  }

  var transformRE = /\b(transform|all)(,|$)/;

  function getTransitionInfo(el, expectedType) {
    var styles = window.getComputedStyle(el);
    // JSDOM may return undefined for transition properties
    var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
    var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
    var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
    var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
    var animationTimeout = getTimeout(animationDelays, animationDurations);

    var type;
    var timeout = 0;
    var propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
      if (transitionTimeout > 0) {
        type = TRANSITION;
        timeout = transitionTimeout;
        propCount = transitionDurations.length;
      }
    } else if (expectedType === ANIMATION) {
      if (animationTimeout > 0) {
        type = ANIMATION;
        timeout = animationTimeout;
        propCount = animationDurations.length;
      }
    } else {
      timeout = Math.max(transitionTimeout, animationTimeout);
      type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
      propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
    }
    var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
    return {
      type: type,
      timeout: timeout,
      propCount: propCount,
      hasTransform: hasTransform
    };
  }

  function getTimeout(delays, durations) {
    /* istanbul ignore next */
    while (delays.length < durations.length) {
      delays = delays.concat(delays);
    }

    return Math.max.apply(null, durations.map(function (d, i) {
      return toMs(d) + toMs(delays[i]);
    }));
  }

  // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
  // in a locale-dependent way, using a comma instead of a dot.
  // If comma is not replaced with a dot, the input will be rounded down (i.e. acting
  // as a floor function) causing unexpected behaviors
  function toMs(s) {
    return Number(s.slice(0, -1).replace(',', '.')) * 1000;
  }

  /*  */

  function enter(vnode, toggleDisplay) {
    var el = vnode.elm;

    // call leave callback now
    if (isDef(el._leaveCb)) {
      el._leaveCb.cancelled = true;
      el._leaveCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data)) {
      return;
    }

    /* istanbul ignore if */
    if (isDef(el._enterCb) || el.nodeType !== 1) {
      return;
    }

    var css = data.css;
    var type = data.type;
    var enterClass = data.enterClass;
    var enterToClass = data.enterToClass;
    var enterActiveClass = data.enterActiveClass;
    var appearClass = data.appearClass;
    var appearToClass = data.appearToClass;
    var appearActiveClass = data.appearActiveClass;
    var beforeEnter = data.beforeEnter;
    var enter = data.enter;
    var afterEnter = data.afterEnter;
    var enterCancelled = data.enterCancelled;
    var beforeAppear = data.beforeAppear;
    var appear = data.appear;
    var afterAppear = data.afterAppear;
    var appearCancelled = data.appearCancelled;
    var duration = data.duration;

    // activeInstance will always be the <transition> component managing this
    // transition. One edge case to check is when the <transition> is placed
    // as the root node of a child component. In that case we need to check
    // <transition>'s parent for appear check.
    var context = activeInstance;
    var transitionNode = activeInstance.$vnode;
    while (transitionNode && transitionNode.parent) {
      context = transitionNode.context;
      transitionNode = transitionNode.parent;
    }

    var isAppear = !context._isMounted || !vnode.isRootInsert;

    if (isAppear && !appear && appear !== '') {
      return;
    }

    var startClass = isAppear && appearClass ? appearClass : enterClass;
    var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
    var toClass = isAppear && appearToClass ? appearToClass : enterToClass;

    var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
    var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
    var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
    var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;

    var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);

    if (explicitEnterDuration != null) {
      checkDuration(explicitEnterDuration, 'enter', vnode);
    }

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(enterHook);

    var cb = el._enterCb = once(function () {
      if (expectsCSS) {
        removeTransitionClass(el, toClass);
        removeTransitionClass(el, activeClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, startClass);
        }
        enterCancelledHook && enterCancelledHook(el);
      } else {
        afterEnterHook && afterEnterHook(el);
      }
      el._enterCb = null;
    });

    if (!vnode.data.show) {
      // remove pending leave element on enter by injecting an insert hook
      mergeVNodeHook(vnode, 'insert', function () {
        var parent = el.parentNode;
        var pendingNode = parent && parent._pending && parent._pending[vnode.key];
        if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
          pendingNode.elm._leaveCb();
        }
        enterHook && enterHook(el, cb);
      });
    }

    // start enter transition
    beforeEnterHook && beforeEnterHook(el);
    if (expectsCSS) {
      addTransitionClass(el, startClass);
      addTransitionClass(el, activeClass);
      nextFrame(function () {
        removeTransitionClass(el, startClass);
        if (!cb.cancelled) {
          addTransitionClass(el, toClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitEnterDuration)) {
              setTimeout(cb, explicitEnterDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }

    if (vnode.data.show) {
      toggleDisplay && toggleDisplay();
      enterHook && enterHook(el, cb);
    }

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }

  function leave(vnode, rm) {
    var el = vnode.elm;

    // call enter callback now
    if (isDef(el._enterCb)) {
      el._enterCb.cancelled = true;
      el._enterCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data) || el.nodeType !== 1) {
      return rm();
    }

    /* istanbul ignore if */
    if (isDef(el._leaveCb)) {
      return;
    }

    var css = data.css;
    var type = data.type;
    var leaveClass = data.leaveClass;
    var leaveToClass = data.leaveToClass;
    var leaveActiveClass = data.leaveActiveClass;
    var beforeLeave = data.beforeLeave;
    var leave = data.leave;
    var afterLeave = data.afterLeave;
    var leaveCancelled = data.leaveCancelled;
    var delayLeave = data.delayLeave;
    var duration = data.duration;

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(leave);

    var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);

    if (isDef(explicitLeaveDuration)) {
      checkDuration(explicitLeaveDuration, 'leave', vnode);
    }

    var cb = el._leaveCb = once(function () {
      if (el.parentNode && el.parentNode._pending) {
        el.parentNode._pending[vnode.key] = null;
      }
      if (expectsCSS) {
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, leaveClass);
        }
        leaveCancelled && leaveCancelled(el);
      } else {
        rm();
        afterLeave && afterLeave(el);
      }
      el._leaveCb = null;
    });

    if (delayLeave) {
      delayLeave(performLeave);
    } else {
      performLeave();
    }

    function performLeave() {
      // the delayed leave may have already been cancelled
      if (cb.cancelled) {
        return;
      }
      // record leaving element
      if (!vnode.data.show && el.parentNode) {
        (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
      }
      beforeLeave && beforeLeave(el);
      if (expectsCSS) {
        addTransitionClass(el, leaveClass);
        addTransitionClass(el, leaveActiveClass);
        nextFrame(function () {
          removeTransitionClass(el, leaveClass);
          if (!cb.cancelled) {
            addTransitionClass(el, leaveToClass);
            if (!userWantsControl) {
              if (isValidDuration(explicitLeaveDuration)) {
                setTimeout(cb, explicitLeaveDuration);
              } else {
                whenTransitionEnds(el, type, cb);
              }
            }
          }
        });
      }
      leave && leave(el, cb);
      if (!expectsCSS && !userWantsControl) {
        cb();
      }
    }
  }

  // only used in dev mode
  function checkDuration(val, name, vnode) {
    if (typeof val !== 'number') {
      warn("<transition> explicit " + name + " duration is not a valid number - " + "got " + JSON.stringify(val) + ".", vnode.context);
    } else if (isNaN(val)) {
      warn("<transition> explicit " + name + " duration is NaN - " + 'the duration expression might be incorrect.', vnode.context);
    }
  }

  function isValidDuration(val) {
    return typeof val === 'number' && !isNaN(val);
  }

  /**
   * Normalize a transition hook's argument length. The hook may be:
   * - a merged hook (invoker) with the original in .fns
   * - a wrapped component method (check ._length)
   * - a plain function (.length)
   */
  function getHookArgumentsLength(fn) {
    if (isUndef(fn)) {
      return false;
    }
    var invokerFns = fn.fns;
    if (isDef(invokerFns)) {
      // invoker
      return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
    } else {
      return (fn._length || fn.length) > 1;
    }
  }

  function _enter(_, vnode) {
    if (vnode.data.show !== true) {
      enter(vnode);
    }
  }

  var transition = inBrowser ? {
    create: _enter,
    activate: _enter,
    remove: function remove$$1(vnode, rm) {
      /* istanbul ignore else */
      if (vnode.data.show !== true) {
        leave(vnode, rm);
      } else {
        rm();
      }
    }
  } : {};

  var platformModules = [attrs, klass, events, domProps, style, transition];

  /*  */

  // the directive module should be applied last, after all
  // built-in modules have been applied.
  var modules = platformModules.concat(baseModules);

  var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

  /**
   * Not type checking this file because flow doesn't like attaching
   * properties to Elements.
   */

  /* istanbul ignore if */
  if (isIE9) {
    // http://www.matts411.com/post/internet-explorer-9-oninput/
    document.addEventListener('selectionchange', function () {
      var el = document.activeElement;
      if (el && el.vmodel) {
        trigger(el, 'input');
      }
    });
  }

  var directive = {
    inserted: function inserted(el, binding, vnode, oldVnode) {
      if (vnode.tag === 'select') {
        // #6903
        if (oldVnode.elm && !oldVnode.elm._vOptions) {
          mergeVNodeHook(vnode, 'postpatch', function () {
            directive.componentUpdated(el, binding, vnode);
          });
        } else {
          setSelected(el, binding, vnode.context);
        }
        el._vOptions = [].map.call(el.options, getValue);
      } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
        el._vModifiers = binding.modifiers;
        if (!binding.modifiers.lazy) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
          // Safari < 10.2 & UIWebView doesn't fire compositionend when
          // switching focus before confirming composition choice
          // this also fixes the issue where some browsers e.g. iOS Chrome
          // fires "change" instead of "input" on autocomplete.
          el.addEventListener('change', onCompositionEnd);
          /* istanbul ignore if */
          if (isIE9) {
            el.vmodel = true;
          }
        }
      }
    },

    componentUpdated: function componentUpdated(el, binding, vnode) {
      if (vnode.tag === 'select') {
        setSelected(el, binding, vnode.context);
        // in case the options rendered by v-for have changed,
        // it's possible that the value is out-of-sync with the rendered options.
        // detect such cases and filter out values that no longer has a matching
        // option in the DOM.
        var prevOptions = el._vOptions;
        var curOptions = el._vOptions = [].map.call(el.options, getValue);
        if (curOptions.some(function (o, i) {
          return !looseEqual(o, prevOptions[i]);
        })) {
          // trigger change event if
          // no matching option found for at least one value
          var needReset = el.multiple ? binding.value.some(function (v) {
            return hasNoMatchingOption(v, curOptions);
          }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
          if (needReset) {
            trigger(el, 'change');
          }
        }
      }
    }
  };

  function setSelected(el, binding, vm) {
    actuallySetSelected(el, binding, vm);
    /* istanbul ignore if */
    if (isIE || isEdge) {
      setTimeout(function () {
        actuallySetSelected(el, binding, vm);
      }, 0);
    }
  }

  function actuallySetSelected(el, binding, vm) {
    var value = binding.value;
    var isMultiple = el.multiple;
    if (isMultiple && !Array.isArray(value)) {
      warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
      return;
    }
    var selected, option;
    for (var i = 0, l = el.options.length; i < l; i++) {
      option = el.options[i];
      if (isMultiple) {
        selected = looseIndexOf(value, getValue(option)) > -1;
        if (option.selected !== selected) {
          option.selected = selected;
        }
      } else {
        if (looseEqual(getValue(option), value)) {
          if (el.selectedIndex !== i) {
            el.selectedIndex = i;
          }
          return;
        }
      }
    }
    if (!isMultiple) {
      el.selectedIndex = -1;
    }
  }

  function hasNoMatchingOption(value, options) {
    return options.every(function (o) {
      return !looseEqual(o, value);
    });
  }

  function getValue(option) {
    return '_value' in option ? option._value : option.value;
  }

  function onCompositionStart(e) {
    e.target.composing = true;
  }

  function onCompositionEnd(e) {
    // prevent triggering an input event for no reason
    if (!e.target.composing) {
      return;
    }
    e.target.composing = false;
    trigger(e.target, 'input');
  }

  function trigger(el, type) {
    var e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
  }

  /*  */

  // recursively search for possible transition defined inside the component root
  function locateNode(vnode) {
    return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
  }

  var show = {
    bind: function bind(el, ref, vnode) {
      var value = ref.value;

      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      var originalDisplay = el.__vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display;
      if (value && transition$$1) {
        vnode.data.show = true;
        enter(vnode, function () {
          el.style.display = originalDisplay;
        });
      } else {
        el.style.display = value ? originalDisplay : 'none';
      }
    },

    update: function update(el, ref, vnode) {
      var value = ref.value;
      var oldValue = ref.oldValue;

      /* istanbul ignore if */
      if (!value === !oldValue) {
        return;
      }
      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      if (transition$$1) {
        vnode.data.show = true;
        if (value) {
          enter(vnode, function () {
            el.style.display = el.__vOriginalDisplay;
          });
        } else {
          leave(vnode, function () {
            el.style.display = 'none';
          });
        }
      } else {
        el.style.display = value ? el.__vOriginalDisplay : 'none';
      }
    },

    unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
      if (!isDestroy) {
        el.style.display = el.__vOriginalDisplay;
      }
    }
  };

  var platformDirectives = {
    model: directive,
    show: show
  };

  /*  */

  var transitionProps = {
    name: String,
    appear: Boolean,
    css: Boolean,
    mode: String,
    type: String,
    enterClass: String,
    leaveClass: String,
    enterToClass: String,
    leaveToClass: String,
    enterActiveClass: String,
    leaveActiveClass: String,
    appearClass: String,
    appearActiveClass: String,
    appearToClass: String,
    duration: [Number, String, Object]
  };

  // in case the child is also an abstract component, e.g. <keep-alive>
  // we want to recursively retrieve the real component to be rendered
  function getRealChild(vnode) {
    var compOptions = vnode && vnode.componentOptions;
    if (compOptions && compOptions.Ctor.options.abstract) {
      return getRealChild(getFirstComponentChild(compOptions.children));
    } else {
      return vnode;
    }
  }

  function extractTransitionData(comp) {
    var data = {};
    var options = comp.$options;
    // props
    for (var key in options.propsData) {
      data[key] = comp[key];
    }
    // events.
    // extract listeners and pass them directly to the transition methods
    var listeners = options._parentListeners;
    for (var key$1 in listeners) {
      data[camelize(key$1)] = listeners[key$1];
    }
    return data;
  }

  function placeholder(h, rawChild) {
    if (/\d-keep-alive$/.test(rawChild.tag)) {
      return h('keep-alive', {
        props: rawChild.componentOptions.propsData
      });
    }
  }

  function hasParentTransition(vnode) {
    while (vnode = vnode.parent) {
      if (vnode.data.transition) {
        return true;
      }
    }
  }

  function isSameChild(child, oldChild) {
    return oldChild.key === child.key && oldChild.tag === child.tag;
  }

  var isNotTextNode = function isNotTextNode(c) {
    return c.tag || isAsyncPlaceholder(c);
  };

  var isVShowDirective = function isVShowDirective(d) {
    return d.name === 'show';
  };

  var Transition = {
    name: 'transition',
    props: transitionProps,
    abstract: true,

    render: function render(h) {
      var this$1 = this;

      var children = this.$slots.default;
      if (!children) {
        return;
      }

      // filter out text nodes (possible whitespaces)
      children = children.filter(isNotTextNode);
      /* istanbul ignore if */
      if (!children.length) {
        return;
      }

      // warn multiple elements
      if (children.length > 1) {
        warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.', this.$parent);
      }

      var mode = this.mode;

      // warn invalid mode
      if (mode && mode !== 'in-out' && mode !== 'out-in') {
        warn('invalid <transition> mode: ' + mode, this.$parent);
      }

      var rawChild = children[0];

      // if this is a component root node and the component's
      // parent container node also has transition, skip.
      if (hasParentTransition(this.$vnode)) {
        return rawChild;
      }

      // apply transition data to child
      // use getRealChild() to ignore abstract components e.g. keep-alive
      var child = getRealChild(rawChild);
      /* istanbul ignore if */
      if (!child) {
        return rawChild;
      }

      if (this._leaving) {
        return placeholder(h, rawChild);
      }

      // ensure a key that is unique to the vnode type and to this transition
      // component instance. This key will be used to remove pending leaving nodes
      // during entering.
      var id = "__transition-" + this._uid + "-";
      child.key = child.key == null ? child.isComment ? id + 'comment' : id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;

      var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
      var oldRawChild = this._vnode;
      var oldChild = getRealChild(oldRawChild);

      // mark v-show
      // so that the transition module can hand over the control to the directive
      if (child.data.directives && child.data.directives.some(isVShowDirective)) {
        child.data.show = true;
      }

      if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)) {
        // replace old child transition data with fresh one
        // important for dynamic transitions!
        var oldData = oldChild.data.transition = extend({}, data);
        // handle transition mode
        if (mode === 'out-in') {
          // return placeholder node and queue update when leave finishes
          this._leaving = true;
          mergeVNodeHook(oldData, 'afterLeave', function () {
            this$1._leaving = false;
            this$1.$forceUpdate();
          });
          return placeholder(h, rawChild);
        } else if (mode === 'in-out') {
          if (isAsyncPlaceholder(child)) {
            return oldRawChild;
          }
          var delayedLeave;
          var performLeave = function performLeave() {
            delayedLeave();
          };
          mergeVNodeHook(data, 'afterEnter', performLeave);
          mergeVNodeHook(data, 'enterCancelled', performLeave);
          mergeVNodeHook(oldData, 'delayLeave', function (leave) {
            delayedLeave = leave;
          });
        }
      }

      return rawChild;
    }
  };

  /*  */

  var props = extend({
    tag: String,
    moveClass: String
  }, transitionProps);

  delete props.mode;

  var TransitionGroup = {
    props: props,

    beforeMount: function beforeMount() {
      var this$1 = this;

      var update = this._update;
      this._update = function (vnode, hydrating) {
        var restoreActiveInstance = setActiveInstance(this$1);
        // force removing pass
        this$1.__patch__(this$1._vnode, this$1.kept, false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
        );
        this$1._vnode = this$1.kept;
        restoreActiveInstance();
        update.call(this$1, vnode, hydrating);
      };
    },

    render: function render(h) {
      var tag = this.tag || this.$vnode.data.tag || 'span';
      var map = Object.create(null);
      var prevChildren = this.prevChildren = this.children;
      var rawChildren = this.$slots.default || [];
      var children = this.children = [];
      var transitionData = extractTransitionData(this);

      for (var i = 0; i < rawChildren.length; i++) {
        var c = rawChildren[i];
        if (c.tag) {
          if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
            children.push(c);
            map[c.key] = c;(c.data || (c.data = {})).transition = transitionData;
          } else {
            var opts = c.componentOptions;
            var name = opts ? opts.Ctor.options.name || opts.tag || '' : c.tag;
            warn("<transition-group> children must be keyed: <" + name + ">");
          }
        }
      }

      if (prevChildren) {
        var kept = [];
        var removed = [];
        for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
          var c$1 = prevChildren[i$1];
          c$1.data.transition = transitionData;
          c$1.data.pos = c$1.elm.getBoundingClientRect();
          if (map[c$1.key]) {
            kept.push(c$1);
          } else {
            removed.push(c$1);
          }
        }
        this.kept = h(tag, null, kept);
        this.removed = removed;
      }

      return h(tag, null, children);
    },

    updated: function updated() {
      var children = this.prevChildren;
      var moveClass = this.moveClass || (this.name || 'v') + '-move';
      if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
        return;
      }

      // we divide the work into three loops to avoid mixing DOM reads and writes
      // in each iteration - which helps prevent layout thrashing.
      children.forEach(callPendingCbs);
      children.forEach(recordPosition);
      children.forEach(applyTranslation);

      // force reflow to put everything in position
      // assign to this to avoid being removed in tree-shaking
      // $flow-disable-line
      this._reflow = document.body.offsetHeight;

      children.forEach(function (c) {
        if (c.data.moved) {
          var el = c.elm;
          var s = el.style;
          addTransitionClass(el, moveClass);
          s.transform = s.WebkitTransform = s.transitionDuration = '';
          el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
            if (e && e.target !== el) {
              return;
            }
            if (!e || /transform$/.test(e.propertyName)) {
              el.removeEventListener(transitionEndEvent, cb);
              el._moveCb = null;
              removeTransitionClass(el, moveClass);
            }
          });
        }
      });
    },

    methods: {
      hasMove: function hasMove(el, moveClass) {
        /* istanbul ignore if */
        if (!hasTransition) {
          return false;
        }
        /* istanbul ignore if */
        if (this._hasMove) {
          return this._hasMove;
        }
        // Detect whether an element with the move class applied has
        // CSS transitions. Since the element may be inside an entering
        // transition at this very moment, we make a clone of it and remove
        // all other transition classes applied to ensure only the move class
        // is applied.
        var clone = el.cloneNode();
        if (el._transitionClasses) {
          el._transitionClasses.forEach(function (cls) {
            removeClass(clone, cls);
          });
        }
        addClass(clone, moveClass);
        clone.style.display = 'none';
        this.$el.appendChild(clone);
        var info = getTransitionInfo(clone);
        this.$el.removeChild(clone);
        return this._hasMove = info.hasTransform;
      }
    }
  };

  function callPendingCbs(c) {
    /* istanbul ignore if */
    if (c.elm._moveCb) {
      c.elm._moveCb();
    }
    /* istanbul ignore if */
    if (c.elm._enterCb) {
      c.elm._enterCb();
    }
  }

  function recordPosition(c) {
    c.data.newPos = c.elm.getBoundingClientRect();
  }

  function applyTranslation(c) {
    var oldPos = c.data.pos;
    var newPos = c.data.newPos;
    var dx = oldPos.left - newPos.left;
    var dy = oldPos.top - newPos.top;
    if (dx || dy) {
      c.data.moved = true;
      var s = c.elm.style;
      s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
      s.transitionDuration = '0s';
    }
  }

  var platformComponents = {
    Transition: Transition,
    TransitionGroup: TransitionGroup
  };

  /*  */

  // install platform specific utils
  Vue.config.mustUseProp = mustUseProp;
  Vue.config.isReservedTag = isReservedTag;
  Vue.config.isReservedAttr = isReservedAttr;
  Vue.config.getTagNamespace = getTagNamespace;
  Vue.config.isUnknownElement = isUnknownElement;

  // install platform runtime directives & components
  extend(Vue.options.directives, platformDirectives);
  extend(Vue.options.components, platformComponents);

  // install platform patch function
  Vue.prototype.__patch__ = inBrowser ? patch : noop;

  // public mount method
  Vue.prototype.$mount = function (el, hydrating) {
    el = el && inBrowser ? query(el) : undefined;
    return mountComponent(this, el, hydrating);
  };

  // devtools global hook
  /* istanbul ignore next */
  if (inBrowser) {
    setTimeout(function () {
      if (config.devtools) {
        if (devtools) {
          devtools.emit('init', Vue);
        } else {
          console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
        }
      }
      if (config.productionTip !== false && typeof console !== 'undefined') {
        console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
      }
    }, 0);
  }

  /*  */

  var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

  var buildRegex = cached(function (delimiters) {
    var open = delimiters[0].replace(regexEscapeRE, '\\$&');
    var close = delimiters[1].replace(regexEscapeRE, '\\$&');
    return new RegExp(open + '((?:.|\\n)+?)' + close, 'g');
  });

  function parseText(text, delimiters) {
    var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
    if (!tagRE.test(text)) {
      return;
    }
    var tokens = [];
    var rawTokens = [];
    var lastIndex = tagRE.lastIndex = 0;
    var match, index, tokenValue;
    while (match = tagRE.exec(text)) {
      index = match.index;
      // push text token
      if (index > lastIndex) {
        rawTokens.push(tokenValue = text.slice(lastIndex, index));
        tokens.push(JSON.stringify(tokenValue));
      }
      // tag token
      var exp = parseFilters(match[1].trim());
      tokens.push("_s(" + exp + ")");
      rawTokens.push({ '@binding': exp });
      lastIndex = index + match[0].length;
    }
    if (lastIndex < text.length) {
      rawTokens.push(tokenValue = text.slice(lastIndex));
      tokens.push(JSON.stringify(tokenValue));
    }
    return {
      expression: tokens.join('+'),
      tokens: rawTokens
    };
  }

  /*  */

  function transformNode(el, options) {
    var warn = options.warn || baseWarn;
    var staticClass = getAndRemoveAttr(el, 'class');
    if (staticClass) {
      var res = parseText(staticClass, options.delimiters);
      if (res) {
        warn("class=\"" + staticClass + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div class="{{ val }}">, use <div :class="val">.', el.rawAttrsMap['class']);
      }
    }
    if (staticClass) {
      el.staticClass = JSON.stringify(staticClass);
    }
    var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
    if (classBinding) {
      el.classBinding = classBinding;
    }
  }

  function genData(el) {
    var data = '';
    if (el.staticClass) {
      data += "staticClass:" + el.staticClass + ",";
    }
    if (el.classBinding) {
      data += "class:" + el.classBinding + ",";
    }
    return data;
  }

  var klass$1 = {
    staticKeys: ['staticClass'],
    transformNode: transformNode,
    genData: genData
  };

  /*  */

  function transformNode$1(el, options) {
    var warn = options.warn || baseWarn;
    var staticStyle = getAndRemoveAttr(el, 'style');
    if (staticStyle) {
      /* istanbul ignore if */
      {
        var res = parseText(staticStyle, options.delimiters);
        if (res) {
          warn("style=\"" + staticStyle + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div style="{{ val }}">, use <div :style="val">.', el.rawAttrsMap['style']);
        }
      }
      el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
    }

    var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
    if (styleBinding) {
      el.styleBinding = styleBinding;
    }
  }

  function genData$1(el) {
    var data = '';
    if (el.staticStyle) {
      data += "staticStyle:" + el.staticStyle + ",";
    }
    if (el.styleBinding) {
      data += "style:(" + el.styleBinding + "),";
    }
    return data;
  }

  var style$1 = {
    staticKeys: ['staticStyle'],
    transformNode: transformNode$1,
    genData: genData$1
  };

  /*  */

  var decoder;

  var he = {
    decode: function decode(html) {
      decoder = decoder || document.createElement('div');
      decoder.innerHTML = html;
      return decoder.textContent;
    }
  };

  /*  */

  var isUnaryTag = makeMap('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' + 'link,meta,param,source,track,wbr');

  // Elements that you can, intentionally, leave open
  // (and which close themselves)
  var canBeLeftOpenTag = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source');

  // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
  // Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
  var isNonPhrasingTag = makeMap('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' + 'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' + 'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' + 'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' + 'title,tr,track');

  /**
   * Not type-checking this file because it's mostly vendor code.
   */

  // Regular Expressions for parsing tags and attributes
  var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + unicodeRegExp.source + "]*";
  var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
  var startTagOpen = new RegExp("^<" + qnameCapture);
  var startTagClose = /^\s*(\/?)>/;
  var endTag = new RegExp("^<\\/" + qnameCapture + "[^>]*>");
  var doctype = /^<!DOCTYPE [^>]+>/i;
  // #7298: escape - to avoid being pased as HTML comment when inlined in page
  var comment = /^<!\--/;
  var conditionalComment = /^<!\[/;

  // Special Elements (can contain anything)
  var isPlainTextElement = makeMap('script,style,textarea', true);
  var reCache = {};

  var decodingMap = {
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&amp;': '&',
    '&#10;': '\n',
    '&#9;': '\t',
    '&#39;': "'"
  };
  var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
  var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;

  // #5992
  var isIgnoreNewlineTag = makeMap('pre,textarea', true);
  var shouldIgnoreFirstNewline = function shouldIgnoreFirstNewline(tag, html) {
    return tag && isIgnoreNewlineTag(tag) && html[0] === '\n';
  };

  function decodeAttr(value, shouldDecodeNewlines) {
    var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
    return value.replace(re, function (match) {
      return decodingMap[match];
    });
  }

  function parseHTML(html, options) {
    var stack = [];
    var expectHTML = options.expectHTML;
    var isUnaryTag$$1 = options.isUnaryTag || no;
    var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
    var index = 0;
    var last, lastTag;
    while (html) {
      last = html;
      // Make sure we're not in a plaintext content element like script/style
      if (!lastTag || !isPlainTextElement(lastTag)) {
        var textEnd = html.indexOf('<');
        if (textEnd === 0) {
          // Comment:
          if (comment.test(html)) {
            var commentEnd = html.indexOf('-->');

            if (commentEnd >= 0) {
              if (options.shouldKeepComment) {
                options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
              }
              advance(commentEnd + 3);
              continue;
            }
          }

          // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
          if (conditionalComment.test(html)) {
            var conditionalEnd = html.indexOf(']>');

            if (conditionalEnd >= 0) {
              advance(conditionalEnd + 2);
              continue;
            }
          }

          // Doctype:
          var doctypeMatch = html.match(doctype);
          if (doctypeMatch) {
            advance(doctypeMatch[0].length);
            continue;
          }

          // End tag:
          var endTagMatch = html.match(endTag);
          if (endTagMatch) {
            var curIndex = index;
            advance(endTagMatch[0].length);
            parseEndTag(endTagMatch[1], curIndex, index);
            continue;
          }

          // Start tag:
          var startTagMatch = parseStartTag();
          if (startTagMatch) {
            handleStartTag(startTagMatch);
            if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
              advance(1);
            }
            continue;
          }
        }

        var text = void 0,
            rest = void 0,
            next = void 0;
        if (textEnd >= 0) {
          rest = html.slice(textEnd);
          while (!endTag.test(rest) && !startTagOpen.test(rest) && !comment.test(rest) && !conditionalComment.test(rest)) {
            // < in plain text, be forgiving and treat it as text
            next = rest.indexOf('<', 1);
            if (next < 0) {
              break;
            }
            textEnd += next;
            rest = html.slice(textEnd);
          }
          text = html.substring(0, textEnd);
        }

        if (textEnd < 0) {
          text = html;
        }

        if (text) {
          advance(text.length);
        }

        if (options.chars && text) {
          options.chars(text, index - text.length, index);
        }
      } else {
        var endTagLength = 0;
        var stackedTag = lastTag.toLowerCase();
        var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
        var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
          endTagLength = endTag.length;
          if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
            text = text.replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
          }
          if (shouldIgnoreFirstNewline(stackedTag, text)) {
            text = text.slice(1);
          }
          if (options.chars) {
            options.chars(text);
          }
          return '';
        });
        index += html.length - rest$1.length;
        html = rest$1;
        parseEndTag(stackedTag, index - endTagLength, index);
      }

      if (html === last) {
        options.chars && options.chars(html);
        if (!stack.length && options.warn) {
          options.warn("Mal-formatted tag at end of template: \"" + html + "\"", { start: index + html.length });
        }
        break;
      }
    }

    // Clean up any remaining tags
    parseEndTag();

    function advance(n) {
      index += n;
      html = html.substring(n);
    }

    function parseStartTag() {
      var start = html.match(startTagOpen);
      if (start) {
        var match = {
          tagName: start[1],
          attrs: [],
          start: index
        };
        advance(start[0].length);
        var end, attr;
        while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
          attr.start = index;
          advance(attr[0].length);
          attr.end = index;
          match.attrs.push(attr);
        }
        if (end) {
          match.unarySlash = end[1];
          advance(end[0].length);
          match.end = index;
          return match;
        }
      }
    }

    function handleStartTag(match) {
      var tagName = match.tagName;
      var unarySlash = match.unarySlash;

      if (expectHTML) {
        if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
          parseEndTag(lastTag);
        }
        if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
          parseEndTag(tagName);
        }
      }

      var unary = isUnaryTag$$1(tagName) || !!unarySlash;

      var l = match.attrs.length;
      var attrs = new Array(l);
      for (var i = 0; i < l; i++) {
        var args = match.attrs[i];
        var value = args[3] || args[4] || args[5] || '';
        var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href' ? options.shouldDecodeNewlinesForHref : options.shouldDecodeNewlines;
        attrs[i] = {
          name: args[1],
          value: decodeAttr(value, shouldDecodeNewlines)
        };
        if (options.outputSourceRange) {
          attrs[i].start = args.start + args[0].match(/^\s*/).length;
          attrs[i].end = args.end;
        }
      }

      if (!unary) {
        stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs, start: match.start, end: match.end });
        lastTag = tagName;
      }

      if (options.start) {
        options.start(tagName, attrs, unary, match.start, match.end);
      }
    }

    function parseEndTag(tagName, start, end) {
      var pos, lowerCasedTagName;
      if (start == null) {
        start = index;
      }
      if (end == null) {
        end = index;
      }

      // Find the closest opened tag of the same type
      if (tagName) {
        lowerCasedTagName = tagName.toLowerCase();
        for (pos = stack.length - 1; pos >= 0; pos--) {
          if (stack[pos].lowerCasedTag === lowerCasedTagName) {
            break;
          }
        }
      } else {
        // If no tag name is provided, clean shop
        pos = 0;
      }

      if (pos >= 0) {
        // Close all the open elements, up the stack
        for (var i = stack.length - 1; i >= pos; i--) {
          if (i > pos || !tagName && options.warn) {
            options.warn("tag <" + stack[i].tag + "> has no matching end tag.", { start: stack[i].start, end: stack[i].end });
          }
          if (options.end) {
            options.end(stack[i].tag, start, end);
          }
        }

        // Remove the open elements from the stack
        stack.length = pos;
        lastTag = pos && stack[pos - 1].tag;
      } else if (lowerCasedTagName === 'br') {
        if (options.start) {
          options.start(tagName, [], true, start, end);
        }
      } else if (lowerCasedTagName === 'p') {
        if (options.start) {
          options.start(tagName, [], false, start, end);
        }
        if (options.end) {
          options.end(tagName, start, end);
        }
      }
    }
  }

  /*  */

  var onRE = /^@|^v-on:/;
  var dirRE = /^v-|^@|^:/;
  var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
  var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  var stripParensRE = /^\(|\)$/g;
  var dynamicArgRE = /^\[.*\]$/;

  var argRE = /:(.*)$/;
  var bindRE = /^:|^\.|^v-bind:/;
  var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;

  var slotRE = /^v-slot(:|$)|^#/;

  var lineBreakRE = /[\r\n]/;
  var whitespaceRE$1 = /\s+/g;

  var invalidAttributeRE = /[\s"'<>\/=]/;

  var decodeHTMLCached = cached(he.decode);

  var emptySlotScopeToken = "_empty_";

  // configurable state
  var warn$2;
  var delimiters;
  var transforms;
  var preTransforms;
  var postTransforms;
  var platformIsPreTag;
  var platformMustUseProp;
  var platformGetTagNamespace;
  var maybeComponent;

  function createASTElement(tag, attrs, parent) {
    return {
      type: 1,
      tag: tag,
      attrsList: attrs,
      attrsMap: makeAttrsMap(attrs),
      rawAttrsMap: {},
      parent: parent,
      children: []
    };
  }

  /**
   * Convert HTML string to AST.
   */
  function parse(template, options) {
    warn$2 = options.warn || baseWarn;

    platformIsPreTag = options.isPreTag || no;
    platformMustUseProp = options.mustUseProp || no;
    platformGetTagNamespace = options.getTagNamespace || no;
    var isReservedTag = options.isReservedTag || no;
    maybeComponent = function maybeComponent(el) {
      return !!el.component || !isReservedTag(el.tag);
    };

    transforms = pluckModuleFunction(options.modules, 'transformNode');
    preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
    postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

    delimiters = options.delimiters;

    var stack = [];
    var preserveWhitespace = options.preserveWhitespace !== false;
    var whitespaceOption = options.whitespace;
    var root;
    var currentParent;
    var inVPre = false;
    var inPre = false;
    var warned = false;

    function warnOnce(msg, range) {
      if (!warned) {
        warned = true;
        warn$2(msg, range);
      }
    }

    function closeElement(element) {
      trimEndingWhitespace(element);
      if (!inVPre && !element.processed) {
        element = processElement(element, options);
      }
      // tree management
      if (!stack.length && element !== root) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          {
            checkRootConstraints(element);
          }
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else {
          warnOnce("Component template should contain exactly one root element. " + "If you are using v-if on multiple elements, " + "use v-else-if to chain them instead.", { start: element.start });
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else {
          if (element.slotScope) {
            // scoped slot
            // keep it in the children list so that v-else(-if) conditions can
            // find it as the prev node.
            var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
          }
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }

      // final children cleanup
      // filter out scoped slots
      element.children = element.children.filter(function (c) {
        return !c.slotScope;
      });
      // remove trailing whitespace node again
      trimEndingWhitespace(element);

      // check pre state
      if (element.pre) {
        inVPre = false;
      }
      if (platformIsPreTag(element.tag)) {
        inPre = false;
      }
      // apply post-transforms
      for (var i = 0; i < postTransforms.length; i++) {
        postTransforms[i](element, options);
      }
    }

    function trimEndingWhitespace(el) {
      // remove trailing whitespace node
      if (!inPre) {
        var lastNode;
        while ((lastNode = el.children[el.children.length - 1]) && lastNode.type === 3 && lastNode.text === ' ') {
          el.children.pop();
        }
      }
    }

    function checkRootConstraints(el) {
      if (el.tag === 'slot' || el.tag === 'template') {
        warnOnce("Cannot use <" + el.tag + "> as component root element because it may " + 'contain multiple nodes.', { start: el.start });
      }
      if (el.attrsMap.hasOwnProperty('v-for')) {
        warnOnce('Cannot use v-for on stateful component root element because ' + 'it renders multiple elements.', el.rawAttrsMap['v-for']);
      }
    }

    parseHTML(template, {
      warn: warn$2,
      expectHTML: options.expectHTML,
      isUnaryTag: options.isUnaryTag,
      canBeLeftOpenTag: options.canBeLeftOpenTag,
      shouldDecodeNewlines: options.shouldDecodeNewlines,
      shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
      shouldKeepComment: options.comments,
      outputSourceRange: options.outputSourceRange,
      start: function start(tag, attrs, unary, start$1, end) {
        // check namespace.
        // inherit parent ns if there is one
        var ns = currentParent && currentParent.ns || platformGetTagNamespace(tag);

        // handle IE svg bug
        /* istanbul ignore if */
        if (isIE && ns === 'svg') {
          attrs = guardIESVGBug(attrs);
        }

        var element = createASTElement(tag, attrs, currentParent);
        if (ns) {
          element.ns = ns;
        }

        {
          if (options.outputSourceRange) {
            element.start = start$1;
            element.end = end;
            element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
              cumulated[attr.name] = attr;
              return cumulated;
            }, {});
          }
          attrs.forEach(function (attr) {
            if (invalidAttributeRE.test(attr.name)) {
              warn$2("Invalid dynamic argument expression: attribute names cannot contain " + "spaces, quotes, <, >, / or =.", {
                start: attr.start + attr.name.indexOf("["),
                end: attr.start + attr.name.length
              });
            }
          });
        }

        if (isForbiddenTag(element) && !isServerRendering()) {
          element.forbidden = true;
          warn$2('Templates should only be responsible for mapping the state to the ' + 'UI. Avoid placing tags with side-effects in your templates, such as ' + "<" + tag + ">" + ', as they will not be parsed.', { start: element.start });
        }

        // apply pre-transforms
        for (var i = 0; i < preTransforms.length; i++) {
          element = preTransforms[i](element, options) || element;
        }

        if (!inVPre) {
          processPre(element);
          if (element.pre) {
            inVPre = true;
          }
        }
        if (platformIsPreTag(element.tag)) {
          inPre = true;
        }
        if (inVPre) {
          processRawAttrs(element);
        } else if (!element.processed) {
          // structural directives
          processFor(element);
          processIf(element);
          processOnce(element);
        }

        if (!root) {
          root = element;
          {
            checkRootConstraints(root);
          }
        }

        if (!unary) {
          currentParent = element;
          stack.push(element);
        } else {
          closeElement(element);
        }
      },

      end: function end(tag, start, end$1) {
        var element = stack[stack.length - 1];
        // pop stack
        stack.length -= 1;
        currentParent = stack[stack.length - 1];
        if (options.outputSourceRange) {
          element.end = end$1;
        }
        closeElement(element);
      },

      chars: function chars(text, start, end) {
        if (!currentParent) {
          {
            if (text === template) {
              warnOnce('Component template requires a root element, rather than just text.', { start: start });
            } else if (text = text.trim()) {
              warnOnce("text \"" + text + "\" outside root element will be ignored.", { start: start });
            }
          }
          return;
        }
        // IE textarea placeholder bug
        /* istanbul ignore if */
        if (isIE && currentParent.tag === 'textarea' && currentParent.attrsMap.placeholder === text) {
          return;
        }
        var children = currentParent.children;
        if (inPre || text.trim()) {
          text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
        } else if (!children.length) {
          // remove the whitespace-only node right after an opening tag
          text = '';
        } else if (whitespaceOption) {
          if (whitespaceOption === 'condense') {
            // in condense mode, remove the whitespace node if it contains
            // line break, otherwise condense to a single space
            text = lineBreakRE.test(text) ? '' : ' ';
          } else {
            text = ' ';
          }
        } else {
          text = preserveWhitespace ? ' ' : '';
        }
        if (text) {
          if (!inPre && whitespaceOption === 'condense') {
            // condense consecutive whitespaces into single space
            text = text.replace(whitespaceRE$1, ' ');
          }
          var res;
          var child;
          if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
            child = {
              type: 2,
              expression: res.expression,
              tokens: res.tokens,
              text: text
            };
          } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
            child = {
              type: 3,
              text: text
            };
          }
          if (child) {
            if (options.outputSourceRange) {
              child.start = start;
              child.end = end;
            }
            children.push(child);
          }
        }
      },
      comment: function comment(text, start, end) {
        // adding anyting as a sibling to the root node is forbidden
        // comments should still be allowed, but ignored
        if (currentParent) {
          var child = {
            type: 3,
            text: text,
            isComment: true
          };
          if (options.outputSourceRange) {
            child.start = start;
            child.end = end;
          }
          currentParent.children.push(child);
        }
      }
    });
    return root;
  }

  function processPre(el) {
    if (getAndRemoveAttr(el, 'v-pre') != null) {
      el.pre = true;
    }
  }

  function processRawAttrs(el) {
    var list = el.attrsList;
    var len = list.length;
    if (len) {
      var attrs = el.attrs = new Array(len);
      for (var i = 0; i < len; i++) {
        attrs[i] = {
          name: list[i].name,
          value: JSON.stringify(list[i].value)
        };
        if (list[i].start != null) {
          attrs[i].start = list[i].start;
          attrs[i].end = list[i].end;
        }
      }
    } else if (!el.pre) {
      // non root node in pre blocks with no attributes
      el.plain = true;
    }
  }

  function processElement(element, options) {
    processKey(element);

    // determine whether this is a plain element after
    // removing structural attributes
    element.plain = !element.key && !element.scopedSlots && !element.attrsList.length;

    processRef(element);
    processSlotContent(element);
    processSlotOutlet(element);
    processComponent(element);
    for (var i = 0; i < transforms.length; i++) {
      element = transforms[i](element, options) || element;
    }
    processAttrs(element);
    return element;
  }

  function processKey(el) {
    var exp = getBindingAttr(el, 'key');
    if (exp) {
      {
        if (el.tag === 'template') {
          warn$2("<template> cannot be keyed. Place the key on real elements instead.", getRawBindingAttr(el, 'key'));
        }
        if (el.for) {
          var iterator = el.iterator2 || el.iterator1;
          var parent = el.parent;
          if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
            warn$2("Do not use v-for index as key on <transition-group> children, " + "this is the same as not using keys.", getRawBindingAttr(el, 'key'), true /* tip */
            );
          }
        }
      }
      el.key = exp;
    }
  }

  function processRef(el) {
    var ref = getBindingAttr(el, 'ref');
    if (ref) {
      el.ref = ref;
      el.refInFor = checkInFor(el);
    }
  }

  function processFor(el) {
    var exp;
    if (exp = getAndRemoveAttr(el, 'v-for')) {
      var res = parseFor(exp);
      if (res) {
        extend(el, res);
      } else {
        warn$2("Invalid v-for expression: " + exp, el.rawAttrsMap['v-for']);
      }
    }
  }

  function parseFor(exp) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) {
      return;
    }
    var res = {};
    res.for = inMatch[2].trim();
    var alias = inMatch[1].trim().replace(stripParensRE, '');
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      res.alias = alias.replace(forIteratorRE, '').trim();
      res.iterator1 = iteratorMatch[1].trim();
      if (iteratorMatch[2]) {
        res.iterator2 = iteratorMatch[2].trim();
      }
    } else {
      res.alias = alias;
    }
    return res;
  }

  function processIf(el) {
    var exp = getAndRemoveAttr(el, 'v-if');
    if (exp) {
      el.if = exp;
      addIfCondition(el, {
        exp: exp,
        block: el
      });
    } else {
      if (getAndRemoveAttr(el, 'v-else') != null) {
        el.else = true;
      }
      var elseif = getAndRemoveAttr(el, 'v-else-if');
      if (elseif) {
        el.elseif = elseif;
      }
    }
  }

  function processIfConditions(el, parent) {
    var prev = findPrevElement(parent.children);
    if (prev && prev.if) {
      addIfCondition(prev, {
        exp: el.elseif,
        block: el
      });
    } else {
      warn$2("v-" + (el.elseif ? 'else-if="' + el.elseif + '"' : 'else') + " " + "used on element <" + el.tag + "> without corresponding v-if.", el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']);
    }
  }

  function findPrevElement(children) {
    var i = children.length;
    while (i--) {
      if (children[i].type === 1) {
        return children[i];
      } else {
        if (children[i].text !== ' ') {
          warn$2("text \"" + children[i].text.trim() + "\" between v-if and v-else(-if) " + "will be ignored.", children[i]);
        }
        children.pop();
      }
    }
  }

  function addIfCondition(el, condition) {
    if (!el.ifConditions) {
      el.ifConditions = [];
    }
    el.ifConditions.push(condition);
  }

  function processOnce(el) {
    var once$$1 = getAndRemoveAttr(el, 'v-once');
    if (once$$1 != null) {
      el.once = true;
    }
  }

  // handle content being passed to a component as slot,
  // e.g. <template slot="xxx">, <div slot-scope="xxx">
  function processSlotContent(el) {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if (slotScope) {
        warn$2("the \"scope\" attribute for scoped slots have been deprecated and " + "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " + "can also be used on plain elements in addition to <template> to " + "denote scoped slots.", el.rawAttrsMap['scope'], true);
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if (slotScope = getAndRemoveAttr(el, 'slot-scope')) {
      /* istanbul ignore if */
      if (el.attrsMap['v-for']) {
        warn$2("Ambiguous combined usage of slot-scope and v-for on <" + el.tag + "> " + "(v-for takes higher priority). Use a wrapper <template> for the " + "scoped slot to make it clearer.", el.rawAttrsMap['slot-scope'], true);
      }
      el.slotScope = slotScope;
    }

    // slot="xxx"
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']);
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
      }
    }

    // 2.6 v-slot syntax
    {
      if (el.tag === 'template') {
        // v-slot on <template>
        var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
        if (slotBinding) {
          {
            if (el.slotTarget || el.slotScope) {
              warn$2("Unexpected mixed usage of different slot syntaxes.", el);
            }
            if (el.parent && !maybeComponent(el.parent)) {
              warn$2("<template v-slot> can only appear at the root level inside " + "the receiving the component", el);
            }
          }
          var ref = getSlotName(slotBinding);
          var name = ref.name;
          var dynamic = ref.dynamic;
          el.slotTarget = name;
          el.slotTargetDynamic = dynamic;
          el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
        }
      } else {
        // v-slot on component, denotes default slot
        var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);
        if (slotBinding$1) {
          {
            if (!maybeComponent(el)) {
              warn$2("v-slot can only be used on components or <template>.", slotBinding$1);
            }
            if (el.slotScope || el.slotTarget) {
              warn$2("Unexpected mixed usage of different slot syntaxes.", el);
            }
            if (el.scopedSlots) {
              warn$2("To avoid scope ambiguity, the default slot should also use " + "<template> syntax when there are other named slots.", slotBinding$1);
            }
          }
          // add the component's children to its default slot
          var slots = el.scopedSlots || (el.scopedSlots = {});
          var ref$1 = getSlotName(slotBinding$1);
          var name$1 = ref$1.name;
          var dynamic$1 = ref$1.dynamic;
          var slotContainer = slots[name$1] = createASTElement('template', [], el);
          slotContainer.slotTarget = name$1;
          slotContainer.slotTargetDynamic = dynamic$1;
          slotContainer.children = el.children.filter(function (c) {
            if (!c.slotScope) {
              c.parent = slotContainer;
              return true;
            }
          });
          slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken;
          // remove children as they are returned from scopedSlots now
          el.children = [];
          // mark el non-plain so data gets generated
          el.plain = false;
        }
      }
    }
  }

  function getSlotName(binding) {
    var name = binding.name.replace(slotRE, '');
    if (!name) {
      if (binding.name[0] !== '#') {
        name = 'default';
      } else {
        warn$2("v-slot shorthand syntax requires a slot name.", binding);
      }
    }
    return dynamicArgRE.test(name)
    // dynamic [name]
    ? { name: name.slice(1, -1), dynamic: true
      // static name
    } : { name: "\"" + name + "\"", dynamic: false };
  }

  // handle <slot/> outlets
  function processSlotOutlet(el) {
    if (el.tag === 'slot') {
      el.slotName = getBindingAttr(el, 'name');
      if (el.key) {
        warn$2("`key` does not work on <slot> because slots are abstract outlets " + "and can possibly expand into multiple elements. " + "Use the key on a wrapping element instead.", getRawBindingAttr(el, 'key'));
      }
    }
  }

  function processComponent(el) {
    var binding;
    if (binding = getBindingAttr(el, 'is')) {
      el.component = binding;
    }
    if (getAndRemoveAttr(el, 'inline-template') != null) {
      el.inlineTemplate = true;
    }
  }

  function processAttrs(el) {
    var list = el.attrsList;
    var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
    for (i = 0, l = list.length; i < l; i++) {
      name = rawName = list[i].name;
      value = list[i].value;
      if (dirRE.test(name)) {
        // mark element as dynamic
        el.hasBindings = true;
        // modifiers
        modifiers = parseModifiers(name.replace(dirRE, ''));
        // support .foo shorthand syntax for the .prop modifier
        if (modifiers) {
          name = name.replace(modifierRE, '');
        }
        if (bindRE.test(name)) {
          // v-bind
          name = name.replace(bindRE, '');
          value = parseFilters(value);
          isDynamic = dynamicArgRE.test(name);
          if (isDynamic) {
            name = name.slice(1, -1);
          }
          if (value.trim().length === 0) {
            warn$2("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"");
          }
          if (modifiers) {
            if (modifiers.prop && !isDynamic) {
              name = camelize(name);
              if (name === 'innerHtml') {
                name = 'innerHTML';
              }
            }
            if (modifiers.camel && !isDynamic) {
              name = camelize(name);
            }
            if (modifiers.sync) {
              syncGen = genAssignmentCode(value, "$event");
              if (!isDynamic) {
                addHandler(el, "update:" + camelize(name), syncGen, null, false, warn$2, list[i]);
                if (hyphenate(name) !== camelize(name)) {
                  addHandler(el, "update:" + hyphenate(name), syncGen, null, false, warn$2, list[i]);
                }
              } else {
                // handler w/ dynamic event name
                addHandler(el, "\"update:\"+(" + name + ")", syncGen, null, false, warn$2, list[i], true // dynamic
                );
              }
            }
          }
          if (modifiers && modifiers.prop || !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
            addProp(el, name, value, list[i], isDynamic);
          } else {
            addAttr(el, name, value, list[i], isDynamic);
          }
        } else if (onRE.test(name)) {
          // v-on
          name = name.replace(onRE, '');
          isDynamic = dynamicArgRE.test(name);
          if (isDynamic) {
            name = name.slice(1, -1);
          }
          addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
        } else {
          // normal directives
          name = name.replace(dirRE, '');
          // parse arg
          var argMatch = name.match(argRE);
          var arg = argMatch && argMatch[1];
          isDynamic = false;
          if (arg) {
            name = name.slice(0, -(arg.length + 1));
            if (dynamicArgRE.test(arg)) {
              arg = arg.slice(1, -1);
              isDynamic = true;
            }
          }
          addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
          if (name === 'model') {
            checkForAliasModel(el, value);
          }
        }
      } else {
        // literal attribute
        {
          var res = parseText(value, delimiters);
          if (res) {
            warn$2(name + "=\"" + value + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div id="{{ val }}">, use <div :id="val">.', list[i]);
          }
        }
        addAttr(el, name, JSON.stringify(value), list[i]);
        // #6887 firefox doesn't update muted state if set via attribute
        // even immediately after element creation
        if (!el.component && name === 'muted' && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
          addProp(el, name, 'true', list[i]);
        }
      }
    }
  }

  function checkInFor(el) {
    var parent = el;
    while (parent) {
      if (parent.for !== undefined) {
        return true;
      }
      parent = parent.parent;
    }
    return false;
  }

  function parseModifiers(name) {
    var match = name.match(modifierRE);
    if (match) {
      var ret = {};
      match.forEach(function (m) {
        ret[m.slice(1)] = true;
      });
      return ret;
    }
  }

  function makeAttrsMap(attrs) {
    var map = {};
    for (var i = 0, l = attrs.length; i < l; i++) {
      if (map[attrs[i].name] && !isIE && !isEdge) {
        warn$2('duplicate attribute: ' + attrs[i].name, attrs[i]);
      }
      map[attrs[i].name] = attrs[i].value;
    }
    return map;
  }

  // for script (e.g. type="x/template") or style, do not decode content
  function isTextTag(el) {
    return el.tag === 'script' || el.tag === 'style';
  }

  function isForbiddenTag(el) {
    return el.tag === 'style' || el.tag === 'script' && (!el.attrsMap.type || el.attrsMap.type === 'text/javascript');
  }

  var ieNSBug = /^xmlns:NS\d+/;
  var ieNSPrefix = /^NS\d+:/;

  /* istanbul ignore next */
  function guardIESVGBug(attrs) {
    var res = [];
    for (var i = 0; i < attrs.length; i++) {
      var attr = attrs[i];
      if (!ieNSBug.test(attr.name)) {
        attr.name = attr.name.replace(ieNSPrefix, '');
        res.push(attr);
      }
    }
    return res;
  }

  function checkForAliasModel(el, value) {
    var _el = el;
    while (_el) {
      if (_el.for && _el.alias === value) {
        warn$2("<" + el.tag + " v-model=\"" + value + "\">: " + "You are binding v-model directly to a v-for iteration alias. " + "This will not be able to modify the v-for source array because " + "writing to the alias is like modifying a function local variable. " + "Consider using an array of objects and use v-model on an object property instead.", el.rawAttrsMap['v-model']);
      }
      _el = _el.parent;
    }
  }

  /*  */

  function preTransformNode(el, options) {
    if (el.tag === 'input') {
      var map = el.attrsMap;
      if (!map['v-model']) {
        return;
      }

      var typeBinding;
      if (map[':type'] || map['v-bind:type']) {
        typeBinding = getBindingAttr(el, 'type');
      }
      if (!map.type && !typeBinding && map['v-bind']) {
        typeBinding = "(" + map['v-bind'] + ").type";
      }

      if (typeBinding) {
        var ifCondition = getAndRemoveAttr(el, 'v-if', true);
        var ifConditionExtra = ifCondition ? "&&(" + ifCondition + ")" : "";
        var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
        var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
        // 1. checkbox
        var branch0 = cloneASTElement(el);
        // process for on the main node
        processFor(branch0);
        addRawAttr(branch0, 'type', 'checkbox');
        processElement(branch0, options);
        branch0.processed = true; // prevent it from double-processed
        branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
        addIfCondition(branch0, {
          exp: branch0.if,
          block: branch0
        });
        // 2. add radio else-if condition
        var branch1 = cloneASTElement(el);
        getAndRemoveAttr(branch1, 'v-for', true);
        addRawAttr(branch1, 'type', 'radio');
        processElement(branch1, options);
        addIfCondition(branch0, {
          exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
          block: branch1
        });
        // 3. other
        var branch2 = cloneASTElement(el);
        getAndRemoveAttr(branch2, 'v-for', true);
        addRawAttr(branch2, ':type', typeBinding);
        processElement(branch2, options);
        addIfCondition(branch0, {
          exp: ifCondition,
          block: branch2
        });

        if (hasElse) {
          branch0.else = true;
        } else if (elseIfCondition) {
          branch0.elseif = elseIfCondition;
        }

        return branch0;
      }
    }
  }

  function cloneASTElement(el) {
    return createASTElement(el.tag, el.attrsList.slice(), el.parent);
  }

  var model$1 = {
    preTransformNode: preTransformNode
  };

  var modules$1 = [klass$1, style$1, model$1];

  /*  */

  function text(el, dir) {
    if (dir.value) {
      addProp(el, 'textContent', "_s(" + dir.value + ")", dir);
    }
  }

  /*  */

  function html(el, dir) {
    if (dir.value) {
      addProp(el, 'innerHTML', "_s(" + dir.value + ")", dir);
    }
  }

  var directives$1 = {
    model: model,
    text: text,
    html: html
  };

  /*  */

  var baseOptions = {
    expectHTML: true,
    modules: modules$1,
    directives: directives$1,
    isPreTag: isPreTag,
    isUnaryTag: isUnaryTag,
    mustUseProp: mustUseProp,
    canBeLeftOpenTag: canBeLeftOpenTag,
    isReservedTag: isReservedTag,
    getTagNamespace: getTagNamespace,
    staticKeys: genStaticKeys(modules$1)
  };

  /*  */

  var isStaticKey;
  var isPlatformReservedTag;

  var genStaticKeysCached = cached(genStaticKeys$1);

  /**
   * Goal of the optimizer: walk the generated template AST tree
   * and detect sub-trees that are purely static, i.e. parts of
   * the DOM that never needs to change.
   *
   * Once we detect these sub-trees, we can:
   *
   * 1. Hoist them into constants, so that we no longer need to
   *    create fresh nodes for them on each re-render;
   * 2. Completely skip them in the patching process.
   */
  function optimize(root, options) {
    if (!root) {
      return;
    }
    isStaticKey = genStaticKeysCached(options.staticKeys || '');
    isPlatformReservedTag = options.isReservedTag || no;
    // first pass: mark all non-static nodes.
    markStatic$1(root);
    // second pass: mark static roots.
    markStaticRoots(root, false);
  }

  function genStaticKeys$1(keys) {
    return makeMap('type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' + (keys ? ',' + keys : ''));
  }

  function markStatic$1(node) {
    node.static = isStatic(node);
    if (node.type === 1) {
      // do not make component slot content static. this avoids
      // 1. components not able to mutate slot nodes
      // 2. static slot content fails for hot-reloading
      if (!isPlatformReservedTag(node.tag) && node.tag !== 'slot' && node.attrsMap['inline-template'] == null) {
        return;
      }
      for (var i = 0, l = node.children.length; i < l; i++) {
        var child = node.children[i];
        markStatic$1(child);
        if (!child.static) {
          node.static = false;
        }
      }
      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          var block = node.ifConditions[i$1].block;
          markStatic$1(block);
          if (!block.static) {
            node.static = false;
          }
        }
      }
    }
  }

  function markStaticRoots(node, isInFor) {
    if (node.type === 1) {
      if (node.static || node.once) {
        node.staticInFor = isInFor;
      }
      // For a node to qualify as a static root, it should have children that
      // are not just static text. Otherwise the cost of hoisting out will
      // outweigh the benefits and it's better off to just always render it fresh.
      if (node.static && node.children.length && !(node.children.length === 1 && node.children[0].type === 3)) {
        node.staticRoot = true;
        return;
      } else {
        node.staticRoot = false;
      }
      if (node.children) {
        for (var i = 0, l = node.children.length; i < l; i++) {
          markStaticRoots(node.children[i], isInFor || !!node.for);
        }
      }
      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          markStaticRoots(node.ifConditions[i$1].block, isInFor);
        }
      }
    }
  }

  function isStatic(node) {
    if (node.type === 2) {
      // expression
      return false;
    }
    if (node.type === 3) {
      // text
      return true;
    }
    return !!(node.pre || !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) && Object.keys(node).every(isStaticKey));
  }

  function isDirectChildOfTemplateFor(node) {
    while (node.parent) {
      node = node.parent;
      if (node.tag !== 'template') {
        return false;
      }
      if (node.for) {
        return true;
      }
    }
    return false;
  }

  /*  */

  var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*(?:[\w$]+)?\s*\(/;
  var fnInvokeRE = /\([^)]*?\);*$/;
  var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

  // KeyboardEvent.keyCode aliases
  var keyCodes = {
    esc: 27,
    tab: 9,
    enter: 13,
    space: 32,
    up: 38,
    left: 37,
    right: 39,
    down: 40,
    'delete': [8, 46]
  };

  // KeyboardEvent.key aliases
  var keyNames = {
    // #7880: IE11 and Edge use `Esc` for Escape key name.
    esc: ['Esc', 'Escape'],
    tab: 'Tab',
    enter: 'Enter',
    // #9112: IE11 uses `Spacebar` for Space key name.
    space: [' ', 'Spacebar'],
    // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
    up: ['Up', 'ArrowUp'],
    left: ['Left', 'ArrowLeft'],
    right: ['Right', 'ArrowRight'],
    down: ['Down', 'ArrowDown'],
    // #9112: IE11 uses `Del` for Delete key name.
    'delete': ['Backspace', 'Delete', 'Del']
  };

  // #4868: modifiers that prevent the execution of the listener
  // need to explicitly return null so that we can determine whether to remove
  // the listener for .once
  var genGuard = function genGuard(condition) {
    return "if(" + condition + ")return null;";
  };

  var modifierCode = {
    stop: '$event.stopPropagation();',
    prevent: '$event.preventDefault();',
    self: genGuard("$event.target !== $event.currentTarget"),
    ctrl: genGuard("!$event.ctrlKey"),
    shift: genGuard("!$event.shiftKey"),
    alt: genGuard("!$event.altKey"),
    meta: genGuard("!$event.metaKey"),
    left: genGuard("'button' in $event && $event.button !== 0"),
    middle: genGuard("'button' in $event && $event.button !== 1"),
    right: genGuard("'button' in $event && $event.button !== 2")
  };

  function genHandlers(events, isNative) {
    var prefix = isNative ? 'nativeOn:' : 'on:';
    var staticHandlers = "";
    var dynamicHandlers = "";
    for (var name in events) {
      var handlerCode = genHandler(events[name]);
      if (events[name] && events[name].dynamic) {
        dynamicHandlers += name + "," + handlerCode + ",";
      } else {
        staticHandlers += "\"" + name + "\":" + handlerCode + ",";
      }
    }
    staticHandlers = "{" + staticHandlers.slice(0, -1) + "}";
    if (dynamicHandlers) {
      return prefix + "_d(" + staticHandlers + ",[" + dynamicHandlers.slice(0, -1) + "])";
    } else {
      return prefix + staticHandlers;
    }
  }

  function genHandler(handler) {
    if (!handler) {
      return 'function(){}';
    }

    if (Array.isArray(handler)) {
      return "[" + handler.map(function (handler) {
        return genHandler(handler);
      }).join(',') + "]";
    }

    var isMethodPath = simplePathRE.test(handler.value);
    var isFunctionExpression = fnExpRE.test(handler.value);
    var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));

    if (!handler.modifiers) {
      if (isMethodPath || isFunctionExpression) {
        return handler.value;
      }
      return "function($event){" + (isFunctionInvocation ? "return " + handler.value : handler.value) + "}"; // inline statement
    } else {
      var code = '';
      var genModifierCode = '';
      var keys = [];
      for (var key in handler.modifiers) {
        if (modifierCode[key]) {
          genModifierCode += modifierCode[key];
          // left/right
          if (keyCodes[key]) {
            keys.push(key);
          }
        } else if (key === 'exact') {
          var modifiers = handler.modifiers;
          genModifierCode += genGuard(['ctrl', 'shift', 'alt', 'meta'].filter(function (keyModifier) {
            return !modifiers[keyModifier];
          }).map(function (keyModifier) {
            return "$event." + keyModifier + "Key";
          }).join('||'));
        } else {
          keys.push(key);
        }
      }
      if (keys.length) {
        code += genKeyFilter(keys);
      }
      // Make sure modifiers like prevent and stop get executed after key filtering
      if (genModifierCode) {
        code += genModifierCode;
      }
      var handlerCode = isMethodPath ? "return " + handler.value + "($event)" : isFunctionExpression ? "return (" + handler.value + ")($event)" : isFunctionInvocation ? "return " + handler.value : handler.value;
      return "function($event){" + code + handlerCode + "}";
    }
  }

  function genKeyFilter(keys) {
    return (
      // make sure the key filters only apply to KeyboardEvents
      // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
      // key events that do not have keyCode property...
      "if(!$event.type.indexOf('key')&&" + keys.map(genFilterCode).join('&&') + ")return null;"
    );
  }

  function genFilterCode(key) {
    var keyVal = parseInt(key, 10);
    if (keyVal) {
      return "$event.keyCode!==" + keyVal;
    }
    var keyCode = keyCodes[key];
    var keyName = keyNames[key];
    return "_k($event.keyCode," + JSON.stringify(key) + "," + JSON.stringify(keyCode) + "," + "$event.key," + "" + JSON.stringify(keyName) + ")";
  }

  /*  */

  function on(el, dir) {
    if (dir.modifiers) {
      warn("v-on without argument does not support modifiers.");
    }
    el.wrapListeners = function (code) {
      return "_g(" + code + "," + dir.value + ")";
    };
  }

  /*  */

  function bind$1(el, dir) {
    el.wrapData = function (code) {
      return "_b(" + code + ",'" + el.tag + "'," + dir.value + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")";
    };
  }

  /*  */

  var baseDirectives = {
    on: on,
    bind: bind$1,
    cloak: noop
  };

  /*  */

  var CodegenState = function CodegenState(options) {
    this.options = options;
    this.warn = options.warn || baseWarn;
    this.transforms = pluckModuleFunction(options.modules, 'transformCode');
    this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
    this.directives = extend(extend({}, baseDirectives), options.directives);
    var isReservedTag = options.isReservedTag || no;
    this.maybeComponent = function (el) {
      return !!el.component || !isReservedTag(el.tag);
    };
    this.onceId = 0;
    this.staticRenderFns = [];
    this.pre = false;
  };

  function generate(ast, options) {
    var state = new CodegenState(options);
    var code = ast ? genElement(ast, state) : '_c("div")';
    return {
      render: "with(this){return " + code + "}",
      staticRenderFns: state.staticRenderFns
    };
  }

  function genElement(el, state) {
    if (el.parent) {
      el.pre = el.pre || el.parent.pre;
    }

    if (el.staticRoot && !el.staticProcessed) {
      return genStatic(el, state);
    } else if (el.once && !el.onceProcessed) {
      return genOnce(el, state);
    } else if (el.for && !el.forProcessed) {
      return genFor(el, state);
    } else if (el.if && !el.ifProcessed) {
      return genIf(el, state);
    } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
      return genChildren(el, state) || 'void 0';
    } else if (el.tag === 'slot') {
      return genSlot(el, state);
    } else {
      // component or element
      var code;
      if (el.component) {
        code = genComponent(el.component, el, state);
      } else {
        var data;
        if (!el.plain || el.pre && state.maybeComponent(el)) {
          data = genData$2(el, state);
        }

        var children = el.inlineTemplate ? null : genChildren(el, state, true);
        code = "_c('" + el.tag + "'" + (data ? "," + data : '') + (children ? "," + children : '') + ")";
      }
      // module transforms
      for (var i = 0; i < state.transforms.length; i++) {
        code = state.transforms[i](el, code);
      }
      return code;
    }
  }

  // hoist static sub-trees out
  function genStatic(el, state) {
    el.staticProcessed = true;
    // Some elements (templates) need to behave differently inside of a v-pre
    // node.  All pre nodes are static roots, so we can use this as a location to
    // wrap a state change and reset it upon exiting the pre node.
    var originalPreState = state.pre;
    if (el.pre) {
      state.pre = el.pre;
    }
    state.staticRenderFns.push("with(this){return " + genElement(el, state) + "}");
    state.pre = originalPreState;
    return "_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")";
  }

  // v-once
  function genOnce(el, state) {
    el.onceProcessed = true;
    if (el.if && !el.ifProcessed) {
      return genIf(el, state);
    } else if (el.staticInFor) {
      var key = '';
      var parent = el.parent;
      while (parent) {
        if (parent.for) {
          key = parent.key;
          break;
        }
        parent = parent.parent;
      }
      if (!key) {
        state.warn("v-once can only be used inside v-for that is keyed. ", el.rawAttrsMap['v-once']);
        return genElement(el, state);
      }
      return "_o(" + genElement(el, state) + "," + state.onceId++ + "," + key + ")";
    } else {
      return genStatic(el, state);
    }
  }

  function genIf(el, state, altGen, altEmpty) {
    el.ifProcessed = true; // avoid recursion
    return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty);
  }

  function genIfConditions(conditions, state, altGen, altEmpty) {
    if (!conditions.length) {
      return altEmpty || '_e()';
    }

    var condition = conditions.shift();
    if (condition.exp) {
      return "(" + condition.exp + ")?" + genTernaryExp(condition.block) + ":" + genIfConditions(conditions, state, altGen, altEmpty);
    } else {
      return "" + genTernaryExp(condition.block);
    }

    // v-if with v-once should generate code like (a)?_m(0):_m(1)
    function genTernaryExp(el) {
      return altGen ? altGen(el, state) : el.once ? genOnce(el, state) : genElement(el, state);
    }
  }

  function genFor(el, state, altGen, altHelper) {
    var exp = el.for;
    var alias = el.alias;
    var iterator1 = el.iterator1 ? "," + el.iterator1 : '';
    var iterator2 = el.iterator2 ? "," + el.iterator2 : '';

    if (state.maybeComponent(el) && el.tag !== 'slot' && el.tag !== 'template' && !el.key) {
      state.warn("<" + el.tag + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " + "v-for should have explicit keys. " + "See https://vuejs.org/guide/list.html#key for more info.", el.rawAttrsMap['v-for'], true /* tip */
      );
    }

    el.forProcessed = true; // avoid recursion
    return (altHelper || '_l') + "((" + exp + ")," + "function(" + alias + iterator1 + iterator2 + "){" + "return " + (altGen || genElement)(el, state) + '})';
  }

  function genData$2(el, state) {
    var data = '{';

    // directives first.
    // directives may mutate the el's other properties before they are generated.
    var dirs = genDirectives(el, state);
    if (dirs) {
      data += dirs + ',';
    }

    // key
    if (el.key) {
      data += "key:" + el.key + ",";
    }
    // ref
    if (el.ref) {
      data += "ref:" + el.ref + ",";
    }
    if (el.refInFor) {
      data += "refInFor:true,";
    }
    // pre
    if (el.pre) {
      data += "pre:true,";
    }
    // record original tag name for components using "is" attribute
    if (el.component) {
      data += "tag:\"" + el.tag + "\",";
    }
    // module data generation functions
    for (var i = 0; i < state.dataGenFns.length; i++) {
      data += state.dataGenFns[i](el);
    }
    // attributes
    if (el.attrs) {
      data += "attrs:" + genProps(el.attrs) + ",";
    }
    // DOM props
    if (el.props) {
      data += "domProps:" + genProps(el.props) + ",";
    }
    // event handlers
    if (el.events) {
      data += genHandlers(el.events, false) + ",";
    }
    if (el.nativeEvents) {
      data += genHandlers(el.nativeEvents, true) + ",";
    }
    // slot target
    // only for non-scoped slots
    if (el.slotTarget && !el.slotScope) {
      data += "slot:" + el.slotTarget + ",";
    }
    // scoped slots
    if (el.scopedSlots) {
      data += genScopedSlots(el, el.scopedSlots, state) + ",";
    }
    // component v-model
    if (el.model) {
      data += "model:{value:" + el.model.value + ",callback:" + el.model.callback + ",expression:" + el.model.expression + "},";
    }
    // inline-template
    if (el.inlineTemplate) {
      var inlineTemplate = genInlineTemplate(el, state);
      if (inlineTemplate) {
        data += inlineTemplate + ",";
      }
    }
    data = data.replace(/,$/, '') + '}';
    // v-bind dynamic argument wrap
    // v-bind with dynamic arguments must be applied using the same v-bind object
    // merge helper so that class/style/mustUseProp attrs are handled correctly.
    if (el.dynamicAttrs) {
      data = "_b(" + data + ",\"" + el.tag + "\"," + genProps(el.dynamicAttrs) + ")";
    }
    // v-bind data wrap
    if (el.wrapData) {
      data = el.wrapData(data);
    }
    // v-on data wrap
    if (el.wrapListeners) {
      data = el.wrapListeners(data);
    }
    return data;
  }

  function genDirectives(el, state) {
    var dirs = el.directives;
    if (!dirs) {
      return;
    }
    var res = 'directives:[';
    var hasRuntime = false;
    var i, l, dir, needRuntime;
    for (i = 0, l = dirs.length; i < l; i++) {
      dir = dirs[i];
      needRuntime = true;
      var gen = state.directives[dir.name];
      if (gen) {
        // compile-time directive that manipulates AST.
        // returns true if it also needs a runtime counterpart.
        needRuntime = !!gen(el, dir, state.warn);
      }
      if (needRuntime) {
        hasRuntime = true;
        res += "{name:\"" + dir.name + "\",rawName:\"" + dir.rawName + "\"" + (dir.value ? ",value:(" + dir.value + "),expression:" + JSON.stringify(dir.value) : '') + (dir.arg ? ",arg:" + (dir.isDynamicArg ? dir.arg : "\"" + dir.arg + "\"") : '') + (dir.modifiers ? ",modifiers:" + JSON.stringify(dir.modifiers) : '') + "},";
      }
    }
    if (hasRuntime) {
      return res.slice(0, -1) + ']';
    }
  }

  function genInlineTemplate(el, state) {
    var ast = el.children[0];
    if (el.children.length !== 1 || ast.type !== 1) {
      state.warn('Inline-template components must have exactly one child element.', { start: el.start });
    }
    if (ast && ast.type === 1) {
      var inlineRenderFns = generate(ast, state.options);
      return "inlineTemplate:{render:function(){" + inlineRenderFns.render + "},staticRenderFns:[" + inlineRenderFns.staticRenderFns.map(function (code) {
        return "function(){" + code + "}";
      }).join(',') + "]}";
    }
  }

  function genScopedSlots(el, slots, state) {
    // by default scoped slots are considered "stable", this allows child
    // components with only scoped slots to skip forced updates from parent.
    // but in some cases we have to bail-out of this optimization
    // for example if the slot contains dynamic names, has v-if or v-for on them...
    var needsForceUpdate = el.for || Object.keys(slots).some(function (key) {
      var slot = slots[key];
      return slot.slotTargetDynamic || slot.if || slot.for || containsSlotChild(slot) // is passing down slot from parent which may be dynamic
      ;
    });

    // #9534: if a component with scoped slots is inside a conditional branch,
    // it's possible for the same component to be reused but with different
    // compiled slot content. To avoid that, we generate a unique key based on
    // the generated code of all the slot contents.
    var needsKey = !!el.if;

    // OR when it is inside another scoped slot or v-for (the reactivity may be
    // disconnected due to the intermediate scope variable)
    // #9438, #9506
    // TODO: this can be further optimized by properly analyzing in-scope bindings
    // and skip force updating ones that do not actually use scope variables.
    if (!needsForceUpdate) {
      var parent = el.parent;
      while (parent) {
        if (parent.slotScope && parent.slotScope !== emptySlotScopeToken || parent.for) {
          needsForceUpdate = true;
          break;
        }
        if (parent.if) {
          needsKey = true;
        }
        parent = parent.parent;
      }
    }

    var generatedSlots = Object.keys(slots).map(function (key) {
      return genScopedSlot(slots[key], state);
    }).join(',');

    return "scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? ",null,false," + hash(generatedSlots) : "") + ")";
  }

  function hash(str) {
    var hash = 5381;
    var i = str.length;
    while (i) {
      hash = hash * 33 ^ str.charCodeAt(--i);
    }
    return hash >>> 0;
  }

  function containsSlotChild(el) {
    if (el.type === 1) {
      if (el.tag === 'slot') {
        return true;
      }
      return el.children.some(containsSlotChild);
    }
    return false;
  }

  function genScopedSlot(el, state) {
    var isLegacySyntax = el.attrsMap['slot-scope'];
    if (el.if && !el.ifProcessed && !isLegacySyntax) {
      return genIf(el, state, genScopedSlot, "null");
    }
    if (el.for && !el.forProcessed) {
      return genFor(el, state, genScopedSlot);
    }
    var slotScope = el.slotScope === emptySlotScopeToken ? "" : String(el.slotScope);
    var fn = "function(" + slotScope + "){" + "return " + (el.tag === 'template' ? el.if && isLegacySyntax ? "(" + el.if + ")?" + (genChildren(el, state) || 'undefined') + ":undefined" : genChildren(el, state) || 'undefined' : genElement(el, state)) + "}";
    // reverse proxy v-slot without scope on this.$slots
    var reverseProxy = slotScope ? "" : ",proxy:true";
    return "{key:" + (el.slotTarget || "\"default\"") + ",fn:" + fn + reverseProxy + "}";
  }

  function genChildren(el, state, checkSkip, altGenElement, altGenNode) {
    var children = el.children;
    if (children.length) {
      var el$1 = children[0];
      // optimize single v-for
      if (children.length === 1 && el$1.for && el$1.tag !== 'template' && el$1.tag !== 'slot') {
        var normalizationType = checkSkip ? state.maybeComponent(el$1) ? ",1" : ",0" : "";
        return "" + (altGenElement || genElement)(el$1, state) + normalizationType;
      }
      var normalizationType$1 = checkSkip ? getNormalizationType(children, state.maybeComponent) : 0;
      var gen = altGenNode || genNode;
      return "[" + children.map(function (c) {
        return gen(c, state);
      }).join(',') + "]" + (normalizationType$1 ? "," + normalizationType$1 : '');
    }
  }

  // determine the normalization needed for the children array.
  // 0: no normalization needed
  // 1: simple normalization needed (possible 1-level deep nested array)
  // 2: full normalization needed
  function getNormalizationType(children, maybeComponent) {
    var res = 0;
    for (var i = 0; i < children.length; i++) {
      var el = children[i];
      if (el.type !== 1) {
        continue;
      }
      if (needsNormalization(el) || el.ifConditions && el.ifConditions.some(function (c) {
        return needsNormalization(c.block);
      })) {
        res = 2;
        break;
      }
      if (maybeComponent(el) || el.ifConditions && el.ifConditions.some(function (c) {
        return maybeComponent(c.block);
      })) {
        res = 1;
      }
    }
    return res;
  }

  function needsNormalization(el) {
    return el.for !== undefined || el.tag === 'template' || el.tag === 'slot';
  }

  function genNode(node, state) {
    if (node.type === 1) {
      return genElement(node, state);
    } else if (node.type === 3 && node.isComment) {
      return genComment(node);
    } else {
      return genText(node);
    }
  }

  function genText(text) {
    return "_v(" + (text.type === 2 ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")";
  }

  function genComment(comment) {
    return "_e(" + JSON.stringify(comment.text) + ")";
  }

  function genSlot(el, state) {
    var slotName = el.slotName || '"default"';
    var children = genChildren(el, state);
    var res = "_t(" + slotName + (children ? "," + children : '');
    var attrs = el.attrs || el.dynamicAttrs ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) {
      return {
        // slot props are camelized
        name: camelize(attr.name),
        value: attr.value,
        dynamic: attr.dynamic
      };
    })) : null;
    var bind$$1 = el.attrsMap['v-bind'];
    if ((attrs || bind$$1) && !children) {
      res += ",null";
    }
    if (attrs) {
      res += "," + attrs;
    }
    if (bind$$1) {
      res += (attrs ? '' : ',null') + "," + bind$$1;
    }
    return res + ')';
  }

  // componentName is el.component, take it as argument to shun flow's pessimistic refinement
  function genComponent(componentName, el, state) {
    var children = el.inlineTemplate ? null : genChildren(el, state, true);
    return "_c(" + componentName + "," + genData$2(el, state) + (children ? "," + children : '') + ")";
  }

  function genProps(props) {
    var staticProps = "";
    var dynamicProps = "";
    for (var i = 0; i < props.length; i++) {
      var prop = props[i];
      var value = transformSpecialNewlines(prop.value);
      if (prop.dynamic) {
        dynamicProps += prop.name + "," + value + ",";
      } else {
        staticProps += "\"" + prop.name + "\":" + value + ",";
      }
    }
    staticProps = "{" + staticProps.slice(0, -1) + "}";
    if (dynamicProps) {
      return "_d(" + staticProps + ",[" + dynamicProps.slice(0, -1) + "])";
    } else {
      return staticProps;
    }
  }

  // #3895, #4268
  function transformSpecialNewlines(text) {
    return text.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
  }

  /*  */

  // these keywords should not appear inside expressions, but operators like
  // typeof, instanceof and in are allowed
  var prohibitedKeywordRE = new RegExp('\\b' + ('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' + 'super,throw,while,yield,delete,export,import,return,switch,default,' + 'extends,finally,continue,debugger,function,arguments').split(',').join('\\b|\\b') + '\\b');

  // these unary operators should not be used as property/method names
  var unaryOperatorsRE = new RegExp('\\b' + 'delete,typeof,void'.split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

  // strip strings in expressions
  var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

  // detect problematic expressions in a template
  function detectErrors(ast, warn) {
    if (ast) {
      checkNode(ast, warn);
    }
  }

  function checkNode(node, warn) {
    if (node.type === 1) {
      for (var name in node.attrsMap) {
        if (dirRE.test(name)) {
          var value = node.attrsMap[name];
          if (value) {
            var range = node.rawAttrsMap[name];
            if (name === 'v-for') {
              checkFor(node, "v-for=\"" + value + "\"", warn, range);
            } else if (onRE.test(name)) {
              checkEvent(value, name + "=\"" + value + "\"", warn, range);
            } else {
              checkExpression(value, name + "=\"" + value + "\"", warn, range);
            }
          }
        }
      }
      if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
          checkNode(node.children[i], warn);
        }
      }
    } else if (node.type === 2) {
      checkExpression(node.expression, node.text, warn, node);
    }
  }

  function checkEvent(exp, text, warn, range) {
    var stipped = exp.replace(stripStringRE, '');
    var keywordMatch = stipped.match(unaryOperatorsRE);
    if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
      warn("avoid using JavaScript unary operator as property name: " + "\"" + keywordMatch[0] + "\" in expression " + text.trim(), range);
    }
    checkExpression(exp, text, warn, range);
  }

  function checkFor(node, text, warn, range) {
    checkExpression(node.for || '', text, warn, range);
    checkIdentifier(node.alias, 'v-for alias', text, warn, range);
    checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
    checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
  }

  function checkIdentifier(ident, type, text, warn, range) {
    if (typeof ident === 'string') {
      try {
        new Function("var " + ident + "=_");
      } catch (e) {
        warn("invalid " + type + " \"" + ident + "\" in expression: " + text.trim(), range);
      }
    }
  }

  function checkExpression(exp, text, warn, range) {
    try {
      new Function("return " + exp);
    } catch (e) {
      var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
      if (keywordMatch) {
        warn("avoid using JavaScript keyword as property name: " + "\"" + keywordMatch[0] + "\"\n  Raw expression: " + text.trim(), range);
      } else {
        warn("invalid expression: " + e.message + " in\n\n" + "    " + exp + "\n\n" + "  Raw expression: " + text.trim() + "\n", range);
      }
    }
  }

  /*  */

  var range = 2;

  function generateCodeFrame(source, start, end) {
    if (start === void 0) start = 0;
    if (end === void 0) end = source.length;

    var lines = source.split(/\r?\n/);
    var count = 0;
    var res = [];
    for (var i = 0; i < lines.length; i++) {
      count += lines[i].length + 1;
      if (count >= start) {
        for (var j = i - range; j <= i + range || end > count; j++) {
          if (j < 0 || j >= lines.length) {
            continue;
          }
          res.push("" + (j + 1) + repeat$1(" ", 3 - String(j + 1).length) + "|  " + lines[j]);
          var lineLength = lines[j].length;
          if (j === i) {
            // push underline
            var pad = start - (count - lineLength) + 1;
            var length = end > count ? lineLength - pad : end - start;
            res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
          } else if (j > i) {
            if (end > count) {
              var length$1 = Math.min(end - count, lineLength);
              res.push("   |  " + repeat$1("^", length$1));
            }
            count += lineLength + 1;
          }
        }
        break;
      }
    }
    return res.join('\n');
  }

  function repeat$1(str, n) {
    var result = '';
    if (n > 0) {
      while (true) {
        // eslint-disable-line
        if (n & 1) {
          result += str;
        }
        n >>>= 1;
        if (n <= 0) {
          break;
        }
        str += str;
      }
    }
    return result;
  }

  /*  */

  function createFunction(code, errors) {
    try {
      return new Function(code);
    } catch (err) {
      errors.push({ err: err, code: code });
      return noop;
    }
  }

  function createCompileToFunctionFn(compile) {
    var cache = Object.create(null);

    return function compileToFunctions(template, options, vm) {
      options = extend({}, options);
      var warn$$1 = options.warn || warn;
      delete options.warn;

      /* istanbul ignore if */
      {
        // detect possible CSP restriction
        try {
          new Function('return 1');
        } catch (e) {
          if (e.toString().match(/unsafe-eval|CSP/)) {
            warn$$1('It seems you are using the standalone build of Vue.js in an ' + 'environment with Content Security Policy that prohibits unsafe-eval. ' + 'The template compiler cannot work in this environment. Consider ' + 'relaxing the policy to allow unsafe-eval or pre-compiling your ' + 'templates into render functions.');
          }
        }
      }

      // check cache
      var key = options.delimiters ? String(options.delimiters) + template : template;
      if (cache[key]) {
        return cache[key];
      }

      // compile
      var compiled = compile(template, options);

      // check compilation errors/tips
      {
        if (compiled.errors && compiled.errors.length) {
          if (options.outputSourceRange) {
            compiled.errors.forEach(function (e) {
              warn$$1("Error compiling template:\n\n" + e.msg + "\n\n" + generateCodeFrame(template, e.start, e.end), vm);
            });
          } else {
            warn$$1("Error compiling template:\n\n" + template + "\n\n" + compiled.errors.map(function (e) {
              return "- " + e;
            }).join('\n') + '\n', vm);
          }
        }
        if (compiled.tips && compiled.tips.length) {
          if (options.outputSourceRange) {
            compiled.tips.forEach(function (e) {
              return tip(e.msg, vm);
            });
          } else {
            compiled.tips.forEach(function (msg) {
              return tip(msg, vm);
            });
          }
        }
      }

      // turn code into functions
      var res = {};
      var fnGenErrors = [];
      res.render = createFunction(compiled.render, fnGenErrors);
      res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
        return createFunction(code, fnGenErrors);
      });

      // check function generation errors.
      // this should only happen if there is a bug in the compiler itself.
      // mostly for codegen development use
      /* istanbul ignore if */
      {
        if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
          warn$$1("Failed to generate render function:\n\n" + fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return err.toString() + " in\n\n" + code + "\n";
          }).join('\n'), vm);
        }
      }

      return cache[key] = res;
    };
  }

  /*  */

  function createCompilerCreator(baseCompile) {
    return function createCompiler(baseOptions) {
      function compile(template, options) {
        var finalOptions = Object.create(baseOptions);
        var errors = [];
        var tips = [];

        var warn = function warn(msg, range, tip) {
          (tip ? tips : errors).push(msg);
        };

        if (options) {
          if (options.outputSourceRange) {
            // $flow-disable-line
            var leadingSpaceLength = template.match(/^\s*/)[0].length;

            warn = function warn(msg, range, tip) {
              var data = { msg: msg };
              if (range) {
                if (range.start != null) {
                  data.start = range.start + leadingSpaceLength;
                }
                if (range.end != null) {
                  data.end = range.end + leadingSpaceLength;
                }
              }
              (tip ? tips : errors).push(data);
            };
          }
          // merge custom modules
          if (options.modules) {
            finalOptions.modules = (baseOptions.modules || []).concat(options.modules);
          }
          // merge custom directives
          if (options.directives) {
            finalOptions.directives = extend(Object.create(baseOptions.directives || null), options.directives);
          }
          // copy other options
          for (var key in options) {
            if (key !== 'modules' && key !== 'directives') {
              finalOptions[key] = options[key];
            }
          }
        }

        finalOptions.warn = warn;

        var compiled = baseCompile(template.trim(), finalOptions);
        {
          detectErrors(compiled.ast, warn);
        }
        compiled.errors = errors;
        compiled.tips = tips;
        return compiled;
      }

      return {
        compile: compile,
        compileToFunctions: createCompileToFunctionFn(compile)
      };
    };
  }

  /*  */

  // `createCompilerCreator` allows creating compilers that use alternative
  // parser/optimizer/codegen, e.g the SSR optimizing compiler.
  // Here we just export a default compiler using the default parts.
  var createCompiler = createCompilerCreator(function baseCompile(template, options) {
    var ast = parse(template.trim(), options);
    if (options.optimize !== false) {
      optimize(ast, options);
    }
    var code = generate(ast, options);
    return {
      ast: ast,
      render: code.render,
      staticRenderFns: code.staticRenderFns
    };
  });

  /*  */

  var ref$1 = createCompiler(baseOptions);
  var compile = ref$1.compile;
  var compileToFunctions = ref$1.compileToFunctions;

  /*  */

  // check whether current browser encodes a char inside attribute values
  var div;
  function getShouldDecode(href) {
    div = div || document.createElement('div');
    div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
    return div.innerHTML.indexOf('&#10;') > 0;
  }

  // #3663: IE encodes newlines inside attribute values while other browsers don't
  var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
  // #6828: chrome encodes content in a[href]
  var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

  /*  */

  var idToTemplate = cached(function (id) {
    var el = query(id);
    return el && el.innerHTML;
  });

  var mount = Vue.prototype.$mount;
  Vue.prototype.$mount = function (el, hydrating) {
    el = el && query(el);

    /* istanbul ignore if */
    if (el === document.body || el === document.documentElement) {
      warn("Do not mount Vue to <html> or <body> - mount to normal elements instead.");
      return this;
    }

    var options = this.$options;
    // resolve template/el and convert to render function
    if (!options.render) {
      var template = options.template;
      if (template) {
        if (typeof template === 'string') {
          if (template.charAt(0) === '#') {
            template = idToTemplate(template);
            /* istanbul ignore if */
            if (!template) {
              warn("Template element not found or is empty: " + options.template, this);
            }
          }
        } else if (template.nodeType) {
          template = template.innerHTML;
        } else {
          {
            warn('invalid template option:' + template, this);
          }
          return this;
        }
      } else if (el) {
        template = getOuterHTML(el);
      }
      if (template) {
        /* istanbul ignore if */
        if (config.performance && mark) {
          mark('compile');
        }

        var ref = compileToFunctions(template, {
          outputSourceRange: "development" !== 'production',
          shouldDecodeNewlines: shouldDecodeNewlines,
          shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
          delimiters: options.delimiters,
          comments: options.comments
        }, this);
        var render = ref.render;
        var staticRenderFns = ref.staticRenderFns;
        options.render = render;
        options.staticRenderFns = staticRenderFns;

        /* istanbul ignore if */
        if (config.performance && mark) {
          mark('compile end');
          measure("vue " + this._name + " compile", 'compile', 'compile end');
        }
      }
    }
    return mount.call(this, el, hydrating);
  };

  /**
   * Get outerHTML of elements, taking care
   * of SVG elements in IE as well.
   */
  function getOuterHTML(el) {
    if (el.outerHTML) {
      return el.outerHTML;
    } else {
      var container = document.createElement('div');
      container.appendChild(el.cloneNode(true));
      return container.innerHTML;
    }
  }

  Vue.compile = compileToFunctions;

  return Vue;
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("timers").setImmediate)
},{"timers":37}]},{},[7]);
