export default {
  ssr: false,
  target: 'static',
  srcDir: 'src/',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Statusify',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/status-lib/StatusLibPlugin', '@/plugins/TippyInjector.client'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxt/typescript-build', // https://go.nuxtjs.dev/typescript
    '@nuxtjs/tailwindcss', // https://go.nuxtjs.dev/tailwindcss
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-i18n',
  ],

  // i18n module configuration (https://i18n.nuxtjs.org/options-reference)
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.js',
      },
    ],
    defaultLocale: 'en',
    langDir: 'locales/',
    lazy: true,
  },
}
