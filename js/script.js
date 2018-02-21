/*global $, alert, console */

$(function() {
	'use strict';
	
	$('html').niceScroll();
	
	/*--------- /Add Scrolled class to navbar -----*/
	$(window).scroll(function(){
		var navbar = $('nav');
		if($(window).scrollTop() >= navbar.height()){
			if(!navbar.hasClass('scrolled  navbar-fixed-top')){
				navbar.addClass('scrolled  navbar-fixed-top');
			}			
		}else{
			navbar.removeClass('scrolled  navbar-fixed-top');
		}
	});
	
	/*--------- Add Active Class to Clicked Link in navbar -----*/
	$(".navbar-nav li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		
		/*--------- Make Smooth Scroll -----*/
		$('html , body').animate({
			scrollTop : ($($(this).data("link"))).offset().top - 50
		},1500);
		
	
	});
	/*--------- Call Owl Carousel -----*/
	$(".owl-carousel").owlCarousel({
		navigation:true,
		items:4,
		margin:10,
		loop:true,
		autoplay:true,
		pagination:true,
		navText: ['<img src="img/arrow-right.png" />','<img src="img/arrow-left.png" />'],
		
		responsive:{
			0:{
				items:2
			},
			768:{
				items:3
			},
			992:{
				items:4
			}
		}
	});
});