import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { useScrollLock } from '@vueuse/core';
import { useSSRContext } from 'vue';

function numberWithSpaces(num, isPrice = true) {
  if (!isPrice) {
    const regex = /(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/;
    const formattedNumber = num.replace(regex, "$1 ($2) $3-$4-$5");
    return formattedNumber;
  } else if (num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  } else
    return;
}
const _sfc_main = {
  __name: "Modal",
  __ssrInlineRender: true,
  props: ["isOpen"],
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const el = document.querySelector("body");
    const isLocked = useScrollLock(el);
    isLocked.value = true;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="bg-darkBlue bg-opacity-70 inset-0 fixed z-[98]"></div>`);
      ssrRenderSlot(_ctx.$slots, "body", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/Modal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;

export { __nuxt_component_0 as _, numberWithSpaces as n };
//# sourceMappingURL=Modal-c91268d9.mjs.map
