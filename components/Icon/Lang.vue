<script setup>
const switchLocalePath = useSwitchLocalePath();
const { locale } = useI18n();

const props = defineProps({
    isButton: {
        default: false,
        type: Boolean,
    },
})
</script>

<template>
    <NuxtLink :to="switchLocalePath(`${locale == 'uz' ? 'ru' : 'uz'}`)"
        :class="{ 'lg:py-3 lg:px-4 lg:h-10 lg:bg-white lg:hover:bg-[#E5E9F0] lg:active:bg-[#CCD3E1]': props.isButton }"
        class="flex gap-2 items-center rounded-lg cursor-pointer select-none">
        <div class="w-6 h-6 flex justify-center items-center cursor-pointer">
            <img v-if="locale == 'ru'" src="~/assets/icons/uzbekistan.svg" alt="Uzbek">
            <img v-else src="~/assets/icons/russia.svg" alt="Russian">
        </div>
        <span class="text-sm text-darkBlue max-lg:hidden" v-if="props.isButton">
            {{ locale == 'ru' ? 'O‘zbekcha' : 'Русский' }}
        </span>
    </NuxtLink>
</template>