$(document).ready(function() {
	$(document).on('click', '.rucard', function(e) {
		$('.flyout').addClass('flyout--show');
		$('.flyout__backdrop').addClass('flyout__backdrop--fadein');
		$('.flyout__content').removeClass('flyout__content--hidden');
		$('body').addClass('flyout-open');
	});
	$(document).on('click', '.flyout__backdrop', function(e) {
		// $('.flyout').removeClass('flyout--show');
		$('.flyout').delay(500).queue(function(next) {
			$(this).removeClass('flyout--show');
			next();
		});
		$('.flyout__backdrop').removeClass('flyout__backdrop--fadein');
		$('.flyout__content').addClass('flyout__content--hidden');
		$('body').removeClass('flyout-open');
	});
});

$(window).on("load",function(){
    $(".card-holder").mCustomScrollbar({
    	theme:"minimal-dark",
    	scrollInertia: 200
    });
	$( '#cd-dropdown' ).dropdown( {
		gutter : 5,
		stack : false,
		slidingIn : 100
	} );
});
