var express = require('express');
var compress = require('compression');
var path = require('path');

var app = express();

app.use(compress());
app.use(express.static(path.join(__dirname +'./../')));

app.get('/', function (req, res) {
	res.sendFile('index.html');
})

app.listen(3200, function(){
	console.log('server is up on port 3200');
})