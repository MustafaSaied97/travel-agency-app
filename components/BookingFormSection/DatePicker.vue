<template>
    <div class="relative w-full">
        <button
            id="date-calendar"
            type="button"
            @click="showDatePicker"
            :class="`relative w-full border-b-2 border-transparent text-start pb-1 text-sm hover:border-[--primary-clr] focus:border-[--primary-clr]`"
        >
            <span
                v-if="placeholder && !fieldValue"
                class="h-full w-full  text-gray-400"
                >{{ placeholder }}</span
            >
            <span v-if="fieldValue">{{
                convertDate(fieldValue, returnedDateFormat, displayedDateFormat)
            }}</span>
        </button>

        <input
            type="date"
            :id="name"
            v-model="fieldValue"
            @change="handleChange"
            :min="convertDate(minDate, returnedDateFormat, originalDateFormat)"
            :max="convertDate(maxDate, returnedDateFormat, originalDateFormat)"
            ref="dateInputRef"
            class="collapse absolute bottom-0 start-0 -z-10 appearance-none"
        />
    </div>
</template>

<script setup>
import { ref, useTemplateRef, watch } from "vue"
import moment from "moment"
const originalDateFormat = "YYYY-MM-DD" // input's native date format
const props = defineProps({
    modelValue: String,
    name: { type: String, default: "date" },
    placeholder: String,
    minDate: String,
    maxDate: String,
    returnedDateFormat: { type: String, default: "DD/MM/YYYY" },
    displayedDateFormat: { type: String, default: "DD/MM/YYYY" },
})

const fieldValue = ref(props.modelValue || "")

const dateInputRef = useTemplateRef("dateInputRef")

const emit = defineEmits(["update:modelValue"])

function convertDate(date, inputFormat, outputFormat) {
    const parsedDate = moment(date, inputFormat).format(outputFormat)
    return parsedDate === "Invalid date" ? null : parsedDate
}

watch(
    () => props.modelValue,
    (newVal) => {
        fieldValue.value = convertDate(
            newVal,
            props.returnedDateFormat,
            originalDateFormat,
        )
    },
)

function showDatePicker() {
    dateInputRef.value.showPicker()
}

function handleChange(event) {
    const selectedDate = event.target.value
    const formattedDate = convertDate(
        selectedDate,
        originalDateFormat,
        props.returnedDateFormat,
    )
    fieldValue.value = formattedDate
    emit("update:modelValue", formattedDate) // Emit the formatted date back to parent
}
</script>

<style scoped></style>
