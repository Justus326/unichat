import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


export  const auth = firebase.initializeApp ({
    apiKey: "AIzaSyAUxcNag837ytdE5Iw03UwLDAXBvKZGByI",
    authDomain: "unichat-3eb35.firebaseapp.com",
    projectId: "unichat-3eb35",
    storageBucket: "unichat-3eb35.appspot.com",
    messagingSenderId: "369432106754",
    appId: "1:369432106754:web:b8ff10993979e2b1d7941b"
  }).auth();
  