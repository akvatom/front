// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n", "@nuxt/image"],
  runtimeConfig: {
    public: { baseURL: process.env.BASE_URL },
  },
  css: ["~/assets/css/main.css", "~/assets/fonts/fonts.css"],
  postcss: { plugins: { tailwindcss: {}, autoprefixer: {} } },
  i18n: {
    vueI18n: "./i18n.config.ts",
    locales: ["uz", "ru"],
    defaultLocale: "ru",
    strategy: "prefix_except_default",
  },
  image: {
    domains: [`${process.env.BASE_URL}`, "https://clindoc.netlify.app/"],
  },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/svg", href: "/favicon.svg" }],
    },
  },
});
