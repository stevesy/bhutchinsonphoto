var isMobile = navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad|android|blackberry|opera mini|iemobile|kindle|silk|mobile)/);
if (isMobile) {
	document.documentElement.className += ' mobile';
} else {
	document.documentElement.className += ' no-mobile';
}

$(function () {

	$('.gallery img').lazyload({
		'effect': 'fadeIn',
		'data_attribute': 'src'
	});

	$('.no-mobile #nav > ul > li').hover(
		function () {
			$(this).addClass('on');
		},
		function () {
			$(this).removeClass('on');
		}
	);

	$('.mobile #nav > ul > li > a[aria-haspopup=true]').on('click tap', function (e) {
		$(this).parent().siblings().removeClass('on');
		if (!$(this).parent().hasClass('on')) {
			e.preventDefault();
			$(this).parent().toggleClass('on');
		}
	});

});