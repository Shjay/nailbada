'use strict'

var search = {

	init: function(){
		//search.resizeSearchBox();
		
		var mapCanvas = document.getElementById("map");
		var mapOptions = {
		    center: new google.maps.LatLng(37.5540193,126.9337278), zoom: 16
		}
		var map = new google.maps.Map(mapCanvas, mapOptions);
	}

}

$(function(){

	$('.booking').hover(
		function(){
			$('.booking img').attr('src', 'images/reservation_yellow.png');
		},
		function(){
			if($(this).attr('data-value') == 'ns')
				$('.booking img').attr('src', 'images/reservation.png');
		}
	);

	$('.booking').click(function(){

		if($(this).attr('data-value') == 'ns'){
			$('.booking img').attr('src', 'images/reservation_yellow.png');
			$(this).attr('data-value', 's');
		}else{
			$('.booking img').attr('src', 'images/reservation.png');
			$(this).attr('data-value', 'ns');
		}	

	});


	$('.favorite').hover(
		function(){
			$('.favorite img').attr('src', 'images/star_yellow.png');
		},
		function(){
			if($(this).attr('data-value') == 'ns')
				$('.favorite img').attr('src', 'images/star_grey.png');
		}
	);

	$('.favorite').click(function(){

		if($(this).attr('data-value') == 'ns'){
			$('.favorite img').attr('src', 'images/star_yellow.png');
			$(this).attr('data-value', 's');
		}else{
			$('.favorite img').attr('src', 'images/star_grey.png');
			$(this).attr('data-value', 'ns');
		}
	});

	
});
