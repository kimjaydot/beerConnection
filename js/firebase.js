
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDPNbdk5efoon05iQVhCcESiRUXOHXFT1I",
    authDomain: "beer-connected.firebaseapp.com",
    databaseURL: "https://beer-connected.firebaseio.com",
    projectId: "beer-connected",
    storageBucket: "beer-connected.appspot.com",
    messagingSenderId: "416337516806"
  };
  firebase.initializeApp(config);

//create variable to reference database

var database = firebase.database();


//initial value

  var email = "";
  var zip = "";

// capture button click

	$("#submit-button").on("click", function(event) {

		event.preventDefault();

		email = $("#email-input").val().trim();
		zip = $("#zip-input").val().trim();

		database.ref().push({
			email: email,
			zip: zip
		});

	});

	// code for firebase push

		database.ref().on("value", function(snapshot) {

		// log everything coming out of snapshot

		console.log(snapshot.val());
		console.log(email);
		console.log(zip);

	//handle the errors
	}, function(errorObject) {
		console.log("Errors Handled: " + errorObject.code);

		})
