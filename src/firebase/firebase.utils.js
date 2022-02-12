import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



const confing = {
    apiKey: "AIzaSyBAlTP5AgkHvwa1LBh-NHwDdhrTkrfDOww",
    authDomain: "crwn-shop-db-9a335.firebaseapp.com",
    projectId: "crwn-shop-db-9a335",
    storageBucket: "crwn-shop-db-9a335.appspot.com",
    messagingSenderId: "791597044155",
    appId: "1:791597044155:web:f2d73b6d02496f2ae4f49e",
    measurementId: "G-XGV2N2SVHJ"
  }

  firebase.initializeApp(confing)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () =>auth.signInWithPopup(provider);

  export default firebase;
  