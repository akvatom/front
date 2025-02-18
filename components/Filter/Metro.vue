<script setup>
const { locale } = useI18n();

const props = defineProps({
    selected: {
        required: true,
        type: Number,
    },
})
const filters = useFilters();

const dataMetros = await useFetchWithCache(`${locale.value}/metropolitans/`)
// const { data: dataMetros } = await useMyFetch(`${locale.value}/metropolitans/`)
const metros = ref(dataMetros.value)

const filtered = ref(metros.value);
const isOpen = ref(false);
const search = ref(null);
const selectedIndex = ref(null);

const getSelectedIndex = () => {
    metros.value.map((item, index) => {
        if (item.id == props.selected) selectedIndex.value = index;
    })
    if (selectedIndex.value) filters.value[2].value = metros.value[selectedIndex.value].name;
}
getSelectedIndex();

watch(() => props.selected, val => {
    isOpen.value = false;
    if (val == 0) {
        selectedIndex.value = null
        filters.value[2].value = null;
        return;
    };
    getSelectedIndex();
})

watch(search, val => {
    filtered.value = [];
    metros.value.map(item => {
        if (item.name.toLowerCase().includes(val.toLowerCase())) {
            filtered.value.push(item);
        }
    })
})

watch(isOpen, () => {
    setTimeout(() => {
        document.querySelector("#metro-search").querySelector('input').focus();
    }, 1);
})
</script>

<template>
    <div>
        <div class="flex flex-col gap-2">
            <div class="text-xs text-secondary">{{ $t("metroTitle") }}</div>
            <div class="flex flex-wrap gap-2">
                <div class="px-3 py-2 border border-blue hover:bg-[#E5E9F0] cursor-pointer rounded-lg line-clamp-1 text-sm text-darkBlue transition-100"
                    :class="{ 'text-white bg-blue hover:bg-blue': selected == 0 }" @click="$emit('onChange', 0)">
                    {{ $t("nomatter") }}</div>
                <div class="px-3 py-2 border border-blue hover:bg-[#E5E9F0] cursor-pointer rounded-lg line-clamp-1 text-sm text-darkBlue transition-100 flex-y-center gap-1"
                    :class="{ 'text-white bg-blue hover:bg-blue': selected == item.id }" v-for="item in metros.slice(0, 4)"
                    :key="item.key" @click="$emit('onChange', item.id)">
                    {{ item.name }}
                    <img v-if="selected == item.id" src="~/assets/icons/unselect.svg" alt="uncheck">
                </div>
                <div class="px-3 py-2 border border-blue cursor-pointer rounded-lg line-clamp-1 text-sm transition-100 text-white bg-blue hover:bg-blue flex-y-center gap-1"
                    @click="$emit('onChange', metros[selectedIndex].id)" v-if="selectedIndex >= 4">
                    {{ metros[selectedIndex].name }}
                    <img src="~/assets/icons/unselect.svg" alt="uncheck">
                </div>
                <div class="px-3 py-2 bg-bg hover:bg-[#DBE3F0] active:bg-[#DBE3F0] cursor-pointer rounded-lg line-clamp-1 text-sm text-darkBlue"
                    @click="isOpen = true">{{ $t("allMetro") }}</div>
            </div>
        </div>

        <Transition name="fade" mode="out-in">
            <PageModal :is-open="isOpen" @close="isOpen = false" v-if="isOpen">
                <template #body>
                    <div
                        class="fixed-center z-[100] max-w-[804px] w-full max-lg:h-full lg:max-h-[80%] bg-white p-4 rounded-2xl flex flex-col gap-4">
                        <p class="text-darkBlue text-2xl font-bold leading-normal text-center">
                            {{ $t("metroTitle") }}
                        </p>
                        <BaseSearchInput v-model="search" placeholder="Введите название станции" id="metro-search" />
                        <div class="overflow-y-auto scrollbar-style">
                            <div class="flex flex-col">
                                <div class="hover:bg-[#E5E9F0] text-sm text-darkBlue flex justify-between items-center h-[50px] cursor-pointer px-4 rounded-lg"
                                    :class="{ 'group bg-bg hover:bg-bg selected': selected == item.id }"
                                    v-for="item in filtered" :key="item.key" @click="$emit('onChange', item.id)">
                                    {{ item.name }}
                                    <img class="hidden group-[.selected]:block" src="~/assets/icons/tick.svg" alt="tick">
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </PageModal>
        </Transition>
    </div>
</template>
