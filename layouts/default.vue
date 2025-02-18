<script setup></script>

<template>
    <div class="min-h-[100svh] flex flex-col">
        <NuxtLoadingIndicator color="#1D7ED8" />
        <PageHeader />
        <div class="flex-grow bg-bg">
            <slot></slot>
        </div>

        <ClinicModal />
        <PageFloatingButton />
        <PageLoginModal />
        <PageToast />
    </div>
</template>
