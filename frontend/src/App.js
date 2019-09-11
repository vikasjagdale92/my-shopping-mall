import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";
import Register from "../src/components/login/Register";
import Login from "../src/components/login/Login";
import Header from "../src/components/common/Header";
import HomePage from "./components/homepage/HomePage";
import AddProducts from "./components/forms/AddProducts";
import AddProductTypes from "./components/forms/AddProductTypes";

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <Header /> */}
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/homepage" component={HomePage} />
        <Route exact path="/addProducts" component={AddProducts} />
        <Route exact path="/addProductTypes" component={AddProductTypes} />
      </Router>
    </Provider>
  );
}

export default App;
