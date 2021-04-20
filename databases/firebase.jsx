import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBIwVlOFnevjqmhDtxiyzM0TUc3HHlXvAY",
    authDomain: "hrcompanionapp.firebaseapp.com",
    projectId: "hrcompanionapp",
    storageBucket: "hrcompanionapp.appspot.com",
    messagingSenderId: "210497585136",
    appId: "1:210497585136:web:be0137f89792b10e35a735",
    measurementId: "G-3YHKJ60JSQ"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
  
export default { firebase, db }