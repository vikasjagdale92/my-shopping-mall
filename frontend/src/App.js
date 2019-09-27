import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";

/** Layouts **/

import LoginLayoutRoute from "./layouts/LoginLayout";
import HomeLayoutRoute from "./layouts/HomeLayout";

/** Components **/
import { Provider } from "react-redux";
import store from "./store";
import Register from "../src/components/login/Register";
import Login from "../src/components/login/Login";
import HomePage from "./components/homepage/HomePage";
import MyProfile from "./components/homepage/MyProfile";
import AddProducts from "./components/forms/AddProducts";
import AddProductTypes from "./components/forms/AddProductTypes";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <LoginLayoutRoute exact path="/" component={Login} />
          <LoginLayoutRoute path="/login" component={Login} />
          <LoginLayoutRoute path="/register" component={Register} />
          <HomeLayoutRoute path="/homepage" component={HomePage} />
          <HomeLayoutRoute path="/addProducts" component={AddProducts} />
          <HomeLayoutRoute
            path="/addProductTypes"
            component={AddProductTypes}
          />
          <HomeLayoutRoute path="/myProfile" component={MyProfile} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
