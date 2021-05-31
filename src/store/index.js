import Vue from "vue"
import Vuex from "vuex"
// eslint-disable-next-line import/no-cycle
import app from "../main"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {
    SET_LANG(state, payload) {
      app.$i18n.locale = payload
    }
  },
  actions: {
    setLang({ commit }, payload) {
      commit("SET_LANG", payload)
    }
  },
  modules: {}
})
