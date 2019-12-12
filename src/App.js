import React, {useState} from 'react';

const App = () => {
	const [input, setInput] = useState('');

	const onChange = event => {
		setInput(event.target.value);
	};

	return (
		<div>
			<form>
				<input type='text' value={input}/>
			</form>
		</div>
	);
};

export default App;