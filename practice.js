//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyBGERyHngfCp4OoJPdzJkT7y_HCBoo87fo",
    authDomain: "kwitter-6c330.firebaseapp.com",
    databaseURL: "https://kwitter-6c330-default-rtdb.firebaseio.com",
    projectId: "kwitter-6c330",
    storageBucket: "kwitter-6c330.appspot.com",
    messagingSenderId: "343244999748",
    appId: "1:343244999748:web:8c5d49edc6448d1c7a0011"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding user"
      });
  }