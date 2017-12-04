import React, { Component } from "react";
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import App from '../App'
import Login from './Login' //need to make
import Register from './Register' //need to make
import API from "../utils/API";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import Content from "./Content";
import { logout } from '../helpers/auth' // need to mkdir helpers
import { firebaseAuth } from '../config/constants.js'

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/' />}
    />
  )
}

const NavBar = () => {
	return (
		      <BrowserRouter>
						<div>
							<nav className="navbar navbar-inverse bg-inverse animated slideInLeft col-sm-12">
								<div className="container">
									<div className="navbar-header">
										<Link to="/" className="navbar-brand" href="#">
											<img src="img/logo_caf_icon_white.png" href="#index.html" height="30px" alt="CAF"></img>
										</Link>
									</div>
                  <ul>
                    <a><Link to="/" className="" href="#">Login   </Link></a><span />
                    <a><Link to="/" className="" href="#">Sign Out   </Link></a><span />
                    <a><Link to="/" className="active" href="#">Benchmark   </Link></a><span />
                  </ul>
								</div>
							</nav>
							<div className="container">
								<div className="row">
									<Switch>
										{/* <Route path='/' exact component={Login} /> */}
										{/* <PublicRoute authed={this.state.authed} path='/login' component={Login} />
                      <PublicRoute authed={this.state.authed} path='/register' component={Register} />
										<PrivateRoute authed={this.state.authed} path='/login' component={Login} /> */}
										<Route render={() => <h3>No Match</h3>} />
									</Switch>
								</div>
							</div>
						</div>
					</BrowserRouter>
	);
};

export default NavBar;
