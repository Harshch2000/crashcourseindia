// Your web app's Firebase configuration 
// For Firebase JS SDK v7.20.0 and later, 
// measurementId is optional 
var firebaseConfig = { 
    apiKey: "AIzaSyCayFIDoJFXu5890dI45XnsO8WqhbsssHM",
    authDomain: "crashcourseindia-c3e5b.firebaseapp.com",
    databaseURL: "https://crashcourseindia-c3e5b-default-rtdb.firebaseio.com",
    projectId: "crashcourseindia-c3e5b",
    storageBucket: "crashcourseindia-c3e5b.appspot.com",
    messagingSenderId: "291311428031",
    appId: "1:291311428031:web:c10b73854eac53f42d010a",
    measurementId: "G-WB6F7V4GHL",
}; 

	// Initialize Firebase 
firebase.initializeApp(firebaseConfig); 

const auth = firebase.auth();

// Signup function 
function signUp() { 
var email = document.getElementById("email"); 
var password = Math.floor(Date.now() / 1000); 

const promise = auth.createUserWithEmailAndPassword( 
	email.value, 
	password.value 
); 
promise.catch((e) => alert(e.message)); 
alert("SignUp Successfully"); 
} 
