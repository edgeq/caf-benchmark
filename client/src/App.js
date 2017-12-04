import React, { Component } from "react";
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import Login from './components/Login' //need to make
import Register from './components/Register' //need to make
// import Dashboard from './protected/Dashboard' //need mkdir protected and move Content, Navbar, and Sidebar into it.

import API from "./utils/API";
import NavBar from "./components/Navbar";
import SideBar from "./components/Sidebar";
import Content from "./components/Content";
import { logout } from './helpers/auth' // need to mkdir helpers
import { firebaseAuth } from './config/constants.js'

// function PrivateRoute ({component: Component, authed, ...rest}) {
//   return (
//     <Route
//       {...rest}
//       render={(props) => authed === true
//         ? <Component {...props} />
//         : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
//     />
//   )
// }
//
// function PublicRoute ({component: Component, authed, ...rest}) {
//   return (
//     <Route
//       {...rest}
//       render={(props) => authed === false
//         ? <Component {...props} />
//         : <Redirect to='/dashboard' />}
//     />
//   )
// }

class App extends Component {
  state = {
    authed: false,
    loading: true,
  }
  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }
  render() {
    return this.state.loading === true ? <h1>Loading</h1> : (

        <div className="App">

          <div className="container-fluid">
            <div className="row">
              <NavBar />
            </div>
            <div className="row">
              <SideBar />
              <Content />
            </div>
          </div>
        </div>

    );
  }
}

export default App;
