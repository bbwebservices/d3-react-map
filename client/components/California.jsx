var React = require('react');
var d3 = require('d3');

var California = React.createClass({

	componentWillMount: function () {
		d3.json('./../../shapefiles-and-topojson/usastates.json', function (error, usa) {
			if(error){
				return console.error(error);
			}

			var svg = d3.select("#california");
			var states = topojson.feature(usa, usa.objects.gz_2010_us_040_00_500k.geometries[22]);
			console.log(this.props)
			var projection = d3.geo.albersUsa()
				.scale(5000)
				.translate([300, 600])
			svg.append("path")
				.datum(states)
				.attr("d", d3.geo.path().projection(d3.geo.mercator()));

			
		});
	},

	render: function () {
		return (
			<svg id="california" width={this.props.width} height={this.props.height}></svg>
		)
	}
})

module.exports = California;