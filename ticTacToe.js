
// first wait for the load!
$(function(){

// slap a universal jQuery event handeler on the buttons
// then drive the whole program from the onclick event!
	
	var xPlayerState = true;
	var plays = 0;
	$("#X").css("background-color","blue");
	
	// create an object to store the field state so we can check for a winner;
	var fldBtnState = {
		x0: "", x1: "", x2: "",
		x3: "", x4: "", x5: "",
		x6: "", x7: "", x8: "",
	};


	var resetBoard = function () {
		for (var buttonId in fldBtnState) {
			fldBtnState[buttonId] = "";
			$("#"+buttonId).html("click me")};
		plays = 0;
		xPlayerState = true;
		$("#X").css("background-color","blue");
		$("#O").css("background-color","");
	};

	
	$("#reset").on("click", function () {
		resetBoard();
	});


	$("button.field").on("click", function () {

		var buttonId = $(this).attr('id');
		var button = $("#"+buttonId);

		if ((fldBtnState[buttonId] === "X") || (fldBtnState[buttonId] === "O")) {

			return;};	// square already played!

		if (xPlayerState) {

			button.html("X");
			fldBtnState[buttonId]="X";
			xPlayerState = false;
			$("#O").css("background-color","blue");
			$("#X").css("background-color","");

			} else {

			button.html("O");
			fldBtnState[buttonId]="O";
			xPlayerState = true;
			$("#X").css("background-color","blue");
			$("#O").css("background-color","");
			};

		plays ++;

		// check for winner... brute force, no finess!
		if ( 
			((fldBtnState.x0 === 'X') && (fldBtnState.x1 === 'X') && (fldBtnState.x2 === 'X')) ||
			((fldBtnState.x3 === 'X') && (fldBtnState.x4 === 'X') && (fldBtnState.x5 === 'X')) ||
			((fldBtnState.x6 === 'X') && (fldBtnState.x7 === 'X') && (fldBtnState.x8 === 'X')) ||
			((fldBtnState.x0 === 'X') && (fldBtnState.x3 === 'X') && (fldBtnState.x6 === 'X')) ||
			((fldBtnState.x1 === 'X') && (fldBtnState.x4 === 'X') && (fldBtnState.x7 === 'X')) ||
			((fldBtnState.x2 === 'X') && (fldBtnState.x5 === 'X') && (fldBtnState.x8 === 'X')) ||
			((fldBtnState.x0 === 'X') && (fldBtnState.x4 === 'X') && (fldBtnState.x8 === 'X')) ||
			((fldBtnState.x2 === 'X') && (fldBtnState.x4 === 'X') && (fldBtnState.x6 === 'X')) ){
				
			alert ("X WINS!");
			resetBoard();

			} else if (
			((fldBtnState.x0 === 'O') && (fldBtnState.x1 === 'O') && (fldBtnState.x2 === 'O')) ||
			((fldBtnState.x3 === 'O') && (fldBtnState.x4 === 'O') && (fldBtnState.x5 === 'O')) ||
			((fldBtnState.x6 === 'O') && (fldBtnState.x7 === 'O') && (fldBtnState.x8 === 'O')) ||
			((fldBtnState.x0 === 'O') && (fldBtnState.x3 === 'O') && (fldBtnState.x6 === 'O')) ||
			((fldBtnState.x1 === 'O') && (fldBtnState.x4 === 'O') && (fldBtnState.x7 === 'O')) ||
			((fldBtnState.x2 === 'O') && (fldBtnState.x5 === 'O') && (fldBtnState.x8 === 'O')) ||
			((fldBtnState.x0 === 'O') && (fldBtnState.x4 === 'O') && (fldBtnState.x8 === 'O')) ||
			((fldBtnState.x2 === 'O') && (fldBtnState.x4 === 'O') && (fldBtnState.x6 === 'O')) ){

			alert ("O WINS!");
			resetBoard();

			} else if (plays === 9) {

			alert ("CAT'S GAME!");
			resetBoard();
		};
	});
});