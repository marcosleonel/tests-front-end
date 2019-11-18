import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    result: ""
  },
  mutations: {
    result: (state, payload) => {
      state.result = payload;
    }
  },
  actions: {
    updateResult: ({ commit }, payload) => {
      commit("result", payload);
    }
  },
  modules: {}
});
