var React = require('react');
var d3 = require('d3');

var SingleState = React.createClass({

	componentDidMount: function () {
		var trimmedId = this.props.stateId.replace(/\s/g, '');
		var svg = d3.select("#"+trimmedId);
		var states = topojson.feature(this.props.mapp, this.props.stateObject);
		var projection = d3.geo.mercator()
			.center([0, 15.6])
			.scale(400)
			.rotate([160.5, 0])
			.translate([300, 600])
		svg.append("path")
			.datum(states)
			.attr("d", d3.geo.path().projection(projection));

	},

	render: function () {
		var trimmedId = this.props.stateId.replace(/\s/g, '');
		return (
			<svg id={trimmedId} width={this.props.width} height={this.props.height}></svg>
		)
	}
});

module.exports = SingleState;