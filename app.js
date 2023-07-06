// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
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
const database = getDatabase(app)



var names = document.getElementById('name')
var fNames = document.getElementById('fName')
var contact = document.getElementById('contact')
var date = document.getElementById('date ')
var option = document.getElementById('option')
var persons = document.getElementById('persons')

window.submitInquiry = function () {
  var idRef = ref(database, "userInfo/")
  var id = push(idRef).key
  var obj = {
    names: names.value,
    fNames: fNames.value,
    contact: contact.value,
    date: date.value,
    option: option.value,
    persons: persons.value,
    id: id
  }

  var reference = ref(database, `userInfo/${id}`)
  set(reference, obj)
}


























