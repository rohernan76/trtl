var questionArr = [];

// ( { id: Number, correctAnswer: String, text: String, category: String, difficulty: number (min: 1, max: 4) } )
function Question (text, answer, category, difficulty) {
	this.text = text;
	this.answer = answer;
	this.category = category;
	this.difficulty = difficulty;
}

questionArr[0] = new Question("css text here", "css", "languages", 1);
questionArr[1] = new Question("html text here", "html", "languages", 1);
questionArr[2] = new Question("js text here", "js", "languages", 1);
questionArr[3] = new Question("more css", "css", "languages", 1);
questionArr[4] = new Question("more html", "html", "languages", 1);
questionArr[5] = new Question("more js", "js", "languages", 1);

console.log(questionArr[0]);
$(document).ready(function() {
	$('#questionBox').html("Question Text: " + questionArr[0].text + "<br>Answer: "+ questionArr[0].answer + "<br>Category: " + questionArr[0].category);
});