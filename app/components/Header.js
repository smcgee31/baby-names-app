import React, {Component} from 'react';
require('./header.css');

export default class Header extends Component {

	render() {
		return (
			<div>
				<p className='title'>Name That Baby!</p>
				<p className='lead text-center'>Search for a name or part of a name and receive results for boy names, girl names and frequency of use.</p>
			</div>
		);
	}

}