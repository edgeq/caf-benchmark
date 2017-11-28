// Include the Main React Dependencies
// import React from "react";
import ReactDOM from "react-dom";

// Grabs the Routes
import routes from "./config/routes";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(routes, document.getElementById("root"));
registerServiceWorker();
