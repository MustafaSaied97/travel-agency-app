// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    alias: {
        "@/": "./",
    },
    css: ["~/assets/styles/global.scss"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    modules: [
      // 'cookie-universal-nuxt', // Ensure this is present
      // other modules...
  ],
})
