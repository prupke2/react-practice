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

  switchNameHandler = (newName) => {
    this.setState({persons: [
      { name: newName, age: 20},
      { name: 'Dolph2', age: 21},
      { name: 'Kearney2', age: 22}     
      ]
    })
  } 

  nameChangeHandler = (event) => {
    this.setState({persons: [
      { name: event.target.value, age: 20},
      { name: 'Dolph', age: 11},
      { name: 'Kearney', age: 12}    
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>React testing</h1>
        <button onClick={() => this.switchNameHandler('new name') }>Switch name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
          click={this.switchNameHandler.bind(this, 'new name2')}
          changed={this.nameChangeHandler} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}>Child text</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />

      </div>
    );
  };
}

export default App;
