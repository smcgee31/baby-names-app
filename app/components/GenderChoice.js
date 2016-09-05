import React, { Component } from 'react';
require('./genderChoice.css');

export default class GenderChoice extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}


	render() {
		return (
			<div>
				<input type='radio' name='gender' defaultValue='male' defaultChecked /> Male<br />
				<input type='radio' name='gender' defaultValue='female' defaultChecked />Female<br />
				<input type='radio' name='gender' defaultValue='both' defaultChecked /> Both<br />
			</div>
		);
	}
}
