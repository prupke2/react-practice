import React from 'react';
import Radium from 'radium';
import css from './Person.module.css'

const person = (props) => {
	const style = {
		'@media (min-width: 500px)': {
			width: '450px'
		}
	};

	return (
		<div onClick={props.click} className="{css.Person}">
			<p>I'm {props.name} and I am {props.age} years old!</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed} 
			value={props.name}/>
		</div>
	)
};

export default Radium(person);