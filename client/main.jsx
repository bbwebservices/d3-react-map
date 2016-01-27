var React = require('react');
var	ReactDOM = require('react-dom');
var TwitterButton = require('./components/TwitterButton.jsx');
var States = require('./components/States.jsx');
var d3 = require('d3');
var request = require('superagent');

var Main = React.createClass({

	getInitialState: function () {
		return {
			tweets: null,
			svg: null,
			stateObjects: [],
			stateComps: []
		}
	},

	placeStates: function (stateObjects, svg, mapp) {
			this.setState({stateObjects: stateObjects, svg: svg, mapp: mapp});
	},

	getTweets: function () {
		
		// wait for tweets to come in then set the state for tweets
		var tweets;
		var p = new Promise(
			function (resolve, reject) {
				request
					.get('./tweets')
					.end(function (err, res) {
						if(err){
							console.error(err);
						}
						tweets = res.body.filter(function (obj) {
							if(obj.place || obj.geo) {
								return true;
							}
							return false;
						})
						resolve(tweets);

					}.bind(this))

			}).then(function (value) {
					console.log('promise resolved: ', value);
					this.setState({tweets: value});

			}.bind(this)).catch(function (error) {
				console.error('there was an error: ' +error);

			});
			console.log('promise made, fetching tweets...');
		
	},

	render: function () {
		return (
			<div>
				<States {...mapSettings} tweets={this.state.tweets} placeStates={this.placeStates} {...this.state} />
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