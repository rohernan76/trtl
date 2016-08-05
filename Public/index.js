var snippetArr = [];

// this is what our object will look like in Mongo. Creating it here for now so we can build the front end first.
// jjf: 8/4/16
function Snippet (id, text, answer, answerId, category, difficulty) {
	this.id = id;
	this.text = text;
	this.answer = answer;
	this.answerId = answerId;
	this.category = category;
	this.difficulty = difficulty;
}

// sample population of the objects so we can build out the front end
// jjf: 8/4/16
snippetArr[0] = new Snippet(1, "body { background-color: blue}", "css", 2, "languages", 1);
snippetArr[1] = new Snippet(2, "html", "html", 1, "languages", 1);
snippetArr[2] = new Snippet(3, "js text here", "js", 3, "languages", 1);
snippetArr[3] = new Snippet(4, "more css", "css", 2, "languages", 1);
snippetArr[4] = new Snippet(5, "more html", "html", 1, "languages", 1);
snippetArr[5] = new Snippet(6, "more js", "js", 3, "languages", 1);

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
};

window.onload = function() {
	modal.style.display = "block";
};

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
   // console.log(ev.target);
   // console.log($("#bucket1"));
   // console.log(document.getElementById("bucket1"));
}




/////////////////// Code for testing answers and tracking through snippet array

var snipNum = 0;
var firstTryScore = 0;
var firstTry = true;

// start with the first snippet
$(document).ready(function() {
	//$('#snippetBox').html(snippetArr[0].text);
	showNewSnippet(0);
});

// listen for click events on the buckets. When fired, check if it is the right answer. For now, only console.logging the event. 
$(".bucket").click(function(evt) {
	console.log("bucket clicked", evt.target.id);
	var answerId = evt.target.id[6];
	if (answerId == snippetArr[snipNum].answerId) {
		console.log("Answer is correct", snippetArr[snipNum].answerId, answerId);
		// if it's the right answer, increment snipNum and then show new Snippet
		snipNum++;
		if (firstTry) {
			firstTryScore++;
		}
		if (snippetArr[snipNum]) {
			showNewSnippet(snipNum);
		} else {
			alert("Game is Over. You got " + firstTryScore + " right on the first try.");
		}
		firstTry = true;
	} else {
		console.log("Answer is not correct", snippetArr[snipNum].answerId, answerId);
		firstTry = false;
	}
});

function showNewSnippet(snipNum) {
	// code for dragging the element will do in here, 
	$('#snippetBox').html(snippetArr[snipNum].text);
}




//	$('#snippetBox3').html("Id:" + snippetArr[2].id + "<br>Question Text: " + snippetArr[2].text + "<br>Answer: "+ snippetArr[2].answer + "<br>Category: " + snippetArr[2].category);