<script setup>
const { tm } = useI18n();
</script>

<template>
    <div class="container my-5 mx-auto px-4 md:px-8">
        <div class="mt-5">
            <div class="text-3xl text-black font-bold">{{ $t("privacy.title") }}</div>
            <div class="text-base leading-normal mt-2">
                {{ $t("privacy.description") }}
            </div>
        </div>
        <div class="mt-5" v-for="item in tm('privacy.list')" :key="item.key">
            <div class="text-3xl text-black font-bold">{{ item.title }}</div>
            <div class="text-base leading-normal mt-2">
                {{ item.description }}
            </div>
        </div>
    </div>
</template>
