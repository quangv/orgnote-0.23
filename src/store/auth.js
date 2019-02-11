import firebase from '../firebaseApp'
import router from '../router'

export default {
  namespaced: true,
  state: {
    user: null,
    error: {},
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setError(state, error) {
      state.error = {
        [router.currentRoute.name]: error,
      }
    },
    clearError(state) {
      state.error = {}
    },
  },
  actions: {
    init: ({ commit, state }) => {
      commit('setUser', firebase.auth().currentUser)
      if (state.user) {
        router.push('/journal')
      }
    },
    signIn: ({ commit }, { email, password }) => {
      console.log('si', email, password)
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(({ user }) => {
          commit('clearError')
          commit('setUser', user)
          router.push('/journal')
        })
        .catch(error => {
          commit('setError', error.message)
        })
    },
    signOut({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit('setUser', null)
          router.push('/')
        })
    },
    signUp({ commit }, { email, password }) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(({ user }) => {
          commit('clearError')
          commit('setUser', user)
          router.push('/journal')
        })
        .catch(error => {
          commit('setError', error.message)
        })
    },
  },
}
