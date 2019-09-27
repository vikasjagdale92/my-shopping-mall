import React, { Component } from "react";
import { instance } from "../../instance";
import { Link } from "react-router-dom";

class ProductTypeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productTypesArr: []
    };
  }

  componentDidMount() {
    instance.get("/api/productTypes/getProductTypes").then(res => {
      this.setState({
        productTypesArr: res.data,
        productType: ""
      });
    });
  }

  handleChange = event => {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      () => {
        this.props.getProductType(this.state.productType);
      }
    );
  };

  render() {
    const { selectText } = this.props;
    let productTypes = this.state.productTypesArr;
    // let show;
    // productTypes.length > 0 ? (show = false) : (show = true);
    return (
      <div>
        <div className="input-box-wrap form-group">
          <label className="textInput-label">Select {selectText}</label>
          <span className="addItemsIcon">
            <Link to="/addProductTypes" title="Click to add product types">
              +
            </Link>{" "}
          </span>
          <select
            className="form-control"
            name="productType"
            value={this.state.productType}
            onInput={this.handleChange}
          >
            {productTypes.map((val, index) => {
              return (
                <option key={index} value={val.productType}>
                  {val.productType}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    );
  }
}
ProductTypeList.defaultProps = {
  selectText: ""
};

export default ProductTypeList;
