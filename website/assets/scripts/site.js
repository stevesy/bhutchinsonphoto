const $ = global.jQuery = require('jquery');
//require('jquery-migrate');
require('unveil2/src/jquery.unveil2.js');


// navigation

$('.no-touchevents .nav > .nav-item').hover(
	function() {
		$(this).addClass('hover');
	},
	function() {
		$(this).removeClass('hover');
	}
);

$('.touchevents .nav [aria-haspopup]').on('click tap', function(e) {
	const $this = $(this);
	const $parent = $this.parent();
	$parent.siblings().removeClass('hover');
	if (!$parent.hasClass('hover')) {
		e.preventDefault();
		$parent.toggleClass('hover');
	}
});


// gallery

$('.gallery img').unveil();

let scrollDuration = 400;
if (window.matchMedia('(min-width: 1200px)').matches) {
	scrollDuration = 800;
}

$('.gallery-next').on('click tap', function() {
	$('.section-gallery').animate({
		scrollLeft: `+=${scrollDuration}`
	});
});

$('.gallery-prev').on('click tap', function() {
	$('.section-gallery').animate({
		scrollLeft: `-=${scrollDuration}`
	});
});