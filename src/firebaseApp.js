import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBBYzuxgjQCbEla89Ft8fui8ThX_uDnhPM',
  authDomain: 'orgnote-7f39b.firebaseapp.com',
  databaseURL: 'https://orgnote-7f39b.firebaseio.com',
  projectId: 'orgnote-7f39b',
  storageBucket: '',
  messagingSenderId: '714448271814',
}

const app = firebase.initializeApp(config)
export default app

export const auth = app.auth()
const db = app.firestore()

// Disable deprecated warning
db.settings({
  timestampsInSnapshots: true,
})

const SCHEMA_VERSION = 'v1'
const schemaPath = `schemas/${SCHEMA_VERSION}`

// Prepend common methods with the schemaPath
const dbInterface = {
  collection(path) {
    return db.collection(`${schemaPath}/${path}`)
  },
  doc(path) {
    return db.doc(`${schemaPath}/${path}`)
  },
}

export { dbInterface as db }
