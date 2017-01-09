var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');
var Loading = require('../components/Loading');

var ConfrimBattleContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function() {
		return {
			isLoading: true,
			playersInfo: []
		}
	},
	componentDidMount: function() {
		var query = this.props.location.query;
		//fetch info from github and update the state
		githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
		.then(function(players) {
			this.setState({
				isLoading: false,
				playersInfo: [players[0], players[1]]
			})
		}.bind(this))
	},
	handleInitiateBattle: function () {
		console.log(this.props)
		this.context.router.push({
			pathname: '/results',
			state: {
				playersInfo: this.state.playersInfo
			}
		})
	},
	render: function() {
		// console.log(this.state)
		return (
			<ConfirmBattle 
				isLoading={this.state.isLoading}
				playersInfo={this.state.playersInfo}
				onInitiateBattle={this.handleInitiateBattle} />
		);
	}
});

module.exports = ConfrimBattleContainer;