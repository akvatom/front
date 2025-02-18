import { defineComponent, h, ref, computed, mergeProps, useSSRContext, unref, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, createTextVNode, withAsyncContext, watch, onUnmounted, isRef, withModifiers, Fragment, renderList, withDirectives, vModelText } from "vue";
import { F as useRouter, G as globalMiddleware, E as useNuxtApp, _ as _export_sfc, H as useSwitchLocalePath, u as useI18n, r as __nuxt_component_11, I as useClinicModal, b as __nuxt_component_2$2, x as useLocalePath, j as useRoute, i as useMyFetch, J as useHead, e as useLoginTitle, g as useRedirect, f as useLoginModal, d as useAuthenticated, w as useCount, v as navigateTo, q as __nuxt_component_1$1, y as useToastOpen, z as useToastText, A as useGenderOptions, K as useAuthUser, l as useUserInfo, m as usePersonalData, h as useCookie } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { _ as __nuxt_component_3$1 } from "./Location-b1480ac0.js";
import { a as __nuxt_component_7, _ as __nuxt_component_8 } from "./SearchInput-31186868.js";
import { n as numberWithSpaces, _ as __nuxt_component_0$2 } from "./Modal-c91268d9.js";
import "hookable";
import "destr";
import "devalue";
import "defu";
import "klona";
import { _ as _imports_5$1, a as __nuxt_component_1$2 } from "./close-98a6d81e.js";
import { _ as _imports_0$5, a as _imports_1$3 } from "./submitted-error-36cd3fa9.js";
import { useReCaptcha } from "vue-recaptcha-v3";
import { _ as __nuxt_component_3$2 } from "./Dropdown-0563fc68.js";
import "ofetch";
import "#internal/nitro";
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
import "ohash";
import "@vueuse/core";
import "./tick-12729be4.js";
const __nuxt_component_0$1 = /* @__PURE__ */ defineComponent({
  name: "NuxtLoadingIndicator",
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2e3
    },
    height: {
      type: Number,
      default: 3
    },
    color: {
      type: [String, Boolean],
      default: "repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"
    }
  },
  setup(props, { slots }) {
    const indicator = useLoadingIndicator({
      duration: props.duration,
      throttle: props.throttle
    });
    const nuxtApp = useNuxtApp();
    const router = useRouter();
    globalMiddleware.unshift(indicator.start);
    router.onError(() => {
      indicator.finish();
    });
    router.beforeResolve((to, from) => {
      if (to === from || to.matched.every((comp, index) => {
        var _a, _b, _c;
        return comp.components && ((_a = comp.components) == null ? void 0 : _a.default) === ((_c = (_b = from.matched[index]) == null ? void 0 : _b.components) == null ? void 0 : _c.default);
      })) {
        indicator.finish();
      }
    });
    router.afterEach((_to, _from, failure) => {
      if (failure) {
        indicator.finish();
      }
    });
    nuxtApp.hook("page:finish", indicator.finish);
    nuxtApp.hook("vue:error", indicator.finish);
    return () => h("div", {
      class: "nuxt-loading-indicator",
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        pointerEvents: "none",
        width: "auto",
        height: `${props.height}px`,
        opacity: indicator.isLoading.value ? 1 : 0,
        background: props.color || void 0,
        backgroundSize: `${100 / indicator.progress.value * 100}% auto`,
        transform: `scaleX(${indicator.progress.value}%)`,
        transformOrigin: "left",
        transition: "transform 0.1s, height 0.4s, opacity 0.4s",
        zIndex: 999999
      }
    }, slots);
  }
});
function useLoadingIndicator(opts) {
  const progress = ref(0);
  const isLoading = ref(false);
  computed(() => 1e4 / opts.duration);
  let _timer = null;
  let _throttle = null;
  function start() {
    clear();
    progress.value = 0;
    if (opts.throttle && false) {
      _throttle = setTimeout(() => {
        isLoading.value = true;
      }, opts.throttle);
    } else {
      isLoading.value = true;
    }
  }
  function finish() {
    progress.value = 100;
    _hide();
  }
  function clear() {
    clearInterval(_timer);
    clearTimeout(_throttle);
    _timer = null;
    _throttle = null;
  }
  function _hide() {
    clear();
  }
  return {
    progress,
    isLoading,
    start,
    finish,
    clear
  };
}
const _sfc_main$d = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-center w-6 h-6" }, _attrs))}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 8.29545C2 7.57999 2.57999 7 3.29545 7H20.5682C21.2836 7 21.8636 7.57999 21.8636 8.29545C21.8636 9.01091 21.2836 9.59091 20.5682 9.59091H3.29545C2.57999 9.59091 2 9.01091 2 8.29545Z" fill="#002168"></path><path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M2 15.2046C2 14.4892 2.57999 13.9092 3.29545 13.9092H20.5682C21.2836 13.9092 21.8636 14.4892 21.8636 15.2046C21.8636 15.9201 21.2836 16.5001 20.5682 16.5001H3.29545C2.57999 16.5001 2 15.9201 2 15.2046Z" fill="#002168"></path></svg></div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon/Burger.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_0$4 = "" + __buildAssetsURL("map.c113f68a.svg");
const _sfc_main$c = {
  __name: "Map",
  __ssrInlineRender: true,
  props: {
    isButton: {
      default: false,
      type: Boolean
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [{ "lg:py-3 lg:px-4 lg:h-10 lg:bg-white lg:hover:bg-[#E5E9F0] lg:active:bg-[#CCD3E1]": props.isButton }, "flex gap-2 items-center rounded-lg cursor-pointer select-none"]
      }, _attrs))}><img${ssrRenderAttr("src", _imports_0$4)} alt="map">`);
      if (props.isButton) {
        _push(`<span class="text-sm text-darkBlue max-lg:hidden">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon/Map.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_2$1 = _sfc_main$c;
