import React, { Component } from 'react';
require('./singleResult.css');

export default class SingleResult extends Component {
	render() {
		return (
			<div className='single_result'>
					<div className='name'>{ this.props.name }</div>
					<div className='sex'>{ this.props.sex }</div>
					<div className='frequency'>{ this.props.frequency }</div>
			</div>
		);
	}
}
