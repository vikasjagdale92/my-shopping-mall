import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { regitserUser } from "../actions";
import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      mobile: "",
      password: "",
      password_confirm: ""
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
    this.props.regitserUser(formValues, this.props.history);
  };

  render() {
    const { loading, errors } = this.props.allState.data;
    let val;
    loading === "Loading..." ? (val = loading) : (val = "Submit");
    return (
      <div className="col-lg-4 offset-lg-4 col-md-4 offset-md-4 my-shopping-wrapper-reg">
        <div className="col-lg form-wrapper">
          <form onSubmit={this.submitFormData}>
            <div className="logo-wrap">
              <img src="/images/app-icon.png" alt="logo" />
              <h6>My Shopping Mall</h6>
            </div>

            <div className="input-box-wrap form-group">
              <span className="textInput-label">Enter full name</span>
              <input
                type="text"
                state={this.state.name}
                name="name"
                className={classnames("form-control form-control-lg", {
                  "is-invalid": errors.name
                })}
                onChange={this.handleChange}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>

            <div className="input-box-wrap form-group">
              <span className="textInput-label">Enter email address</span>
              <input
                type="text"
                state={this.state.email}
                name="email"
                className={classnames("form-control form-control-lg", {
                  "is-invalid": errors.email
                })}
                onChange={this.handleChange}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>

            <div className="input-box-wrap form-group">
              <span className="textInput-label">Enter mobile number</span>
              <input
                type="text"
                state={this.state.mobile}
                name="mobile"
                className={classnames("form-control form-control-lg", {
                  "is-invalid": errors.mobile
                })}
                onChange={this.handleChange}
              />
              {errors.mobile && (
                <div className="invalid-feedback">{errors.mobile}</div>
              )}
            </div>

            <div className="input-box-wrap form-group">
              <span className="textInput-label">Enter password</span>
              <input
                type="password"
                state={this.state.password}
                name="password"
                className={classnames("form-control form-control-lg", {
                  "is-invalid": errors.password
                })}
                onChange={this.handleChange}
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>

            <div className="input-box-wrap form-group">
              <span className="textInput-label">Enter confirm password</span>
              <input
                type="password"
                state={this.state.password_confirm}
                name="password_confirm"
                className={classnames("form-control form-control-lg", {
                  "is-invalid": errors.password_confirm
                })}
                onChange={this.handleChange}
              />
              {errors.password_confirm && (
                <div className="invalid-feedback">
                  {errors.password_confirm}
                </div>
              )}
            </div>

            <button type="submit" className="form-control btn btn-primary">
              {val}
            </button>

            <button type="button" className="form-control btn btn-link">
              <Link to="/">Back to login</Link>
            </button>
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
  { regitserUser }
)(Register);
