import React, { Component } from "react";

import API from "./utils/API";
import NavBar from "./components/Navbar";
import SideBar from "./components/Sidebar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <SideBar />
        <header className="App-header">
     
          <h1 className="App-title">Welcome to CAF Benchmark</h1>
        </header>
        <p className="App-intro">
          This is placeholder. To get started, edit <code>src/App.js</code> and
          save to reload.
        </p>
      </div>
    );
  }
}

export default App;
