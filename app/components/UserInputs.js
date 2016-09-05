import React, { Component } from 'react';

export default class UserInputs extends Component {

	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div>
				<GenderChoice />
				<NameFilter />
			</div>
		);
	}
}
