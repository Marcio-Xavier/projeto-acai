import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap-spacelab.min.css";
import "bootstrap/dist/css/bootstrap-spacelab.css";
import "jquery/dist/jquery.min.js";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
