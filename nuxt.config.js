export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    vendor: ['axios']
  },
  axios: {
    proxy: true,
    prefix: '/api', // baseURL
    changOrigin: true,
    credentials: true,
  },
  // proxy: {
  //   '/api/**': {
  //     target: 'http://81.70.36.99:8001', // 代理地址
  //     // target: 'https://www.quanqingkeji.com/', // 代理地址
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '^/api': ''
  //     },
  //   },
  // },
  proxy: [
    ['/api', {
      target: 'http://81.70.36.99:8001',
      changOrigin: true,
      pathRewrite: {
        '^/api': ''
      },
    }]
  ],
  server: {
    port: 80, // default: 3000
    host: '0.0.0.0' // default: localhost,
  }
}
