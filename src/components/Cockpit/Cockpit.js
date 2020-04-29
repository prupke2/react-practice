import React from 'react';
import Validation from '../ValidationComponent/Validation';
import './cockpit.css';
import styled from 'styled-components';


const ButtonStyle = styled.button `
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  margin: 10px;
  font: inherit;
  border: 1px solid blue;
  border-radius: 4px;
  padding: 8px;
  &:hover {
    background-color: ${props=> props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }  
}`;

const cockpit = (props) => {

 //    let persons = null;

	// if (props.showPersons) {
	// 	persons = 
	// 		<Persons 
	// 			persons = {props.persons}
	// 			clicked = {props.deletePersonHandler}
	// 			changed = {props.nameChangeHandler} 
	// 		/>;

	// }

	return (
		<div className="cockpit">
	      <h1>React testing</h1>
          <p>Enter letters here:</p> 
          <input 
            type="text"
            onChange={props.inputChanged}
            value={props.userInput} 
            />
            <p>{props.userInput}</p>

          <Validation inputLength={props.userInput.length} />

          <hr />

          <ButtonStyle 
            alt={props.showPersons}
            onClick={props.clicked}
            deleted={props.deleted}>Toggle people
          </ButtonStyle>

          <ButtonStyle
            alt={props.currentTime}
            onClick={props.getTime}>Get time
          </ButtonStyle>
          <p>Current Time: {props.currentTime}</p>
          <p className="test">TEST</p>
        </div>  
    )
}

export default cockpit;