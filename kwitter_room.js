//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
  apiKey: "AIzaSyAJpelAtL9UJ_SKasIblQkEUSLnSEVg7w4",
  authDomain: "letschatt-9671d.firebaseapp.com",
  databaseURL: "https://letschatt-9671d-default-rtdb.firebaseio.com",
  projectId: "letschatt-9671d",
  storageBucket: "letschatt-9671d.appspot.com",
  messagingSenderId: "762667340236",
  appId: "1:762667340236:web:09257e3770b343d1fd4d69",
  measurementId: "G-FC29D7VTCS"
};
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
