import { contentFunc } from '@nuxt/content/types/content'
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import VueI18n from 'vue-i18n'
import StatusLib from '../status-lib/impl/StatusLib'

declare module '@nuxt/types' {
  interface Context {
    $i18n: VueI18n
    $content: contentFunc
    $status: StatusLib
    $axios: NuxtAxiosInstance
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $content: contentFunc
    $status: StatusLib
    $axios: NuxtAxiosInstance
  }
}
