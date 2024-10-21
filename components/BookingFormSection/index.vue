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
                    {{ $t("flight_from") }}
                </label>
                <input
                    type="text"
                    id="from"
                    class="w-full border-b-2 border-transparent pb-1 text-sm outline-none hover:border-[--primary-clr] focus:border-[--primary-clr]"
                    :placeholder="$t('flight_from')"
                    v-model="formData.from"
                />
            </fieldset>
            <fieldset class="flex w-full flex-col items-start gap-4 sm:flex-1">
                <label
                    for="to"
                    class="flex gap-3 text-sm font-bold hover:cursor-pointer"
                >
                    <PlaneLandingIcon />
                    {{ $t("to") }}
                </label>
                <input
                    type="text"
                    id="to"
                    class="w-full border-b-2 border-transparent pb-1 text-sm outline-none hover:border-[--primary-clr] focus:border-[--primary-clr]"
                    :placeholder="$t('flight_to')"
                    v-model="formData.to"
                />
            </fieldset>

            <fieldset class="flex w-full flex-col items-start gap-4 sm:flex-1">
                <label
                    for="depart"
                    class="flex items-center gap-3 text-sm font-bold hover:cursor-pointer"
                >
                    <CalendarIcon />
                    {{ $t("depart") }}
                </label>
                <DatePicker
                    v-model="formData.Depart"
                    :name="$t('depart')"
                    :minDate="todayDate"
                    :maxDate="formData.Return"
                    :placeholder="'DD/MM/YYYY'"
                    returnedDateFormat="YYYY-MM-DD"
                    displayedDateFormat="DD/MM/YYYY"
                />
            </fieldset>
            <fieldset class="flex w-full flex-col items-start gap-4 sm:flex-1">
                <label
                    for="return"
                    class="flex items-center gap-3 text-sm font-bold hover:cursor-pointer"
                >
                    <CalendarIcon />
                    {{ $t("return") }}
                </label>
                <DatePicker
                    v-model="formData.Return"
                    name="return"
                    :minDate="formData?.Depart || todayDate"
                    :placeholder="'DD/MM/YYYY'"
                    returnedDateFormat="YYYY-MM-DD"
                    displayedDateFormat="DD/MM/YYYY"
                />
            </fieldset>
            <fieldset class="flex w-full flex-col items-start gap-4 sm:flex-1">
                <label
                    for="CabinInfo"
                    class="flex items-center gap-3 text-nowrap text-xs font-bold hover:cursor-pointer sm:text-sm"
                >
                    <CabinIcon />
                    {{ $t("cabin_class_and_travelers") }}
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
import { computed, reactive } from "vue"
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
import { useI18n } from "vue-i18n"
import { useVuelidate } from "@vuelidate/core"
import { required, maxLength, alpha } from "@vuelidate/validators"

const { $toast } = useNuxtApp()
const { t } = useI18n()

const tripTypes = computed(() => [
    { type: "one-way", label: t("one_way") },
    { type: "round-trip", label: t("round_trip") },
])

const CabinInfoOptions = computed(() => [
    { label: `1 ${t("adult")}, ${t("economy")}`, value: "1,economy" },
    { label: `2 ${t("adult")}, ${t("class")}`, value: "2,class" },
    { label: `2 ${t("adult")}, ${t("economy")}`, value: "2,economy" },
])
const todayDate = moment().format("YYYY-MM-DD")

const formData = reactive({
    tripType: "one-way",
    from: "",
    to: "",
    Depart: "",
    Return: "",
    CabinInfo: "",
})

const rules = {
    formData: {
        from: { required, alpha, maxLength: maxLength(100) },
        to: { required, alpha, maxLength: maxLength(100) },
        Depart: { required },
        Return: {},
    },
}

const $v = useVuelidate(rules, { formData })

const handleResetForm = () => {
    const initialValues = {
        tripType: "one-way",
        from: "",
        to: "",
        Depart: "",
        Return: "",
        CabinInfo: "",
    }
    formData.CabinInfo = ""
    for (const key in initialValues) {
        formData[key] = initialValues[key]
    }

    $v.value.$reset()
}

const handleSubmitForm = () => {
    $v.value.$touch()
    if ($v.value.$invalid) {
        $toast.error(t("validation.fields_required"))
        return
    }
    $toast.success(t("booking_submitted"))
    handleResetForm()
}
</script>

<style scoped></style>
