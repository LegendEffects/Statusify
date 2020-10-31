import Vue from 'vue'
import VueTippy, { TippyComponent } from 'vue-tippy'

// Vue-Tippy
Vue.use(VueTippy, {
  directive: 'tippy',
  arrow: true,
})
Vue.component('tippy', TippyComponent)
