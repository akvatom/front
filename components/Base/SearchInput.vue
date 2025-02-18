<script setup>
const { locale } = useI18n();

const props = defineProps({
    modelValue: {
        required: true,
    },
    isList: {
        required: false,
        default: false,
        type: Boolean,
    },
    placeholder: {
        required: true,
        type: String,
    },
})

const inputModelValue = ref(null)
inputModelValue.value = props.modelValue
const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
    emit('update:modelValue', inputModelValue.value);
}

const searched = ref(true);
const isFocused = ref(false);

const results = ref(null);
const specialties = ref([]);
const doctors = ref([]);
watch(inputModelValue, async (newVal) => {
    searched.value = false;
    if (!props.isList) return;

    isFocused.value = true;
    const { data } = await useMyFetch(`${locale.value}/specialties/?search=${newVal}`)
    results.value = data.value;
    if (data.value) {
        if (data.value.specialties.length) specialties.value = sortByName(data.value.specialties);
        else specialties.value = [];

        if (data.value.doctors && data.value.doctors.length) doctors.value = sortByName(data.value.doctors);
        else doctors.value = [];
    }
})

const isNextLetter = (arr, index) => {
    if (index == 0) return true;
    return arr[index].name.charAt(0) != arr[index - 1].name.charAt(0);
}

function sortByName(arr) {
    let result = arr.sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // names must be equal
        return 0;
    });

    return result;
}
</script>

<template>
    <form @submit.prevent class="w-full relative" v-click-outside="() => isFocused = false">
        <div class="relative overflow-hidden">
            <div class="absolute inset-y-0 left-4 flex items-center pointer-events-none max-md:w-[18px] ">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd"
                        d="M2.75 11.5C2.75 16.3325 6.66751 20.25 11.5 20.25C16.3325 20.25 20.25 16.3325 20.25 11.5C20.25 6.66751 16.3325 2.75 11.5 2.75C6.66751 2.75 2.75 6.66751 2.75 11.5ZM11.5 21.75C5.83908 21.75 1.25 17.1609 1.25 11.5C1.25 5.83908 5.83908 1.25 11.5 1.25C17.1609 1.25 21.75 5.83908 21.75 11.5C21.75 14.0605 20.8111 16.4017 19.2589 18.1982L22.5303 21.4697C22.8232 21.7626 22.8232 22.2374 22.5303 22.5303C22.2374 22.8232 21.7626 22.8232 21.4697 22.5303L18.1982 19.2589C16.4017 20.8111 14.0605 21.75 11.5 21.75Z"
                        fill="#002168" />
                </svg>
            </div>
            <input type="text" autocomplete="off" @input="updateValue" v-model="inputModelValue"
                class="block h-12 w-full p-4 pl-12 text-sm caret-blue text-darkBlue placeholder:text-[#92A3C3] bg-bg hover:bg-[#DBE3F0] active:bg-[#C2CEE1] focus:bg-white focus:active:bg-white border border-[rgba(0,0,0,0)] focus:border-blue focus:outline-none rounded-lg"
                :placeholder="props.placeholder" @focus="isFocused = true">
        </div>
        <div class="py-4 bg-white rounded-lg absolute top-full mt-2 left-0 w-full results z-[10] max-h-[60vh] overflow-auto scrollbar-style"
            v-if="isList && isFocused && results">
            <div class="flex flex-col gap-4" v-if="specialties.length || doctors.length">
                <div class="flex flex-col" v-if="specialties.length">
                    <p class="text-xs text-secondary leading-normal pl-4">{{ $t("specialties") }}</p>
                    <NuxtLinkLocale :to="`/?specialty_id=${item.id}`" @click="isFocused = false"
                        class="flex-y-center gap-4 px-4 h-[50px] hover:bg-[#E5E9F0] active:bg-[#CCD3E1] focus-visible:bg-[#E5E9F0] focus:outline-none outline-none rounded-lg transition-100"
                        v-for="(item, index) in specialties" :key="item.key">
                        <div class="w-6 h-6">
                            <span class="bg-bg w-6 h-6 flex-center rounded text-base text-secondary font-bold leading-normal uppercase"
                                v-if="isNextLetter(specialties, index)">
                                {{ item.name.charAt(0) }}
                            </span>
                        </div>
                        <p class="text-sm text-darkBlue leading-normal">{{ item.name }}</p>
                    </NuxtLinkLocale>
                </div>
                <div class="flex flex-col" v-if="doctors && doctors.length">
                    <p class="text-xs text-secondary leading-normal pl-4">{{ $t("doctors") }}</p>
                    <NuxtLinkLocale :to="`/doctor/${item.id}`" @click="isFocused = false"
                        class="flex-y-center gap-4 px-4 h-[50px] hover:bg-[#E5E9F0] active:bg-[#CCD3E1] focus-visible:bg-[#E5E9F0] focus:outline-none outline-none rounded-lg transition-100"
                        v-for="(item, index) in doctors" :key="item.key">
                        <div class="w-6 h-6">
                            <span class="bg-bg w-6 h-6 flex-center rounded text-base text-secondary font-bold leading-normal uppercase"
                                v-if="isNextLetter(doctors, index)">
                                {{ item.name.charAt(0) }}
                            </span>
                        </div>
                        <p class="text-sm text-darkBlue leading-normal">{{ item.name }}</p>
                    </NuxtLinkLocale>
                </div>
            </div>
            <div class="px-4 text-sm text-darkBlue leading-normal" v-else>{{ $t("notfound") }}</div>
        </div>
    </form>
</template>

<style>
.results {
    box-shadow: 0px 18px 88px -4px rgba(24, 39, 75, 0.14), 0px 8px 28px -6px rgba(24, 39, 75, 0.12);
}
</style>
