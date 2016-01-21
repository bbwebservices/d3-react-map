var React = require('react');
var	ReactDOM = require('react-dom');
var TwitterButton = require('./components/TwitterButton.jsx');
var States = require('./components/States.jsx');
var d3 = require('d3');
var request = require('superagent');

var Main = React.createClass({

	getInitialState: function () {
		return {
			locations: null
		}
	},

	getTweets: function () {
		console.log('fetching...');
		request
			.get('./tweets')
			.end(function (err, res) {
				if(err){
					console.error(err);
				}
				var tweets = res.body.filter(function (obj) {
					if(obj.place || obj.geo || obj.user.location) {
						console.log(obj);
						return true;
					}
					return false;
				})
				console.log('tweets from body', tweets);
			})
	},

	render: function () {
		return (
			<div>
				<States {...mapSettings} />
				<TwitterButton getTweets={this.getTweets}/>
			</div>
		)
	}
});

var mapSettings = {
	width: '100%',
	height: '100%'
}

ReactDOM.render(<Main />, document.getElementById('fullContainer'));