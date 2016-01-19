var React = require('react');
var d3 = require('d3');
var uuid = require('node-uuid');
// var Maine = require('./Maine.jsx');
// var Massachusetts = require('./Massachusetts.jsx');
// var Michigan = require('./Michigan.jsx');
// var Montana = require('./Montana.jsx');
// var Nevada = require('./Nevada.jsx');
// var NewJersey = require('./NewJersey.jsx');
// var California = require('./California.jsx');


var States = React.createClass({

	componentWillMount: function () {
		
		d3.json('./../../shapefiles-and-topojson/usastates.json', function (error, usa) {
			if(error){
				return console.error(error);
			}

			var svg = d3.select("#usa");
			var stateArray = usa.objects.gz_2010_us_040_00_500k.geometries;
			this.setState({stateObjects: stateArray, svg: svg});

			stateArray.forEach(function (element) {
				var usaState = topojson.feature(usa, element);
				var projection = d3.geo.albersUsa()
				.scale(500)
				.translate([300, 600])
			svg.append("path")
				.datum(usaState)
				.attr("d", d3.geo.path().projection(d3.geo.mercator()));
			})
		}.bind(this));
	},

	render: function () {
		// console.log(this.state);
		// this.state.stateObjects.forEach(function (element) {
		// 	var component = createComponents(element.properties.name, element, element.properties.name);
		// 	console.log(component);
		// })
		// var stateComps = states.map(function (states) {
		// 	var stateId = uuid.v4();
		// 	console.log(stateId);
		// 	return (<div style={styles} id={stateId}>{states}</div>)
		// })
				// {stateComps}

		return ( 
			<div id='stateContainer'>	
				<svg id="usa" width={this.props.width} height={this.props.height}></svg>

			</div>
		)
	}
});

var styles = {
	position: 'absolute'
}

var createComponents = function (name, object, id) {
	
	var State = React.createClass({

		componentWillMount: function () {
			d3.json('./../../shapefiles-and-topojson/usastates.json', function (error, usa) {
				if(error){
					return console.error(error);
				}

				var svg = d3.select("#"+id);
				var states = topojson.feature(usa, object);
				var projection = d3.geo.albersUsa()
					.scale(500)
					.translate([300, 600])
				svg.append("path")
					.datum(states)
					.attr("d", d3.geo.path().projection(d3.geo.mercator()));
				
			});
		},

		render: function () {
			return (
				<svg id={id} width={this.props.width} height={this.props.height}></svg>
			)
		}
	})
}

module.exports = States;
