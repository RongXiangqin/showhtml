$(document).ready(function() {
	//轮播图
	
	//轮播2
	var unslider05 = $('#b05').unslider({
			dots: false
		}),
		data05 = unslider05.data('unslider');

	$('.unslider-arrow04').click(function() {
		var fn = this.className.split(' ')[1];
		data05[fn]();
	});
	//顶部动画
	$(".navbar li").hover(function() {
		$(this).find("dl").stop().slideDown(500);
	}, function() {
		$(this).find("dl").stop().slideUp(500);
	});
	//more donghua 
	$(".au-more").hover(function() {
		$(this).find("i").stop().animate({
			right: "128px",
			opacity: "1"
		}, 300)
	}, function() {

		$(this).find("i").stop().animate({
			right: "144px",
			opacity: "0"
		}, 300)
	})
	var wid=$(".es-picmodel").width()
	$(".es-bg").css("width",wid)


	$(".new-more").hover(function() {
		$(this).find("i").stop().animate({
			right: "128px",
			opacity: "1"
		}, 300)
	}, function() {

		$(this).find("i").stop().animate({
			right: "144px",
			opacity: "0"
		}, 300)
	})
	//顶部导航栏
	$(window).scroll(function(e) {
		var a = $(window).scrollTop();

		console.log(a);
		if(a > 0) {
			$(".top").addClass("top-active");
			$(".navbar ul li dl").css("top", "48px")
		}
		if(a == 0) {
			a=1
			$(".top").removeClass("top-active");
		}
		if (a>1000) {
			$("#slider").css("display","none")
		} 
		if (a<1000) {
			$("#slider").css("display","block")
		}
	});

	//动画-监测滚轮
	$(window).scroll(function(e) {

//		move(".bc-box", 'bc-boxact');
//		move(".bus-title", 'bus-titleact');
//		move(".time1", 'animated rotateInUpLeft');
//		move(".time2", 'animated rotateInUpLeft');
		move(".pic", " animated bounceInUp");
//		move(".vmore-box", " vmore-act");
//		move(".view-more", " vmore-color");
//		move(".ab-title", 'ab-titleact');
//		move(".au-intro", 'au-introact');
//		move(".au-more", 'au-moreact');
//		move(".new-title", 'new-titleact');
//		move(".nctime1", 'news-conact');
//		move(".nctime2", 'news-conact');
//		move(".nctime3", 'news-conact');
//		move(".new-more", 'new-moreact');
//		move(".bo-title", 'bo-titleact');
//		move(".bottom-fl", 'bofl-act');
//		move(".bottom-fr", 'bofr-act');
//		move(".sign-overflow", 'sign-act');
//		move(".sign-name", 'sign-nameact');
//		move(".sign-job", 'sign-jobact');
//		move(".sign-intro", 'sign-introact');

	})
	
//		$('.row3').adipoli({
//              'startEffect' : 'transparent',
//              'hoverEffect' : 'boxRandom'
//          });
	$(".es-picmodel").eq(1).hover(function () {
		
		$(this).find(".es-bg").css({"display":"block"}).addClass("animated bounceIn")
	},function () {
		$(this).find(".es-bg").css({"display":"none"}).removeClass("animated bounceIn")
	})
	$(".es-picmodel").eq(2).hover(function () {
		
		$(this).find(".es-bg").css({"display":"block"}).addClass("animated bounceInLeft")
	},function () {
		$(this).find(".es-bg").css({"display":"none"}).removeClass("animated bounceInLeft")
	})
	$(".es-picmodel").eq(3).hover(function () {
		
		$(this).find(".es-bg").css({"display":"block"}).addClass("animated bounceInUp")
	},function () {
		$(this).find(".es-bg").css({"display":"none"}).removeClass("animated bounceInUp")
	})
	$(".es-picmodel").eq(4).hover(function () {
		
		$(this).find(".es-bg").css({"display":"block"}).addClass("animated flipInX")
	},function () {
		$(this).find(".es-bg").css({"display":"none"}).removeClass("animated flipInX")
	})
	$(".es-picmodel").eq(5).hover(function () {
		
		$(this).find(".es-bg").css({"display":"block"}).addClass("animated flipInY")
	},function () {
		$(this).find(".es-bg").css({"display":"none"}).removeClass("animated flipInY")
	})
	$(".es-picmodel").eq(6).hover(function () {
		
		$(this).find(".es-bg").css({"display":"block"}).addClass("animated rotateIn")
	},function () {
		$(this).find(".es-bg").css({"display":"none"}).removeClass("animated rotateIn")
	})
	$(".es-picmodel").eq(7).hover(function () {
		
		$(this).find(".es-bg").css({"display":"block"}).addClass("animated lightSpeedIn")
	},function () {
		$(this).find(".es-bg").css({"display":"none"}).removeClass("animated lightSpeedIn")
	})
	$(".es-picmodel").eq(0).hover(function () {
		
		$(this).find(".es-bg").css({"display":"block"}).addClass("animated rotateInDownLeft")
	},function () {
		$(this).find(".es-bg").css({"display":"none"}).removeClass("animated rotateInDownLeft")
	})
});