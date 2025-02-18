import { VueReCaptcha } from 'vue-recaptcha-v3';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueReCaptcha, {
        siteKey: '6LfO4aQpAAAAAP6FaRJsqiMRLFG5npdZ2JuE77i1',
        loaderOptions: {
          autoHideBadge: true,
          explicitRenderParameters: {
              badge: 'bottomleft',
          }
      },
    });
});
