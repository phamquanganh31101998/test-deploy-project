import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false
  },
  mutations: {
    toggleNavDrawer(state) {
      // eslint-disable-next-line no-param-reassign
      state.drawer = !state.drawer
    }
  },
  actions: {
    toggleNavDrawer({ commit }) {
      commit("toggleNavDrawer")
    }
  },
  getters: {
    drawer: (state) => state.drawer
  },
  modules: {}
})
