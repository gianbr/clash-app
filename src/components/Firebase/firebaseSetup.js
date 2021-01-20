import firebase from "firebase/app";
import "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDrrGyN5iq21k5aiQxNLXV87pHOLd0Hnt8",
    authDomain: "clash-app-coder.firebaseapp.com",
    projectId: "clash-app-coder",
    storageBucket: "clash-app-coder.appspot.com",
    messagingSenderId: "744489514091",
    appId: "1:744489514091:web:578c67b5184dccd9ed6d2e"
};

// Initialize Firebase
const instanceApp = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
    return firebase.firestore(instanceApp);
}