import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAk0RZao3nLrO9hX1EvwggY3nRL9H4S9q4",
  authDomain: "clone-c2e93.firebaseapp.com",
  databaseURL: "https://clone-c2e93.firebaseio.com",
  projectId: "clone-c2e93",
  storageBucket: "clone-c2e93.appspot.com",
  messagingSenderId: "181020855252",
  appId: "1:181020855252:web:6a2dcde9ec72dcca80e441",
  measurementId: "G-S8SLZHZ8P1",
});

export const auth = firebase.auth();
