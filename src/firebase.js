/*const firebaseConfig = {
    apiKey: "AIzaSyAIeH-XVN6k25eocZElu2msVCo58LQoZWI",
    authDomain: "todo-app-ad013.firebaseapp.com",
    databaseURL: "https://todo-app-ad013.firebaseio.com",
    projectId: "todo-app-ad013",
    storageBucket: "todo-app-ad013.appspot.com",
    messagingSenderId: "945937620220",
    appId: "1:945937620220:web:b67a332bc876a9cb0e4b79",
    measurementId: "G-FM5P5GKX45"
  };
*/
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAIeH-XVN6k25eocZElu2msVCo58LQoZWI",
    authDomain: "todo-app-ad013.firebaseapp.com",
    databaseURL: "https://todo-app-ad013.firebaseio.com",
    projectId: "todo-app-ad013",
    storageBucket: "todo-app-ad013.appspot.com",
    messagingSenderId: "945937620220",
    appId: "1:945937620220:web:b67a332bc876a9cb0e4b79",
    measurementId: "G-FM5P5GKX45"
})

const db = firebaseApp.firestore();

export default db