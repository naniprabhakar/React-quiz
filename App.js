import logo from './logo.svg';
import './App.css';


import React, { Component } from 'react'
import Quiz from './Quiz';

 class App extends Component {
  render() {
    return (
      <div className="App">

          <Quiz/>
          
      </div>
    );
  }
 }
export default App;