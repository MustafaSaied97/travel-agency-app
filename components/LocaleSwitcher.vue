<template>
        <select v-if="locale" @change="changeLocale" v-model="locale">
            <option value="" selected disabled hidden>{{ locale }}</option>

            <option
                v-for="(lang, index) in languages"
                :key="lang"
                :value="lang"
            >
                {{ lang }}
            </option>
        </select>
</template>

<script setup>
import { useI18n } from "vue-i18n"
import { useCookie } from "#app"
const { locale } = useI18n() 
const appLocale = useCookie("appLocale") 
const languages = ["en", "ar"] 
const changeLocale = (event) => {
    const newLocale = event.target.value
    appLocale.value = newLocale // Store in cookie
}
</script>

<style scoped></style>
