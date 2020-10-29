import { Plugin } from '@nuxt/types'
import { NuxtAxiosInstance } from "@nuxtjs/axios";

let $axios: NuxtAxiosInstance;

const accessor: Plugin = (app) => {
  $axios = app.$axios;
}
export default accessor;

export { $axios };
