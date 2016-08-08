var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost');

var SnippetSchema = require('./snippet.schema.js');
var Snippet = mongoose.model('Snippet', SnippetSchema);


snippet = new Snippet({
	id: 7,
	image: "images/css-1.png",
	answer: "css",
	answerId: 2,
	category: "languages",
	difficulty: 1
});

snippet.save();

snippet = new Snippet({
	id: 8,
	image: "images/html-1.png",
	answer: "html",
	answerId: 1,
	category: "languages",
	difficulty: 1
});

snippet.save();

snippet = new Snippet({
	id: 9,
	image: "images/js-1.png",
	answer: "js",
	answerId: 3,
	category: "languages",
	difficulty: 1
});

snippet.save();

snippet = new Snippet({
	id: 10,
	image: "images/css-4.png",
	answer: "css",
	answerId: 2,
	category: "languages",
	difficulty: 1
});

snippet.save();

snippet = new Snippet({
	id: 11,
	image: "images/html-3.png",
	answer: "html",
	answerId: 1,
	category: "languages",
	difficulty: 1
});

snippet.save();

snippet = new Snippet({
	id: 12,
	image: "images/js-4.png",
	answer: "js",
	answerId: 3,
	category: "languages",
	difficulty: 1
});

snippet.save();

snippet = new Snippet({
	id: 13,
	image: "images/css-5.png",
	answer: "css",
	answerId: 2,
	category: "languages",
	difficulty: 1
});

snippet.save();

snippet = new Snippet({
	id: 14,
	image: "images/html-5.png",
	answer: "html",
	answerId: 1,
	category: "languages",
	difficulty: 1
});

snippet.save();

snippet = new Snippet({
	id: 15,
	image: "images/js-5.png",
	answer: "js",
	answerId: 3,
	category: "languages",
	difficulty: 1
});

snippet.save();