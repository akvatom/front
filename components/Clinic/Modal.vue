<script setup>
const { locale } = useI18n();
import { useReCaptcha } from 'vue-recaptcha-v3';
const recaptchaInstance = useReCaptcha();

const isOpen = useClinicModal();

const isSubmitted = ref(false);
const isSubmittedError = ref(false);
const loading = ref(false);


const recaptcha = async () => {
  await recaptchaInstance?.recaptchaLoaded();
  const token = await recaptchaInstance?.executeRecaptcha('yourActionHere');
  return token;
};


const onSubmit = async () => {
  if (!validate.value) return;
  loading.value = true;
  const captcha = await recaptcha();
  const phone_number = secondPhone.value?.replace(/\D/g, '').replace('998', '')

  const body = {
    recaptcha_token: captcha,
    phone_number: +phone.value.replace(/\D/g, '').replace('998', ''),
    additional_phone_number: phone_number ? +phone_number : undefined,
    title: clinicName.value,
    address: address.value,
    username: text.value,
    speciality: specialty.value,
  };


  const { data, error } = await useMyFetch(`${locale.value}/clinics/send_application/`, {
    method: 'POST',
    body: body,
  })
  loading.value = false
  isSubmitted.value = true;
  if (data.value) isSubmittedError.value = false;
  else isSubmittedError.value = true;
}

const unSubmit = () => {
  isSubmitted.value = false;
  isSubmittedError.value = false;
  isOpen.value = false;
  phone.value = null;
  secondPhone.value = null;
  clinicName.value = null;
  specialty.value = null;
  address.value = null;
  text.value = null;
}

const phone = ref();
const secondPhone = ref();
const handleFocus = () => { if (!phone.value) phone.value = "+998 " };
const handleBlur = () => { if (phone.value == '+998 ') phone.value = null };

const clinicName = ref();
const specialty = ref();
const address = ref();
const text = ref();
const validate = computed(() => {
  if (!phone.value || clinicName.value?.trim().length < 3) return false;
  const number = phone.value.replace(/\D/g, '').replace('998', '');
  if (number.length === 9 && clinicName.value?.trim().length >= 3) return true;
})
</script>

<template>
  <div>
    <Transition name="fade" mode="out-in">
      <PageModal v-if="isOpen" :is-open="isOpen" @close="isOpen = false">
        <template #body>
          <div
            class="bg-white rounded-2xl p-4 fixed-center w-[calc(100%-32px)] max-w-[41.75rem] relative z-[99] max-h-[80%] overflow-auto scrollbar-style">
            <form @submit.prevent class="flex flex-col gap-8" v-if="!isSubmitted">
              <p class="text-2xl text-darkBlue font-bold leading-normal text-center">Заявка для клиник</p>
              <div class="flex flex-col gap-4">
                <BaseInput placeholder="input.clinicPhone" v-model="phone" inputID="phone-number" type="tel"
                  @on-focus="handleFocus" @on-blur="handleBlur" required />
                <BaseInput placeholder="input.secondPhone" v-model="secondPhone" inputID="second-phone" type="tel"
                  @on-focus="handleFocus" @on-blur="handleBlur" required />
                <BaseInput placeholder="input.clinic" v-model="clinicName" inputID="clinicName" type="text" />
                <BaseInput placeholder="input.specialty" v-model="specialty" inputID="specialty" type="text" />
                <BaseInput placeholder="input.address" v-model="address" inputID="address" type="text" />
                <BaseInput placeholder="input.contact" v-model="text" inputID="text" type="text" />
              </div>
              <BaseButton state="primary" type="submit" @click="onSubmit" :is-disabled="!validate"
                :is-loading="loading">
                Отправить заявку</BaseButton>
            </form>
            <form @submit.prevent class="flex-y-center flex-col gap-4" v-else>
              <img v-if="!isSubmittedError" width="96" height="96" src="~/assets/icons/submitted.svg" alt="submitted">
              <img v-else width="96" height="96" src="~/assets/icons/submitted-error.svg" alt="submitted error">
              <div v-if="!isSubmittedError" class="flex flex-col gap-2">
                <p class="text-2xl font-bold leading-normal text-darkBlue text-center">Спасибо за вашу заявку!
                </p>
                <p class="text-sm text-darkBlue leading-normal text-center">
                  Ваша заявка успешно принята. Наша команда специалистов скоро свяжется с вами
                </p>
              </div>
              <div v-else class="flex flex-col gap-2">
                <p class="text-2xl font-bold leading-normal text-darkBlue text-center">Произошла ошибка
                </p>
                <p class="text-sm text-darkBlue leading-normal text-center">
                  Извините, произошла ошибка при обработке вашей заявки. Пожалуйста, попробуйте еще раз позже, или
                  свяжитесь с нашей службой поддержки для получения дополнительной помощи.
                </p>
              </div>
              <BaseButton class="w-full" state="primary" type="submit" @click="unSubmit">Хорошо</BaseButton>
            </form>

            <img class="absolute top-4 right-4 cursor-pointer" @click="isOpen = false" src="~/assets/icons/close.svg"
              alt="close">
          </div>
        </template>
      </PageModal>
    </Transition>
  </div>
</template>
