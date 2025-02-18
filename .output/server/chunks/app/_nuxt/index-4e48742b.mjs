import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { u as useI18n, j as useRoute, i as useMyFetch, w as useCount, n as useSort, v as navigateTo, o as useSelectedSort, _ as _export_sfc, p as useFilters, a as useState, q as __nuxt_component_1$2, r as __nuxt_component_11, s as useFetch, c as createError, b as __nuxt_component_2$2, t as useRuntimeConfig } from '../server.mjs';
import { ref, withAsyncContext, watch, mergeProps, unref, useSSRContext, resolveDirective, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode, computed, isRef, createCommentVNode, reactive } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrGetDirectiveProps, ssrRenderTeleport } from 'vue/server-renderer';
import { _ as _imports_0$2 } from './tick-12729be4.mjs';
import { useWindowScroll, useScroll, useScrollLock, useSessionStorage, StorageSerializers } from '@vueuse/core';
import { _ as __nuxt_component_8, a as __nuxt_component_7 } from './SearchInput-31186868.mjs';
import { b as _imports_0$3, _ as _imports_2, a as __unimport_usePrettyDistance, c as __nuxt_component_1$1$1, d as __nuxt_component_1$3 } from './clock-8f2938ae.mjs';
import { _ as __nuxt_component_3$2 } from './Location-b1480ac0.mjs';
import { n as numberWithSpaces, _ as __nuxt_component_0$2 } from './Modal-c91268d9.mjs';
import Flicking from '@egjs/vue3-flicking';
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
import 'vue-router';
import 'is-https';
import 'click-outside-vue3';
import 'vue-recaptcha-v3';

