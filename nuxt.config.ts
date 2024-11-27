export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },

  modules: [
    "@pinia/nuxt",
    "@nuxt/icon",
    "@nuxthub/core",
    "nitro-cloudflare-dev",
    "nuxt-aos",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
  ],
});
