<script setup>
const { locale } = useI18n();
const localePath = useLocalePath();
const useToast = useToastOpen();
const useToastTitle = useToastText();

definePageMeta({
    middleware: ['auth'],
});


const isChanged = ref(false);
const isLogout = ref(false);
const genderOptions = useGenderOptions();
const user = useUserInfo();
if (!user.value) await usePersonalData(locale.value);

const first_name = ref(user.value.first_name);
const last_name = ref(user.value.last_name);
const gender = ref(null);
const birth_date = ref(user.value.date_birthday ? user.value.date_birthday.split("-").reverse().join(".") : null);
const phone_number = ref(numberWithSpaces(`+998${user.value.phone_number}`, false).replace("(", "").replace(")", ""));

const oldBirthday = ref(user.value.date_birthday.split("-").reverse().join("."));
const oldGender = ref(null);
genderOptions.value.map((item, index) => {
    if (item.value == user.value.gender) {
        gender.value = index;
        oldGender.value = index;
    }
})


const errorFirst = ref(false);
const errorLast = ref(false);
const errorGender = ref(false);
const errorBirth = ref(false);

const validate = (val = 'all') => {
    if (val == 'first' || val == 'all') {
        if (!first_name.value || first_name.value.trim().length < 3) errorFirst.value = true;
        else errorFirst.value = false;
    }

    if (val == 'last' || val == 'all') {
        if (!last_name.value || last_name.value.trim().length < 3) errorLast.value = true;
        else errorLast.value = false;
    }

    if (val == 'gender' || val == 'all') {
        if (gender.value == null) errorGender.value = true;
        else errorGender.value = false;
    }

    if (val == 'birth' || val == 'all') {
        if (!birth_date.value) errorBirth.value = true;
        else if (birth_date.value.length == 10) {
            const day = birth_date.value.substring(0, 2);
            const month = birth_date.value.substring(3, 5);
            const year = birth_date.value.substring(6, 10);
            errorBirth.value = !isDateValid(year, month, day);
        } else {
            errorBirth.value = true;
        }
    }

    if (first_name.value !== user.value.first_name || last_name.value !== user.value.last_name || gender.value !== oldGender.value || birth_date.value !== oldBirthday.value) {
        isChanged.value = true;
    } else isChanged.value = false;
    return (!errorFirst.value && !errorLast.value && !errorGender.value && !errorBirth.value);
}

const onGenderChange = (val) => {
    gender.value = val;
    errorGender.value = false;
    validate('gender');
};

const isDateValid = (dateStr) => {
    const today = new Date();
    const date = new Date(dateStr);
    if (isNaN(date)) return false;

    if (date.getTime() >= today.getTime()) return false;
    if (date.getFullYear() < 1900) return false;

    return true;
}

const logout = () => {
    useLogOut();
    isLogout.value = false;
    navigateTo(localePath("/"));
}

const handleFocus = () => { if (!phone_number.value) phone_number.value = "+998 " };
const handleBlur = () => { if (phone_number.value == '+998 ') phone_number.value = null };


const onSubmit = async () => {
    let body = {};
    if (first_name.value !== user.value.first_name) body.first_name = first_name.value;
    if (last_name.value !== user.value.last_name) body.last_name = last_name.value;
    if (gender.value !== oldGender.value) body.gender = gender.value + 1;
    if (birth_date.value !== oldBirthday.value) body.date_birthday = birth_date.value.split(".").reverse().join("-");

    const access = useCookie("access");
    const { data } = await useMyFetch(`${locale.value}/auth/update-profile/`, {
        method: "PATCH",
        body: body,
        headers: { 'Authorization': `Bearer ${access.value}` }
    })

    if (data.value) {
        useToastTitle.value = "toast.changed";
        user.value = data.value;
        isChanged.value = false;
        user.value.first_name = first_name.value;
        user.value.last_name = last_name.value;
        oldGender.value = gender.value;
        oldBirthday.value = birth_date.value;
    }
    else useToastTitle.value = "toast.error";

    useToast.value = true;
}
</script>

<template>
    <div>
        <div class="container my-5 flex justify-center">
            <div class="bg-white max-w-[600px] w-full rounded-2xl p-4 lg:p-8 flex flex-col">
                <div class="flex justify-end">
                    <div @click="isLogout = true"
                        class="px-4 flex-center h-10 text-red text-sm leading-normal rounded-lg hover:bg-[#E5E9F0] active:bg-[#CCD3E1] cursor-pointer">
                        {{ $t("logout") }}</div>
                </div>
                <form @submit.prevent class="flex flex-col gap-8">
                    <p class="text-darkBlue font-bold text-[32px] leading-normal text-center">{{ $t("profile") }}</p>
                    <div class="flex flex-col gap-4">
                        <BaseInput placeholder="input.name" v-model="first_name" inputID="first-name" type="text"
                            :error="errorFirst ? 'error.first' : null" @on-blur="validate('first')" />
                        <BaseInput placeholder="input.surname" v-model="last_name" inputID="last-name" type="text"
                            :error="errorLast ? 'error.last' : null" @on-blur="validate('last')" />
                        <BaseDropdown :options="genderOptions" placeholder="userGenderTitle" :selected="gender"
                            @on-change="onGenderChange" :error="errorGender ? 'error.gender' : null" />
                        <BaseInput placeholder="input.birth" v-model="birth_date" inputID="birth-date" type="text"
                            :is-birth="true" @on-blur="validate('birth')" :error="errorBirth ? 'error.birth' : null" />
                        <BaseInput placeholder="input.phone" v-model="phone_number" inputID="phone-number" type="tel"
                            @on-focus="handleFocus" @on-blur="handleBlur" />
                        <div class="flex gap-2">
                            <img src="~/assets/icons/info.svg" alt="info">
                            <p class="text-xs text-secondary leading-normal">
                                {{ $t("profileInfo") }}
                            </p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-4">
                        <BaseButton state="primary" :is-disabled="!isChanged" @click="onSubmit" type="submit">
                            {{ $t("save") }}
                        </BaseButton>
                        <NuxtLinkLocale to="/">
                            <BaseButton class="font-normal w-full" state="secondary">{{ $t("backMain") }}</BaseButton>
                        </NuxtLinkLocale>
                    </div>
                </form>
            </div>
        </div>

        <Transition name="fade" mode="out-in">
            <PageModal v-if="isLogout" @close="isLogout = false">
                <template #body>
                    <div
                        class="fixed-center z-[99] bg-white rounded-2xl p-4 flex flex-col max-w-[393px] w-[calc(100%-32px)] md:w-full">
                        <div class="self-end w-6 h-6 flex-center cursor-pointer" @click="isLogout = false">
                            <img src="~/assets/icons/close.svg" alt="close">
                        </div>
                        <div class="flex flex-col gap-8">
                            <p class="text-darkBlue font-bold text-2xl leading-normal text-center">
                                {{ $t("sureLogout") }}
                            </p>
                            <div class="flex flex-col gap-4">
                                <BaseButton class="font-normal" state="secondary" @click="isLogout = false">
                                    {{ $t("cancel") }}
                                </BaseButton>
                                <BaseButton state="red" @click="logout">{{ $t("logout") }}</BaseButton>
                            </div>
                        </div>
                    </div>
                </template>
            </PageModal>
        </Transition>
    </div>
</template>
