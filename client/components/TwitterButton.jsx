var React = require('react');

var TwitterButton = React.createClass({

	render: function () {
		return (
			<div>
				<button onClick={this.props.getTweets}>GET TWEETS, YO</button>
			</div>
		)
	}
});

module.exports = TwitterButton;