import React, { Component } from 'react';

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
					<span>
						<button className='btn btn-default' type='button'> Search </button>
					</span>
				</div>
			</div>
		);
	}
}
