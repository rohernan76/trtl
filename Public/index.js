var questionArr = [];

// this is what our object will look like in Mongo. Creating it here for now so we can build the front end first.
// jjf: 8/4/16
function Question (text, answer, category, difficulty) {
	this.text = text;
	this.answer = answer;
	this.category = category;
	this.difficulty = difficulty;
}

// sample population of the objects so we can build out the front end
// jjf: 8/4/16
questionArr[0] = new Question("css text here", "css", "languages", 1);
questionArr[1] = new Question("html text here", "html", "languages", 1);
questionArr[2] = new Question("js text here", "js", "languages", 1);
questionArr[3] = new Question("more css", "css", "languages", 1);
questionArr[4] = new Question("more html", "html", "languages", 1);
questionArr[5] = new Question("more js", "js", "languages", 1);


// just for test purposes to make sure array and objects work as expected
// jjf 8/4/16
$(document).ready(function() {
	$('#questionBox').html("Question Text: " + questionArr[0].text + "<br>Answer: "+ questionArr[0].answer + "<br>Category: " + questionArr[0].category);
});