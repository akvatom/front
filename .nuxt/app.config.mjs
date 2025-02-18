
import { updateAppConfig } from '#app'
import { defuFn } from '/var/www/clindoc/clindoc-front/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {
    "buildId": "dfad6df6-7274-49eb-b665-6f56f111756a"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
