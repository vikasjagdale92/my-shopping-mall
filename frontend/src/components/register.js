import React, { Component } from "react";
import { connect } from "react-redux";
import { regitserUser } from "../actions";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: ""
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
    this.props.regitserUser(formValues);
  };

  render() {
    const loading = this.props.allState.data.status;
    const val;
    loading === "Loading..." ? (val = loading) : (val = "Submit");
    return (
      <div className="col-lg-6 col-md-6">
        <form onSubmit={this.submitFormData}>
          <input
            type="text"
            state={this.state.name}
            name="name"
            onChange={this.handleChange}
          />
          <input
            type="text"
            state={this.state.email}
            name="email"
            onChange={this.handleChange}
          />
          <input
            type="text"
            state={this.state.mobile}
            name="mobile"
            onChange={this.handleChange}
          />
          <input
            type="text"
            state={this.state.password}
            name="password"
            onChange={this.handleChange}
          />
          <input
            type="text"
            state={this.state.confirmPassword}
            name="confirmPassword"
          />
          <input type="submit" value={val} />
        </form>
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
