<script setup>
const props = defineProps({
    isButton: {
        default: false,
        type: Boolean,
    },
})
</script>

<template>
    <div :class="{ 'md:py-3 md:px-4 md:h-10 md:bg-bg md:hover:bg-[#DBE3F0] md:active:bg-[#DBE3F0]': props.isButton }"
        class="flex gap-2 items-center rounded-lg cursor-pointer select-none">
        <div class="w-6 h-6 flex justify-center items-center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18" fill="none">
                <ellipse opacity="0.4" cx="7" cy="14" rx="7" ry="4" fill="#1D7ED8" />
                <circle cx="7" cy="4" r="4" fill="#1D7ED8" />
            </svg>
        </div>
        <span class="text-sm text-darkBlue max-md:hidden" v-if="props.isButton">
            <slot></slot>
        </span>
    </div>
</template>