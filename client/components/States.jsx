var React = require('react');
var d3 = require('d3');
var uuid = require('node-uuid');
var SingleState = require('./State.jsx')

var States = React.createClass({

	getInitialState: function () {
		return {
			stateObjects: [],
			svg: null,
			stateComps: []
		}
	},

	componentDidMount: function () {
		
		d3.json('./../../shapefiles-and-topojson/usastates.json', function (error, usa) {
			
			if(error) return console.error(error);

			var svg = d3.select("#usa");
			var stateArray = usa.objects.gz_2010_us_040_00_500k.geometries;

			this.setState({stateObjects: stateArray, svg: svg, stateComps: [], mapp: usa});

		}.bind(this));
	},

	render: function () {

		this.state.stateObjects.forEach(function (element) {
			this.state.stateComps.push(<SingleState stateObject={element} stateId={element.properties.name} {...this.props} {...this.state} />);
		}.bind(this));

		var GenerateStates = this.state.stateComps.map(function (states) {
			var uuID = uuid.v4();
			return (<div style={styles} key={uuID}>{states}</div>)
		}.bind(this))

		return ( 
			<div id='stateContainer'>	
				{GenerateStates}
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
