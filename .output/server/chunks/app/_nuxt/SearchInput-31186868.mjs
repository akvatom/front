import { defineComponent, ref, createElementBlock, useSSRContext, watch, resolveDirective, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode } from 'vue';
import { u as useI18n, i as useMyFetch, q as __nuxt_component_1 } from '../server.mjs';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';

const __nuxt_component_8 = /* @__PURE__ */ defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main = {
  __name: "SearchInput",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      required: true
    },
    isList: {
      required: false,
      default: false,
      type: Boolean
    },
    placeholder: {
      required: true,
      type: String
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const { locale } = useI18n();
    const props = __props;
    const inputModelValue = ref(null);
    inputModelValue.value = props.modelValue;
    const searched = ref(true);
    const isFocused = ref(false);
    const results = ref(null);
    const specialties = ref([]);
    const doctors = ref([]);
    watch(inputModelValue, async (newVal) => {
      searched.value = false;
      if (!props.isList)
        return;
      isFocused.value = true;
      const { data } = await useMyFetch(`${locale.value}/specialties/?search=${newVal}`);
      results.value = data.value;
      if (data.value) {
        if (data.value.specialties.length)
          specialties.value = sortByName(data.value.specialties);
        else
          specialties.value = [];
        if (data.value.doctors && data.value.doctors.length)
          doctors.value = sortByName(data.value.doctors);
        else
          doctors.value = [];
      }
    });
    const isNextLetter = (arr, index) => {
      if (index == 0)
        return true;
      return arr[index].name.charAt(0) != arr[index - 1].name.charAt(0);
    };
    function sortByName(arr) {
      let result = arr.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      return result;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLinkLocale = __nuxt_component_1;
      const _directive_click_outside = resolveDirective("click-outside");
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "w-full relative" }, _attrs, ssrGetDirectiveProps(_ctx, _directive_click_outside, () => isFocused.value = false)))}><div class="relative overflow-hidden"><div class="absolute inset-y-0 left-4 flex items-center pointer-events-none max-md:w-[18px]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M2.75 11.5C2.75 16.3325 6.66751 20.25 11.5 20.25C16.3325 20.25 20.25 16.3325 20.25 11.5C20.25 6.66751 16.3325 2.75 11.5 2.75C6.66751 2.75 2.75 6.66751 2.75 11.5ZM11.5 21.75C5.83908 21.75 1.25 17.1609 1.25 11.5C1.25 5.83908 5.83908 1.25 11.5 1.25C17.1609 1.25 21.75 5.83908 21.75 11.5C21.75 14.0605 20.8111 16.4017 19.2589 18.1982L22.5303 21.4697C22.8232 21.7626 22.8232 22.2374 22.5303 22.5303C22.2374 22.8232 21.7626 22.8232 21.4697 22.5303L18.1982 19.2589C16.4017 20.8111 14.0605 21.75 11.5 21.75Z" fill="#002168"></path></svg></div><input type="text" autocomplete="off"${ssrRenderAttr("value", unref(inputModelValue))} class="block h-12 w-full p-4 pl-12 text-sm caret-blue text-darkBlue placeholder:text-[#92A3C3] bg-bg hover:bg-[#DBE3F0] active:bg-[#C2CEE1] focus:bg-white focus:active:bg-white border border-[rgba(0,0,0,0)] focus:border-blue focus:outline-none rounded-lg"${ssrRenderAttr("placeholder", props.placeholder)}></div>`);
      if (__props.isList && unref(isFocused) && unref(results)) {
        _push(`<div class="py-4 bg-white rounded-lg absolute top-full mt-2 left-0 w-full results z-[10] max-h-[60vh] overflow-auto scrollbar-style">`);
        if (unref(specialties).length || unref(doctors).length) {
          _push(`<div class="flex flex-col gap-4">`);
          if (unref(specialties).length) {
            _push(`<div class="flex flex-col"><p class="text-xs text-secondary leading-normal pl-4">${ssrInterpolate(_ctx.$t("specialties"))}</p><!--[-->`);
            ssrRenderList(unref(specialties), (item, index) => {
              _push(ssrRenderComponent(_component_NuxtLinkLocale, {
                to: `/?specialty_id=${item.id}`,
                onClick: ($event) => isFocused.value = false,
                class: "flex-y-center gap-4 px-4 h-[50px] hover:bg-[#E5E9F0] active:bg-[#CCD3E1] focus-visible:bg-[#E5E9F0] focus:outline-none outline-none rounded-lg transition-100",
                key: item.key
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<div class="w-6 h-6"${_scopeId}>`);
                    if (isNextLetter(unref(specialties), index)) {
                      _push2(`<span class="bg-bg w-6 h-6 flex-center rounded text-base text-secondary font-bold leading-normal uppercase"${_scopeId}>${ssrInterpolate(item.name.charAt(0))}</span>`);
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`</div><p class="text-sm text-darkBlue leading-normal"${_scopeId}>${ssrInterpolate(item.name)}</p>`);
                  } else {
                    return [
                      createVNode("div", { class: "w-6 h-6" }, [
                        isNextLetter(unref(specialties), index) ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "bg-bg w-6 h-6 flex-center rounded text-base text-secondary font-bold leading-normal uppercase"
                        }, toDisplayString(item.name.charAt(0)), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("p", { class: "text-sm text-darkBlue leading-normal" }, toDisplayString(item.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(doctors) && unref(doctors).length) {
            _push(`<div class="flex flex-col"><p class="text-xs text-secondary leading-normal pl-4">${ssrInterpolate(_ctx.$t("doctors"))}</p><!--[-->`);
            ssrRenderList(unref(doctors), (item, index) => {
              _push(ssrRenderComponent(_component_NuxtLinkLocale, {
                to: `/doctor/${item.id}`,
                onClick: ($event) => isFocused.value = false,
                class: "flex-y-center gap-4 px-4 h-[50px] hover:bg-[#E5E9F0] active:bg-[#CCD3E1] focus-visible:bg-[#E5E9F0] focus:outline-none outline-none rounded-lg transition-100",
                key: item.key
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<div class="w-6 h-6"${_scopeId}>`);
                    if (isNextLetter(unref(doctors), index)) {
                      _push2(`<span class="bg-bg w-6 h-6 flex-center rounded text-base text-secondary font-bold leading-normal uppercase"${_scopeId}>${ssrInterpolate(item.name.charAt(0))}</span>`);
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`</div><p class="text-sm text-darkBlue leading-normal"${_scopeId}>${ssrInterpolate(item.name)}</p>`);
                  } else {
                    return [
                      createVNode("div", { class: "w-6 h-6" }, [
                        isNextLetter(unref(doctors), index) ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "bg-bg w-6 h-6 flex-center rounded text-base text-secondary font-bold leading-normal uppercase"
                        }, toDisplayString(item.name.charAt(0)), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("p", { class: "text-sm text-darkBlue leading-normal" }, toDisplayString(item.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<div class="px-4 text-sm text-darkBlue leading-normal">${ssrInterpolate(_ctx.$t("notfound"))}</div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Base/SearchInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_7 = _sfc_main;

export { __nuxt_component_8 as _, __nuxt_component_7 as a };
//# sourceMappingURL=SearchInput-31186868.mjs.map
