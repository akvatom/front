<script setup>
const { locale, t } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
const route = useRoute();

const { data: clinics } = await useMyFetch(`${locale.value}/clinics/`)

useHead({ script: [{ src: `https://api-maps.yandex.ru/v3/?apikey=c47cf6ec-a9ce-4384-adaf-b0ce6e5d1f6d&lang=en_US` }] });

const isBurger = ref(false);
const search = ref(null);

const loginTitle = useLoginTitle();
const useRedirectUrl = useRedirect();

const isLoginOpen = useLoginModal();
const isAuthenticated = useAuthenticated();

const onClick = () => {
    if (!isAuthenticated.value) {
        useRedirectUrl.value = null;
        loginTitle.value = 'loginTitle.default';
        isLoginOpen.value = true;
    } else navigateTo(localePath('/profile'));
}

const count = useCount();

const isMapOpen = ref(false);
const isListOpen = ref(false);
const isClickedMarker = ref(false);
const activeMarker = ref(null);
const markersEl = ref([]);
const closeList = (e) => {
    if (!e.mapInAction) {
        if (isClickedMarker.value) isClickedMarker.value = false;
        else {
            if (activeMarker.value) activeMarker.value.src = '/icons/marker.svg';
            isListOpen.value = false;
        };
    };
};

const selectedClinic = ref(null);


async function initMap() {
    await ymaps3.ready;
    const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker, YMapListener } = ymaps3;
    const map = new YMap(
        document.getElementById('map'), { location: { center: [69.2401, 41.2995], zoom: 13 } }
    );

    // Add a layer to display the schematic map
    map.addChild(new YMapDefaultSchemeLayer());
    map.addChild(new YMapDefaultFeaturesLayer());

    clinics.value.map(clinic => {
        if (clinic.doctors_count === 0) return;
        const latitude = clinic.map.split(",")[0];
        const longitude = clinic.map.split(",")[1];
        const el = document.createElement('img');
        el.className = 'my-marker';
        el.src = '/icons/marker.svg';
        markersEl.value.push(el);
        el.onclick = async () => {
            const { data } = await useMyFetch(`${locale.value}/doctors/?clinic=${clinic.id}`)
            selectedClinic.value = data.value.results;
            map.setLocation({ center: [longitude, +latitude + 0.002], zoom: 17, duration: 400 });
            isClickedMarker.value = true;
            markersEl.value.map(item => item.src = '/icons/marker.svg');
            el.src = 'icons/marker-blue.svg';
            activeMarker.value = el;
            isListOpen.value = true;
            setTimeout(() => {
                el.classList.add("active");
            }, 400);
        };

        const marker = new YMapMarker({ coordinates: [longitude, latitude] }, el);

        map.addChild(marker);
    })

    const mapListener = new YMapListener({
        layer: 'any',
        onUpdate: closeList,
    });
    map.addChild(mapListener);
}

watch(isMapOpen, newVal => {
    if (newVal) {
        document.querySelector("body").style.overflow = "hidden";
        initMap();
    }
    else {
        document.querySelector("body").style.overflow = "auto";
    };
})

const onEscPressed = (e) => {
    if (e.key == "Escape" || e.code == "Escape") {
        isMapOpen.value = false;
        isListOpen.value = false;
    }
}

onMounted(() => {
    document.addEventListener("keyup", onEscPressed);
})

onUnmounted(() => {
    document.removeEventListener("keyup", onEscPressed);
})

const isOpen = useLoginModal();

</script>

