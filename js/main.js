$(window).on('scroll',function(){
	//if the distance the user has scrolled down the page is more than or equal to >= the distance from the top to nav
	var scrollHeight = $(window).scrollTop();
	if (scrollHeight >= 200) {
		$('nav').addClass('scrolled');
		// Add a class to show the div.
	}
		//if thedistance scrolled is less than the nav height remove the class scrolled
	if (scrollHeight <= 200) {
		$('nav').removeClass('scrolled');
		// console.log(scrollHeight);
	}
});

var navHeight = $('nav').offset().top;
console.log(navHeight);

$(document).ready(function (){
		// window.scrollTo(0,0);
		$('html, body').animate({scrollTop: '0'}, 500);
});

$('.nav_button').on('click', function(){
	// event.preventDefault();
	var matchingDiv = $(this).data('section');
	console.log(matchingDiv);
	 $('html, body').animate({scrollTop: $('.' + matchingDiv).offset().top-70}, 1500);
	// if (matchingDiv === "resume_section") {
	// 	 $('html, body').animate({scrollTop: $('.' + matchingDiv).offset().top}, 1200);
 //        // window.scrollTo(0,615)});
	// }
});