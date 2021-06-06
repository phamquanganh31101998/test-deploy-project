import Vue from "vue"
import VueCompositionAPI from "@vue/composition-api"
import App from "./App.vue"
import router from "./router"
// eslint-disable-next-line import/no-cycle
import store from "./store"
import vuetify from "./plugins/vuetify"
import i18n from "./lang/i18n"

Vue.use(VueCompositionAPI)
Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App)
}).$mount("#app")

export default app
