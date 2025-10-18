// import { createResolver } from '@nuxt/kit'

// const resolver = createResolver(import.meta.url)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@pinia/nuxt',
    '@nuxt/test-utils',
    // '@prisma/nuxt',
    '@vueuse/nuxt',
    '@prisma/nuxt',
  ],
  devtools: {
    enabled: true,
  },

  css: ['~/assets/css/main.css'],

  // build: {
  // transpile: [
  // '@prisma/client',
  // './prisma/generated/client',
  // resolver.resolve('./server/plugins/prisma-copy.js'),
  // ],
  // },

  // routeRules: {
  // '/': { prerender: false },
  // },
  compatibilityDate: '2025-01-15',

  // nitro: {
  //   prerender: {
  //     routes: [], // Отключаем prerendering всех маршрутов
  //   },
  //   // Включаем Prisma и кастомные файлы в сборку
  //   externals: {
  //     // inline: ['@prisma/client', './prisma/generated/client'],
  //     // external: ['@prisma/client', '.prisma/client'], // важно
  //   },
  //   // Копируем бинарные файлы Prisma
  //   // plugins: ['~/server/plugins/prisma-copy.js'],
  //   esbuild: {
  //     options: {
  //       target: 'es2020',
  //     },
  //   },
  // },
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

  vite: {
    resolve: {
      alias: {
        '.prisma/client/default': './node_modules/.prisma/client/default.js',
        '.prisma/client/index-browser':
          './node_modules/.prisma/client/index-browser.js',
        // '.prisma/client': './node_modules/.prisma/client',
        // '@prisma/client': './node_modules/.prisma/client',
        // 'node:os': 'os',
      },
    },
    optimizeDeps: {
      // Исключаем node:os из оптимизации, так как это встроенный модуль
      exclude: ['node:os', '@prisma/client', './node_modules/.prisma/client'],
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
