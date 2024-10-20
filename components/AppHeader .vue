<template>
    <header
        :class="`fixed top-0 lg:h-fit h-[--main-header-height] z-50 w-full bg-[--pr-bg] ${isScrolled ? 'bg-white shadow-md ' : ''}`"
    >
        <nav
            class="app-container flex min-h-[--main-header-height] flex-wrap items-center justify-between gap-3 bg-transparent py-2 transition-all duration-200"
        >
            <NuxtLink to="/"> <MainLogoIcon /></NuxtLink>

            <ul class="hidden justify-between gap-2 lg:flex">
                <li
                    v-for="section in sections"
                    :key="section.text"
                    class="block list-none rounded-md p-2 text-sm font-semibold hover:cursor-pointer hover:bg-[--primary-clr-15]"
                >
                    <NuxtLink :to="section.path"> {{ section.text }} </NuxtLink>
                </li>
            </ul>
            <div class="hidden justify-between gap-2 lg:flex">
                <LocaleSwitcher />

                <button
                    class="text-nowrap rounded-md bg-[--primary-clr] px-3 py-2 text-sm font-medium text-white"
                >
                    {{ $t("sign_in") }}
                </button>
            </div>
            <button @click="onOpenSidebar" popovertarget="sidebar" class="block lg:hidden">
                <CloseMenuIcon
                    v-if="isSidebarOpen"
                    :color="'var(--primary-clr)'"
                />
                <BurgerMenuIcon v-else :color="'var(--primary-clr)'" />
            </button>
        </nav>
        <aside
            ref="sidebarRef"
            id="sidebar"
            class="sidebar-animation flex h-screen flex-col gap-3 rounded-md bg-[--tr-bg] px-5 py-10 shadow-md backdrop:bg-black/20 md:w-[40%]"
            
            @toggle="ontoggle"
        >
            <NuxtLink to="/"> <MainLogoIcon /></NuxtLink>

            <li
                v-for="section in sections"
                :key="section.text"
                class="block list-none rounded-md bg-gray-200 p-2 text-sm font-semibold hover:cursor-pointer hover:bg-gray-400"
            >
                <NuxtLink :to="section.path"> {{ section.text }} </NuxtLink>
            </li>
            <div class="flex flex-col justify-between gap-2">
                <LocaleSwitcher />

                <button
                    class="text-nowrap rounded-md bg-[--primary-clr] p-3 text-sm font-medium text-white"
                >
                    {{ $t("sign_in") }}
                </button>
            </div>
        </aside>
    </header>
</template>

<script setup>
import LocaleSwitcher from "./LocaleSwitcher.vue"
import { MainLogoIcon, BurgerMenuIcon, CloseMenuIcon } from "@/assets/icons"
import { useScroll } from "@/composables/useScroll" // Import the composable
import { useTemplateRef, computed } from "vue"
import { useI18n } from "vue-i18n"

const { t } = useI18n()

const { isScrolled } = useScroll() // Use the composable to get isScrolled

const sections = computed(() => [
    { text: t("home"), path: "/" },
    { text: t("promo"), path: "" },
    { text: t("my_booking"), path: "" },
])
const sidebarRef = useTemplateRef("sidebarRef")
const isSidebarOpen = ref(false)
const onOpenSidebar = () => {
    sidebarRef.value.showPopover()
}
const ontoggle = (e) => {
    isSidebarOpen.value = e.newState == "open"
}
</script>

<style>
.router-link-active,
.router-link-exact-active {
    color: var(--primary-clr);
}
</style>
