
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyB_-y7urIGlBEF3qmkmwOdGUsNOrzkhWwY",
      authDomain: "kwitter--2.firebaseapp.com",
      databaseURL: "https://kwitter--2-default-rtdb.firebaseio.com",
      projectId: "kwitter--2",
      storageBucket: "kwitter--2.appspot.com",
      messagingSenderId: "413541192845",
      appId: "1:413541192845:web:478d7d6d03bfd3d2d0bec4"
    };
    firebase.initializeApp(firebaseConfig);


    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + " " + user_name + "!";

function addRoom()
{
room_name= document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({hi452:"creating social website"});
localStorage.setItem("room_name",room_name);
window.location='kwitter_page.html';
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name"+ Room_names);
row = "<div class='room_name' id="+Room_names+" onclick ='redirectToRoomName(this.id)' >#"+ Room_names +"</div> <hr>";
document.getElementById("output").innerHTML += row ;
      //End code

      });});}

getData();
function redirectToRoomName(name) { console.log(name);
       localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html"; }


