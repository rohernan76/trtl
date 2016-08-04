var snippetArr = [];

// this is what our object will look like in Mongo. Creating it here for now so we can build the front end first.
// jjf: 8/4/16
function Snippet (id, text, answer, category, difficulty) {
	this.id = id;
	this.text = text;
	this.answer = answer;
	this.category = category;
	this.difficulty = difficulty;
}

// sample population of the objects so we can build out the front end
// jjf: 8/4/16
snippetArr[0] = new Snippet(1, "css text here", "css", "languages", 1);
snippetArr[1] = new Snippet(2, "html text here", "html", "languages", 1);
snippetArr[2] = new Snippet(3, "js text here", "js", "languages", 1);
snippetArr[3] = new Snippet(4, "more css", "css", "languages", 1);
snippetArr[4] = new Snippet(5, "more html", "html", "languages", 1);
snippetArr[5] = new Snippet(6, "more js", "js", "languages", 1);


// just for test purposes to make sure array and objects work as expected
// jjf 8/4/16
$(document).ready(function() {
	$('#snippetBox1').html(snippetArr[0].text);
	$('#snippetBox2').html(snippetArr[1].text);
	$('#snippetBox3').html(snippetArr[2].text);
});







//	$('#snippetBox3').html("Id:" + snippetArr[2].id + "<br>Question Text: " + snippetArr[2].text + "<br>Answer: "+ snippetArr[2].answer + "<br>Category: " + snippetArr[2].category);