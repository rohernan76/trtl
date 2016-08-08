
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost');
// var Snippet = require('./Snippet.js');
var SnippetSchema = require('./snippet.schema.js');
var Snippet = mongoose.model('Snippet', SnippetSchema);


snippet = new Snippet({
	id: 1,
	image: "images/css-2.png",
	answer: "css",
	answerId: 2,
	category: "languages",
	difficulty: 1
});

snippet.save();

snippet = new Snippet({
	id: 2,
	image: "images/html-4.png",
	answer: "html",
	answerId: 1,
	category: "languages",
	difficulty: 1
});

snippet.save();

snippet = new Snippet({
	id: 3,
	image: "images/js-5.png",
	answer: "js",
	answerId: 3,
	category: "languages",
	difficulty: 1
});

snippet.save();

snippet = new Snippet({
	id: 4,
	image: "images/css-3.png",
	answer: "css",
	answerId: 2,
	category: "languages",
	difficulty: 1
});

snippet.save();

snippet = new Snippet({
	id: 5,
	image: "images/html-2.png",
	answer: "html",
	answerId: 1,
	category: "languages",
	difficulty: 1
});

snippet.save();

snippet = new Snippet({
	id: 6,
	image: "images/js-2.png",
	answer: "js",
	answerId: 3,
	category: "languages",
	difficulty: 1
});

snippet.save();