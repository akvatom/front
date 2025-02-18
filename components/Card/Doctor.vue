<script setup>
import Flicking from "@egjs/vue3-flicking";
import "../../node_modules/@egjs/vue3-flicking/dist/flicking-inline.css";
const { t } = useI18n();

const props = defineProps(["doctor"]);
const flicking = ref(null);

const today = new Date();
function getDateInfo(offset) {
  const targetDate = new Date();
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

  props.doctor.schedule?.forEach((el) => {
    const date = new Date(el.date);
    if (date.getDate() !== targetDate.getDate()) return;
    availHours = el.time;
  });

  return {
    date: targetDate.toISOString().split("T")[0],
    weekday: weekdayName,
    exactly_time: availHours,
    day: targetDate.getDate(),
  };
}
const schedule = ref([getDateInfo(0), getDateInfo(1), getDateInfo(2)]);

const numberOfFreeDaysThree = ref(0);
const selectedDay = ref(null);
const isToggle = ref(false);
schedule.value.map((item, index) => {
  if (item.exactly_time?.length) {
    numberOfFreeDaysThree.value++;
    if (selectedDay.value == null) selectedDay.value = index;
  }
});
const numberOfFreeDays = ref(0);
const firstFreeDay = ref(null);
props.doctor.schedule?.map((item) => {
  if (item.time?.length) {
    numberOfFreeDays.value++;
    if (firstFreeDay.value == null) {
      const date = new Date(item.date);
      firstFreeDay.value = t(`months.${date.getMonth()}`, {
        day: date.getDate(),
      });
    }
  }
});

watch(selectedDay, () => {
  handleSelected();
  updateSlicedTimes();
});
onMounted(() => {
  handleSelected();
  window.addEventListener("resize", () => handleSelected());
});

function handleSelected() {
  if (flicking.value) {
    flicking.value.moveTo(0, 1000);
  }
  isToggle.value = false;

  var widthOfNav = 0;
  var leftOfNav = 0;
  setTimeout(() => {
    const parent = document.getElementById(`doctor${props.doctor.id}`);
    if (!parent) return;

    const el = parent.querySelector("#block");
    const activeEl = parent.getElementsByClassName("group/day selected")[0];
    if (!activeEl || !el) return;

    widthOfNav = activeEl.offsetWidth;
    leftOfNav = activeEl.offsetLeft;
    el.style.width = `${widthOfNav}px`;
    el.style.left = `${leftOfNav}px`;
  }, 1);
}

const tooltip = ref(false);
let timer;
function showTooltip(idx) {
  clearTimeout(timer);
  tooltip.value = true;
  const parent = document.getElementById(`doctor${props.doctor.id}`);
  const el = parent.querySelector("#tooltip");
  if (idx == 0) {
    el.style.left = "0px";
    ("unset");
  } else if (idx == 1) {
    el.style.transform = "translateX(0)";
    el.style.right = el.style.left = "50%";
    el.style.transform = "translateX(-50%)";
    el.style.right = "unset";
  } else if (idx == 2) {
    el.style.right = "0px";
    el.style.transform = "translateX(0)";
    el.style.left = "unset";
  }
  timer = setTimeout(() => {
    tooltip.value = false;
  }, 3000);
}
function hideTooltip() {
  setTimeout(() => {
    tooltip.value = false;
  }, 1);
}
// TODO mapto

const options = { align: "prev", bound: true, moveType: "freeScroll" };

const selectedDayQuery = useState("useSelectedDayQuery", () => null);
const selectedHourQuery = useState("useSelectedHourQuery", () => null);

const selectAppointment = (hour) => {
  selectedDayQuery.value = schedule.value[selectedDay.value].date;
  selectedHourQuery.value = hour;
};

const slicedTimes = ref(
  schedule.value[selectedDay.value]?.exactly_time?.length > 10
    ? schedule.value[selectedDay.value].exactly_time.slice(0, 9)
    : schedule.value[selectedDay.value]?.exactly_time
);
const count = ref(slicedTimes.value?.length);

const dayChanging = ref(false);
function updateSlicedTimes() {
  dayChanging.value = true;
  slicedTimes.value =
    schedule.value[selectedDay.value]?.exactly_time?.length > 10
      ? schedule.value[selectedDay.value].exactly_time.slice(0, 9)
      : schedule.value[selectedDay.value]?.exactly_time;
  count.value = slicedTimes.value?.length;
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
  if (newVal) pushWithDelay();
  else if (!newVal && !dayChanging.value) popWithDelay();
  dayChanging.value = false;
});
</script>

