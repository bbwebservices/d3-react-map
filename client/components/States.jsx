var React = require('react');
var d3 = require('d3');
var uuid = require('node-uuid');
var SingleState = require('./State.jsx')

var States = React.createClass({

	componentDidMount: function () {
		
		d3.json('./../../shapefiles-and-topojson/usastates.json', function (error, usa) {
			
			if(error) return console.error(error);

			var svg = d3.select("#usa");
			var stateArray = usa.objects.gz_2010_us_040_00_500k.geometries;

			this.props.placeStates(stateArray, svg, usa);

		}.bind(this));

	},

	componentDidUpdate: function () {
		console.log(this.props);
	},

	render: function () {

		// push state components to stateComps array. only add on initial render.
		if(this.props.stateComps.length === 0){
			this.props.stateObjects.forEach(function (element) {
				this.props.stateComps.push(<SingleState stateObject={element} stateId={element.properties.name} {...this.props} {...this.state} />);
			}.bind(this));
		}
		// map each state component to unique elements
		var GenerateStates = this.props.stateComps.map(function (states) {
			var uuID = uuid.v4();
			return (<div style={styles} key={uuID}>{states}</div>)
		}.bind(this))	
		
		// display tweets
		var listOfTweets = null;
		if(this.props.tweets){
			listOfTweets = this.props.tweets.map(function (tweet) {
				return (<li className="tweet">{tweet.text}<br/><strong>{tweet.user.location}</strong></li>)
			})	
		} 
		
		return ( 
			<div>
				<div id='stateContainer'>	
					{GenerateStates}
				</div>
				<div id='tweetContainer'>
					<ul>
						{listOfTweets}
					</ul>
				</div>
			</div>
		)
	}
});

var styles = {
	position: 'absolute',
	width: '100%',
	height: '100%'
}

module.exports = States;
