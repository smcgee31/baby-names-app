import React, {Component} from 'react';
import Header from '../components/Header';

export default class HeaderContainer extends Component {

	constrctor(props){
		super(props);
		this.state={};
	}

	render() {
		return (
			<Header />
		)
	}

}