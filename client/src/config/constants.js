import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyAhSEb4I34DUN3MytCheNfclAGB4ujGGQo",
  authDomain: "caf-benchmark.firebaseapp.com",
  databaseURL: "https://caf-benchmark.firebaseio.com",
  projectId: "caf-benchmark",
  storageBucket: "caf-benchmark.appspot.com",
  messagingSenderId: "459469552700"
};
firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
