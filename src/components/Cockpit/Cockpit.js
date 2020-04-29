import React, { useEffect } from 'react';
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

const Cockpit = (props) => {

	useEffect(() => {
		console.log('[Cockpit.js] useEffect');
		// Https request, etc.

		const timer = setTimeout(() => {
			console.log("useEffect has run!");
		}, 1000);
		// returns are optional in useEffect() but can be used to clean up and improve performance
		return () => {
			clearTimeout(timer);
		}
	}, []);

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

// wrapping the export with React.memo stores a snapshot of the component
// so that it will only re-render if something changes
export default React.memo(Cockpit);