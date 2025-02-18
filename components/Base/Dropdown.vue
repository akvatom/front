<script setup>
const props = defineProps({
    options: {
        required: true,
        type: Array,
    },
    placeholder: {
        required: true,
        type: String,
    },
    selected: {
        required: true,
    },
    error: {
        required: false,
        type: String,
    },
})

const isOpen = ref(false);
</script>

<template>
    <div class="flex flex-col gap-2">
        <div class="relative select-none">
            <div @click="isOpen = !isOpen" :class="{ '!bg-[#FFEBF2] hover:!bg-[#E5D7E4] active:!bg-[#CCC3D6]': error }"
                class="rounded-lg bg-bg hover:bg-[#DBE3F0] active:bg-[#C2CEE1] cursor-pointer px-4 h-12 flex-y-center justify-between transition-200">
                <span class="text-secondary text-sm leading-normal" v-if="selected == null">{{ $t(placeholder) }}</span>
                <span class="text-darkBlue text-sm leading-normal" v-else>{{ $t(options[selected].name) }}</span>
                <IconArrowB class="transition-200" :class="{ '-rotate-180': isOpen }" />
            </div>
            <Transition name="select" mode="out-in">
                <div v-if="isOpen"
                    class="absolute z-[11] top-full mt-1 rounded-lg border border-dividers bg-white dropdown-shadow flex flex-col w-full overflow-clip">
                    <div class="flex-y-center px-4 h-12 justify-between hover:bg-[#E5E9F0] active:bg-[#CCD3E1] cursor-pointer text-sm text-darkBlue leading-normal transition-100"
                        :class="{ 'bg-bg font-bold': selected == index, 'border-t border-dividers': index != 0 }"
                        v-for="item, index in options" :key="item.key" @click="$emit('onChange', index), isOpen = false">
                        {{ $t(item.name) }}
                        <img src="~/assets/icons/tick.svg" alt="tick" v-if="selected == index">
                    </div>
                </div>
            </Transition>
        </div>
        <p class="text-red text-xs leading-normal" v-if="error">{{ $t(error) }}</p>
    </div>
</template>

<style scoped>
.dropdown-shadow {
    box-shadow: 0px 8px 24px -4px rgba(24, 39, 75, 0.08), 0px 6px 12px -6px rgba(24, 39, 75, 0.12);
}

.select-enter-active,
.select-leave-active {
    transition: all 0.2s ease-in-out;
}

.select-enter-from,
.select-leave-to {
    opacity: 0;
    transform: translateY(-5px);
}
</style>