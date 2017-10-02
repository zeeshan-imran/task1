import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBtp607dvkKY5NFO81R3N4Qjxv2jWwKFTQ",
    authDomain: "react-authentication-ab6a9.firebaseapp.com",
    databaseURL: "https://react-authentication-ab6a9.firebaseio.com",
    projectId: "react-authentication-ab6a9",
    storageBucket: "react-authentication-ab6a9.appspot.com",
    messagingSenderId: "1026285672138"
  };
export const firebaseApp = firebase.initializeApp(config)

export const userRef = firebase.database().ref('users');
