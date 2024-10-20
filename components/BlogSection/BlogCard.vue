<template>
    <div
        class="flex w-full max-w-[296px] flex-col justify-center rounded-md border bg-[#F0F0F073] p-3 hover:border-[--primary-clr] hover:bg-[--primary-clr-5]"
    >
        <picture
            class="relative flex sm:h-[180px] h-[150px] items-center justify-center overflow-hidden rounded-br-lg rounded-tl-lg"
        >
            <img
                :src="destinationData.image"
                :draggable="false"
                width="264px"
                height="180px"
                alt="destination-image"
                loading="lazy"
                class="h-[calc(100%+40px)] w-[calc(100%+40px)] scale-110 object-cover object-top transition-transform duration-200 hover:scale-125"
            />
        </picture>
        <div class="flex flex-col gap-y-2 mt-3">
            <p
                class="flex items-center justify-start gap-2 text-xs text-[#8F8F8F]"
            >
                <LocationIcon />{{ destinationData.destination }}
            </p>
            <h2 class="text-sm font-bold text-[--secondary-clr] sm:text-base">
                {{ destinationData.trip }}
            </h2>
            <p class="text-xs font-medium text-[#8F8F8F]">
                {{ destinationData.duration }}
            </p>
            <p class="text-xs font-bold text-[--primary-clr]">
                {{ destinationData.price }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { LocationIcon } from "@/assets/icons"
const { destinationData } = defineProps({
    destinationData: {
        type: Object,
        default: {},
    },
})
</script>

<style></style>
