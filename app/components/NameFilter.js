import React, { Component } from 'react';
require('./nameFilter.css');

export default class NameFilter extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className='col-lg-6 nameFilter'>
				<div className='input-group'>
					<input
						className='form-control'
						type='text'
						placeholder='Type name or partial name... ' />
					<span className='input-group-btn' type='button'>
						<button className='btn btn-default' type='button'> Search </button>
					</span>
				</div>
			</div>
		);
	}

}
