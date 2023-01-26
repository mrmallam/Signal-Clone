// import * as firebase from 'firebase';
// import "firebase/auth";
// import "firebase/firestore";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDkqF_LCGkLc-V_sygf6v4wwWuyusu67pg",
    authDomain: "signal-clone-yt-bui.firebaseapp.com",
    projectId: "signal-clone-yt-bui",
    storageBucket: "signal-clone-yt-bui.appspot.com",
    messagingSenderId: "1012080515347",
    appId: "1:1012080515347:web:42dade46de51792c3662e6"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
