
// first wait for the load!
$(function(){

// slap a universal jQuery event handeler on the buttons
// then drive the whole program from the onclick event!

	$("button").on("click", function () {
		alert($(this).attr('id')); 
	});
});