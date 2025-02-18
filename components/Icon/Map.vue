<script setup>
const props = defineProps({
    isButton: {
        default: false,
        type: Boolean,
    },
})
</script>

<template>
    <div :class="{ 'lg:py-3 lg:px-4 lg:h-10 lg:bg-white lg:hover:bg-[#E5E9F0] lg:active:bg-[#CCD3E1]': props.isButton }"
        class="flex gap-2 items-center rounded-lg cursor-pointer select-none">
        <img src="~/assets/icons/map.svg" alt="map">
        <span class="text-sm text-darkBlue max-lg:hidden" v-if="props.isButton">
            <slot></slot>
        </span>
    </div>
</template>