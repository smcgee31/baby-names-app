import React, { Component } from 'react';

export default class Main extends Component {
	render() {
		return (
			<div className='main-component'>
				<HeaderContainer />
				{this.props.children}
			</div>
		);
	}
}
