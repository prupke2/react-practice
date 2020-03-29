import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Jimbo', age: 10},
      { name: 'Dolph', age: 11},
      { name: 'Kearney', age: 12}
    ]
  };

  render() {

    return (
      <div className="App">
        <h1>React testing</h1>
        <button>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name="Dolph" age="11"> child text</Person>
        <Person name="Kearney" age="12"/>
      </div>
    );
  };
}

export default App;
