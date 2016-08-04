var express = require('express');
var app = express();

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
  console.log('Example app listening on port 8000!');
});