
// first wait for the load!
$(function(){

// slap a universal jQuery event handeler on the buttons
// then drive the whole program from the onclick event!
	
	var xPlayerState = true;

	$("button.field").on("click", function () {

		var button;
		var buttonId = $(this).attr('id');

		button = $("#"+buttonId);
		if ((button.html() === "X") || (button.html() === "Y")) {
			return;	// square already played!
		};

		if (xPlayerState) {
			button.html("X");
			xPlayerState = false;
		} else {
			button.html("O");
			xPlayerState = true;
		};
	});
});