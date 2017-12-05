import React, {
  Component
} from 'react'
import {
  Route,
  BrowserRouter,
  Link,
  Redirect,
  withRouter,
  Switch
} from 'react-router-dom'
import NavBar from './Navbar'
import Login from './Login'
import Register from './Register'
import Dashboard from './protected/Dashboard'
import {
  logout
} from '../helpers/auth'
import {
  firebaseAuth
} from '../config/constants'

function PrivateRoute({
  component: Component,
  authed,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/dashboard', state: {from: props.location}}} />
  }
  />
)
}

function PublicRoute({
  component: Component,
  authed,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />: <Redirect to='/' />
  }
  />
)
}

export default class App extends Component {
  state = {
    authed: false,
    loading: true,
  }
  componentDidMount() {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,

        })

      } else {
        this.setState({
          authed: false,
          loading: false,

        })
      }
    })
  }
  componentWillUnmount() {
    this.removeListener()
  }
  render() {

    return this.state.loading === true ? <h1>Loading</h1> : (
      <div className="container-fluid">
        <BrowserRouter>
          <div>
            <nav className="navbar navbar-inverse bg-inverse animated slideInLeft col-sm-12">
              <div className="navbar-brand">
                <Link to="/dashboard"><img src="img/logo_caf_icon_white.png" href="#index.html" height="30px" alt="CAF Benchmark"></img> Benchmark</Link>
              </div>


              <ul className="nav navbar-nav pull-right">
                <li>
                  {this.state.authed
                    ?
                      <button onClick={() => {
                        logout()

                      }}
                      className="btn btn-danger navbar-brand">Logout</button>
                    : <span>
                      <Link to="/login" className="navbar-brand">Login</Link>
                      <Link to="/register" className="navbar-brand">Register</Link>
                    </span>}
                </li>
              </ul>
            </nav>
            <div className="container">
              <div className="row">
                <Switch>
                  <Route path='/' exact component={Login} />

                  <PrivateRoute authed={this.state.authed} path='/dashboard' component={Dashboard} />
                  <Route render={() => <h3>No Match</h3>} />
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
