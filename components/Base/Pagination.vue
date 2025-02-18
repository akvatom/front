<script setup>
const route = useRoute();
const { page } = route.query;
const props = defineProps({
  pagination: {
    required: true,
    type: Object,
  },
});
const current_page = ref(page ?? 1);
watch(
  () => route.query,
  (val) => (current_page.value = +(val.page ?? 1))
);

const nextPageQuery = computed(() => {
  if (props.pagination.next) return { query: { page: current_page.value + 1 } };
  else return null;
});

const prevPageQuery = computed(() => {
  if (props.pagination.previous) {
    if (current_page == 2) return { query: {} };
    else return { query: { page: current_page.value - 1 } };
  } else return null;
});

const pageNumberQuery = (index) => {
  if (index === current_page) return null;
  else {
    if (index == 1) return { query: {} };
    else return { query: { page: index } };
  }
};

const getAvailablePages = computed(() =>
  Math.ceil(props.pagination.count / 15)
);
</script>

<template>
  <div class="flex-center gap-4">
    <NuxtLink
      :to="prevPageQuery"
      class="group w-6 h-6 flex-center rounded-lg transition-100"
      :class="
        !pagination.previous
          ? 'is-disabled'
          : 'hover:bg-darkBlue active:bg-darkBlue !bg-opacity-10'
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="7"
        height="12"
        viewBox="0 0 7 12"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.8593 0.414376C6.18275 0.673133 6.23519 1.1451 5.97643 1.46855L2.35125 6.00003L5.97643 10.5315C6.23519 10.855 6.18275 11.3269 5.8593 11.5857C5.53586 11.8444 5.06389 11.792 4.80513 11.4685L0.805129 6.46855C0.585998 6.19464 0.585998 5.80542 0.805129 5.53151L4.80513 0.531506C5.06389 0.20806 5.53586 0.155619 5.8593 0.414376Z"
          class="group-[.is-disabled]:!fill-secondary group-[.is-disabled]:!opacity-40 fill-darkBlue group-active:fill-blue transition-100"
        />
      </svg>
    </NuxtLink>
    <div class="flex-center gap-2.5">
      <NuxtLink
        :to="pageNumberQuery(item)"
        class="w-6 h-6 flex-center rounded-lg text-sm text-darkBlue leading-normal hover:bg-darkBlue hover:bg-opacity-10 select-none"
        v-for="item in getAvailablePages"
        :key="item"
        :class="{
          '!bg-blue !text-white': item == current_page,
        }"
      >
        {{ item }}
      </NuxtLink>
    </div>
    <NuxtLink
      :to="nextPageQuery"
      class="group w-6 h-6 flex-center rounded-lg transition-100"
      :class="
        !pagination.next
          ? 'is-disabled'
          : 'hover:bg-darkBlue active:bg-darkBlue !bg-opacity-10'
      "
    >
      <svg
        class="rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        width="7"
        height="12"
        viewBox="0 0 7 12"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.8593 0.414376C6.18275 0.673133 6.23519 1.1451 5.97643 1.46855L2.35125 6.00003L5.97643 10.5315C6.23519 10.855 6.18275 11.3269 5.8593 11.5857C5.53586 11.8444 5.06389 11.792 4.80513 11.4685L0.805129 6.46855C0.585998 6.19464 0.585998 5.80542 0.805129 5.53151L4.80513 0.531506C5.06389 0.20806 5.53586 0.155619 5.8593 0.414376Z"
          class="group-[.is-disabled]:!fill-secondary group-[.is-disabled]:!opacity-40 fill-darkBlue group-active:fill-blue transition-100"
        />
      </svg>
    </NuxtLink>
  </div>
</template>