<template>
  <div
    class="bg-white rounded-2xl p-2 flex flex-col max-[512px]:max-w-[calc(100vw-32px)] md:w-[804px] w-full transition-shadow duration-300 card-shadow min-w-[330px] relative"
    :id="`doctor${doctor.id}`"
  >
    <NuxtLinkLocale
      :to="`/doctor/${doctor.id}`"
      class="absolute top-0 left-0 w-full h-full"
    ></NuxtLinkLocale>
    <div class="flex flex-col md:flex-row">
      <!-- avatar and name -->
      <div class="flex flex-col md:w-1/2">
        <div class="flex gap-4 p-2 pb-0">
          <div
            class="border border-dividers rounded-[9px] relative shrink-0 h-fit pointer-events-none"
          >
            <img
              class="rounded-lg max-md:w-[100px] max-md:h-[125px]"
              width="110"
              height="138"
              :src="doctor.avatar_300_375"
              alt="avatar"
            />
            <div
              class="bg-red rounded-b-lg text-xs md:text-[15px] text-white text-center absolute bottom-0 left-0 w-full h-[18px] md:h-[26px] flex-center"
              v-if="doctor.experience"
            >
              {{ $t("experience", { year: doctor.experience }) }}
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <div class="flex flex-col gap-2">
              <p
                class="text-base md:text-[18px] text-darkBlue font-bold leading-normal"
              >
                {{ doctor.full_name }}
              </p>
              <div class="flex flex-col gap-0.5">
                <div
                  class="flex gap-1 items-center flex-wrap"
                  v-if="doctor.specialties"
                >
                  <span
                    v-for="(item, index) in doctor.specialties.slice(0, 3)"
                    class="text-xs md:text-[14px] font-bold leading-normal text-blue flex gap-1 items-center"
                  >
                    <svg
                      v-if="index != 0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="2"
                      height="2"
                      viewBox="0 0 2 2"
                      fill="none"
                    >
                      <circle cx="1" cy="1" r="1" fill="#1D7ED8" />
                    </svg>
                    {{ item.name }}
                  </span>
                </div>
                <div
                  class="text-xs md:text-[14px] leading-normal text-secondary"
                  v-if="doctor.degree.name"
                >
                  {{ doctor.degree.name }}
                </div>
              </div>
            </div>
            <div class="flex gap-2 items-center flex-wrap">
              <div class="flex items-center gap-1">
                <IconRating :rating="doctor.average_rating" />
                <div
                  class="px-1 py-0.5 rounded bg-[#FEF9EB] text-xs md:text-[14px] leading-normal font-bold text-yellow"
                >
                  {{ doctor.average_rating.toFixed(1) }}
                </div>
              </div>
              <div class="text-xs md:text-[14px] leading-normal text-red">
                {{ $t("ratingsCount", { count: doctor.count_of_ratings }) }}
              </div>
            </div>
            <!-- price -->
            <div class="max-md:hidden">
              <div class="flex flex-col gap-1 p-3 bg-bg rounded-lg">
                <p class="text-xs text-secondary leading-normal">
                  {{ $t("price") }}
                </p>
                <div class="flex-y-center gap-1">
                  <div class="text-sm font-bold text-darkBlue leading-normal">
                    {{
                      numberWithSpaces(
                        doctor.discount_price ?? doctor.original_price
                      )
                    }}
                    сум
                  </div>
                  <div
                    class="flex gap-1 items-center"
                    v-if="doctor.discount_price"
                  >
                    <div class="text-xs text-red line-through">
                      {{ numberWithSpaces(doctor.original_price) }}
                      сум
                    </div>
                    <div
                      class="bg-blue bg-opacity-10 rounded px-1 py-0.5 text-xs font-bold text-blue leading-normal"
                    >
                      -{{
                        Math.floor(
                          100 -
                            (doctor.discount_price * 100) /
                              doctor.original_price
                        )
                      }}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- price -->
        <div class="px-2 pt-4 md:hidden">
          <div class="flex flex-col gap-1 p-3 bg-bg rounded-lg">
            <p class="text-xs text-secondary leading-normal">
              {{ $t("price") }}:
            </p>
            <div class="flex-y-center gap-1">
              <div class="text-sm font-bold text-darkBlue leading-normal">
                {{
                  numberWithSpaces(
                    doctor.discount_price ?? doctor.original_price
                  )
                }}
                сум
              </div>
              <div class="flex gap-1 items-center" v-if="doctor.discount_price">
                <div class="text-xs text-red line-through">
                  {{ numberWithSpaces(doctor.original_price) }}
                  сум
                </div>
                <div
                  class="bg-blue bg-opacity-10 rounded px-1 py-0.5 text-xs font-bold text-blue leading-normal"
                >
                  -{{
                    Math.floor(
                      100 -
                        (doctor.discount_price * 100) / doctor.original_price
                    )
                  }}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 3-day schedule -->
      <div class="flex flex-col md:w-1/2">
        <div class="flex flex-col">
          <div
            class="px-2 py-4 flex flex-col gap-3 border-b border-dividers"
            v-if="numberOfFreeDaysThree"
          >
            <div class="flex gap-1 items-center">
              <img src="~/assets/icons/clock.svg" alt="clock" />
              <p class="text-xs md:text-[14px] leading-normal text-secondary">
                {{ $t("selectDate") }}
              </p>
            </div>
            <div class="p-0.5 flex bg-bg rounded-lg relative">
              <div
                id="block"
                class="bg-white shadow-[0px_3px_1px_0px_rgba(0,0,0,0.04),0px_3px_8px_0px_rgba(0,0,0,0.12)] h-7 absolute top-0.5 rounded-lg transition-300"
              ></div>
              <div
                class="group/day px-2 py-1.5 h-7 relative w-1/3 flex justify-center items-center cursor-pointer"
                v-for="(item, index) in schedule"
                :class="{
                  selected: selectedDay == index,
                  disabled: !schedule[index].exactly_time.length,
                }"
                @click="
                  schedule[index].exactly_time.length
                    ? (selectedDay = index)
                    : showTooltip(index)
                "
              >
                <div
                  v-if="selectedDay == 0 && index == 1"
                  class="w-[0.65px] h-5 rounded-[0.5px] bg-dividers absolute right-[1.3px] top-1"
                ></div>
                <span
                  class="text-xs text-darkBlue leading-5 group-[.selected]/day:font-bold group-[.disabled]/day:text-secondary transition-300"
                >
                  {{ item.weekday }}, {{ item.day }}
                </span>
                <div
                  v-if="selectedDay == 2 && index == 0"
                  class="w-[0.65px] h-5 rounded-[0.5px] bg-dividers absolute right-[1.3px] top-1"
                ></div>
              </div>
              <!-- tooltip -->
              <div
                id="tooltip"
                class="absolute bottom-[calc(100%+6px)] transition-300 w-fit"
                :style="`opacity: ${tooltip ? 1 : 0}`"
                v-click-outside="hideTooltip"
              >
                <div
                  class="relative p-3 rounded-[10px] bg-darkBlue bg-opacity-80 text-xs text-white shadow-[0px_18px_88px_-4px_rgba(24,39,75,0.14),_0px_8px_28px_-6px_rgba(24,39,75,0.12)]"
                >
                  {{ $t("allbusy") }}
                </div>
                <img
                  class="absolute top-full left-1/2 -translate-x-1/2"
                  width="13.6"
                  height="6"
                  src="~/assets/icons/tooltip-arrow.svg"
                  alt="arrow"
                />
              </div>
            </div>
            <Flicking
              class="-mx-4 px-4 md:hidden hours !w-auto"
              :options="options"
              ref="flicking"
            >
              <NuxtLinkLocale
                :to="`/doctor/${doctor.id}`"
                draggable="false"
                class="mr-2 rounded-lg bg-blue hover:bg-[#176BC2] active:bg-[#176BC2]"
                v-for="(item, index) in schedule[selectedDay].exactly_time"
                :key="item.id"
                @click="selectAppointment(index)"
              >
                <div class="flex-center h-8 w-[60px] text-sm text-white">
                  {{ item.exactly_time?.split(":").slice(0, 2).join(":") }}
                </div>
              </NuxtLinkLocale>
            </Flicking>
            <div
              class="flex flex-wrap gap-2 max-md:hidden transition-300 select-none overflow-y-hidden"
            >
              <NuxtLinkLocale
                class="hour rounded-lg bg-blue flex-center w-[60px] h-[32px] text-sm text-white transition-300 z-0"
                :to="`/doctor/${doctor.id}`"
                v-for="(item, index) in slicedTimes"
                :key="item.id"
                @click="selectAppointment(index)"
              >
                {{ item.exactly_time?.split(":").slice(0, 2).join(":") }}
              </NuxtLinkLocale>
              <div
                @click="isToggle = !isToggle"
                v-if="schedule[selectedDay].exactly_time.length > 10"
                class="hour group rounded-lg border border-blue bg-white text-darkBlue hover:text-white text-sm flex-center w-[60px] h-[32px] transition-300 cursor-pointer z-0"
              >
                <div
                  class="w-4 h-4 flex-center transition-300"
                  :class="{ '-rotate-180': isToggle }"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="4"
                    viewBox="0 0 8 4"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.276332 0.354297C0.448837 0.138666 0.763483 0.103705 0.979114 0.27621L4.0001 2.693L7.02109 0.27621C7.23672 0.103705 7.55136 0.138666 7.72387 0.354297C7.89637 0.569928 7.86141 0.884574 7.64578 1.05708L4.31245 3.72375C4.12984 3.86983 3.87036 3.86983 3.68775 3.72375L0.354419 1.05708C0.138788 0.884574 0.103827 0.569928 0.276332 0.354297Z"
                      fill="#002168"
                      class="group-hover:fill-white transition-300"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            class="px-2 py-4 flex flex-col gap-2 border-b border-dividers"
            v-else
          >
            <div class="flex gap-1 items-center">
              <img src="~/assets/icons/clock.svg" alt="clock" />
              <div class="text-xs text-secondary">
                {{
                  firstFreeDay ? $t("firstFree[0]") : $t("submitApplication[0]")
                }}
              </div>
            </div>
            <NuxtLinkLocale
              :to="`/doctor/${doctor.id}`"
              class="bg-blue hover:bg-[#176BC2] active:bg-[#176BC2] cursor-pointer rounded-lg px-3 py-2 text-sm text-white w-fit z-0"
            >
              {{
                firstFreeDay
                  ? $t("firstFree[1]", { date: firstFreeDay })
                  : $t("submitApplication[1]")
              }}
            </NuxtLinkLocale>
          </div>
        </div>
        <a
          :href="`geo:${doctor.clinic.latitude},${doctor.clinic.longitude}`"
          class="flex-y-center justify-between py-4 px-2 hover:bg-[#E5E9F0] active:bg-[#CCD3E1] rounded-xl max-md:hidden z-0"
        >
          <div class="flex gap-1 items-center w-3/5">
            <IconLocation />
            <div class="flex flex-col gap-1">
              <div class="text-xs text-secondary line-clamp-1">
                {{ doctor.clinic.address }}
              </div>
              <div class="text-sm text-darkBlue font-bold">
                {{ doctor.clinic.name }}
              </div>
            </div>
          </div>
          <div class="flex gap-1 items-center">
            <div class="w-[18px] h-[18px] flex items-center justify-center">
              <img src="~/assets/icons/metro.svg" alt="metro" />
            </div>
            <div class="flex flex-col gap-0.5">
              <div class="text-xs text-secondary">
                {{ usePrettyDistance(doctor.clinic.distance) }}
              </div>
              <div class="text-sm text-darkBlue font-bold leading-4">
                {{ doctor.clinic.metro.name }}
              </div>
            </div>
          </div>
        </a>
      </div>
      <!-- location -->
      <a
        :href="`geo:${doctor.clinic.latitude},${doctor.clinic.longitude}`"
        class="flex gap-8 items-center py-4 px-2 hover:bg-[#E5E9F0] active:bg-[#CCD3E1] rounded-xl md:hidden z-0"
      >
        <div class="flex gap-1 items-center w-3/5">
          <IconLocation />
          <div class="flex flex-col gap-1">
            <div class="text-xs text-secondary line-clamp-1">
              {{ doctor.clinic.address }}
            </div>
            <div class="text-sm text-darkBlue font-bold">
              {{ doctor.clinic.name }}
            </div>
          </div>
        </div>
        <div class="flex gap-1 items-center">
          <div class="w-[18px] h-[18px] flex items-center justify-center">
            <img src="~/assets/icons/metro.svg" alt="metro" />
          </div>
          <div class="flex flex-col gap-0.5">
            <div class="text-xs text-secondary">
              {{ usePrettyDistance(doctor.clinic.distance) }}
            </div>
            <div class="text-sm text-darkBlue font-bold leading-4">
              {{ doctor.clinic.metro.name }}
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.card-shadow:hover {
  box-shadow: 0px 12px 42px -4px rgba(24, 39, 75, 0.12),
    0px 8px 18px -6px rgba(24, 39, 75, 0.12);
}

.card-shadow:active {
  box-shadow: 0px 8px 8px -4px rgba(24, 39, 75, 0.08),
    0px 4px 6px -4px rgba(24, 39, 75, 0.12);
}

.hour:hover {
  background: linear-gradient(
      0deg,
      rgba(0, 33, 104, 0.2) 0%,
      rgba(0, 33, 104, 0.2) 100%
    ),
    #1d7ed8;
}

.hour:active {
  background: linear-gradient(
      0deg,
      rgba(0, 33, 104, 0.2) 0%,
      rgba(0, 33, 104, 0.2) 100%
    ),
    #1d7ed8;
}

@keyframes toggle {
  50% {
    max-height: 0;
  }

  100% {
    max-height: 500px;
  }
}

.toggle-day {
  animation: toggle 500ms ease-in-out forwards;
}

@media (hover: none) {
  .card-shadow:active,
  .card-shadow:hover {
    box-shadow: none;
  }
}
</style>

<style>
.hours .flicking-camera {
  position: absolute;
}

.hours.flicking-viewport {
  height: 32px;
}
</style>
