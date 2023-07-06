// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQSIBE-IlOAr6Ul_7nOfTkhZlycK6j7Vc",
    authDomain: "travel-agency-304.firebaseapp.com",
    databaseURL: "https://travel-agency-304-default-rtdb.firebaseio.com",
    projectId: "travel-agency-304",
    storageBucket: "travel-agency-304.appspot.com",
    messagingSenderId: "686740423585",
    appId: "1:686740423585:web:3e797cd1e5d4835ced81e0"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)
const database = getDatabase(app)
const auth = getAuth(app)

export { database, ref, set, push, auth, createUserWithEmailAndPassword,signInWithEmailAndPassword }