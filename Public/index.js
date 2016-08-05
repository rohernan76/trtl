var snippetArr = [];

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

// sample population of the objects so we can build out the front end
// jjf: 8/4/16
snippetArr[0] = new Snippet(1, "images/css-2.png", "css", 2, "languages", 1);
snippetArr[1] = new Snippet(2, "images/html-4.png", "html", 1, "languages", 1);
snippetArr[2] = new Snippet(3, "images/js-5.png", "js", 3, "languages", 1);
snippetArr[3] = new Snippet(4, "images/css-3.png", "css", 2, "languages", 1);
snippetArr[4] = new Snippet(5, "images/html-2.png", "html", 1, "languages", 1);
snippetArr[5] = new Snippet(6, "images/js-2.png", "js", 3, "languages", 1);

// call function to randomly shuffle the array
snippetArr = shuffle(snippetArr);

//JS for Modal
// Get the modal
var modal = document.getElementById('tutorialModal');

// Get the button that opens the modal
var btn = document.getElementById("tutorial-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var snipNum = 0;
var firstTryScore = 0;
var firstTry = true;

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
};

// window.onload = function() {
// 	modal.style.display = "block";
// };

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


//******* Drag/Drop code here

function allowDrop(ev) {
   ev.preventDefault();
}

function drag(ev) {
   ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
   ev.preventDefault();
   var data = ev.dataTransfer.getData("text");
   ev.target.appendChild(document.getElementById(data));

   var answerId = ev.target.id[6];
	if (answerId == snippetArr[snipNum].answerId) {
		// if it's the right answer, increment snipNum and then show new Snippet
		snipNum++;
		if (firstTry) {
			firstTryScore++;
			$("#score").html("Score: " + firstTryScore);
		}
		// check to see if there is another snippet to show
		if (snippetArr[snipNum]) {
			showNewSnippet(snipNum);
			document.getElementById("snippetContainer").appendChild(document.getElementById("dragSnip"));
		} else {
			alert("Game is Over. You got " + firstTryScore + " right on the first try.");
		}
		firstTry = true;
	} else {
		firstTry = false;
		//document.getElementById("snippetContainer").appendChild(document.getElementById("dragSnip"));
	}
}

// start with the first snippet
$(document).ready(function() {
	//$('#snippetBox').html(snippetArr[0].text);
	showNewSnippet(0);
});

function showNewSnippet(snipNum) {
	// code for dragging the element will do in here, 
	//$('#snippetBox').html(snippetArr[snipNum].text)
	// $(".snippet").css("backgroundImage", "images/html-4.png");
	var imgStr = "url(" + snippetArr[snipNum].image + ")";
	changeCss(".snippet", "background-image: " + imgStr);
}

//Copied from http://stackoverflow.com/questions/11474430/change-css-class-properties-with-jquery

function changeCss(className, classValue) {
    // we need invisible container to store additional css definitions
    var cssMainContainer = $('#css-modifier-container');
    console.log("changeCss");
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
}

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
}

