<script setup>
import { useReCaptcha } from 'vue-recaptcha-v3';
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

const { data: doctor } = await useMyFetch(
  `/${locale.value}/doctors/${id}/?device_id=${useDeviceId()}&format=json`
);
const doctorSchedule = doctor.value.schedule.filter(
  (item) => item.time.length > 0
);

const htmlToText = (html) => html?.replace(/<[^>]*>?/gm, "").slice(0, 160);
useSeoMeta({
  title: doctor.value.full_name || t("title"),
  description: htmlToText(doctor.value.description) || t("description"),
  ogTitle: doctor.value.full_name || t("title"),
  ogDescription: htmlToText(doctor.value.description) || t("description"),
  twitterTitle: doctor.value.full_name || t("title"),
  twitterDescription: htmlToText(doctor.value.description) || t("description"),
  twitterCard: "summary",
  ogImage: doctor.value.avatar || "/og-image.png",
  twitterImage: doctor.value.avatar || "/og-image.png",
});

const days = ref([]);
const hours = ref([]);

doctor.value.schedule.map((item, index) => {
  const date = new Date(item.date);
  const weekday = t(`weekdays[${date.getDay()}]`);
  days.value.push(`${weekday}, ${date.getDate().toString().padStart(2, "0")}`);
});

const user = useUserInfo();
if (!user.value) await usePersonalData(locale.value);

const first_name = ref(null);
const last_name = ref(null);
const birth_date = ref(null);
const phone_number = ref(null);

if (user.value) {
  first_name.value = user.value.first_name;
  last_name.value = user.value.last_name;
  birth_date.value = user.value.date_birthday
    ? user.value.date_birthday.split("-").reverse().join(".")
    : null;
  phone_number.value = user.value.phone_number;
}

const errorFirst = ref(false);
const errorLast = ref(false);
const errorBirth = ref(false);

