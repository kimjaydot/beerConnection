// Beer Connection External JavaScript File


//Editing Image Slider

// $('.carousel').carousel({
//   interval: 2000
// })



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
			} //for loop

			$('#placesData').append(html);
		
		}//success function
	}) //ajax call

	
	

	});






