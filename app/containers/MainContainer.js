import React from 'react';

function MainContainer(props) {
	return(
		<div>
			{this.props.children}
		</div>
	)
}

module.exports = MainContainer;