const _sfc_main$9 = {
  __name: "DropdownSort",
  __ssrInlineRender: true,
  setup(__props) {
    const options = useSort();
    const selected = useSelectedSort();
    const show = ref(false);
    const { y } = useWindowScroll();
    watch(() => y.value, () => {
      show.value = false;
    });
    const onClickOutside = () => show.value = false;
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_click_outside = resolveDirective("click-outside");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "select-none relative" }, _attrs, ssrGetDirectiveProps(_ctx, _directive_click_outside, onClickOutside)))} data-v-8004b38f><div class="px-4 py-3 flex gap-1 items-center h-10 bg-white hover:bg-[#E5E9F0] active:bg-[#CCD3E1] cursor-pointer rounded-lg w-fit" data-v-8004b38f><span class="text-sm text-darkBlue" data-v-8004b38f>${ssrInterpolate(_ctx.$t(unref(options)[unref(selected)].name))}</span><div class="${ssrRenderClass([{ "-rotate-180": unref(show) }, "w-[18px] h-[18px] flex-center transition-200"])}" data-v-8004b38f><svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none" data-v-8004b38f><path fill-rule="evenodd" clip-rule="evenodd" d="M0.810782 1.14863C1.00485 0.906045 1.35883 0.866714 1.60141 1.06078L5.00002 3.77967L8.39863 1.06078C8.64122 0.866714 8.99519 0.906045 9.18926 1.14863C9.38333 1.39121 9.344 1.74519 9.10141 1.93926L5.35141 4.93926C5.14598 5.10361 4.85407 5.10361 4.64863 4.93926L0.89863 1.93926C0.656045 1.74519 0.616714 1.39121 0.810782 1.14863Z" fill="#002168" fill-opacity="0.4" data-v-8004b38f></path></svg></div></div>`);
      if (unref(show)) {
        _push(`<div class="absolute top-[calc(100%+4px)] left-0 z-[1] flex flex-col bg-white border border-dividers rounded-lg dropdown-shadow w-[189px]" data-v-8004b38f><!--[-->`);
        ssrRenderList(unref(options), (option, index) => {
          _push(`<div class="${ssrRenderClass([{ "border-b border-dividers": index != unref(options).length - 1, "selected": index == unref(selected) }, "group cursor-pointer bg-white rounded-lg"])}" data-v-8004b38f><div class="h-12 flex-y-center justify-between px-4 rounded-lg group-hover:bg-darkBlue group-hover:bg-opacity-10 active:bg-darkBlue active:bg-opacity-20" data-v-8004b38f><p class="text-sm text-darkBlue group-[.selected]:font-bold" data-v-8004b38f>${ssrInterpolate(_ctx.$t(option.name))}</p>`);
          if (index == unref(selected)) {
            _push(`<img${ssrRenderAttr("src", _imports_0$2)} alt="tick" data-v-8004b38f>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Base/DropdownSort.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-8004b38f"]]);
const _imports_0$1 = "" + buildAssetsURL("unselect.95e0fbb1.svg");
const _sfc_main$8 = {
  __name: "FilterCard",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useFilters();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-y-center gap-x-4 gap-y-2 flex-wrap" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Base/FilterCard.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1$1 = _sfc_main$8;
const _imports_1 = "" + buildAssetsURL("tooltip-arrow.83bdff12.svg");
const _sfc_main$7 = {
  __name: "Doctor",
  __ssrInlineRender: true,
  props: ["doctor"],
  setup(__props) {
    var _a, _b, _c, _d, _e;
    const { t } = useI18n();
    const props = __props;
    const flicking = ref(null);
    const today = /* @__PURE__ */ new Date();
    function getDateInfo(offset) {
      var _a2;
      const targetDate = /* @__PURE__ */ new Date();
      targetDate.setDate(today.getDate() + offset);
      var weekdayName = null;
      var availHours = [];
      switch (offset) {
        case 0:
          weekdayName = t(`days.today`);
          break;
        case 1:
          weekdayName = t(`days.tomorrow`);
          break;
        default:
          weekdayName = t(`weekdaysShort[${targetDate.getDay()}]`);
          break;
      }
      (_a2 = props.doctor.schedule) == null ? void 0 : _a2.forEach((el) => {
        const date = new Date(el.date);
        if (date.getDate() !== targetDate.getDate())
          return;
        availHours = el.time;
      });
      return {
        date: targetDate.toISOString().split("T")[0],
        weekday: weekdayName,
        exactly_time: availHours,
        day: targetDate.getDate()
      };
    }
    const schedule = ref([getDateInfo(0), getDateInfo(1), getDateInfo(2)]);
    const numberOfFreeDaysThree = ref(0);
    const selectedDay = ref(null);
    const isToggle = ref(false);
    schedule.value.map((item, index) => {
      var _a2;
      if ((_a2 = item.exactly_time) == null ? void 0 : _a2.length) {
        numberOfFreeDaysThree.value++;
        if (selectedDay.value == null)
          selectedDay.value = index;
      }
    });
    const numberOfFreeDays = ref(0);
    const firstFreeDay = ref(null);
    (_a = props.doctor.schedule) == null ? void 0 : _a.map((item) => {
      var _a2;
      if ((_a2 = item.time) == null ? void 0 : _a2.length) {
        numberOfFreeDays.value++;
        if (firstFreeDay.value == null) {
          const date = new Date(item.date);
          firstFreeDay.value = t(`months.${date.getMonth()}`, {
            day: date.getDate()
          });
        }
      }
    });
    watch(selectedDay, () => {
      handleSelected();
      updateSlicedTimes();
    });
    function handleSelected() {
      if (flicking.value) {
        flicking.value.moveTo(0, 1e3);
      }
      isToggle.value = false;
      var widthOfNav = 0;
      var leftOfNav = 0;
      setTimeout(() => {
        const parent = document.getElementById(`doctor${props.doctor.id}`);
        if (!parent)
          return;
        const el = parent.querySelector("#block");
        const activeEl = parent.getElementsByClassName("group/day selected")[0];
        if (!activeEl || !el)
          return;
        widthOfNav = activeEl.offsetWidth;
        leftOfNav = activeEl.offsetLeft;
        el.style.width = `${widthOfNav}px`;
        el.style.left = `${leftOfNav}px`;
      }, 1);
    }
    const tooltip = ref(false);
    function hideTooltip() {
      setTimeout(() => {
        tooltip.value = false;
      }, 1);
    }
    const options = { align: "prev", bound: true, moveType: "freeScroll" };
    const selectedDayQuery = useState("useSelectedDayQuery", () => null);
    const selectedHourQuery = useState("useSelectedHourQuery", () => null);
    const selectAppointment = (hour) => {
      selectedDayQuery.value = schedule.value[selectedDay.value].date;
      selectedHourQuery.value = hour;
    };
    const slicedTimes = ref(
      ((_c = (_b = schedule.value[selectedDay.value]) == null ? void 0 : _b.exactly_time) == null ? void 0 : _c.length) > 10 ? schedule.value[selectedDay.value].exactly_time.slice(0, 9) : (_d = schedule.value[selectedDay.value]) == null ? void 0 : _d.exactly_time
    );
    const count = ref((_e = slicedTimes.value) == null ? void 0 : _e.length);
    const dayChanging = ref(false);
    function updateSlicedTimes() {
      var _a2, _b2, _c2, _d2;
      dayChanging.value = true;
      slicedTimes.value = ((_b2 = (_a2 = schedule.value[selectedDay.value]) == null ? void 0 : _a2.exactly_time) == null ? void 0 : _b2.length) > 10 ? schedule.value[selectedDay.value].exactly_time.slice(0, 9) : (_c2 = schedule.value[selectedDay.value]) == null ? void 0 : _c2.exactly_time;
      count.value = (_d2 = slicedTimes.value) == null ? void 0 : _d2.length;
    }
    const popWithDelay = () => {
      if (count.value > 9) {
        count.value--;
        slicedTimes.value.pop();
        setTimeout(popWithDelay, 10);
      }
    };
    const pushWithDelay = () => {
      if (count.value < schedule.value[selectedDay.value].exactly_time.length) {
        count.value++;
        slicedTimes.value.push(
          schedule.value[selectedDay.value].exactly_time[count.value - 1]
        );
        setTimeout(pushWithDelay, 10);
      }
    };
    watch(isToggle, (newVal) => {
      if (newVal)
        pushWithDelay();
      else if (!newVal && !dayChanging.value)
        popWithDelay();
      dayChanging.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2;
      const _component_NuxtLinkLocale = __nuxt_component_1$2;
      const _component_IconRating = __nuxt_component_1$1$1;
      const _component_IconLocation = __nuxt_component_3$2;
      const _directive_click_outside = resolveDirective("click-outside");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "bg-white rounded-2xl p-2 flex flex-col max-[512px]:max-w-[calc(100vw-32px)] md:w-[804px] w-full transition-shadow duration-300 card-shadow min-w-[330px] relative",
        id: `doctor${__props.doctor.id}`
      }, _attrs))} data-v-f78ce196>`);
      _push(ssrRenderComponent(_component_NuxtLinkLocale, {
        to: `/doctor/${__props.doctor.id}`,
        class: "absolute top-0 left-0 w-full h-full"
      }, null, _parent));
      _push(`<div class="flex flex-col md:flex-row" data-v-f78ce196><div class="flex flex-col md:w-1/2" data-v-f78ce196><div class="flex gap-4 p-2 pb-0" data-v-f78ce196><div class="border border-dividers rounded-[9px] relative shrink-0 h-fit pointer-events-none" data-v-f78ce196><img class="rounded-lg max-md:w-[100px] max-md:h-[125px]" width="110" height="138"${ssrRenderAttr("src", __props.doctor.avatar_300_375)} alt="avatar" data-v-f78ce196>`);
      if (__props.doctor.experience) {
        _push(`<div class="bg-red rounded-b-lg text-xs md:text-[15px] text-white text-center absolute bottom-0 left-0 w-full h-[18px] md:h-[26px] flex-center" data-v-f78ce196>${ssrInterpolate(_ctx.$t("experience", { year: __props.doctor.experience }))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col gap-3" data-v-f78ce196><div class="flex flex-col gap-2" data-v-f78ce196><p class="text-base md:text-[18px] text-darkBlue font-bold leading-normal" data-v-f78ce196>${ssrInterpolate(__props.doctor.full_name)}</p><div class="flex flex-col gap-0.5" data-v-f78ce196>`);
      if (__props.doctor.specialties) {
        _push(`<div class="flex gap-1 items-center flex-wrap" data-v-f78ce196><!--[-->`);
        ssrRenderList(__props.doctor.specialties.slice(0, 3), (item, index) => {
          _push(`<span class="text-xs md:text-[14px] font-bold leading-normal text-blue flex gap-1 items-center" data-v-f78ce196>`);
          if (index != 0) {
            _push(`<svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none" data-v-f78ce196><circle cx="1" cy="1" r="1" fill="#1D7ED8" data-v-f78ce196></circle></svg>`);
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
        _push(`<div class="text-xs md:text-[14px] leading-normal text-secondary" data-v-f78ce196>${ssrInterpolate(__props.doctor.degree.name)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="flex gap-2 items-center flex-wrap" data-v-f78ce196><div class="flex items-center gap-1" data-v-f78ce196>`);
      _push(ssrRenderComponent(_component_IconRating, {
        rating: __props.doctor.average_rating
      }, null, _parent));
      _push(`<div class="px-1 py-0.5 rounded bg-[#FEF9EB] text-xs md:text-[14px] leading-normal font-bold text-yellow" data-v-f78ce196>${ssrInterpolate(__props.doctor.average_rating.toFixed(1))}</div></div><div class="text-xs md:text-[14px] leading-normal text-red" data-v-f78ce196>${ssrInterpolate(_ctx.$t("ratingsCount", { count: __props.doctor.count_of_ratings }))}</div></div><div class="max-md:hidden" data-v-f78ce196><div class="flex flex-col gap-1 p-3 bg-bg rounded-lg" data-v-f78ce196><p class="text-xs text-secondary leading-normal" data-v-f78ce196>${ssrInterpolate(_ctx.$t("price"))}</p><div class="flex-y-center gap-1" data-v-f78ce196><div class="text-sm font-bold text-darkBlue leading-normal" data-v-f78ce196>${ssrInterpolate(("numberWithSpaces" in _ctx ? _ctx.numberWithSpaces : unref(numberWithSpaces))(
        (_a2 = __props.doctor.discount_price) != null ? _a2 : __props.doctor.original_price
      ))} \u0441\u0443\u043C </div>`);
      if (__props.doctor.discount_price) {
        _push(`<div class="flex gap-1 items-center" data-v-f78ce196><div class="text-xs text-red line-through" data-v-f78ce196>${ssrInterpolate(("numberWithSpaces" in _ctx ? _ctx.numberWithSpaces : unref(numberWithSpaces))(__props.doctor.original_price))} \u0441\u0443\u043C </div><div class="bg-blue bg-opacity-10 rounded px-1 py-0.5 text-xs font-bold text-blue leading-normal" data-v-f78ce196> -${ssrInterpolate(Math.floor(
          100 - __props.doctor.discount_price * 100 / __props.doctor.original_price
        ))}% </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div><div class="px-2 pt-4 md:hidden" data-v-f78ce196><div class="flex flex-col gap-1 p-3 bg-bg rounded-lg" data-v-f78ce196><p class="text-xs text-secondary leading-normal" data-v-f78ce196>${ssrInterpolate(_ctx.$t("price"))}: </p><div class="flex-y-center gap-1" data-v-f78ce196><div class="text-sm font-bold text-darkBlue leading-normal" data-v-f78ce196>${ssrInterpolate(("numberWithSpaces" in _ctx ? _ctx.numberWithSpaces : unref(numberWithSpaces))(
        (_b2 = __props.doctor.discount_price) != null ? _b2 : __props.doctor.original_price
      ))} \u0441\u0443\u043C </div>`);
      if (__props.doctor.discount_price) {
        _push(`<div class="flex gap-1 items-center" data-v-f78ce196><div class="text-xs text-red line-through" data-v-f78ce196>${ssrInterpolate(("numberWithSpaces" in _ctx ? _ctx.numberWithSpaces : unref(numberWithSpaces))(__props.doctor.original_price))} \u0441\u0443\u043C </div><div class="bg-blue bg-opacity-10 rounded px-1 py-0.5 text-xs font-bold text-blue leading-normal" data-v-f78ce196> -${ssrInterpolate(Math.floor(
          100 - __props.doctor.discount_price * 100 / __props.doctor.original_price
        ))}% </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div><div class="flex flex-col md:w-1/2" data-v-f78ce196><div class="flex flex-col" data-v-f78ce196>`);
      if (unref(numberOfFreeDaysThree)) {
        _push(`<div class="px-2 py-4 flex flex-col gap-3 border-b border-dividers" data-v-f78ce196><div class="flex gap-1 items-center" data-v-f78ce196><img${ssrRenderAttr("src", _imports_0$3)} alt="clock" data-v-f78ce196><p class="text-xs md:text-[14px] leading-normal text-secondary" data-v-f78ce196>${ssrInterpolate(_ctx.$t("selectDate"))}</p></div><div class="p-0.5 flex bg-bg rounded-lg relative" data-v-f78ce196><div id="block" class="bg-white shadow-[0px_3px_1px_0px_rgba(0,0,0,0.04),0px_3px_8px_0px_rgba(0,0,0,0.12)] h-7 absolute top-0.5 rounded-lg transition-300" data-v-f78ce196></div><!--[-->`);
        ssrRenderList(unref(schedule), (item, index) => {
          _push(`<div class="${ssrRenderClass([{
            selected: unref(selectedDay) == index,
            disabled: !unref(schedule)[index].exactly_time.length
          }, "group/day px-2 py-1.5 h-7 relative w-1/3 flex justify-center items-center cursor-pointer"])}" data-v-f78ce196>`);
          if (unref(selectedDay) == 0 && index == 1) {
            _push(`<div class="w-[0.65px] h-5 rounded-[0.5px] bg-dividers absolute right-[1.3px] top-1" data-v-f78ce196></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<span class="text-xs text-darkBlue leading-5 group-[.selected]/day:font-bold group-[.disabled]/day:text-secondary transition-300" data-v-f78ce196>${ssrInterpolate(item.weekday)}, ${ssrInterpolate(item.day)}</span>`);
          if (unref(selectedDay) == 2 && index == 0) {
            _push(`<div class="w-[0.65px] h-5 rounded-[0.5px] bg-dividers absolute right-[1.3px] top-1" data-v-f78ce196></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--><div${ssrRenderAttrs(mergeProps({
          id: "tooltip",
          class: "absolute bottom-[calc(100%+6px)] transition-300 w-fit",
          style: `opacity: ${unref(tooltip) ? 1 : 0}`
        }, ssrGetDirectiveProps(_ctx, _directive_click_outside, hideTooltip)))} data-v-f78ce196><div class="relative p-3 rounded-[10px] bg-darkBlue bg-opacity-80 text-xs text-white shadow-[0px_18px_88px_-4px_rgba(24,39,75,0.14),_0px_8px_28px_-6px_rgba(24,39,75,0.12)]" data-v-f78ce196>${ssrInterpolate(_ctx.$t("allbusy"))}</div><img class="absolute top-full left-1/2 -translate-x-1/2" width="13.6" height="6"${ssrRenderAttr("src", _imports_1)} alt="arrow" data-v-f78ce196></div></div>`);
        _push(ssrRenderComponent(unref(Flicking), {
          class: "-mx-4 px-4 md:hidden hours !w-auto",
          options,
          ref_key: "flicking",
          ref: flicking
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(schedule)[unref(selectedDay)].exactly_time, (item, index) => {
                _push2(ssrRenderComponent(_component_NuxtLinkLocale, {
                  to: `/doctor/${__props.doctor.id}`,
                  draggable: "false",
                  class: "mr-2 rounded-lg bg-blue hover:bg-[#176BC2] active:bg-[#176BC2]",
                  key: item.id,
                  onClick: ($event) => selectAppointment(index)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a22, _b22;
                    if (_push3) {
                      _push3(`<div class="flex-center h-8 w-[60px] text-sm text-white" data-v-f78ce196${_scopeId2}>${ssrInterpolate((_a22 = item.exactly_time) == null ? void 0 : _a22.split(":").slice(0, 2).join(":"))}</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex-center h-8 w-[60px] text-sm text-white" }, toDisplayString((_b22 = item.exactly_time) == null ? void 0 : _b22.split(":").slice(0, 2).join(":")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(schedule)[unref(selectedDay)].exactly_time, (item, index) => {
                  return openBlock(), createBlock(_component_NuxtLinkLocale, {
                    to: `/doctor/${__props.doctor.id}`,
                    draggable: "false",
                    class: "mr-2 rounded-lg bg-blue hover:bg-[#176BC2] active:bg-[#176BC2]",
                    key: item.id,
                    onClick: ($event) => selectAppointment(index)
                  }, {
                    default: withCtx(() => {
                      var _a22;
                      return [
                        createVNode("div", { class: "flex-center h-8 w-[60px] text-sm text-white" }, toDisplayString((_a22 = item.exactly_time) == null ? void 0 : _a22.split(":").slice(0, 2).join(":")), 1)
                      ];
                    }),
                    _: 2
                  }, 1032, ["to", "onClick"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="flex flex-wrap gap-2 max-md:hidden transition-300 select-none overflow-y-hidden" data-v-f78ce196><!--[-->`);
        ssrRenderList(unref(slicedTimes), (item, index) => {
          _push(ssrRenderComponent(_component_NuxtLinkLocale, {
            class: "hour rounded-lg bg-blue flex-center w-[60px] h-[32px] text-sm text-white transition-300 z-0",
            to: `/doctor/${__props.doctor.id}`,
            key: item.id,
            onClick: ($event) => selectAppointment(index)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a22, _b22;
              if (_push2) {
                _push2(`${ssrInterpolate((_a22 = item.exactly_time) == null ? void 0 : _a22.split(":").slice(0, 2).join(":"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString((_b22 = item.exactly_time) == null ? void 0 : _b22.split(":").slice(0, 2).join(":")), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]-->`);
        if (unref(schedule)[unref(selectedDay)].exactly_time.length > 10) {
          _push(`<div class="hour group rounded-lg border border-blue bg-white text-darkBlue hover:text-white text-sm flex-center w-[60px] h-[32px] transition-300 cursor-pointer z-0" data-v-f78ce196><div class="${ssrRenderClass([{ "-rotate-180": unref(isToggle) }, "w-4 h-4 flex-center transition-300"])}" data-v-f78ce196><svg xmlns="http://www.w3.org/2000/svg" width="8" height="4" viewBox="0 0 8 4" fill="none" data-v-f78ce196><path fill-rule="evenodd" clip-rule="evenodd" d="M0.276332 0.354297C0.448837 0.138666 0.763483 0.103705 0.979114 0.27621L4.0001 2.693L7.02109 0.27621C7.23672 0.103705 7.55136 0.138666 7.72387 0.354297C7.89637 0.569928 7.86141 0.884574 7.64578 1.05708L4.31245 3.72375C4.12984 3.86983 3.87036 3.86983 3.68775 3.72375L0.354419 1.05708C0.138788 0.884574 0.103827 0.569928 0.276332 0.354297Z" fill="#002168" class="group-hover:fill-white transition-300" data-v-f78ce196></path></svg></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<div class="px-2 py-4 flex flex-col gap-2 border-b border-dividers" data-v-f78ce196><div class="flex gap-1 items-center" data-v-f78ce196><img${ssrRenderAttr("src", _imports_0$3)} alt="clock" data-v-f78ce196><div class="text-xs text-secondary" data-v-f78ce196>${ssrInterpolate(unref(firstFreeDay) ? _ctx.$t("firstFree[0]") : _ctx.$t("submitApplication[0]"))}</div></div>`);
        _push(ssrRenderComponent(_component_NuxtLinkLocale, {
          to: `/doctor/${__props.doctor.id}`,
          class: "bg-blue hover:bg-[#176BC2] active:bg-[#176BC2] cursor-pointer rounded-lg px-3 py-2 text-sm text-white w-fit z-0"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(firstFreeDay) ? _ctx.$t("firstFree[1]", { date: unref(firstFreeDay) }) : _ctx.$t("submitApplication[1]"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(firstFreeDay) ? _ctx.$t("firstFree[1]", { date: unref(firstFreeDay) }) : _ctx.$t("submitApplication[1]")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div><a${ssrRenderAttr("href", `geo:${__props.doctor.clinic.latitude},${__props.doctor.clinic.longitude}`)} class="flex-y-center justify-between py-4 px-2 hover:bg-[#E5E9F0] active:bg-[#CCD3E1] rounded-xl max-md:hidden z-0" data-v-f78ce196><div class="flex gap-1 items-center w-3/5" data-v-f78ce196>`);
      _push(ssrRenderComponent(_component_IconLocation, null, null, _parent));
      _push(`<div class="flex flex-col gap-1" data-v-f78ce196><div class="text-xs text-secondary line-clamp-1" data-v-f78ce196>${ssrInterpolate(__props.doctor.clinic.address)}</div><div class="text-sm text-darkBlue font-bold" data-v-f78ce196>${ssrInterpolate(__props.doctor.clinic.name)}</div></div></div><div class="flex gap-1 items-center" data-v-f78ce196><div class="w-[18px] h-[18px] flex items-center justify-center" data-v-f78ce196><img${ssrRenderAttr("src", _imports_2)} alt="metro" data-v-f78ce196></div><div class="flex flex-col gap-0.5" data-v-f78ce196><div class="text-xs text-secondary" data-v-f78ce196>${ssrInterpolate(("usePrettyDistance" in _ctx ? _ctx.usePrettyDistance : unref(__unimport_usePrettyDistance))(__props.doctor.clinic.distance))}</div><div class="text-sm text-darkBlue font-bold leading-4" data-v-f78ce196>${ssrInterpolate(__props.doctor.clinic.metro.name)}</div></div></div></a></div><a${ssrRenderAttr("href", `geo:${__props.doctor.clinic.latitude},${__props.doctor.clinic.longitude}`)} class="flex gap-8 items-center py-4 px-2 hover:bg-[#E5E9F0] active:bg-[#CCD3E1] rounded-xl md:hidden z-0" data-v-f78ce196><div class="flex gap-1 items-center w-3/5" data-v-f78ce196>`);
      _push(ssrRenderComponent(_component_IconLocation, null, null, _parent));
      _push(`<div class="flex flex-col gap-1" data-v-f78ce196><div class="text-xs text-secondary line-clamp-1" data-v-f78ce196>${ssrInterpolate(__props.doctor.clinic.address)}</div><div class="text-sm text-darkBlue font-bold" data-v-f78ce196>${ssrInterpolate(__props.doctor.clinic.name)}</div></div></div><div class="flex gap-1 items-center" data-v-f78ce196><div class="w-[18px] h-[18px] flex items-center justify-center" data-v-f78ce196><img${ssrRenderAttr("src", _imports_2)} alt="metro" data-v-f78ce196></div><div class="flex flex-col gap-0.5" data-v-f78ce196><div class="text-xs text-secondary" data-v-f78ce196>${ssrInterpolate(("usePrettyDistance" in _ctx ? _ctx.usePrettyDistance : unref(__unimport_usePrettyDistance))(__props.doctor.clinic.distance))}</div><div class="text-sm text-darkBlue font-bold leading-4" data-v-f78ce196>${ssrInterpolate(__props.doctor.clinic.metro.name)}</div></div></div></a></div></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/Doctor.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-f78ce196"]]);
const _sfc_main$6 = {
  __name: "Pagination",
  __ssrInlineRender: true,
  props: {
    pagination: {
      required: true,
      type: Object
    }
  },
  setup(__props) {
    const route = useRoute();
    const { page } = route.query;
    const props = __props;
    const current_page = ref(page != null ? page : 1);
    watch(
      () => route.query,
      (val) => {
        var _a;
        return current_page.value = +((_a = val.page) != null ? _a : 1);
      }
    );
    const nextPageQuery = computed(() => {
      if (props.pagination.next)
        return { query: { page: current_page.value + 1 } };
      else
        return null;
    });
    const prevPageQuery = computed(() => {
      if (props.pagination.previous) {
        if (current_page == 2)
          return { query: {} };
        else
          return { query: { page: current_page.value - 1 } };
      } else
        return null;
    });
    const pageNumberQuery = (index) => {
      if (index === current_page)
        return null;
      else {
        if (index == 1)
          return { query: {} };
        else
          return { query: { page: index } };
      }
    };
    const getAvailablePages = computed(
      () => Math.ceil(props.pagination.count / 15)
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_11;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-center gap-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(prevPageQuery),
        class: [
          "group w-6 h-6 flex-center rounded-lg transition-100",
          !__props.pagination.previous ? "is-disabled" : "hover:bg-darkBlue active:bg-darkBlue !bg-opacity-10"
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none"${_scopeId}><path fill-rule="evenodd" clip-rule="evenodd" d="M5.8593 0.414376C6.18275 0.673133 6.23519 1.1451 5.97643 1.46855L2.35125 6.00003L5.97643 10.5315C6.23519 10.855 6.18275 11.3269 5.8593 11.5857C5.53586 11.8444 5.06389 11.792 4.80513 11.4685L0.805129 6.46855C0.585998 6.19464 0.585998 5.80542 0.805129 5.53151L4.80513 0.531506C5.06389 0.20806 5.53586 0.155619 5.8593 0.414376Z" class="group-[.is-disabled]:!fill-secondary group-[.is-disabled]:!opacity-40 fill-darkBlue group-active:fill-blue transition-100"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "7",
                height: "12",
                viewBox: "0 0 7 12",
                fill: "none"
              }, [
                createVNode("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M5.8593 0.414376C6.18275 0.673133 6.23519 1.1451 5.97643 1.46855L2.35125 6.00003L5.97643 10.5315C6.23519 10.855 6.18275 11.3269 5.8593 11.5857C5.53586 11.8444 5.06389 11.792 4.80513 11.4685L0.805129 6.46855C0.585998 6.19464 0.585998 5.80542 0.805129 5.53151L4.80513 0.531506C5.06389 0.20806 5.53586 0.155619 5.8593 0.414376Z",
                  class: "group-[.is-disabled]:!fill-secondary group-[.is-disabled]:!opacity-40 fill-darkBlue group-active:fill-blue transition-100"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex-center gap-2.5"><!--[-->`);
      ssrRenderList(unref(getAvailablePages), (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: pageNumberQuery(item),
          class: ["w-6 h-6 flex-center rounded-lg text-sm text-darkBlue leading-normal hover:bg-darkBlue hover:bg-opacity-10 select-none", {
            "!bg-blue !text-white": item == unref(current_page)
          }],
          key: item
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(nextPageQuery),
        class: [
          "group w-6 h-6 flex-center rounded-lg transition-100",
          !__props.pagination.next ? "is-disabled" : "hover:bg-darkBlue active:bg-darkBlue !bg-opacity-10"
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="rotate-180" xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none"${_scopeId}><path fill-rule="evenodd" clip-rule="evenodd" d="M5.8593 0.414376C6.18275 0.673133 6.23519 1.1451 5.97643 1.46855L2.35125 6.00003L5.97643 10.5315C6.23519 10.855 6.18275 11.3269 5.8593 11.5857C5.53586 11.8444 5.06389 11.792 4.80513 11.4685L0.805129 6.46855C0.585998 6.19464 0.585998 5.80542 0.805129 5.53151L4.80513 0.531506C5.06389 0.20806 5.53586 0.155619 5.8593 0.414376Z" class="group-[.is-disabled]:!fill-secondary group-[.is-disabled]:!opacity-40 fill-darkBlue group-active:fill-blue transition-100"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "rotate-180",
                xmlns: "http://www.w3.org/2000/svg",
                width: "7",
                height: "12",
                viewBox: "0 0 7 12",
                fill: "none"
              }, [
                createVNode("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M5.8593 0.414376C6.18275 0.673133 6.23519 1.1451 5.97643 1.46855L2.35125 6.00003L5.97643 10.5315C6.23519 10.855 6.18275 11.3269 5.8593 11.5857C5.53586 11.8444 5.06389 11.792 4.80513 11.4685L0.805129 6.46855C0.585998 6.19464 0.585998 5.80542 0.805129 5.53151L4.80513 0.531506C5.06389 0.20806 5.53586 0.155619 5.8593 0.414376Z",
                  class: "group-[.is-disabled]:!fill-secondary group-[.is-disabled]:!opacity-40 fill-darkBlue group-active:fill-blue transition-100"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Base/Pagination.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_3$1 = _sfc_main$6;
const _sfc_main$5 = {
  __name: "Gender",
  __ssrInlineRender: true,
  props: {
    selected: {
      required: true,
      type: Number
    }
  },
  setup(__props) {
    const props = __props;
    const genders = [
      {
        id: 2,
        name: "gender[0]"
      },
      {
        id: 1,
        name: "gender[1]"
      }
    ];
    watch(() => props.selected, () => handleSelected());
    function handleSelected() {
      var widthOfNav = 0;
      var leftOfNav = 0;
      setTimeout(() => {
        const el = document.querySelectorAll(".gender-filter");
        const activeEl = document.querySelectorAll(".selected-gender");
        if (!activeEl.length || !el.length)
          return;
        el.forEach((item) => {
          activeEl.forEach((active) => {
            if (active.offsetWidth) {
              widthOfNav = active.offsetWidth;
              leftOfNav = active.offsetLeft;
              item.style.width = `${widthOfNav}px`;
              item.style.left = `${leftOfNav}px`;
            }
          });
        });
      }, 1);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-2" }, _attrs))} data-v-d0ca14e2><div class="text-xs text-secondary" data-v-d0ca14e2>${ssrInterpolate(_ctx.$t("genderTitle"))}</div><div class="p-0.5 bg-bg rounded-lg" data-v-d0ca14e2><div class="relative flex" data-v-d0ca14e2><div class="gender-filter bg-white h-7 gender-shadow rounded-lg absolute top-0 transition-300" data-v-d0ca14e2></div><div class="${ssrRenderClass([{ "font-bold selected-gender": __props.selected == 0 }, "px-2 py-1.5 h-7 relative w-1/3 flex justify-center items-center cursor-pointer text-xs text-darkBlue leading-5 transition-300"])}" data-v-d0ca14e2>${ssrInterpolate(_ctx.$t("nomatter"))} `);
      if (__props.selected == 1) {
        _push(`<div class="w-[0.65px] h-5 rounded-[0.5px] bg-dividers absolute right-[1.3px] top-1" data-v-d0ca14e2></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><!--[-->`);
      ssrRenderList(genders, (item) => {
        _push(`<div class="${ssrRenderClass([{ "font-bold selected-gender": __props.selected == item.id }, "px-2 py-1.5 h-7 relative w-1/3 flex justify-center items-center cursor-pointer text-xs text-darkBlue leading-5 transition-300"])}" data-v-d0ca14e2>`);
        if (__props.selected == 0 && item.id == 2) {
          _push(`<div class="w-[0.65px] h-5 rounded-[0.5px] bg-dividers absolute right-[1.3px] top-1" data-v-d0ca14e2></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(` ${ssrInterpolate(_ctx.$t(item.name))}</div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Filter/Gender.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-d0ca14e2"]]);
const useFetchWithCache = async (url, opts) => {
  const config = /* @__PURE__ */ useRuntimeConfig();
  const today = (/* @__PURE__ */ new Date()).getDate();
  const cache = useSessionStorage(`${url}?date=${today}`, null, {
    serializer: StorageSerializers.object
  });
  if (!cache.value) {
    const { data, error } = await useFetch(url, {
      baseURL: config.public.baseURL,
      ...opts
    }, "$KATLrLtZxC");
    if (error.value) {
      throw createError({
        ...error.value,
        statusMessage: `Could not fetch from ${url}`
      });
    }
    cache.value = data.value;
  }
  return cache;
};
const _sfc_main$4 = {
  __name: "Specialties",
  __ssrInlineRender: true,
  props: {
    selected: {
      required: true,
      type: Number
    },
    gender: {
      required: true,
      type: Number
    }
  },
  emits: ["onGenderChange", "onChange"],
  async setup(__props, { emit: __emit }) {
    var _a;
    let __temp, __restore;
    const { locale } = useI18n();
    const props = __props;
    const filters = useFilters();
    const emits = __emit;
    const onChange = (val) => {
      emits("onGenderChange", val);
    };
    const dataSpecialties = ([__temp, __restore] = withAsyncContext(() => useFetchWithCache(`${locale.value}/specialties/`)), __temp = await __temp, __restore(), __temp);
    const specialties = ref((_a = dataSpecialties.value) == null ? void 0 : _a.specialties);
    const selectedIndex = ref(props.selected ? "" : null);
    const filtered = ref(specialties.value);
    const isOpen = ref(false);
    const search = ref(null);
    const isNextLetter = (index) => {
      if (index == 0)
        return true;
      return specialties.value[index].name.charAt(0) !== specialties.value[index - 1].name.charAt(0);
    };
    watch(search, (val) => {
      filtered.value = [];
      specialties.value.map((item) => {
        if (item.name.toLowerCase().includes(val.toLowerCase())) {
          filtered.value.push(item);
        }
      });
    });
    watch(() => props.selected, (val) => {
      isOpen.value = false;
      if (val == 0) {
        selectedIndex.value = null;
        filters.value[0].value = null;
        return;
      }
      var temp = getIndex(val);
      if (temp) {
        selectedIndex.value = temp;
        filters.value[0].value = specialties.value[selectedIndex.value].name;
      }
    });
    watch(isOpen, (val) => {
      setTimeout(() => {
        document.querySelector("#specialties-search").querySelector("input").focus();
      }, 1);
      const el = document.querySelector(".fixed-filter");
      if (!el)
        return;
      const { y } = useScroll(el);
      const isLocked = useScrollLock(el);
      if (val) {
        y.value = 0;
        isLocked.value = true;
      } else {
        el.style.overflowY = "auto";
      }
    });
    function getIndex(id) {
      let val;
      specialties.value.map((item, index) => {
        if (item.id == id)
          val = index;
      });
      return val;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FilterGender = __nuxt_component_0;
      const _component_PageModal = __nuxt_component_0$2;
      const _component_BaseSearchInput = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-6cd0d78d><div class="flex flex-col gap-4" data-v-6cd0d78d><div class="flex flex-col gap-2" data-v-6cd0d78d><div class="text-xs text-secondary" data-v-6cd0d78d>${ssrInterpolate(_ctx.$t("specialtiesTitle"))}</div><div class="flex flex-wrap gap-2" data-v-6cd0d78d><div class="${ssrRenderClass([{ "text-white bg-blue hover:bg-blue": __props.selected == 0 }, "px-3 py-2 border border-blue hover:bg-[#E5E9F0] cursor-pointer rounded-lg line-clamp-1 text-sm text-darkBlue transition-100"])}" data-v-6cd0d78d>${ssrInterpolate(_ctx.$t("nomatter"))}</div>`);
      if (unref(specialties)) {
        _push(`<!--[-->`);
        ssrRenderList(unref(specialties).slice(0, 8), (item) => {
          _push(`<div class="${ssrRenderClass([{ "selected bg-blue text-white": __props.selected == item.id }, "px-3 py-2 border border-blue hover:bg-darkBlue hover:bg-opacity-10 active:bg-blue active:text-white cursor-pointer rounded-lg line-clamp-1 text-sm text-darkBlue transition-100 flex-y-center gap-1"])}" data-v-6cd0d78d>${ssrInterpolate(item.name)} `);
          if (__props.selected == item.id) {
            _push(`<img${ssrRenderAttr("src", _imports_0$1)} alt="uncheck" data-v-6cd0d78d>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (unref(selectedIndex) >= 8) {
        _push(`<div class="px-3 py-2 border border-blue cursor-pointer rounded-lg line-clamp-1 text-sm transition-100 text-white bg-blue hover:bg-blue flex-y-center gap-1" data-v-6cd0d78d>${ssrInterpolate(unref(specialties)[unref(selectedIndex)].name)} <img${ssrRenderAttr("src", _imports_0$1)} alt="uncheck" data-v-6cd0d78d></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="px-3 py-2 bg-bg hover:bg-[#DBE3F0] active:bg-[#DBE3F0] cursor-pointer rounded-lg line-clamp-1 text-sm text-darkBlue transition-100" data-v-6cd0d78d>\u0412\u0441\u0435 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438</div></div></div><hr class="border-t border-dividers" data-v-6cd0d78d>`);
      _push(ssrRenderComponent(_component_FilterGender, {
        selected: __props.gender,
        onOnChange: onChange
      }, null, _parent));
      _push(`</div>`);
      if (unref(isOpen)) {
        _push(ssrRenderComponent(_component_PageModal, {
          "is-open": unref(isOpen),
          onClose: ($event) => isOpen.value = false
        }, {
          body: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="fixed-center z-[100] max-w-[804px] w-full max-lg:h-full lg:max-h-[80%] bg-white p-4 rounded-2xl flex flex-col gap-4" data-v-6cd0d78d${_scopeId}><p class="text-darkBlue text-2xl font-bold leading-normal text-center" data-v-6cd0d78d${_scopeId}>\u0412\u0441\u0435 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438</p><div class="flex flex-col gap-4 overflow-hidden" data-v-6cd0d78d${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseSearchInput, {
                modelValue: unref(search),
                "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C",
                id: "specialties-search"
              }, null, _parent2, _scopeId));
              _push2(`<div class="flex flex-col gap-1 overflow-y-auto scrollbar-style" data-v-6cd0d78d${_scopeId}><p class="text-xs text-secondary" data-v-6cd0d78d${_scopeId}>\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C</p><div class="flex flex-col" data-v-6cd0d78d${_scopeId}><!--[-->`);
              ssrRenderList(unref(filtered), (item, index) => {
                _push2(`<div class="${ssrRenderClass([{ "bg-bg": item.id == __props.selected }, "flex-y-center gap-4 hover:bg-darkBlue hover:bg-opacity-10 active:bg-darkBlue active:bg-opacity-20 cursor-pointer rounded-2xl px-4"])}" data-v-6cd0d78d${_scopeId}><div class="flex-center w-6" data-v-6cd0d78d${_scopeId}>`);
                if (isNextLetter(index)) {
                  _push2(`<span class="rounded flex-center w-6 h-6 bg-bg text-base font-bold text-secondary leading-normal" data-v-6cd0d78d${_scopeId}>${ssrInterpolate(item.name[0])}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="py-4 flex-y-center justify-between border-b border-dividers w-full h-[50px]" data-v-6cd0d78d${_scopeId}><p class="text-sm text-darkBlue" data-v-6cd0d78d${_scopeId}>${ssrInterpolate(item.name)}</p>`);
                if (item.id == __props.selected) {
                  _push2(`<img${ssrRenderAttr("src", _imports_0$2)} alt="tick" data-v-6cd0d78d${_scopeId}>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div>`);
              });
              _push2(`<!--]--></div></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "fixed-center z-[100] max-w-[804px] w-full max-lg:h-full lg:max-h-[80%] bg-white p-4 rounded-2xl flex flex-col gap-4" }, [
                  createVNode("p", { class: "text-darkBlue text-2xl font-bold leading-normal text-center" }, "\u0412\u0441\u0435 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"),
                  createVNode("div", { class: "flex flex-col gap-4 overflow-hidden" }, [
                    createVNode(_component_BaseSearchInput, {
                      modelValue: unref(search),
                      "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                      placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C",
                      id: "specialties-search"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("div", { class: "flex flex-col gap-1 overflow-y-auto scrollbar-style" }, [
                      createVNode("p", { class: "text-xs text-secondary" }, "\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C"),
                      createVNode("div", { class: "flex flex-col" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(filtered), (item, index) => {
                          return openBlock(), createBlock("div", {
                            class: ["flex-y-center gap-4 hover:bg-darkBlue hover:bg-opacity-10 active:bg-darkBlue active:bg-opacity-20 cursor-pointer rounded-2xl px-4", { "bg-bg": item.id == __props.selected }],
                            key: item.key,
                            onClick: ($event) => _ctx.$emit("onChange", item.id)
                          }, [
                            createVNode("div", { class: "flex-center w-6" }, [
                              isNextLetter(index) ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "rounded flex-center w-6 h-6 bg-bg text-base font-bold text-secondary leading-normal"
                              }, toDisplayString(item.name[0]), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "py-4 flex-y-center justify-between border-b border-dividers w-full h-[50px]" }, [
                              createVNode("p", { class: "text-sm text-darkBlue" }, toDisplayString(item.name), 1),
                              item.id == __props.selected ? (openBlock(), createBlock("img", {
                                key: 0,
                                src: _imports_0$2,
                                alt: "tick"
                              })) : createCommentVNode("", true)
                            ])
                          ], 10, ["onClick"]);
                        }), 128))
                      ])
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Filter/Specialties.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-6cd0d78d"]]);
const _sfc_main$3 = {
  __name: "Date",
  __ssrInlineRender: true,
  props: {
    selected: { required: true }
  },
  emits: ["onChange"],
  setup(__props, { emit: __emit }) {
    const { t } = useI18n();
    const emit = __emit;
    const props = __props;
    const filters = useFilters();
    ref(props.selected);
    const isModalDateOpen = ref(false);
    const datePanels = ref([]);
    const dates = initDates(21);
    const filterDateIndex = ref(null);
    dates.map((date, index) => {
      if (date.date == props.selected)
        filterDateIndex.value = index;
    });
    function initDates(days) {
      let temp = [];
      for (let i = 0; i < days; i++) {
        temp.push(getDateInfo(i));
      }
      return temp;
    }
    function getDateInfo(offset) {
      const today = /* @__PURE__ */ new Date();
      const targetDate = /* @__PURE__ */ new Date();
      targetDate.setDate(today.getDate() + offset);
      var weekdayName = null;
      switch (offset) {
        case 0:
          weekdayName = t(`days.today`);
          break;
        case 1:
          weekdayName = t(`days.tomorrow`);
          break;
        default:
          weekdayName = t(`weekdays[${targetDate.getDay()}]`);
          break;
      }
      const date = targetDate.toISOString().split("T")[0];
      const text = `${weekdayName}, ${targetDate.getDate()}`;
      datePanels.value.push(text);
      return { date, text };
    }
    const tempDayIndex = ref(null);
    const onDayChange = (e) => {
      tempDayIndex.value = e.index;
    };
    const onSubmit = () => {
      isModalDateOpen.value = false;
      filterDateIndex.value = tempDayIndex.value;
      filters.value[1].value = dates[filterDateIndex.value].text;
      emit("onChange", dates[tempDayIndex.value].date);
    };
    watch(filterDateIndex, (val) => console.log(val));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageModal = __nuxt_component_0$2;
      const _component_BaseDatePicker = __nuxt_component_1$3;
      const _component_BaseButton = __nuxt_component_2$2;
      _push(`<!--[--><div class="flex flex-col gap-2"><div class="text-xs text-secondary">${ssrInterpolate(_ctx.$t("filter.date"))}</div><div class="flex flex-wrap gap-2"><div class="${ssrRenderClass([{ "text-white bg-blue hover:bg-blue": unref(filterDateIndex) == null }, "px-3 py-2 border border-blue hover:bg-[#E5E9F0] cursor-pointer rounded-lg line-clamp-1 text-sm text-darkBlue"])}">${ssrInterpolate(_ctx.$t("nomatter"))}</div><!--[-->`);
      ssrRenderList(unref(dates).slice(0, 4), (item, index) => {
        _push(`<div class="${ssrRenderClass([{ "text-white bg-blue hover:bg-blue": unref(filterDateIndex) == index }, "px-3 py-2 border border-blue hover:bg-[#E5E9F0] cursor-pointer rounded-lg line-clamp-1 text-sm text-darkBlue flex-y-center gap-1"])}">${ssrInterpolate(item.text)} `);
        if (unref(filterDateIndex) == index) {
          _push(`<img${ssrRenderAttr("src", _imports_0$1)} alt="uncheck">`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      if (unref(filterDateIndex) >= 4) {
        _push(`<div class="px-3 py-2 border border-blue cursor-pointer rounded-lg line-clamp-1 text-sm flex-y-center gap-1 text-white bg-blue hover:bg-blue">${ssrInterpolate(unref(dates)[unref(filterDateIndex)].text)} <img${ssrRenderAttr("src", _imports_0$1)} alt="uncheck"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="px-3 py-2 bg-bg hover:bg-[#DBE3F0] active:bg-[#DBE3F0] cursor-pointer rounded-lg line-clamp-1 text-sm text-darkBlue">${ssrInterpolate(_ctx.$t("alldates"))}</div></div></div>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(isModalDateOpen)) {
          _push2(ssrRenderComponent(_component_PageModal, {
            "is-open": unref(isModalDateOpen),
            onClose: ($event) => isModalDateOpen.value = false
          }, {
            body: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(`<div class="fixed-center z-[100] max-w-[668px] w-full max-lg:h-full lg:max-h-[80%] bg-white p-4 rounded-2xl flex flex-col gap-4 overflow-hidden"${_scopeId}><div class="text-2xl text-darkBlue font-bold text-center"${_scopeId}>${ssrInterpolate(_ctx.$t("filter.date"))}</div>`);
                _push3(ssrRenderComponent(_component_BaseDatePicker, {
                  class: "w-full",
                  uniqueID: "flicking-date",
                  panels: unref(datePanels),
                  onOnChange: onDayChange,
                  selected: unref(filterDateIndex)
                }, null, _parent2, _scopeId));
                _push3(ssrRenderComponent(_component_BaseButton, {
                  state: "primary",
                  onClick: onSubmit
                }, {
                  default: withCtx((_2, _push4, _parent3, _scopeId2) => {
                    if (_push4) {
                      _push4(`${ssrInterpolate(_ctx.$t("select"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("select")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push3(`</div>`);
              } else {
                return [
                  createVNode("div", { class: "fixed-center z-[100] max-w-[668px] w-full max-lg:h-full lg:max-h-[80%] bg-white p-4 rounded-2xl flex flex-col gap-4 overflow-hidden" }, [
                    createVNode("div", { class: "text-2xl text-darkBlue font-bold text-center" }, toDisplayString(_ctx.$t("filter.date")), 1),
                    createVNode(_component_BaseDatePicker, {
                      class: "w-full",
                      uniqueID: "flicking-date",
                      panels: unref(datePanels),
                      onOnChange: onDayChange,
                      selected: unref(filterDateIndex)
                    }, null, 8, ["panels", "selected"]),
                    createVNode(_component_BaseButton, {
                      state: "primary",
                      onClick: onSubmit
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("select")), 1)
                      ]),
                      _: 1
                    })
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Filter/Date.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "Metro",
  __ssrInlineRender: true,
  props: {
    selected: {
      required: true,
      type: Number
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const { locale } = useI18n();
    const props = __props;
    const filters = useFilters();
    const dataMetros = ([__temp, __restore] = withAsyncContext(() => useFetchWithCache(`${locale.value}/metropolitans/`)), __temp = await __temp, __restore(), __temp);
    const metros = ref(dataMetros.value);
    const filtered = ref(metros.value);
    const isOpen = ref(false);
    const search = ref(null);
    const selectedIndex = ref(null);
    const getSelectedIndex = () => {
      metros.value.map((item, index) => {
        if (item.id == props.selected)
          selectedIndex.value = index;
      });
      if (selectedIndex.value)
        filters.value[2].value = metros.value[selectedIndex.value].name;
    };
    getSelectedIndex();
    watch(() => props.selected, (val) => {
      isOpen.value = false;
      if (val == 0) {
        selectedIndex.value = null;
        filters.value[2].value = null;
        return;
      }
      getSelectedIndex();
    });
    watch(search, (val) => {
      filtered.value = [];
      metros.value.map((item) => {
        if (item.name.toLowerCase().includes(val.toLowerCase())) {
          filtered.value.push(item);
        }
      });
    });
    watch(isOpen, () => {
      setTimeout(() => {
        document.querySelector("#metro-search").querySelector("input").focus();
      }, 1);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageModal = __nuxt_component_0$2;
      const _component_BaseSearchInput = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-col gap-2"><div class="text-xs text-secondary">${ssrInterpolate(_ctx.$t("metroTitle"))}</div><div class="flex flex-wrap gap-2"><div class="${ssrRenderClass([{ "text-white bg-blue hover:bg-blue": __props.selected == 0 }, "px-3 py-2 border border-blue hover:bg-[#E5E9F0] cursor-pointer rounded-lg line-clamp-1 text-sm text-darkBlue transition-100"])}">${ssrInterpolate(_ctx.$t("nomatter"))}</div><!--[-->`);
      ssrRenderList(unref(metros).slice(0, 4), (item) => {
        _push(`<div class="${ssrRenderClass([{ "text-white bg-blue hover:bg-blue": __props.selected == item.id }, "px-3 py-2 border border-blue hover:bg-[#E5E9F0] cursor-pointer rounded-lg line-clamp-1 text-sm text-darkBlue transition-100 flex-y-center gap-1"])}">${ssrInterpolate(item.name)} `);
        if (__props.selected == item.id) {
          _push(`<img${ssrRenderAttr("src", _imports_0$1)} alt="uncheck">`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      if (unref(selectedIndex) >= 4) {
        _push(`<div class="px-3 py-2 border border-blue cursor-pointer rounded-lg line-clamp-1 text-sm transition-100 text-white bg-blue hover:bg-blue flex-y-center gap-1">${ssrInterpolate(unref(metros)[unref(selectedIndex)].name)} <img${ssrRenderAttr("src", _imports_0$1)} alt="uncheck"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="px-3 py-2 bg-bg hover:bg-[#DBE3F0] active:bg-[#DBE3F0] cursor-pointer rounded-lg line-clamp-1 text-sm text-darkBlue">${ssrInterpolate(_ctx.$t("allMetro"))}</div></div></div>`);
      if (unref(isOpen)) {
        _push(ssrRenderComponent(_component_PageModal, {
          "is-open": unref(isOpen),
          onClose: ($event) => isOpen.value = false
        }, {
          body: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="fixed-center z-[100] max-w-[804px] w-full max-lg:h-full lg:max-h-[80%] bg-white p-4 rounded-2xl flex flex-col gap-4"${_scopeId}><p class="text-darkBlue text-2xl font-bold leading-normal text-center"${_scopeId}>${ssrInterpolate(_ctx.$t("metroTitle"))}</p>`);
              _push2(ssrRenderComponent(_component_BaseSearchInput, {
                modelValue: unref(search),
                "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u043D\u0446\u0438\u0438",
                id: "metro-search"
              }, null, _parent2, _scopeId));
              _push2(`<div class="overflow-y-auto scrollbar-style"${_scopeId}><div class="flex flex-col"${_scopeId}><!--[-->`);
              ssrRenderList(unref(filtered), (item) => {
                _push2(`<div class="${ssrRenderClass([{ "group bg-bg hover:bg-bg selected": __props.selected == item.id }, "hover:bg-[#E5E9F0] text-sm text-darkBlue flex justify-between items-center h-[50px] cursor-pointer px-4 rounded-lg"])}"${_scopeId}>${ssrInterpolate(item.name)} <img class="hidden group-[.selected]:block"${ssrRenderAttr("src", _imports_0$2)} alt="tick"${_scopeId}></div>`);
              });
              _push2(`<!--]--></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "fixed-center z-[100] max-w-[804px] w-full max-lg:h-full lg:max-h-[80%] bg-white p-4 rounded-2xl flex flex-col gap-4" }, [
                  createVNode("p", { class: "text-darkBlue text-2xl font-bold leading-normal text-center" }, toDisplayString(_ctx.$t("metroTitle")), 1),
                  createVNode(_component_BaseSearchInput, {
                    modelValue: unref(search),
                    "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u043D\u0446\u0438\u0438",
                    id: "metro-search"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode("div", { class: "overflow-y-auto scrollbar-style" }, [
                    createVNode("div", { class: "flex flex-col" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(filtered), (item) => {
                        return openBlock(), createBlock("div", {
                          class: ["hover:bg-[#E5E9F0] text-sm text-darkBlue flex justify-between items-center h-[50px] cursor-pointer px-4 rounded-lg", { "group bg-bg hover:bg-bg selected": __props.selected == item.id }],
                          key: item.key,
                          onClick: ($event) => _ctx.$emit("onChange", item.id)
                        }, [
                          createTextVNode(toDisplayString(item.name) + " ", 1),
                          createVNode("img", {
                            class: "hidden group-[.selected]:block",
                            src: _imports_0$2,
                            alt: "tick"
                          })
                        ], 10, ["onClick"]);
                      }), 128))
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Filter/Metro.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "Filter",
  __ssrInlineRender: true,
  props: {
    loading: Boolean,
    count: Number
  },
  setup(__props) {
    var _a, _b, _c, _d;
    useI18n();
    const route = useRoute();
    const specialties = ref((_a = route.query.specialty_id) != null ? _a : 0);
    const onSpecChange = (id) => {
      if (specialties.value == id) {
        specialties.value = 0;
      } else {
        specialties.value = id;
      }
    };
    const gender = ref((_b = route.query.gender) != null ? _b : 0);
    const onGenderChange = (val) => {
      gender.value = val;
    };
    const date = ref((_c = route.query.date) != null ? _c : null);
    const onDateChange = (val) => {
      date.value = val;
    };
    const metro = ref((_d = route.query.metro_id) != null ? _d : 0);
    const onMetroChange = (val) => {
      if (metro.value == val)
        metro.value = 0;
      else
        metro.value = val;
    };
    const filterQueries = reactive({
      specialty_id: specialties,
      gender,
      date,
      metro_id: metro
    });
    watch(filterQueries, async (newVal) => {
      let temp = "";
      let queries = {};
      for (const property in newVal) {
        if (newVal.hasOwnProperty(property)) {
          if (!(property == "specialty_id" && newVal[property] == 0) && !(property == "gender" && newVal[property] == 0) && !(property == "date" && newVal[property] == null) && !(property == "metro_id" && newVal[property] == 0) && !(property == "order_by" && newVal[property] !== void 0)) {
            temp += `${temp.length ? "&" : ""}${property}=${newVal[property]}`;
            queries[property] = newVal[property];
          }
        }
      }
      if (route.query.order_by)
        queries.order_by = route.query.order_by;
      navigateTo({ query: queries });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_11;
      const _component_FilterSpecialties = __nuxt_component_1;
      const _component_FilterDate = __nuxt_component_2;
      const _component_FilterMetro = __nuxt_component_3;
      const _component_BaseButton = __nuxt_component_2$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-2xl p-4 flex flex-col gap-4" }, _attrs))} data-v-9ee93fce><div class="flex flex-col gap-4" data-v-9ee93fce><div class="flex justify-between items-center" data-v-9ee93fce><div class="text-2xl font-bold text-darkBlue" data-v-9ee93fce>${ssrInterpolate(_ctx.$t("filterTitle"))}</div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: { query: {} },
        class: "text-sm text-blue hover:text-red active:text-[#BA2A6F] cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("reset"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("reset")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col gap-4" data-v-9ee93fce>`);
      _push(ssrRenderComponent(_component_FilterSpecialties, {
        selected: +unref(specialties),
        onOnChange: onSpecChange,
        gender: +unref(gender),
        onOnGenderChange: onGenderChange
      }, null, _parent));
      _push(`<hr class="border-t border-dividers" data-v-9ee93fce>`);
      _push(ssrRenderComponent(_component_FilterDate, {
        selected: unref(date),
        onOnChange: onDateChange
      }, null, _parent));
      _push(`<hr class="border-t border-dividers" data-v-9ee93fce>`);
      _push(ssrRenderComponent(_component_FilterMetro, {
        selected: +unref(metro),
        onOnChange: onMetroChange
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_BaseButton, {
        state: "primary",
        class: "sticky bottom-4 lg:hidden",
        onClick: ($event) => _ctx.$emit("close")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("select"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("select")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Base/Filter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9ee93fce"]]);
const _imports_0 = "" + buildAssetsURL("filter.d809fd54.svg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { locale } = useI18n();
    const route = useRoute();
    const tempQuery = ref(route.query);
    const { data: dataDoctors } = ([__temp, __restore] = withAsyncContext(() => useMyFetch(`${locale.value}/doctors/`, { query: tempQuery.value, format: "json" })), __temp = await __temp, __restore(), __temp);
    const doctors = ref(dataDoctors.value.results);
    const count = useCount();
    count.value = dataDoctors.value.count;
    const pagination = ref(dataDoctors.value);
    const sort = useSort();
    const sortActive = ref(0);
    watch(sortActive, (newVal) => {
      let temp = {};
      temp.order_by = sort.value[newVal].slug;
      let queries = Object.assign({}, route.query, temp);
      navigateTo({ query: queries });
    });
    const isFilterOpen = ref(false);
    const isLoading = ref(false);
    watch(() => route.query, async (val) => {
      let temp = val;
      isLoading.value = true;
      const { data } = await useMyFetch(`${locale.value}/doctors/`, { query: temp, format: "json" });
      pagination.value = data.value;
      doctors.value = data.value.results;
      count.value = data.value.count;
      isLoading.value = false;
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    const clinics = sortByClinic();
    function sortByClinic() {
      const temp = doctors.value.reduce((acc, doctor) => {
        const clinicId = doctor.clinic.id;
        if (!acc[clinicId]) {
          acc[clinicId] = [];
        }
        acc[clinicId].push(doctor);
        return acc;
      }, {});
      return Object.keys(temp).map((clinicId) => ({
        clinicId,
        // Convert clinicId to number if needed
        latitude: temp[clinicId][0].clinic.latitude,
        longitude: temp[clinicId][0].clinic.longitude,
        doctors: temp[clinicId]
      }));
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseDropdownSort = __nuxt_component_0$1;
      const _component_BaseFilterCard = __nuxt_component_1$1;
      const _component_CardDoctor = __nuxt_component_2$1;
      const _component_BasePagination = __nuxt_component_3$1;
      const _component_BaseFilter = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><div class="lg:hidden bg-white px-4 md:pb-4 w-full"><div class="flex justify-between items-center max-w-[1280px] w-full lg:px-8"><div class="flex-y-center gap-4">`);
      _push(ssrRenderComponent(_component_BaseDropdownSort, null, null, _parent));
      _push(ssrRenderComponent(_component_BaseFilterCard, {
        class: "max-md:hidden",
        onFilterOpen: ($event) => isFilterOpen.value = true
      }, null, _parent));
      _push(`</div><div class="px-4 py-3 flex-y-center gap-1 h-10 bg-white hover:bg-[#E5E9F0] active:bg-[#E5E9F0] cursor-pointer rounded-lg"><div class="w-[18px] h-[18px] flex-center"><img${ssrRenderAttr("src", _imports_0)} alt="filter"></div><span class="text-sm text-darkBlue">${ssrInterpolate(_ctx.$t("filterTitle"))}</span></div></div>`);
      _push(ssrRenderComponent(_component_BaseFilterCard, {
        class: "md:hidden mt-2 mb-4",
        onFilterOpen: ($event) => isFilterOpen.value = true
      }, null, _parent));
      _push(`</div><div class="container py-4 md:py-5 flex gap-5"><div class="flex flex-col items-center gap-4 w-full lg:w-[804px] shrink-0"><!--[-->`);
      ssrRenderList(unref(doctors), (item) => {
        _push(ssrRenderComponent(_component_CardDoctor, {
          key: item.id,
          doctor: item
        }, null, _parent));
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_BasePagination, { pagination: unref(pagination) }, null, _parent));
      _push(`</div><div class="flex flex-col gap-5 max-lg:hidden select-none"><div class="bg-white rounded-2xl p-4 flex flex-col gap-4"><div class="text-2xl font-bold text-darkBlue">${ssrInterpolate(_ctx.$t("sortTitle"))}</div><div class="flex flex-wrap gap-2"><!--[-->`);
      ssrRenderList(unref(sort), (item, index) => {
        _push(`<div class="${ssrRenderClass([{ "text-white bg-blue hover:bg-blue": unref(sortActive) == index }, "px-3 py-2 border border-blue hover:bg-[#E5E9F0] cursor-pointer rounded-lg line-clamp-1 text-sm text-darkBlue"])}">${ssrInterpolate(_ctx.$t(`sort[${index}]`))}</div>`);
      });
      _push(`<!--]--></div></div>`);
      _push(ssrRenderComponent(_component_BaseFilter, {
        grouped: unref(clinics),
        loading: unref(isLoading),
        count: unref(count)
      }, null, _parent));
      _push(`</div>`);
      if (unref(isFilterOpen)) {
        _push(`<div class="lg:hidden"><div class="bg-darkBlue bg-opacity-70 inset-0 fixed z-[99]"></div><div class="fixed-filter fixed-center w-[calc(100%-32px)] max-w-[800px] z-[100] max-h-[80%] overflow-y-auto rounded-2xl">`);
        _push(ssrRenderComponent(_component_BaseFilter, {
          grouped: unref(clinics),
          onClose: ($event) => isFilterOpen.value = false
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-4e48742b.mjs.map
