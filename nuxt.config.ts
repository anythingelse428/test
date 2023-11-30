// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: Boolean(process.env.NUXT_SSR),
  app: {
    baseURL: '',
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@7.3.67/css/materialdesignicons.min.css' },
      ],
    },
  },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
  ],
  colorMode: {
    preference: 'dark', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: 'scheme-',
    classSuffix: '',
    storageKey: 'nuxt-color-mode',
  },

  devServer: {
    host: process.env.NITRO_HOST,
    port: Number(process.env.NITRO_PORT) || 3000,
  },
  runtimeConfig: {
    // Private keys are only available on the server
    apiSecret: '123',

    // Public keys that are exposed to the client
    public: {
      // Base
      BASE_URL: process.env.BASE_URL,
      // REST
      REST_BASE_PROXY: !!process.env.REST_BASE_PROXY,
      REST_BASE_TARGET: process.env.REST_BASE_TARGET,
      REST_BASE_PATH: process.env.REST_BASE_PATH,
      REST_BASE_TOKEN: process.env.REST_BASE_TOKEN,
      REST_BASE_TOKEN_STORAGE_NAME: process.env.REST_BASE_TOKEN_STORAGE_NAME,
      // Api for use in project
      API_ENDPOINT: process.env.REST_BASE_PROXY ? `${process.env.BASE_URL}/proxy${process.env.REST_BASE_PATH}` : process.env.NUXT_PROXY_OPTIONS_TARGET,
      WS_ENDPOINT: process.env.WS_BASE_PROXY ? `${process.env.BASE_URL}/ws${process.env.WS_BASE_PATH}` : process.env.NUXT_WS_PROXY_OPTIONS_TARGET,
      // Debug
      APP_DEBUG: !!process.env.APP_DEBUG,
      APP_IS_PROD: !!process.env.APP_IS_PROD,
    },
  },
  routeRules: {
    '/proxy/api/**': { proxy: { to: `${process.env.REST_BASE_TARGET}${process.env.REST_BASE_PATH}/**` } },
    '/ws/v3/**': { proxy: { to: `${process.env.WS_BASE_TARGET}${process.env.WS_BASE_PATH}/**` } },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/vars/colors.scss";@import "@/assets/styles/vars/fontsizes.scss";',
        },
      },
    },
    server: {
      watch: {
        usePolling: true,
      },
      hmr: {
        protocol: 'ws',
        host: process.env.NITRO_HOST,
      },
    },
  },
  styleResources: {
    scss: [
      '~/assets/styles/vars/colors.scss',
      '~/assets/styles/vars/fontsizes.scss',
    ],
    sass: [
      '~/assets/fonts/hk-icons/homekit-icons.sass',
    ],
  },
  css: [
    '~/assets/fonts/Jura/stylesheet.css',
    '~/assets/styles/main.scss',
  ],
})
