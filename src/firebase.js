import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXhn0NluvHb5JZGCZ-yPlKxlf0nsc9J5U",
  authDomain: "takecareweb-3600e.firebaseapp.com",
  databaseURL: "https://takecareweb-3600e.firebaseio.com",
  projectId: "takecareweb-3600e",
  storageBucket: "takecareweb-3600e.appspot.com",
  messagingSenderId: "595966815050",
  appId: "1:595966815050:web:c2b5aa7b93fd0fc0426fb3",
  measurementId: "G-V7GMV64P17",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;