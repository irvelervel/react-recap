import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Strive from "./Strive";
import Anything from "./Anything";
import NavBar from "./NavBar";

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = props => {
  // console.log("hello striver");
  return (
    <Router>
      <>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <div>
              <NavBar />
            </div>
            <div>ROUTED COMPONENTS GO HERE</div>
            <Route path="/strive" component={Strive} />
            <Route path="/anything/:id/:type" component={Anything} />
          </header>
        </div>
        <div></div>
      </>
    </Router>
  );
};

export default App;

//camelCase
//thisIsALongSentenceInCamel
//PascalCase
