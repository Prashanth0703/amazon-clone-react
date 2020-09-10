import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD9mmwsrmdpfPhZQBQ8Rp5Sfy7y4Q7piNU",
  authDomain: "clone-58609.firebaseapp.com",
  databaseURL: "https://clone-58609.firebaseio.com",
  projectId: "clone-58609",
  storageBucket: "clone-58609.appspot.com",
  messagingSenderId: "347453384556",
  appId: "1:347453384556:web:e4a7100b07699c9d7a3549",
  measurementId: "G-NY4Y570N89",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
