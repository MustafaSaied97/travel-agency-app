<template>
    <footer
        class="responsive-text app-container grid-container min-h-[--main-footer-height] bg-[--tr-bg] py-10 shadow-md"
    >
        <MainLogoIcon />
        <section
            v-for="(section, index) in sections"
            :key="index"
            class="flex w-full max-w-[200px] flex-col items-start justify-start gap-4 text-sm text-[#6E7491]"
        >
            <h2 class="font-semibold text-[#7C8DB0]">
                {{ section.title }}
            </h2>
            <p v-for="subSection in section.subSections" :key="subSection">
                {{ subSection }}
            </p>
            <div
                v-if="sections.length == index + 1"
                class="mt-2 flex flex-col gap-2"
            >
                <img
                    src="@/assets/images/app-store.png"
                    width="256"
                    height="82.2"
                    :draggable="false"
                    alt="logo-ct"
                    loading="lazy"
                    class="w-[8rem] select-none md:w-[9rem] lg:w-[10rem]"
                />
                <img
                    src="@/assets/images/play-store.png"
                    width="256"
                    height="82.2"
                    :draggable="false"
                    alt="logo-ct"
                    loading="lazy"
                    class="mt-2 w-[8rem] select-none md:w-[9rem] lg:w-[10rem]"
                />
            </div>
        </section>
    </footer>
</template>

<script setup>
import { MainLogoIcon, BurgerMenuIcon, CloseMenuIcon } from "@/assets/icons"
const sections = [
    {
        title: "About",
        subSections: ["About GooseFlight", "How it works", "Blog", "Forum"],
    },
    {
        title: "Support",
        subSections: [
            "Help Center",
            "Contact us",
            "Privacy policy",
            "Trust and safety",
            "Accessibility",
            "Terms of service",
        ],
    },
    {
        title: "Get the app",
        subSections: ["Tripma for Android", "Tripma for iOS", "Mobile site"],
    },
]
</script>

<style>
.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    justify-items: center;
    grid-gap: 20px;
}
</style>
