// JavaScript Document
$(function(){	
	var winH = $(window).height();
	var divH = $('.float').height();
	
	$(window).scroll(function(e) {
		var winT = $(window).scrollTop();
		if(winT<250){	
			$('.float').stop().animate({top:250+'px'})
		}else{	
        	$('.float').stop().animate({top:winT+(winH-divH)/2})
		}
    });
	
})










