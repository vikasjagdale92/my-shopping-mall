import React, { Component } from "react";
import ProductTypeList from "./ProductTypeList";
import classnames from "classnames";
import { connect } from "react-redux";
import Button from "../Button";
import { addProducts } from "../../actions/addProducts";

class AddProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productTitle: "",
      productShortDescription: "",
      productLongDescription: "",
      productType: "",
      productPrize: ""
    };
  }
  submitFormData = e => {
    e.preventDefault();
    this.props.addProducts(this.state);
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  getProductTypeFun = productType => {
    this.setState({
      productType: productType
    });
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
    if (nextProps.formValues) {
      this.setState({
        productName: "",
        productTitle: "",
        productShortDescription: "",
        productLongDescription: "",
        productType: "",
        productPrize: ""
      });
    }
  }

  render() {
    const { errors } = this.props.allErrorsState;
    return (
      <div className="col-lg-4 offset-lg-4 col-md-4 offset-md-4 my-shopping-wrapper-reg">
        <div className="col-lg form-wrapper">
          <form onSubmit={this.submitFormData}>
            <div className="input-box-wrap form-group">
              <span className="textInput-label">Enter product Name</span>
              <input
                type="text"
                value={this.state.productName}
                name="productName"
                className={classnames("form-control form-control-lg", {
                  "is-invalid": errors.productName
                })}
                onChange={this.handleChange}
                autoFocus
              />
              {errors.productName && (
                <div className="invalid-feedback">{errors.productName}</div>
              )}
            </div>

            <div className="input-box-wrap form-group">
              <span className="textInput-label">Enter Title </span>
              <input
                type="text"
                value={this.state.productTitle}
                name="productTitle"
                className={classnames("form-control form-control-lg", {
                  "is-invalid": ""
                })}
                onChange={this.handleChange}
              />
            </div>

            <ProductTypeList
              selectText="Product Type"
              getProductType={this.getProductTypeFun}
            />

            <div className="input-box-wrap form-group">
              <span className="textInput-label">Enter Product Prize</span>
              <input
                type="number"
                value={this.state.productPrize}
                name="productPrize"
                className={classnames("form-control form-control-lg", {
                  "is-invalid": ""
                })}
                onChange={this.handleChange}
              />
            </div>

            <div className="input-box-wrap form-group">
              <span className="textInput-label">
                Enter Product Short Description
              </span>
              <input
                type="text"
                value={this.state.productShortDescription}
                name="productShortDescription"
                className={classnames("form-control form-control-lg", {
                  "is-invalid": ""
                })}
                onChange={this.handleChange}
              />
            </div>

            <div className="input-box-wrap form-group">
              <span className="textInput-label">
                Enter Product Long Description
              </span>
              <textarea
                type="text"
                value={this.state.productLongDescription}
                name="productLongDescription"
                className={classnames("form-control form-control-lg", {
                  "is-invalid": ""
                })}
                onChange={this.handleChange}
              />
            </div>
            <Button text="Add Product" />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    allErrorsState: state.errors,
    formValues: state.formData.formValues
  };
};

export default connect(
  mapStateToProps,
  { addProducts }
)(AddProducts);

// media (books, DVDs, music CDs, videotapes, and software),
//apparel,
//baby products,
//consumer electronics,
//beauty products,
//gourmet food,
//groceries,
//health and personal-care items,
//industrial & scientific supplies,
//kitchen items,
//jewelry and watches,
//lawn and garden items,
//musical ...
