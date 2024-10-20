<template>
    <form
        @submit.prevent="handleSubmitForm"
        class="mb-28 flex flex-col divide-y divide-[--primary-clr-15] rounded-br-xl rounded-tl-xl border-2 bg-white px-8 py-5"
    >
        <div class="flex justify-center gap-6 py-5">
            <fieldset
                v-for="trip in tripTypes"
                :key="trip.value"
                class="flex items-center gap-2"
            >
                <input
                    type="radio"
                    :id="trip.type"
                    :value="trip.type"
                    v-model="formData.tripType"
                    :draggable="false"
                    class="border-secondary-500 relative h-5 w-5 appearance-none rounded-full border-2 border-solid before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-transparent before:content-[''] checked:border-[var(--primary-clr)] checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-[var(--primary-clr)] checked:after:bg-[var(--primary-clr)] checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer"
                />
                <label
                    :for="trip.type"
                    class="text-sm font-semibold hover:cursor-pointer"
                    >{{ trip.label }}</label
                >
            </fieldset>
        </div>
        <div
            class="flex w-full flex-col flex-wrap items-center gap-6 py-5 sm:flex-row sm:justify-between sm:gap-x-7"
        >
            <fieldset class="flex w-full flex-col items-start gap-4 sm:flex-1">
                <label
                    for="from"
                    class="flex gap-3 text-sm font-bold hover:cursor-pointer"
                >
                    <PlaneTakeOffIcon />
                    From
                </label>
                <input
                    type="text"
                    id="from"
                    class="w-full border-b-2 border-transparent pb-1 text-sm outline-none hover:border-[--primary-clr] focus:border-[--primary-clr]"
                    placeholder="Flight from?"
                    v-model="formData.form"
                />
            </fieldset>
            <fieldset class="flex w-full flex-col items-start gap-4 sm:flex-1">
                <label
                    for="to"
                    class="flex gap-3 text-sm font-bold hover:cursor-pointer"
                >
                    <PlaneLandingIcon />
                    to
                </label>
                <input
                    type="text"
                    id="to"
                    class="w-full border-b-2 border-transparent pb-1 text-sm outline-none hover:border-[--primary-clr] focus:border-[--primary-clr]"
                    placeholder="Flight to?"
                    v-model="formData.to"
                />
            </fieldset>

            <fieldset class="flex w-full flex-col items-start gap-4 sm:flex-1">
                <label
                    for="Depart"
                    class="flex items-center gap-3 text-sm font-bold hover:cursor-pointer"
                >
                    <CalendarIcon />
                    Depart
                </label>
                <DatePicker
                    v-model="formData.Depart"
                    name="Depart"
                    :minDate="todayDate"
                    :maxDate="formData.Return"
                    :placeholder="'DD/MM/YYYY'"
                    returnedDateFormat="YYYY-MM-DD"
                    displayedDateFormat="DD/MM/YYYY"
                />
            </fieldset>
            <fieldset class="flex w-full flex-col items-start gap-4 sm:flex-1">
                <label
                    for="Return"
                    class="flex items-center gap-3 text-sm font-bold hover:cursor-pointer"
                >
                    <CalendarIcon />
                    Return
                </label>
                <DatePicker
                    v-model="formData.Return"
                    name="Return"
                    :minDate="formData?.Depart || todayDate"
                    :placeholder="'DD/MM/YYYY'"
                    returnedDateFormat="YYYY-MM-DD"
                    displayedDateFormat="DD/MM/YYYY"
                />
            </fieldset>
            <fieldset class="flex w-full flex-col items-start gap-4 sm:flex-1">
                <label
                    for="Return"
                    class="flex items-center gap-3 text-xs text-nowrap font-bold hover:cursor-pointer sm:text-sm"
                >
                    <CabinIcon />
                    Cabin Class & Travelers
                </label>
                <CustomSelect
                    v-model="formData.CabinInfo"
                    :options="CabinInfoOptions"
                    className="lg:w-fit  rounded-none sm:min-w-[177px] border-0 border-b-2 pt-0 border-transparent pb-1 text-sm outline-none hover:border-[--primary-clr] focus:border-[--primary-clr]  flex justify-between  gap-1"
                >
                    <template #option="{ option }">
                        <p class="flex gap-1 text-xs text-gray-400 sm:text-sm">
                            <PeopleIcon />
                            {{ option.label }}
                        </p>
                    </template>
                </CustomSelect>
            </fieldset>
            <button
                class="h-fit rounded-lg bg-[--primary-clr] px-4 py-2 hover:bg-[--primary-clr-50]"
                type="submit"
            >
                <SearchIcon />
            </button>
        </div>
    </form>
</template>

<script setup>
import { ref, reactive } from "vue"
import DatePicker from "./DatePicker.vue"
import moment from "moment"
import { CustomSelect } from "@/components"
import {
    SearchIcon,
    PlaneTakeOffIcon,
    PlaneLandingIcon,
    CalendarIcon,
    CabinIcon,
    PeopleIcon,
} from "@/assets/icons"
const tripTypes = [
    { type: "one-way", label: "One Way" },
    { type: "round-trip", label: "Round Trip" },
]
const CabinInfoOptions = [
    { label: "1 adult, Economy", value: "1,economy" },
    { label: "2 adult, Class", value: "2,class" },
    { label: "2 adult, Economy", value: "2,economy" },
]
const todayDate = moment().format("YYYY-MM-DD")
const formData = reactive({
    tripType: "one-way",
    from: "",
    to: "",
    Depart: "",
    Return: "",
    CabinInfo: "",
})

const handleSubmitForm = () => {
    console.log("formData", formData)
}
</script>

<style scoped></style>
