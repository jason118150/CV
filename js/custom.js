$(document).ready(function(){
	// header change color
	$(window).on("scroll",function(){
		var scrollDistance = $(window).scrollTop();
		var $header = $(".js-header");
		if(scrollDistance > 80){
			$header.addClass("header--colored");
		} else {
			$header.removeClass("header--colored");
		}
	})

	// wow plugin initialize
	new WOW().init();

	$('[data-fancybox]').fancybox({
		loop : true
	});


	$(window).stellar();
})