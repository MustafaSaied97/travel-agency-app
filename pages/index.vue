<template>
    <div>
        <h1
            class="text-gradient mx-auto pt-48  pb-12 text-center font-[PlayfairDisplay] text-2xl font-extrabold sm:w-[75%] sm:text-4xl lg:text-6xl"
        >
            Discover Our Paradise Worlds, Travel Anywhere Now!
        </h1>

        <BookingForm />
        <BlogCard />
    </div>
</template>

<script setup>
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
