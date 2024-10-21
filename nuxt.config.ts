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
        // other modules...
    ],

    plugins: [
        "~/plugins/moment.js", // Register the moment.js plugin here
        "~/plugins/vue-toast-notification.js", // Register the moment.js plugin here
    ],
})
