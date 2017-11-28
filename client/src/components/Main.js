// Include React as a dependency
import React, { Component } from "react";
// Including the Link component from React Router to navigate within our application without full page reloads
import { Link } from "react-router";

import NavBar from "./Navbar"

class Main extends Component {
  render() {
    return (
      <div >
        <NavBar />
        
      </div>
    );
  }
}

export default Main;
