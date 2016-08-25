'use strict'
var scriptElement = document.createElement('script'); 
scriptElement.src = 'http://code.jquery.com/jquery-latest.js'; 

var home = {

	results: document.getElementsByClassName('nailshop'),

	init: function(){

		this.setEvent();
		home.resizeSearchBox();
	},

	setEvent: function(){
		for(var key in home.results){
			if(!isNaN(key)){
				home.results[key].onmouseover = home.onmouseover_result;
				home.results[key].onmouseout = home.onmouseout_result;
			}
		}
	},

	resizeSearchBox: function(){
		var wSize = window.innerWidth;

		var nav03_wSize = document.getElementsByClassName('nav03')[0].clientWidth;
		var l_arrow = document.getElementsByClassName('arrow left');
		var r_arrow = document.getElementsByClassName('arrow right');

		if(wSize < 320){
			

			document.getElementsByClassName("search_box")[0].style.width = '';
			document.getElementsByClassName("search_txt")[0].style.width = '';

			for(var arrow in r_arrow){
				if(!isNaN(arrow)){
					r_arrow[arrow].style.right = '129px';
				}
			}
			
			for(var arrow in l_arrow){
				if(!isNaN(arrow)){
					l_arrow[arrow].style.left = '129px';
				}
			}


		}else if(wSize < 768){

			var wSize_near_me = document.getElementsByClassName("near_me").clientWidth+35;
			var nav03_wSize = nav03_wSize - wSize_near_me

			document.getElementsByClassName("search_box")[0].style.width = '';
			document.getElementsByClassName("search_txt")[0].style.width = '';

			var half_wSize = wSize/2;
			half_wSize = half_wSize-31;

			for(var arrow in r_arrow){
				if(!isNaN(arrow)){
					r_arrow[arrow].style.right =  half_wSize+'px';
				}
			}
			
			for(var arrow in l_arrow){
				if(!isNaN(arrow)){
					l_arrow[arrow].style.left =  half_wSize+'px';
				}
			}

		}else if(wSize > 768){

			var select_wSize1 = document.getElementsByClassName("select")[0].clientWidth;
			var select_wSize2 = document.getElementsByClassName("select")[1].clientWidth;
			var txt_box_wSize = document.getElementsByClassName("txt_box")[0].clientWidth;
			var near_me_wSize = document.getElementsByClassName("near_me")[0].clientWidth;

			var minus_wSize = select_wSize1+select_wSize2+txt_box_wSize+near_me_wSize;
			var nav03_wSize = nav03_wSize - minus_wSize-22;

			document.getElementsByClassName("search_box")[0].style.width = nav03_wSize+'px';
			document.getElementsByClassName("search_txt")[0].style.width = nav03_wSize-35+'px';	
			
			for(var arrow in r_arrow){
				if(!isNaN(arrow)){
					r_arrow[arrow].style.right =  '';
				}
			}
			
			for(var arrow in l_arrow){
				if(!isNaN(arrow)){
					l_arrow[arrow].style.left =  '';
				}
			}
		}
	},

	onmouseover_result: function(){
		var target = this.getElementsByClassName('nailshop_pic')[0].getElementsByClassName('active_nailshop')[0];
		target.className += ' active';
	},

	onmouseout_result: function(){
		var target = this.getElementsByClassName('nailshop_pic')[0].getElementsByClassName('active_nailshop')[0];
		target.className = 'active_nailshop';
	},

}

window.onresize	= function(){
	home.resizeSearchBox();
};

$(function(){

	var wSize = $(window).innerWidth();

	$('.main_bottom_btn a[href*="#"]:not([href="#"])').click(function() {
		var topSize;

		if(wSize < 768)
			topSize = 160;
		else
			topSize = 185;


		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top-topSize
				}, 1000);
				return false;
			}
		}
	});

	$(window).resize(function(){
		wSize = $(window).innerWidth();
	});
	
});












