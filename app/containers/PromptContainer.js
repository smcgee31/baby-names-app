import React, { Component } from 'react';
import axios from 'axios';
import Prompt from '../components/Prompt';
import ResultsList from '../components/ResultsList';

export default class PromptContainer extends Component {

	constructor() {
		super();
		this.state = {
			results: []
		};
	}

	handleSearch(searchTerm) {
		return axios.get('http://localhost:4000/names/' + searchTerm)
		// originally I had `.then(function (response) {` on line 18 but it didn't work becuase of `this` not being bound but the arrow function takes care of that!
		.then((response) => {
			// return response.data;
			this.setState({ results: response.data });
			})
		.catch(function (err) {
			console.warn('Error in response ', err);
		});
	}

	render() {
		return (
			<div>
				<Prompt onSearch={ this.handleSearch.bind(this) }/>
				<ResultsList results={ this.state.results }/>
				<Pagination />
			</div>
		);
	}
}
