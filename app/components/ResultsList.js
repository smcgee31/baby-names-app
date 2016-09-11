import React, { Component } from 'react';
import SingleResult from './SingleResult';
require('./resultsList.css');

export default class ResultsList extends Component {
	render() {
		let results = this.props.results.map((result, index) => {
			console.log(result, index);
			return(
				<SingleResult key={index} frequency={ this.props.results[index].Frequency } name={ this.props.results[index].Name } sex={ this.props.results[index].Sex }/>
				);
		});
		return (
			<div className='resultsList'>
				<div className='headings_container'>
					<div className='headingName'>Name</div>
					<div className='headingSex'>Sex</div>
					<div className='headingFreq'>Frequency</div>
				</div>
				{ results }
			</div>
		);
	}
}
