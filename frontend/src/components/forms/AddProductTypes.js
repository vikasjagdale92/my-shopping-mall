import React, { Component } from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import Button from "../Button";
import { addProductTypes } from "../../actions/addProducts";

class AddProductTypes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productType: ""
    };
  }

  submitFormData = e => {
    e.preventDefault();
    this.props.addProductTypes(this.state);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  //   static getDerivedStateFromProps(props, state) {
  //     if (props.formValues) {
  //       return {
  //         productType: " "
  //       };
  //     }
  //     return null;
  //   }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.formValues) {
      this.setState({
        productType: " "
      });
    }
  }

  render() {
    const { status } = this.props;
    let val;
    status ? (val = "loading...") : (val = "Add");
    return (
      <div className="col-lg-4 offset-lg-4 col-md-4 offset-md-4 my-shopping-wrapper-reg">
        <div className="col-lg form-wrapper">
          <form onSubmit={this.submitFormData}>
            <div className="input-box-wrap form-group">
              <span className="textInput-label">Enter product type</span>
              <input
                type="text"
                value={this.state.productType}
                name="productType"
                className={classnames("form-control form-control-lg", {
                  "is-invalid": ""
                })}
                onChange={this.handleChange}
                autoFocus
              />
            </div>
            <Button btnType="submit" text={val} />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    status: state.errors.status,
    formValues: state.formData.formValues
  };
};

export default connect(
  mapStateToProps,
  { addProductTypes }
)(AddProductTypes);
