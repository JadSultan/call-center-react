import React from 'react'
import {Jumbotron} from 'react-bootstrap'


const Welcome = () => {
	return (
		<Jumbotron className = "bg-dark text-white">
			<h1 align="center">Welcome </h1>
			<h3 align="center">
				Call Center With Redux and SAGA 
			</h3>
		</Jumbotron>
	);
}

export default Welcome;