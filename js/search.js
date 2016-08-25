'use strict'

var search = {
	results: document.getElementsByClassName('nailshop'),

	init: function(){
		this.setEvent();
	},

	setEvent: function(){
		for(var key in search.results){
			if(!isNaN(key)){
				search.results[key].onmouseover = search.onmouseover_result;
				search.results[key].onmouseout = search.onmouseout_result;
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
	}

}

