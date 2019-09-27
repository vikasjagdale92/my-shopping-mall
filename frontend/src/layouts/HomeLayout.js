import React from "react";
import { Route } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const HomeLayout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

const HomeLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        <HomeLayout>
          <Component {...props} />
        </HomeLayout>
      )}
    />
  );
};

export default HomeLayoutRoute;
