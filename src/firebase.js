import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBfxuIi5DGLGFvu-ksc5imxb98Ha3QXSFc",
    authDomain: "clone-e9237.firebaseapp.com",
    projectId: "clone-e9237",
    storageBucket: "clone-e9237.appspot.com",
    messagingSenderId: "244125673537",
    appId: "1:244125673537:web:741ba7685ea261c7e7fec0",
    measurementId: "G-8218BX2WGP"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };