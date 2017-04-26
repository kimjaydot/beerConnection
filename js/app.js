// Beer Connection External JavaScript File


//Editing Image Slider

// $('.carousel').carousel({
//   interval: 2000
// })
var userLocation = $('#searchZipCode').val();
console.log(userLocation);

$.ajax({
	url: "https://cryptic-cliffs-17021.herokuapp.com/api/"+userLocation,
	method: "GET",
	success: function(res) {
		console.log(res);
	}

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

