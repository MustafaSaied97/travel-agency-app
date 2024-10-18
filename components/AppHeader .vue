<template>
    <header class="mx-auto flex justify-around">
        <h1 class="text-3xl font-bold underline">
            {{ $t("hello", { name: "vue-i18n" }) }}
        </h1>
        <LocaleSwitcher />
    </header>
</template>

<script setup>
import LocaleSwitcher from "./LocaleSwitcher.vue"
</script>

<style></style>
