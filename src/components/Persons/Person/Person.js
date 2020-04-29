import React from 'react';
import './Person.css';

const person = (props) => {
	const style = {
		'@media (min-width: 500px)': {
			width: '450px'
		}
	};

	return (
		<div>
				<div className="{css.Person}">
					<p>I'm {props.name} and I am {props.age} years old!</p>
					<p>{props.children}</p>
					<input type="text" onChange={props.changed} 
					value={props.name}/>
					<button className="Button" onClick={props.clicked}>Delete</button>
				</div>
		</div>
	)
};

export default person;