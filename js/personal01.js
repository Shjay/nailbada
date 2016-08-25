'use strict'

var person01 = {
	results: document.getElementsByClassName('nailshop'),

	myshop: document.getElementsByClassName('selected_shop'),
	myaca: document.getElementsByClassName('selected_academy'),

	headshop: document.getElementsByClassName('head_shop'),
	headacademy: document.getElementsByClassName('head_academy'),

	init: function(){
		this.setEvent();
	},

	setEvent: function(){
		for(var key in person01.results){
			if(!isNaN(key)){
				person01.results[key].onmouseover = person01.onmouseover_result;
				person01.results[key].onmouseout = person01.onmouseout_result;
			}
		}


		person01.myshop[0].onclick = person01.onclick_myshop;
		person01.myaca[0].onclick = person01.onclick_myaca;
		
	},

	onmouseover_result: function(){
		var target = this.getElementsByClassName('nailshop_pic')[0].getElementsByClassName('active_nailshop')[0];
		target.className += ' active';
	},

	onmouseout_result: function(){
		var target = this.getElementsByClassName('nailshop_pic')[0].getElementsByClassName('active_nailshop')[0];
		target.className = 'active_nailshop';
	},

	onclick_myshop: function(){
		if(this.getAttribute('class').indexOf('linked') > 0){
			this.className = 'selected_shop';
			person01.myaca[0].className += ' linked';
			person01.headacademy[0].className += ' head_hidden';
			person01.headshop[0].className = 'head_detail head_shop';
		}
	},

	onclick_myaca: function(){
		if(this.getAttribute('class').indexOf('linked') > 0){
			this.className = 'selected_academy';
			person01.myshop[0].className += ' linked';
			person01.headshop[0].className += ' head_hidden';
			person01.headacademy[0].className = 'head_detail head_academy';
		}
	}

}

$(function(){

})

