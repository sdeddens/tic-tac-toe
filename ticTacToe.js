
// first wait for the load!
$(function(){

// slap a universal jQuery event handeler on the buttons
// then drive the whole program from the onclick event!
	
	var xPlayerState = true;
	
	// create an object to store the field state so we can check for a winner;
	var fldBtnState = {
		x0: "click me", x1: "click me", x2: "click me",
		x3: "click me", x4: "click me", x5: "click me",
		x6: "click me", x7: "click me", x8: "click me",
	};

	$("button.field").on("click", function () {

		var button;
		var buttonId = $(this).attr('id');

		button = $("#"+buttonId);
		if ((button.html() === "X") || (button.html() === "O")) {
			return;	// square already played!
		};

		if (xPlayerState) {
			button.html("X");
			fldBtnState[buttonId]="X";
			xPlayerState = false;
		} else {
			button.html("O");
			fldBtnState[buttonId]="O";
			xPlayerState = true;
		};
		// check for winner... brute force, no feniss!
		if ( 
			((fldBtnState.x0 === 'X') && (fldBtnState.x1 === 'X') && (fldBtnState.x2 === 'X')) ||
			((fldBtnState.x3 === 'X') && (fldBtnState.x4 === 'X') && (fldBtnState.x5 === 'X')) ||
			((fldBtnState.x6 === 'X') && (fldBtnState.x7 === 'X') && (fldBtnState.x8 === 'X')) ||
			((fldBtnState.x0 === 'X') && (fldBtnState.x3 === 'X') && (fldBtnState.x6 === 'X')) ||
			((fldBtnState.x1 === 'X') && (fldBtnState.x4 === 'X') && (fldBtnState.x7 === 'X')) ||
			((fldBtnState.x2 === 'X') && (fldBtnState.x5 === 'X') && (fldBtnState.x8 === 'X')) ||
			((fldBtnState.x0 === 'X') && (fldBtnState.x4 === 'X') && (fldBtnState.x8 === 'X')) ||
			((fldBtnState.x2 === 'X') && (fldBtnState.x4 === 'X') && (fldBtnState.x6 === 'X')) ||
			((fldBtnState.x0 === 'O') && (fldBtnState.x1 === 'O') && (fldBtnState.x2 === 'O')) ||
			((fldBtnState.x3 === 'O') && (fldBtnState.x4 === 'O') && (fldBtnState.x5 === 'O')) ||
			((fldBtnState.x6 === 'O') && (fldBtnState.x7 === 'O') && (fldBtnState.x8 === 'O')) ||
			((fldBtnState.x0 === 'O') && (fldBtnState.x3 === 'O') && (fldBtnState.x6 === 'O')) ||
			((fldBtnState.x1 === 'O') && (fldBtnState.x4 === 'O') && (fldBtnState.x7 === 'O')) ||
			((fldBtnState.x2 === 'O') && (fldBtnState.x5 === 'O') && (fldBtnState.x8 === 'O')) ||
			((fldBtnState.x0 === 'O') && (fldBtnState.x4 === 'O') && (fldBtnState.x8 === 'O')) ||
			((fldBtnState.x2 === 'O') && (fldBtnState.x4 === 'O') && (fldBtnState.x6 === 'O')) 
			){

				alert ("We have a winner!");
			};
	});

});