import React from 'react';
import {Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Services from './Services';
import Portfolio from './Portfolio';
import './App.css';

function App() {
	return (
		<>
			<Header/>

			<Route exact path='/' component={Home}></Route>
			<Route path='/services' component={Services}></Route>
			<Route path='/portfolio' component={Portfolio}></Route>
		</>
	);
}

export default App;
