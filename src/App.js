import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Validation from './ValidationComponent/Validation';
import Char from './CharComponent/Char';
import styled from 'styled-components';

class App extends Component {
  state = {
    persons: [
      { id: 'asdf', name: 'Jimbo', age: 10},
      { id: 'asdf2', name: 'Dolph', age: 11},
      { id: 'asdf3', name: 'Kearney', age: 12}
    ],
    userInput: "",
    count: 0,
    currentTime: "",
    showPersons: false
  }

  getTime = () => {
    fetch('/time', {
      method: 'GET',
    })
    .then(results => results.json())
    .then(data => this.setState({currentTime: data.time}));
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons}); 
  }

  nameChangeHandler = (event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const showPersons = this.state.showPersons;
    this.setState({showPersons: !showPersons});
  }

  inputChangedHandler = (event) => {
    this.setState({count: event.length});  
    this.setState({userInput: event.target.value});
    // console.log("Count: " + this.state.count);
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});

    // this.setState({userInput: chars});
  }

  render() {

    const charList = this.state.userInput.split('').map((char, index) => {
      return <Char character={char} 
      key={index} 
      clicked={() => this.deleteCharHandler(index)} />;
    });

    const appStyle = {
      // transition: 'background 2s ease'
    }

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

    const divStyle = {
      backgroundColor: 'darkgrey',
      transition: 'background 4s ease 3s'
    };

    const classes = []

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div style={divStyle}>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} 
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div> 
      );


    }


    return (
        <div className="App" style={appStyle}>
          <h1 className={classes.join(' ')}>React testing</h1>
          Enter letters here: 
          <input 
            type="text"
            onChange={this.inputChangedHandler}
            value={this.state.userInput} 
            />
            <p>{this.state.userInput}</p>

          <Validation inputLength={this.state.userInput.length} />

          {charList}
          <hr />

          <ButtonStyle 
            alt={this.state.showPersons}
            onClick={this.togglePersonsHandler}>Switch name</ButtonStyle>
          <ButtonStyle
            alt={this.state.currentTime}
            onClick={this.getTime}>Get time</ButtonStyle>
          <p>Current Time: {this.state.currentTime}</p>
          {persons}
          <p className="test">TEST</p>
        </div>
    );
  };
}

export default App;