const validate = (val = "all") => {
  if (val == "first" || val == "all") {
    if (!first_name.value || first_name.value.trim().length < 3)
      errorFirst.value = true;
    else errorFirst.value = false;
  }

  if (val == "last" || val == "all") {
    if (!last_name.value || last_name.value.trim().length < 3)
      errorLast.value = true;
    else errorLast.value = false;
  }

  if (val == "birth" || val == "all") {
    if (!birth_date.value) errorBirth.value = true;
    else if (birth_date.value.length == 10) {
      const day = birth_date.value.substring(0, 2);
      const month = birth_date.value.substring(3, 5);
      const year = birth_date.value.substring(6, 10);
      errorBirth.value = !isDateValid(year, month, day);
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
  getHours();
  selectedDateIndex.value = day;
  selectedHourIndex.value = hour;

  selectedDate.value = doctorSchedule[day];
  selectedHour.value = selectedDate.value?.time[hour];
  isFormOpen.value = true;
  isDatePicker.value = false;

  const date = new Date(selectedDate.value?.date);
  selectedMonth.value = date?.getMonth();
  selectedDay.value = date?.getDate();
};

const loginTitle = useLoginTitle();
const isLoginOpen = useLoginModal();
const useRedirectUrl = useRedirect();
watch(isFormOpen, (newVal) => {
  if (!newVal) isDatePicker.value = false;

  if (!isAuthenticated.value) {
    useRedirectUrl.value = {
      link: `/doctor/${id}`,
      action: "book",
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
  if (!doctorSchedule.length) return;

  let temp = [];
  doctorSchedule[selectedDateIndex.value].time.map((item, index) => {
    temp.push(item.exactly_time.slice(0, 5));
  });
  hours.value = temp;
  return temp;
}

getHours();

const recaptcha = async () => {
  await recaptchaInstance?.recaptchaLoaded();
  const token = await recaptchaInstance?.executeRecaptcha('yourActionHere');
  return token;
};

const bookDate = async () => {
  if (!validate("all")) return;
  isSubmitting.value = true;

  const body = {
    recaptcha_token: await recaptcha(),
  }

  const { data, error } = await useMyFetch(
    selectedDay.value
      ? `${locale.value}/receptions/update/${selectedHour.value.id}/`
      : `${locale.value}/receptions/create/${id}/`,
    {
      method: "POST",
      body,
      headers: {
        Authorization: `Bearer ${useCookie("access").value}`,
      },
    }
  );
  isSubmitted.value = true;
  if (data.value) {
    isSubmittedError.value = false;
    isSubmitting.value = true;
  } else isSubmittedError.value = true;
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
  if (isMonth) return date.getMonth();
  else return date.getDate();
};

const dateButtonText = computed(() => {
  if (hours.value.length > 0) {
    return `Записаться ${t(`months[${getSelectedDate(true)}]`, {
      day: getSelectedDate(),
    })}, в ${hours.value[selectedHourIndex.value]}`;
  } else return "Please select a date";
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
    if (!newVal) return;

    setTimeout(() => {
      if (useRedirectUrl.value.action == "book") isFormOpen.value = true;
      else if (useRedirectUrl.value.action == "comment")
        isCommentOpen.value = true;
    }, 1000);

    if (!user.value) return;
    first_name.value = user.value.first_name;
    last_name.value = user.value.last_name;
    birth_date.value = user.value.date_birthday
      ? user.value.date_birthday.split("-").reverse().join(".")
      : null;
    phone_number.value = user.value.phone_number;
  }
);
watch(isLoginOpen, (newVal) => {
  if (!newVal) isFormOpen.value = false;
});

const selectedDayQuery = useState("useSelectedDayQuery");
const selectedHourQuery = useState("useSelectedHourQuery");
onMounted(() => {
  let temp = 0;
  doctorSchedule.map((item, index) => {
    if (item.date == selectedDayQuery.value) temp = index;
  });
  if (selectedHourQuery.value) selectDate(temp, selectedHourQuery.value);
});
</script>

<template>
  <div class="container my-5">
    <div class="flex flex-col gap-5">
      <CardDetail :doctor="doctor" :selected-date-index="selectedDateIndex" :selected-hour-index="selectedHourIndex"
        @desc-open="isDescOpen = true" @on-apply="selectDate" />
      <CardComments :doctor="doctor" @comment="isCommentOpen = true" />
    </div>

    <!-- about doctor -->
    <Transition name="fade" mode="out-in">
      <PageModal v-if="isDescOpen" :is-open="isDescOpen" @close="isDescOpen = false">
        <template #body>
          <div
            class="bg-white rounded-2xl p-4 fixed-center w-[calc(100%-32px)] max-w-[804px] relative z-[99] max-h-[80%] overflow-auto scrollbar-style">
            <div class="flex flex-col gap-8">
              <p class="text-2xl text-darkBlue font-bold leading-normal text-center">
                {{ $t("about") }}
              </p>
              <div class="text-sm text-darkBlue whitespace-break-spaces desc" v-html="doctor.description"></div>
            </div>
            <img class="absolute top-4 right-4 cursor-pointer" @click="isDescOpen = false"
              src="~/assets/icons/close.svg" alt="close" />
          </div>
        </template>
      </PageModal>
    </Transition>

    <!-- form -->
    <div v-if="isAuthenticated">
      <Transition name="fade" mode="out-in">
        <PageModal v-if="isFormOpen" :is-open="isFormOpen" @close="isFormOpen = false">
          <template #body>
            <div :class="{ '!max-w-[400px]': isSubmitted }"
              class="bg-white rounded-2xl p-4 fixed-center w-[calc(100%-32px)] max-w-[804px] relative z-[99] max-h-[80%] overflow-auto scrollbar-style">
              <form @submit.prevent class="flex flex-col gap-8" v-if="!isDatePicker && !isSubmitted">
                <p class="text-2xl text-darkBlue font-bold leading-normal text-center">
                  {{ $t("book") }}
                </p>
                <div class="flex gap-4">
                  <div class="relative h-fit w-fit shrink-0 self-center">
                    <img class="rounded-lg" width="100" height="125" :src="doctor.avatar_300_375"
                      :alt="doctor.full_name" />
                    <div v-if="doctor.experience"
                      class="absolute bottom-0 left-0 w-full h-[18px] bg-red rounded-b-lg flex-center text-xs text-white">
                      <span>{{ $t("experience", { year: doctor.experience }) }}</span>
                    </div>
                  </div>
                  <div class="flex flex-col gap-2">
                    <p class="text-base font-bold text-darkBlue leading-normal">
                      {{ doctor.full_name }}
                    </p>
                    <div class="flex flex-col gap-0.5">
                      <div class="flex-y-center gap-1">
                        <div class="flex-y-center gap-1" v-for="(item, index) in doctor.specialties" :key="item.key">
                          <svg v-if="index != 0" xmlns="http://www.w3.org/2000/svg" width="2" height="2"
                            viewBox="0 0 2 2" fill="none">
                            <circle cx="1" cy="1" r="1" fill="#1D7ED8" />
                          </svg>
                          <p class="text-xs text-blue leading-normal">
                            {{ item.name }}
                          </p>
                        </div>
                      </div>
                      <p class="text-xs text-secondary leading-normal">
                        {{ doctor.degree.name }}
                      </p>
                    </div>
                    <div class="flex-y-center flex-wrap gap-2">
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
                    <div class="flex-y-center flex-wrap gap-1">
                      <p class="text-xs text-secondary">{{ $t("narxi") }}:</p>
                      <div class="flex-y-center flex-wrap gap-2">
                        <p class="text-sm font-bold text-darkBlue leading-normal" v-if="doctor.discount_price">
                          {{ numberWithSpaces(doctor.discount_price) }} {{ $t('sum') }}
                        </p>
                        <p class="text-sm font-bold text-darkBlue leading-normal" v-else>
                          {{ numberWithSpaces(doctor.original_price) }} {{ $t('sum') }}
                        </p>
                        <div class="flex-y-center gap-1" v-if="doctor.discount_price">
                          <p class="text-xs text-red line-through leading-normal">
                            {{ numberWithSpaces(doctor.original_price) }} {{ $t('sum') }}
                          </p>
                          <div
                            class="bg-blue bg-opacity-10 rounded px-1 py-0.5 text-xs font-bold text-blue leading-normal">
                            -{{ Math.floor(100 - (doctor.discount_price * 100) / doctor.original_price) }}%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col gap-4">
                  <div @click="isDatePicker = true" v-if="selectedDay"
                    class="bg-bg rounded-lg px-4 py-2 h-12 flex flex-col gap-0.5 cursor-pointer hover:bg-[#DBE3F0] active:bg-[#C2CEE1]">
                    <p class="text-xs text-secondary leading-normal">
                      {{ $t("dateTime") }}
                    </p>
                    <p class="text-sm text-darkBlue leading-normal">
                      {{ $t(`months[${selectedMonth}]`, { day: selectedDay }) }},
                      {{ selectedHour.exactly_time.slice(0, 5) }}
                    </p>
                  </div>
                  <BaseInput placeholder="input.name" v-model="first_name" inputID="first-name" type="text"
                    :error="errorFirst ? 'error.first' : null" @on-blur="validate('first')" />
                  <BaseInput placeholder="input.surname" v-model="last_name" inputID="last-name" type="text"
                    :error="errorLast ? 'error.last' : null" @on-blur="validate('last')" />
                  <BaseInput placeholder="input.birth" v-model="birth_date" inputID="birth-date" type="text"
                    :is-birth="true" @on-blur="validate('birth')" :error="errorBirth ? 'error.birth' : null" />
                  <div class="flex flex-col gap-2">
                    <div class="bg-bg rounded-lg px-4 py-2 h-12 flex flex-col gap-0.5 cursor-default">
                      <p class="text-xs text-secondary leading-normal">
                        {{ $t("phoneToConfirm") }}
                      </p>
                      <p class="text-sm text-darkBlue leading-normal">
                        {{ numberWithSpaces(`+998${phone_number}`, false) }}
                      </p>
                    </div>
                    <div class="flex-y-center gap-2">
                      <img src="~/assets/icons/info.svg" alt="info" />
                      <p class="text-xs text-secondary">
                        {{ $t("phoneInfo") }}
                      </p>
                    </div>
                  </div>
                </div>
                <BaseButton @click="bookDate" state="primary" type="submit" :is-loading="isSubmitting">
                  {{ $t("booking") }}</BaseButton>
              </form>
              <div class="flex flex-col gap-4" v-else-if="isDatePicker">
                <p class="text-2xl text-darkBlue font-bold leading-normal">
                  {{ $t("filter.date") }}
                </p>
                <div class="flex gap-2">
                  <BaseDatePicker class="w-2/3" uniqueID="flicking-day" :panels="days" @on-change="onDayChange"
                    @move-through="onDayMove" :panel-index="selectedDateIndex" />
                  <BaseDatePicker class="w-1/3" uniqueID="flicking-hour" :panels="getHours()" @on-change="onHourChange"
                    @move-through="onMoveThrough" :panel-index="selectedHourIndex" />
                </div>
                <BaseButton state="primary" @click="selectDate(selectedDateIndex, selectedHourIndex)"
                  :is-disabled="!getHours().length">
                  {{ dateButtonText }}
                </BaseButton>
              </div>
              <div class="flex-y-center flex-col gap-4" v-else-if="isSubmitted">
                <div class="flex-y-center flex-col gap-4" v-if="!isSubmittedError">
                  <img width="96" height="96" src="~/assets/icons/submitted.svg" alt="submitted" />
                  <div class="flex-y-center flex-col gap-2">
                    <p class="text-2xl font-bold text-darkBlue leading-normal text-center">
                      {{ $t("bookSuccess") }}
                    </p>
                    <p class="text-sm text-darkBlue leading-normal text-center">
                      {{ $t("bookSuccessInfo") }}
                    </p>
                  </div>
                  <BaseButton class="w-full" state="primary" @click="unSubmit">{{ $t("nice") }}</BaseButton>
                </div>
                <div class="flex-y-center flex-col gap-4" v-else>
                  <img width="96" height="96" src="~/assets/icons/submitted-error.svg" alt="submitted error" />
                  <div class="flex-y-center flex-col gap-2">
                    <p class="text-2xl font-bold text-darkBlue leading-normal text-center">
                      {{ $t("bookError") }}
                    </p>
                    <p class="text-sm text-darkBlue leading-normal text-center">
                      {{ $t("bookErrorInfo") }}
                    </p>
                  </div>
                  <BaseButton class="w-full" state="primary" @click="unSubmit">{{ $t("retry") }}</BaseButton>
                  <BaseButton class="w-full font-normal" state="secondary">{{ $t("help") }}</BaseButton>
                </div>
              </div>

              <img class="absolute top-4 right-4 cursor-pointer" @click="isFormOpen = false"
                src="~/assets/icons/close.svg" alt="close" />
            </div>
          </template>
        </PageModal>
      </Transition>
    </div>

    <!-- comment -->
    <PageCommentModal :is-open="isCommentOpen" @close="isCommentOpen = false" :doctor="+id" />
  </div>
</template>

<style scoped>
.desc {
  word-break: break-word;
}
</style>
