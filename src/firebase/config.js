import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/storage'
import 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCnMJfy2W1bcl7Yepi8q7WoGYMYtyVHaZw",
    authDomain: "olx-com.firebaseapp.com",
    projectId: "olx-com",
    storageBucket: "olx-com.appspot.com",
    messagingSenderId: "163201828812",
    appId: "1:163201828812:web:ca239d67daaf135622ff69",
    measurementId: "G-LBC70K21NQ"
  };

export default firebase.initializeApp(firebaseConfig) 