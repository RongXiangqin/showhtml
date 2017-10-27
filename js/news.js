$(document).ready(function () {
	//顶部动画
	$(".navbar li").hover(function() {
		$(this).find("dl").stop().slideDown(500);
	}, function() {
		$(this).find("dl").stop().slideUp(500);
	});
	
	//顶部导航栏
	$(window).scroll(function(e) {
		var a = $(window).scrollTop();

		console.log(a);
		if(a > 0) {
			$(".top").addClass("top-active");
			$(".navbar ul li dl").css("top", "48px")
		}
		if(a == 0) {
			$(".top").removeClass("top-active");
		}
//		if(a > 4000) {
//			$("#b04").css("display", "none")
//			
//		}
//		if(a < 4000) {
//			$("#b04").css("display", "inline-block")
//
//		}
		$(".pic img").addClass(" animated bounceInUp")
//		if (a>4000) {
//			$(".footer").animate({
//				marginBottom: "2px"
//
//			},1)
//		}
	});
		//动画-监测滚轮
	$(window).scroll(function(e) {
//		move(".bus-title", 'bus-titleact');
//		move(".time1", 'animated rotateInUpLeft');
//		move(".time2", 'animated rotateInUpLeft');
		move(".nctime1", 'news-conact');
		move(".nctime2", 'news-conact');
		move(".nctime3", 'news-conact');

	})
	
	
	
})
