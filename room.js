function logout() {
  window.location = "index.html";
}

function startup() {
  full_name = localStorage.getItem("full_name");
  email = localStorage.getItem("email");
  password = localStorage.getItem("password");
  document.getElementById("name_display1").innerHTML = "Hello, " + full_name + "<sup><img src='Verified_logo.png' /></sup>";
}

var firebaseConfig = {
  apiKey: "AIzaSyAj5LQ3TvmfykEQktNRf3ga2QcNi5T89LA",
  authDomain: "pinger-82f60.firebaseapp.com",
  projectId: "pinger-82f60",
  storageBucket: "pinger-82f60.appspot.com",
  messagingSenderId: "78376631694",
  appId: "1:78376631694:web:f8dc8170257c31979438df",
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

function add_room() {
  room_name = document.getElementById("room_name_input").value;
  localStorage.setItem("room_name", room_name);

  firebase.database().ref("/").child(room_name).update({
    Pinger: "First Message",
  });
}
