<script setup>
const useToast = useToastOpen();
const title = useToastText();
watch(useToast, () => {
    setTimeout(() => useToast.value = false, 5000);
})
</script>

<template>
    <div :class="useToast ? 'max-lg:translate-y-4 lg:-translate-x-4 toast opacity-100' : 'max-lg:-translate-y-full lg:translate-x-full opacity-0'"
        class="bg-green px-4 py-3 rounded-lg flex-y-center gap-2 w-fit z-[999999] fixed transition-300 top-0 lg:top-[100px] max-lg:left-1/2 max-lg:-translate-x-1/2 lg:right-0">
        <div class="max-md:w-6 max-md:h-6 flex-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M16 29.3327C23.3638 29.3327 29.3333 23.3631 29.3333 15.9993C29.3333 8.63555 23.3638 2.66602 16 2.66602C8.63616 2.66602 2.66663 8.63555 2.66663 15.9993C2.66663 23.3631 8.63616 29.3327 16 29.3327ZM22.1227 12.6133C22.4617 12.1774 22.3832 11.5491 21.9472 11.21C21.5113 10.871 20.883 10.9495 20.5439 11.3855L15.2013 18.2546C15.0825 18.4073 14.859 18.4272 14.7152 18.2977L11.3356 15.2561C10.9251 14.8866 10.2928 14.9199 9.92334 15.3304C9.55388 15.7409 9.58716 16.3732 9.99767 16.7427L13.3772 19.7843C14.3841 20.6905 15.9484 20.5517 16.78 19.4825L22.1227 12.6133Z"
                    fill="white" />
            </svg>
        </div>
        <span class="text-sm md:text-lg font-bold text-white leading-normal whitespace-nowrap">
            {{ title ? $t(title) : null }}
        </span>
    </div>
</template>