import React, { Component } from 'react';
import logo_caf_icon_white from './logo_caf_icon_white.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo_caf_icon_white} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to CAF Benchmark</h1>
        </header>
        <p className="App-intro">
          This is placeholder. To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
