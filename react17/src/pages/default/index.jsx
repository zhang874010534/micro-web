import logo from '../../logo.svg';
import '../../App.css';
import React, { useEffect } from 'react'
import axios from 'axios'
function DefaultComponent() {
	useEffect(() => {
		axios.get('http://localhost:3000/vue3/car',{
			params: {
				name: 'zhangce'
			}
		})
	})
	return (
		<div className="App">
			<header className="App-header">
				<div>我是react17项目</div>
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default DefaultComponent;
