import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();

    if (savedPosition) {
      return savedPosition;
    } else {
      return new Promise((resolve) => {
        nuxtApp.hook("page:finish", () => {
          resolve({
            top: 0,
            behavior: "smooth",
          });
        });
      });
    }
  },
};
