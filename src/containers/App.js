import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../containers/App.css';
import Persons from '../components/Persons/Persons';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Char from '../components/CharComponent/Char';
import Validation from '../components/ValidationComponent/Validation';
import Cockpit from '../components/Cockpit/Cockpit';
import styled from 'styled-components';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js constructor');
  }

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

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js getDerivedStateFromProps', props);
    return state;
  }
  
  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  getTime = () => {
    console.log(this.state.persons);
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

    console.log('[App.js] render');

    const charList = this.state.userInput.split('').map((char, index) => {
      return <Char character={char} 
      key={index} 
      clicked={() => this.deleteCharHandler(index)} />;
    });

    const appStyle = {
      // transition: 'background 2s ease'
    }



    const divStyle = {
      backgroundColor: 'darkgrey',
      transition: 'background 4s ease 3s'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons 
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangeHandler} />
        </div>
      );
    }


    return (
        <div className="App" style={appStyle}>
          <Cockpit 
          inputChanged = {this.inputChangedHandler}
          userInput = {this.state.userInput}
          showPersons = {this.state.showPersons}
          clicked = {this.togglePersonsHandler}
          currentTime = {this.state.currentTime}
          getTime = {this.getTime}
          />
          <p>{persons}</p>
          <p>{charList}</p>
        </div>
    );
  };
};

export default App;
