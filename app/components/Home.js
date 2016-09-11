
import React, {Component} from 'react';
import {ReactRouter, Link} from 'react-router';
import MainContainer from '../containers/MainContainer';

require('./home.css');

export default class Home extends Component {

	render() {
		return (
			<MainContainer>
					<Link to='/prompt'>
						<button className='btn btn-block btn-lg btn-success text-center' type='button'> Get Started </button>
					</Link>
			</MainContainer>
		)
	}
}