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

//ADD YOUR FIREBASE LINKS HERE
var user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML ="welcome "+user_name;

function addRoom(){
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});
localStorage.setItem("room_name",room_name);
window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
console.log("roomname "+ Room_names);
  //End code
  });});}
getData();












