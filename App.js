import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Front} from './components/Front'
import {Back} from './components/Back'
import GitHub from './components/Github.js';
import Background from './components/Background.js';


class App extends Component {
  
 constructor(){
   super();
 }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="container">
          <div className="row">              
          </div>
          <GitHub username="edisonjude90"></GitHub>
          
          <Background />
          
        </div>
      </div>
      
    );
  }
}

export default App;
