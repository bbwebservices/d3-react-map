var React = require('react');
var	ReactDOM = require('react-dom');
var TwitterButton = require('./components/TwitterButton.jsx');
var States = require('./components/States.jsx');
var d3 = require('d3');

var Main = React.createClass({

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
	width: '100%',
	height: '100%'
}

ReactDOM.render(<Main />, document.getElementById('fullContainer'));