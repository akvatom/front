import { ref, watch, mergeProps, unref, useSSRContext, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import Flicking from "@egjs/vue3-flicking";
import { u as useI18n } from "../server.mjs";
const _sfc_main$1 = {
  __name: "Rating",
  __ssrInlineRender: true,
  props: ["rating"],
  setup(__props) {
    const props = __props;
    const full = ref(Math.floor(props.rating));
    const empty = ref(Math.floor(5 - props.rating));
    const partial = ref(props.rating - full.value);
    watch(() => props.rating, () => {
      full.value = Math.floor(props.rating);
      empty.value = Math.floor(5 - props.rating);
      partial.value = props.rating - full.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-0.5 items-center" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(full), (item) => {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6.68858 2.1811C7.22504 1.05096 8.77504 1.05096 9.3115 2.1811L10.2386 4.13428C10.4517 4.58306 10.8634 4.89412 11.3398 4.96609L13.4129 5.27929C14.6125 5.46052 15.0915 6.99319 14.2235 7.87288L12.7233 9.39322C12.3786 9.74255 12.2213 10.2459 12.3027 10.7391L12.6568 12.8859C12.8618 14.128 11.6078 15.0753 10.5349 14.4888L8.68059 13.4752C8.25454 13.2423 7.74554 13.2423 7.31949 13.4752L5.46522 14.4888C4.3923 15.0753 3.13832 14.128 3.34323 12.8859L3.69737 10.7391C3.77874 10.2459 3.62145 9.74255 3.27676 9.39322L1.77662 7.87289C0.908618 6.99319 1.38759 5.46052 2.58715 5.27929L4.66029 4.96609C5.13663 4.89412 5.54842 4.58306 5.76145 4.13428L6.68858 2.1811Z" fill="#F9A830"></path></svg>`);
      });
      _push(`<!--]-->`);
      if (unref(partial)) {
        _push(`<span class="relative"><svg class="absolute" xmlns="http://www.w3.org/2000/svg"${ssrRenderAttr("width", 12 * unref(partial) + 2)} height="16" fill="none"><path d="M6.68858 2.1811C7.22504 1.05096 8.77504 1.05096 9.3115 2.1811L10.2386 4.13428C10.4517 4.58306 10.8634 4.89412 11.3398 4.96609L13.4129 5.27929C14.6125 5.46052 15.0915 6.99319 14.2235 7.87288L12.7233 9.39322C12.3786 9.74255 12.2213 10.2459 12.3027 10.7391L12.6568 12.8859C12.8618 14.128 11.6078 15.0753 10.5349 14.4888L8.68059 13.4752C8.25454 13.2423 7.74554 13.2423 7.31949 13.4752L5.46522 14.4888C4.3923 15.0753 3.13832 14.128 3.34323 12.8859L3.69737 10.7391C3.77874 10.2459 3.62145 9.74255 3.27676 9.39322L1.77662 7.87289C0.908618 6.99319 1.38759 5.46052 2.58715 5.27929L4.66029 4.96609C5.13663 4.89412 5.54842 4.58306 5.76145 4.13428L6.68858 2.1811Z" fill="#F9A830"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M7.14028 2.39551C7.49598 1.64616 8.5041 1.64616 8.8598 2.39551L9.78694 4.34869C10.0686 4.94206 10.6183 5.36276 11.2651 5.46047L13.3382 5.77368C14.1075 5.88989 14.4674 6.91379 13.8675 7.5217L12.3674 9.04204C11.9079 9.50776 11.7025 10.1729 11.8094 10.8205L12.1635 12.9672C12.3081 13.8435 11.4423 14.415 10.7747 14.0501L8.92041 13.0365C8.34491 12.7219 7.65517 12.7219 7.07967 13.0365L5.2254 14.0501C4.55777 14.415 3.69202 13.8435 3.83656 12.9672L4.1907 10.8205C4.29753 10.1729 4.09221 9.50776 3.63267 9.04204L2.13253 7.52171C1.5327 6.91379 1.89262 5.88989 2.66184 5.77368L4.73498 5.46047C5.38178 5.36276 5.93148 4.94206 6.21314 4.34869L7.14028 2.39551Z" stroke="#F9A830" stroke-linejoin="round"></path></svg></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(unref(empty), (item) => {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M7.14028 2.39551C7.49598 1.64616 8.5041 1.64616 8.8598 2.39551L9.78694 4.34869C10.0686 4.94206 10.6183 5.36276 11.2651 5.46047L13.3382 5.77368C14.1075 5.88989 14.4674 6.91379 13.8675 7.5217L12.3674 9.04204C11.9079 9.50776 11.7025 10.1729 11.8094 10.8205L12.1635 12.9672C12.3081 13.8435 11.4423 14.415 10.7747 14.0501L8.92041 13.0365C8.34491 12.7219 7.65517 12.7219 7.07967 13.0365L5.2254 14.0501C4.55777 14.415 3.69202 13.8435 3.83656 12.9672L4.1907 10.8205C4.29753 10.1729 4.09221 9.50776 3.63267 9.04204L2.13253 7.52171C1.5327 6.91379 1.89262 5.88989 2.66184 5.77368L4.73498 5.46047C5.38178 5.36276 5.93148 4.94206 6.21314 4.34869L7.14028 2.39551Z" stroke="#F9A830" stroke-linejoin="round"></path></svg>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon/Rating.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1$1 = _sfc_main$1;
const _sfc_main = {
  __name: "DatePicker",
  __ssrInlineRender: true,
  props: {
    panels: {
      required: true,
      type: Array
    },
    panelIndex: {
      required: false,
      type: Number,
      default: 0
    },
    selected: {
      required: false,
      type: Number
    },
    uniqueID: {
      required: true,
      type: String
    }
  },
  emits: ["onChange", "moveThrough"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const flicking = ref(null);
    const timeout = ref(null);
    watch(() => props.selected, (newVal) => {
      clearTimeout(timeout.value);
      timeout.value = setTimeout(() => {
        flicking.value.moveTo(newVal);
      }, 300);
    });
    const emits = __emit;
    const updateTransform = (e) => {
      e.currentTarget.panels.forEach((panel) => {
        if (panel.progress < 0.5 && panel.progress > 0 || panel.progress < 0 && panel.progress > -0.5)
          emits("moveThrough", panel.index);
        const rotateVal = -panel.progress * 20;
        const sinRot = Math.sin(Math.abs(rotateVal * Math.PI / 180));
        const depth = 150 * sinRot * sinRot;
        panel.element.style.transform = `translateZ(-${depth}px) rotateX(${rotateVal}deg)`;
      });
    };
    const onChanged = (e) => {
      emits("onChange", e);
    };
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["rounded-lg bg-bg", __props.uniqueID]
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Flicking), {
        class: "relative h-[180px] w-full overflow-y-hidden flicking",
        options: { horizontal: false, align: "center", defaultIndex: __props.panelIndex },
        hideBeforeInit: true,
        onReady: updateTransform,
        onMove: updateTransform,
        onChanged,
        ref_key: "flicking",
        ref: flicking
      }, {
        viewport: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="absolute-center border-y border-dividers w-full h-9"${_scopeId}></div><div class="bg-bg bg-opacity-60 absolute w-full left-0 top-0 h-[72px] z-[1]"${_scopeId}></div><div class="bg-bg bg-opacity-60 absolute w-full left-0 bottom-0 h-[72px] z-[1]"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "absolute-center border-y border-dividers w-full h-9" }),
              createVNode("div", { class: "bg-bg bg-opacity-60 absolute w-full left-0 top-0 h-[72px] z-[1]" }),
              createVNode("div", { class: "bg-bg bg-opacity-60 absolute w-full left-0 bottom-0 h-[72px] z-[1]" })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.panels, (item, index) => {
              _push2(`<div class="py-2 text-base font-bold text-darkBlue leading-5 text-center"${_scopeId}>${ssrInterpolate(item)}</div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.panels, (item, index) => {
                return openBlock(), createBlock("div", {
                  class: "py-2 text-base font-bold text-darkBlue leading-5 text-center",
                  key: index
                }, toDisplayString(item), 1);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Base/DatePicker.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main;
const __unimport_usePrettyDistance = (meters) => {
  const { t } = useI18n();
  const distance = Math.floor(meters);
  if (distance < 1e3)
    return distance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " " + t("meter");
  return (distance / 1e3).toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " " + t("kilometer");
};
const _imports_2 = "" + __buildAssetsURL("metro.bed21ce2.svg");
const _imports_0 = "" + __buildAssetsURL("clock.65a77192.svg");
export {
  _imports_2 as _,
  __unimport_usePrettyDistance as a,
  _imports_0 as b,
  __nuxt_component_1$1 as c,
  __nuxt_component_1 as d
};
//# sourceMappingURL=clock-8f2938ae.js.map
