import { _ as _imports_5, a as __nuxt_component_1 } from './close-98a6d81e.mjs';
import { _ as __nuxt_component_3 } from './Dropdown-0563fc68.mjs';
import { u as useI18n, x as useLocalePath, y as useToastOpen, z as useToastText, A as useGenderOptions, l as useUserInfo, m as usePersonalData, B as useLogOut, v as navigateTo, h as useCookie, i as useMyFetch, b as __nuxt_component_2, q as __nuxt_component_1$1 } from '../server.mjs';
import { n as numberWithSpaces, _ as __nuxt_component_0 } from './Modal-c91268d9.mjs';
import { ref, withAsyncContext, unref, isRef, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './info-e89625e7.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './tick-12729be4.mjs';
import 'vue-router';
import 'is-https';
import 'click-outside-vue3';
import 'vue-recaptcha-v3';
import '@vueuse/core';

const _sfc_main = {
  __name: "profile",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { locale } = useI18n();
    const localePath = useLocalePath();
    const useToast = useToastOpen();
    const useToastTitle = useToastText();
    const isChanged = ref(false);
    const isLogout = ref(false);
    const genderOptions = useGenderOptions();
    const user = useUserInfo();
    if (!user.value)
      [__temp, __restore] = withAsyncContext(() => usePersonalData(locale.value)), await __temp, __restore();
    const first_name = ref(user.value.first_name);
    const last_name = ref(user.value.last_name);
    const gender = ref(null);
    const birth_date = ref(user.value.date_birthday ? user.value.date_birthday.split("-").reverse().join(".") : null);
    const phone_number = ref(numberWithSpaces(`+998${user.value.phone_number}`, false).replace("(", "").replace(")", ""));
    const oldBirthday = ref(user.value.date_birthday.split("-").reverse().join("."));
    const oldGender = ref(null);
    genderOptions.value.map((item, index) => {
      if (item.value == user.value.gender) {
        gender.value = index;
        oldGender.value = index;
      }
    });
    const errorFirst = ref(false);
    const errorLast = ref(false);
    const errorGender = ref(false);
    const errorBirth = ref(false);
    const validate = (val = "all") => {
      if (val == "first" || val == "all") {
        if (!first_name.value || first_name.value.trim().length < 3)
          errorFirst.value = true;
        else
          errorFirst.value = false;
      }
      if (val == "last" || val == "all") {
        if (!last_name.value || last_name.value.trim().length < 3)
          errorLast.value = true;
        else
          errorLast.value = false;
      }
      if (val == "gender" || val == "all") {
        if (gender.value == null)
          errorGender.value = true;
        else
          errorGender.value = false;
      }
      if (val == "birth" || val == "all") {
        if (!birth_date.value)
          errorBirth.value = true;
        else if (birth_date.value.length == 10) {
          birth_date.value.substring(0, 2);
          birth_date.value.substring(3, 5);
          const year = birth_date.value.substring(6, 10);
          errorBirth.value = !isDateValid(year);
        } else {
          errorBirth.value = true;
        }
      }
      if (first_name.value !== user.value.first_name || last_name.value !== user.value.last_name || gender.value !== oldGender.value || birth_date.value !== oldBirthday.value) {
        isChanged.value = true;
      } else
        isChanged.value = false;
      return !errorFirst.value && !errorLast.value && !errorGender.value && !errorBirth.value;
    };
    const onGenderChange = (val) => {
      gender.value = val;
      errorGender.value = false;
      validate("gender");
    };
    const isDateValid = (dateStr) => {
      const today = /* @__PURE__ */ new Date();
      const date = new Date(dateStr);
      if (isNaN(date))
        return false;
      if (date.getTime() >= today.getTime())
        return false;
      if (date.getFullYear() < 1900)
        return false;
      return true;
    };
    const logout = () => {
      useLogOut();
      isLogout.value = false;
      navigateTo(localePath("/"));
    };
    const handleFocus = () => {
      if (!phone_number.value)
        phone_number.value = "+998 ";
    };
    const handleBlur = () => {
      if (phone_number.value == "+998 ")
        phone_number.value = null;
    };
    const onSubmit = async () => {
      let body = {};
      if (first_name.value !== user.value.first_name)
        body.first_name = first_name.value;
      if (last_name.value !== user.value.last_name)
        body.last_name = last_name.value;
      if (gender.value !== oldGender.value)
        body.gender = gender.value + 1;
      if (birth_date.value !== oldBirthday.value)
        body.date_birthday = birth_date.value.split(".").reverse().join("-");
      const access = useCookie("access");
      const { data } = await useMyFetch(`${locale.value}/auth/update-profile/`, {
        method: "PATCH",
        body,
        headers: { "Authorization": `Bearer ${access.value}` }
      });
      if (data.value) {
        useToastTitle.value = "toast.changed";
        user.value = data.value;
        isChanged.value = false;
        user.value.first_name = first_name.value;
        user.value.last_name = last_name.value;
        oldGender.value = gender.value;
        oldBirthday.value = birth_date.value;
      } else
        useToastTitle.value = "toast.error";
      useToast.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseInput = __nuxt_component_1;
      const _component_BaseDropdown = __nuxt_component_3;
      const _component_BaseButton = __nuxt_component_2;
      const _component_NuxtLinkLocale = __nuxt_component_1$1;
      const _component_PageModal = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="container my-5 flex justify-center"><div class="bg-white max-w-[600px] w-full rounded-2xl p-4 lg:p-8 flex flex-col"><div class="flex justify-end"><div class="px-4 flex-center h-10 text-red text-sm leading-normal rounded-lg hover:bg-[#E5E9F0] active:bg-[#CCD3E1] cursor-pointer">${ssrInterpolate(_ctx.$t("logout"))}</div></div><form class="flex flex-col gap-8"><p class="text-darkBlue font-bold text-[32px] leading-normal text-center">${ssrInterpolate(_ctx.$t("profile"))}</p><div class="flex flex-col gap-4">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        placeholder: "input.name",
        modelValue: unref(first_name),
        "onUpdate:modelValue": ($event) => isRef(first_name) ? first_name.value = $event : null,
        inputID: "first-name",
        type: "text",
        error: unref(errorFirst) ? "error.first" : null,
        onOnBlur: ($event) => validate("first")
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseInput, {
        placeholder: "input.surname",
        modelValue: unref(last_name),
        "onUpdate:modelValue": ($event) => isRef(last_name) ? last_name.value = $event : null,
        inputID: "last-name",
        type: "text",
        error: unref(errorLast) ? "error.last" : null,
        onOnBlur: ($event) => validate("last")
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseDropdown, {
        options: unref(genderOptions),
        placeholder: "userGenderTitle",
        selected: unref(gender),
        onOnChange: onGenderChange,
        error: unref(errorGender) ? "error.gender" : null
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseInput, {
        placeholder: "input.birth",
        modelValue: unref(birth_date),
        "onUpdate:modelValue": ($event) => isRef(birth_date) ? birth_date.value = $event : null,
        inputID: "birth-date",
        type: "text",
        "is-birth": true,
        onOnBlur: ($event) => validate("birth"),
        error: unref(errorBirth) ? "error.birth" : null
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseInput, {
        placeholder: "input.phone",
        modelValue: unref(phone_number),
        "onUpdate:modelValue": ($event) => isRef(phone_number) ? phone_number.value = $event : null,
        inputID: "phone-number",
        type: "tel",
        onOnFocus: handleFocus,
        onOnBlur: handleBlur
      }, null, _parent));
      _push(`<div class="flex gap-2"><img${ssrRenderAttr("src", _imports_0)} alt="info"><p class="text-xs text-secondary leading-normal">${ssrInterpolate(_ctx.$t("profileInfo"))}</p></div></div><div class="flex flex-col gap-4">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        state: "primary",
        "is-disabled": !unref(isChanged),
        onClick: onSubmit,
        type: "submit"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("save"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("save")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLinkLocale, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseButton, {
              class: "font-normal w-full",
              state: "secondary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("backMain"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("backMain")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseButton, {
                class: "font-normal w-full",
                state: "secondary"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("backMain")), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div></div>`);
      if (unref(isLogout)) {
        _push(ssrRenderComponent(_component_PageModal, {
          onClose: ($event) => isLogout.value = false
        }, {
          body: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="fixed-center z-[99] bg-white rounded-2xl p-4 flex flex-col max-w-[393px] w-[calc(100%-32px)] md:w-full"${_scopeId}><div class="self-end w-6 h-6 flex-center cursor-pointer"${_scopeId}><img${ssrRenderAttr("src", _imports_5)} alt="close"${_scopeId}></div><div class="flex flex-col gap-8"${_scopeId}><p class="text-darkBlue font-bold text-2xl leading-normal text-center"${_scopeId}>${ssrInterpolate(_ctx.$t("sureLogout"))}</p><div class="flex flex-col gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButton, {
                class: "font-normal",
                state: "secondary",
                onClick: ($event) => isLogout.value = false
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("cancel"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("cancel")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseButton, {
                state: "red",
                onClick: logout
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("logout"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("logout")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "fixed-center z-[99] bg-white rounded-2xl p-4 flex flex-col max-w-[393px] w-[calc(100%-32px)] md:w-full" }, [
                  createVNode("div", {
                    class: "self-end w-6 h-6 flex-center cursor-pointer",
                    onClick: ($event) => isLogout.value = false
                  }, [
                    createVNode("img", {
                      src: _imports_5,
                      alt: "close"
                    })
                  ], 8, ["onClick"]),
                  createVNode("div", { class: "flex flex-col gap-8" }, [
                    createVNode("p", { class: "text-darkBlue font-bold text-2xl leading-normal text-center" }, toDisplayString(_ctx.$t("sureLogout")), 1),
                    createVNode("div", { class: "flex flex-col gap-4" }, [
                      createVNode(_component_BaseButton, {
                        class: "font-normal",
                        state: "secondary",
                        onClick: ($event) => isLogout.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("cancel")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_BaseButton, {
                        state: "red",
                        onClick: logout
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("logout")), 1)
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=profile-e8e6c124.mjs.map
