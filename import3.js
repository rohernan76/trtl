var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost');

var SnippetSchema = require('./snippet.schema.js');
var Snippet = mongoose.model('Snippet', SnippetSchema);


snippet = new Snippet({
	id: 16,
	image: "images/pokemon-1.png",
	answer: "pokemon",
	answerId: 1,
	category: "ppd",
	difficulty: 1
});

snippet.save();

snippet = new Snippet({
	id: 17,
	image: "images/prescription-1.png",
	answer: "prescription",
	answerId: 2,
	category: "ppd",
	difficulty: 1
});

snippet.save();

snippet = new Snippet({
	id: 18,
	image: "images/disease-1.png",
	answer: "disease",
	answerId: 3,
	category: "ppd",
	difficulty: 1
});

snippet.save();

snippet = new Snippet({
	id: 19,
	image: "images/pokemon-2.png",
	answer: "pokemon",
	answerId: 1,
	category: "ppd",
	difficulty: 1
});

snippet.save();

snippet = new Snippet({
	id: 20,
	image: "images/prescription-2.png",
	answer: "prescription",
	answerId: 2,
	category: "ppd",
	difficulty: 1
});

snippet.save();

snippet = new Snippet({
	id: 21,
	image: "images/disease-2.png",
	answer: "disease",
	answerId: 3,
	category: "ppd",
	difficulty: 1
});

snippet.save();

snippet = new Snippet({
	id: 22,
	image: "images/pokemon-3.png",
	answer: "pokemon",
	answerId: 1,
	category: "ppd",
	difficulty: 1
});

snippet.save();

snippet = new Snippet({
	id: 23,
	image: "images/prescription-3.png",
	answer: "prescription",
	answerId: 2,
	category: "ppd",
	difficulty: 1
});

snippet.save();

snippet = new Snippet({
	id: 24,
	image: "images/disease-3.png",
	answer: "disease",
	answerId: 3,
	category: "ppd",
	difficulty: 1
});

snippet.save();

snippet = new Snippet({
	id: 25,
	image: "images/pokemon-4.png",
	answer: "pokemon",
	answerId: 1,
	category: "ppd",
	difficulty: 1
});

snippet.save();

snippet = new Snippet({
	id: 26,
	image: "images/prescription-4.png",
	answer: "prescription",
	answerId: 2,
	category: "ppd",
	difficulty: 1
});

snippet.save();

snippet = new Snippet({
	id: 27,
	image: "images/disease-4.png",
	answer: "disease",
	answerId: 3,
	category: "ppd",
	difficulty: 1
});

snippet.save();

snippet = new Snippet({
	id: 28,
	image: "images/pokemon-5.png",
	answer: "pokemon",
	answerId: 1,
	category: "ppd",
	difficulty: 1
});

snippet.save();

snippet = new Snippet({
	id: 29,
	image: "images/prescription-5.png",
	answer: "prescription",
	answerId: 2,
	category: "ppd",
	difficulty: 1
});

snippet.save();

snippet = new Snippet({
	id: 30,
	image: "images/disease-5.png",
	answer: "disease",
	answerId: 3,
	category: "ppd",
	difficulty: 1
});

snippet.save();

