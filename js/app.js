// Beer Connection External JavaScript File


//Editing Image Slider

$('.carousel').carousel({
  interval: 2000
})

   var config = {
      apiKey: "Whatever API",
      authDomain: "anything.firebaseapp.com",
      databaseURL: "https://anything.firebaseio.com/",
      storageBucket: "anything.appspot.com"
    };
    firebase.initializeApp(config);


// Create a variable to reference the database

	var database = firebase.database();

