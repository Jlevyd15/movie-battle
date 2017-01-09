var React = require('react');
var PropTypes = React.PropTypes;
var style = require('../styles');

function puke(object) {
	return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

var Player = function (props) {
	return (
		
		<div>
		{!!props.scores && <h2>score: {props.scores}</h2>}
		<h3>{!!props.playerData.Title && props.playerData.Title}</h3>
		<h4>{!!props.playerData.Year && props.playerData.Year}</h4>
		<h4>{!!props.playerData.Director && props.playerData.Director}</h4>
		<img src={!!props.playerData.Poster && props.playerData.Poster} />
		{puke(props)}
		</div>
	)
}



module.exports = Player;