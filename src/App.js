import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';

function App() {
	return (
		<>
			<Header/>
			<Home/>

			{/* <Route exact path='/' component={Home}></Route>
			<Route path='/services' component={Services}></Route>
			<Route path='/portfolio' component={Portfolio}></Route> */}
		</>
	);
}

export default App;
