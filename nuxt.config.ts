// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@pinia/nuxt',
    '@nuxt/test-utils',
    '@vueuse/nuxt',
    // '@prisma/nuxt',
  ],
  devtools: {
    enabled: true,
  },

  css: ['~/assets/css/main.css'],

  build: {
    transpile: ['@prisma/client', './prisma/generated/client'],
  },

  routeRules: {
    '/': { prerender: true },
  },
  compatibilityDate: '2025-01-15',
  // app: {
  //   head: {
  //     charset: 'utf-8',
  //     viewport: 'width=device-width, initial-scale=1',
  //   },
  // },

  // components: [
  //   {
  //     path: '~/components',
  //     pathPrefix: false,
  //   },
  // ],
  // Включаем бинарные файлы Prisma в сборку
  nitro: {
    externals: {
      inline: ['@prisma/client', './prisma/generated/client'],
    },
    // Копируем бинарные файлы в правильное место
    output: {
      publicDir: '.output/public',
      serverDir: '.output/server',
    },
    // Настраиваем копирование Query Engine
  },
  vite: {
    resolve: {
      alias: {
        '@prisma/client': './node_modules/@prisma/client',
        // Фикс для .prisma/client/default
        '.prisma/client/default': './prisma/generated/client/default.js',
        // Если ранее добавляли фикс для index-browser, оставьте его
        '.prisma/client/index-browser':
          './prisma/generated/client/index-browser.js',
        // Общий алиас для Prisma Client
        '.prisma/client': './node_modules/@prisma/client',
      },
    },
  },

  eslint: {
    config: {
      stylistic: {
        semi: true,
        quotes: 'single',
        commaDangle: 'always',
        braceStyle: '1tbs',
      },
    },
  },
})
