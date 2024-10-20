<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
<script setup>
import { useI18n } from "vue-i18n"

const { locale } = useI18n()
watchEffect(() => {
    useHead({
        htmlAttrs: {
            dir: locale.value == "ar" ? "rtl" : "ltr",
            lang: locale.value,
        },
        title: "Best Travel Booking App - Explore the World",
        meta: [
            {
                name: "description",
                content:
                    "Book your dream trips with our travel booking app. Explore destinations worldwide at the best prices!",
            },
            {
                name: "keywords",
                content:
                    "travel, booking, trips, vacation, hotels, flights, destinations",
            },
            { property: "og:title", content: "Best Travel Booking App" },
            {
                property: "og:description",
                content: "Discover and book your next vacation with ease.",
            },
            { property: "og:image", content: "/travel-app-logo.png" },
            { property: "og:url", content: "https://travel-agency-booking-app.netlify.app/" },
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:title", content: "Best Travel Booking App" },
            {
                name: "twitter:description",
                content:
                    "Find your perfect vacation destination and book it at the best rates.",
            },
            { name: "twitter:image", content: "/travel-app-logo.png" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
        ],
        link: [
            { rel: "icon", type: "image/png", href: "/favicon.ico" },
            { rel: "apple-touch-icon", href: "/favicon.ico" },
        ],
    })
})
</script>
