<script setup>
const { locale } = useI18n();
const route = useRoute();
const tempQuery = ref(route.query);

const { data: dataDoctors } = await useMyFetch(`${locale.value}/doctors/`, { query: tempQuery.value, format: 'json' });
const doctors = ref(dataDoctors.value.results);
const count = useCount();
count.value = dataDoctors.value.count;
const pagination = ref(dataDoctors.value);

const sort = useSort();
const sortActive = ref(0);
watch(sortActive, newVal => {
    let temp = {};
    temp.order_by = sort.value[newVal].slug;
    let queries = Object.assign({}, route.query, temp)
    navigateTo({ query: queries });
})

const isFilterOpen = ref(false);
const isLoading = ref(false);

watch(() => route.query, async val => {
    let temp = val;
    isLoading.value = true;
    const { data } = await useMyFetch(`${locale.value}/doctors/`, { query: temp, format: 'json' });
    pagination.value = data.value;
    doctors.value = data.value.results
    count.value = data.value.count
    isLoading.value = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
})

const clinics = sortByClinic();

function sortByClinic() {
    const temp = doctors.value.reduce((acc, doctor) => {
        const clinicId = doctor.clinic.id;

        // Create an array for the clinic if it doesn't exist
        if (!acc[clinicId]) {
            acc[clinicId] = [];
        }

        // Add the doctor to the clinic's array
        acc[clinicId].push(doctor);

        return acc;
    }, {});

    return Object.keys(temp).map((clinicId) => ({
        clinicId: clinicId, // Convert clinicId to number if needed
        latitude: temp[clinicId][0].clinic.latitude,
        longitude: temp[clinicId][0].clinic.longitude,
        doctors: temp[clinicId],
    }));;
}
</script>

<template>
    <div class="flex flex-col">
        <div class="lg:hidden bg-white px-4 md:pb-4 w-full">
            <div class="flex justify-between items-center max-w-[1280px] w-full lg:px-8">
                <div class="flex-y-center gap-4">
                    <BaseDropdownSort />
                    <BaseFilterCard class="max-md:hidden" @filter-open="isFilterOpen = true" />
                </div>
                <div @click="isFilterOpen = true"
                    class="px-4 py-3 flex-y-center gap-1 h-10 bg-white hover:bg-[#E5E9F0] active:bg-[#E5E9F0] cursor-pointer rounded-lg">
                    <div class="w-[18px] h-[18px] flex-center">
                        <img src="~/assets/icons/filter.svg" alt="filter">
                    </div>
                    <span class="text-sm text-darkBlue">{{ $t("filterTitle") }}</span>
                </div>
            </div>
            <BaseFilterCard class="md:hidden mt-2 mb-4" @filter-open="isFilterOpen = true" />
        </div>

        <div class="container py-4 md:py-5 flex gap-5">
            <div class="flex flex-col items-center gap-4 w-full lg:w-[804px] shrink-0">
                <CardDoctor v-for="item in doctors" :key="item.id" :doctor="item" />
                <BasePagination :pagination="pagination" />
            </div>
            <div class="flex flex-col gap-5 max-lg:hidden select-none">
                <!-- sort -->
                <div class="bg-white rounded-2xl p-4 flex flex-col gap-4">
                    <div class="text-2xl font-bold text-darkBlue">{{ $t("sortTitle") }}</div>
                    <div class="flex flex-wrap gap-2">
                        <div class="px-3 py-2 border border-blue hover:bg-[#E5E9F0] cursor-pointer rounded-lg line-clamp-1 text-sm text-darkBlue"
                            :class="{ 'text-white bg-blue hover:bg-blue': sortActive == index }"
                            v-for="item, index in sort" :key="item.key" @click="sortActive = index">
                            {{ $t(`sort[${index}]`) }}
                        </div>
                    </div>
                </div>
                <BaseFilter :grouped="clinics" :loading="isLoading" :count="count" />
            </div>

            <Transition name="fade" mode="out-in">
                <div v-if="isFilterOpen" class="lg:hidden">
                    <div class="bg-darkBlue bg-opacity-70 inset-0 fixed z-[99]" @click="isFilterOpen = false"></div>
                    <div
                        class="fixed-filter fixed-center w-[calc(100%-32px)] max-w-[800px] z-[100] max-h-[80%] overflow-y-auto rounded-2xl">
                        <BaseFilter :grouped="clinics" @close="isFilterOpen = false" />
                    </div>
                </div>
            </Transition>
        </div>
    </div>
</template>
