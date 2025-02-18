import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
const _sfc_main = {
  __name: "Location",
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
      }, _attrs))}><div class="w-6 h-6 flex justify-center items-center cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4424 13.9028C14.302 11.9966 16 9.14151 16 6.85714C16 3.07005 12.866 0 9 0C5.13401 0 2 3.07005 2 6.85714C2 9.14151 3.69796 11.9966 5.55756 13.9028C6.78087 15.1567 8.07413 16 9 16C9.92587 16 11.2191 15.1567 12.4424 13.9028ZM9 9C10.1046 9 11 8.10457 11 7C11 5.89543 10.1046 5 9 5C7.89543 5 7 5.89543 7 7C7 8.10457 7.89543 9 9 9Z" fill="#E82C71"></path><path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M4.05541 14.4929C1.61238 15.0294 0 15.9519 0 17C0 18.6569 4.02944 20 9 20C13.9706 20 18 18.6569 18 17C18 15.9519 16.3876 15.0294 13.9446 14.4929C13.8031 14.6501 13.6601 14.8027 13.5161 14.9502C12.8438 15.6393 12.1214 16.2485 11.4009 16.6959C10.7141 17.1224 9.87298 17.5 9 17.5C8.12701 17.5 7.28586 17.1224 6.59907 16.6959C5.87856 16.2485 5.15617 15.6393 4.48387 14.9502C4.33993 14.8027 4.19692 14.6501 4.05541 14.4929Z" fill="#E82C71"></path></svg></div>`);
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon/Location.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main;
export {
  __nuxt_component_3 as _
};
//# sourceMappingURL=Location-b1480ac0.js.map
