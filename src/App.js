import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'asdf', name: 'Jimbo', age: 10},
      { id: 'asdf2', name: 'Dolph', age: 11},
      { id: 'asdf3', name: 'Kearney', age: 12}
    ],
    showPersons: false
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

  render() {

    const appStyle = {
      background: 'grey',
      transition: 'background 2s ease'
    }

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      borderRadius: '4px',
      padding: '8px'
    };

    const divStyle = {
      backgroundColor: 'darkgrey',
      transition: 'background 4s ease 3s'
    };

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
        <h1>React testing</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Switch name</button>
        {persons}
      </div>
    );
  };
}

export default App;
