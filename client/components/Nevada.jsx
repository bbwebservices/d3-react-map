var React = require('react');
var d3 = require('d3');

var Nevada = React.createClass({

	componentWillMount: function () {
		d3.json('./../../shapefiles-and-topojson/usastates.json', function (error, usa) {
			if(error){
				return console.error(error);
			}

			var svg = d3.select("#nevada");
			var states = topojson.feature(usa, usa.objects.gz_2010_us_040_00_500k.geometries);
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
			<svg id="nevada" width={this.props.width} height={this.props.height}></svg>
		)
	}
})

module.exports = Nevada;