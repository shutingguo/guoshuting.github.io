$(function() {
	console.log('aaa');
	console.log( $( "#toggle" ) );

	$( "#toggle" ).click(function() {
		console.log('click');
		console.log('p elements', $('p'));
			$("p").toggle();
	});
});


$(function() {
	$( "p" ).click(function() {
		$("#toggle").toggle();
	});
});
