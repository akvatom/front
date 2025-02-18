<script setup>
const { t } = useI18n();
const props = defineProps(["doctor", "selectedDateIndex", "selectedHourIndex"]);

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
  if (!schedule.length) return;

  let temp = [];
  schedule[selectedDay.value].time.map((item, index) => {
    temp.push(item.exactly_time.slice(0, 5));
  });
  hours.value = temp;
}

const getSelectedDate = (isMonth = false) => {
  let selected = schedule[selectedDay.value].date;
  const date = new Date(selected);
  if (isMonth) return date.getMonth();
  else return date.getDate();
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
    return t(`bookTime`, { time: hours.value[selectedHour.value], date: t(`months[${getSelectedDate(true)}]`, { day: getSelectedDate(), }) });
  } else return "Please select a date";
});

const selectedDayQuery = useState("useSelectedDayQuery");
const selectedHourQuery = useState("useSelectedHourQuery");
schedule.map((day, index) => {
  if (day.date == selectedDayQuery.value) {
    selectedDay.value = index;
    getHours();
    day.time.map((hour, index) => {
      if (hour.id == selectedHourQuery.value) {
        selectedHour.value = index;
      }
    });
  }
});
</script>

<template>
  <div class="flex max-lg:flex-col gap-5">
    <div class="p-4 bg-white rounded-2xl flex max-md:flex-col gap-4 max-md:mt-[130px] lg:grow">
      <div class="relative h-fit w-fit shrink-0 max-md:self-center max-md:-mt-[142px]">
        <img class="rounded-2xl" width="188" height="236" :src="doctor.avatar_300_375" :alt="doctor.full_name" />
        <div v-if="doctor.experience"
          class="absolute bottom-0 left-0 w-full h-6 bg-red rounded-b-2xl flex-center text-sm text-white">
          <span>{{ $t("experience", { year: doctor.experience }) }}</span>
        </div>
      </div>
      <div class="md:p-4 flex flex-col gap-4 flex-grow">
        <p class="text-lg font-bold text-darkBlue leading-normal">
          {{ doctor.full_name }}
        </p>
        <div class="flex gap-4">
          <div class="flex flex-col justify-between gap-1">
            <div class="flex-y-center flex-wrap gap-1">
              <div class="flex-y-center gap-1" v-for="(item, index) in doctor.specialties" :key="item.key">
                <svg v-if="index != 0" xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2"
                  fill="none">
                  <circle cx="1" cy="1" r="1" fill="#1D7ED8" />
                </svg>
                <p class="text-sm text-blue leading-normal">{{ item.name }}</p>
              </div>
            </div>
            <p class="text-sm text-secondary leading-normal">
              {{ doctor.degree.name }}
            </p>
          </div>
          <div class="bg-dividers w-[1px]"></div>
          <div class="flex flex-col justify-between gap-1">
            <div class="flex-y-center gap-1">
              <IconRating :rating="doctor.average_rating" />
              <div class="px-1 py-0.5 rounded bg-[#FEF9EB] text-xs font-bold text-yellow leading-normal">
                {{ doctor.average_rating.toFixed(1) }}
              </div>
            </div>
            <p class="text-sm text-red leading-normal">
              {{ $t("ratingsCount", { count: doctor.count_of_ratings }) }}
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <div class="line-clamp-3 md:line-clamp-6 text-sm text-darkBlue desc" v-html="doctor.description"></div>
          <div class="text-sm text-red leading-normal flex cursor-pointer" @click="$emit('descOpen')">
            {{ $t("moreAbout") }}
            <span class="w-[18px] h-[18px] flex-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M1.14863 9.18922C0.906045 8.99515 0.866714 8.64117 1.06078 8.39859L3.77967 4.99998L1.06078 1.60137C0.866714 1.35878 0.906045 1.00481 1.14863 0.81074C1.39121 0.616672 1.74519 0.656003 1.93926 0.898588L4.93926 4.64859C5.10361 4.85402 5.10361 5.14593 4.93926 5.35137L1.93926 9.10137C1.74519 9.34396 1.39121 9.38329 1.14863 9.18922Z"
                  fill="#E82C71" />
              </svg>
            </span>
          </div>
        </div>
        <hr class="border-dividers border-t" />
        <div class="flex flex-col gap-1">
          <p class="text-xs text-secondary">{{ $t("narxi") }}:</p>
          <div class="flex-y-center gap-2">
            <p class="text-sm font-bold text-darkBlue leading-normal" v-if="doctor.discount_price">
              {{ numberWithSpaces(doctor.discount_price) }} сум
            </p>
            <p class="text-sm font-bold text-darkBlue leading-normal" v-else>
              {{ numberWithSpaces(doctor.original_price) }} сум
            </p>
            <div class="flex-y-center gap-1" v-if="doctor.discount_price">
              <p class="text-xs text-red line-through leading-normal">
                {{ numberWithSpaces(doctor.original_price) }} сум
              </p>
              <div class="bg-blue bg-opacity-10 rounded px-1 py-0.5 text-xs font-bold text-blue leading-normal">
                -{{ Math.floor(100 - (doctor.discount_price * 100) / doctor.original_price) }}%
              </div>
            </div>
          </div>
        </div>
        <hr class="border-dividers border-t" />
        <a :href="`geo:${doctor.clinic.latitude},${doctor.clinic.longitude}`"
          class="flex gap-8 items-center py-4 px-2 hover:bg-[#E5E9F0] active:bg-[#CCD3E1] rounded-xl">
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
    <div class="p-4 bg-white h-fit rounded-2xl lg:w-[392px] lg:shrink-0">
      <div class="flex flex-col gap-4" v-if="schedule.length">
        <div class="flex-y-center gap-1">
          <img src="~/assets/icons/clock.svg" alt="clock" />
          <p class="text-xs text-secondary leading-normal">
            {{ $t("dateTime") }}:
          </p>
        </div>
        <div class="flex gap-2 z-0">
          <BaseDatePicker class="w-2/3" uniqueID="flicking-day" :panels="days" @on-change="onDayChange"
            @move-through="onDayMove" :selected="selectedDateIndex" />
          <BaseDatePicker class="w-1/3" uniqueID="flicking-hour" :panels="hours" @on-change="onHourChange"
            @move-through="onMoveThrough" :selected="selectedHourIndex" :panel-index="selectedHourQuery" />
        </div>
        <BaseButton state="primary" @click="$emit('onApply', selectedDay, selectedHour)" :is-disabled="!hours.length">
          {{ dateButtonText }}
        </BaseButton>
      </div>
      <div class="flex flex-col gap-4" v-else>
        <div class="flex-y-center gap-1">
          <img src="~/assets/icons/clock.svg" alt="clock" />
          <p class="text-xs text-secondary leading-normal">
            {{ $t("submitApplication[0]") }}
          </p>
        </div>
        <BaseButton state="primary" @click="$emit('onApply', null, null)">
          {{ $t("submitApplication[1]") }}
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.desc {
  word-break: break-word;
}
</style>
