import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as _imports_2$1, a as __unimport_usePrettyDistance, b as _imports_0$2, c as __nuxt_component_1$1, d as __nuxt_component_1$3 } from './clock-8f2938ae.mjs';
import { _ as __nuxt_component_3 } from './Location-b1480ac0.mjs';
import { _ as _export_sfc, u as useI18n, j as useRoute, i as useMyFetch, k as useSeoMeta, l as useUserInfo, m as usePersonalData, e as useLoginTitle, f as useLoginModal, g as useRedirect, d as useAuthenticated, a as useState, h as useCookie, b as __nuxt_component_2 } from '../server.mjs';
import { useSSRContext, ref, withAsyncContext, watch, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, isRef, createTextVNode, openBlock, createBlock, withModifiers, createCommentVNode, Fragment, renderList, withDirectives, vModelText } from 'vue';
import { n as numberWithSpaces, _ as __nuxt_component_0$1 } from './Modal-c91268d9.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_0 } from './info-e89625e7.mjs';
import { _ as _imports_5$1, a as __nuxt_component_1$2 } from './close-98a6d81e.mjs';
import { _ as _imports_0$1, a as _imports_1$1 } from './submitted-error-36cd3fa9.mjs';
import { useReCaptcha } from 'vue-recaptcha-v3';
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
import '@egjs/vue3-flicking';
import 'vue-router';
import 'is-https';
import 'click-outside-vue3';
import '@vueuse/core';

