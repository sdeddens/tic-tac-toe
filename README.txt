TIC-TAC-TOE General Assembly Week-3 student project
Overview: Interactive user game designed to be played in a web browser. 

Student: Stephen Deddens
Version-1 uploaded 09/11/2015

Original readme.md requirements are located at:
https://github.com/ga-students/wdi-atx-2-class/tree/master/w03 (private)

Big Goals

    Build a web application from scratch, without a starter codebase
    Use your programming skills to map out the game logic for a simple game like Tic Tac Toe
    Separate HTML, CSS, and JavaScript files in your application
    Build an application to a spec that someone else gives you
    Build a dynamic game that allows two players to compete
    Craft a readme.md file that explains your app to the world

Explanations of the technologies used:

	Web browser:
	https://en.wikipedia.org/wiki/Web_browser

	HTML: HyperText Markup Language
	https://en.wikipedia.org/wiki/HTML
	https://developer.mozilla.org/en-US/docs/Web/HTML

	CSS: Cascading Style Sheets
	https://en.wikipedia.org/wiki/Cascading_Style_Sheets
	https://developer.mozilla.org/en-US/docs/Web/CSS

	JavaScript: 
	https://en.wikipedia.org/wiki/JavaScript
	https://developer.mozilla.org/en-US/docs/Web/JavaScript
	https://www.javascript.com/resources

	jQuery:
	https://en.wikipedia.org/wiki/JQuery
	https://jquery.com/

	Gliffy: Wireframing tool
	https://www.gliffy.com/ 

	Agile Project Tracking Software:
	https://en.wikipedia.org/wiki/Agile_software_development
	https://www.pivotaltracker.com/

	Git: Distributed version control system
	https://en.wikipedia.org/wiki/Git_%28software%29
	https://git-scm.com/

	Git Hub: Web-based Git repository hosting service
	https://en.wikipedia.org/wiki/GitHub
	https://github.com/

	FileZilla: FTP client for pushing project files to web server
	https://filezilla-project.org/

Approach taken to implement the project goals:

	Considering the time constraint of less than four days to create, focus was first and foremost on MVP (Minimal Viable Product.) Therefore, no player selection or tracking. The first play is always "X".

	First step: Determine the driving technology.  In this case it is obviously JavaScript.  Game board display is a simple 3x3 grid. And, intricate display styling was not a requirement of the project.  The challenge is the game logic. Therefore, JavaScript is the driving technology.

	Second step: Study the game logic to determine a what variables were required to track current user, grid cell selection, game progress, and determine a winner.

	Third step: Create minimal display using HTML and CSS. Attach to the HTML elements unique id selectors making them accessible to the JavaScript.

	Fourth step: "Pseudocode" the JavaScript. 

		Create tracking variables
			whosTurn boolean;
			totalPlaysCounter;
			trackingObject to track the board's state; 

		Create Reset Function
			reset whosTurn and totalPlaysCounter
			reset the trackingObject:
				for in loop... set the id's to null strings
				and while in the loop reset the on screen HTML to original state.


		Use jQuery to manage mouse click events

			Two possible events

				First possible event: Click on the game grid;
					Use jQuery to extract the clicked button's id selector
					Check board's state in tracking object to see if grid square has already been played
						if played.. 
							return out of the event and wait for new click event
						else 
							update tracking object and the HTML with X or O (depending on player state)
							update totalPlaysCounter and whosTurn variables

						scan the tracking object for the 18 possible winning solutions.
						if winner... announce it and call the reset function.
						check for full board... ie 9 plays and not a winner
						if full... announce "cats game" and call the reset function.

				Second possible event: Click on a "reset" button;
					call the reset function.

	Fifth Step: Write the javaScrip code, testing iteratively;

	Sixth Step: Write this README.md and push up to Git Hub.

	Seventh Step: Push up to host server.

Installation Instructions: Point browser at ---

http://powerbids.com/Steve/Projects/Tic-Tac-Toe


Unsolved problems:  None.  MVP achieved.

Continuing development opportunities:

	Add interactive user names allowing score keeping.
	Use CSS to style background and button design... etc.
