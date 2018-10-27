import React, { Component } from 'react';

import './App.css';
import Login from './containers/login'
import NavBar from './components/navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <section>
          <h1>News4U</h1>
          <Login />
        </section>
      </div>
    );
  }
}

export default App;
