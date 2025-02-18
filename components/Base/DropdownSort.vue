<script setup>
import { useWindowScroll } from '@vueuse/core'

const options = useSort();
const selected = useSelectedSort();
const changeSort = (val) => {
    selected.value = val;
    show.value = false;
}

const show = ref(false);

const { y } = useWindowScroll()
watch(() => y.value, () => { show.value = false });

const onClickOutside = () => show.value = false;
</script>

<template>
    <div class="select-none relative" v-click-outside="onClickOutside">
        <div @click="show = !show"
            class="px-4 py-3 flex gap-1 items-center h-10 bg-white hover:bg-[#E5E9F0] active:bg-[#CCD3E1] cursor-pointer rounded-lg w-fit">
            <span class="text-sm text-darkBlue">{{ $t(options[selected].name) }}</span>
            <div class="w-[18px] h-[18px] flex-center transition-200" :class="{ '-rotate-180': show }">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M0.810782 1.14863C1.00485 0.906045 1.35883 0.866714 1.60141 1.06078L5.00002 3.77967L8.39863 1.06078C8.64122 0.866714 8.99519 0.906045 9.18926 1.14863C9.38333 1.39121 9.344 1.74519 9.10141 1.93926L5.35141 4.93926C5.14598 5.10361 4.85407 5.10361 4.64863 4.93926L0.89863 1.93926C0.656045 1.74519 0.616714 1.39121 0.810782 1.14863Z"
                        fill="#002168" fill-opacity="0.4" />
                </svg>
            </div>
        </div>
        <Transition name="dropdown-sort" mode="out-in">
            <div v-if="show"
                class="absolute top-[calc(100%+4px)] left-0 z-[1] flex flex-col bg-white border border-dividers rounded-lg dropdown-shadow w-[189px]">
                <div v-for="option, index in options" :key="option.key" @click="changeSort(index)"
                    :class="{ 'border-b border-dividers': index != options.length - 1, 'selected': index == selected }"
                    class="group cursor-pointer bg-white rounded-lg">
                    <div
                        class="h-12 flex-y-center justify-between px-4 rounded-lg group-hover:bg-darkBlue group-hover:bg-opacity-10 active:bg-darkBlue active:bg-opacity-20">
                        <p class="text-sm text-darkBlue group-[.selected]:font-bold">{{ $t(option.name) }}</p>
                        <img v-if="index == selected" src="~/assets/icons/tick.svg" alt="tick">
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.dropdown-shadow {
    box-shadow: 0px 8px 24px -4px rgba(24, 39, 75, 0.08), 0px 6px 12px -6px rgba(24, 39, 75, 0.12);
}
</style>