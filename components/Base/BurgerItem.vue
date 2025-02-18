<script setup>

</script>

<template>
    <div class="p-4 bg-white active:bg-darkBlue active:bg-opacity-10 flex-y-center gap-4">
        <span class="min-w-[20px] flex-center">
            <slot name="icon" />
        </span>
        <div class="flex-y-center justify-between w-full">
            <p class="text-base text-darkBlue leading-normal">
                <slot />
            </p>
            <p class="text-sm text-secondary leading-normal">
                <slot name="option" />
            </p>
        </div>
    </div>
</template>
