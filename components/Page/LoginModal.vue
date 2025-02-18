<script setup>
import Flicking from "@egjs/vue3-flicking";
import { useToastText } from "~/composables/states";
const { locale, t } = useI18n();
const localePath = useLocalePath();

const useRedirectUrl = useRedirect();
const useToast = useToastOpen();
const useToastTitle = useToastText();
const isOpen = useLoginModal();
const title = useLoginTitle();
const progress = ref(0);
const digits = ref(["", "", "", ""]);
watch(isOpen, (val) => {
  if (val) {
    setTimeout(() => {
      const el = document.getElementById("phone-number");
      el.focus();
    }, 100);
  } else progress.value = 0;
});

const options = { bound: true, bounce: 0 };

const active = ref(0);
const phone = ref(null);

const onMove = (e) => {
  e.currentTarget.panels.forEach((panel) => {
    if (
      (panel.progress < 0.5 && panel.progress > 0) ||
      (panel.progress < 0 && panel.progress > -0.5)
    )
      active.value = panel.index;
  });
};

const handleFocus = () => {
  if (!phone.value) phone.value = "+998 ";
};
const handleBlur = () => {
  if (phone.value == "+998 ") phone.value = null;
};
const sendSms = async () => {
  if (!phone.value || timer.value != 0) return;

  const number = phone.value.replace(/\D/g, "").replace("998", "");
  if (number.length == 9) {
    progress.value = 1;
    setTimeout(() => {
      document.getElementById("digit0").focus();
    }, 100);
    startTimer();
    const body = {
      phone_number: number,
    };
    const { data } = await useMyFetch(`${locale.value}/auth/phone-number/`, {
      method: "POST",
      body: body,
    });
  }
};

const timer = ref(0);
const refreshIntervalId = ref(null);
const startTimer = () => {
  timer.value = 60;
  refreshIntervalId.value = setInterval(() => {
    if (timer.value > 0) timer.value--;
  }, 1000);
};

function moveToNext(event, index) {
  wrongCode.value = false;
  if (event.target) {
    if (event.target.value.length == 4) {
      for (let i = 0; i < 4; i++) {
        const item = document.getElementById(`digit${i}`);
        const digit = event.target.value.toString().charAt(i);
        digits.value[i] = digit;
        item.focus();
      }
    }
  }
  if (event.target.value.length === event.target.maxLength) {
    const nextDigit = document.getElementById(`digit${index + 1}`);
    if (nextDigit) {
      nextDigit.focus();
    }
  }
  if (index == 3) {
    submit();
  }
}

const moveBack = () => {
  clearInterval(refreshIntervalId.value);
  timer.value = 0;
  progress.value = 0;
};

const handleKeypress = (event, index) => {
  var previous, next;
  if (index > 0) {
    previous = document.getElementById(`digit${index - 1}`);
  }
  if (index < 6) {
    next = document.getElementById(`digit${index + 1}`);
  }
  if (event.keyCode == 8) {
    if (event.target.value) {
      digits.value[index] = "";
    } else if (previous) {
      previous.focus();
      previous.value = "";
      digits.value[index - 1] = "";
    }
  }

  if (
    (event.keyCode >= 48 && event.keyCode <= 57) ||
    (event.keyCode >= 96 && event.keyCode <= 105)
  ) {
    if (digits.value[index]) {
      digits.value[index] = "";
    }
  }

  if (event.keyCode == 37 && previous) {
    previous.focus();
  }

  if (
    event.key === "ArrowLeft" ||
    event.key === "ArrowRight" ||
    event.key === "ArrowUp" ||
    event.key === "ArrowDown"
  ) {
    // Prevent the default arrow key behavior
    event.preventDefault();
  }
};

const loading = ref(false);
const wrongCode = ref(false);

const access = ref(null);
const refresh = ref(null);
async function submit() {
  loading.value = true;
  const phone_number = phone.value.replace(/\D/g, "").replace("998", "");
  let code = digits.value.join("");

  const res = await useAuthUser({ phone_number, code }, locale.value);
  if (res) {
    access.value = res.access_token;
    refresh.value = res.refresh_token;

    const user = useUserInfo();
    if (!user.value) await usePersonalData(locale.value, access.value);
    if (
      user.value.date_birthday &&
      user.value.first_name &&
      user.value.last_name &&
      user.value.gender
    ) {
      isOpen.value = false;
      useToast.value = true;
      useToastTitle.value = "toast.registered";
      const accessToken = useCookie("access");
      const refreshToken = useCookie("refresh");
      accessToken.value = access.value;
      refreshToken.value = refresh.value;
      if (!useRedirectUrl.value) navigateTo(localePath("/"));
      else navigateTo(localePath(useRedirectUrl.value.link));
    } else {
      progress.value = 2;
      setTimeout(() => {
        const el = document.getElementById("first-name");
        el.focus();
      }, 100);
    }
  } else {
    wrongCode.value = true;
  }
  loading.value = false;
}

