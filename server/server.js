var express = require('express');
var compress = require('compression');
var path = require('path');
var twit = require('twit');
var config = require('./../config');

var app = express();

app.use(compress());
app.use(express.static(path.join(__dirname +'./../')));

var T = new twit({
	consumer_key: config.consumer_key,
	consumer_secret: config.consumer_secret,
	access_token: config.access_token,
	access_token_secret: config.access_token_secret
})

var twitterData;

T.get('/search/tweets', {q: '#catsareassholes', count: 10, result_type: 'random'}, function (err, data, response) {
	twitterData = data;
})

app.get('/', function (req, res) {
	res.sendFile('index.html');
})

app.get('/tweets', function (req, res) {
	console.log(twitterData.statuses.length);
	res.send(twitterData.statuses);
})

app.listen(3200, function(){
	console.log('server is up on port 3200');
})
