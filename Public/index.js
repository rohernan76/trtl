
// this is what our object will look like in Mongo. Creating it here for now so we can build the front end first.
// jjf: 8/4/16
function Snippet (id, image, answer, answerId, category, difficulty) {
	this.id = id;
	this.image = image;
	this.answer = answer;
	this.answerId = answerId;
	this.category = category;
	this.difficulty = difficulty;
}

function Model () {

	this.snippetArr = [];

	// sample population of the objects so we can build out the front end
	// jjf: 8/4/16
	this.snippetArr[0] = new Snippet(1, "images/css-2.png", "css", 2, "languages", 1);
	this.snippetArr[1] = new Snippet(2, "images/html-4.png", "html", 1, "languages", 1);
	this.snippetArr[2] = new Snippet(3, "images/js-5.png", "js", 3, "languages", 1);
	this.snippetArr[3] = new Snippet(4, "images/css-3.png", "css", 2, "languages", 1);
	this.snippetArr[4] = new Snippet(5, "images/html-2.png", "html", 1, "languages", 1);
	this.snippetArr[5] = new Snippet(6, "images/js-2.png", "js", 3, "languages", 1);

	//console.log("end of model", this.snippetArr);

} // end Model

function View(c) {

	//JS for Modal
	// Get the modal
	var modal = document.getElementById('tutorialModal');

	// Get the button that opens the modal
	var btn = document.getElementById("tutorial-button");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on the button, open the modal 
	btn.onclick = function() {
	    modal.style.display = "block";
	    document.getElementById("themeSong").play();
	};


	window.onload = function() {
		modal.style.display = "block";
		document.getElementById("themeSong").play();
	};

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = "none";
	    document.getElementById("themeSong").pause();
	};

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	        document.getElementById("themeSong").pause();
	    }
	};

	// this.showNewSnippet = function (imgStr) {
	// 	// code for dragging the element will do in here, 
	// 	var imgStr2 = "url(" + imgStr + ")";
	// 	changeCss(".snippet", "background-image: " + imgStr2);
	// };


	this.showNewSnippet = function (snipNum) {
		var imgStr = "url(" + c.getImgStr(snipNum) + ")";
		changeCss(".snippet", "background-image: " + imgStr);
		document.getElementById("snippetContainer").appendChild(document.getElementById("dragSnip"));
	};

	//******* Drag/Drop code here
	this.allowDrop = function(ev) {
	   ev.preventDefault();
	};

	this.drag = function(ev) {
	   ev.dataTransfer.setData("text", ev.target.id);
	};

	this.drop = function(ev) {
	   ev.preventDefault();
	   var data = ev.dataTransfer.getData("text");
	   ev.target.appendChild(document.getElementById(data));
	   c.checkAnswer(ev, this.showNewSnippet, this.gameOverAlert);
	};

	// put this code on the showNewSnippet function, no need to call it separately
	// this.moveSnip = function() {
	// 	document.getElementById("snippetContainer").appendChild(document.getElementById("dragSnip"));
	// };

	this.gameOverAlert= function(firstTryScore) {
		changeCss(".snippet", "background-image:");
		alert("Game is Over. You got " + firstTryScore + " right on the first try.");
	};

	//Copied from http://stackoverflow.com/questions/11474430/change-css-class-properties-with-jquery
	// this is used to change the background image property of the div that shows the code snippet
	function changeCss(className, classValue) {
	    // we need invisible container to store additional css definitions
	    var cssMainContainer = $('#css-modifier-container');
	    if (cssMainContainer.length == 0) {
	        cssMainContainer = $('<div id="css-modifier-container"></div>');
	        cssMainContainer.hide();
	        cssMainContainer.appendTo($('body'));
	    }

	    // and we need one div for each class
	    classContainer = cssMainContainer.find('div[data-class="' + className + '"]');
	    if (classContainer.length == 0) {
	        classContainer = $('<div data-class="' + className + '"></div>');
	        classContainer.appendTo(cssMainContainer);
	    }

	    // append additional style
	    classContainer.html('<style>' + className + ' {' + classValue + '}</style>');
	} // end function changeCss

} // end View


function Controller(m) {

	//console.log("in controller", m.snippetArr);
	// call function to randomly shuffle the array
	snippetArr = shuffle(m.snippetArr);

	// set initial variables
	var snipNum = 0;
	var firstTryScore = 0;
	var firstTry = true;

	this.getImgStr = function(snipNum) {
		return snippetArr[snipNum].image;
	};

	this.checkAnswer = function(ev, showSnipCallback, gameOverCallback) {
		// console.log(ev);
		// console.log(ev.target);
		// console.log("in check answer", ev.target.id[6], snippetArr[snipNum].answerId);

		// get the id of the drop target, to compare with the correct answer for this snippet
		var answerId = ev.target.id[6];
		if (answerId == snippetArr[snipNum].answerId) {
			// if it's the right answer, increment snipNum and then show new Snippet
			// also, play the correct answer sound. Stop the wrong answer sound, and reset it so the next time it plays, it starts from the beginning
			document.getElementById("wrongAnswer").pause();
			document.getElementById("wrongAnswer").currentTime = 0;
			document.getElementById("correctAnswer").play();
			// increment snipNum so we move to the next snippet
			snipNum++;

			// this removes horizontal shake when new snippet appears
			$(".animated").removeClass( "shake" );
			// if this is the first bucket dropped into, increment the score
			if (firstTry) {
				firstTryScore++;
				$("#score").html("Score: " + firstTryScore);
			}
			// check to see if there is another snippet to show
			if (snippetArr[snipNum]) {
				// if there is another snippet to show, 
				showSnipCallback(snipNum);
			} else {
				// the right answer bell above is being cut off, so call it all again here.
				document.getElementById("wrongAnswer").pause();
				document.getElementById("wrongAnswer").currentTime = 0;
				document.getElementById("correctAnswer").play();
				gameOverCallback(firstTryScore);
			}
			firstTry = true;
		} else {
			// wrong answer selected
			firstTry = false;
			document.getElementById("wrongAnswer").play();
			// this adds a horizontal shake when user has selected wrong answer
			$(".animated").addClass( "shake" );
		}
	};

	// copied from: http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
	function shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	 return array;
	} // end function shuffle

} // end Controller


var model = new Model();
var controller = new Controller(model);
var view = new View(controller);
