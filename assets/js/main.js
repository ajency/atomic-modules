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
