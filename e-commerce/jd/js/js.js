// JavaScript Document
$(function(){	
	$('.con01_l .menu1').hover(function(e) {
        $('.con01_l .menu1').css({background:'#C81623',color:'#fff'})
		$(this).css({background:'#fff',color:'#C81623'}).children().children('a').css({color:'#C81623'}).children('span').css({color:'#fff'})
    },function(){	
        $('.con01_l .menu1').css({background:'#C81623',color:'#fff'}).children().children().css({color:'#fff'})
	});

	
})










