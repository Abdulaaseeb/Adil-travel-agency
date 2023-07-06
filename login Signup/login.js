import { database, ref, set, auth, signInWithEmailAndPassword } from "../config/fbConfig.js";



var email = document.getElementById('email')
var password = document.getElementById('password')

window.logIn = function () {
    var obj = {
        email: email.value,
        password: password.value,
    }
    console.log(obj)
    signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function(res){
       alert("Your Account has been successfully Login")
        window.location.assign ("../home.html")
    })
    .catch(function(err){
        console.log("error",err)
        alert("Your Email or Password does not exist")

    })
    // var reference = ref(database, "users/")
    // set(reference,obj)
}