<template>
    <div class="flex flex-col gap-5 bg-bg">
        <div class="bg-white flex flex-col items-center gap-4 p-4 relative"
            :class="{ 'max-md:pb-0': localePath('/') == route.path }">
            <div class="flex items-center justify-between gap-6 bg-white max-w-[1280px] w-full lg:px-8">
                <div class="flex gap-6 items-center shrink-0">
                    <IconBurger class="md:hidden" @click="isBurger = true" />
                    <NuxtLinkLocale to="/">
                        <img src="~/assets/icons/logo.svg" alt="Clindoc" class="h-6 w-auto md:h-8" />
                    </NuxtLinkLocale>
                </div>
                <div class="flex items-center gap-4 md:gap-6 flex-shrink-0">
                    <IconMap @click="isMapOpen = !isMapOpen" :is-button="true">{{ $t("header.map") }}</IconMap>
                    <IconLocation :is-button="true">{{ $t("header.location") }}</IconLocation>
                    <IconLang :is-button="true" />
                    <IconUser @click="onClick" :is-button="true">{{ $t("header.profile") }}</IconUser>
                </div>
            </div>
            <div class="">
                <ClinicBanner class="lg:hidden" />
            </div>
            <BaseSearchInput :placeholder="t('input.search')" :is-list="true" :model-value="search"
                class="lg:hidden" :class="{ 'max-lg:hidden': localePath('/') != route.path }" />
            <ClientOnly>
                <p class="text-xs text-secondary  max-w-[1280px] w-full lg:px-8" v-if="localePath('/') == route.path">
                    {{ $t("found") }}: {{ numberWithSpaces(count) }}
                </p>
            </ClientOnly>


            <div class="absolute top-full z-[999] w-screen h-screen bg-[#FCFCF7]" id="map" v-if="isMapOpen">
                <Transition name="tilt-in">
                    <div class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-[62%] flex flex-col z-[1] shadow-400 max-md:w-full max-md:max-w-[calc(100%-32px)] max-w-[450px]"
                        v-if="isListOpen">
                        <div class="flex flex-col rounded-2xl overflow-clip relative">
                            <div class="bg-dividers py-3 px-4 flex-y-center justify-between">
                                <p class="text-base text-darkBlue font-bold">
                                    {{ selectedClinic[0]?.clinic.name ?? 'Not found' }}
                                </p>
                                <p class="text-xs text-blue leading-normal whitespace-nowrap">{{ selectedClinic.length
                                    }} врачей</p>
                            </div>
                            <div
                                class="py-[18px] px-4 bg-white flex flex-col gap-4 overflow-auto scrollbar-style shadow-400 max-h-[50svh]">
                                <NuxtLinkLocale :to="`/doctor/${doctor.id}`" class="flex flex-col gap-4" v-for="(doctor, index) in selectedClinic"
                                    :key="doctor.id" @click="isMapOpen = false">
                                    <hr class="bg-dividers h-px border-none" v-if="index != 0">
                                    <CardMapDoctor :doctor="doctor" />
                                </NuxtLinkLocale>
                            </div>
                        </div>
                        <div class="shadow-gradient absolute -bottom-px left-0 w-full h-[64px] rounded-b-2xl"
                            v-if="selectedClinic.length > 2"></div>
                        <div class="absolute top-full left-1/2 -translate-x-1/2">
                            <img src="~/assets/icons/map-list-arrow.svg" alt="arrow">
                        </div>
                    </div>
                </Transition>
            </div>
        </div>

        <div class="container max-lg:hidden flex flex-col gap-5" :class="{ 'hidden': localePath('/') != route.path }">
            <div class="bg-darkBlue rounded-2xl w-full flex justify-between relative h-[275px]">
                <div class="flex flex-col gap-6 w-1/2 p-8">
                    <div class="flex flex-col gap-3">
                        <p class="text-4xl leading-normal font-bold text-white">{{ $t("banner.title") }}</p>
                        <p class="text-lg leading-normal text-white">{{ $t("banner.description") }}</p>
                    </div>
                    <BaseSearchInput :placeholder="t('banner.input')" :is-list="true" v-model="search"
                        class="max-lg:hidden" />
                </div>
                <div class="overflow-hidden mr-4 relative flex items-end">
                    <svg width="522" height="259" viewBox="0 0 522 259" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.2"
                            d="M63.1452 409.25C106.645 452.847 172.597 474.646 261 474.646C348 474.646 413.25 452.847 456.75 409.25C500.25 365.653 522 308.695 522 238.378C522 170.872 499.549 114.618 454.645 69.6146C409.742 23.2048 345.194 0 261 0C172.597 0 106.645 22.5017 63.1452 67.5052C21.0484 112.509 0 169.466 0 238.378C0 308.695 21.0484 365.653 63.1452 409.25Z"
                            fill="#1D7ED8" />
                        <path
                            d="M103.919 372.551C138.333 406.842 190.51 423.987 260.449 423.987C329.279 423.987 380.9 406.842 415.315 372.551C449.73 338.26 466.937 293.46 466.937 238.152C466.937 185.057 449.174 140.81 413.65 105.413C378.125 68.9098 327.058 50.6582 260.449 50.6582C190.51 50.6582 138.333 68.3568 103.919 103.754C70.6143 139.151 53.962 183.951 53.962 238.152C53.962 293.46 70.6143 338.26 103.919 372.551Z"
                            fill="#1D7ED8" />
                    </svg>
                    <img class="absolute-center bottom-0" src="~/assets/icons/main-search-doctors.webp" alt="doctors"
                        fetchpriority="high" />
                </div>
            </div>
            <ClinicBanner />
        </div>


        <div class="fixed inset-0 bg-white z-[9999] transition-300"
            :class="isBurger ? 'translate-x-0' : '-translate-x-full'">
            <div class="flex flex-col">
                <div class="p-4 flex-y-center gap-4">
                    <img @click="isBurger = false" src="~/assets/icons/close.svg" alt="close">
                    <img src="~/assets/icons/logo.svg" alt="logo">
                </div>
                <NuxtLinkLocale @click="isBurger = false" to="/">
                    <BaseBurgerItem>
                        <template #icon><img src="~/assets/icons/home.svg" alt="home"></template>
                        <template #default>{{ $t("main") }}</template>
                    </BaseBurgerItem>
                </NuxtLinkLocale>
                <BaseBurgerItem>
                    <template #icon><img src="~/assets/icons/location.svg" alt="location"></template>
                    <template #default>{{ $t("city") }}</template>
                    <template #option>{{ $t("tashkent") }}</template>
                </BaseBurgerItem>
                <NuxtLinkLocale @click="isBurger = false" to="/profile" v-if="isAuthenticated">
                    <BaseBurgerItem>
                        <template #icon><img src="~/assets/icons/profile.svg" alt="profile"></template>
                        <template #default>{{ $t("header.profile") }}</template>
                    </BaseBurgerItem>
                </NuxtLinkLocale>
                <BaseBurgerItem @click="isBurger = false, isOpen = true" v-else>
                    <template #icon><img src="~/assets/icons/profile.svg" alt="profile"></template>
                    <template #default>{{ $t("header.profile") }}</template>
                </BaseBurgerItem>
                <NuxtLink :to="switchLocalePath(`${locale == 'uz' ? 'ru' : 'uz'}`)">
                    <BaseBurgerItem>
                        <template #icon>
                            <img v-if="locale == 'uz'" src="~/assets/icons/uzbekistan.svg" alt="Uzbek">
                            <img v-else src="~/assets/icons/russia.svg" alt="Russian">
                        </template>
                        <template #default>{{ $t("language") }}</template>
                        <template #option>{{ locale == 'uz' ? 'O‘zbekcha' : 'Русский' }}</template>
                    </BaseBurgerItem>
                </NuxtLink>
                <BaseBurgerItem>
                    <template #icon><img src="~/assets/icons/call.svg" alt="call"></template>
                    <template #default>{{ $t("help") }}</template>
                </BaseBurgerItem>
            </div>
        </div>
    </div>
</template>

<style scoped>
.shadow-gradient {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%);
}

.shadow-400 {
    box-shadow: 0px 8px 24px -4px rgba(24, 39, 75, 0.08), 0px 6px 12px -6px rgba(24, 39, 75, 0.12);
}

.tilt-in-enter-active {
    animation: tilt-in 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.tilt-in-leave-active {
    animation: tilt-in 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both reverse;
}

@keyframes tilt-in {
    0% {
        transform: rotateY(-20deg) rotateX(-35deg) translate(calc(-50% - 300px), calc(-62% + 300px)) skew(-35deg, 10deg);
        opacity: 0;
    }

    100% {
        transform: rotateY(0) rotateX(0deg) translate(-50%, -62%) skew(0deg, 0deg);
        opacity: 1;
    }
}
</style>

<style>
.my-marker {
    max-width: none;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}
</style>
