<script setup>
const { locale, t } = useI18n();

useSeoMeta({
  title: t("title"),
  description: t("description"),
  ogTitle: t("title"),
  ogDescription: t("description"),
  twitterTitle: t("title"),
  twitterDescription: t("description"),
  twitterCard: "summary_large_image",
  ogImage: "/og-image.png",
  twitterImage: "/og-image.png",
  ogUrl: "https://clindoc.uz/",
});

useHead({
  meta: [{
    name: "theme-color",
    content: "#FFFFFF",
  }]
})


const user = useUserInfo();

if (!user.value) await usePersonalData(locale.value);
</script>

<template>
  <div class="grid grid-rows-[max-content_1fr_max-content] min-h-[100svh]">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
