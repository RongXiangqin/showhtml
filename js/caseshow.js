$(document).ready(function () {
	//顶部动画
	$(".navbar li").hover(function() {
		$(this).find("dl").stop().slideDown(500);
	}, function() {
		$(this).find("dl").stop().slideUp(500);
	});
	var wid=$(".es-picmodel").width()
	$(".es-bg").css("width",wid)
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
		move(".time1", 'animated rotateInUpLeft');
		move(".time2", 'animated rotateInUpLeft');

	})
	
	$(".es-title").eq(0).click(function () {
		$(".es-title").removeClass("title-active")
		$(this).addClass("title-active");
		$(".es-picmodel").css("display",'block');
		$(".es-picmodel").addClass("animated rotateInUpLeft")
	})
	$(".es-title").eq(1).click(function () {
		$(".es-title").removeClass("title-active")
		$(this).addClass("title-active");
		$(".es-picmodel").css("display",'none');
		$(".es-picmodel").eq(4).css("display",'block');
		$(".es-picmodel").eq(5).css("display",'block');
		$(".es-picmodel").eq(4).addClass("animated rotateInUpLeft")
		$(".es-picmodel").eq(5).addClass("animated rotateInUpLeft")
		
	});
	$(".es-title").eq(2).click(function () {
		$(".es-title").removeClass("title-active")
		$(this).addClass("title-active");
		$(".es-picmodel").css("display",'none');
		$(".es-picmodel").eq(0).css("display",'block');
		$(".es-picmodel").eq(1).css("display",'block');
		$(".es-picmodel").eq(2).css("display",'block');
		$(".es-picmodel").eq(3).css("display",'block');
		$(".es-picmodel").eq(7).css("display",'block');
		$(".es-picmodel").eq(8).css("display",'block');
	})
	$(".es-title").eq(3).click(function () {
		$(".es-title").removeClass("title-active")
		$(this).addClass("title-active");
		$(".es-picmodel").css("display",'none');
		$(".es-picmodel").eq(6).css("display",'block');
		$(".es-picmodel").eq(6).addClass("animated rotateInUpLeft")
	})
	
	
	
	
	
	
})