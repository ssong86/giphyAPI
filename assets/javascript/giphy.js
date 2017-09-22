var topics = ['Sushi', 'Pizza', 'Pasta', 'Fried Chicken'];
var currentGif;
var pauseeGif;
var animatedGif;
var stillGif;

//import information from api giphy to buttons
function createButtons(){
	// a fucntion displaying buttons to show
	$("#buttons").empty();
	for(var i = 0; i < topcis.length; i++){
		//write the button names imported from giphy api
		var showBtn = $("<button>").text(topics[i]).addClass("showBtn").attr("data-name": topcis[i]);
		$("#buttons").append(showBtn);
	}

	// on click function for gifs
	$(".showBtn").co("click", function(){
		$(".display").empty();

		//var thisShow = $(this).data("name");
		var giphyURL = "https://api.giphy.com/v1/stickers/search?api_key=1ZJH8kOA2RGcK21tB4rw7JkDrSfHcR1N&q=food&limit=10&offset=0&rating=G&lang=en";
		$.ajax({url:giphyURL, method: 'GET'}).done(function(giphy){
			currentGif = giphy.data;
			$.each(currentGif, function(index,value){
				animatedGif = value.images.original.url;
				pausedGif = value.images.original_still.url;
				var thisRating = value.rating;
				//gives blank ratings 	
			});
		});


	});
}
