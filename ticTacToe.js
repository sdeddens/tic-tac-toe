// first wait for the load!
$(function(){

// slap a universal jQuery event handeler on the buttons
// then drive the whole program from the onclick event!

	var xPlayerState = true;
	var winner = false;
	var plays = 0;
	var buttons = null;
	var flashTimerID = null;
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
		clearTimeout(flashTimerID);
		plays = 0;
		xPlayerState = true;
		winner = false;
		buttons = null;
		$("#X").css("background-color","blue");
		$("#O").css("background-color","");
	};

	var processWinner = function (winningRow,color,cat){
		winner = true; //strangle click handler;
		buttons = $(winningRow);
		buttons.css("background-color","");
		if (cat = undefined){
			xButtons = $()
		}
		setTimeout(function(){buttons.css("background-color",color)},400);

		flashTimerID = setInterval(function(){
			buttons.css("background-color","");
			setTimeout(function(){
				buttons.css("background-color",color)
			}, 400);
		}, 800);
	};

	$("#reset").on( "click", function () {resetBoard()} );


	$("button.field").on("click", function () {

		if(winner) return; //kill click event until reset.

		var buttonId = $(this).attr('id');
		var button = $("#"+buttonId);

		if ((fldBtnState[buttonId] === "X") || (fldBtnState[buttonId] === "O")) {

			return;};	// square already played! Wait for another click.

		if (xPlayerState) { // X's turn.

			fldBtnState[buttonId]="X";
			button.html("X");
			button.css("background-color","blue");
			xPlayerState = false;
			$("#X").css("background-color","");
			$("#O").css("background-color","firebrick");

			} else {					// O's turn.

			fldBtnState[buttonId]="O";
			button.html("O");
			button.css("background-color","firebrick");
			xPlayerState = true;
			$("#X").css("background-color","blue");
			$("#O").css("background-color","");
			};

		plays ++;           // cat's counter.

		// check for winner... brute force, no finesse...
		// check each row;
		if((fldBtnState.a1 === 'X') && (fldBtnState.a2 === 'X') && (fldBtnState.a3 === 'X')){
			processWinner (".r1","blue"); return;
		};
		if((fldBtnState.b1 === 'X') && (fldBtnState.b2 === 'X') && (fldBtnState.b3 === 'X')){
			processWinner (".r2","blue"); return;
		};
		if((fldBtnState.c1 === 'X') && (fldBtnState.c2 === 'X') && (fldBtnState.c3 === 'X')){
			processWinner (".r3","blue"); return;
		};
		// check each column;
		if((fldBtnState.a1 === 'X') && (fldBtnState.b1 === 'X') && (fldBtnState.c1 === 'X')){
			processWinner (".c1","blue"); return;
		};
		if((fldBtnState.a2 === 'X') && (fldBtnState.b2 === 'X') && (fldBtnState.c2 === 'X')){
			processWinner (".c2","blue"); return;
		};
		if((fldBtnState.a3 === 'X') && (fldBtnState.b3 === 'X') && (fldBtnState.c3 === 'X')){
			processWinner (".c3","blue"); return;
			// check each diagonal;
		};
		if((fldBtnState.a1 === 'X') && (fldBtnState.b2 === 'X') && (fldBtnState.c3 === 'X')){
			processWinner (".d1","blue"); return;
		};
		if((fldBtnState.c1 === 'X') && (fldBtnState.b2 === 'X') && (fldBtnState.a3 === 'X')){
			processWinner (".d2","blue"); return;
		};

		// check each row;
		if((fldBtnState.a1 === 'O') && (fldBtnState.a2 === 'O') && (fldBtnState.a3 === 'O')){
			processWinner (".r1","firebrick"); return;
		};
		if((fldBtnState.b1 === 'O') && (fldBtnState.b2 === 'O') && (fldBtnState.b3 === 'O')){
			processWinner (".r2","firebrick"); return;
		};
		if((fldBtnState.c1 === 'O') && (fldBtnState.c2 === 'O') && (fldBtnState.c3 === 'O')){
			processWinner (".r3","firebrick"); return;
		};
		// check each column;
		if((fldBtnState.a1 === 'O') && (fldBtnState.b1 === 'O') && (fldBtnState.c1 === 'O')){
			processWinner (".c1","firebrick"); return;
		};
		if((fldBtnState.a2 === 'O') && (fldBtnState.b2 === 'O') && (fldBtnState.c2 === 'O')){
			processWinner (".c2","firebrick"); return;
			};
		if((fldBtnState.a3 === 'O') && (fldBtnState.b3 === 'O') && (fldBtnState.c3 === 'O')){
			processWinner (".c3","firebrick"); return;
		};
		// check each diagonal;
		if((fldBtnState.a1 === 'O') && (fldBtnState.b2 === 'O') && (fldBtnState.c3 === 'O')){
			processWinner (".d1","firebrick"); return;
		};
		if((fldBtnState.c1 === 'O') && (fldBtnState.b2 === 'O') && (fldBtnState.a3 === 'O')){
			processWinner (".d2","firebrick"); return;
		};
		if (plays === 9) {
			processWinner (".field","firebrick","blue"); return;
		};
	});
});
