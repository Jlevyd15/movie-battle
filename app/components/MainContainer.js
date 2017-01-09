var React = require('react');
var style = require('../styles');

function MainContainer(props) {
	return (
		<div className="jumbotron col-sm-12 text-center" style={style.transparentBg} >
			{props.children}
		</div>
	)
};

module.exports = MainContainer;