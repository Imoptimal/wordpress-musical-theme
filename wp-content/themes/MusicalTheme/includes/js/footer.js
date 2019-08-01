$(function() {
// Enable post feed scroll
	$('#shows .post-item:first-child, #news .post-item:first-child, .gallery-sidebar .post-item:first-child').addClass('active');

	function feedScroll(nextBtn, prevBtn, activeItem, adjecentItem) {

			$(nextBtn).click(function(){
				var currentSlide = $(activeItem);
				var nextSlide = currentSlide.next();

				currentSlide.fadeOut(300).removeClass('active');
				nextSlide.fadeIn(300).addClass('active');

				if(nextSlide.length == 0) {
				  $(adjecentItem).first().fadeIn(300).addClass('active');
				}
			});

			$(prevBtn).click(function(){
				var currentSlide = $(activeItem);
				var prevSlide = currentSlide.prev();

				currentSlide.fadeOut(300).removeClass('active');
				prevSlide.fadeIn(300).addClass('active');

				if(prevSlide.length == 0) {
				  $(adjecentItem).last().fadeIn(300).addClass('active');
				}
			});
			
		}

		feedScroll('#shows .next', '#shows .prev', '#shows .post-item.active', '#shows .post-item');
		feedScroll('#news .next', '#news .prev', '#news .post-item.active', '#news .post-item');
		feedScroll('.gallery-sidebar .next', '.gallery-sidebar .prev', '.gallery-sidebar .post-item.active', '.gallery-sidebar .post-item');

// Load page previews of homepage menu items
	// *Remove /wordpress from the links in production (within admin settings too)
	$('#menu-one-spread .load-content').load('/wordpress/videos .yotu-first');
	$('#menu-two-spread .load-content').load('/wordpress/category/events .post:first-child');
	$('#menu-three-spread .load-content').load('/wordpress/category/news .post:first-child');
	$('#menu-four-spread .load-content').load('/wordpress/category/photos .post:first-child');
	$('#menu-five-spread .load-content').load('/wordpress/production .post-item:first-child');
	
// Enable homepage menu previews on click
	$('#menu-one a').on('click', function (e) {
		e.preventDefault();
		$('#menu-one, #menu-one-spread').toggleClass('clicked');
		$('#menu-two.clicked, #menu-three.clicked, #menu-four.clicked, #menu-five.clicked, #menu-two-spread.clicked, #menu-three-spread.clicked, #menu-four-spread.clicked, #menu-five-spread.clicked').removeClass('clicked');
	});

	$('#menu-two a').on('click', function (e) {
		e.preventDefault();
		$('#menu-one.clicked, #menu-three.clicked, #menu-four.clicked, #menu-five.clicked, #menu-two, #menu-two-spread').toggleClass('clicked');
		$('#menu-one-spread.clicked, #menu-three-spread.clicked, #menu-four-spread.clicked, #menu-five-spread.clicked').removeClass('clicked');
	});

	$('#menu-three a').on('click', function (e) {
		e.preventDefault();
		$('#menu-one.clicked, #menu-two.clicked, #menu-four.clicked, #menu-five.clicked, #menu-three, #menu-three-spread').toggleClass('clicked');
		$('#menu-one-spread.clicked, #menu-two-spread.clicked, #menu-four-spread.clicked, #menu-five-spread.clicked').removeClass('clicked');
	});

	$('#menu-four a').on('click', function (e) {
		e.preventDefault();
		$('#menu-one.clicked, #menu-two.clicked, #menu-three.clicked, #menu-five.clicked, #menu-four, #menu-four-spread').toggleClass('clicked');
		$('#menu-one-spread.clicked, #menu-two-spread.clicked, #menu-three-spread.clicked, #menu-five-spread.clicked').removeClass('clicked');
	});

	$('#menu-five a').on('click', function (e) {
		e.preventDefault();
		$('#menu-one.clicked, #menu-two.clicked, #menu-three.clicked, #menu-four.clicked, #menu-five, #menu-five-spread').toggleClass('clicked');
		$('#menu-one-spread.clicked, #menu-two-spread.clicked, #menu-three-spread.clicked, #menu-four-spread.clicked').removeClass('clicked');
	});

	$(document).click(function(e) {
	  var target = e.target;
	  if (!$(target).is('#menu-one a, #menu-two a, #menu-three a, #menu-four a, #menu-five a') ) {
		$('#menu-one.clicked, #menu-two.clicked, #menu-three.clicked, #menu-four.clicked, #menu-five.clicked, #menu-one-spread.clicked, #menu-two-spread.clicked, #menu-three-spread.clicked, #menu-four-spread.clicked, #menu-five-spread.clicked').removeClass('clicked');
	  }
	});
		
	// Residual css
	$('.post, .categories')
  .delay(4000).queue(function(){$(this).addClass('after-load').removeClass('before-js');});
  
	$('.categories a').click(function() {
		$('.categories').addClass('clicked').removeClass('after-load').text('');
	});

});

