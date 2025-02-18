import { StorageSerializers, useSessionStorage } from "@vueuse/core";

export default async (url, opts) => {
  const time1 = Date.now();
  const config = useRuntimeConfig();
  const today = new Date().getDate();

  const cache = useSessionStorage(`${url}?date=${today}`, null, {
    serializer: StorageSerializers.object,
  });

  if (!cache.value) {
    const { data, error } = await useFetch(url, {
      baseURL: config.public.baseURL,
      ...opts,
    });

    if (error.value) {
      throw createError({
        ...error.value,
        statusMessage: `Could not fetch from ${url}`,
      });
    }

    cache.value = data.value;
    // console.log(`Fetching data for ${url}`)
  } else {
    // console.log(`Getting data from cache for ${url}`);
  }

  const time2 = Date.now();
  return cache;
};
