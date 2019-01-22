import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import 'firebase/database';
import 'firebase/auth';
import { firebaseMutations } from 'vuexfire'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default () => new Vuex.Store({
  state: {
    ...state
  },
  getters,
  mutations: {
    ...mutations,
    ...firebaseMutations
  },
  actions
})