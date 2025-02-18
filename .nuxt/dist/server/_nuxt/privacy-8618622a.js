import { u as useI18n } from "../server.mjs";
import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "devalue";
import "defu";
import "klona";
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
import "ohash";
const _sfc_main = {
  __name: "privacy",
  __ssrInlineRender: true,
  setup(__props) {
    const { tm } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container my-5 mx-auto px-4 md:px-8" }, _attrs))}><div class="mt-5"><div class="text-3xl text-black font-bold">${ssrInterpolate(_ctx.$t("privacy.title"))}</div><div class="text-base leading-normal mt-2">${ssrInterpolate(_ctx.$t("privacy.description"))}</div></div><!--[-->`);
      ssrRenderList(unref(tm)("privacy.list"), (item) => {
        _push(`<div class="mt-5"><div class="text-3xl text-black font-bold">${ssrInterpolate(item.title)}</div><div class="text-base leading-normal mt-2">${ssrInterpolate(item.description)}</div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=privacy-8618622a.js.map
