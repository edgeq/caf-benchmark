// Inclue the React library
import React from "react";

// Include the react-router module
// Include the Route component
// Include the IndexRoute (catch-all route)
// Include the Router component
// Include the browserHistory prop to configure client side routing
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserhistory
import { Route, IndexRoute, Router, browserHistory } from "react-router";

// Reference the high-level components
import Main from "../components/Main";
// import Search from "../components/Search";
// import Saved from "../components/Saved";

// Export the Routes
export default (
  // High level component is the Router component.
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
        
    
    </Route>
  </Router>
);

//   {/* If user selects Search or Saved show the appropriate component */}
//   <Route path="Search" component={Search} />
//   <Route path="Saved" component={Saved} />

//   {/* If user selects any other path... we get the Home Route */}
//   <IndexRoute component={Search} />
