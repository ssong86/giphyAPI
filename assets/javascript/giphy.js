var topics = ['France', 'Mexico', 'Korea', 'Japan', 'China', 'Italy'];
var currentGif;
var pausedGif;
var animatedGif;
var stillGif;

//import information from api giphy to buttons
function createButtons(){
	// a fucntion displaying buttons to show
	$("#buttons").empty();
	for(var i = 0; i < topics.length; i++){
		//write the button names imported from giphy api
		var showBtn = $("<button>").text(topics[i]).addClass("showBtn").attr({"data-name": topics[i]});
		$("#buttons").append(showBtn);
	}

	// on click function for gifs
	$(".showBtn").on("click", function(){
		$(".display").empty();

		var thisShow = $(this).data("name");
		var giphyURL = "https://api.giphy.com/v1/gifs/search?api_key=1ZJH8kOA2RGcK21tB4rw7JkDrSfHcR1N&q="+ thisShow+ "&limit=10&offset=0&rating=G&lang=en";
		$.ajax({url:giphyURL, method: 'GET'}).done(function(giphy){
			currentGif = giphy.data;
			$.each(currentGif, function(index,value){
				animatedGif = value.images.original.url;
				pausedGif = value.images.original_still.url;
				var thisRating = value.rating;
				//gives blank ratings 'unrated' text
				if(thisRating === ''){
					thisRating = 'unrated';
				}
				var rating = $('<h5>').html("Rated: "+thisRating).addClass('ratingStyle');
				stillGif = $('<img>').attr('data-animated', animatedGif).attr('data-paused', pausedGif).attr('src', pausedGif).addClass('gif');
				var fullGifDisplay = $('<button>').append(rating, stillGif);
				$(".display").append(fullGifDisplay);
			});
		});
	});
}

//animates and pause gif on hover
$(".gif").on("click", function(){
	var state = $(this).attr("data-attr");
	if(state === 'data-animated'){
		$(this).attr('src', $(this).data('animated'));
	}
	else{
		$(this).attr('src', $(this).data('paused'));
	}
});


//sets a button from input
$('#addShow').on('click', function(){
	var newShow = $('#newShowInput').val().trim();
	topics.push(newShow);
	createButtons();
	return false;
});

createButtons();


