import React, {Component} from 'react';
import UserInputs from '../components/UserInputs';

require('./home.css');

export default class Home extends Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className='home'>
				<UserInputs />
			</div>
		)
	}
}