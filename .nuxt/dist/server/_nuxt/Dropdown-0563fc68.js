import { mergeProps, useSSRContext, ref, unref } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { _ as _imports_0 } from "./tick-12729be4.js";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-6 h-6 flex-center" }, _attrs))}><svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.414376 0.531506C0.673133 0.20806 1.1451 0.155619 1.46855 0.414376L6.00003 4.03956L10.5315 0.414376C10.855 0.155619 11.3269 0.20806 11.5857 0.531506C11.8444 0.854953 11.792 1.32692 11.4685 1.58568L6.46855 5.58568C6.19464 5.80481 5.80542 5.80481 5.53151 5.58568L0.531506 1.58568C0.20806 1.32692 0.155619 0.854953 0.414376 0.531506Z" fill="#002168" fill-opacity="0.4"></path></svg></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon/ArrowB.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const Dropdown_vue_vue_type_style_index_0_scoped_cace60c2_lang = "";
const _sfc_main = {
  __name: "Dropdown",
  __ssrInlineRender: true,
  props: {
    options: {
      required: true,
      type: Array
    },
    placeholder: {
      required: true,
      type: String
    },
    selected: {
      required: true
    },
    error: {
      required: false,
      type: String
    }
  },
  setup(__props) {
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconArrowB = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-2" }, _attrs))} data-v-cace60c2><div class="relative select-none" data-v-cace60c2><div class="${ssrRenderClass([{ "!bg-[#FFEBF2] hover:!bg-[#E5D7E4] active:!bg-[#CCC3D6]": __props.error }, "rounded-lg bg-bg hover:bg-[#DBE3F0] active:bg-[#C2CEE1] cursor-pointer px-4 h-12 flex-y-center justify-between transition-200"])}" data-v-cace60c2>`);
      if (__props.selected == null) {
        _push(`<span class="text-secondary text-sm leading-normal" data-v-cace60c2>${ssrInterpolate(_ctx.$t(__props.placeholder))}</span>`);
      } else {
        _push(`<span class="text-darkBlue text-sm leading-normal" data-v-cace60c2>${ssrInterpolate(_ctx.$t(__props.options[__props.selected].name))}</span>`);
      }
      _push(ssrRenderComponent(_component_IconArrowB, {
        class: ["transition-200", { "-rotate-180": unref(isOpen) }]
      }, null, _parent));
      _push(`</div>`);
      if (unref(isOpen)) {
        _push(`<div class="absolute z-[11] top-full mt-1 rounded-lg border border-dividers bg-white dropdown-shadow flex flex-col w-full overflow-clip" data-v-cace60c2><!--[-->`);
        ssrRenderList(__props.options, (item, index) => {
          _push(`<div class="${ssrRenderClass([{ "bg-bg font-bold": __props.selected == index, "border-t border-dividers": index != 0 }, "flex-y-center px-4 h-12 justify-between hover:bg-[#E5E9F0] active:bg-[#CCD3E1] cursor-pointer text-sm text-darkBlue leading-normal transition-100"])}" data-v-cace60c2>${ssrInterpolate(_ctx.$t(item.name))} `);
          if (__props.selected == index) {
            _push(`<img${ssrRenderAttr("src", _imports_0)} alt="tick" data-v-cace60c2>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.error) {
        _push(`<p class="text-red text-xs leading-normal" data-v-cace60c2>${ssrInterpolate(_ctx.$t(__props.error))}</p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Base/Dropdown.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cace60c2"]]);
export {
  __nuxt_component_3 as _
};
//# sourceMappingURL=Dropdown-0563fc68.js.map
