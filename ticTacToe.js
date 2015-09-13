// first wait for the load!
$(function(){

// Slap a universal jQuery event handler on the buttons
// Then drive the whole program from the two on click events!

	var xPlayerState = true;
	var winner = false;
	var catsLives = 0;
	var buttons = null;
	var upFlashingTimer = null; // Use: to make sure we get a clean reset!
	var downFlashingTimer = null; // Use: to make sure we get a clean reset!
	var upTimer = null;   // Use: to make sure we get a clean reset!
	var delayTimer = null;   // Use: to make sure we get a clean reset!
	var meow = $("audio")[0];
	$("#X").css("background-color","blue");
	$("#O").css("background-color",""); // vs firebrick

	// create an object to store the field state so we can check for a winner;
	// note: there is a one-to-one correspondence to each filed button id.
	var fldBtnState = {
		a1: "", a2: "", a3: "",
		b1: "", b2: "", b3: "",
		c1: "", c2: "", c3: "",
	};

	var resetBoard = function () {
		//Make sure a timer doesn't fire after we reset!
		clearTimeout(delayTimer); //kill first to preempt spawning another upFlasher.
		clearTimeout(upTimer);
		clearInterval(upFlashingTimer);
		clearInterval(downFlashingTimer);
		// Reset the fldBtnState object.
		for (var buttonId in fldBtnState) {
			fldBtnState[buttonId] = "";
		};
		// Reset everything else.
		$(".field").html("click me");
		$(".field").css("background-color","");
		catsLives = 0;
		xPlayerState = true;
		winner = false;
		buttons = null;
		$("#X").css("background-color","blue");
		$("#O").css("background-color","");
		$("button").css("opacity",1);
	};

	var processWinner = function (winningRow){
		winner = true; //strangle click handler;
		$("#X, #O").css("background-color","");
		buttons = $(winningRow);

		 // start the first flash down cycle asap.
		buttons.css("opacity",0.6);
		// start up cycle in 600ms
		upTimer = setTimeout(function(){buttons.css("opacity",1.0)},600);
		// downFlashingTimer starts in 1200 ms from asap and repeats every 1200ms.
		downFlashingTimer = setInterval(function(){
				buttons.css("opacity",0.6);
		}, 1200);
		// delay upFlasher by 600ms putting it 180 deg out of phase with downFlasher
		delayTimer = setTimeout(function(){
			upFlashingTimer = setInterval(function(){
				buttons.css("opacity",1.0);
			}, 1200);
		},600);
	};
	// First of the two event handlers.
	$("#reset").on( "click", function () {resetBoard()} );

	// Second of the two event handlers.
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

		catsLives ++;           // inc the cat!.

		// check for winner... brute force, no finesse...
		// check each row;
		if((fldBtnState.a1 === 'X') && (fldBtnState.a2 === 'X') && (fldBtnState.a3 === 'X')){
			processWinner (".r1"); return;
		};
		if((fldBtnState.b1 === 'X') && (fldBtnState.b2 === 'X') && (fldBtnState.b3 === 'X')){
			processWinner (".r2"); return;
		};
		if((fldBtnState.c1 === 'X') && (fldBtnState.c2 === 'X') && (fldBtnState.c3 === 'X')){
			processWinner (".r3"); return;
		};
		// check each column;
		if((fldBtnState.a1 === 'X') && (fldBtnState.b1 === 'X') && (fldBtnState.c1 === 'X')){
			processWinner (".c1"); return;
		};
		if((fldBtnState.a2 === 'X') && (fldBtnState.b2 === 'X') && (fldBtnState.c2 === 'X')){
			processWinner (".c2"); return;
		};
		if((fldBtnState.a3 === 'X') && (fldBtnState.b3 === 'X') && (fldBtnState.c3 === 'X')){
			processWinner (".c3"); return;
			// check each diagonal;
		};
		if((fldBtnState.a1 === 'X') && (fldBtnState.b2 === 'X') && (fldBtnState.c3 === 'X')){
			processWinner (".d1"); return;
		};
		if((fldBtnState.c1 === 'X') && (fldBtnState.b2 === 'X') && (fldBtnState.a3 === 'X')){
			processWinner (".d2"); return;
		};

		// check each row;
		if((fldBtnState.a1 === 'O') && (fldBtnState.a2 === 'O') && (fldBtnState.a3 === 'O')){
			processWinner (".r1"); return;
		};
		if((fldBtnState.b1 === 'O') && (fldBtnState.b2 === 'O') && (fldBtnState.b3 === 'O')){
			processWinner (".r2"); return;
		};
		if((fldBtnState.c1 === 'O') && (fldBtnState.c2 === 'O') && (fldBtnState.c3 === 'O')){
			processWinner (".r3"); return;
		};
		// check each column;
		if((fldBtnState.a1 === 'O') && (fldBtnState.b1 === 'O') && (fldBtnState.c1 === 'O')){
			processWinner (".c1"); return;
		};
		if((fldBtnState.a2 === 'O') && (fldBtnState.b2 === 'O') && (fldBtnState.c2 === 'O')){
			processWinner (".c2"); return;
			};
		if((fldBtnState.a3 === 'O') && (fldBtnState.b3 === 'O') && (fldBtnState.c3 === 'O')){
			processWinner (".c3"); return;
		};
		// check each diagonal;
		if((fldBtnState.a1 === 'O') && (fldBtnState.b2 === 'O') && (fldBtnState.c3 === 'O')){
			processWinner (".d1"); return;
		};
		if((fldBtnState.c1 === 'O') && (fldBtnState.b2 === 'O') && (fldBtnState.a3 === 'O')){
			processWinner (".d2"); return;
		};
		if (catsLives === 9) {
			meow.play(); processWinner(".field"); return;
		};
	});
});
