/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    fill: theme => ({
      's-operational': theme('colors.s-operational'),
      's-partial': theme('colors.s-partial'),
      's-major': theme('colors.s-major'),
      's-info': theme('colors.s-info')
    }),

    extend: {
      lineHeight: {
        'full': '100%'
      }
    }
  },
  variants: {
    borderWidth: ['responsive', 'last', 'first']
  },
  plugins: [
    require('tailwindcss-theming')
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
