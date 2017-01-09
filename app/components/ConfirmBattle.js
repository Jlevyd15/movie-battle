var React = require('react');
var PropTypes = React.PropTypes;
var style = require('../styles');
var Player = require('./Player');
var Link = require('react-router').Link;
var PlayerWrapper = require('./PlayerWrapper');
var MainContainer = require('./MainContainer');

function puke(object) {
	return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

var ConfirmBattle = function (props) {
	return props.isLoading === true
		? <p> Loading! </p> 
		: <MainContainer>
		 	<h1>Confirm Players</h1>
		 	<div className="col-sm-8 col-sm-offset-2">
		 		<PlayerWrapper header="Player 1">
		 			<Player playerData={props.playersInfo[0]} />
		 		</PlayerWrapper>
		 		<PlayerWrapper header="Player 2">
		 			<Player playerData={props.playersInfo[1]} />
		 		</PlayerWrapper>
		 	</div>
		 	<div className="col-sm-8 col-sm-offset-2">
		 		<div className="col-sm-12" style={style.space}>
		 			<button type='button' className="btn btn-lg btn-success" onClick={props.onInitiateBattle} >
		 				Initiate Battle
		 			</button>
		 		</div>
		 		<div className="col-sm-12" style={style.space}>
		 			<Link to="/playerOne" className="btn btn-lg btn-">
		 				<button type='button' className="btn btn-lg btn-danger">
		 				 Start Over
	 				 	</button>
		 			</Link>
		 		</div>
		 	</div>
		  </MainContainer>
}

ConfirmBattle.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	playersInfo: PropTypes.array.isRequired,
	onInitiateBattle: PropTypes.func.isRequired
}

module.exports = ConfirmBattle;