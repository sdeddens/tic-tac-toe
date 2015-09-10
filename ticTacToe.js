
// first wait for the load!
$(function(){

// slap a universal jQuery event handeler on the buttons
// then drive the whole program from the onclick event!
	
	var xPlayerState = true;
	
	// create a default "reset" object to store the field state so we can check for a winner;

	var FieldBtnDefault;
	function FieldBtnDefault () {
		this.x0 = "click me";
		this.x1 = "click me";
		this.x2 = "click me";
		this.x3 = "click me";
		this.x4 = "click me";
		this.x5 = "click me";
		this.x6 = "click me";
		this.x7 = "click me";
		this.x8 = "click me";
	};

	// create a working copy of the fieldState:
	var fldBtnState = new FieldBtnDefault();
	alert (fldBtnState.x0);


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
			((fldBtnState.x2 === 'X') && (fldBtnState.x4 === 'X') && (fldBtnState.x6 === 'X'))
			){
				alert ("X WINS!");
				return;
		} else {

		if (
			((fldBtnState.x0 === 'O') && (fldBtnState.x1 === 'O') && (fldBtnState.x2 === 'O')) ||
			((fldBtnState.x3 === 'O') && (fldBtnState.x4 === 'O') && (fldBtnState.x5 === 'O')) ||
			((fldBtnState.x6 === 'O') && (fldBtnState.x7 === 'O') && (fldBtnState.x8 === 'O')) ||
			((fldBtnState.x0 === 'O') && (fldBtnState.x3 === 'O') && (fldBtnState.x6 === 'O')) ||
			((fldBtnState.x1 === 'O') && (fldBtnState.x4 === 'O') && (fldBtnState.x7 === 'O')) ||
			((fldBtnState.x2 === 'O') && (fldBtnState.x5 === 'O') && (fldBtnState.x8 === 'O')) ||
			((fldBtnState.x0 === 'O') && (fldBtnState.x4 === 'O') && (fldBtnState.x8 === 'O')) ||
			((fldBtnState.x2 === 'O') && (fldBtnState.x4 === 'O') && (fldBtnState.x6 === 'O')) 
			){
				alert ("O WINS!");
				return;
			};
		};
	});
	// reset all everything.
	// $("button.field").html("click me");
	// fldBtnState = new FieldBtnDefault();
	xPlayerState = true;
	alert ("How did we get here?");
});