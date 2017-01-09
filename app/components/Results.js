var React = require('react');
var PropTypes = React.PropTypes;
var style = require('../styles');
var Player = require('./Player');
var PlayerWrapper = require('./PlayerWrapper');
var Link = require('react-router').Link;
var MainContainer = require('./MainContainer');


function puke(object) {
	return <pre>{JSON.stringify(object, 2, ' ')}</pre>
}


function StartOver() {
	return (
		<div className="col-sm-12" style={style.space}>
		<div className="col-sm-8 col-sm-offset-2">
 			<Link to="/playerOne" className="btn btn-lg btn-">
 				<button type='button' className="btn btn-lg btn-danger">
 				 Start Over
				 	</button>
 			</Link>
 			</div>
 		</div>
	)
}

var Results = function (props) {
	if(props.isLoading === true) {
		return (
			<p>Loading...</p>
		)
	}

	if(props.scores[0] === props.scores[1]) {
		return (
			<MainContainer>
				<h1>A tie!</h1>
				<StartOver />
			</MainContainer>
		)
	}
	var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
	var losingIndex = winningIndex === 0 ? 1 : 0;
	return (
		<MainContainer>
		 	<h1>Results</h1>
		 	<div className="col-sm-8 col-sm-offset-2">
		 		<PlayerWrapper header="Winner">
		 			<Player playerData={props.playersInfo[winningIndex]}  scores={props.scores[winningIndex]}/>
		 		</PlayerWrapper>
		 		<PlayerWrapper header="Loser">
		 			<Player playerData={props.playersInfo[losingIndex]} scores={props.scores[losingIndex]}/>
		 		</PlayerWrapper>
		 	</div>
		 	
		 	<StartOver />
		  </MainContainer>
	)
}


Results.PropTypes = {
	isLoading: PropTypes.bool.isRequired,
	playersInfo: PropTypes.array.isRequired,
	scores: PropTypes.array.isRequired
}

module.exports = Results;