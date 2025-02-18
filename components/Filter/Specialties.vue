<script setup>
import { useScroll, useScrollLock } from '@vueuse/core'
const { locale } = useI18n();

const props = defineProps({
    selected: {
        required: true,
        type: Number,
    },
    gender: {
        required: true,
        type: Number,
    },
})
const filters = useFilters();
const emits = defineEmits(['onGenderChange', 'onChange'])
const onChange = (val) => {
    emits('onGenderChange', val)
}

const dataSpecialties = await useFetchWithCache(`${locale.value}/specialties/`)
// const { data: dataSpecialties } = await useMyFetch(`${locale.value}/specialties/`)
const specialties = ref(dataSpecialties.value?.specialties);
const selectedIndex = ref(props.selected ? '' : null);

const filtered = ref(specialties.value);

const isOpen = ref(false);
const search = ref(null);

const isNextLetter = (index) => {
    if (index == 0) return true;
    return specialties.value[index].name.charAt(0) !== specialties.value[index - 1].name.charAt(0);
};

watch(search, val => {
    filtered.value = [];
    specialties.value.map(item => {
        if (item.name.toLowerCase().includes(val.toLowerCase())) {
            filtered.value.push(item);
        }
    })
})

watch(() => props.selected, val => {
    isOpen.value = false;
    if (val == 0) {
        selectedIndex.value = null
        filters.value[0].value = null;
        return;
    };
    var temp = getIndex(val);
    if (temp) {
        selectedIndex.value = temp;
        filters.value[0].value = specialties.value[selectedIndex.value].name;
    };
})

watch(isOpen, val => {
    setTimeout(() => {
        document.querySelector("#specialties-search").querySelector("input").focus();
    }, 1);

    const el = document.querySelector(".fixed-filter")
    if (!el) return;
    const { y } = useScroll(el)
    const isLocked = useScrollLock(el)

    if (val) {
        y.value = 0;
        isLocked.value = true;
    } else {
        el.style.overflowY = 'auto';
    };
})

function getIndex(id) {
    let val;
    specialties.value.map((item, index) => {
        if (item.id == id) val = index;
    })
    return val;
}
</script>

<template>
    <div>
        <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
                <div class="text-xs text-secondary">{{ $t("specialtiesTitle") }}</div>
                <div class="flex flex-wrap gap-2">
                    <div class="px-3 py-2 border border-blue hover:bg-[#E5E9F0] cursor-pointer rounded-lg line-clamp-1 text-sm text-darkBlue transition-100"
                        :class="{ 'text-white bg-blue hover:bg-blue': selected == 0 }" @click="$emit('onChange', 0)">
                        {{ $t("nomatter") }}
                    </div>
                    <div class="px-3 py-2 border border-blue hover:bg-darkBlue hover:bg-opacity-10 active:bg-blue active:text-white cursor-pointer rounded-lg line-clamp-1 text-sm text-darkBlue transition-100 flex-y-center gap-1"
                        :class="{ 'selected bg-blue text-white': selected == item.id }" v-if="specialties"
                        v-for="item in specialties.slice(0, 8)" :key="item.key" @click="$emit('onChange', item.id)">
                        {{ item.name }}
                        <img v-if="selected == item.id" src="~/assets/icons/unselect.svg" alt="uncheck">
                    </div>
                    <div class="px-3 py-2 border border-blue cursor-pointer rounded-lg line-clamp-1 text-sm transition-100 text-white bg-blue hover:bg-blue flex-y-center gap-1"
                        @click="$emit('onChange', specialties[selectedIndex].id)" v-if="selectedIndex >= 8">
                        {{ specialties[selectedIndex].name }}
                        <img src="~/assets/icons/unselect.svg" alt="uncheck">
                    </div>
                    <div class="px-3 py-2 bg-bg hover:bg-[#DBE3F0] active:bg-[#DBE3F0] cursor-pointer rounded-lg line-clamp-1 text-sm text-darkBlue transition-100"
                        @click="isOpen = true">Все специальности</div>
                </div>
            </div>
            <hr class="border-t border-dividers" />
            <FilterGender :selected="gender" @on-change="onChange" />
        </div>

        <Transition name="fade" mode="out-in">
            <PageModal :is-open="isOpen" @close="isOpen = false" v-if="isOpen">
                <template #body>
                    <div
                        class="fixed-center z-[100] max-w-[804px] w-full max-lg:h-full lg:max-h-[80%] bg-white p-4 rounded-2xl flex flex-col gap-4">
                        <p class="text-darkBlue text-2xl font-bold leading-normal text-center">Все специальности</p>
                        <div class="flex flex-col gap-4 overflow-hidden">
                            <BaseSearchInput v-model="search" placeholder="Введите специальность"
                                id="specialties-search" />
                            <div class="flex flex-col gap-1 overflow-y-auto scrollbar-style">
                                <p class="text-xs text-secondary">Специальность</p>
                                <div class="flex flex-col">
                                    <div class="flex-y-center gap-4 hover:bg-darkBlue hover:bg-opacity-10 active:bg-darkBlue active:bg-opacity-20 cursor-pointer rounded-2xl px-4"
                                        v-for="item, index in filtered" :key="item.key"
                                        @click="$emit('onChange', item.id)" :class="{ 'bg-bg': item.id == selected }">
                                        <div class="flex-center w-6">
                                            <span v-if="isNextLetter(index)"
                                                class="rounded flex-center w-6 h-6 bg-bg text-base font-bold text-secondary leading-normal">
                                                {{ item.name[0] }}</span>
                                        </div>
                                        <div
                                            class="py-4 flex-y-center justify-between border-b border-dividers w-full h-[50px]">
                                            <p class="text-sm text-darkBlue">{{ item.name }}</p>
                                            <img v-if="item.id == selected" src="~/assets/icons/tick.svg" alt="tick">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </PageModal>
        </Transition>
    </div>
</template>

<style scoped>
.selected:hover,
.selected:active {
    background: linear-gradient(0deg, rgba(0, 33, 104, 0.20) 0%, rgba(0, 33, 104, 0.20) 100%), #1D7ED8;
}
</style>
