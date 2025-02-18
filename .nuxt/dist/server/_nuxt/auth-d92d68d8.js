import { C as defineNuxtRouteMiddleware, l as useUserInfo, D as executeAsync, m as usePersonalData, v as navigateTo, E as useNuxtApp } from "../server.mjs";
import "vue";
import "destr";
import "devalue";
import "defu";
import "klona";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "@vue/devtools-api";
import "cookie-es";
import "js-cookie";
import "is-https";
import "click-outside-vue3";
import "vue-recaptcha-v3";
import "vue/server-renderer";
import "ohash";
const auth = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to, from) => {
  let __temp, __restore;
  const { $i18n } = useNuxtApp();
  const locale = $i18n.locale;
  const user = useUserInfo();
  if (!user.value)
    ;
  [__temp, __restore] = executeAsync(() => usePersonalData(locale.value)), await __temp, __restore();
  if (!user.value && to.path !== "/") {
    if (locale.value == "uz") {
      return navigateTo(`/uz`);
    } else
      return navigateTo("/");
  }
});
export {
  auth as default
};
//# sourceMappingURL=auth-d92d68d8.js.map
