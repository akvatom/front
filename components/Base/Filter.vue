<script setup>
const { locale } = useI18n();
const props = defineProps({
    loading: Boolean,
    count: Number,
})

const route = useRoute();
// filter data
const specialties = ref(route.query.specialty_id ?? 0);
const onSpecChange = (id) => {
    if (specialties.value == id) {
        specialties.value = 0;
    } else {
        specialties.value = id;
    }
};
const gender = ref(route.query.gender ?? 0);
const onGenderChange = (val) => {
    gender.value = val;
};
const date = ref(route.query.date ?? null);
const onDateChange = (val) => {
    date.value = val;
}
const metro = ref(route.query.metro_id ?? 0);
const onMetroChange = (val) => {
    if (metro.value == val) metro.value = 0;
    else metro.value = val;
}


const filterQueries = reactive({
    specialty_id: specialties,
    gender: gender,
    date: date,
    metro_id: metro,
})
watch(filterQueries, async (newVal) => {
    let temp = "";
    let queries = {};
    for (const property in newVal) {
        if (newVal.hasOwnProperty(property)) {
            if (
                !(property == 'specialty_id' && newVal[property] == 0) &&
                !(property == 'gender' && newVal[property] == 0) &&
                !(property == 'date' && newVal[property] == null) &&
                !(property == 'metro_id' && newVal[property] == 0) &&
                !(property == 'order_by' && newVal[property] !== undefined)
            ) {
                temp += `${temp.length ? '&' : ''}${property}=${newVal[property]}`;
                queries[property] = newVal[property];
            }
        }
    }
    if (route.query.order_by) queries.order_by = route.query.order_by;
    navigateTo({ query: queries });
})
</script>

<template>
    <div class="bg-white rounded-2xl p-4 flex flex-col gap-4">
        <div class="flex flex-col gap-4">
            <div class="flex justify-between items-center">
                <div class="text-2xl font-bold text-darkBlue">{{ $t("filterTitle") }}</div>
                <NuxtLink :to="{ query: {} }" class="text-sm text-blue hover:text-red active:text-[#BA2A6F] cursor-pointer">
                    {{ $t("reset") }}</NuxtLink>
            </div>
            <div class="flex flex-col gap-4">
                <FilterSpecialties :selected="+specialties" @on-change="onSpecChange" :gender="+gender"
                    @on-gender-change="onGenderChange" />
                <hr class="border-t border-dividers" />
                <FilterDate :selected="date" @on-change="onDateChange" />
                <hr class="border-t border-dividers" />
                <FilterMetro :selected="+metro" @on-change="onMetroChange" />
            </div>
            <BaseButton state="primary" class="sticky bottom-4 lg:hidden" @click="$emit('close')">{{ $t("select") }}</BaseButton>
        </div>
    </div>
</template>


<style scoped>
.date-panel-border {
    border-bottom: 4px solid #ddd;
    border-top: 4px solid #ddd;
    height: 60px;
    left: 20px;
    position: absolute;
    top: 90px;
    width: calc(100% - 40px);
}
</style>
