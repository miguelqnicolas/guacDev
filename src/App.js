import React, {useState} from 'react';

const App = () => {
	const [input, setInput] = useState('');

	const onChange = event => {
		setInput(event.target.value);
		console.log(input);
	};

	const onSubmit = event => {
		event.preventDefault();
		window.open(`https://www.facebook.com/marketplace/105807299459883/search/?query=${input}&vertical=C2C&sort=BEST_MATCH`);
		window.open(`https://cnj.craigslist.org/search/sss?query=${input}&sort=rel`);
		window.open(`https://www.letgo.com/en-us?searchTerm=${input}`);
		window.open(`https://offerup.com/search/?q=${input}`);
		window.open(`https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1312.R4.TR0.TRC0.A0.H0.TRS5&_nkw=${input}&_sacat=0`);
		window.open(`https://www.mercari.com/search/?keyword=${input}`);
		setInput('');
	}

	return (
		<div className='App'>
			<h1>guacSearch</h1>
			<form onSubmit={onSubmit} autoComplete='off' spellCheck='false'>
				<input type='text' value={input} onChange={onChange}/>
				<button type='submit'><i className="fas fa-search"></i></button>
			</form>
			<p>Search for an item on multiple marketplaces in one go!</p>
		</div>
	);
};

export default App;