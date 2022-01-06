import firebaseConfig from '/.firebaseConfig.js'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const enabledEmulator = () => process.env.USE_FIREBASE_EMULATOR || false;

// Firebaseをイニシャライズ
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
if (location.hostname === "localhost") {
  db.useEmulator("localhost", 8080);
}

const signin = () => {
  const provider = enabledEmulator ? new firebase.auth.GoogleAuthProvider() : firebase.app().auth.useEmulator('http://localhost:9099');
  // 他のスコープ(権限)にアクセスしたい場合 https://developers.google.com/identity/protocols/googlescopes?hl=ja
  //provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
  firebase.auth().useDeviceLanguage()
  return firebase.auth().signInWithPopup(provider)
}

export { signin, db, firebase }
