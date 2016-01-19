var React = require('react');
var	ReactDOM = require('react-dom');
var TwitterButton = require('./components/TwitterButton.jsx');
var States = require('./components/States.jsx');
var d3 = require('d3');

var Main = React.createClass({

	getInitialState: function () {
		return {
			test: 'test'
		}
	},

	render: function () {
		return (
			<div>
				<States {...mapSettings} />
				<TwitterButton />
			</div>
		)
	}
});

var mapSettings = {
	width: 960,
	height: 1200,
}

ReactDOM.render(<Main />, document.getElementById('fullContainer'));