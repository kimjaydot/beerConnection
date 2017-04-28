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
			    html += '<tr>' +
			            '<td>'+
			            '<div>'+object.businesses[i].name+'</div>' +
			            '<div>'+object.businesses[i].location.display_address.join(', ')+'</div>' +
			            '<div>'+object.businesses[i].phone + '</div>' +
			            '<img src=\"' + object.businesses[i].image_url + '\" />' +
			            '<div>' + object.businesses[i].price + '</div>' +
			            '</td>' +
			            '</tr>';
			} //for loop

			$('#placesData').append(html);
		
		}//success function
	}) //ajax call

	
	

	});