const _sfc_main$3 = {
  __name: "Detail",
  __ssrInlineRender: true,
  props: ["doctor", "selectedDateIndex", "selectedHourIndex"],
  setup(__props) {
    const { t } = useI18n();
    const props = __props;
    const schedule = props.doctor.schedule.filter((day) => day.time.length > 0);
    const days = ref([]);
    const hours = ref([]);
    const selectedDay = ref(0);
    const selectedHour = ref(0);
    schedule.map((item, index) => {
      const date = new Date(item.date);
      const weekday = t(`weekdays[${date.getDay()}]`);
      days.value.push(`${weekday}, ${date.getDate().toString().padStart(2, "0")}`);
    });
    getHours();
    const onDayChange = (e) => {
      selectedDay.value = e.index;
      getHours();
    };
    const onHourChange = (e) => {
      selectedHour.value = e.index;
    };
    function getHours() {
      if (!schedule.length)
        return;
      let temp = [];
      schedule[selectedDay.value].time.map((item, index) => {
        temp.push(item.exactly_time.slice(0, 5));
      });
      hours.value = temp;
    }
    const getSelectedDate = (isMonth = false) => {
      let selected = schedule[selectedDay.value].date;
      const date = new Date(selected);
      if (isMonth)
        return date.getMonth();
      else
        return date.getDate();
    };
    const onMoveThrough = (idx) => {
      selectedHour.value = idx;
    };
    const onDayMove = (idx) => {
      selectedDay.value = idx;
      getHours();
    };
    const dateButtonText = computed(() => {
      if (hours.value.length > 0) {
        return t(`bookTime`, { time: hours.value[selectedHour.value], date: t(`months[${getSelectedDate(true)}]`, { day: getSelectedDate() }) });
      } else
        return "Please select a date";
    });
    const selectedDayQuery = useState("useSelectedDayQuery");
    const selectedHourQuery = useState("useSelectedHourQuery");
    schedule.map((day, index) => {
      if (day.date == selectedDayQuery.value) {
        selectedDay.value = index;
        getHours();
        day.time.map((hour, index2) => {
          if (hour.id == selectedHourQuery.value) {
            selectedHour.value = index2;
          }
        });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconRating = __nuxt_component_1$1;
      const _component_IconLocation = __nuxt_component_3;
      const _component_BaseDatePicker = __nuxt_component_1$3;
      const _component_BaseButton = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex max-lg:flex-col gap-5" }, _attrs))} data-v-1de92188><div class="p-4 bg-white rounded-2xl flex max-md:flex-col gap-4 max-md:mt-[130px] lg:grow" data-v-1de92188><div class="relative h-fit w-fit shrink-0 max-md:self-center max-md:-mt-[142px]" data-v-1de92188><img class="rounded-2xl" width="188" height="236"${ssrRenderAttr("src", __props.doctor.avatar_300_375)}${ssrRenderAttr("alt", __props.doctor.full_name)} data-v-1de92188>`);
      if (__props.doctor.experience) {
        _push(`<div class="absolute bottom-0 left-0 w-full h-6 bg-red rounded-b-2xl flex-center text-sm text-white" data-v-1de92188><span data-v-1de92188>${ssrInterpolate(_ctx.$t("experience", { year: __props.doctor.experience }))}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="md:p-4 flex flex-col gap-4 flex-grow" data-v-1de92188><p class="text-lg font-bold text-darkBlue leading-normal" data-v-1de92188>${ssrInterpolate(__props.doctor.full_name)}</p><div class="flex gap-4" data-v-1de92188><div class="flex flex-col justify-between gap-1" data-v-1de92188><div class="flex-y-center flex-wrap gap-1" data-v-1de92188><!--[-->`);
      ssrRenderList(__props.doctor.specialties, (item, index) => {
        _push(`<div class="flex-y-center gap-1" data-v-1de92188>`);
        if (index != 0) {
          _push(`<svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none" data-v-1de92188><circle cx="1" cy="1" r="1" fill="#1D7ED8" data-v-1de92188></circle></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<p class="text-sm text-blue leading-normal" data-v-1de92188>${ssrInterpolate(item.name)}</p></div>`);
      });
      _push(`<!--]--></div><p class="text-sm text-secondary leading-normal" data-v-1de92188>${ssrInterpolate(__props.doctor.degree.name)}</p></div><div class="bg-dividers w-[1px]" data-v-1de92188></div><div class="flex flex-col justify-between gap-1" data-v-1de92188><div class="flex-y-center gap-1" data-v-1de92188>`);
      _push(ssrRenderComponent(_component_IconRating, {
        rating: __props.doctor.average_rating
      }, null, _parent));
      _push(`<div class="px-1 py-0.5 rounded bg-[#FEF9EB] text-xs font-bold text-yellow leading-normal" data-v-1de92188>${ssrInterpolate(__props.doctor.average_rating.toFixed(1))}</div></div><p class="text-sm text-red leading-normal" data-v-1de92188>${ssrInterpolate(_ctx.$t("ratingsCount", { count: __props.doctor.count_of_ratings }))}</p></div></div><div class="flex flex-col gap-1" data-v-1de92188><div class="line-clamp-3 md:line-clamp-6 text-sm text-darkBlue desc" data-v-1de92188>${__props.doctor.description}</div><div class="text-sm text-red leading-normal flex cursor-pointer" data-v-1de92188>${ssrInterpolate(_ctx.$t("moreAbout"))} <span class="w-[18px] h-[18px] flex-center" data-v-1de92188><svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none" data-v-1de92188><path fill-rule="evenodd" clip-rule="evenodd" d="M1.14863 9.18922C0.906045 8.99515 0.866714 8.64117 1.06078 8.39859L3.77967 4.99998L1.06078 1.60137C0.866714 1.35878 0.906045 1.00481 1.14863 0.81074C1.39121 0.616672 1.74519 0.656003 1.93926 0.898588L4.93926 4.64859C5.10361 4.85402 5.10361 5.14593 4.93926 5.35137L1.93926 9.10137C1.74519 9.34396 1.39121 9.38329 1.14863 9.18922Z" fill="#E82C71" data-v-1de92188></path></svg></span></div></div><hr class="border-dividers border-t" data-v-1de92188><div class="flex flex-col gap-1" data-v-1de92188><p class="text-xs text-secondary" data-v-1de92188>${ssrInterpolate(_ctx.$t("narxi"))}:</p><div class="flex-y-center gap-2" data-v-1de92188>`);
      if (__props.doctor.discount_price) {
        _push(`<p class="text-sm font-bold text-darkBlue leading-normal" data-v-1de92188>${ssrInterpolate(("numberWithSpaces" in _ctx ? _ctx.numberWithSpaces : unref(numberWithSpaces))(__props.doctor.discount_price))} \u0441\u0443\u043C </p>`);
      } else {
        _push(`<p class="text-sm font-bold text-darkBlue leading-normal" data-v-1de92188>${ssrInterpolate(("numberWithSpaces" in _ctx ? _ctx.numberWithSpaces : unref(numberWithSpaces))(__props.doctor.original_price))} \u0441\u0443\u043C </p>`);
      }
      if (__props.doctor.discount_price) {
        _push(`<div class="flex-y-center gap-1" data-v-1de92188><p class="text-xs text-red line-through leading-normal" data-v-1de92188>${ssrInterpolate(("numberWithSpaces" in _ctx ? _ctx.numberWithSpaces : unref(numberWithSpaces))(__props.doctor.original_price))} \u0441\u0443\u043C </p><div class="bg-blue bg-opacity-10 rounded px-1 py-0.5 text-xs font-bold text-blue leading-normal" data-v-1de92188> -${ssrInterpolate(Math.floor(100 - __props.doctor.discount_price * 100 / __props.doctor.original_price))}% </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><hr class="border-dividers border-t" data-v-1de92188><a${ssrRenderAttr("href", `geo:${__props.doctor.clinic.latitude},${__props.doctor.clinic.longitude}`)} class="flex gap-8 items-center py-4 px-2 hover:bg-[#E5E9F0] active:bg-[#CCD3E1] rounded-xl" data-v-1de92188><div class="flex gap-1 items-center w-3/5" data-v-1de92188>`);
      _push(ssrRenderComponent(_component_IconLocation, null, null, _parent));
      _push(`<div class="flex flex-col gap-1" data-v-1de92188><div class="text-xs text-secondary line-clamp-1" data-v-1de92188>${ssrInterpolate(__props.doctor.clinic.address)}</div><div class="text-sm text-darkBlue font-bold" data-v-1de92188>${ssrInterpolate(__props.doctor.clinic.name)}</div></div></div><div class="flex gap-1 items-center" data-v-1de92188><div class="w-[18px] h-[18px] flex items-center justify-center" data-v-1de92188><img${ssrRenderAttr("src", _imports_2$1)} alt="metro" data-v-1de92188></div><div class="flex flex-col gap-0.5" data-v-1de92188><div class="text-xs text-secondary" data-v-1de92188>${ssrInterpolate(("usePrettyDistance" in _ctx ? _ctx.usePrettyDistance : unref(__unimport_usePrettyDistance))(__props.doctor.clinic.distance))}</div><div class="text-sm text-darkBlue font-bold leading-4" data-v-1de92188>${ssrInterpolate(__props.doctor.clinic.metro.name)}</div></div></div></a></div></div><div class="p-4 bg-white h-fit rounded-2xl lg:w-[392px] lg:shrink-0" data-v-1de92188>`);
      if (unref(schedule).length) {
        _push(`<div class="flex flex-col gap-4" data-v-1de92188><div class="flex-y-center gap-1" data-v-1de92188><img${ssrRenderAttr("src", _imports_0$2)} alt="clock" data-v-1de92188><p class="text-xs text-secondary leading-normal" data-v-1de92188>${ssrInterpolate(_ctx.$t("dateTime"))}: </p></div><div class="flex gap-2 z-0" data-v-1de92188>`);
        _push(ssrRenderComponent(_component_BaseDatePicker, {
          class: "w-2/3",
          uniqueID: "flicking-day",
          panels: unref(days),
          onOnChange: onDayChange,
          onMoveThrough: onDayMove,
          selected: __props.selectedDateIndex
        }, null, _parent));
        _push(ssrRenderComponent(_component_BaseDatePicker, {
          class: "w-1/3",
          uniqueID: "flicking-hour",
          panels: unref(hours),
          onOnChange: onHourChange,
          onMoveThrough,
          selected: __props.selectedHourIndex,
          "panel-index": unref(selectedHourQuery)
        }, null, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_BaseButton, {
          state: "primary",
          onClick: ($event) => _ctx.$emit("onApply", unref(selectedDay), unref(selectedHour)),
          "is-disabled": !unref(hours).length
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(dateButtonText))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(dateButtonText)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="flex flex-col gap-4" data-v-1de92188><div class="flex-y-center gap-1" data-v-1de92188><img${ssrRenderAttr("src", _imports_0$2)} alt="clock" data-v-1de92188><p class="text-xs text-secondary leading-normal" data-v-1de92188>${ssrInterpolate(_ctx.$t("submitApplication[0]"))}</p></div>`);
        _push(ssrRenderComponent(_component_BaseButton, {
          state: "primary",
          onClick: ($event) => _ctx.$emit("onApply", null, null)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("submitApplication[1]"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("submitApplication[1]")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/Detail.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-1de92188"]]);
const _imports_1 = "" + buildAssetsURL("star_full.ac82dffd.svg");
const _imports_2 = "" + buildAssetsURL("chatting.662bc76d.svg");
const _imports_3 = "" + buildAssetsURL("user-avatar.5ce96821.svg");
const _imports_4 = "" + buildAssetsURL("user-avatar-female.ce007b8f.svg");
const _imports_5 = "" + buildAssetsURL("star_empty.9af7600d.svg");
const _sfc_main$2 = {
  __name: "Comments",
  __ssrInlineRender: true,
  props: ["doctor"],
  setup(__props) {
    const getPublishedDate = (val) => {
      const date = new Date(val);
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButton = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-2xl p-4 flex flex-col gap-4 lg:w-[calc(2/3*100%-10px)]" }, _attrs))}><div class="flex-y-center gap-1"><p class="text-lg text-darkBlue font-bold leading-normal">${ssrInterpolate(_ctx.$t("comments"))}</p><img${ssrRenderAttr("src", _imports_0)} alt="information"></div><div class="flex gap-4"><div class="flex flex-col gap-1"><p class="text-xs text-secondary leading-normal">${ssrInterpolate(_ctx.$t("overallRating"))}:</p><div class="flex-y-center gap-1"><img${ssrRenderAttr("src", _imports_1)} alt="Average rating"><p class="text-darkBlue font-bold text-2xl leading-normal">${ssrInterpolate(__props.doctor.average_rating.toFixed(1))}</p></div></div><div class="bg-dividers w-[1px]"></div><div class="flex flex-col gap-1"><p class="text-xs text-secondary leading-normal">${ssrInterpolate(_ctx.$t("numberRating"))}:</p><div class="flex-y-center gap-1"><img${ssrRenderAttr("src", _imports_2)} alt="Number of ratings"><p class="text-darkBlue font-bold text-2xl leading-normal">${ssrInterpolate(__props.doctor.count_of_ratings)}</p></div></div></div>`);
      _push(ssrRenderComponent(_component_BaseButton, {
        class: "font-normal",
        state: "secondary",
        onClick: ($event) => _ctx.$emit("comment")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("leaveComment"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("leaveComment")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-col gap-4"><!--[-->`);
      ssrRenderList(__props.doctor.ratings, (item, index) => {
        _push(`<div class="flex flex-col gap-4">`);
        if (index != 0) {
          _push(`<hr class="border-t border-dividers">`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex flex-col gap-2"><div class="flex-y-center gap-2">`);
        if (item.person.gender == "M") {
          _push(`<img class="rounded-full"${ssrRenderAttr("src", _imports_3)} alt="avatar">`);
        } else {
          _push(`<img class="rounded-full"${ssrRenderAttr("src", _imports_4)} alt="avatar">`);
        }
        _push(`<div class="flex flex-col gap-1"><p class="text-sm font-bold text-darkBlue leading-normal">${ssrInterpolate(item.person.first_name)}</p><p class="text-xs text-secondary leading-normal">${ssrInterpolate(getPublishedDate(item.created_at))}</p></div></div><div class="flex-y-center gap-1"><div class="flex gap-0.5"><!--[-->`);
        ssrRenderList(item.ball, (star) => {
          _push(`<img${ssrRenderAttr("src", _imports_1)} alt="star" width="16" height="16">`);
        });
        _push(`<!--]--><!--[-->`);
        ssrRenderList(5 - item.ball, (empty) => {
          _push(`<img${ssrRenderAttr("src", _imports_5)} alt="star">`);
        });
        _push(`<!--]--></div><span class="bg-yellow bg-opacity-10 rounded px-1 py-0.5 text-xs font-bold text-yellow">${ssrInterpolate(_ctx.$t(`rating[${item.ball - 1}]`))}</span></div>`);
        if (item.text) {
          _push(`<div class="text-sm text-darkBlue leading-normal">${item.text}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/Comments.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "CommentModal",
  __ssrInlineRender: true,
  props: {
    isOpen: {
      required: true,
      type: Boolean
    },
    doctor: {
      required: true,
      type: Number
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const { locale } = useI18n();
    const recaptchaInstance = useReCaptcha();
    const props = __props;
    const emit = __emit;
    const isAuthenticated = useAuthenticated();
    const isSubmitted = ref(false);
    const isSubmittedError = ref(false);
    const loading = ref(false);
    const comment = ref(null);
    const rating = ref(0);
    const recaptcha = async () => {
      await (recaptchaInstance == null ? void 0 : recaptchaInstance.recaptchaLoaded());
      const token = await (recaptchaInstance == null ? void 0 : recaptchaInstance.executeRecaptcha("yourActionHere"));
      return token;
    };
    const onSubmit = async (e) => {
      if (!rating.value)
        return;
      const access = useCookie("access");
      const recaptcha_token = await recaptcha();
      const body = {
        recaptcha_token,
        ball: rating.value,
        text: comment.value.trim(),
        doctor: props.doctor
      };
      const { data, error } = await useMyFetch(`${locale.value}/ratings/create/`, {
        method: "POST",
        body,
        headers: {
          Authorization: `Bearer ${access.value}`
        }
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
      emit("close");
      rating.value = 0;
      comment.value = null;
    };
    const loginTitle = useLoginTitle();
    const isLoginOpen = useLoginModal();
    const useRedirectUrl = useRedirect();
    watch(() => props.isOpen, (newVal) => {
      if (!isAuthenticated.value) {
        useRedirectUrl.value = {
          link: `/doctor/${props.doctor}`,
          action: "comment"
        };
        loginTitle.value = "loginTitle.comment";
        isLoginOpen.value = newVal;
      }
    });
    watch(isLoginOpen, (newVal) => {
      if (!newVal)
        emit("close");
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageModal = __nuxt_component_0$1;
      const _component_BaseButton = __nuxt_component_2;
      if (unref(isAuthenticated)) {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        if (__props.isOpen) {
          _push(ssrRenderComponent(_component_PageModal, {
            "is-open": __props.isOpen,
            onClose: ($event) => _ctx.$emit("close")
          }, {
            body: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="bg-white rounded-2xl p-4 fixed-center w-[calc(100%-32px)] max-w-[400px] relative z-[99] max-h-[80%] overflow-auto scrollbar-style"${_scopeId}>`);
                if (!unref(isSubmitted)) {
                  _push2(`<form class="flex flex-col gap-8"${_scopeId}><p class="text-2xl text-darkBlue font-bold leading-normal text-center"${_scopeId}>\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043E\u0442\u0437\u044B\u0432</p><div class="relative w-fit self-center"${_scopeId}><div class="flex-center gap-1.5 w-fit z-[1] relative"${_scopeId}><!--[-->`);
                  ssrRenderList(5, (star) => {
                    _push2(`<div class="w-12 h-12 flex-center cursor-pointer"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none"${_scopeId}><path d="M27.0793 7.18605L29.8607 13.0456C30.7057 14.8257 32.3548 16.0878 34.2952 16.3809L40.5146 17.3206C42.8223 17.6692 43.902 20.7409 42.1025 22.5646L37.6021 27.1256C36.2235 28.5228 35.6075 30.5181 35.928 32.461L36.9904 38.9012C37.4241 41.53 34.8268 43.2445 32.8239 42.1497L27.2611 39.109C25.5346 38.1653 23.4654 38.1653 21.7389 39.109L16.1761 42.1497C14.1732 43.2445 11.5759 41.53 12.0096 38.9012L13.072 32.461C13.3925 30.5181 12.7765 28.5228 11.3979 27.1256L6.89748 22.5646C5.09797 20.7409 6.17773 17.6692 8.4854 17.3206L14.7048 16.3809C16.6452 16.0878 18.2943 14.8257 19.1393 13.0456L21.9207 7.18606C22.9878 4.93798 26.0122 4.93798 27.0793 7.18605Z" stroke="#F9A830" stroke-width="3" stroke-linejoin="round"${_scopeId}></path></svg></div>`);
                  });
                  _push2(`<!--]--></div><div class="absolute top-0 left-0 flex-y-center gap-1.5 overflow-hidden transition-300 z-0" style="${ssrRenderStyle(`width: calc(20% * ${unref(rating)});`)}"${_scopeId}><!--[-->`);
                  ssrRenderList(5, (star) => {
                    _push2(`<div class="w-12 h-12 flex-center cursor-pointer"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none"${_scopeId}><path fill="#F9A830" d="M20.5656 6.54282C22.175 3.1524 26.825 3.15239 28.4344 6.54282L31.2158 12.4024C31.8549 13.7487 33.0902 14.6819 34.5193 14.8978L40.7387 15.8374C44.3373 16.3811 45.7743 20.9791 43.1703 23.6182L38.6698 28.1792C37.6358 29.2272 37.1639 30.7371 37.408 32.2168L38.4704 38.6571C39.0852 42.3835 35.3232 45.2253 32.1045 43.4659L26.5417 40.4252C25.2635 39.7266 23.7365 39.7266 22.4583 40.4252L16.8955 43.4659C13.6768 45.2253 9.91485 42.3835 10.5296 38.6571L11.592 32.2168C11.8361 30.7371 11.3642 29.2272 10.3302 28.1792L5.82975 23.6182C3.22573 20.9791 4.66266 16.3811 8.26132 15.8374L14.4807 14.8978C15.9098 14.6819 17.1451 13.7487 17.7842 12.4024L20.5656 6.54282Z"${_scopeId}></path><path stroke="#F9A830" stroke-width="3" stroke-linejoin="round" d="M27.0793 7.18605L29.8607 13.0456C30.7057 14.8257 32.3548 16.0878 34.2952 16.3809L40.5146 17.3206C42.8223 17.6692 43.902 20.7409 42.1025 22.5646L37.6021 27.1256C36.2235 28.5228 35.6075 30.5181 35.928 32.461L36.9904 38.9012C37.4241 41.53 34.8268 43.2445 32.8239 42.1497L27.2611 39.109C25.5346 38.1653 23.4654 38.1653 21.7389 39.109L16.1761 42.1497C14.1732 43.2445 11.5759 41.53 12.0096 38.9012L13.072 32.461C13.3925 30.5181 12.7765 28.5228 11.3979 27.1256L6.89748 22.5646C5.09797 20.7409 6.17773 17.6692 8.4854 17.3206L14.7048 16.3809C16.6452 16.0878 18.2943 14.8257 19.1393 13.0456L21.9207 7.18606C22.9878 4.93798 26.0122 4.93798 27.0793 7.18605Z"${_scopeId}></path></svg></div>`);
                  });
                  _push2(`<!--]--></div></div><textarea name="comment" id="comment" placeholder="\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439" class="w-full h-[140px] p-4 bg-bg rounded-lg text-sm text-darkBlue leading-normal placeholder:text-secondary resize-none outline-none"${_scopeId}>${ssrInterpolate(unref(comment))}</textarea>`);
                  _push2(ssrRenderComponent(_component_BaseButton, {
                    state: "primary",
                    type: "submit",
                    onClick: onSubmit,
                    "is-disabled": !unref(rating),
                    "is-loading": unref(loading)
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0437\u044B\u0432`);
                      } else {
                        return [
                          createTextVNode("\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0437\u044B\u0432")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                  _push2(`</form>`);
                } else {
                  _push2(`<form class="flex-y-center flex-col gap-4"${_scopeId}>`);
                  if (!unref(isSubmittedError)) {
                    _push2(`<img width="96" height="96"${ssrRenderAttr("src", _imports_0$1)} alt="submitted"${_scopeId}>`);
                  } else {
                    _push2(`<img width="96" height="96"${ssrRenderAttr("src", _imports_1$1)} alt="submitted error"${_scopeId}>`);
                  }
                  if (!unref(isSubmittedError)) {
                    _push2(`<div class="flex flex-col gap-2"${_scopeId}><p class="text-2xl font-bold leading-normal text-darkBlue text-center"${_scopeId}>\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u0432\u0430\u0448 \u043E\u0442\u0437\u044B\u0432! </p><p class="text-sm text-darkBlue leading-normal text-center"${_scopeId}> \u0415\u0441\u043B\u0438 \u0432\u044B \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u043B\u0438\u0441\u044C \u0447\u0435\u0440\u0435\u0437 \u043D\u0430\u0448 \u0441\u0435\u0440\u0432\u0438\u0441 \u0438 \u0431\u044B\u043B\u0438 \u043D\u0430 \u043F\u0440\u0438\u0451\u043C\u0435 \u0443 \u0432\u0440\u0430\u0447\u0430, \u0442\u043E \u043C\u044B \u0443\u0447\u0442\u0451\u043C \u0432\u0430\u0448 \u043E\u0442\u0437\u044B\u0432 \u0432 \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438 \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0430 </p></div>`);
                  } else {
                    _push2(`<div class="flex flex-col gap-2"${_scopeId}><p class="text-2xl font-bold leading-normal text-darkBlue text-center"${_scopeId}>\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 </p><p class="text-sm text-darkBlue leading-normal text-center"${_scopeId}> \u0412\u0430\u0448 \u043D\u043E\u043C\u0435\u0440 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u0441\u043F\u0438\u0441\u043A\u0435 \u043F\u0430\u0446\u0438\u0435\u043D\u0442\u043E\u0432, \u0437\u0430\u043F\u0438\u0441\u0430\u0432\u0448\u0438\u0445\u0441\u044F \u043D\u0430 \u043F\u0440\u0438\u0451\u043C. </p></div>`);
                  }
                  _push2(ssrRenderComponent(_component_BaseButton, {
                    class: "w-full",
                    state: "primary",
                    type: "submit",
                    onClick: unSubmit
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`\u0425\u043E\u0440\u043E\u0448\u043E`);
                      } else {
                        return [
                          createTextVNode("\u0425\u043E\u0440\u043E\u0448\u043E")
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
                  createVNode("div", { class: "bg-white rounded-2xl p-4 fixed-center w-[calc(100%-32px)] max-w-[400px] relative z-[99] max-h-[80%] overflow-auto scrollbar-style" }, [
                    !unref(isSubmitted) ? (openBlock(), createBlock("form", {
                      key: 0,
                      onSubmit: withModifiers(() => {
                      }, ["prevent"]),
                      class: "flex flex-col gap-8"
                    }, [
                      createVNode("p", { class: "text-2xl text-darkBlue font-bold leading-normal text-center" }, "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043E\u0442\u0437\u044B\u0432"),
                      createVNode("div", { class: "relative w-fit self-center" }, [
                        createVNode("div", { class: "flex-center gap-1.5 w-fit z-[1] relative" }, [
                          (openBlock(), createBlock(Fragment, null, renderList(5, (star) => {
                            return createVNode("div", {
                              key: star.key,
                              onClick: ($event) => rating.value = star,
                              class: "w-12 h-12 flex-center cursor-pointer"
                            }, [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "49",
                                height: "48",
                                viewBox: "0 0 49 48",
                                fill: "none"
                              }, [
                                createVNode("path", {
                                  d: "M27.0793 7.18605L29.8607 13.0456C30.7057 14.8257 32.3548 16.0878 34.2952 16.3809L40.5146 17.3206C42.8223 17.6692 43.902 20.7409 42.1025 22.5646L37.6021 27.1256C36.2235 28.5228 35.6075 30.5181 35.928 32.461L36.9904 38.9012C37.4241 41.53 34.8268 43.2445 32.8239 42.1497L27.2611 39.109C25.5346 38.1653 23.4654 38.1653 21.7389 39.109L16.1761 42.1497C14.1732 43.2445 11.5759 41.53 12.0096 38.9012L13.072 32.461C13.3925 30.5181 12.7765 28.5228 11.3979 27.1256L6.89748 22.5646C5.09797 20.7409 6.17773 17.6692 8.4854 17.3206L14.7048 16.3809C16.6452 16.0878 18.2943 14.8257 19.1393 13.0456L21.9207 7.18606C22.9878 4.93798 26.0122 4.93798 27.0793 7.18605Z",
                                  stroke: "#F9A830",
                                  "stroke-width": "3",
                                  "stroke-linejoin": "round"
                                })
                              ]))
                            ], 8, ["onClick"]);
                          }), 64))
                        ]),
                        createVNode("div", {
                          class: "absolute top-0 left-0 flex-y-center gap-1.5 overflow-hidden transition-300 z-0",
                          style: `width: calc(20% * ${unref(rating)});`
                        }, [
                          (openBlock(), createBlock(Fragment, null, renderList(5, (star) => {
                            return createVNode("div", {
                              key: star.key,
                              class: "w-12 h-12 flex-center cursor-pointer"
                            }, [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "49",
                                height: "48",
                                viewBox: "0 0 49 48",
                                fill: "none"
                              }, [
                                createVNode("path", {
                                  fill: "#F9A830",
                                  d: "M20.5656 6.54282C22.175 3.1524 26.825 3.15239 28.4344 6.54282L31.2158 12.4024C31.8549 13.7487 33.0902 14.6819 34.5193 14.8978L40.7387 15.8374C44.3373 16.3811 45.7743 20.9791 43.1703 23.6182L38.6698 28.1792C37.6358 29.2272 37.1639 30.7371 37.408 32.2168L38.4704 38.6571C39.0852 42.3835 35.3232 45.2253 32.1045 43.4659L26.5417 40.4252C25.2635 39.7266 23.7365 39.7266 22.4583 40.4252L16.8955 43.4659C13.6768 45.2253 9.91485 42.3835 10.5296 38.6571L11.592 32.2168C11.8361 30.7371 11.3642 29.2272 10.3302 28.1792L5.82975 23.6182C3.22573 20.9791 4.66266 16.3811 8.26132 15.8374L14.4807 14.8978C15.9098 14.6819 17.1451 13.7487 17.7842 12.4024L20.5656 6.54282Z"
                                }),
                                createVNode("path", {
                                  stroke: "#F9A830",
                                  "stroke-width": "3",
                                  "stroke-linejoin": "round",
                                  d: "M27.0793 7.18605L29.8607 13.0456C30.7057 14.8257 32.3548 16.0878 34.2952 16.3809L40.5146 17.3206C42.8223 17.6692 43.902 20.7409 42.1025 22.5646L37.6021 27.1256C36.2235 28.5228 35.6075 30.5181 35.928 32.461L36.9904 38.9012C37.4241 41.53 34.8268 43.2445 32.8239 42.1497L27.2611 39.109C25.5346 38.1653 23.4654 38.1653 21.7389 39.109L16.1761 42.1497C14.1732 43.2445 11.5759 41.53 12.0096 38.9012L13.072 32.461C13.3925 30.5181 12.7765 28.5228 11.3979 27.1256L6.89748 22.5646C5.09797 20.7409 6.17773 17.6692 8.4854 17.3206L14.7048 16.3809C16.6452 16.0878 18.2943 14.8257 19.1393 13.0456L21.9207 7.18606C22.9878 4.93798 26.0122 4.93798 27.0793 7.18605Z"
                                })
                              ]))
                            ]);
                          }), 64))
                        ], 4)
                      ]),
                      withDirectives(createVNode("textarea", {
                        name: "comment",
                        id: "comment",
                        placeholder: "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439",
                        "onUpdate:modelValue": ($event) => isRef(comment) ? comment.value = $event : null,
                        class: "w-full h-[140px] p-4 bg-bg rounded-lg text-sm text-darkBlue leading-normal placeholder:text-secondary resize-none outline-none"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(comment)]
                      ]),
                      createVNode(_component_BaseButton, {
                        state: "primary",
                        type: "submit",
                        onClick: onSubmit,
                        "is-disabled": !unref(rating),
                        "is-loading": unref(loading)
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0437\u044B\u0432")
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
                        src: _imports_0$1,
                        alt: "submitted"
                      })) : (openBlock(), createBlock("img", {
                        key: 1,
                        width: "96",
                        height: "96",
                        src: _imports_1$1,
                        alt: "submitted error"
                      })),
                      !unref(isSubmittedError) ? (openBlock(), createBlock("div", {
                        key: 2,
                        class: "flex flex-col gap-2"
                      }, [
                        createVNode("p", { class: "text-2xl font-bold leading-normal text-darkBlue text-center" }, "\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u0432\u0430\u0448 \u043E\u0442\u0437\u044B\u0432! "),
                        createVNode("p", { class: "text-sm text-darkBlue leading-normal text-center" }, " \u0415\u0441\u043B\u0438 \u0432\u044B \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u043B\u0438\u0441\u044C \u0447\u0435\u0440\u0435\u0437 \u043D\u0430\u0448 \u0441\u0435\u0440\u0432\u0438\u0441 \u0438 \u0431\u044B\u043B\u0438 \u043D\u0430 \u043F\u0440\u0438\u0451\u043C\u0435 \u0443 \u0432\u0440\u0430\u0447\u0430, \u0442\u043E \u043C\u044B \u0443\u0447\u0442\u0451\u043C \u0432\u0430\u0448 \u043E\u0442\u0437\u044B\u0432 \u0432 \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438 \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0430 ")
                      ])) : (openBlock(), createBlock("div", {
                        key: 3,
                        class: "flex flex-col gap-2"
                      }, [
                        createVNode("p", { class: "text-2xl font-bold leading-normal text-darkBlue text-center" }, "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 "),
                        createVNode("p", { class: "text-sm text-darkBlue leading-normal text-center" }, " \u0412\u0430\u0448 \u043D\u043E\u043C\u0435\u0440 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u0441\u043F\u0438\u0441\u043A\u0435 \u043F\u0430\u0446\u0438\u0435\u043D\u0442\u043E\u0432, \u0437\u0430\u043F\u0438\u0441\u0430\u0432\u0448\u0438\u0445\u0441\u044F \u043D\u0430 \u043F\u0440\u0438\u0451\u043C. ")
                      ])),
                      createVNode(_component_BaseButton, {
                        class: "w-full",
                        state: "primary",
                        type: "submit",
                        onClick: unSubmit
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0425\u043E\u0440\u043E\u0448\u043E")
                        ]),
                        _: 1
                      })
                    ], 40, ["onSubmit"])),
                    createVNode("img", {
                      class: "absolute top-4 right-4 cursor-pointer",
                      onClick: ($event) => _ctx.$emit("close"),
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
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/CommentModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = _sfc_main$1;
function generateUUID() {
  let d = (/* @__PURE__ */ new Date()).getTime();
  let d2 = typeof performance !== "undefined" && performance.now && performance.now() * 1e3 || 0;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    let r = Math.random() * 16;
    if (d > 0) {
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : r & 3 | 8).toString(16);
  });
}
function getDeviceId() {
  const deviceId = useCookie("device_id");
  if (!deviceId.value) {
    deviceId.value = generateUUID();
  }
  return deviceId.value;
}
const _sfc_main = {
  __name: "[doctor-id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const recaptchaInstance = useReCaptcha();
    const { locale, t } = useI18n();
    const route = useRoute();
    const id = route.params.doctorid;
    const isDescOpen = ref(false);
    const isFormOpen = ref(false);
    const isCommentOpen = ref(false);
    const isDatePicker = ref(false);
    const isSubmitted = ref(false);
    const isSubmittedError = ref(false);
    const isSubmitting = ref(false);
    const { data: doctor } = ([__temp, __restore] = withAsyncContext(() => useMyFetch(
      `/${locale.value}/doctors/${id}/?device_id=${getDeviceId()}&format=json`
    )), __temp = await __temp, __restore(), __temp);
    const doctorSchedule = doctor.value.schedule.filter(
      (item) => item.time.length > 0
    );
    const htmlToText = (html) => html == null ? void 0 : html.replace(/<[^>]*>?/gm, "").slice(0, 160);
    useSeoMeta({
      title: doctor.value.full_name || t("title"),
      description: htmlToText(doctor.value.description) || t("description"),
      ogTitle: doctor.value.full_name || t("title"),
      ogDescription: htmlToText(doctor.value.description) || t("description"),
      twitterTitle: doctor.value.full_name || t("title"),
      twitterDescription: htmlToText(doctor.value.description) || t("description"),
      twitterCard: "summary",
      ogImage: doctor.value.avatar || "/og-image.png",
      twitterImage: doctor.value.avatar || "/og-image.png"
    });
    const days = ref([]);
    const hours = ref([]);
    doctor.value.schedule.map((item, index) => {
      const date = new Date(item.date);
      const weekday = t(`weekdays[${date.getDay()}]`);
      days.value.push(`${weekday}, ${date.getDate().toString().padStart(2, "0")}`);
    });
    const user = useUserInfo();
    if (!user.value)
      [__temp, __restore] = withAsyncContext(() => usePersonalData(locale.value)), await __temp, __restore();
    const first_name = ref(null);
    const last_name = ref(null);
    const birth_date = ref(null);
    const phone_number = ref(null);
    if (user.value) {
      first_name.value = user.value.first_name;
      last_name.value = user.value.last_name;
      birth_date.value = user.value.date_birthday ? user.value.date_birthday.split("-").reverse().join(".") : null;
      phone_number.value = user.value.phone_number;
    }
    const errorFirst = ref(false);
    const errorLast = ref(false);
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
      return !errorFirst.value && !errorLast.value && !errorBirth.value;
    };
    const isDateValid = (dateStr) => {
      return !isNaN(new Date(dateStr));
    };
    const selectedDate = ref(null);
    const selectedHour = ref(null);
    const selectedDateIndex = ref(0);
    const selectedHourIndex = ref(0);
    const selectedMonth = ref(null);
    const selectedDay = ref(null);
    const selectDate = (day, hour) => {
      var _a, _b;
      getHours();
      selectedDateIndex.value = day;
      selectedHourIndex.value = hour;
      selectedDate.value = doctorSchedule[day];
      selectedHour.value = (_a = selectedDate.value) == null ? void 0 : _a.time[hour];
      isFormOpen.value = true;
      isDatePicker.value = false;
      const date = new Date((_b = selectedDate.value) == null ? void 0 : _b.date);
      selectedMonth.value = date == null ? void 0 : date.getMonth();
      selectedDay.value = date == null ? void 0 : date.getDate();
    };
    const loginTitle = useLoginTitle();
    const isLoginOpen = useLoginModal();
    const useRedirectUrl = useRedirect();
    watch(isFormOpen, (newVal) => {
      if (!newVal)
        isDatePicker.value = false;
      if (!isAuthenticated.value) {
        useRedirectUrl.value = {
          link: `/doctor/${id}`,
          action: "book"
        };
        loginTitle.value = "loginTitle.book";
        isLoginOpen.value = newVal;
      }
    });
    const onDayChange = (e) => {
      selectedDateIndex.value = e.index;
      getHours();
    };
    const onHourChange = (e) => {
      selectedHourIndex.value = e.index;
    };
    function getHours() {
      if (!doctorSchedule.length)
        return;
      let temp = [];
      doctorSchedule[selectedDateIndex.value].time.map((item, index) => {
        temp.push(item.exactly_time.slice(0, 5));
      });
      hours.value = temp;
      return temp;
    }
    getHours();
    const recaptcha = async () => {
      await (recaptchaInstance == null ? void 0 : recaptchaInstance.recaptchaLoaded());
      const token = await (recaptchaInstance == null ? void 0 : recaptchaInstance.executeRecaptcha("yourActionHere"));
      return token;
    };
    const bookDate = async () => {
      if (!validate("all"))
        return;
      isSubmitting.value = true;
      const body = {
        recaptcha_token: await recaptcha()
      };
      const { data, error } = await useMyFetch(
        selectedDay.value ? `${locale.value}/receptions/update/${selectedHour.value.id}/` : `${locale.value}/receptions/create/${id}/`,
        {
          method: "POST",
          body,
          headers: {
            Authorization: `Bearer ${useCookie("access").value}`
          }
        }
      );
      isSubmitted.value = true;
      if (data.value) {
        isSubmittedError.value = false;
        isSubmitting.value = true;
      } else
        isSubmittedError.value = true;
    };
    const onMoveThrough = (idx) => {
      selectedHourIndex.value = idx;
    };
    const onDayMove = (idx) => {
      selectedDateIndex.value = idx;
      getHours();
    };
    const getSelectedDate = (isMonth = false) => {
      let selected = doctorSchedule[selectedDateIndex.value].date;
      const date = new Date(selected);
      if (isMonth)
        return date.getMonth();
      else
        return date.getDate();
    };
    const dateButtonText = computed(() => {
      if (hours.value.length > 0) {
        return `\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F ${t(`months[${getSelectedDate(true)}]`, {
          day: getSelectedDate()
        })}, \u0432 ${hours.value[selectedHourIndex.value]}`;
      } else
        return "Please select a date";
    });
    const unSubmit = () => {
      isSubmitted.value = false;
      isSubmittedError.value = false;
      isFormOpen.value = false;
    };
    const isAuthenticated = useAuthenticated();
    watch(
      () => isAuthenticated.value,
      (newVal) => {
        if (!newVal)
          return;
        setTimeout(() => {
          if (useRedirectUrl.value.action == "book")
            isFormOpen.value = true;
          else if (useRedirectUrl.value.action == "comment")
            isCommentOpen.value = true;
        }, 1e3);
        if (!user.value)
          return;
        first_name.value = user.value.first_name;
        last_name.value = user.value.last_name;
        birth_date.value = user.value.date_birthday ? user.value.date_birthday.split("-").reverse().join(".") : null;
        phone_number.value = user.value.phone_number;
      }
    );
    watch(isLoginOpen, (newVal) => {
      if (!newVal)
        isFormOpen.value = false;
    });
    useState("useSelectedDayQuery");
    useState("useSelectedHourQuery");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardDetail = __nuxt_component_0;
      const _component_CardComments = __nuxt_component_1;
      const _component_PageModal = __nuxt_component_0$1;
      const _component_IconRating = __nuxt_component_1$1;
      const _component_BaseInput = __nuxt_component_1$2;
      const _component_BaseButton = __nuxt_component_2;
      const _component_BaseDatePicker = __nuxt_component_1$3;
      const _component_PageCommentModal = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container my-5" }, _attrs))} data-v-5e62abda><div class="flex flex-col gap-5" data-v-5e62abda>`);
      _push(ssrRenderComponent(_component_CardDetail, {
        doctor: unref(doctor),
        "selected-date-index": unref(selectedDateIndex),
        "selected-hour-index": unref(selectedHourIndex),
        onDescOpen: ($event) => isDescOpen.value = true,
        onOnApply: selectDate
      }, null, _parent));
      _push(ssrRenderComponent(_component_CardComments, {
        doctor: unref(doctor),
        onComment: ($event) => isCommentOpen.value = true
      }, null, _parent));
      _push(`</div>`);
      if (unref(isDescOpen)) {
        _push(ssrRenderComponent(_component_PageModal, {
          "is-open": unref(isDescOpen),
          onClose: ($event) => isDescOpen.value = false
        }, {
          body: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="bg-white rounded-2xl p-4 fixed-center w-[calc(100%-32px)] max-w-[804px] relative z-[99] max-h-[80%] overflow-auto scrollbar-style" data-v-5e62abda${_scopeId}><div class="flex flex-col gap-8" data-v-5e62abda${_scopeId}><p class="text-2xl text-darkBlue font-bold leading-normal text-center" data-v-5e62abda${_scopeId}>${ssrInterpolate(_ctx.$t("about"))}</p><div class="text-sm text-darkBlue whitespace-break-spaces desc" data-v-5e62abda${_scopeId}>${unref(doctor).description}</div></div><img class="absolute top-4 right-4 cursor-pointer"${ssrRenderAttr("src", _imports_5$1)} alt="close" data-v-5e62abda${_scopeId}></div>`);
            } else {
              return [
                createVNode("div", { class: "bg-white rounded-2xl p-4 fixed-center w-[calc(100%-32px)] max-w-[804px] relative z-[99] max-h-[80%] overflow-auto scrollbar-style" }, [
                  createVNode("div", { class: "flex flex-col gap-8" }, [
                    createVNode("p", { class: "text-2xl text-darkBlue font-bold leading-normal text-center" }, toDisplayString(_ctx.$t("about")), 1),
                    createVNode("div", {
                      class: "text-sm text-darkBlue whitespace-break-spaces desc",
                      innerHTML: unref(doctor).description
                    }, null, 8, ["innerHTML"])
                  ]),
                  createVNode("img", {
                    class: "absolute top-4 right-4 cursor-pointer",
                    onClick: ($event) => isDescOpen.value = false,
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
      if (unref(isAuthenticated)) {
        _push(`<div data-v-5e62abda>`);
        if (unref(isFormOpen)) {
          _push(ssrRenderComponent(_component_PageModal, {
            "is-open": unref(isFormOpen),
            onClose: ($event) => isFormOpen.value = false
          }, {
            body: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="${ssrRenderClass([{ "!max-w-[400px]": unref(isSubmitted) }, "bg-white rounded-2xl p-4 fixed-center w-[calc(100%-32px)] max-w-[804px] relative z-[99] max-h-[80%] overflow-auto scrollbar-style"])}" data-v-5e62abda${_scopeId}>`);
                if (!unref(isDatePicker) && !unref(isSubmitted)) {
                  _push2(`<form class="flex flex-col gap-8" data-v-5e62abda${_scopeId}><p class="text-2xl text-darkBlue font-bold leading-normal text-center" data-v-5e62abda${_scopeId}>${ssrInterpolate(_ctx.$t("book"))}</p><div class="flex gap-4" data-v-5e62abda${_scopeId}><div class="relative h-fit w-fit shrink-0 self-center" data-v-5e62abda${_scopeId}><img class="rounded-lg" width="100" height="125"${ssrRenderAttr("src", unref(doctor).avatar_300_375)}${ssrRenderAttr("alt", unref(doctor).full_name)} data-v-5e62abda${_scopeId}>`);
                  if (unref(doctor).experience) {
                    _push2(`<div class="absolute bottom-0 left-0 w-full h-[18px] bg-red rounded-b-lg flex-center text-xs text-white" data-v-5e62abda${_scopeId}><span data-v-5e62abda${_scopeId}>${ssrInterpolate(_ctx.$t("experience", { year: unref(doctor).experience }))}</span></div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div><div class="flex flex-col gap-2" data-v-5e62abda${_scopeId}><p class="text-base font-bold text-darkBlue leading-normal" data-v-5e62abda${_scopeId}>${ssrInterpolate(unref(doctor).full_name)}</p><div class="flex flex-col gap-0.5" data-v-5e62abda${_scopeId}><div class="flex-y-center gap-1" data-v-5e62abda${_scopeId}><!--[-->`);
                  ssrRenderList(unref(doctor).specialties, (item, index) => {
                    _push2(`<div class="flex-y-center gap-1" data-v-5e62abda${_scopeId}>`);
                    if (index != 0) {
                      _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none" data-v-5e62abda${_scopeId}><circle cx="1" cy="1" r="1" fill="#1D7ED8" data-v-5e62abda${_scopeId}></circle></svg>`);
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`<p class="text-xs text-blue leading-normal" data-v-5e62abda${_scopeId}>${ssrInterpolate(item.name)}</p></div>`);
                  });
                  _push2(`<!--]--></div><p class="text-xs text-secondary leading-normal" data-v-5e62abda${_scopeId}>${ssrInterpolate(unref(doctor).degree.name)}</p></div><div class="flex-y-center flex-wrap gap-2" data-v-5e62abda${_scopeId}><div class="flex-y-center gap-1" data-v-5e62abda${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_IconRating, {
                    rating: unref(doctor).average_rating
                  }, null, _parent2, _scopeId));
                  _push2(`<div class="px-1 py-0.5 rounded bg-[#FEF9EB] text-xs font-bold text-yellow leading-normal" data-v-5e62abda${_scopeId}>${ssrInterpolate(unref(doctor).average_rating.toFixed(1))}</div></div><p class="text-sm text-red leading-normal" data-v-5e62abda${_scopeId}>${ssrInterpolate(_ctx.$t("ratingsCount", { count: unref(doctor).count_of_ratings }))}</p></div><div class="flex-y-center flex-wrap gap-1" data-v-5e62abda${_scopeId}><p class="text-xs text-secondary" data-v-5e62abda${_scopeId}>${ssrInterpolate(_ctx.$t("narxi"))}:</p><div class="flex-y-center flex-wrap gap-2" data-v-5e62abda${_scopeId}>`);
                  if (unref(doctor).discount_price) {
                    _push2(`<p class="text-sm font-bold text-darkBlue leading-normal" data-v-5e62abda${_scopeId}>${ssrInterpolate(("numberWithSpaces" in _ctx ? _ctx.numberWithSpaces : unref(numberWithSpaces))(unref(doctor).discount_price))} ${ssrInterpolate(_ctx.$t("sum"))}</p>`);
                  } else {
                    _push2(`<p class="text-sm font-bold text-darkBlue leading-normal" data-v-5e62abda${_scopeId}>${ssrInterpolate(("numberWithSpaces" in _ctx ? _ctx.numberWithSpaces : unref(numberWithSpaces))(unref(doctor).original_price))} ${ssrInterpolate(_ctx.$t("sum"))}</p>`);
                  }
                  if (unref(doctor).discount_price) {
                    _push2(`<div class="flex-y-center gap-1" data-v-5e62abda${_scopeId}><p class="text-xs text-red line-through leading-normal" data-v-5e62abda${_scopeId}>${ssrInterpolate(("numberWithSpaces" in _ctx ? _ctx.numberWithSpaces : unref(numberWithSpaces))(unref(doctor).original_price))} ${ssrInterpolate(_ctx.$t("sum"))}</p><div class="bg-blue bg-opacity-10 rounded px-1 py-0.5 text-xs font-bold text-blue leading-normal" data-v-5e62abda${_scopeId}> -${ssrInterpolate(Math.floor(100 - unref(doctor).discount_price * 100 / unref(doctor).original_price))}% </div></div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div></div></div></div><div class="flex flex-col gap-4" data-v-5e62abda${_scopeId}>`);
                  if (unref(selectedDay)) {
                    _push2(`<div class="bg-bg rounded-lg px-4 py-2 h-12 flex flex-col gap-0.5 cursor-pointer hover:bg-[#DBE3F0] active:bg-[#C2CEE1]" data-v-5e62abda${_scopeId}><p class="text-xs text-secondary leading-normal" data-v-5e62abda${_scopeId}>${ssrInterpolate(_ctx.$t("dateTime"))}</p><p class="text-sm text-darkBlue leading-normal" data-v-5e62abda${_scopeId}>${ssrInterpolate(_ctx.$t(`months[${unref(selectedMonth)}]`, { day: unref(selectedDay) }))}, ${ssrInterpolate(unref(selectedHour).exactly_time.slice(0, 5))}</p></div>`);
                  } else {
                    _push2(`<!---->`);
                  }
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
                  _push2(`<div class="flex flex-col gap-2" data-v-5e62abda${_scopeId}><div class="bg-bg rounded-lg px-4 py-2 h-12 flex flex-col gap-0.5 cursor-default" data-v-5e62abda${_scopeId}><p class="text-xs text-secondary leading-normal" data-v-5e62abda${_scopeId}>${ssrInterpolate(_ctx.$t("phoneToConfirm"))}</p><p class="text-sm text-darkBlue leading-normal" data-v-5e62abda${_scopeId}>${ssrInterpolate(("numberWithSpaces" in _ctx ? _ctx.numberWithSpaces : unref(numberWithSpaces))(`+998${unref(phone_number)}`, false))}</p></div><div class="flex-y-center gap-2" data-v-5e62abda${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="info" data-v-5e62abda${_scopeId}><p class="text-xs text-secondary" data-v-5e62abda${_scopeId}>${ssrInterpolate(_ctx.$t("phoneInfo"))}</p></div></div></div>`);
                  _push2(ssrRenderComponent(_component_BaseButton, {
                    onClick: bookDate,
                    state: "primary",
                    type: "submit",
                    "is-loading": unref(isSubmitting)
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(_ctx.$t("booking"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("booking")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                  _push2(`</form>`);
                } else if (unref(isDatePicker)) {
                  _push2(`<div class="flex flex-col gap-4" data-v-5e62abda${_scopeId}><p class="text-2xl text-darkBlue font-bold leading-normal" data-v-5e62abda${_scopeId}>${ssrInterpolate(_ctx.$t("filter.date"))}</p><div class="flex gap-2" data-v-5e62abda${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_BaseDatePicker, {
                    class: "w-2/3",
                    uniqueID: "flicking-day",
                    panels: unref(days),
                    onOnChange: onDayChange,
                    onMoveThrough: onDayMove,
                    "panel-index": unref(selectedDateIndex)
                  }, null, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_component_BaseDatePicker, {
                    class: "w-1/3",
                    uniqueID: "flicking-hour",
                    panels: getHours(),
                    onOnChange: onHourChange,
                    onMoveThrough,
                    "panel-index": unref(selectedHourIndex)
                  }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                  _push2(ssrRenderComponent(_component_BaseButton, {
                    state: "primary",
                    onClick: ($event) => selectDate(unref(selectedDateIndex), unref(selectedHourIndex)),
                    "is-disabled": !getHours().length
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(unref(dateButtonText))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(dateButtonText)), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                  _push2(`</div>`);
                } else if (unref(isSubmitted)) {
                  _push2(`<div class="flex-y-center flex-col gap-4" data-v-5e62abda${_scopeId}>`);
                  if (!unref(isSubmittedError)) {
                    _push2(`<div class="flex-y-center flex-col gap-4" data-v-5e62abda${_scopeId}><img width="96" height="96"${ssrRenderAttr("src", _imports_0$1)} alt="submitted" data-v-5e62abda${_scopeId}><div class="flex-y-center flex-col gap-2" data-v-5e62abda${_scopeId}><p class="text-2xl font-bold text-darkBlue leading-normal text-center" data-v-5e62abda${_scopeId}>${ssrInterpolate(_ctx.$t("bookSuccess"))}</p><p class="text-sm text-darkBlue leading-normal text-center" data-v-5e62abda${_scopeId}>${ssrInterpolate(_ctx.$t("bookSuccessInfo"))}</p></div>`);
                    _push2(ssrRenderComponent(_component_BaseButton, {
                      class: "w-full",
                      state: "primary",
                      onClick: unSubmit
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`${ssrInterpolate(_ctx.$t("nice"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("nice")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent2, _scopeId));
                    _push2(`</div>`);
                  } else {
                    _push2(`<div class="flex-y-center flex-col gap-4" data-v-5e62abda${_scopeId}><img width="96" height="96"${ssrRenderAttr("src", _imports_1$1)} alt="submitted error" data-v-5e62abda${_scopeId}><div class="flex-y-center flex-col gap-2" data-v-5e62abda${_scopeId}><p class="text-2xl font-bold text-darkBlue leading-normal text-center" data-v-5e62abda${_scopeId}>${ssrInterpolate(_ctx.$t("bookError"))}</p><p class="text-sm text-darkBlue leading-normal text-center" data-v-5e62abda${_scopeId}>${ssrInterpolate(_ctx.$t("bookErrorInfo"))}</p></div>`);
                    _push2(ssrRenderComponent(_component_BaseButton, {
                      class: "w-full",
                      state: "primary",
                      onClick: unSubmit
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`${ssrInterpolate(_ctx.$t("retry"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("retry")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent2, _scopeId));
                    _push2(ssrRenderComponent(_component_BaseButton, {
                      class: "w-full font-normal",
                      state: "secondary"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`${ssrInterpolate(_ctx.$t("help"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("help")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent2, _scopeId));
                    _push2(`</div>`);
                  }
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<img class="absolute top-4 right-4 cursor-pointer"${ssrRenderAttr("src", _imports_5$1)} alt="close" data-v-5e62abda${_scopeId}></div>`);
              } else {
                return [
                  createVNode("div", {
                    class: [{ "!max-w-[400px]": unref(isSubmitted) }, "bg-white rounded-2xl p-4 fixed-center w-[calc(100%-32px)] max-w-[804px] relative z-[99] max-h-[80%] overflow-auto scrollbar-style"]
                  }, [
                    !unref(isDatePicker) && !unref(isSubmitted) ? (openBlock(), createBlock("form", {
                      key: 0,
                      onSubmit: withModifiers(() => {
                      }, ["prevent"]),
                      class: "flex flex-col gap-8"
                    }, [
                      createVNode("p", { class: "text-2xl text-darkBlue font-bold leading-normal text-center" }, toDisplayString(_ctx.$t("book")), 1),
                      createVNode("div", { class: "flex gap-4" }, [
                        createVNode("div", { class: "relative h-fit w-fit shrink-0 self-center" }, [
                          createVNode("img", {
                            class: "rounded-lg",
                            width: "100",
                            height: "125",
                            src: unref(doctor).avatar_300_375,
                            alt: unref(doctor).full_name
                          }, null, 8, ["src", "alt"]),
                          unref(doctor).experience ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "absolute bottom-0 left-0 w-full h-[18px] bg-red rounded-b-lg flex-center text-xs text-white"
                          }, [
                            createVNode("span", null, toDisplayString(_ctx.$t("experience", { year: unref(doctor).experience })), 1)
                          ])) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "flex flex-col gap-2" }, [
                          createVNode("p", { class: "text-base font-bold text-darkBlue leading-normal" }, toDisplayString(unref(doctor).full_name), 1),
                          createVNode("div", { class: "flex flex-col gap-0.5" }, [
                            createVNode("div", { class: "flex-y-center gap-1" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(doctor).specialties, (item, index) => {
                                return openBlock(), createBlock("div", {
                                  class: "flex-y-center gap-1",
                                  key: item.key
                                }, [
                                  index != 0 ? (openBlock(), createBlock("svg", {
                                    key: 0,
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "2",
                                    height: "2",
                                    viewBox: "0 0 2 2",
                                    fill: "none"
                                  }, [
                                    createVNode("circle", {
                                      cx: "1",
                                      cy: "1",
                                      r: "1",
                                      fill: "#1D7ED8"
                                    })
                                  ])) : createCommentVNode("", true),
                                  createVNode("p", { class: "text-xs text-blue leading-normal" }, toDisplayString(item.name), 1)
                                ]);
                              }), 128))
                            ]),
                            createVNode("p", { class: "text-xs text-secondary leading-normal" }, toDisplayString(unref(doctor).degree.name), 1)
                          ]),
                          createVNode("div", { class: "flex-y-center flex-wrap gap-2" }, [
                            createVNode("div", { class: "flex-y-center gap-1" }, [
                              createVNode(_component_IconRating, {
                                rating: unref(doctor).average_rating
                              }, null, 8, ["rating"]),
                              createVNode("div", { class: "px-1 py-0.5 rounded bg-[#FEF9EB] text-xs font-bold text-yellow leading-normal" }, toDisplayString(unref(doctor).average_rating.toFixed(1)), 1)
                            ]),
                            createVNode("p", { class: "text-sm text-red leading-normal" }, toDisplayString(_ctx.$t("ratingsCount", { count: unref(doctor).count_of_ratings })), 1)
                          ]),
                          createVNode("div", { class: "flex-y-center flex-wrap gap-1" }, [
                            createVNode("p", { class: "text-xs text-secondary" }, toDisplayString(_ctx.$t("narxi")) + ":", 1),
                            createVNode("div", { class: "flex-y-center flex-wrap gap-2" }, [
                              unref(doctor).discount_price ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-sm font-bold text-darkBlue leading-normal"
                              }, toDisplayString(("numberWithSpaces" in _ctx ? _ctx.numberWithSpaces : unref(numberWithSpaces))(unref(doctor).discount_price)) + " " + toDisplayString(_ctx.$t("sum")), 1)) : (openBlock(), createBlock("p", {
                                key: 1,
                                class: "text-sm font-bold text-darkBlue leading-normal"
                              }, toDisplayString(("numberWithSpaces" in _ctx ? _ctx.numberWithSpaces : unref(numberWithSpaces))(unref(doctor).original_price)) + " " + toDisplayString(_ctx.$t("sum")), 1)),
                              unref(doctor).discount_price ? (openBlock(), createBlock("div", {
                                key: 2,
                                class: "flex-y-center gap-1"
                              }, [
                                createVNode("p", { class: "text-xs text-red line-through leading-normal" }, toDisplayString(("numberWithSpaces" in _ctx ? _ctx.numberWithSpaces : unref(numberWithSpaces))(unref(doctor).original_price)) + " " + toDisplayString(_ctx.$t("sum")), 1),
                                createVNode("div", { class: "bg-blue bg-opacity-10 rounded px-1 py-0.5 text-xs font-bold text-blue leading-normal" }, " -" + toDisplayString(Math.floor(100 - unref(doctor).discount_price * 100 / unref(doctor).original_price)) + "% ", 1)
                              ])) : createCommentVNode("", true)
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-col gap-4" }, [
                        unref(selectedDay) ? (openBlock(), createBlock("div", {
                          key: 0,
                          onClick: ($event) => isDatePicker.value = true,
                          class: "bg-bg rounded-lg px-4 py-2 h-12 flex flex-col gap-0.5 cursor-pointer hover:bg-[#DBE3F0] active:bg-[#C2CEE1]"
                        }, [
                          createVNode("p", { class: "text-xs text-secondary leading-normal" }, toDisplayString(_ctx.$t("dateTime")), 1),
                          createVNode("p", { class: "text-sm text-darkBlue leading-normal" }, toDisplayString(_ctx.$t(`months[${unref(selectedMonth)}]`, { day: unref(selectedDay) })) + ", " + toDisplayString(unref(selectedHour).exactly_time.slice(0, 5)), 1)
                        ], 8, ["onClick"])) : createCommentVNode("", true),
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
                        createVNode(_component_BaseInput, {
                          placeholder: "input.birth",
                          modelValue: unref(birth_date),
                          "onUpdate:modelValue": ($event) => isRef(birth_date) ? birth_date.value = $event : null,
                          inputID: "birth-date",
                          type: "text",
                          "is-birth": true,
                          onOnBlur: ($event) => validate("birth"),
                          error: unref(errorBirth) ? "error.birth" : null
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onOnBlur", "error"]),
                        createVNode("div", { class: "flex flex-col gap-2" }, [
                          createVNode("div", { class: "bg-bg rounded-lg px-4 py-2 h-12 flex flex-col gap-0.5 cursor-default" }, [
                            createVNode("p", { class: "text-xs text-secondary leading-normal" }, toDisplayString(_ctx.$t("phoneToConfirm")), 1),
                            createVNode("p", { class: "text-sm text-darkBlue leading-normal" }, toDisplayString(("numberWithSpaces" in _ctx ? _ctx.numberWithSpaces : unref(numberWithSpaces))(`+998${unref(phone_number)}`, false)), 1)
                          ]),
                          createVNode("div", { class: "flex-y-center gap-2" }, [
                            createVNode("img", {
                              src: _imports_0,
                              alt: "info"
                            }),
                            createVNode("p", { class: "text-xs text-secondary" }, toDisplayString(_ctx.$t("phoneInfo")), 1)
                          ])
                        ])
                      ]),
                      createVNode(_component_BaseButton, {
                        onClick: bookDate,
                        state: "primary",
                        type: "submit",
                        "is-loading": unref(isSubmitting)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("booking")), 1)
                        ]),
                        _: 1
                      }, 8, ["is-loading"])
                    ], 40, ["onSubmit"])) : unref(isDatePicker) ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "flex flex-col gap-4"
                    }, [
                      createVNode("p", { class: "text-2xl text-darkBlue font-bold leading-normal" }, toDisplayString(_ctx.$t("filter.date")), 1),
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode(_component_BaseDatePicker, {
                          class: "w-2/3",
                          uniqueID: "flicking-day",
                          panels: unref(days),
                          onOnChange: onDayChange,
                          onMoveThrough: onDayMove,
                          "panel-index": unref(selectedDateIndex)
                        }, null, 8, ["panels", "panel-index"]),
                        createVNode(_component_BaseDatePicker, {
                          class: "w-1/3",
                          uniqueID: "flicking-hour",
                          panels: getHours(),
                          onOnChange: onHourChange,
                          onMoveThrough,
                          "panel-index": unref(selectedHourIndex)
                        }, null, 8, ["panels", "panel-index"])
                      ]),
                      createVNode(_component_BaseButton, {
                        state: "primary",
                        onClick: ($event) => selectDate(unref(selectedDateIndex), unref(selectedHourIndex)),
                        "is-disabled": !getHours().length
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(dateButtonText)), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick", "is-disabled"])
                    ])) : unref(isSubmitted) ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "flex-y-center flex-col gap-4"
                    }, [
                      !unref(isSubmittedError) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex-y-center flex-col gap-4"
                      }, [
                        createVNode("img", {
                          width: "96",
                          height: "96",
                          src: _imports_0$1,
                          alt: "submitted"
                        }),
                        createVNode("div", { class: "flex-y-center flex-col gap-2" }, [
                          createVNode("p", { class: "text-2xl font-bold text-darkBlue leading-normal text-center" }, toDisplayString(_ctx.$t("bookSuccess")), 1),
                          createVNode("p", { class: "text-sm text-darkBlue leading-normal text-center" }, toDisplayString(_ctx.$t("bookSuccessInfo")), 1)
                        ]),
                        createVNode(_component_BaseButton, {
                          class: "w-full",
                          state: "primary",
                          onClick: unSubmit
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("nice")), 1)
                          ]),
                          _: 1
                        })
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "flex-y-center flex-col gap-4"
                      }, [
                        createVNode("img", {
                          width: "96",
                          height: "96",
                          src: _imports_1$1,
                          alt: "submitted error"
                        }),
                        createVNode("div", { class: "flex-y-center flex-col gap-2" }, [
                          createVNode("p", { class: "text-2xl font-bold text-darkBlue leading-normal text-center" }, toDisplayString(_ctx.$t("bookError")), 1),
                          createVNode("p", { class: "text-sm text-darkBlue leading-normal text-center" }, toDisplayString(_ctx.$t("bookErrorInfo")), 1)
                        ]),
                        createVNode(_component_BaseButton, {
                          class: "w-full",
                          state: "primary",
                          onClick: unSubmit
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("retry")), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseButton, {
                          class: "w-full font-normal",
                          state: "secondary"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("help")), 1)
                          ]),
                          _: 1
                        })
                      ]))
                    ])) : createCommentVNode("", true),
                    createVNode("img", {
                      class: "absolute top-4 right-4 cursor-pointer",
                      onClick: ($event) => isFormOpen.value = false,
                      src: _imports_5$1,
                      alt: "close"
                    }, null, 8, ["onClick"])
                  ], 2)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_PageCommentModal, {
        "is-open": unref(isCommentOpen),
        onClose: ($event) => isCommentOpen.value = false,
        doctor: +unref(id)
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/doctor/[doctor-id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _doctorId_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5e62abda"]]);

export { _doctorId_ as default };
//# sourceMappingURL=_doctor-id_-02ec3906.mjs.map
