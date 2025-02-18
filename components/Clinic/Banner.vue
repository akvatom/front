<script setup>
const open = useClinicModal();
</script>

<template>
  <div
    class="bg-blue rounded-lg md:rounded-2xl p-4 md:p-8 flex items-center gap-2 md:gap-6 relative max-lg:justify-between">
    <p class="text-white font-bold text-[13px] md:text-2xl">
      {{ $t("clinic.title") }}
    </p>
    <BaseButton @click="open = true" state="secondary"
      class="px-4 py-2 md:p-4 text-sm h-[unset] !text-blue whitespace-nowrap">
      {{ $t("clinic.add") }}
    </BaseButton>
    <img class="absolute right-0 top-0 max-lg:hidden" src="~/assets/icons/circle-bg.svg" alt="circle ">
    <img class="absolute right-[5rem] bottom-0 max-lg:hidden" src="~/assets/icons/clinic.png" alt="clinic">
    <img class="absolute right-[16rem] bottom-0 max-lg:hidden" src="~/assets/icons/iPhone.png" alt="iphone">
  </div>
</template>
