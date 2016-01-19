var React = require('react');
var d3 = require('d3');
var uuid = require('node-uuid');
var Maine = require('./Maine.jsx');
var Massachusetts = require('./Massachusetts.jsx');
var Michigan = require('./Michigan.jsx');
var Montana = require('./Montana.jsx');
var Nevada = require('./Nevada.jsx');
var NewJersey = require('./NewJersey.jsx');
var California = require('./California.jsx');


var States = React.createClass({

	render: function () {
		var states = [
				<Maine {...this.props} />,
				<Massachusetts {...this.props} />,
				<Michigan {...this.props} />,
				<Montana {...this.props} />,
				<Nevada {...this.props} />,
				<NewJersey {...this.props} />,
				<California {...this.props} />
		]
		var stateComps = states.map(function (states) {
			var stateId = uuid.v4();
			console.log(stateId);
			return (<div style={styles} id={stateId}>{states}</div>)
		})
		return ( 
			<div id='stateContainer'>	
				{stateComps}
			</div>
		)
	}
});

var styles = {
	position: 'absolute'
}

module.exports = States;
