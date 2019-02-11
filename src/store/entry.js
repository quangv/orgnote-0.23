import firebase from 'firebase'
import { firebaseAction } from 'vuexfire'

import { auth, db } from '../firebaseApp'

export default {
  namespaced: true,

  state: {
    entry: null,
  },

  actions: {
    init: firebaseAction(({ bindFirebaseRef, commit, state }, { entryId }) => {
      if (!auth.currentUser) {
        return
      }
      const uid = auth.currentUser.uid
      bindFirebaseRef('entry', db.doc(`users/${uid}/notes/${entryId}`))
    }),

    updateEntry({ commit }, { note, entryId }) {
      if (!auth.currentUser) {
        return
      }
      const uid = auth.currentUser.uid

      db.doc(`users/${uid}/notes/${entryId}`).update({
        note,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
    },

    deleteEntry({ commit }, { entryId }) {
      if (!auth.currentUser) {
        return
      }
      const uid = auth.currentUser.uid

      db.doc(`users/${uid}/notes/${entryId}`).delete()
    },
  },
}
