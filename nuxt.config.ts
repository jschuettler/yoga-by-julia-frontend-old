import { getAllPageSlugs } from './utils/fetchSlugs';

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: ['~/assets/css/global.css'],
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: true,
  hooks: {
    async 'nitro:config'(nitroConfig) {
      if (!nitroConfig) {
        return
      }
      
      const pages = await getAllPageSlugs();
      nitroConfig.prerender?.routes?.push(...pages);
    },
  },
  runtimeConfig: {
    apiKey: process.env.API_KEY || '',
    public: {
      apiBaseUrl: process.env.API_BASE_URL || '',
    },
  },
});
