import React from "react";
import ReactDOM from "react-dom";
// import App from "./components/App"; // tuka imas gresna pateka, primer vo components folder nemas App file
import App from "./App" // Ovaja e tocna pateka
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

newFunction();
function newFunction() {
  serviceWorker.register();
}
