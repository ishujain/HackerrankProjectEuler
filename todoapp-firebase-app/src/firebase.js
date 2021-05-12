import firebase from 'firebase';

const firebaseapp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyB8wNNl5nbVSpsnAgx_v7en0M7sFzgS6Uw",
    authDomain: "todo-app-cp-2021.firebaseapp.com",
    projectId: "todo-app-cp-2021",
    storageBucket: "todo-app-cp-2021.appspot.com",
    messagingSenderId: "738534339758",
    appId: "1:738534339758:web:73830b020d6222a31ce93f",
    measurementId: "G-ZHWFQ7Y5YR"
});

const db = firebaseapp.firestore();

export default db ;