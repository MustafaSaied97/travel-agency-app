<template>
    <CustomSelect
        v-if="locale"
        v-model="locale"
        :options="languagesOptions"
        @change="changeLocale"
        className="lg:w-fit w-full  flex justify-between gap-1"
    >
    </CustomSelect>
</template>

<script setup>
import { CustomSelect } from "@/components"

import { useI18n } from "vue-i18n"
import { useCookie } from "#app"
const { locale } = useI18n()
const appLocale = useCookie("appLocale")
const languages = ["en", "ar"]
const languagesOptions = languages.map((lang) => ({
    label: lang,
    value: lang,
}))
const changeLocale = (selectOpt) => {
    appLocale.value = selectOpt // Store in cookie
}
</script>

<style scoped></style>
