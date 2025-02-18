<script setup>
const route = useRoute();
const filters = useFilters();

const uncheckFilter = (index) => {
    if (index == 0) {
        const { specialty_id, ...rest } = route.query;
        filters.value[index].value = null;
        navigateTo({ query: rest });
    } else if (index == 1) {
        const { date, ...rest } = route.query;
        filters.value[index].value = null;
        navigateTo({ query: rest });
    } else if (index == 2) {
        const { metro_id, ...rest } = route.query;
        filters.value[index].value = null;
        navigateTo({ query: rest });
    }
}
</script>

<template>
    <div class="flex-y-center gap-x-4 gap-y-2 flex-wrap">
        <ClientOnly>
            <div v-for="(item, index) in filters" :key="index">
                <div class="bg-blue hover:bg-[#176BC2] active:bg-[rgb(23,107,194)] flex-y-center gap-1 rounded-lg px-3 py-2 text-sm text-white leading-normal cursor-pointer transition-200 whitespace-nowrap"
                    v-if="item.value" @click="uncheckFilter(index)">
                    {{ item.value }}
                    <img src="~/assets/icons/unselect.svg" alt="uncheck">
                </div>
                <div v-else @click="$emit('filterOpen')"
                    class="bg-bg hover:bg-[#DBE3F0] active:bg-[#DBE3F0] rounded-lg px-3 py-2 text-sm text-darkBlue leading-normal cursor-pointer transition-200">
                    {{ $t(item.default) }}
                </div>
            </div>
        </ClientOnly>
    </div>
</template>
