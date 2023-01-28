$(document).ready(function () {
	// $('.slider').owlCarousel({
	// 	singleItem : false,
	// 	autoplay: true,
	// 	loop: true,
	// 	items : 1,
	// 	slideBy: 2,
	// 	animateOut: 'slideInDown',
	// 	animateIn: 'slideOutDown'
	// });
	$('.product_gallery').owlCarousel({
		singleItem: true,
		autoplay: false,
		loop: false,
		items: 1,
		slideBy: 2,
		margin: 25,
		thumbs: true,
		thumbsPrerendered: true
	});
	$('.cat_list').owlCarousel({
		slideBy: 2,
		margin: 25,
		autoplay: true,
		autoplaySpeed: 100,
		interval: 6000,
		loop: false,
		nav: true,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2
			},
			768: {
				items: 3
			},
			1080: {
				items: 4
			},
			1200: {
				items: 7
			}
		}
	});
	$('.products_slide').owlCarousel({
		slideBy: 2,
		margin: 50,
		autoplay: false,
		autoplaySpeed: 100,
		interval: 6000,
		loop: false,
		nav: true,
		responsive: {
			0: {
				items: 1
			},
			640: {
				items: 2
			},
			768: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	});
	$('.slider1').each(function () {
		var $this = $(this);
		if ($this.children().length > 2) {
			$('.slider1').slick({
				draggable: true,
				pauseOnHover: false,
				slidesToShow: 2,
				slidesToScroll: 2,
				dots: true,
				customPaging: function (slider, i) {
					return '<a href="#"><span class="custom_dot" > </span> <span class="custom_dot" > </span></a> ';
				},
				arrows: false,
				vertical: true,
				verticalSwiping: true,
				cssEase: 'linear',
				centerMode: true,
				centerPadding: '0px',
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
							infinate: false,
						}
					},
					{
						breakpoint: 995,
						settings: {
							slidesToShow: 2,
							vertical: false,
							verticalSwiping: false,
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2,
							vertical: false,
							verticalSwiping: false,
						}
					},
					{
						breakpoint: 641,
						settings: {
							slidesToShow: 2,
							vertical: false,
							verticalSwiping: false,
						}
					},
					{
						breakpoint: 488,
						settings: {
							slidesToShow: 1,
							vertical: false,
							verticalSwiping: false,
						}
					},
					{
						breakpoint: 380,
						settings: {
							slidesToShow: 1,
							vertical: false,
							verticalSwiping: false,

						}
					}
				]
			});
		}
	});

	wow = new WOW({
		animateClass: 'animated',
		offset: 100,
	});
	wow.init();
	imgtosvg();
	$(".q_control").on("click", function () {
		var $button = $(this);
		var $input = $button.closest('.quantity').find("input.quntity-input");
		$input.val((i, v) => Math.max(1, +v + 1 * $button.data('multi')));
	});
	$('.select').select2();
	$('.code_box').click(function () {
		$(this).children('.code').toggleClass('active');
	});

	function equalcard(s) {
		var h = 0;
		var line_height = 0;
		$(s).css('display', 'block').css('height', 'auto');
		$(s).each(function () {
			console.log('sett')
			var height = $(this).outerHeight(true);
			if (height > h) {
				h = height;
			}
		});
		$(s).height(h);
	}
	equalcard('.pro-equal .equal-feature');
	equalcard('.pro-equal .save-pr');
	equalcard('.pro-equal .latest_name');
	equalcard('.pro-equal .popular_name');
	equalcard('.pro-equal .deal_name');
	equalcard('.pro-equal .related_name');
	equalcard('.equal-pro');
	// equalcard('.equal-pro .pro-name');
	// equalcard('.equal-pro .pr-save');
	equalcard('.equal-deal');
	equalcard('.equal-offer');
	equalcard('.cat-box .cat-link');
});

$(window).scroll(function () {
	if ($(window).scrollTop() >= 300) {
		$('header').addClass('sticky');
	}
	else {
		$('header').removeClass('sticky');
	}
});
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})
function imgtosvg() {
	//Replace all SVG images with inline SVG
	jQuery('.svgicon img').each(function () {
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		jQuery.get(imgURL, function (data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');
			// Add replaced image's ID to the new SVG
			if (typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if (typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			}
			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');
			// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
			if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
			}
			// Replace image with new SVG
			$img.replaceWith($svg);
		}, 'xml');
	});
}
