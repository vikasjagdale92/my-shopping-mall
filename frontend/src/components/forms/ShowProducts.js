import React, { Component } from "react";
import { instance } from "../../instance";

class ShowProducts extends Component {
  state = {
    productArr: []
  };
  componentDidMount() {
    instance
      .post("/api/products/productList")
      .then(res => {
        this.setState({
          productArr: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const { productArr } = this.state.productArr;
    return (
      <div className="col-sm-6 col-md-6 productList-outer">
        <div className="col-sm"></div>
      </div>
    );
  }
}

export default ShowProducts;
