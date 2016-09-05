import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
const
	  ReactRouter = require('react-router')
	, Router      = ReactRouter.Router
	, Route       = ReactRouter.Route
	, IndexRoute  = ReactRouter.IndexRoute
	, hashHistory = ReactRouter.hashHistory;

const routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Home} />
		</Route>
	</Router>
);

module.exports = routes;