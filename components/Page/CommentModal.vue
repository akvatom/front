<script setup>
const { locale } = useI18n();
import { useReCaptcha } from 'vue-recaptcha-v3';
const recaptchaInstance = useReCaptcha();

const props = defineProps({
    isOpen: {
        required: true,
        type: Boolean,
    },
    doctor: {
        required: true,
        type: Number,
    },
})

const emit = defineEmits(['close'])

const isAuthenticated = useAuthenticated();

const isSubmitted = ref(false);
const isSubmittedError = ref(false);
const loading = ref(false);
const comment = ref(null);
const rating = ref(0);

const recaptcha = async () => {
  await recaptchaInstance?.recaptchaLoaded();
  const token = await recaptchaInstance?.executeRecaptcha('yourActionHere');
  return token;
};

const onSubmit = async (e) => {
    if (!rating.value) return;
    const access = useCookie("access");
    const recaptcha_token = await recaptcha();

    const body = {
        recaptcha_token,
        ball: rating.value,
        text: comment.value.trim(),
        doctor: props.doctor,
    };

    const { data, error } = await useMyFetch(`${locale.value}/ratings/create/`, {
        method: 'POST',
        body: body,
        headers: {
            Authorization: `Bearer ${access.value}`
        },
    })
    loading.value = false
    isSubmitted.value = true;
    if (data.value) isSubmittedError.value = false;
    else isSubmittedError.value = true;
}

const unSubmit = () => {
    isSubmitted.value = false;
    isSubmittedError.value = false;
    emit('close');
    rating.value = 0;
    comment.value = null;
}


const loginTitle = useLoginTitle();
const isLoginOpen = useLoginModal();
const useRedirectUrl = useRedirect();
watch(() => props.isOpen, newVal => {
    if (!isAuthenticated.value) {
        useRedirectUrl.value = {
            link: `/doctor/${props.doctor}`,
            action: 'comment',
        };
        loginTitle.value = 'loginTitle.comment';
        isLoginOpen.value = newVal;
    }
})
watch(isLoginOpen, newVal => { if (!newVal) emit('close') });

</script>

