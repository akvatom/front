import { ref, watch, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderDynamicModel, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "Input",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      required: true
    },
    placeholder: {
      required: true,
      type: String
    },
    inputID: {
      required: true,
      type: String
    },
    type: {
      required: true,
      type: String
    },
    error: {
      required: false,
      type: String
    },
    isBirth: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "onInput", "onFocus", "onBlur"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const inputModelValue = ref(props.modelValue);
    watch(() => props.modelValue, (newVal) => {
      inputModelValue.value = newVal;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-2" }, _attrs))}><div class="relative"><input${ssrRenderAttr("type", __props.type)}${ssrRenderDynamicModel(__props.type, unref(inputModelValue), null)}${ssrRenderAttr("id", __props.inputID)} class="${ssrRenderClass([{ "!bg-[#FFEBF2] hover:!bg-[#E5D7E4] active:!bg-[#CCC3D6] focus:!bg-white focus:!border-red": __props.error }, "block h-12 w-full p-4 pt-[26px] text-sm caret-blue text-darkBlue placeholder:text-[#92A3C3] transition-200 bg-bg hover:bg-[#DBE3F0] active:bg-[#C2CEE1] focus:bg-white focus:active:bg-white border border-[rgba(0,0,0,0)] focus:border-blue outline-none focus:outline-none rounded-lg appearance-none focus:ring-0 peer"])}" placeholder=" "><label${ssrRenderAttr("for", __props.inputID)} draggable="false" class="absolute select-none text-base leading-normal text-secondary duration-300 transform -translate-y-2 scale-75 top-3 origin-[0] start-[17px] peer-focus:text-darkBlue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[2px] peer-focus:scale-75 peer-focus:-translate-y-2">${ssrInterpolate(_ctx.$t(__props.placeholder))}</label></div>`);
      if (__props.error) {
        _push(`<p class="text-red text-xs leading-normal">${ssrInterpolate(_ctx.$t(__props.error))}</p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Base/Input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main;
const _imports_5 = "" + __buildAssetsURL("close.0e88394c.svg");
export {
  _imports_5 as _,
  __nuxt_component_1 as a
};
//# sourceMappingURL=close-98a6d81e.js.map
