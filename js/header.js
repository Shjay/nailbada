'use strict'
var scriptElement = document.createElement('script'); 
scriptElement.src = 'http://code.jquery.com/jquery-latest.js'; 

var header = {
	init: function(){

	}
}

$(function(){

	var url = window.location.href; 
	var idx = url.lastIndexOf("/"); 
	url = url.substring(0, idx+1);

	$("#login_popup").load("login.html");
	$("#signup_popup").load("signup.html");
	$("#memberinfo_popup").load("memberinfo.html");

	//로고버튼 클릭 홈페이지로 이동 
	$('.logo').click(function(){
		self.location='homepage.html';
	});

	//로그인 박스 닫기
	$('body').on('click', '#closeLogin_btn', function() {
		$('#login_popup').css('display', 'none');
		//$('body').css('overflow', 'auto');
		
		$('#topLogin_btn span').removeClass('active_topmenu');


	});

	//회원가입 박스 닫기
	$('body').on('click', '#closeSignup_btn', function() {
		$('#signup_popup').css('display', 'none');
		//$('body').css('overflow', 'auto');

		$('#topSignUp_btn span').removeClass('active_topmenu');
		
	});

	//회원정보수정 박스 닫기
	$('body').on('click', '#closeMemberinfo_btn', function() {
		$('#memberinfo_btn').removeClass('active_menu_li');

		$('#memberinfo_popup').css('display', 'none');
		//$('body').css('overflow', 'auto');
	});

	//로그인박스 안 회원가입 링크
	$('body').on('click', '#signup_linked', function() {
		$('#login_popup').css('display', 'none');
		$('body').css('overflow', 'auto');

		var wSize = $(window).innerWidth();
		if(wSize > 768)
			$('#topLogin_btn span').css('color', '#fff');
		else
			$('#topLogin_btn span').css('color', '#000');
		

		var scrollTop = $(document).scrollTop();
		$('#signup_popup').css('top', scrollTop);
		$('#signup_popup').css('display', 'block');
		$('body').css('overflow', 'hidden');
		$('#topSignUp_btn span').css('color', '#51d4ff');
	});

	$('body').on('click', '.memberinfo .user_info .signup_txt', function() {

		$(this).css('color', '#333');

	});

	//내근처 마우스오버
	$(".near_me_btn").hover(
		function(){
	        $(".txt_s").css('text-shadow', '1px 1px 0 #0044ab, 1px -1px 0 #0044ab, -1px 1px 0 #0044ab, -1px -1px 0 #0044ab');
	        $(".txt_s").css('color', '#51d4ff');
    	},

		function(){
	        $(".txt_s").css('text-shadow', '');
	        $(".txt_s").css('color', '#fff');
    	}
    );

	//상단 로그인버튼 클릭
	$('#topLogin_btn').click(function(){
		var scrollTop = $(document).scrollTop();
		$('#login_popup').css('top', scrollTop);
		$('#login_popup').css('display', 'block');
		//$('body').css('overflow', 'hidden');
		$('#topLogin_btn span').addClass('active_topmenu');

	});

	//상단 회원가입버튼 클릭
	$('#topSignUp_btn').click(function(){
		var scrollTop = $(document).scrollTop();
		$('#signup_popup').css('top', scrollTop);
		$('#signup_popup').css('display', 'block');
		
		//$('body').css('overflow', 'hidden');
		$('#topSignUp_btn span').addClass('active_topmenu');

	});

	//회원정보수정 버튼 클릭
	$('#memberinfo_btn').click(function(){
		var scrollTop = $(document).scrollTop();
		$('#memberinfo_btn').addClass('active_menu_li');
		$('#memberinfo_popup').css('top', scrollTop);
		$('#memberinfo_popup').css('display', 'block');

		//$('body').css('overflow', 'hidden');

	});

	//내 찜 보기
	$('#myfavorite').click(function(){
		self.location='personal01.html';
	});

	//내 댓글 보기 
	$('#myreply').click(function(){
		self.location='personal02.html';
	});

	//홈페이지 상단 네일샵 버튼 클릭
	$("#topnailshop_btn").click(function(){
		$("#topnailshop_btn img").attr('src', 'images/1nailshop_selected_mouseover.png');
		$("#topnailshop_btn p").css('color', '#51d4ff');

		$("#tophakwon_btn img").attr('src', 'images/1hakwon.png');
		$("#tophakwon_btn p").css('color', '#fff');
	});

	//홈페이지 상단 학원 버튼 클릭
	$("#tophakwon_btn").click(function(){
		
		$("#topnailshop_btn img").attr('src', 'images/1nailshop.png');
		$("#topnailshop_btn p").css('color', '#fff');

		$("#tophakwon_btn img").attr('src', 'images/1hakwon_selected_mouseover.png');
		$("#tophakwon_btn p").css('color', '#51d4ff');
	});

	//개인페이지(personal page) 상단 마이페이지 버튼 클릭
	$('#mypage_btn').click(function() {
		var wSize = $(window).innerWidth();
		if(wSize > 768){
			menuSlide768();
		}
    });

	//개인페이지(personal page) 상단 드롭다운 버튼 클릭
	$('.dropped_menu').click(function(){

		var wSize = $(window).innerWidth();

		if(wSize < 768){
			menuSlide320();
		}
	});

	//홈페이지 상단 드롭다운 버튼 클릭
	$('.home_dropped_menu').click(function(){
		var wSize = $(window).innerWidth();

		if(wSize < 768){
			home_menuSlide320();
		}
	});

	//윈도우 Resize
	$(window).resize(function(){
		var wSize = $(window).innerWidth();

		$('#memberinfo_btn').removeClass('active_menu_li');
		$('#mypage_btn span').removeClass('active_topmenu');

		if(wSize < 768){
			
			$('.home_dropped_menu').attr('data-value', 'ns');
			$('#home_menu').attr('class','menu');
			
			//$('.top_menu span').css('color', '#000');
		}else{
			
			$('#mypage_btn').attr('data-value', 'ns');
			$('#mypage').attr('class','mypage');
		
			//$('.top_menu span').css('color', '');
		}
	});

	//홈페이지 드롭다운메뉴 
	var home_menuSlide320 = function(){

		//when right menu is folded
		if($('.home_dropped_menu').attr('data-value') == 'ns'){

			$('#home_menu').removeClass(' slideOutRight320 animated');
			$('#home_menu').addClass(' slideInRight320 animated');
			$('.home_dropped_menu').attr('data-value', 's');

		//when right menu is opened
		}else{

			$('#home_menu').removeClass(' slideInRight320 animated');
			$('#home_menu').addClass(' slideOutRight320 animated');
			$('.home_dropped_menu').attr('data-value', 'ns');			
		}	

	};

	//개인페이지 드롭다운메뉴
	var menuSlide320 = function(){

		//when right menu is folded
		if($('.dropped_menu').attr('data-value') == 'ns'){

			$('#mypage').removeClass(' slideOutRight320 animated');
			$('#mypage').addClass(' slideInRight320 animated');
			$('.dropped_menu').attr('data-value', 's');

		//when right menu is opened
		}else{

			$('#mypage').removeClass(' slideInRight320 animated');
			$('#mypage').addClass(' slideOutRight320 animated');
			$('.dropped_menu').attr('data-value', 'ns');			
		}	

	};

	//개인페이지 마이페이지버
	var menuSlide768 = function(){
		if($('#mypage_btn').attr('data-value') == 'ns'){
				
			$('#mypage').removeClass(' slideOutRight768 animated');
			$('#mypage').addClass(' slideInRight768 animated');
			$('#mypage_btn').attr('data-value', 's');
			$('#mypage_btn span').addClass('active_topmenu');

		}else{
			
			$('#mypage').removeClass(' slideInRight768 animated');
			$('#mypage').addClass(' slideOutRight768 animated');
			$('#mypage_btn').attr('data-value', 'ns');
			$('#mypage_btn span').removeClass('active_topmenu');

		}
	}
});