<template>
    <div v-if="isAuthenticated">
        <Transition name="fade" mode="out-in">
            <PageModal v-if="isOpen" :is-open="isOpen" @close="$emit('close')">
                <template #body>
                    <div
                        class="bg-white rounded-2xl p-4 fixed-center w-[calc(100%-32px)] max-w-[400px] relative z-[99] max-h-[80%] overflow-auto scrollbar-style">
                        <form @submit.prevent class="flex flex-col gap-8" v-if="!isSubmitted">
                            <p class="text-2xl text-darkBlue font-bold leading-normal text-center">Оставьте отзыв</p>
                            <div class="relative w-fit self-center">
                                <div class="flex-center gap-1.5 w-fit z-[1] relative">
                                    <div v-for="star in 5" :key="star.key" @click="rating = star"
                                        class="w-12 h-12 flex-center cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48"
                                            fill="none">
                                            <path
                                                d="M27.0793 7.18605L29.8607 13.0456C30.7057 14.8257 32.3548 16.0878 34.2952 16.3809L40.5146 17.3206C42.8223 17.6692 43.902 20.7409 42.1025 22.5646L37.6021 27.1256C36.2235 28.5228 35.6075 30.5181 35.928 32.461L36.9904 38.9012C37.4241 41.53 34.8268 43.2445 32.8239 42.1497L27.2611 39.109C25.5346 38.1653 23.4654 38.1653 21.7389 39.109L16.1761 42.1497C14.1732 43.2445 11.5759 41.53 12.0096 38.9012L13.072 32.461C13.3925 30.5181 12.7765 28.5228 11.3979 27.1256L6.89748 22.5646C5.09797 20.7409 6.17773 17.6692 8.4854 17.3206L14.7048 16.3809C16.6452 16.0878 18.2943 14.8257 19.1393 13.0456L21.9207 7.18606C22.9878 4.93798 26.0122 4.93798 27.0793 7.18605Z"
                                                stroke="#F9A830" stroke-width="3" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="absolute top-0 left-0 flex-y-center gap-1.5 overflow-hidden transition-300 z-0"
                                    :style="`width: calc(20% * ${rating});`">
                                    <div v-for="star in 5" :key="star.key" class="w-12 h-12 flex-center cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48"
                                            fill="none">
                                            <path fill="#F9A830"
                                                d="M20.5656 6.54282C22.175 3.1524 26.825 3.15239 28.4344 6.54282L31.2158 12.4024C31.8549 13.7487 33.0902 14.6819 34.5193 14.8978L40.7387 15.8374C44.3373 16.3811 45.7743 20.9791 43.1703 23.6182L38.6698 28.1792C37.6358 29.2272 37.1639 30.7371 37.408 32.2168L38.4704 38.6571C39.0852 42.3835 35.3232 45.2253 32.1045 43.4659L26.5417 40.4252C25.2635 39.7266 23.7365 39.7266 22.4583 40.4252L16.8955 43.4659C13.6768 45.2253 9.91485 42.3835 10.5296 38.6571L11.592 32.2168C11.8361 30.7371 11.3642 29.2272 10.3302 28.1792L5.82975 23.6182C3.22573 20.9791 4.66266 16.3811 8.26132 15.8374L14.4807 14.8978C15.9098 14.6819 17.1451 13.7487 17.7842 12.4024L20.5656 6.54282Z" />
                                            <path stroke="#F9A830" stroke-width="3" stroke-linejoin="round"
                                                d="M27.0793 7.18605L29.8607 13.0456C30.7057 14.8257 32.3548 16.0878 34.2952 16.3809L40.5146 17.3206C42.8223 17.6692 43.902 20.7409 42.1025 22.5646L37.6021 27.1256C36.2235 28.5228 35.6075 30.5181 35.928 32.461L36.9904 38.9012C37.4241 41.53 34.8268 43.2445 32.8239 42.1497L27.2611 39.109C25.5346 38.1653 23.4654 38.1653 21.7389 39.109L16.1761 42.1497C14.1732 43.2445 11.5759 41.53 12.0096 38.9012L13.072 32.461C13.3925 30.5181 12.7765 28.5228 11.3979 27.1256L6.89748 22.5646C5.09797 20.7409 6.17773 17.6692 8.4854 17.3206L14.7048 16.3809C16.6452 16.0878 18.2943 14.8257 19.1393 13.0456L21.9207 7.18606C22.9878 4.93798 26.0122 4.93798 27.0793 7.18605Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <textarea name="comment" id="comment" placeholder="Напишите комментарий" v-model="comment"
                                class="w-full h-[140px] p-4 bg-bg rounded-lg text-sm text-darkBlue leading-normal placeholder:text-secondary resize-none outline-none" />
                            <BaseButton state="primary" type="submit" @click="onSubmit" :is-disabled="!rating"
                                :is-loading="loading">Оставить отзыв</BaseButton>
                        </form>
                        <form @submit.prevent class="flex-y-center flex-col gap-4" v-else>
                            <img v-if="!isSubmittedError" width="96" height="96" src="~/assets/icons/submitted.svg"
                                alt="submitted">
                            <img v-else width="96" height="96" src="~/assets/icons/submitted-error.svg"
                                alt="submitted error">
                            <div v-if="!isSubmittedError" class="flex flex-col gap-2">
                                <p class="text-2xl font-bold leading-normal text-darkBlue text-center">Спасибо за ваш отзыв!
                                </p>
                                <p class="text-sm text-darkBlue leading-normal text-center">
                                    Если вы записывались через наш сервис и были на приёме у врача, то мы учтём ваш отзыв в
                                    формировании рейтинга
                                </p>
                            </div>
                            <div v-else class="flex flex-col gap-2">
                                <p class="text-2xl font-bold leading-normal text-darkBlue text-center">Произошла ошибка
                                </p>
                                <p class="text-sm text-darkBlue leading-normal text-center">
                                    Ваш номер отсутствует в списке пациентов, записавшихся на приём.
                                </p>
                            </div>
                            <BaseButton class="w-full" state="primary" type="submit" @click="unSubmit">Хорошо</BaseButton>
                        </form>

                        <img class="absolute top-4 right-4 cursor-pointer" @click="$emit('close')"
                            src="~/assets/icons/close.svg" alt="close">
                    </div>
                </template>
            </PageModal>
        </Transition>
    </div>
</template>
