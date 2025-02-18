export default defineNuxtRouteMiddleware(async (to, from) => {
  const { $i18n } = useNuxtApp();
  const locale = $i18n.locale;
  const user = useUserInfo();
  
  if (!user.value) await usePersonalData(locale.value);
  if (!user.value && to.path !== "/") {
    if (locale.value == "uz") {
      return navigateTo(`/uz`);
    } else return navigateTo("/");
  }
});
