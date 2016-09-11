import React, { Component } from 'react';
require('./prompt.css');

export default class Prompt extends Component {

	constructor() {
		super();
		this.state = { searchTerm: '' };
	}

	handleInputChange(e) {
		this.setState({ searchTerm: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		let searchTerm = this.state.searchTerm.trim();
		if (!searchTerm) return; // If no search term was typed, return early and do nothing
		this.props.onSearch(searchTerm);
		// onSearch is a prop from PromptContainer.js
		this.setState({ searchTerm: '' });

	}

	render() {
		return (
			<div className='nameFilterContainer'>
				<form onSubmit={ this.handleSubmit.bind(this) }>
					<input
						className='search_input'
						type='text'
						placeholder='Type name or partial name... '
						onChange={ this.handleInputChange.bind(this) }
						value={ this.state.searchTerm }
					/>
					<span type='button'>
						<button className='input_btn' type='button'> Search </button>
					</span>
				</form>
			</div>
		);
	}

}
