// Beer Connection External JavaScript File


//Editing Image Slider

// $('.carousel').carousel({
//   interval: 2000
// })

var mainTexas = {lat: 29.759237, lng: -95.357553};
var mapArray = [];
var map = new google.maps.Map(document.getElementById('map'), {
                      zoom: 10,
                      center: mainTexas
                    });
                    
$('#submitBtn').click(function(e){
  e.preventDefault();
  var userLocation = $('#searchZipCode').val();
	$.ajax({
		url: "https://cryptic-cliffs-17021.herokuapp.com/api/"+userLocation,
		method: "GET",
		success: function(res) {
			console.log(res);

			var object = res;

			var html = "";

			for (var i = 0; i < object.businesses.length; i++) {
			    html += '<div class="resultsContainer"; style= "display: flex;">' +
			            '<img width ="200px" height = "200px" src=\"' + object.businesses[i].image_url + '\" />' +
			            '<ul style="list-style-type: none;">'+
			            '<li>'+object.businesses[i].name+'</li>' +
			            '<li>'+object.businesses[i].location.display_address.join(', ')+'</li>' +
			            '<li>'+object.businesses[i].display_phone + '</li>' +
			            '<li>' + object.businesses[i].price + '</li>' +
			            '</ul>' +
			            '</div>';

			            
			            
			 mapArray.push({
			 	long: object.businesses[i].coordinates.longitude,
			 	lat: object.businesses[i].coordinates.latitude,
			 	title: object.businesses[i].name
			 });

			} //for loop

			console.log(mapArray);

			$('#placesData').append(html);

		mapArray.forEach(function(el) {
			var markerOne = new google.maps.Marker({
                        position: {lng: el.long, lat: el.lat},
                        //position: {lat: 59.327, lng: 18.067}
                        map: map,
                        animation: google.maps.Animation.DROP,
                        title: el.title
                        });

		});

		}//success function
	}) //ajax call

}); // click

	





