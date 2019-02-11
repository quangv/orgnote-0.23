import firebase from 'firebase'
import { firebaseAction } from 'vuexfire'

import { auth, db } from '../firebaseApp'

export default {
  namespaced: true,
  state: {
    entries: [],
    input: '',
    error: '',
  },
  mutations: {
    setInput(state, value) {
      state.input = value
    },
    clearInput(state) {
      state.input = ''
    },
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = ''
    },
  },
  actions: {
    setEntriesRef: firebaseAction(({ bindFirebaseRef }, ref) => {
      bindFirebaseRef('entries', ref)
    }),
    init: firebaseAction(({ bindFirebaseRef }) => {
      if (!auth.currentUser) {
        return
      }
      const uid = auth.currentUser.uid
      bindFirebaseRef(
        'entries',
        db.collection(`users/${uid}/notes`).orderBy('createdAt', 'desc')
      )
    }),

    add: ({ commit }, { value }) => {
      if (!auth.currentUser) {
        return
      }
      const uid = auth.currentUser.uid

      const entry = {
        note: value,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
        ownerId: uid,
      }

      db.collection(`users/${uid}/notes`)
        .add(entry)
        .then(docRef => {
          commit('clearInput')
          commit('clearError')
        })
        .catch(() => {
          commit('setError', 'An error occured while saving entry.')
        })
    },
  },
}
