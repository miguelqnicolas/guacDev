import React, {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import logo from './img/logo.png';

const AppContainer = styled.div`
	height: 90vh;
	width: 921.6px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.logo {
		margin-bottom: 4px;
		display: flex;
		align-items: center;

		img {
			height: 48px;
		}

		h1 {
			font-size: 2rem;
			font-weight: 700;
			color: #333;
		}
	}

	.description {
		margin-bottom: 32px;
		font-size: 1rem;
		font-weight: 500;
		color: #333;
	}

	form {
		.form-container {
			margin-bottom: 16px;
			display: flex;
			justify-content: space-between;
			align-items: center;
		
			select {
				width: 93.95px;
				padding: 12px;
				margin-right: 16px;
				background: linear-gradient(to right, #76b852, #8DC26F);
				border: none;
				border-radius: 3px;
				font-family: 'Quicksand', sans-serif;
				font-size: 1rem;
				font-weight: 500;
				color: whitesmoke;
				cursor: pointer;

				option {
					font-weight: 500;
					color: #333;
				}

				.gray {
					color: darkgray;
				}
			}

			input {
				width: 701.6px;
				padding: 12px;
				margin-right: 16px;
				border: 1px solid darkgray;
				border-radius: 3px;
				font-family: 'Quicksand', sans-serif;
				font-size: 1rem;
				font-weight: 500;
				color: #333;

				::placeholder {
					color: darkgray;
				}
			}

			button {
				width: 93.95px;
				padding: 12px 0;
				background: linear-gradient(to right, #76b852, #8DC26F);
				border: none;
				border-radius: 3px;
				font-family: 'Quicksand', sans-serif;
				font-size: 1rem;
				font-weight: 500;
				color: whitesmoke;
				cursor: pointer;
			}
		}



		.json-and-response-container {
			display: flex;

			.json-container {
				label {
					font-size: 1rem;
					font-weight: 500;
					color: #333;
				}

				textarea {
					height: 444.8px;
					width: 444.8px;
					padding: 16px;
					margin-top: 4px;
					border: 1px solid darkgray;
					border-radius: 3px;
					font-family: 'Quicksand', sans-serif;
					font-size: 0.875rem;
					font-weight: 500;
					color: #333;
					resize: none;

					::placeholder {
						color: darkgray;
					}
				}
			}

			.response-container {
				p {
					margin-bottom: 4px;
					font-size: 1rem;
					font-weight: 500;
					color: #333;
				}
		
				.response {
					height: 444.8px;
					width: 444.8px;
					padding: 16px;
					background: white;
					border: 1px solid darkgray;
					border-radius: 3px;

					pre {
						font-family: 'Quicksand', sans-serif;
						font-size: 0.875rem;
						font-weight: 500;
						color: #333;
					}

					p {
						font-size: 0.875rem;
						font-weight: 500;
						color: #333;
					}
				}
			}
		}
	}
`

const App = () => {
	const [input, setInput] = useState({
		request: 'get',
		endpoint: '',
		// json: {}
	});
	const [response, setResponse] = useState();
	const [fetching, setFetching] = useState(false);
	
	const onChange = event => {
		console.log(response);
		setInput({
			...input,
			[event.target.name]: event.target.value
		});
	};

	const onSubmit = event => {
		event.preventDefault();
		setFetching(true);
		if (input.request === 'get') {
			axios.get(input.endpoint)
				.then(response => {
					setResponse(response.data);
					setFetching(false);
				})
				.catch(error => {
					console.log(error);
					setFetching(false);
				});
		} else if (input.request === 'delete') {
			axios.delete(input.endpoint)
				.then(response => {
					setResponse(response.data);
					setFetching(false);
				})
				.catch(error => {
					console.log(error);
					setFetching(false);
				});
		};
	};

	return (
		<AppContainer>
			<div className='logo'>
				{/* <img src={logo} alt='guac logo'/> */}
				<h1>guacFetch</h1>
			</div>
			<p className='description'>Send API requests and view responses</p>

			<form autoComplete='off' spellCheck='false' onSubmit={onSubmit}>
				<div className='form-container'>
					<select name='request' value={input.request} onChange={onChange}>
						<option value='get'>Get</option>
						<option className='gray' value='post' disabled>Post</option>
						<option className='gray' value='put' disabled>Put</option>
						<option value='delete'>Delete</option>
					</select>
					<input name='endpoint' placeholder='Enter endpoint' value={input.endpoint} onChange={onChange} required/>
					{fetching ? <button type='submit'>Sending...</button> : <button type='submit'>Send</button>}
				</div>

				<div className='json-and-response-container'>
				
					<div className='json-container'>
						<label htmlFor='json'>JSON</label>
						<textarea className='json' name='json' placeholder='JSON functionality coming soon' value={input.json} onChange={onChange} disabled/>
					</div>

					<div className='response-container'>
						<p>Response</p>
						<div className='response'>
							{response ? <pre>{JSON.stringify(response, null, 4)}</pre> : <p>Make a request to see the response</p>}
						</div>
					</div>

				</div>
			</form>
		</AppContainer>
	);
};

export default App;
