<script setup>
import { useScrollLock } from '@vueuse/core'
const props = defineProps(['isOpen']);
const emit = defineEmits(['close']);

const el = document.querySelector("body");
const isLocked = useScrollLock(el);
isLocked.value = true;

const onClose = () => {
    emit('close');
    isLocked.value = false;
}
</script>

<template>
    <div>
        <div class="bg-darkBlue bg-opacity-70 inset-0 fixed z-[98]" @click="onClose"></div>
        <slot name="body" />
    </div>
</template>