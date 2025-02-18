<script setup>
const props = defineProps(['doctor'])

const getPublishedDate = (val) => {
    const date = new Date(val);
    const day = (date.getDate()).toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
}
</script>

<template>
    <div class="bg-white rounded-2xl p-4 flex flex-col gap-4 lg:w-[calc(2/3*100%-10px)]">
        <div class="flex-y-center gap-1">
            <p class="text-lg text-darkBlue font-bold leading-normal">{{ $t("comments") }}</p>
            <img src="~/assets/icons/info.svg" alt="information">
        </div>
        <div class="flex gap-4">
            <div class="flex flex-col gap-1">
                <p class="text-xs text-secondary leading-normal">{{ $t("overallRating") }}:</p>
                <div class="flex-y-center gap-1">
                    <img src="~/assets/icons/star_full.svg" alt="Average rating">
                    <p class="text-darkBlue font-bold text-2xl leading-normal">
                        {{ doctor.average_rating.toFixed(1) }}
                    </p>
                </div>
            </div>
            <div class="bg-dividers w-[1px]"></div>
            <div class="flex flex-col gap-1">
                <p class="text-xs text-secondary leading-normal">{{ $t("numberRating") }}:</p>
                <div class="flex-y-center gap-1">
                    <img src="~/assets/icons/chatting.svg" alt="Number of ratings">
                    <p class="text-darkBlue font-bold text-2xl leading-normal">{{ doctor.count_of_ratings }}</p>
                </div>
            </div>
        </div>
        <BaseButton class="font-normal" state="secondary" @click="$emit('comment')">{{ $t("leaveComment") }}</BaseButton>
        <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-4" v-for="(item, index) in doctor.ratings" :key="item.id">
                <hr class="border-t border-dividers" v-if="index != 0">
                <div class="flex flex-col gap-2">
                    <div class="flex-y-center gap-2">
                        <img class="rounded-full" src="~/assets/icons/user-avatar.svg" alt="avatar"
                            v-if="item.person.gender == 'M'">
                        <img class="rounded-full" src="~/assets/icons/user-avatar-female.svg" alt="avatar" v-else>
                        <div class="flex flex-col gap-1">
                            <p class="text-sm font-bold text-darkBlue leading-normal">{{ item.person.first_name }}</p>
                            <p class="text-xs text-secondary leading-normal">{{ getPublishedDate(item.created_at) }}
                            </p>
                        </div>
                    </div>
                    <div class="flex-y-center gap-1">
                        <div class="flex gap-0.5">
                            <img src="~/assets/icons/star_full.svg" alt="star" v-for="star in item.ball" :key="star.key"
                                width="16" height="16">
                            <img src="~/assets/icons/star_empty.svg" alt="star" v-for="empty in (5 - item.ball)"
                                :key="empty.key">
                        </div>
                        <span class="bg-yellow bg-opacity-10 rounded px-1 py-0.5 text-xs font-bold text-yellow">{{
                            $t(`rating[${item.ball - 1}]`) }}</span>
                    </div>
                    <div class="text-sm text-darkBlue leading-normal" v-html="item.text" v-if="item.text"></div>
                </div>
            </div>
        </div>
    </div>
</template>
