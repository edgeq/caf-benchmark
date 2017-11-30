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
        
      </div>
    );
  }
}

export default App;