const first_name = ref(null);
const last_name = ref(null);
const gender = ref(null);
const birth_date = ref(null);

const errorFirst = ref(false);
const errorLast = ref(false);
const errorGender = ref(false);
const errorBirth = ref(false);

const genderOptions = useGenderOptions();
const onGenderChange = (val) => {
  gender.value = val;
  errorGender.value = false;
};

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

  if (val == "gender" || val == "all") {
    if (gender.value == null) errorGender.value = true;
    else errorGender.value = false;
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

  return (
    !errorFirst.value &&
    !errorLast.value &&
    !errorGender.value &&
    !errorBirth.value
  );
};

const submitUserInfo = async () => {
  if (validate()) {
    const date = birth_date.value.split(".");
    const number = phone.value.replace(/\D/g, "").replace("998", "");
    const body = {
      first_name: first_name.value,
      last_name: last_name.value,
      gender: genderOptions.value[gender.value].value,
      date_birthday: `${date[2]}-${date[1]}-${date[0]}`,
      phone_number: number,
    };

    const accessToken = useCookie("access");
    const refreshToken = useCookie("refresh");
    const isAuthenticated = useAuthenticated();
    const userInfo = useUserInfo();
    const { data } = await useMyFetch(`${locale.value}/auth/update-profile/`, {
      method: "PUT",
      body: body,
      headers: {
        Authorization: `Bearer ${access.value}`,
      },
    });
    if (data.value) {
      userInfo.value = data.value;
      accessToken.value = access.value;
      refreshToken.value = refresh.value;
      isAuthenticated.value = true;

      isOpen.value = false;
      useToast.value = true;
      useToastTitle.value = "toast.registered";
      if (!useRedirectUrl.value) navigateTo(localePath("/"));
      else navigateTo(localePath(useRedirectUrl.value.link));
    }
  } else console.log("Failed to submit");
};

const isDateValid = (dateStr) => {
  const date = new Date(dateStr);
  return !isNaN(date.getTime());
};

const phoneText = computed(() => {
  return t("sentto", {
    phone: `<span style="white-space: nowrap;">${numberWithSpaces(
      phone.value,
      false
    )}</span>`,
  });
});
</script>

