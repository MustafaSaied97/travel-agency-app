<template>
  <NuxtLayout >
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
    })
})
</script>