$(document).ready(function() {
	$(document).on('click', '.rucard', function(e) {
		$('.flyout').addClass('flyout--show');
		$('.flyout__backdrop').addClass('flyout__backdrop--fadein');
		$('.flyout__content').removeClass('flyout__content--hidden');
	});
	$(document).on('click', '.flyout__backdrop', function(e) {
		$('.flyout').removeClass('flyout--show');
		$('.flyout__backdrop').removeClass('flyout__backdrop--fadein');
		$('.flyout__content').addClass('flyout__content--hidden');
	});
});

$(window).on("load",function(){
    $(".card-holder").mCustomScrollbar({
    	theme:"minimal-dark",
    	scrollInertia: 200
    });
});