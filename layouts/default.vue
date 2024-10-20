<template>
        <AppHeader />
        <main
            class="app-container min-h-[--main-content-height] bg-[--pr-bg] text-[--pr-text]"
        >
            <slot />
        </main>
        <AppFooter />
</template>
<script setup>
import { AppHeader, AppFooter } from "@/components"
</script>
