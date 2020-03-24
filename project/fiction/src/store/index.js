import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    malenewbooksslice: null
    
  },
  mutations: {
    getmalenewbooksslice(state, playload) {
      state.malenewbooksslice = playload. amount;
    }
  },
  actions: {},
  modules: {}
});
