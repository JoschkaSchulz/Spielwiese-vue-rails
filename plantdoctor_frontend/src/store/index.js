import Vue from 'vue'
import Vuex from 'vuex'
import {SET_AUTH, SET_PLANT, SET_PLANTS, SET_USER} from "@/store/mutations";
import createPersist from "vuex-localstorage";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    auth: {},
    plants: [],
    currentPlant: {
      name: '',
      size: 0,
      watering: '',
    }
  },
  mutations:{
    [SET_PLANTS] (state, plants) {
      state.plants = plants;
    },
    [SET_PLANT] (state, plant) {
      state.currentPlant = plant;
    },
    [SET_USER] (state, user) {
      state.user = user;
    },
    [SET_AUTH] (state, auth) {
      state.auth = auth;
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersist({
    namespace: 'plant-states',
    initialState: {},
    // ONE_WEEK
    expires: 7 * 24 * 60 * 60 * 1e3})]
})
