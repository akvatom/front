<template>
    <div>
        <NuxtLayout>
            <div class="container mt-8">
                <div class="flex-y-center flex-col gap-4 max-w-[492px] mx-auto">
                    <img width="370" height="385" src="~/assets/icons/illustration.png" alt="illustaration">
                    <h1 class="text-2xl md:text-[32px] leading-normal text-darkBlue font-bold text-center">
                        Упс! Похоже, вы попали на несуществующую страницу
                    </h1>
                    <p class="text-xs md:text-base text-secondary text-center">
                        Пожалуйста, перезагрузите приложение или перейдите на главную страницу
                    </p>
                    <NuxtLinkLocale to="/">
                        <BaseButton state="primary">Перейти на главную страницу</BaseButton>
                    </NuxtLinkLocale>
                </div>
            </div>
        </NuxtLayout>
    </div>
</template>