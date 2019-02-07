import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import DataComponent from "./components/dataComponent.jsx";
import "bootstrap/dist/css/bootstrap.css";
import FormsComponent from "./components/formsComponent.jsx";

ReactDOM.render(<FormsComponent />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();