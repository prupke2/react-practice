import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>React testing</h1>
      <Person name="Jimbo" age="10"/>
      <Person name="Dolph" age="11"> child text</Person>
      <Person name="Kearney" age="12"/>
    </div>
  );
}

export default App;
