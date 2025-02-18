<script setup>
const props = defineProps({
    selected: {
        required: true,
        type: Number,
    },
})

const genders = [
    {
        id: 2,
        name: "gender[0]",
    },
    {
        id: 1,
        name: "gender[1]",
    },
];

watch(() => props.selected, () => handleSelected());

function handleSelected() {
    var widthOfNav = 0;
    var leftOfNav = 0;
    setTimeout(() => {
        const el = document.querySelectorAll(".gender-filter");
        const activeEl = document.querySelectorAll(".selected-gender");
        if (!activeEl.length || !el.length) return;
        el.forEach(item => {
            activeEl.forEach(active => {
                if (active.offsetWidth) {
                    widthOfNav = active.offsetWidth
                    leftOfNav = active.offsetLeft
                    item.style.width = `${widthOfNav}px`
                    item.style.left = `${leftOfNav}px`
                }
            })
        })
    }, 1);
}


onMounted(() => {
    handleSelected();
    window.addEventListener("resize", () => handleSelected());
})
</script>

<template>
    <div class="flex flex-col gap-2">
        <div class="text-xs text-secondary">{{ $t("genderTitle") }}</div>
        <div class="p-0.5 bg-bg rounded-lg">
            <div class="relative flex">
                <div class="gender-filter bg-white h-7 gender-shadow rounded-lg absolute top-0 transition-300">
                </div>
                <div class="px-2 py-1.5 h-7 relative w-1/3 flex justify-center items-center cursor-pointer text-xs text-darkBlue leading-5 transition-300"
                    :class="{ 'font-bold selected-gender': selected == 0 }" @click="$emit('onChange', 0)">
                    {{ $t('nomatter') }}
                    <div v-if="selected == 1"
                        class="w-[0.65px] h-5 rounded-[0.5px] bg-dividers absolute right-[1.3px] top-1"></div>
                </div>
                <div class="px-2 py-1.5 h-7 relative w-1/3 flex justify-center items-center cursor-pointer text-xs text-darkBlue leading-5 transition-300"
                    v-for="item in genders" :key="item.key" :class="{ 'font-bold selected-gender': selected == item.id }"
                    @click="$emit('onChange', item.id)">
                    <div v-if="selected == 0 && item.id == 2"
                        class="w-[0.65px] h-5 rounded-[0.5px] bg-dividers absolute right-[1.3px] top-1"></div>
                    {{ $t(item.name) }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.gender-shadow {
    box-shadow: 0px 3px 1px 0px rgba(0, 0, 0, 0.04), 0px 3px 8px 0px rgba(0, 0, 0, 0.12);
}
</style>