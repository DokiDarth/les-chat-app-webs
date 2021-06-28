// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD20bqsBgbeHzd4bzYLTKc9KGwvsqwuALE",
  authDomain: "kwitter-3873b.firebaseapp.com",
  databaseURL: "https://kwitter-3873b-default-rtdb.firebaseio.com",
  projectId: "kwitter-3873b",
  storageBucket: "kwitter-3873b.appspot.com",
  messagingSenderId: "735626427671",
  appId: "1:735626427671:web:f1183873d90911e04e8b52"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function add_user (){
user_name = document.getElementById("user_name").value;
localStorage.setItem("user_name",user_name);
window.location = "kwitter_room.html";
} 
