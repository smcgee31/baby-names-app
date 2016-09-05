import React, { Component } from 'react';
import GenderChoice from '../components/GenderChoice';
import NameFilter from '../components/NameFilter';

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
