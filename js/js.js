// JavaScript Document

$(function(){	
	var num=0;
	var timer=null;

	//menu导航控制;
		$('.submenu li').click(function(e) {
		var index=$(this).index()+1;
        $(this).addClass('current').siblings().removeClass();
		$('.main').stop().animate({top: -100*index+'%'},800);
		
		 num=index;
		 $('.main>div').eq(num).removeClass('out').siblings().addClass('out');
    });
		$('.home a').click(function(e) {
            $('.main').stop().animate({top: 0},800);
			num=0;
        });
	
	//鼠标滚轮事件；
	$(document).mousewheel(function(e,d){
		clearTimeout(timer);
		timer=setTimeout(function(){
			num-=d;
			if(num>6){num=6};
			if(num<0){num=0};
			
			$('.submenu li').eq(num).addClass('current').siblings().removeClass('current');
			$('.main').stop().animate({top: -100*num+'%'},800);
			$('.main>div').eq(num).removeClass('out').siblings().addClass('out');
		},300);
	});

	//script1
	;(function(){	
	
		function autoType(elementClass, typingSpeed){
		  var thhis = $(elementClass);
		  thhis.css({
			"position": "relative",
			"display": "inline-block",
			"left": "35%",
			"top": "10%",
		  });
		  thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
		  thhis = thhis.find(".text-js");
		  var text = thhis.text().trim().split('');
		  var amntOfChars = text.length;
		  var newString = "";
		  thhis.text("|");
		  setTimeout(function(){
			thhis.css("opacity",1);
			thhis.prev().removeAttr("style");
			thhis.text("");
			for(var i = 0; i < amntOfChars; i++){
			  (function(i,char){
				setTimeout(function() {        
				  newString += char;
				  thhis.text(newString);
				},i*typingSpeed);
			  })(i+1,text[i]);
			}
			if(i == amntOfChars){	
				thhis.text("");
			}
		  },1500);
		}
		
		$(document).ready(function(){
		  // Now to start autoTyping just call the autoType function with the 
		  // class of outer div
		  // The second paramter is the speed between each letter is typed.   
		  autoType(".type-js",200);
		});	
	
	
	})();
	

	//script3
	
	//测试
		$(function(){	
	//自动播放
	var timer = null;
	var num = 0;
	
	function go(){	
		timer = setInterval(function(){	
			num+=3;
			if(num>2400){	
				num=0;
			}
			$('.screen3_all ul').css({left:-num})
			
		},30)
	};
	go();
	
	//鼠标移上，鼠标移出
	
	$('.screen3_all').hover(function(e) {
    	clearInterval(timer)    
    },function(){	
		clearInterval(timer);
		go();
	});
	
	//突出显示
	
	$('.screen3_all li').hover(function(e) {
    	$(this).siblings().stop().fadeTo(300,0.5);
    },function(){	
		$('.screen3_all li').stop().fadeTo(300,1);
	});
	
	
	
})
	
	
	//结束
	
	//script4
	$(function(){	
	$('.screen4_all li').hover(function(e) {
        $(this).stop().animate({width:288}).siblings().stop().animate({width:96})
    },function(){	
		$('.screen4_all li').stop().animate({width:120})
	});
})
	
	//script5
	
	$(".sub").click(function(){
		$(".login").addClass("animated shake");
		setTimeout(function(){
			//1s后刷新整个页面
			window.location.reload();
		},1000);
	});
	$('.screen5 a p').each(function(index, element) {
        $(element).css({background:'rgba(0,0,0,0.3) url(images/bg.png) no-repeat 0px '+ -index*24 +'px'})
    });
	
	$('.screen5 a').hover(function(e) {
        $(this).children('p').stop().slideToggle();
    });
	
		
})
























