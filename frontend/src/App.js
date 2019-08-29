import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";
import Register from "../src/components/Register";
import Login from "../src/components/Login";
import HomePage from "../src/components/HomePage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/homepage" component={HomePage} />
      </Router>
    </Provider>
  );
}

export default App;
