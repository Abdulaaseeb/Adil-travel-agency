import { database, ref, set, auth, createUserWithEmailAndPassword } from "../config/fbConfig.js";


var fullname = document.getElementById('fullname')
var email = document.getElementById('email')
var password = document.getElementById('password')

window.signUp = function () {
    var obj = {
        fullname: fullname.value,
        email: email.value,
        password: password.value,
    }
    console.log(obj)
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function(res){
       alert("Your Account has been successfully created")
        window.location.assign ("../home.html")
    })
    .catch(function(err){
        // console.log("error",err)
        alert("Your Name or Email is already taken")

    })
    // var reference = ref(database, "users/")
    // set(reference,obj)
}