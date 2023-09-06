import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyByeZS9ozzhb13qrAfk0OUrsicjL1qZH1A",
    authDomain: "twitter-clone-1d9fd.firebaseapp.com",
    projectId: "twitter-clone-1d9fd",
    storageBucket: "twitter-clone-1d9fd.appspot.com",
    messagingSenderId: "700093769411",
    appId: "1:700093769411:web:3644031c17b4a7d931a476",
    measurementId: "G-LDFX4PKCYN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;