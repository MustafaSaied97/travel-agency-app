<template>
    <header class="relative z-50 min-h-[--main-header-height] shadow-md">
        <nav
            class="app-container flex h-full flex-wrap items-center justify-between gap-3 bg-[--tr-bg] py-2 transition-all duration-200"
        >
            <MainLogoIcon />

            <button @click="onOpenSidebar" class="block lg:hidden">
                <BurgerMenuIcon :color="'var(--primary-clr)'" />
            </button>
            <h1 class="text-3xl font-bold underline">
                {{ $t("hello", { name: "vue-i18n" }) }}
            </h1>

            <LocaleSwitcher />
        </nav>
        <aside
            ref="sidebarRef"
            id="sidebar"
            class="sidebar-animation flex h-screen flex-col gap-3 rounded-md bg-slate-400 p-3 backdrop:bg-black/20 md:w-[40%]"
            popover
            @toggle="ontoggle"
        >
            <li
                v-for="section in sections"
                :key="section.text"
                class="block list-none rounded-md bg-gray-200 p-2 text-sm font-semibold hover:cursor-pointer hover:bg-gray-400"
            >
                <NuxtLink :to="section.path"> {{ section.text }} </NuxtLink>
            </li>
        </aside>
    </header>
</template>

<script setup>
import LocaleSwitcher from "./LocaleSwitcher.vue"
import { MainLogoIcon, BurgerMenuIcon } from "@/assets/icons"

import { useTemplateRef, onMounted } from "vue"

const sections = [
    { text: "Home", path: "/" },
    { text: "Promo", path: "/promo" },
    { text: "My Booking", path: "my-booking" },
]
const sidebarRef = useTemplateRef("sidebarRef")
const onOpenSidebar = () => {
    sidebarRef.value.showPopover()
}
const onCloseSidebar = () => {
    sidebarRef.value.hidePopover()
}
const ontoggle = (e) => {
    // e.newState == "open" ? onOpenSidebar() : onCloseSidebar()
}
</script>

<style>
.router-link-active,
.router-link-exact-active {
    color: var(--primary-clr);
}
</style>
