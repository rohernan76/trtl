var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost');
var bodyParser = require('body-parser');
// var Snippet = require('./Snippet.js');
// var snippets = [];

var SnippetSchema = require('./snippet.schema.js');
var Snippet = mongoose.model('Snippet', SnippetSchema);


app.get('/getsnippet', function(req, res) {
	Snippet.find({}, function(err, data){
		res.send(JSON.stringify(data));
	});
});

app.get('/', function (req, res) {
  res.send('Hello Trtls!');
});

// serve all static pages from the public folder
app.use(express.static("public"));

// if file not found, send 404
app.use(function(req, res, next) {
	res.status(404);
	res.send('404 file not found');
});





app.listen(8000, function () {
  console.log('Trtl listening on port 8000!');
});