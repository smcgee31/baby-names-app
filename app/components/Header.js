import React, {Component} from 'react';
require('./header.css');

export default class Header extends Component {

	render() {
		return (
			<div className='jumbotron text-center'>
				<p className='title'>Name That Baby!</p>
			</div>
		);
	}

}