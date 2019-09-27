import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark navbar-msm">
        <button
          className="navbar-toggler navbar-left collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand navbar-brand-msm" to="/homePage">
          {this.props.siteName}
        </Link>
        <span className="cybageCart-wrap">
          <i
            className="fa fa-shopping-cart cybageCart"
            aria-hidden="true"
            title="cart"
          ></i>
        </span>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/myProfile">
                My Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/addProducts">
                Add Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
Header.defaultProps = {
  siteName: "Cybage Mall"
};

export default Header;
