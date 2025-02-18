<script setup>

</script>

<template>
    <Teleport to="body">
        <div class="bg-darkBlue bg-opacity-70 fixed inset-0 w-full h-full z-[9]" @click="$emit('onClose')"></div>
        <div class="bg-white rounded-2xl p-4 flex flex-col fixed w-[calc(100%-32px)] max-h-[60%] max-w-[804px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 overflow-hidden">
            <div class="self-end" @click="$emit('onClose')">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M5.08416 4.91602C5.59006 4.41012 6.4103 4.41012 6.91621 4.91602L19.1299 17.1297C19.6358 17.6356 19.6358 18.4558 19.1299 18.9617C18.624 19.4676 17.8037 19.4676 17.2978 18.9617L5.08416 6.74807C4.57825 6.24217 4.57825 5.42193 5.08416 4.91602Z"
                        fill="#002168" />
                    <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd"
                        d="M4.91621 18.916C4.4103 18.4101 4.4103 17.5899 4.91621 17.084L17.1299 4.87031C17.6358 4.36441 18.456 4.36441 18.9619 4.87031C19.4678 5.37622 19.4678 6.19646 18.9619 6.70236L6.74826 18.916C6.24235 19.4219 5.42211 19.4219 4.91621 18.916Z"
                        fill="#002168" />
                </svg>
            </div>
            <slot></slot>
        </div>
    </Teleport>
</template>