<script setup>
const isOpen = ref(false);
</script>

<template>
    <div class="z-10">
        <div @click="isOpen = !isOpen"
            class="fixed bottom-8 right-8 w-12 h-12 bg-blue shadow-600 flex-center rounded-full group cursor-pointer">
            <Transition name="fade" mode="out-in">
                <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                    fill="none">
                    <path
                        d="M28 25.3314V23.1368C28 22.0464 27.3361 21.0658 26.3237 20.6609L23.6115 19.576C22.3238 19.0609 20.8563 19.6189 20.236 20.8594L20 21.3314C20 21.3314 16.6667 20.6647 14 17.998C11.3333 15.3314 10.6667 11.998 10.6667 11.998L11.1387 11.762C12.3792 11.1418 12.9371 9.67423 12.4221 8.38652L11.3372 5.67434C10.9322 4.66192 9.95166 3.99805 8.86125 3.99805H6.66667C5.19391 3.99805 4 5.19195 4 6.66471C4 18.4468 13.5513 27.998 25.3333 27.998C26.8061 27.998 28 26.8041 28 25.3314Z"
                        fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M16.3333 9.33138C16.3333 8.7791 16.781 8.33138 17.3333 8.33138C18.165 8.33138 18.9885 8.4952 19.7569 8.81348C20.5253 9.13176 21.2235 9.59827 21.8116 10.1864C22.3997 10.7745 22.8662 11.4727 23.1845 12.2411C23.5028 13.0094 23.6666 13.833 23.6666 14.6647C23.6666 15.217 23.2189 15.6647 22.6666 15.6647C22.1143 15.6647 21.6666 15.217 21.6666 14.6647C21.6666 14.0957 21.5545 13.5322 21.3367 13.0064C21.119 12.4807 20.7998 12.003 20.3974 11.6006C19.995 11.1982 19.5173 10.879 18.9915 10.6612C18.4658 10.4435 17.9023 10.3314 17.3333 10.3314C16.781 10.3314 16.3333 9.88367 16.3333 9.33138Z"
                        class="fill-[#77B2E8] group-hover:fill-white transition-100" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M16.3333 3.99805C16.3333 3.44576 16.781 2.99805 17.3333 2.99805C18.8653 2.99805 20.3824 3.29981 21.7979 3.88612C23.2134 4.47242 24.4995 5.33178 25.5828 6.41513C26.6662 7.49848 27.5255 8.78461 28.1118 10.2001C28.6982 11.6155 28.9999 13.1326 28.9999 14.6647C28.9999 15.217 28.5522 15.6647 27.9999 15.6647C27.4476 15.6647 26.9999 15.217 26.9999 14.6647C26.9999 13.3953 26.7499 12.1383 26.2641 10.9654C25.7783 9.79263 25.0663 8.72698 24.1686 7.82935C23.271 6.93171 22.2053 6.21967 21.0325 5.73388C19.8597 5.24808 18.6027 4.99805 17.3333 4.99805C16.781 4.99805 16.3333 4.55033 16.3333 3.99805Z"
                        class="fill-[#77B2E8] group-hover:fill-white transition-300" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M6.77863 6.55535C7.45318 5.88081 8.54682 5.88081 9.22137 6.55535L25.5062 22.8402C26.1808 23.5148 26.1808 24.6084 25.5062 25.283C24.8317 25.9575 23.7381 25.9575 23.0635 25.283L6.77863 8.99808C6.10409 8.32354 6.10409 7.22989 6.77863 6.55535Z"
                        fill="white" />
                    <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd"
                        d="M6.55486 25.2214C5.88032 24.5468 5.88032 23.4532 6.55486 22.7786L22.8397 6.49375C23.5143 5.81921 24.6079 5.81921 25.2825 6.49375C25.957 7.16829 25.957 8.26194 25.2825 8.93648L8.99759 25.2214C8.32305 25.8959 7.2294 25.8959 6.55486 25.2214Z"
                        fill="white" />
                </svg>
            </Transition>

            <Transition name="tilt-in" mode="out-in">
                <div v-if="isOpen"
                    class="bg-white p-4  rounded-2xl shadow-600 flex flex-col gap-8 absolute bottom-full mb-4 right-0">
                    <p class="text-2xl text-darkBlue font-bold leading-normal text-center">{{ $t("help") }}</p>
                    <div class="flex flex-col gap-4">
                        <a href="https://t.me/RedMediaUz">
                            <BaseButton state="primary" class="!bg-[#34AADF] w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24"
                                    fill="none">
                                    <path
                                        d="M4.57178 10.5325C4.57178 10.5325 12.3035 7.23976 14.985 6.08029C16.013 5.61654 19.499 4.13241 19.499 4.13241C19.499 4.13241 21.1079 3.48316 20.9738 5.05997C20.9291 5.70929 20.5716 7.98175 20.2141 10.4398C19.6777 13.9181 19.0967 17.7211 19.0967 17.7211C19.0967 17.7211 19.0074 18.7878 18.2476 18.9733C17.4879 19.1588 16.2364 18.324 16.013 18.1385C15.8342 17.9994 12.6611 15.9123 11.4991 14.892C11.1862 14.6138 10.8287 14.0573 11.5437 13.408C13.1527 11.8775 15.0744 9.97604 16.2364 8.77022C16.7728 8.21366 17.309 6.9151 15.0744 8.49191C11.9013 10.7644 8.77285 12.8978 8.77285 12.8978C8.77285 12.8978 8.05775 13.3616 6.717 12.9442C5.37619 12.5268 3.81196 11.9703 3.81196 11.9703C3.81196 11.9703 2.73941 11.2746 4.57178 10.5325Z"
                                        fill="white" />
                                </svg>
                                Telegram
                            </BaseButton>
                        </a>
                        <a href="tel:+998 (71) 200-01-98">
                            <BaseButton state="primary" class="flex-y-center gap-2 w-full whitespace-nowrap">
                                <div class="w-6 h-6 flex-center shrink-0">
                                    <img width="18.75" height="18.75" src="~/assets/icons/contact-us.svg" alt="phone">
                                </div>
                                {{ $t("call") }}: +998 (71) 200-01-98
                            </BaseButton>
                        </a>
                    </div>
                </div>
            </Transition>
        </div>
    </div>
</template>

<style scoped>
.shadow-600 {
    box-shadow: 0px 12px 42px -4px rgba(24, 39, 75, 0.12), 0px 8px 18px -6px rgba(24, 39, 75, 0.12);
}

.tilt-in-enter-active {
    animation: tilt-in 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.tilt-in-leave-active {
    animation: tilt-in 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both reverse;
}

@keyframes tilt-in {
    0% {
        opacity: 0;
        transform: scale(0.5) rotate(-5deg);
    }

    50% {
        opacity: 0.5;
        transform: scale(1.05) rotate(2deg);
    }

    100% {
        opacity: 1;
        transform: scale(1) rotate(0deg);
    }
}
</style>
