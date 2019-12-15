import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routeId: 0,
  },
  mutations: {
    setrouteId(state, routeId) {
      state.routeId = routeId;
    }
  },
  getters: {
    routeId(state) {
      return state.routeId;
    }
  },
  actions: {
  },
  modules: {
  }
})
