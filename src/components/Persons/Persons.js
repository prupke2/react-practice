import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
	static getDerivedStateFromProps(props, state) {
		console.log('[Persons.js] getDerivedStateFromProps');
		return state;
	}


	// You can import {PureComponent} instead of {Component} to get the same result
	shouldComponentUpdate(nextProps, nextState) {
		console.log('[Persons.js] shouldComponentUpdate');
		if (
			nextProps.persons !== this.props.persons ||
			nextProps.changed !== this.props.changed ||
			nextProps.clicked !== this.props.clicked
		) { 
			return true;
		} else {
			return false;
		} 
	}

	componentDidUpdate() {
		console.log('[Persons.js] componentDidUpdate');
	}

	render() {
		console.log('[Persons.js rendering...');

		return this.props.persons.map((person, index) => {
	        return (
	        	<Person 
		            clicked={() => this.props.clicked(index)}
		            name={person.name}
		            age={person.age} 
		            key={person.id}
		            changed={(event) => this.props.changed(event, person.id)} 
		         />
	      	);
		});
	};
}
export default Persons;