const _imports_7 = "" + __buildAssetsURL("uzbekistan.24c8a8bc.svg");
const _imports_8 = "" + __buildAssetsURL("russia.079c1587.svg");
const _sfc_main$b = {
  __name: "Lang",
  __ssrInlineRender: true,
  props: {
    isButton: {
      default: false,
      type: Boolean
    }
  },
  setup(__props) {
    const switchLocalePath = useSwitchLocalePath();
    const { locale } = useI18n();
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_11;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: unref(switchLocalePath)(`${unref(locale) == "uz" ? "ru" : "uz"}`),
        class: [{ "lg:py-3 lg:px-4 lg:h-10 lg:bg-white lg:hover:bg-[#E5E9F0] lg:active:bg-[#CCD3E1]": props.isButton }, "flex gap-2 items-center rounded-lg cursor-pointer select-none"]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-6 h-6 flex justify-center items-center cursor-pointer"${_scopeId}>`);
            if (unref(locale) == "ru") {
              _push2(`<img${ssrRenderAttr("src", _imports_7)} alt="Uzbek"${_scopeId}>`);
            } else {
              _push2(`<img${ssrRenderAttr("src", _imports_8)} alt="Russian"${_scopeId}>`);
            }
            _push2(`</div>`);
            if (props.isButton) {
              _push2(`<span class="text-sm text-darkBlue max-lg:hidden"${_scopeId}>${ssrInterpolate(unref(locale) == "ru" ? "O‘zbekcha" : "Русский")}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "w-6 h-6 flex justify-center items-center cursor-pointer" }, [
                unref(locale) == "ru" ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: _imports_7,
                  alt: "Uzbek"
                })) : (openBlock(), createBlock("img", {
                  key: 1,
                  src: _imports_8,
                  alt: "Russian"
                }))
              ]),
              props.isButton ? (openBlock(), createBlock("span", {
                key: 0,
                class: "text-sm text-darkBlue max-lg:hidden"
              }, toDisplayString(unref(locale) == "ru" ? "O‘zbekcha" : "Русский"), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon/Lang.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_4$2 = _sfc_main$b;
const _sfc_main$a = {
  __name: "User",
  __ssrInlineRender: true,
  props: {
    isButton: {
      default: false,
      type: Boolean
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [{ "md:py-3 md:px-4 md:h-10 md:bg-bg md:hover:bg-[#DBE3F0] md:active:bg-[#DBE3F0]": props.isButton }, "flex gap-2 items-center rounded-lg cursor-pointer select-none"]
      }, _attrs))}><div class="w-6 h-6 flex justify-center items-center cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18" fill="none"><ellipse opacity="0.4" cx="7" cy="14" rx="7" ry="4" fill="#1D7ED8"></ellipse><circle cx="7" cy="4" r="4" fill="#1D7ED8"></circle></svg></div>`);
      if (props.isButton) {
        _push(`<span class="text-sm text-darkBlue max-md:hidden">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon/User.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_5$1 = _sfc_main$a;
const _imports_0$3 = "" + __buildAssetsURL("circle-bg.d39d31d9.svg");
const _imports_1$2 = "" + __buildAssetsURL("clinic.b773b320.png");
const _imports_2$2 = "" + __buildAssetsURL("iPhone.c2a7eebd.png");
const _sfc_main$9 = {
  __name: "Banner",
  __ssrInlineRender: true,
  setup(__props) {
    const open = useClinicModal();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButton = __nuxt_component_2$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-blue rounded-lg md:rounded-2xl p-4 md:p-8 flex items-center gap-2 md:gap-6 relative max-lg:justify-between" }, _attrs))}><p class="text-white font-bold text-[13px] md:text-2xl">${ssrInterpolate(_ctx.$t("clinic.title"))}</p>`);
      _push(ssrRenderComponent(_component_BaseButton, {
        onClick: ($event) => open.value = true,
        state: "secondary",
        class: "px-4 py-2 md:p-4 text-sm h-[unset] !text-blue whitespace-nowrap"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("clinic.add"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("clinic.add")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<img class="absolute right-0 top-0 max-lg:hidden"${ssrRenderAttr("src", _imports_0$3)} alt="circle "><img class="absolute right-[5rem] bottom-0 max-lg:hidden"${ssrRenderAttr("src", _imports_1$2)} alt="clinic"><img class="absolute right-[16rem] bottom-0 max-lg:hidden"${ssrRenderAttr("src", _imports_2$2)} alt="iphone"></div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Clinic/Banner.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_6 = _sfc_main$9;
const _sfc_main$8 = {
  __name: "MapDoctor",
  __ssrInlineRender: true,
  props: {
    doctor: { required: true, type: Object }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-4" }, _attrs))}><div class="border border-dividers rounded-[9px] relative"><img class="rounded-lg" width="100" height="125"${ssrRenderAttr("src", __props.doctor.avatar_300_375)} alt="avatar">`);
      if (__props.doctor.experience) {
        _push(`<div class="bg-red rounded-b-lg text-xs md:text-[15px] text-white text-center absolute bottom-0 left-0 w-full h-[18px] md:h-[26px] flex-center"> стаж ${ssrInterpolate(__props.doctor.experience)} лет </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col gap-2"><p class="text-base text-darkBlue font-bold">${ssrInterpolate(__props.doctor.full_name)}</p><div class="flex flex-col gap-0.5">`);
      if (__props.doctor.specialties) {
        _push(`<div class="flex-y-center gap-1 flex-wrap"><!--[-->`);
        ssrRenderList(__props.doctor.specialties.slice(0, 3), (item, index) => {
          _push(`<span class="text-xs font-bold leading-normal text-blue flex-y-center gap-1">`);
          if (index != 0) {
            _push(`<svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none"><circle cx="1" cy="1" r="1" fill="#1D7ED8"></circle></svg>`);
          } else {
            _push(`<!---->`);
          }
          _push(` ${ssrInterpolate(item.name)}</span>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.doctor.degree.name) {
        _push(`<div class="text-xs leading-normal text-secondary">${ssrInterpolate(__props.doctor.degree.name)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="p-3 rounded-lg bg-bg flex flex-col gap-1"><p class="text-xs text-secondary leading-normal">Стоимость приема в клинике:</p><div class="flex-y-center gap-1"><div class="text-sm font-bold text-darkBlue leading-normal">${ssrInterpolate(("numberWithSpaces" in _ctx ? _ctx.numberWithSpaces : unref(numberWithSpaces))(__props.doctor.discount_price ?? __props.doctor.original_price))} сум </div>`);
      if (__props.doctor.discount_price) {
        _push(`<div class="flex-y-center gap-1"><div class="text-xs text-red line-through">${ssrInterpolate(("numberWithSpaces" in _ctx ? _ctx.numberWithSpaces : unref(numberWithSpaces))(__props.doctor.original_price))} сум </div><div class="bg-blue bg-opacity-10 rounded px-1 py-0.5 text-xs font-bold text-blue leading-normal"> -${ssrInterpolate(Math.floor(100 - __props.doctor.discount_price * 100 / __props.doctor.original_price))}% </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/MapDoctor.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_9 = _sfc_main$8;
const _sfc_main$7 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4 bg-white active:bg-darkBlue active:bg-opacity-10 flex-y-center gap-4" }, _attrs))}><span class="min-w-[20px] flex-center">`);
  ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
  _push(`</span><div class="flex-y-center justify-between w-full"><p class="text-base text-darkBlue leading-normal">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</p><p class="text-sm text-secondary leading-normal">`);
  ssrRenderSlot(_ctx.$slots, "option", {}, null, _push, _parent);
  _push(`</p></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Base/BurgerItem.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_10 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0$2 = "" + __buildAssetsURL("logo.1ae8067b.svg");
const _imports_1$1 = "" + __buildAssetsURL("map-list-arrow.68a2a206.svg");
const _imports_2$1 = "" + __buildAssetsURL("main-search-doctors.12c7a08a.webp");
const _imports_4$1 = "" + __buildAssetsURL("home.048cc0b1.svg");
const _imports_5 = "" + __buildAssetsURL("location.1a7791aa.svg");
const _imports_6 = "" + __buildAssetsURL("profile.22a34fbb.svg");
const _imports_9 = "" + __buildAssetsURL("call.3fb67ddc.svg");
const Header_vue_vue_type_style_index_0_scoped_87baf853_lang = "";
const Header_vue_vue_type_style_index_1_lang = "";
const _sfc_main$6 = {
  __name: "Header",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { locale, t } = useI18n();
    const localePath = useLocalePath();
    const switchLocalePath = useSwitchLocalePath();
    const route = useRoute();
    const { data: clinics } = ([__temp, __restore] = withAsyncContext(() => useMyFetch(`${locale.value}/clinics/`)), __temp = await __temp, __restore(), __temp);
    useHead({ script: [{ src: `https://api-maps.yandex.ru/v3/?apikey=c47cf6ec-a9ce-4384-adaf-b0ce6e5d1f6d&lang=en_US` }] });
    const isBurger = ref(false);
    const search = ref(null);
    const loginTitle = useLoginTitle();
    const useRedirectUrl = useRedirect();
    const isLoginOpen = useLoginModal();
    const isAuthenticated = useAuthenticated();
    const onClick = () => {
      if (!isAuthenticated.value) {
        useRedirectUrl.value = null;
        loginTitle.value = "loginTitle.default";
        isLoginOpen.value = true;
      } else
        navigateTo(localePath("/profile"));
    };
    useCount();
    const isMapOpen = ref(false);
    const isListOpen = ref(false);
    const isClickedMarker = ref(false);
    const activeMarker = ref(null);
    const markersEl = ref([]);
    const closeList = (e) => {
      if (!e.mapInAction) {
        if (isClickedMarker.value)
          isClickedMarker.value = false;
        else {
          if (activeMarker.value)
            activeMarker.value.src = "/icons/marker.svg";
          isListOpen.value = false;
        }
      }
    };
    const selectedClinic = ref(null);
    async function initMap() {
      await ymaps3.ready;
      const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker, YMapListener } = ymaps3;
      const map = new YMap(
        document.getElementById("map"),
        { location: { center: [69.2401, 41.2995], zoom: 13 } }
      );
      map.addChild(new YMapDefaultSchemeLayer());
      map.addChild(new YMapDefaultFeaturesLayer());
      clinics.value.map((clinic) => {
        if (clinic.doctors_count === 0)
          return;
        const latitude = clinic.map.split(",")[0];
        const longitude = clinic.map.split(",")[1];
        const el = document.createElement("img");
        el.className = "my-marker";
        el.src = "/icons/marker.svg";
        markersEl.value.push(el);
        el.onclick = async () => {
          const { data } = await useMyFetch(`${locale.value}/doctors/?clinic=${clinic.id}`);
          selectedClinic.value = data.value.results;
          map.setLocation({ center: [longitude, +latitude + 2e-3], zoom: 17, duration: 400 });
          isClickedMarker.value = true;
          markersEl.value.map((item) => item.src = "/icons/marker.svg");
          el.src = "icons/marker-blue.svg";
          activeMarker.value = el;
          isListOpen.value = true;
          setTimeout(() => {
            el.classList.add("active");
          }, 400);
        };
        const marker = new YMapMarker({ coordinates: [longitude, latitude] }, el);
        map.addChild(marker);
      });
      const mapListener = new YMapListener({
        layer: "any",
        onUpdate: closeList
      });
      map.addChild(mapListener);
    }
    watch(isMapOpen, (newVal) => {
      if (newVal) {
        document.querySelector("body").style.overflow = "hidden";
        initMap();
      } else {
        document.querySelector("body").style.overflow = "auto";
      }
    });
    const onEscPressed = (e) => {
      if (e.key == "Escape" || e.code == "Escape") {
        isMapOpen.value = false;
        isListOpen.value = false;
      }
    };
    onUnmounted(() => {
      document.removeEventListener("keyup", onEscPressed);
    });
    const isOpen = useLoginModal();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_IconBurger = __nuxt_component_0;
      const _component_NuxtLinkLocale = __nuxt_component_1$1;
      const _component_IconMap = __nuxt_component_2$1;
      const _component_IconLocation = __nuxt_component_3$1;
      const _component_IconLang = __nuxt_component_4$2;
      const _component_IconUser = __nuxt_component_5$1;
      const _component_ClinicBanner = __nuxt_component_6;
      const _component_BaseSearchInput = __nuxt_component_7;
      const _component_ClientOnly = __nuxt_component_8;
      const _component_CardMapDoctor = __nuxt_component_9;
      const _component_BaseBurgerItem = __nuxt_component_10;
      const _component_NuxtLink = __nuxt_component_11;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-5 bg-bg" }, _attrs))} data-v-87baf853><div class="${ssrRenderClass([{ "max-md:pb-0": unref(localePath)("/") == unref(route).path }, "bg-white flex flex-col items-center gap-4 p-4 relative"])}" data-v-87baf853><div class="flex items-center justify-between gap-6 bg-white max-w-[1280px] w-full lg:px-8" data-v-87baf853><div class="flex gap-6 items-center shrink-0" data-v-87baf853>`);
      _push(ssrRenderComponent(_component_IconBurger, {
        class: "md:hidden",
        onClick: ($event) => isBurger.value = true
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLinkLocale, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$2)} alt="Clindoc" class="h-6 w-auto md:h-8" data-v-87baf853${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$2,
                alt: "Clindoc",
                class: "h-6 w-auto md:h-8"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center gap-4 md:gap-6 flex-shrink-0" data-v-87baf853>`);
      _push(ssrRenderComponent(_component_IconMap, {
        onClick: ($event) => isMapOpen.value = !unref(isMapOpen),
        "is-button": true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("header.map"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("header.map")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_IconLocation, { "is-button": true }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("header.location"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("header.location")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_IconLang, { "is-button": true }, null, _parent));
      _push(ssrRenderComponent(_component_IconUser, {
        onClick,
        "is-button": true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("header.profile"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("header.profile")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="" data-v-87baf853>`);
      _push(ssrRenderComponent(_component_ClinicBanner, { class: "lg:hidden" }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_BaseSearchInput, {
        placeholder: unref(t)("input.search"),
        "is-list": true,
        "model-value": unref(search),
        class: ["lg:hidden", { "max-lg:hidden": unref(localePath)("/") != unref(route).path }]
      }, null, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      if (unref(isMapOpen)) {
        _push(`<div class="absolute top-full z-[999] w-screen h-screen bg-[#FCFCF7]" id="map" data-v-87baf853>`);
        if (unref(isListOpen)) {
          _push(`<div class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-[62%] flex flex-col z-[1] shadow-400 max-md:w-full max-md:max-w-[calc(100%-32px)] max-w-[450px]" data-v-87baf853><div class="flex flex-col rounded-2xl overflow-clip relative" data-v-87baf853><div class="bg-dividers py-3 px-4 flex-y-center justify-between" data-v-87baf853><p class="text-base text-darkBlue font-bold" data-v-87baf853>${ssrInterpolate(((_a = unref(selectedClinic)[0]) == null ? void 0 : _a.clinic.name) ?? "Not found")}</p><p class="text-xs text-blue leading-normal whitespace-nowrap" data-v-87baf853>${ssrInterpolate(unref(selectedClinic).length)} врачей</p></div><div class="py-[18px] px-4 bg-white flex flex-col gap-4 overflow-auto scrollbar-style shadow-400 max-h-[50svh]" data-v-87baf853><!--[-->`);
          ssrRenderList(unref(selectedClinic), (doctor, index) => {
            _push(ssrRenderComponent(_component_NuxtLinkLocale, {
              to: `/doctor/${doctor.id}`,
              class: "flex flex-col gap-4",
              key: doctor.id,
              onClick: ($event) => isMapOpen.value = false
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  if (index != 0) {
                    _push2(`<hr class="bg-dividers h-px border-none" data-v-87baf853${_scopeId}>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(ssrRenderComponent(_component_CardMapDoctor, { doctor }, null, _parent2, _scopeId));
                } else {
                  return [
                    index != 0 ? (openBlock(), createBlock("hr", {
                      key: 0,
                      class: "bg-dividers h-px border-none"
                    })) : createCommentVNode("", true),
                    createVNode(_component_CardMapDoctor, { doctor }, null, 8, ["doctor"])
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]--></div></div>`);
          if (unref(selectedClinic).length > 2) {
            _push(`<div class="shadow-gradient absolute -bottom-px left-0 w-full h-[64px] rounded-b-2xl" data-v-87baf853></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="absolute top-full left-1/2 -translate-x-1/2" data-v-87baf853><img${ssrRenderAttr("src", _imports_1$1)} alt="arrow" data-v-87baf853></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="${ssrRenderClass([{ "hidden": unref(localePath)("/") != unref(route).path }, "container max-lg:hidden flex flex-col gap-5"])}" data-v-87baf853><div class="bg-darkBlue rounded-2xl w-full flex justify-between relative h-[275px]" data-v-87baf853><div class="flex flex-col gap-6 w-1/2 p-8" data-v-87baf853><div class="flex flex-col gap-3" data-v-87baf853><p class="text-4xl leading-normal font-bold text-white" data-v-87baf853>${ssrInterpolate(_ctx.$t("banner.title"))}</p><p class="text-lg leading-normal text-white" data-v-87baf853>${ssrInterpolate(_ctx.$t("banner.description"))}</p></div>`);
      _push(ssrRenderComponent(_component_BaseSearchInput, {
        placeholder: unref(t)("banner.input"),
        "is-list": true,
        modelValue: unref(search),
        "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
        class: "max-lg:hidden"
      }, null, _parent));
      _push(`</div><div class="overflow-hidden mr-4 relative flex items-end" data-v-87baf853><svg width="522" height="259" viewBox="0 0 522 259" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-87baf853><path opacity="0.2" d="M63.1452 409.25C106.645 452.847 172.597 474.646 261 474.646C348 474.646 413.25 452.847 456.75 409.25C500.25 365.653 522 308.695 522 238.378C522 170.872 499.549 114.618 454.645 69.6146C409.742 23.2048 345.194 0 261 0C172.597 0 106.645 22.5017 63.1452 67.5052C21.0484 112.509 0 169.466 0 238.378C0 308.695 21.0484 365.653 63.1452 409.25Z" fill="#1D7ED8" data-v-87baf853></path><path d="M103.919 372.551C138.333 406.842 190.51 423.987 260.449 423.987C329.279 423.987 380.9 406.842 415.315 372.551C449.73 338.26 466.937 293.46 466.937 238.152C466.937 185.057 449.174 140.81 413.65 105.413C378.125 68.9098 327.058 50.6582 260.449 50.6582C190.51 50.6582 138.333 68.3568 103.919 103.754C70.6143 139.151 53.962 183.951 53.962 238.152C53.962 293.46 70.6143 338.26 103.919 372.551Z" fill="#1D7ED8" data-v-87baf853></path></svg><img class="absolute-center bottom-0"${ssrRenderAttr("src", _imports_2$1)} alt="doctors" fetchpriority="high" data-v-87baf853></div></div>`);
      _push(ssrRenderComponent(_component_ClinicBanner, null, null, _parent));
      _push(`</div><div class="${ssrRenderClass([unref(isBurger) ? "translate-x-0" : "-translate-x-full", "fixed inset-0 bg-white z-[9999] transition-300"])}" data-v-87baf853><div class="flex flex-col" data-v-87baf853><div class="p-4 flex-y-center gap-4" data-v-87baf853><img${ssrRenderAttr("src", _imports_5$1)} alt="close" data-v-87baf853><img${ssrRenderAttr("src", _imports_0$2)} alt="logo" data-v-87baf853></div>`);
      _push(ssrRenderComponent(_component_NuxtLinkLocale, {
        onClick: ($event) => isBurger.value = false,
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseBurgerItem, null, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_4$1)} alt="home" data-v-87baf853${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_4$1,
                      alt: "home"
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("main"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("main")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseBurgerItem, null, {
                icon: withCtx(() => [
                  createVNode("img", {
                    src: _imports_4$1,
                    alt: "home"
                  })
                ]),
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("main")), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseBurgerItem, null, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_5)} alt="location" data-v-87baf853${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_5,
                alt: "location"
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("city"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("city")), 1)
            ];
          }
        }),
        option: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("tashkent"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("tashkent")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(isAuthenticated)) {
        _push(ssrRenderComponent(_component_NuxtLinkLocale, {
          onClick: ($event) => isBurger.value = false,
          to: "/profile"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseBurgerItem, null, {
                icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", _imports_6)} alt="profile" data-v-87baf853${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: _imports_6,
                        alt: "profile"
                      })
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("header.profile"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("header.profile")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseBurgerItem, null, {
                  icon: withCtx(() => [
                    createVNode("img", {
                      src: _imports_6,
                      alt: "profile"
                    })
                  ]),
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("header.profile")), 1)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_BaseBurgerItem, {
          onClick: ($event) => (isBurger.value = false, isOpen.value = true)
        }, {
          icon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", _imports_6)} alt="profile" data-v-87baf853${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_6,
                  alt: "profile"
                })
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("header.profile"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("header.profile")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(switchLocalePath)(`${unref(locale) == "uz" ? "ru" : "uz"}`)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseBurgerItem, null, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(locale) == "uz") {
                    _push3(`<img${ssrRenderAttr("src", _imports_7)} alt="Uzbek" data-v-87baf853${_scopeId2}>`);
                  } else {
                    _push3(`<img${ssrRenderAttr("src", _imports_8)} alt="Russian" data-v-87baf853${_scopeId2}>`);
                  }
                } else {
                  return [
                    unref(locale) == "uz" ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: _imports_7,
                      alt: "Uzbek"
                    })) : (openBlock(), createBlock("img", {
                      key: 1,
                      src: _imports_8,
                      alt: "Russian"
                    }))
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("language"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("language")), 1)
                  ];
                }
              }),
              option: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(locale) == "uz" ? "O‘zbekcha" : "Русский")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(locale) == "uz" ? "O‘zbekcha" : "Русский"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseBurgerItem, null, {
                icon: withCtx(() => [
                  unref(locale) == "uz" ? (openBlock(), createBlock("img", {
                    key: 0,
                    src: _imports_7,
                    alt: "Uzbek"
                  })) : (openBlock(), createBlock("img", {
                    key: 1,
                    src: _imports_8,
                    alt: "Russian"
                  }))
                ]),
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("language")), 1)
                ]),
                option: withCtx(() => [
                  createTextVNode(toDisplayString(unref(locale) == "uz" ? "O‘zbekcha" : "Русский"), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseBurgerItem, null, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_9)} alt="call" data-v-87baf853${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_9,
                alt: "call"
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("help"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("help")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/Header.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-87baf853"]]);
const _sfc_main$5 = {
  __name: "Modal",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    const recaptchaInstance = useReCaptcha();
    const isOpen = useClinicModal();
    const isSubmitted = ref(false);
    const isSubmittedError = ref(false);
    const loading = ref(false);
    const recaptcha = async () => {
      await (recaptchaInstance == null ? void 0 : recaptchaInstance.recaptchaLoaded());
      const token = await (recaptchaInstance == null ? void 0 : recaptchaInstance.executeRecaptcha("yourActionHere"));
      return token;
    };
    const onSubmit = async () => {
      var _a;
      if (!validate.value)
        return;
      loading.value = true;
      const captcha = await recaptcha();
      const phone_number = (_a = secondPhone.value) == null ? void 0 : _a.replace(/\D/g, "").replace("998", "");
      const body = {
        recaptcha_token: captcha,
        phone_number: +phone.value.replace(/\D/g, "").replace("998", ""),
        additional_phone_number: phone_number ? +phone_number : void 0,
        title: clinicName.value,
        address: address.value,
        username: text.value,
        speciality: specialty.value
      };
      const { data, error } = await useMyFetch(`${locale.value}/clinics/send_application/`, {
        method: "POST",
        body
      });
      loading.value = false;
      isSubmitted.value = true;
      if (data.value)
        isSubmittedError.value = false;
      else
        isSubmittedError.value = true;
    };
    const unSubmit = () => {
      isSubmitted.value = false;
      isSubmittedError.value = false;
      isOpen.value = false;
      phone.value = null;
      secondPhone.value = null;
      clinicName.value = null;
      specialty.value = null;
      address.value = null;
      text.value = null;
    };
    const phone = ref();
    const secondPhone = ref();
    const handleFocus = () => {
      if (!phone.value)
        phone.value = "+998 ";
    };
    const handleBlur = () => {
      if (phone.value == "+998 ")
        phone.value = null;
    };
    const clinicName = ref();
    const specialty = ref();
    const address = ref();
    const text = ref();
    const validate = computed(() => {
      var _a, _b;
      if (!phone.value || ((_a = clinicName.value) == null ? void 0 : _a.trim().length) < 3)
        return false;
      const number = phone.value.replace(/\D/g, "").replace("998", "");
      if (number.length === 9 && ((_b = clinicName.value) == null ? void 0 : _b.trim().length) >= 3)
        return true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageModal = __nuxt_component_0$2;
      const _component_BaseInput = __nuxt_component_1$2;
      const _component_BaseButton = __nuxt_component_2$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(isOpen)) {
        _push(ssrRenderComponent(_component_PageModal, {
          "is-open": unref(isOpen),
          onClose: ($event) => isOpen.value = false
        }, {
          body: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="bg-white rounded-2xl p-4 fixed-center w-[calc(100%-32px)] max-w-[41.75rem] relative z-[99] max-h-[80%] overflow-auto scrollbar-style"${_scopeId}>`);
              if (!unref(isSubmitted)) {
                _push2(`<form class="flex flex-col gap-8"${_scopeId}><p class="text-2xl text-darkBlue font-bold leading-normal text-center"${_scopeId}>Заявка для клиник</p><div class="flex flex-col gap-4"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseInput, {
                  placeholder: "input.clinicPhone",
                  modelValue: unref(phone),
                  "onUpdate:modelValue": ($event) => isRef(phone) ? phone.value = $event : null,
                  inputID: "phone-number",
                  type: "tel",
                  onOnFocus: handleFocus,
                  onOnBlur: handleBlur,
                  required: ""
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BaseInput, {
                  placeholder: "input.secondPhone",
                  modelValue: unref(secondPhone),
                  "onUpdate:modelValue": ($event) => isRef(secondPhone) ? secondPhone.value = $event : null,
                  inputID: "second-phone",
                  type: "tel",
                  onOnFocus: handleFocus,
                  onOnBlur: handleBlur,
                  required: ""
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BaseInput, {
                  placeholder: "input.clinic",
                  modelValue: unref(clinicName),
                  "onUpdate:modelValue": ($event) => isRef(clinicName) ? clinicName.value = $event : null,
                  inputID: "clinicName",
                  type: "text"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BaseInput, {
                  placeholder: "input.specialty",
                  modelValue: unref(specialty),
                  "onUpdate:modelValue": ($event) => isRef(specialty) ? specialty.value = $event : null,
                  inputID: "specialty",
                  type: "text"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BaseInput, {
                  placeholder: "input.address",
                  modelValue: unref(address),
                  "onUpdate:modelValue": ($event) => isRef(address) ? address.value = $event : null,
                  inputID: "address",
                  type: "text"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BaseInput, {
                  placeholder: "input.contact",
                  modelValue: unref(text),
                  "onUpdate:modelValue": ($event) => isRef(text) ? text.value = $event : null,
                  inputID: "text",
                  type: "text"
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
                _push2(ssrRenderComponent(_component_BaseButton, {
                  state: "primary",
                  type: "submit",
                  onClick: onSubmit,
                  "is-disabled": !unref(validate),
                  "is-loading": unref(loading)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Отправить заявку`);
                    } else {
                      return [
                        createTextVNode(" Отправить заявку")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</form>`);
              } else {
                _push2(`<form class="flex-y-center flex-col gap-4"${_scopeId}>`);
                if (!unref(isSubmittedError)) {
                  _push2(`<img width="96" height="96"${ssrRenderAttr("src", _imports_0$5)} alt="submitted"${_scopeId}>`);
                } else {
                  _push2(`<img width="96" height="96"${ssrRenderAttr("src", _imports_1$3)} alt="submitted error"${_scopeId}>`);
                }
                if (!unref(isSubmittedError)) {
                  _push2(`<div class="flex flex-col gap-2"${_scopeId}><p class="text-2xl font-bold leading-normal text-darkBlue text-center"${_scopeId}>Спасибо за вашу заявку! </p><p class="text-sm text-darkBlue leading-normal text-center"${_scopeId}> Ваша заявка успешно принята. Наша команда специалистов скоро свяжется с вами </p></div>`);
                } else {
                  _push2(`<div class="flex flex-col gap-2"${_scopeId}><p class="text-2xl font-bold leading-normal text-darkBlue text-center"${_scopeId}>Произошла ошибка </p><p class="text-sm text-darkBlue leading-normal text-center"${_scopeId}> Извините, произошла ошибка при обработке вашей заявки. Пожалуйста, попробуйте еще раз позже, или свяжитесь с нашей службой поддержки для получения дополнительной помощи. </p></div>`);
                }
                _push2(ssrRenderComponent(_component_BaseButton, {
                  class: "w-full",
                  state: "primary",
                  type: "submit",
                  onClick: unSubmit
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`Хорошо`);
                    } else {
                      return [
                        createTextVNode("Хорошо")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</form>`);
              }
              _push2(`<img class="absolute top-4 right-4 cursor-pointer"${ssrRenderAttr("src", _imports_5$1)} alt="close"${_scopeId}></div>`);
            } else {
              return [
                createVNode("div", { class: "bg-white rounded-2xl p-4 fixed-center w-[calc(100%-32px)] max-w-[41.75rem] relative z-[99] max-h-[80%] overflow-auto scrollbar-style" }, [
                  !unref(isSubmitted) ? (openBlock(), createBlock("form", {
                    key: 0,
                    onSubmit: withModifiers(() => {
                    }, ["prevent"]),
                    class: "flex flex-col gap-8"
                  }, [
                    createVNode("p", { class: "text-2xl text-darkBlue font-bold leading-normal text-center" }, "Заявка для клиник"),
                    createVNode("div", { class: "flex flex-col gap-4" }, [
                      createVNode(_component_BaseInput, {
                        placeholder: "input.clinicPhone",
                        modelValue: unref(phone),
                        "onUpdate:modelValue": ($event) => isRef(phone) ? phone.value = $event : null,
                        inputID: "phone-number",
                        type: "tel",
                        onOnFocus: handleFocus,
                        onOnBlur: handleBlur,
                        required: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_BaseInput, {
                        placeholder: "input.secondPhone",
                        modelValue: unref(secondPhone),
                        "onUpdate:modelValue": ($event) => isRef(secondPhone) ? secondPhone.value = $event : null,
                        inputID: "second-phone",
                        type: "tel",
                        onOnFocus: handleFocus,
                        onOnBlur: handleBlur,
                        required: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_BaseInput, {
                        placeholder: "input.clinic",
                        modelValue: unref(clinicName),
                        "onUpdate:modelValue": ($event) => isRef(clinicName) ? clinicName.value = $event : null,
                        inputID: "clinicName",
                        type: "text"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_BaseInput, {
                        placeholder: "input.specialty",
                        modelValue: unref(specialty),
                        "onUpdate:modelValue": ($event) => isRef(specialty) ? specialty.value = $event : null,
                        inputID: "specialty",
                        type: "text"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_BaseInput, {
                        placeholder: "input.address",
                        modelValue: unref(address),
                        "onUpdate:modelValue": ($event) => isRef(address) ? address.value = $event : null,
                        inputID: "address",
                        type: "text"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_BaseInput, {
                        placeholder: "input.contact",
                        modelValue: unref(text),
                        "onUpdate:modelValue": ($event) => isRef(text) ? text.value = $event : null,
                        inputID: "text",
                        type: "text"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode(_component_BaseButton, {
                      state: "primary",
                      type: "submit",
                      onClick: onSubmit,
                      "is-disabled": !unref(validate),
                      "is-loading": unref(loading)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Отправить заявку")
                      ]),
                      _: 1
                    }, 8, ["is-disabled", "is-loading"])
                  ], 40, ["onSubmit"])) : (openBlock(), createBlock("form", {
                    key: 1,
                    onSubmit: withModifiers(() => {
                    }, ["prevent"]),
                    class: "flex-y-center flex-col gap-4"
                  }, [
                    !unref(isSubmittedError) ? (openBlock(), createBlock("img", {
                      key: 0,
                      width: "96",
                      height: "96",
                      src: _imports_0$5,
                      alt: "submitted"
                    })) : (openBlock(), createBlock("img", {
                      key: 1,
                      width: "96",
                      height: "96",
                      src: _imports_1$3,
                      alt: "submitted error"
                    })),
                    !unref(isSubmittedError) ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "flex flex-col gap-2"
                    }, [
                      createVNode("p", { class: "text-2xl font-bold leading-normal text-darkBlue text-center" }, "Спасибо за вашу заявку! "),
                      createVNode("p", { class: "text-sm text-darkBlue leading-normal text-center" }, " Ваша заявка успешно принята. Наша команда специалистов скоро свяжется с вами ")
                    ])) : (openBlock(), createBlock("div", {
                      key: 3,
                      class: "flex flex-col gap-2"
                    }, [
                      createVNode("p", { class: "text-2xl font-bold leading-normal text-darkBlue text-center" }, "Произошла ошибка "),
                      createVNode("p", { class: "text-sm text-darkBlue leading-normal text-center" }, " Извините, произошла ошибка при обработке вашей заявки. Пожалуйста, попробуйте еще раз позже, или свяжитесь с нашей службой поддержки для получения дополнительной помощи. ")
                    ])),
                    createVNode(_component_BaseButton, {
                      class: "w-full",
                      state: "primary",
                      type: "submit",
                      onClick: unSubmit
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Хорошо")
                      ]),
                      _: 1
                    })
                  ], 40, ["onSubmit"])),
                  createVNode("img", {
                    class: "absolute top-4 right-4 cursor-pointer",
                    onClick: ($event) => isOpen.value = false,
                    src: _imports_5$1,
                    alt: "close"
                  }, null, 8, ["onClick"])
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Clinic/Modal.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$5;
const _imports_0$1 = "" + __buildAssetsURL("contact-us.ad6e806d.svg");
const FloatingButton_vue_vue_type_style_index_0_scoped_e655c028_lang = "";
const _sfc_main$4 = {
  __name: "FloatingButton",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButton = __nuxt_component_2$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "z-10" }, _attrs))} data-v-e655c028><div class="fixed bottom-8 right-8 w-12 h-12 bg-blue shadow-600 flex-center rounded-full group cursor-pointer" data-v-e655c028>`);
      if (!unref(isOpen)) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" data-v-e655c028><path d="M28 25.3314V23.1368C28 22.0464 27.3361 21.0658 26.3237 20.6609L23.6115 19.576C22.3238 19.0609 20.8563 19.6189 20.236 20.8594L20 21.3314C20 21.3314 16.6667 20.6647 14 17.998C11.3333 15.3314 10.6667 11.998 10.6667 11.998L11.1387 11.762C12.3792 11.1418 12.9371 9.67423 12.4221 8.38652L11.3372 5.67434C10.9322 4.66192 9.95166 3.99805 8.86125 3.99805H6.66667C5.19391 3.99805 4 5.19195 4 6.66471C4 18.4468 13.5513 27.998 25.3333 27.998C26.8061 27.998 28 26.8041 28 25.3314Z" fill="white" data-v-e655c028></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.3333 9.33138C16.3333 8.7791 16.781 8.33138 17.3333 8.33138C18.165 8.33138 18.9885 8.4952 19.7569 8.81348C20.5253 9.13176 21.2235 9.59827 21.8116 10.1864C22.3997 10.7745 22.8662 11.4727 23.1845 12.2411C23.5028 13.0094 23.6666 13.833 23.6666 14.6647C23.6666 15.217 23.2189 15.6647 22.6666 15.6647C22.1143 15.6647 21.6666 15.217 21.6666 14.6647C21.6666 14.0957 21.5545 13.5322 21.3367 13.0064C21.119 12.4807 20.7998 12.003 20.3974 11.6006C19.995 11.1982 19.5173 10.879 18.9915 10.6612C18.4658 10.4435 17.9023 10.3314 17.3333 10.3314C16.781 10.3314 16.3333 9.88367 16.3333 9.33138Z" class="fill-[#77B2E8] group-hover:fill-white transition-100" data-v-e655c028></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.3333 3.99805C16.3333 3.44576 16.781 2.99805 17.3333 2.99805C18.8653 2.99805 20.3824 3.29981 21.7979 3.88612C23.2134 4.47242 24.4995 5.33178 25.5828 6.41513C26.6662 7.49848 27.5255 8.78461 28.1118 10.2001C28.6982 11.6155 28.9999 13.1326 28.9999 14.6647C28.9999 15.217 28.5522 15.6647 27.9999 15.6647C27.4476 15.6647 26.9999 15.217 26.9999 14.6647C26.9999 13.3953 26.7499 12.1383 26.2641 10.9654C25.7783 9.79263 25.0663 8.72698 24.1686 7.82935C23.271 6.93171 22.2053 6.21967 21.0325 5.73388C19.8597 5.24808 18.6027 4.99805 17.3333 4.99805C16.781 4.99805 16.3333 4.55033 16.3333 3.99805Z" class="fill-[#77B2E8] group-hover:fill-white transition-300" data-v-e655c028></path></svg>`);
      } else {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" data-v-e655c028><path fill-rule="evenodd" clip-rule="evenodd" d="M6.77863 6.55535C7.45318 5.88081 8.54682 5.88081 9.22137 6.55535L25.5062 22.8402C26.1808 23.5148 26.1808 24.6084 25.5062 25.283C24.8317 25.9575 23.7381 25.9575 23.0635 25.283L6.77863 8.99808C6.10409 8.32354 6.10409 7.22989 6.77863 6.55535Z" fill="white" data-v-e655c028></path><path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M6.55486 25.2214C5.88032 24.5468 5.88032 23.4532 6.55486 22.7786L22.8397 6.49375C23.5143 5.81921 24.6079 5.81921 25.2825 6.49375C25.957 7.16829 25.957 8.26194 25.2825 8.93648L8.99759 25.2214C8.32305 25.8959 7.2294 25.8959 6.55486 25.2214Z" fill="white" data-v-e655c028></path></svg>`);
      }
      if (unref(isOpen)) {
        _push(`<div class="bg-white p-4 rounded-2xl shadow-600 flex flex-col gap-8 absolute bottom-full mb-4 right-0" data-v-e655c028><p class="text-2xl text-darkBlue font-bold leading-normal text-center" data-v-e655c028>${ssrInterpolate(_ctx.$t("help"))}</p><div class="flex flex-col gap-4" data-v-e655c028><a href="https://t.me/RedMediaUz" data-v-e655c028>`);
        _push(ssrRenderComponent(_component_BaseButton, {
          state: "primary",
          class: "!bg-[#34AADF] w-full"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" data-v-e655c028${_scopeId}><path d="M4.57178 10.5325C4.57178 10.5325 12.3035 7.23976 14.985 6.08029C16.013 5.61654 19.499 4.13241 19.499 4.13241C19.499 4.13241 21.1079 3.48316 20.9738 5.05997C20.9291 5.70929 20.5716 7.98175 20.2141 10.4398C19.6777 13.9181 19.0967 17.7211 19.0967 17.7211C19.0967 17.7211 19.0074 18.7878 18.2476 18.9733C17.4879 19.1588 16.2364 18.324 16.013 18.1385C15.8342 17.9994 12.6611 15.9123 11.4991 14.892C11.1862 14.6138 10.8287 14.0573 11.5437 13.408C13.1527 11.8775 15.0744 9.97604 16.2364 8.77022C16.7728 8.21366 17.309 6.9151 15.0744 8.49191C11.9013 10.7644 8.77285 12.8978 8.77285 12.8978C8.77285 12.8978 8.05775 13.3616 6.717 12.9442C5.37619 12.5268 3.81196 11.9703 3.81196 11.9703C3.81196 11.9703 2.73941 11.2746 4.57178 10.5325Z" fill="white" data-v-e655c028${_scopeId}></path></svg> Telegram `);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "25",
                  height: "24",
                  viewBox: "0 0 25 24",
                  fill: "none"
                }, [
                  createVNode("path", {
                    d: "M4.57178 10.5325C4.57178 10.5325 12.3035 7.23976 14.985 6.08029C16.013 5.61654 19.499 4.13241 19.499 4.13241C19.499 4.13241 21.1079 3.48316 20.9738 5.05997C20.9291 5.70929 20.5716 7.98175 20.2141 10.4398C19.6777 13.9181 19.0967 17.7211 19.0967 17.7211C19.0967 17.7211 19.0074 18.7878 18.2476 18.9733C17.4879 19.1588 16.2364 18.324 16.013 18.1385C15.8342 17.9994 12.6611 15.9123 11.4991 14.892C11.1862 14.6138 10.8287 14.0573 11.5437 13.408C13.1527 11.8775 15.0744 9.97604 16.2364 8.77022C16.7728 8.21366 17.309 6.9151 15.0744 8.49191C11.9013 10.7644 8.77285 12.8978 8.77285 12.8978C8.77285 12.8978 8.05775 13.3616 6.717 12.9442C5.37619 12.5268 3.81196 11.9703 3.81196 11.9703C3.81196 11.9703 2.73941 11.2746 4.57178 10.5325Z",
                    fill: "white"
                  })
                ])),
                createTextVNode(" Telegram ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</a><a href="tel:+998 (71) 200-01-98" data-v-e655c028>`);
        _push(ssrRenderComponent(_component_BaseButton, {
          state: "primary",
          class: "flex-y-center gap-2 w-full whitespace-nowrap"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="w-6 h-6 flex-center shrink-0" data-v-e655c028${_scopeId}><img width="18.75" height="18.75"${ssrRenderAttr("src", _imports_0$1)} alt="phone" data-v-e655c028${_scopeId}></div> ${ssrInterpolate(_ctx.$t("call"))}: +998 (71) 200-01-98 `);
            } else {
              return [
                createVNode("div", { class: "w-6 h-6 flex-center shrink-0" }, [
                  createVNode("img", {
                    width: "18.75",
                    height: "18.75",
                    src: _imports_0$1,
                    alt: "phone"
                  })
                ]),
                createTextVNode(" " + toDisplayString(_ctx.$t("call")) + ": +998 (71) 200-01-98 ", 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</a></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/FloatingButton.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-e655c028"]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-y-center gap-2 px-4 py-3 rounded-lg hover:bg-[rgba(0,33,104,0.1)] active:bg-[rgba(0,33,104,0.1)] cursor-pointer transition-200" }, _attrs))}><svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.6929 0.171522C6.04575 0.441528 6.10296 0.934015 5.82068 1.27152L1.86596 6L5.82068 10.7285C6.10296 11.066 6.04575 11.5585 5.6929 11.8285C5.34005 12.0985 4.82518 12.0438 4.5429 11.7063L0.179289 6.48889C-0.0597628 6.20306 -0.0597627 5.79693 0.179289 5.51111L4.5429 0.293744C4.82518 -0.0437634 5.34005 -0.0984842 5.6929 0.171522Z" fill="#002168"></path></svg><span class="text-darkBlue text-sm leading-normal">Назад</span></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon/Back.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "" + __buildAssetsURL("logo-small-white.1453f7ea.svg");
const _imports_1 = "" + __buildAssetsURL("qr-1.43a87d9e.svg");
const _imports_2 = "" + __buildAssetsURL("qr-2.a7010745.svg");
const _imports_3 = "" + __buildAssetsURL("app-store.a7037ec5.svg");
const _imports_4 = "" + __buildAssetsURL("google-play.ff35f664.svg");
const LoginModal_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = {
  __name: "LoginModal",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, t } = useI18n();
    const localePath = useLocalePath();
    const useRedirectUrl = useRedirect();
    const useToast = useToastOpen();
    const useToastTitle = useToastText();
    const isOpen = useLoginModal();
    const title = useLoginTitle();
    const progress = ref(0);
    const digits = ref(["", "", "", ""]);
    watch(isOpen, (val) => {
      if (val) {
        setTimeout(() => {
          const el = document.getElementById("phone-number");
          el.focus();
        }, 100);
      } else
        progress.value = 0;
    });
    ref(0);
    const phone = ref(null);
    const handleFocus = () => {
      if (!phone.value)
        phone.value = "+998 ";
    };
    const handleBlur = () => {
      if (phone.value == "+998 ")
        phone.value = null;
    };
    const sendSms = async () => {
      if (!phone.value || timer.value != 0)
        return;
      const number = phone.value.replace(/\D/g, "").replace("998", "");
      if (number.length == 9) {
        progress.value = 1;
        setTimeout(() => {
          document.getElementById("digit0").focus();
        }, 100);
        startTimer();
        const body = {
          phone_number: number
        };
        await useMyFetch(`${locale.value}/auth/phone-number/`, {
          method: "POST",
          body
        });
      }
    };
    const timer = ref(0);
    const refreshIntervalId = ref(null);
    const startTimer = () => {
      timer.value = 60;
      refreshIntervalId.value = setInterval(() => {
        if (timer.value > 0)
          timer.value--;
      }, 1e3);
    };
    function moveToNext(event, index) {
      wrongCode.value = false;
      if (event.target) {
        if (event.target.value.length == 4) {
          for (let i = 0; i < 4; i++) {
            const item = document.getElementById(`digit${i}`);
            const digit = event.target.value.toString().charAt(i);
            digits.value[i] = digit;
            item.focus();
          }
        }
      }
      if (event.target.value.length === event.target.maxLength) {
        const nextDigit = document.getElementById(`digit${index + 1}`);
        if (nextDigit) {
          nextDigit.focus();
        }
      }
      if (index == 3) {
        submit();
      }
    }
    const moveBack = () => {
      clearInterval(refreshIntervalId.value);
      timer.value = 0;
      progress.value = 0;
    };
    const handleKeypress = (event, index) => {
      var previous;
      if (index > 0) {
        previous = document.getElementById(`digit${index - 1}`);
      }
      if (index < 6) {
        document.getElementById(`digit${index + 1}`);
      }
      if (event.keyCode == 8) {
        if (event.target.value) {
          digits.value[index] = "";
        } else if (previous) {
          previous.focus();
          previous.value = "";
          digits.value[index - 1] = "";
        }
      }
      if (event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode >= 96 && event.keyCode <= 105) {
        if (digits.value[index]) {
          digits.value[index] = "";
        }
      }
      if (event.keyCode == 37 && previous) {
        previous.focus();
      }
      if (event.key === "ArrowLeft" || event.key === "ArrowRight" || event.key === "ArrowUp" || event.key === "ArrowDown") {
        event.preventDefault();
      }
    };
    const loading = ref(false);
    const wrongCode = ref(false);
    const access = ref(null);
    const refresh = ref(null);
    async function submit() {
      loading.value = true;
      const phone_number = phone.value.replace(/\D/g, "").replace("998", "");
      let code = digits.value.join("");
      const res = await useAuthUser({ phone_number, code }, locale.value);
      if (res) {
        access.value = res.access_token;
        refresh.value = res.refresh_token;
        const user = useUserInfo();
        if (!user.value)
          await usePersonalData(locale.value, access.value);
        if (user.value.date_birthday && user.value.first_name && user.value.last_name && user.value.gender) {
          isOpen.value = false;
          useToast.value = true;
          useToastTitle.value = "toast.registered";
          const accessToken = useCookie("access");
          const refreshToken = useCookie("refresh");
          accessToken.value = access.value;
          refreshToken.value = refresh.value;
          if (!useRedirectUrl.value)
            navigateTo(localePath("/"));
          else
            navigateTo(localePath(useRedirectUrl.value.link));
        } else {
          progress.value = 2;
          setTimeout(() => {
            const el = document.getElementById("first-name");
            el.focus();
          }, 100);
        }
      } else {
        wrongCode.value = true;
      }
      loading.value = false;
    }
    const first_name = ref(null);
    const last_name = ref(null);
    const gender = ref(null);
    const birth_date = ref(null);
    const errorFirst = ref(false);
    const errorLast = ref(false);
    const errorGender = ref(false);
    const errorBirth = ref(false);
    const genderOptions = useGenderOptions();
    const onGenderChange = (val) => {
      gender.value = val;
      errorGender.value = false;
    };
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
          errorBirth.value = false;
        }
      }
      return !errorFirst.value && !errorLast.value && !errorGender.value && !errorBirth.value;
    };
    const submitUserInfo = async () => {
      if (validate()) {
        const date = birth_date.value.split(".");
        const number = phone.value.replace(/\D/g, "").replace("998", "");
        const body = {
          first_name: first_name.value,
          last_name: last_name.value,
          gender: genderOptions.value[gender.value].value,
          date_birthday: `${date[2]}-${date[1]}-${date[0]}`,
          phone_number: number
        };
        const accessToken = useCookie("access");
        const refreshToken = useCookie("refresh");
        const isAuthenticated = useAuthenticated();
        const userInfo = useUserInfo();
        const { data } = await useMyFetch(`${locale.value}/auth/update-profile/`, {
          method: "PUT",
          body,
          headers: {
            Authorization: `Bearer ${access.value}`
          }
        });
        if (data.value) {
          userInfo.value = data.value;
          accessToken.value = access.value;
          refreshToken.value = refresh.value;
          isAuthenticated.value = true;
          isOpen.value = false;
          useToast.value = true;
          useToastTitle.value = "toast.registered";
          if (!useRedirectUrl.value)
            navigateTo(localePath("/"));
          else
            navigateTo(localePath(useRedirectUrl.value.link));
        }
      } else
        console.log("Failed to submit");
    };
    const isDateValid = (dateStr) => {
      const date = new Date(dateStr);
      return !isNaN(date.getTime());
    };
    const phoneText = computed(() => {
      return t("sentto", {
        phone: `<span style="white-space: nowrap;">${numberWithSpaces(
          phone.value,
          false
        )}</span>`
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageModal = __nuxt_component_0$2;
      const _component_BaseInput = __nuxt_component_1$2;
      const _component_BaseButton = __nuxt_component_2$2;
      const _component_BaseDropdown = __nuxt_component_3$2;
      const _component_IconBack = __nuxt_component_4$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(isOpen)) {
        _push(ssrRenderComponent(_component_PageModal, {
          "is-open": unref(isOpen),
          onClose: ($event) => unref(progress) == 2 ? validate("all") : isOpen.value = false
        }, {
          body: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="fixed-center z-[99] flex rounded-2xl overflow-hidden max-md:w-[calc(100%-32px)] max-md:max-w-[360px]"${_scopeId}><div class="bg-blue p-8 flex flex-col justify-between gap-10 md:h-[600px] w-[300px] max-md:hidden"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="logo" class="h-7"${_scopeId}><div class="flex flex-col gap-4"${_scopeId}><p class="text-2xl text-white font-bold leading-normal text-center"${_scopeId}>${ssrInterpolate(_ctx.$t("app"))}</p><p class="text-white text-2xl font-caveat text-center"${_scopeId}>${ssrInterpolate(_ctx.$t("qrcode"))}</p><div class="flex gap-2"${_scopeId}><div class="bg-white rounded-2xl p-1"${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="QR code" draggable="false"${_scopeId}></div><div class="bg-white rounded-2xl p-1"${_scopeId}><img${ssrRenderAttr("src", _imports_2)} alt="QR code" draggable="false"${_scopeId}></div></div></div><div class="flex-y-center flex-col gap-10"${_scopeId}><div class="flex justify-between w-full"${_scopeId}><a href="https://apps.apple.com/us/app/clindoc/id6476093035" target="_blank"${_scopeId}><img${ssrRenderAttr("src", _imports_3)} alt="App Store"${_scopeId}></a><a href="https://play.google.com/store/apps/details?id=uz.clindoc.redmedia" target="_blank"${_scopeId}><img${ssrRenderAttr("src", _imports_4)} alt="Google Play"${_scopeId}></a></div></div></div><div class="bg-white w-full md:w-[368px] p-8 flex-center relative overflow-clip"${_scopeId}>`);
              if (unref(progress) == 0) {
                _push2(`<form class="flex flex-col gap-8"${_scopeId}><p class="text-2xl font-bold text-darkBlue text-center"${_scopeId}>${ssrInterpolate(_ctx.$t(unref(title)))}</p>`);
                _push2(ssrRenderComponent(_component_BaseInput, {
                  placeholder: "input.phone",
                  modelValue: unref(phone),
                  "onUpdate:modelValue": ($event) => isRef(phone) ? phone.value = $event : null,
                  inputID: "phone-number",
                  type: "tel",
                  onOnFocus: handleFocus,
                  onOnBlur: handleBlur
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BaseButton, {
                  onClick: sendSms,
                  state: "primary",
                  type: "submit"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("getcode"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("getcode")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</form>`);
              } else if (unref(progress) == 1) {
                _push2(`<div class="flex flex-col gap-8"${_scopeId}><div class="flex flex-col gap-2"${_scopeId}><p class="text-2xl text-darkBlue font-bold leading-normal text-center"${_scopeId}>${ssrInterpolate(_ctx.$t("entercode"))}</p><div class="text-xs text-secondary leading-normal text-center"${_scopeId}>${unref(phoneText)}</div></div><div class="flex gap-2 self-center"${_scopeId}><!--[-->`);
                ssrRenderList(unref(digits), (digit, index) => {
                  _push2(`<input${ssrRenderAttr("id", `digit${index}`)} type="number"${ssrRenderAttr("value", unref(digits)[index])} min="0" max="9" maxlength="1" class="${ssrRenderClass([{ "!bg-[#FFEBF2] focus:!border-red": unref(wrongCode) }, "w-[46px] h-[60px] rounded-lg bg-bg text-2xl text-darkBlue font-bold leading-normal text-center caret-darkBlue border border-[rgba(0,0,0,0)] focus:border-blue focus:bg-white focus:outline-none hover:bg-[#E8EAF2] transition-100"])}"${_scopeId}>`);
                });
                _push2(`<!--]--></div><div class="flex flex-col gap-4"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseButton, {
                  class: "font-normal",
                  state: "secondary",
                  "is-disabled": unref(timer) > 0,
                  onClick: sendSms
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      if (unref(timer) > 0) {
                        _push3(`<span${_scopeId2}>${ssrInterpolate(_ctx.$t("sendagain"))}: ${ssrInterpolate(unref(timer))} ${ssrInterpolate(_ctx.$t("sec"))}</span>`);
                      } else {
                        _push3(`<span${_scopeId2}>${ssrInterpolate(_ctx.$t("sendagain"))}</span>`);
                      }
                    } else {
                      return [
                        unref(timer) > 0 ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(_ctx.$t("sendagain")) + ": " + toDisplayString(unref(timer)) + " " + toDisplayString(_ctx.$t("sec")), 1)) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(_ctx.$t("sendagain")), 1))
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BaseButton, {
                  state: "primary",
                  "is-loading": unref(loading),
                  onClick: submit
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("confirm"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("confirm")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else if (unref(progress) == 2) {
                _push2(`<form class="flex flex-col gap-8"${_scopeId}><p class="text-2xl text-darkBlue font-bold leading-normal text-center"${_scopeId}>${ssrInterpolate(_ctx.$t("fillInfo"))}</p><div class="flex flex-col gap-4"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseInput, {
                  placeholder: "input.name",
                  modelValue: unref(first_name),
                  "onUpdate:modelValue": ($event) => isRef(first_name) ? first_name.value = $event : null,
                  inputID: "first-name",
                  type: "text",
                  error: unref(errorFirst) ? "error.first" : null,
                  onOnBlur: ($event) => validate("first")
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BaseInput, {
                  placeholder: "input.surname",
                  modelValue: unref(last_name),
                  "onUpdate:modelValue": ($event) => isRef(last_name) ? last_name.value = $event : null,
                  inputID: "last-name",
                  type: "text",
                  error: unref(errorLast) ? "error.last" : null,
                  onOnBlur: ($event) => validate("last")
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BaseDropdown, {
                  options: unref(genderOptions),
                  placeholder: "userGenderTitle",
                  selected: unref(gender),
                  onOnChange: onGenderChange,
                  error: unref(errorGender) ? "error.gender" : null
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BaseInput, {
                  placeholder: "input.birth",
                  modelValue: unref(birth_date),
                  "onUpdate:modelValue": ($event) => isRef(birth_date) ? birth_date.value = $event : null,
                  inputID: "birth-date",
                  type: "text",
                  "is-birth": true,
                  onOnBlur: ($event) => validate("birth"),
                  error: unref(errorBirth) ? "error.birth" : null
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
                _push2(ssrRenderComponent(_component_BaseButton, {
                  onClick: submitUserInfo,
                  state: "primary",
                  type: "submit"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("confirm"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("confirm")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</form>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(progress) != 2) {
                _push2(ssrRenderComponent(_component_IconBack, {
                  onClick: moveBack,
                  class: ["absolute top-2 left-2 -translate-x-full", { "translate-x-0": unref(progress) == 1 }]
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<img class="absolute top-4 right-4 cursor-pointer"${ssrRenderAttr("src", _imports_5$1)} alt="close"${_scopeId}></div></div>`);
            } else {
              return [
                createVNode("div", { class: "fixed-center z-[99] flex rounded-2xl overflow-hidden max-md:w-[calc(100%-32px)] max-md:max-w-[360px]" }, [
                  createVNode("div", { class: "bg-blue p-8 flex flex-col justify-between gap-10 md:h-[600px] w-[300px] max-md:hidden" }, [
                    createVNode("img", {
                      src: _imports_0,
                      alt: "logo",
                      class: "h-7"
                    }),
                    createVNode("div", { class: "flex flex-col gap-4" }, [
                      createVNode("p", { class: "text-2xl text-white font-bold leading-normal text-center" }, toDisplayString(_ctx.$t("app")), 1),
                      createVNode("p", { class: "text-white text-2xl font-caveat text-center" }, toDisplayString(_ctx.$t("qrcode")), 1),
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode("div", { class: "bg-white rounded-2xl p-1" }, [
                          createVNode("img", {
                            src: _imports_1,
                            alt: "QR code",
                            draggable: "false"
                          })
                        ]),
                        createVNode("div", { class: "bg-white rounded-2xl p-1" }, [
                          createVNode("img", {
                            src: _imports_2,
                            alt: "QR code",
                            draggable: "false"
                          })
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "flex-y-center flex-col gap-10" }, [
                      createVNode("div", { class: "flex justify-between w-full" }, [
                        createVNode("a", {
                          href: "https://apps.apple.com/us/app/clindoc/id6476093035",
                          target: "_blank"
                        }, [
                          createVNode("img", {
                            src: _imports_3,
                            alt: "App Store"
                          })
                        ]),
                        createVNode("a", {
                          href: "https://play.google.com/store/apps/details?id=uz.clindoc.redmedia",
                          target: "_blank"
                        }, [
                          createVNode("img", {
                            src: _imports_4,
                            alt: "Google Play"
                          })
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "bg-white w-full md:w-[368px] p-8 flex-center relative overflow-clip" }, [
                    unref(progress) == 0 ? (openBlock(), createBlock("form", {
                      key: 0,
                      onSubmit: withModifiers(() => {
                      }, ["prevent"]),
                      class: "flex flex-col gap-8"
                    }, [
                      createVNode("p", { class: "text-2xl font-bold text-darkBlue text-center" }, toDisplayString(_ctx.$t(unref(title))), 1),
                      createVNode(_component_BaseInput, {
                        placeholder: "input.phone",
                        modelValue: unref(phone),
                        "onUpdate:modelValue": ($event) => isRef(phone) ? phone.value = $event : null,
                        inputID: "phone-number",
                        type: "tel",
                        onOnFocus: handleFocus,
                        onOnBlur: handleBlur
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_BaseButton, {
                        onClick: sendSms,
                        state: "primary",
                        type: "submit"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("getcode")), 1)
                        ]),
                        _: 1
                      })
                    ], 40, ["onSubmit"])) : unref(progress) == 1 ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "flex flex-col gap-8"
                    }, [
                      createVNode("div", { class: "flex flex-col gap-2" }, [
                        createVNode("p", { class: "text-2xl text-darkBlue font-bold leading-normal text-center" }, toDisplayString(_ctx.$t("entercode")), 1),
                        createVNode("div", {
                          class: "text-xs text-secondary leading-normal text-center",
                          innerHTML: unref(phoneText)
                        }, null, 8, ["innerHTML"])
                      ]),
                      createVNode("div", { class: "flex gap-2 self-center" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(digits), (digit, index) => {
                          return withDirectives((openBlock(), createBlock("input", {
                            id: `digit${index}`,
                            type: "number",
                            key: digit.key,
                            "onUpdate:modelValue": ($event) => unref(digits)[index] = $event,
                            min: "0",
                            max: "9",
                            maxlength: "1",
                            onInput: ($event) => moveToNext($event, index),
                            onKeydown: ($event) => handleKeypress($event, index),
                            class: [{ "!bg-[#FFEBF2] focus:!border-red": unref(wrongCode) }, "w-[46px] h-[60px] rounded-lg bg-bg text-2xl text-darkBlue font-bold leading-normal text-center caret-darkBlue border border-[rgba(0,0,0,0)] focus:border-blue focus:bg-white focus:outline-none hover:bg-[#E8EAF2] transition-100"]
                          }, null, 42, ["id", "onUpdate:modelValue", "onInput", "onKeydown"])), [
                            [vModelText, unref(digits)[index]]
                          ]);
                        }), 128))
                      ]),
                      createVNode("div", { class: "flex flex-col gap-4" }, [
                        createVNode(_component_BaseButton, {
                          class: "font-normal",
                          state: "secondary",
                          "is-disabled": unref(timer) > 0,
                          onClick: sendSms
                        }, {
                          default: withCtx(() => [
                            unref(timer) > 0 ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(_ctx.$t("sendagain")) + ": " + toDisplayString(unref(timer)) + " " + toDisplayString(_ctx.$t("sec")), 1)) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(_ctx.$t("sendagain")), 1))
                          ]),
                          _: 1
                        }, 8, ["is-disabled"]),
                        createVNode(_component_BaseButton, {
                          state: "primary",
                          "is-loading": unref(loading),
                          onClick: submit
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("confirm")), 1)
                          ]),
                          _: 1
                        }, 8, ["is-loading"])
                      ])
                    ])) : unref(progress) == 2 ? (openBlock(), createBlock("form", {
                      key: 2,
                      onSubmit: withModifiers(() => {
                      }, ["prevent"]),
                      class: "flex flex-col gap-8"
                    }, [
                      createVNode("p", { class: "text-2xl text-darkBlue font-bold leading-normal text-center" }, toDisplayString(_ctx.$t("fillInfo")), 1),
                      createVNode("div", { class: "flex flex-col gap-4" }, [
                        createVNode(_component_BaseInput, {
                          placeholder: "input.name",
                          modelValue: unref(first_name),
                          "onUpdate:modelValue": ($event) => isRef(first_name) ? first_name.value = $event : null,
                          inputID: "first-name",
                          type: "text",
                          error: unref(errorFirst) ? "error.first" : null,
                          onOnBlur: ($event) => validate("first")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "onOnBlur"]),
                        createVNode(_component_BaseInput, {
                          placeholder: "input.surname",
                          modelValue: unref(last_name),
                          "onUpdate:modelValue": ($event) => isRef(last_name) ? last_name.value = $event : null,
                          inputID: "last-name",
                          type: "text",
                          error: unref(errorLast) ? "error.last" : null,
                          onOnBlur: ($event) => validate("last")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "onOnBlur"]),
                        createVNode(_component_BaseDropdown, {
                          options: unref(genderOptions),
                          placeholder: "userGenderTitle",
                          selected: unref(gender),
                          onOnChange: onGenderChange,
                          error: unref(errorGender) ? "error.gender" : null
                        }, null, 8, ["options", "selected", "error"]),
                        createVNode(_component_BaseInput, {
                          placeholder: "input.birth",
                          modelValue: unref(birth_date),
                          "onUpdate:modelValue": ($event) => isRef(birth_date) ? birth_date.value = $event : null,
                          inputID: "birth-date",
                          type: "text",
                          "is-birth": true,
                          onOnBlur: ($event) => validate("birth"),
                          error: unref(errorBirth) ? "error.birth" : null
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onOnBlur", "error"])
                      ]),
                      createVNode(_component_BaseButton, {
                        onClick: submitUserInfo,
                        state: "primary",
                        type: "submit"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("confirm")), 1)
                        ]),
                        _: 1
                      })
                    ], 40, ["onSubmit"])) : createCommentVNode("", true),
                    unref(progress) != 2 ? (openBlock(), createBlock(_component_IconBack, {
                      key: 3,
                      onClick: moveBack,
                      class: ["absolute top-2 left-2 -translate-x-full", { "translate-x-0": unref(progress) == 1 }]
                    }, null, 8, ["class"])) : createCommentVNode("", true),
                    createVNode("img", {
                      class: "absolute top-4 right-4 cursor-pointer",
                      src: _imports_5$1,
                      alt: "close",
                      onClick: ($event) => unref(progress) == 2 ? validate("all") : isOpen.value = false
                    }, null, 8, ["onClick"])
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/LoginModal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "Toast",
  __ssrInlineRender: true,
  setup(__props) {
    const useToast = useToastOpen();
    const title = useToastText();
    watch(useToast, () => {
      setTimeout(() => useToast.value = false, 5e3);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [unref(useToast) ? "max-lg:translate-y-4 lg:-translate-x-4 toast opacity-100" : "max-lg:-translate-y-full lg:translate-x-full opacity-0", "bg-green px-4 py-3 rounded-lg flex-y-center gap-2 w-fit z-[999999] fixed transition-300 top-0 lg:top-[100px] max-lg:left-1/2 max-lg:-translate-x-1/2 lg:right-0"]
      }, _attrs))}><div class="max-md:w-6 max-md:h-6 flex-center"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 29.3327C23.3638 29.3327 29.3333 23.3631 29.3333 15.9993C29.3333 8.63555 23.3638 2.66602 16 2.66602C8.63616 2.66602 2.66663 8.63555 2.66663 15.9993C2.66663 23.3631 8.63616 29.3327 16 29.3327ZM22.1227 12.6133C22.4617 12.1774 22.3832 11.5491 21.9472 11.21C21.5113 10.871 20.883 10.9495 20.5439 11.3855L15.2013 18.2546C15.0825 18.4073 14.859 18.4272 14.7152 18.2977L11.3356 15.2561C10.9251 14.8866 10.2928 14.9199 9.92334 15.3304C9.55388 15.7409 9.58716 16.3732 9.99767 16.7427L13.3772 19.7843C14.3841 20.6905 15.9484 20.5517 16.78 19.4825L22.1227 12.6133Z" fill="white"></path></svg></div><span class="text-sm md:text-lg font-bold text-white leading-normal whitespace-nowrap">${ssrInterpolate(unref(title) ? _ctx.$t(unref(title)) : null)}</span></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/Toast.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main$1;
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLoadingIndicator = __nuxt_component_0$1;
  const _component_PageHeader = __nuxt_component_1;
  const _component_ClinicModal = __nuxt_component_2;
  const _component_PageFloatingButton = __nuxt_component_3;
  const _component_PageLoginModal = __nuxt_component_4;
  const _component_PageToast = __nuxt_component_5;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-[100svh] flex flex-col" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_NuxtLoadingIndicator, { color: "#1D7ED8" }, null, _parent));
  _push(ssrRenderComponent(_component_PageHeader, null, null, _parent));
  _push(`<div class="flex-grow bg-bg">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  _push(ssrRenderComponent(_component_ClinicModal, null, null, _parent));
  _push(ssrRenderComponent(_component_PageFloatingButton, null, null, _parent));
  _push(ssrRenderComponent(_component_PageLoginModal, null, null, _parent));
  _push(ssrRenderComponent(_component_PageToast, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-bbb2d9cf.js.map
