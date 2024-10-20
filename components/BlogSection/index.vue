<template>
    <section class="flex flex-col gap-y-12 pb-6">
        <div class="flex flex-col gap-y-1">
            <h2
                class="text-lg font-[700] text-[--secondary-clr] sm:text-xl md:text-2xl"
            >
                Popular Destinations
            </h2>
            <p class="text-xs text-[--secondary-clr] sm:text-sm">
                Vacations to make your experience enjoyable in Indonesia!
            </p>
        </div>
        <ul class="blog-container">
            <template v-for="(destination, index) in destinations" :key="index">
                <BlogCard :destinationData="destination" />
            </template>
        </ul>
    </section>
</template>

<script setup>
import BlogCard from "./BlogCard.vue"
import ManggaraiBaratImg from "@/assets/images/destinations/manggarai-barat.png"
import BogorImg from "@/assets/images/destinations/bogor.png"
import JakartaImg from "@/assets/images/destinations/jakarta.png"
import KotaSemarangImg from "@/assets/images/destinations/jakarta.png"
const destinations = [
    {
        destination: "Manggarai Barat",
        trip: "Flores Road Trip 3D2N",
        duration: "3 Days",
        price: "$375",
        image: ManggaraiBaratImg,
    },
    {
        destination: "Bogor",
        trip: "Forrester Glamping Co Bogor",
        duration: "1 Days",
        price: "$375",
        image: BogorImg,
    },
    {
        destination: "Jakarta",
        trip: "Paket Tiket Pesawat Jakarta Bali",
        duration: "",
        price: "$375",
        image: JakartaImg,
    },
    {
        destination: "Kota Semarang",
        trip: "Desa Wisata Kandri",
        duration: "14 Days",
        price: "$375",
        image: KotaSemarangImg,
    },
]
</script>

<style scoped>
.blog-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-items: center;
    grid-gap: 20px;
}
</style>
