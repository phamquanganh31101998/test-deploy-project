import Vue from "vue"
import VueCompositionAPI from "@vue/composition-api"
import Toast from "vue-toastification"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import vuetify from "./plugins/vuetify"
import i18n from "./lang/i18n"
// Import the CSS or use your own!
import "vue-toastification/dist/index.css"

const options = {
  // You can set your default options here
  timeout: 3000,
  position: "bottom-right"
}

Vue.use(Toast, options)
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
