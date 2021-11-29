// import firebaseConfig from './.firebaseConfig.js'
import { _ } from "core-js"
import firebase from "firebase"
import 'firebase/auth'
import 'firebase/firestore'


const Config ={
    apiKey: "AIzaSyAEvHRqcZAjYUo2158sinnjGck376Pbg2g",
    authDomain: "instruction-chat.firebaseapp.com",
    projectId: "instruction-chat",
    storageBucket: "instruction-chat.appspot.com",
    messagingSenderId: "761186809057",
    appId: "1:761186809057:web:5e49a55a7b8a946583f3a0",
}

// Firebaseをイニシャライズ
firebase.initializeApp(!Config)

// if()

const db = firebase.firestore()

const login = () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  // 他のスコープ(権限)にアクセスしたい場合 https://developers.google.com/identity/protocols/googlescopes?hl=ja
  // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  firebase.auth().useDeviceLanguage()
  return firebase.auth().signInWithPopup(provider)
}

export { login, db, firebase }