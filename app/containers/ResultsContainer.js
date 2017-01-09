var React = require('react');
var Results = require('../components/Results');
var githubHelpers = require('../utils/githubHelpers');

var ResultsContainer = React.createClass({ 
	getInitialState: function() {
		return {
			isLoading: true,
			scores: []
		}
	},
	componentDidMount: function() {
		console.log("Players",this.props.location.state.playersInfo)
		var scores = githubHelpers.battle(this.props.location.state.playersInfo)
		console.log(scores)
		this.setState({
			scores: scores,
			isLoading: false
		})
	},
	render: function() {
		return (
			<Results 
				isLoading={this.state.isLoading}
				playersInfo={this.props.location.state.playersInfo} 
				scores={this.state.scores} />
		)
	}
});


module.exports = ResultsContainer;