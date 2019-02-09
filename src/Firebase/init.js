import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDk0DAEBd0gvoxHvLLz0NIrHtqq-r-Q-c8",
  authDomain: "vuejs-chat-fb7d3.firebaseapp.com",
  databaseURL: "https://vuejs-chat-fb7d3.firebaseio.com",
  projectId: "vuejs-chat-fb7d3",
  storageBucket: "vuejs-chat-fb7d3.appspot.com",
  messagingSenderId: "495549997021"
};

const firebaseApp = firebase.initializeApp(config)
firebaseApp.firestore().settings({ timestampsInSnapshots: true }) //initialize firestore on firebaseApp

export default firebaseApp.firestore()