import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Shops from "./pages/Shops";
import Promotion from "./pages/Promotion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Shop">
          <Shops />
        </Route>
        <Route path="/Promotion">
          <Promotion />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
