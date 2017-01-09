var React = require('react');
var PropTypes = React.PropTypes;
var style = require('../styles');

function puke(object) {
	return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

var PlayerWrapper = function (props) {
	return (
		<div className="col-sm-6">
 			<p className="lead">{props.header}</p>
 			{props.children}
		</div>
	)
}



module.exports = PlayerWrapper;