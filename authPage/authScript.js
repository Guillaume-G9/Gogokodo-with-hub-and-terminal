firebase.initializeApp( {
    apiKey: "AIzaSyAD1KPUlqKsN3eU_2ikLhU4HUcPsfytkLU",
    authDomain: "gogokodo-2590b.firebaseapp.com",
    projectId: "gogokodo-2590b",
    storageBucket: "gogokodo-2590b.appspot.com",
    messagingSenderId: "833185072727",
    appId: "1:833185072727:web:03129f4b8d69a734328512"
    });



const email = document.querySelector('#email')
const password = document.querySelector('#password')
const connexionBtn = document.querySelector('button')
// const errorMsgEmail = document.querySelector('#emailError')
// const errorMsgPassword = document.querySelector('#passwordError')

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
function validatePassword(password) {
    if (password.value.length >= 8) {
        return true
    } else {
        return false
    }
}
function singIn (email, password) {
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
        // Signed in
        document.location.href = "http://127.0.0.1:5500/index.html"
        var user = userCredential.user;
        console.log(user);
        console.log(currentUser.user);
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
    });
}
connexionBtn.addEventListener('click', () => {
    if(validateEmail(email.value) && validatePassword(password)){
        singIn(email,password)
    } else {
        // errorMsgEmail.textContent = "error";
        // errorMsgPassword.textContent = "error";
    }
})
  
  
  
  
  
  
