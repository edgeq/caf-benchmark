// Include React as a dependency
import React, { Component } from "react";
// Including the Link component from React Router to navigate within our application without full page reloads
import { Link } from "react-router";

import NavBar from "./Navbar";
import Sidebar from "./Sidebar";

class Main extends Component {
  render() {
    return (
      <div >
        <NavBar />
        <Sidebar />
      </div>
    );
  }
}

export default Main;
