
//Mongoose Schema
function Snippet (id, image, answer, answerId, category, difficulty) {
	this.id = id;
	this.image = image;
	this.answer = answer;
	this.answerId = answerId;
	this.category = category;
	this.difficulty = difficulty;
}

module.exports = Snippet;
