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
var password = document.getElementById("password"); 

const promise = auth.createUserWithEmailAndPassword( 
	email.value, 
	password.value 
); 
promise.catch((e) => alert(e.message)); 
alert("SignUp Successfully"); 
} 

// SignIN function 
function signIn() { 
var email = document.getElementById("email"); 
var password = document.getElementById("password"); 
const promise = auth.signInWithEmailAndPassword( 
			email.value, password.value); 
promise.catch((e) => alert(e.message)); 
} 

// SignOut 
function signOut() { 
auth.signOut(); 
alert("SignOut Successfully from System"); 
} 

// Active user to homepage 
function checkFunction() {
    firebase.auth().onAuthStateChanged((user) => { 
        if (user) { 
            var email = user.email; 
            alert("Active user " + email); 
        } else { 
            alert("No Active user Found"); 
            document.getElementById('whatsappCard').addEventListener('click', function() {
                if (!checkFunction()) {
                    var email = prompt("Please enter your email:");
                    var password = prompt("Please enter your password:");
                    // You can now use 'email' and 'password' for further processing
                } else {
                    window.open("https://whatsapp.com/channel/0029VaaDqIP7YSd244XP8O1T", '_blank');
                }
            });
        } 
        }); 
}
