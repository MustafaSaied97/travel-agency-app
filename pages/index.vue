<template>
    <div class="flex w-full flex-col">
        <h1
            class="text-gradient mx-auto pb-12 pt-48 text-center font-[PlayfairDisplay] text-2xl font-extrabold sm:w-[75%] sm:text-4xl lg:text-6xl"
        >
            Discover Our Paradise Worlds, Travel Anywhere Now!
        </h1>

        <BookingFormSection />
        <BlogSection />
    </div>
</template>

<script setup>
import { BookingFormSection, BlogSection } from "@/components"

definePageMeta({
    layout: "default",
})
</script>
<style>
.text-gradient {
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    background-image: linear-gradient(to right, #183867 10%, #eaa121 70%);
}
</style>
