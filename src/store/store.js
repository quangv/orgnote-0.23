import Vue from 'vue'
import Vuex from 'vuex'
import { firebaseMutations } from 'vuexfire'

import auth from './auth'
import journal from './journal'
import entry from './entry'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    journal,
    entry,
  },
  mutations: {
    ...firebaseMutations,
  },
})
