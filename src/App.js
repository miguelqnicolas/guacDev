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
		<div>
			<form onSubmit={onSubmit}>
				<input type='text' value={input} onChange={onChange}/>
				<button type='submit'>Search</button>
			</form>
		</div>
	);
};

export default App;