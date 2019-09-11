import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../actions";
import classnames from "classnames";
import Button from "../Button";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitFormData = event => {
    event.preventDefault();
    const formValues = this.state;
    this.props.loginUser(formValues, this.props.history);
  };

  render() {
    const { status, errors } = this.props.allState.errors;
    console.log("loading --> ", status);
    let val;
    status ? (val = " loading...") : (val = "Sign In");
    return (
      <div className="col-lg-4 offset-lg-4 col-md-4 offset-md-4 my-shopping-wrapper-reg">
        <div className="col-lg form-wrapper">
          <form onSubmit={this.submitFormData}>
            <div className="logo-wrap">
              <img src="/images/app-icon.png" alt="logo" />
              <h6 id="appName">My Shopping Mall</h6>
            </div>

            <div className="input-box-wrap form-group">
              <span className="textInput-label">Enter email address</span>
              <input
                type="text"
                state={this.state.email}
                name="email"
                className={classnames("form-control form-control-lg", {
                  "is-invalid": errors.loginEmail
                })}
                onChange={this.handleChange}
                autoFocus
              />
              {errors.loginEmail && (
                <div className="invalid-feedback">{errors.loginEmail}</div>
              )}
            </div>

            <div className="input-box-wrap">
              <span className="textInput-label">Enter password</span>
              <input
                type="text"
                state={this.state.password}
                name="password"
                className={classnames("form-control form-control-lg", {
                  "is-invalid": errors.loginPassword
                })}
                onChange={this.handleChange}
              />
              {errors.loginPassword && (
                <div className="invalid-feedback">{errors.loginPassword}</div>
              )}
            </div>

            <Button text={val} />
            <Button btnType="button" BTClass="link form-control" text="">
              <Link to="/register">Create new account</Link>
            </Button>
            <Button
              btnType="button"
              text="Forgot Password"
              BTClass="link form-control"
            />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state data is ---> ", state);
  return {
    allState: state
  };
};

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
