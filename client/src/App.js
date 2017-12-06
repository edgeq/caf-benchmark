import React, { Component } from "react";

import API from "./utils/API";
import NavBar from "./components/Navbar";
import SideBar from "./components/Sidebar";
import Content from "./components/Content";


class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="container-fluid">
          <div className="row">
            {/* <NavBar /> */}
          </div>
          {/* <div className="row">
            <SideBar />
          <Content /> */}
        </div>
      </div>
    );
  }
}

export default App;
