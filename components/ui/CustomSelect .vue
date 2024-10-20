<template>
    <div tabindex="-1" @blur="() => (isOpen = false)" class="relative w-full">
        <!-- Select Box -->
        <div
            :class="
                twMerge(
                    'flex w-52 cursor-pointer items-center justify-between rounded border bg-white px-2 py-2',
                    className,
                )
            "
            @click="toggleDropdown"
        >
            <span v-if="selectedLabel">{{ selectedLabel }}</span>
            <span v-else class="text-gray-400">{{ placeholder }}</span>

            <span
                :class="{ 'rotate-180': isOpen }"
                class="transition-transform"
            >
                <!-- Slot for Custom Icon -->

                <slot name="icon">
                    <!-- Default Icon if no custom icon provided -->
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 transition-transform"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </slot>
            </span>
        </div>

        <!-- Options List -->
        <ul
            v-if="isOpen"
            :class="
                twMerge(
                    'absolute left-0 z-10 mt-2 max-h-48 w-full overflow-y-auto rounded border bg-white shadow-md',
                    listClassName,
                )
            "
        >
            <li
                v-for="option in options"
                :key="option.value"
                @click="selectOption(option)"
                class="cursor-pointer px-3 py-2 hover:bg-[--primary-clr-50]"
                :class="{ 'bg-[--primary-clr-15]': option.value === selected }"
            >
                <!-- Slot for Custom Option Element -->
                <slot name="option" :option="option">
                    <!-- Default Option if no custom slot provided -->
                    {{ option.label }}
                </slot>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from "vue"
import { twMerge } from "tailwind-merge"
const props = defineProps({
    options: {
        type: Array,
        required: true,
    },
    modelValue: {
        type: [String, Number],
        default: "",
    },
    placeholder: {
        type: String,
        default: "Select an option",
    },
    className: {
        type: String,
        default: "",
    },
    listClassName: {
        type: String,
        default: "",
    },
})

const emit = defineEmits(["update:modelValue"])

const isOpen = ref(false)
const selected = ref(props.modelValue)

const toggleDropdown = () => {
    isOpen.value = !isOpen.value
}

const selectOption = (option) => {
    selected.value = option.value
    emit("update:modelValue", option.value)
    emit("change", option.value)

    isOpen.value = false
}

const selectedLabel = computed(() => {
    const selectedOption = props.options.find(
        (option) => option.value === selected.value,
    )
    return selectedOption ? selectedOption.label : null
})
</script>

<style scoped>
.custom-select {
    position: relative;
    width: 200px;
    font-family: Arial, sans-serif;
}

.select-box {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border: 1px solid #ccc;
    cursor: pointer;
    border-radius: 4px;
}

.arrow {
    margin-left: 10px;
}

.arrow.open {
    transform: rotate(180deg);
}

.options-list {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 4px;
    z-index: 10;
    max-height: 150px;
    overflow-y: auto;
}

.options-list li {
    padding: 10px;
    cursor: pointer;
}

.options-list li:hover,
.selected-option {
    background-color: #eee;
}
</style>
