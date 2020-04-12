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
    ],
    showPersons: false
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

  togglePersonsHandler = () => {
    const showPersons = this.state.showPersons;
    this.setState({showPersons: !showPersons});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      borderRadius: '4px',
      padding: '8px'
    };

    return (
      <div className="App">
        <h1>React testing</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Switch name</button>
        { 
          this.state.showPersons ? 
            <div>
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
            </div> : null 
        }
      </div>
    );
  };
}

export default App;
