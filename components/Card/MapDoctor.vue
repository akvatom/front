<script setup>
const props = defineProps({
    doctor: { required: true, type: Object }
})
</script>

<template>
    <div class="flex gap-4">
        <div class="border border-dividers rounded-[9px] relative">
            <img class="rounded-lg" width="100" height="125" :src="doctor.avatar_300_375" alt="avatar">
            <div class="bg-red rounded-b-lg text-xs md:text-[15px] text-white text-center absolute bottom-0 left-0 w-full h-[18px] md:h-[26px] flex-center"
                v-if="doctor.experience">
                стаж {{ doctor.experience }} лет
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <p class="text-base text-darkBlue font-bold">{{ doctor.full_name }}</p>
            <div class="flex flex-col gap-0.5">
                <div class="flex-y-center gap-1 flex-wrap" v-if="doctor.specialties">
                    <span v-for="(item, index) in doctor.specialties.slice(0, 3)"
                        class="text-xs font-bold leading-normal text-blue flex-y-center gap-1">
                        <svg v-if="index != 0" xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2"
                            fill="none">
                            <circle cx="1" cy="1" r="1" fill="#1D7ED8" />
                        </svg>
                        {{ item.name }}
                    </span>
                </div>
                <div class="text-xs leading-normal text-secondary" v-if="doctor.degree.name">
                    {{ doctor.degree.name }}</div>
            </div>
            <div class="p-3 rounded-lg bg-bg flex flex-col gap-1">
                <p class="text-xs text-secondary leading-normal">Стоимость приема в клинике:</p>
                <div class="flex-y-center gap-1">
                    <div class="text-sm font-bold text-darkBlue leading-normal">
                        {{ numberWithSpaces(doctor.discount_price ?? doctor.original_price) }} сум
                    </div>
                    <div class="flex-y-center gap-1 " v-if="doctor.discount_price">
                        <div class="text-xs text-red line-through">
                            {{ numberWithSpaces(doctor.original_price) }} сум
                        </div>
                        <div class="bg-blue bg-opacity-10 rounded px-1 py-0.5 text-xs font-bold text-blue leading-normal">
                            -{{ Math.floor(100 - doctor.discount_price * 100 / doctor.original_price) }}%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>