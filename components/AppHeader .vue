<template>
    <header
        :class="`fixed top-0 z-50 w-full bg-transparent ${isScrolled ? 'bg-white shadow-md' : ''}`"
    >
        <nav
            class="app-container flex min-h-[--main-header-height] flex-wrap items-center justify-between gap-3 bg-transparent py-2 transition-all duration-200"
        >
            <MainLogoIcon />
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
                    class="rounded-md bg-[--primary-clr] px-3 py-2 text-nowrap text-sm font-medium text-white"
                >
                    Sign In
                </button>
            </div>
            <button @click="onOpenSidebar" class="block lg:hidden">
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
            popover
            @toggle="ontoggle"
        >
            <MainLogoIcon />

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
                    class="rounded-md bg-[--primary-clr] p-3 text-nowrap text-sm font-medium text-white"
                >
                    Sign In
                </button>
            </div>
        </aside>
    </header>
</template>

<script setup>
import LocaleSwitcher from "./LocaleSwitcher.vue"
import { MainLogoIcon, BurgerMenuIcon, CloseMenuIcon } from "@/assets/icons"
import { useScroll } from "@/composables/useScroll" // Import the composable

import { useTemplateRef, onMounted } from "vue"
const { isScrolled } = useScroll() // Use the composable to get isScrolled

const sections = [
    { text: "Home", path: "/" },
    { text: "Promo", path: "/promo" },
    { text: "My Booking", path: "my-booking" },
]
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
