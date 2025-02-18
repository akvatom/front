<script setup>
const { t } = useI18n();

const emit = defineEmits(['onChange'])
const props = defineProps({
    selected: { required: true },
})
const filters = useFilters();
const filterDate = ref(props.selected)
const isModalDateOpen = ref(false);

const datePanels = ref([]);
const dates = initDates(21);
const filterDateIndex = ref(null);
dates.map((date, index) => {
    if (date.date == props.selected) filterDateIndex.value = index;
})

function initDates(days) {
    let temp = [];
    for (let i = 0; i < days; i++) {
        temp.push(getDateInfo(i));
    }
    return temp;
}
function getDateInfo(offset) {
    const today = new Date();
    const targetDate = new Date();
    targetDate.setDate(today.getDate() + offset);
    var weekdayName = null;

    switch (offset) {
        case 0:
            weekdayName = t(`days.today`)
            break;
        case 1:
            weekdayName = t(`days.tomorrow`)
            break;

        default:
            weekdayName = t(`weekdays[${targetDate.getDay()}]`);
            break;
    }
    const date = targetDate.toISOString().split('T')[0];
    const text = `${weekdayName}, ${targetDate.getDate()}`;
    datePanels.value.push(text);
    return { date, text };
};

const tempDayIndex = ref(null);
const onDayChange = e => {
    tempDayIndex.value = e.index;
}

const onSubmit = () => {
    isModalDateOpen.value = false;
    filterDateIndex.value = tempDayIndex.value;
    filters.value[1].value = dates[filterDateIndex.value].text;
    emit('onChange', dates[tempDayIndex.value].date);
}

const onDayClick = (val, index) => {
    if (index && filterDateIndex.value !== index) {
        filterDateIndex.value = index
        filters.value[1].value = dates[filterDateIndex.value].text;
        emit('onChange', val);
    } else {
        filterDateIndex.value = null;
        filters.value[1].value = null;
        emit('onChange', null);
    }
}

watch(filterDateIndex, val => console.log(val))
</script>

<template>
    <div class="flex flex-col gap-2">
        <div class="text-xs text-secondary">{{ $t("filter.date") }}</div>
        <div class="flex flex-wrap gap-2">
            <div class="px-3 py-2 border border-blue hover:bg-[#E5E9F0] cursor-pointer rounded-lg line-clamp-1 text-sm text-darkBlue"
                :class="{ 'text-white bg-blue hover:bg-blue': filterDateIndex == null }"
                @click="onDayClick(null, null)">
                {{ $t("nomatter") }}
            </div>
            <div class="px-3 py-2 border border-blue hover:bg-[#E5E9F0] cursor-pointer rounded-lg line-clamp-1 text-sm text-darkBlue flex-y-center gap-1"
                :class="{ 'text-white bg-blue hover:bg-blue': filterDateIndex == index }"
                v-for="item, index in dates.slice(0, 4)" :key="item.key" @click="onDayClick(item.date, index)">
                {{ item.text }}
                <img v-if="filterDateIndex == index" src="~/assets/icons/unselect.svg" alt="uncheck">
            </div>
            <div class="px-3 py-2 border border-blue cursor-pointer rounded-lg line-clamp-1 text-sm flex-y-center gap-1 text-white bg-blue hover:bg-blue"
                @click="onDayClick(null, null)" v-if="filterDateIndex >= 4">
                {{ dates[filterDateIndex].text }}
                <img src="~/assets/icons/unselect.svg" alt="uncheck">
            </div>
            <div class="px-3 py-2 bg-bg hover:bg-[#DBE3F0] active:bg-[#DBE3F0] cursor-pointer rounded-lg line-clamp-1 text-sm text-darkBlue"
                @click="isModalDateOpen = true">{{ $t("alldates") }}</div>

        </div>
    </div>
    <Teleport to="body">
        <Transition name="fade" mode="out-in">
            <PageModal :is-open="isModalDateOpen" @close="isModalDateOpen = false" v-if="isModalDateOpen">
                <template #body>
                    <div
                        class="fixed-center z-[100] max-w-[668px] w-full max-lg:h-full lg:max-h-[80%] bg-white p-4 rounded-2xl flex flex-col gap-4 overflow-hidden">
                        <div class="text-2xl text-darkBlue font-bold text-center">{{ $t("filter.date") }}</div>
                        <BaseDatePicker class="w-full" uniqueID="flicking-date" :panels="datePanels"
                            @on-change="onDayChange" :selected="filterDateIndex" />
                        <BaseButton state="primary" @click="onSubmit">{{ $t("select") }}</BaseButton>
                    </div>
                </template>
            </PageModal>
        </Transition>
    </Teleport>
</template>
