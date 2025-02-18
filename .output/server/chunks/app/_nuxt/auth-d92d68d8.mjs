import { C as defineNuxtRouteMiddleware, l as useUserInfo, D as executeAsync, m as usePersonalData, v as navigateTo, E as useNuxtApp } from '../server.mjs';
import 'vue';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'is-https';
import 'click-outside-vue3';
import 'vue-recaptcha-v3';
import 'vue/server-renderer';

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

export { auth as default };
//# sourceMappingURL=auth-d92d68d8.mjs.map