<template>
  <div>
    <Transition name="fade" mode="out-in">
      <PageModal
        v-if="isOpen"
        :is-open="isOpen"
        @close="progress == 2 ? validate('all') : (isOpen = false)"
      >
        <template #body>
          <div
            class="fixed-center z-[99] flex rounded-2xl overflow-hidden max-md:w-[calc(100%-32px)] max-md:max-w-[360px]"
          >
            <div
              class="bg-blue p-8 flex flex-col justify-between gap-10 md:h-[600px] w-[300px] max-md:hidden"
            >
              <img
                src="~/assets/icons/logo-small-white.svg"
                alt="logo"
                class="h-7"
              />
              <div class="flex flex-col gap-4">
                <p
                  class="text-2xl text-white font-bold leading-normal text-center"
                >
                  {{ $t("app") }}
                </p>
                <p class="text-white text-2xl font-caveat text-center">
                  {{ $t("qrcode") }}
                </p>
                <div class="flex gap-2">
                  <div class="bg-white rounded-2xl p-1">
                    <img
                      src="~/assets/icons/qr-1.svg"
                      alt="QR code"
                      draggable="false"
                    />
                  </div>
                  <div class="bg-white rounded-2xl p-1">
                    <img
                      src="~/assets/icons/qr-2.svg"
                      alt="QR code"
                      draggable="false"
                    />
                  </div>
                </div>
              </div>
              <div class="flex-y-center flex-col gap-10">
                <div class="flex justify-between w-full">
                  <a
                    href="https://apps.apple.com/us/app/clindoc/id6476093035"
                    target="_blank"
                  >
                    <img src="~/assets/icons/app-store.svg" alt="App Store" />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=uz.clindoc.redmedia"
                    target="_blank"
                  >
                    <img
                      src="~/assets/icons/google-play.svg"
                      alt="Google Play"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              class="bg-white w-full md:w-[368px] p-8 flex-center relative overflow-clip"
            >
              <form
                @submit.prevent
                class="flex flex-col gap-8"
                v-if="progress == 0"
              >
                <p class="text-2xl font-bold text-darkBlue text-center">
                  {{ $t(title) }}
                </p>
                <BaseInput
                  placeholder="input.phone"
                  v-model="phone"
                  inputID="phone-number"
                  type="tel"
                  @on-focus="handleFocus"
                  @on-blur="handleBlur"
                />
                <BaseButton @click="sendSms" state="primary" type="submit"
                  >{{ $t("getcode") }}
                </BaseButton>
              </form>
              <div class="flex flex-col gap-8" v-else-if="progress == 1">
                <div class="flex flex-col gap-2">
                  <p
                    class="text-2xl text-darkBlue font-bold leading-normal text-center"
                  >
                    {{ $t("entercode") }}
                  </p>
                  <div
                    class="text-xs text-secondary leading-normal text-center"
                    v-html="phoneText"
                  ></div>
                </div>
                <div class="flex gap-2 self-center">
                  <input
                    :id="`digit${index}`"
                    type="number"
                    v-for="(digit, index) in digits"
                    :key="digit.key"
                    v-model="digits[index]"
                    min="0"
                    max="9"
                    maxlength="1"
                    @input="moveToNext($event, index)"
                    @keydown="handleKeypress($event, index)"
                    :class="{ '!bg-[#FFEBF2] focus:!border-red': wrongCode }"
                    class="w-[46px] h-[60px] rounded-lg bg-bg text-2xl text-darkBlue font-bold leading-normal text-center caret-darkBlue border border-[rgba(0,0,0,0)] focus:border-blue focus:bg-white focus:outline-none hover:bg-[#E8EAF2] transition-100"
                  />
                </div>
                <div class="flex flex-col gap-4">
                  <BaseButton
                    class="font-normal"
                    state="secondary"
                    :is-disabled="timer > 0"
                    @click="sendSms"
                  >
                    <span v-if="timer > 0"
                      >{{ $t("sendagain") }}: {{ timer }} {{ $t("sec") }}</span
                    >
                    <span v-else>{{ $t("sendagain") }}</span>
                  </BaseButton>
                  <BaseButton
                    state="primary"
                    :is-loading="loading"
                    @click="submit"
                    >{{ $t("confirm") }}
                  </BaseButton>
                </div>
              </div>
              <form
                @submit.prevent
                class="flex flex-col gap-8"
                v-else-if="progress == 2"
              >
                <p
                  class="text-2xl text-darkBlue font-bold leading-normal text-center"
                >
                  {{ $t("fillInfo") }}
                </p>
                <div class="flex flex-col gap-4">
                  <BaseInput
                    placeholder="input.name"
                    v-model="first_name"
                    inputID="first-name"
                    type="text"
                    :error="errorFirst ? 'error.first' : null"
                    @on-blur="validate('first')"
                  />
                  <BaseInput
                    placeholder="input.surname"
                    v-model="last_name"
                    inputID="last-name"
                    type="text"
                    :error="errorLast ? 'error.last' : null"
                    @on-blur="validate('last')"
                  />
                  <BaseDropdown
                    :options="genderOptions"
                    placeholder="userGenderTitle"
                    :selected="gender"
                    @on-change="onGenderChange"
                    :error="errorGender ? 'error.gender' : null"
                  />
                  <BaseInput
                    placeholder="input.birth"
                    v-model="birth_date"
                    inputID="birth-date"
                    type="text"
                    :is-birth="true"
                    @on-blur="validate('birth')"
                    :error="errorBirth ? 'error.birth' : null"
                  />
                </div>
                <BaseButton
                  @click="submitUserInfo"
                  state="primary"
                  type="submit"
                  >{{ $t("confirm") }}
                </BaseButton>
              </form>

              <IconBack
                @click="moveBack"
                class="absolute top-2 left-2 -translate-x-full"
                :class="{ 'translate-x-0': progress == 1 }"
                v-if="progress != 2"
              />
              <img
                class="absolute top-4 right-4 cursor-pointer"
                src="~/assets/icons/close.svg"
                alt="close"
                @click="progress == 2 ? validate('all') : (isOpen = false)"
              />
            </div>
          </div>
        </template>
      </PageModal>
    </Transition>
  </div>
</template>

<style>
.toast {
  box-shadow: 0px 12px 42px -4px rgba(24, 39, 75, 0.12),
    0px 8px 18px -6px rgba(24, 39, 75, 0.12);
}
</style>
