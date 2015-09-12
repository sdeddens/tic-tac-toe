// first wait for the load!
$(function(){

// slap a universal jQuery event handeler on the buttons
// then drive the whole program from the onclick event!

	var xPlayerState = true;
	var plays = 0;
	$("#X").css("background-color","blue");      // vs  cornflowerblue
	$("#O").css("background-color",""); // vs firebrick

	// create an object to store the field state so we can check for a winner;
	var fldBtnState = {
		a1: "", a2: "", a3: "",
		b1: "", b2: "", b3: "",
		c1: "", c2: "", c3: "",
	};


	var resetBoard = function () {
		for (var buttonId in fldBtnState) {
			fldBtnState[buttonId] = "";
			$("#"+buttonId).html("click me")
			$("#"+buttonId).css("background-color","");
		};
		plays = 0;
		xPlayerState = true;
		$("#X").css("background-color","blue");
		$("#O").css("background-color","");
	};


	$("#reset").on( "click", function () {resetBoard()} );


	$("button.field").on("click", function () {

		var buttonId = $(this).attr('id');
		var button = $("#"+buttonId);

		if ((fldBtnState[buttonId] === "X") || (fldBtnState[buttonId] === "O")) {

			return;};	// square already played!

		if (xPlayerState) {

			fldBtnState[buttonId]="X";
			button.html("X");
			button.css("background-color","blue");
			xPlayerState = false;
			$("#X").css("background-color","");
			$("#O").css("background-color","firebrick");

			} else {

			fldBtnState[buttonId]="O";
			button.html("O");
			button.css("background-color","firebrick");
			xPlayerState = true;
			$("#X").css("background-color","blue");
			$("#O").css("background-color","");
			};

		plays ++;

		// check for winner... brute force, no finess... but, only one line of code for each player.
		if (
			// check each row;
			((fldBtnState.a1 === 'X') && (fldBtnState.a2 === 'X') && (fldBtnState.a3 === 'X')) ||
			((fldBtnState.b1 === 'X') && (fldBtnState.b2 === 'X') && (fldBtnState.b3 === 'X')) ||
			((fldBtnState.c1 === 'X') && (fldBtnState.c2 === 'X') && (fldBtnState.c3 === 'X')) ||

			// check each collumn;
			((fldBtnState.a1 === 'X') && (fldBtnState.b1 === 'X') && (fldBtnState.c1 === 'X')) ||
			((fldBtnState.a2 === 'X') && (fldBtnState.b2 === 'X') && (fldBtnState.c2 === 'X')) ||
			((fldBtnState.a3 === 'X') && (fldBtnState.b3 === 'X') && (fldBtnState.c3 === 'X')) ||

			// check each diagonal;
			((fldBtnState.a1 === 'X') && (fldBtnState.b2 === 'X') && (fldBtnState.c3 === 'X')) ||
			((fldBtnState.c1 === 'X') && (fldBtnState.b2 === 'X') && (fldBtnState.a3 === 'X')) ){

			alert ("X WINS!");
			resetBoard();

			} else if (
			// check each row;
			((fldBtnState.a1 === 'O') && (fldBtnState.a2 === 'O') && (fldBtnState.a3 === 'O')) ||
			((fldBtnState.b1 === 'O') && (fldBtnState.b2 === 'O') && (fldBtnState.b3 === 'O')) ||
			((fldBtnState.c1 === 'O') && (fldBtnState.c2 === 'O') && (fldBtnState.c3 === 'O')) ||

			// check each collumn;
			((fldBtnState.a1 === 'O') && (fldBtnState.b1 === 'O') && (fldBtnState.c1 === 'O')) ||
			((fldBtnState.a2 === 'O') && (fldBtnState.b2 === 'O') && (fldBtnState.c2 === 'O')) ||
			((fldBtnState.a3 === 'O') && (fldBtnState.b3 === 'O') && (fldBtnState.c3 === 'O')) ||

			// check each diagonal;
			((fldBtnState.a1 === 'O') && (fldBtnState.b2 === 'O') && (fldBtnState.c3 === 'O')) ||
			((fldBtnState.c1 === 'O') && (fldBtnState.b2 === 'O') && (fldBtnState.a3 === 'O')) ){

			alert ("O WINS!");
			resetBoard();

			} else if (plays === 9) {

			alert ("CAT'S GAME!");
			resetBoard();
		};
	});
});
