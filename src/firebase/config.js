import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDPs-GY_6uHcCzl14TJIpjz_GipAZgaASs",
  authDomain: "autonomous-units.firebaseapp.com",
  projectId: "autonomous-units",
  storageBucket: "autonomous-units.appspot.com",
  messagingSenderId: "277741489619",
  appId: "1:277741489619:web:0e62f79634beb0e2abb326"
};

//init firebase 

firebase.initializeApp(firebaseConfig)

//init service

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export  { projectFirestore, projectAuth }
